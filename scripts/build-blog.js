const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'blog');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'blogPosts.ts');
const PUBLIC_IMAGES_DIR = path.join(__dirname, '..', 'public', 'blog-images');

const SUPPORTED_LANGUAGES = ['es', 'en'];

function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { metadata: {}, content: content };
  }
  
  const yamlStr = match[1];
  const markdownContent = match[2];
  
  const metadata = {};
  const lines = yamlStr.split('\n');
  let currentKey = null;
  let currentArray = null;
  let inImageBlock = false;
  let imageBlock = {};
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    if (inImageBlock) {
      if (trimmed.startsWith('- ') && currentArray !== null) {
        currentArray.push(trimmed.slice(2).replace(/^["']|["']$/g, ''));
      } else if (trimmed.startsWith('  ') && trimmed.includes(':')) {
        const [, key, ...valueParts] = trimmed.split(':');
        const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
        if (key) imageBlock[key.trim()] = value;
      } else if (trimmed === '' || !trimmed.startsWith(' ')) {
        if (Object.keys(imageBlock).length > 0) {
          metadata.image = imageBlock;
        }
        inImageBlock = false;
        imageBlock = {};
      }
      continue;
    }
    
    if (trimmed.startsWith('- ') && currentArray !== null) {
      currentArray.push(trimmed.slice(2).replace(/^["']|["']$/g, ''));
    } else if (trimmed.includes(':')) {
      const colonIndex = trimmed.indexOf(':');
      const key = trimmed.slice(0, colonIndex).trim();
      let value = trimmed.slice(colonIndex + 1).trim();
      
      if (key === 'image' && (value === '' || value === '""' || value === "''")) {
        inImageBlock = true;
        imageBlock = {};
        continue;
      }
      
      if (value.startsWith('[')) {
        currentKey = key;
        
        if (value.endsWith(']')) {
          let arrContent = value.slice(1, -1);
          arrContent = arrContent.trim();
          
          if (arrContent) {
            let items = [];
            const firstQuote = arrContent.match(/^["']/);
            
            if (firstQuote) {
              const quoteChar = firstQuote[0];
              if (arrContent.endsWith(quoteChar) && arrContent.length > 1) {
                const inner = arrContent.slice(1, -1);
                items = inner.split(',').map(s => s.trim());
              } else {
                items = arrContent.split(',').map(s => s.trim());
              }
            } else {
              items = arrContent.split(',').map(s => s.trim());
            }
            
            metadata[key] = items.map(item => {
              item = item.replace(/^"(.*)"$/, '$1');
              item = item.replace(/^'(.*)'$/, '$1');
              return item;
            }).filter(s => s);
          } else {
            metadata[key] = [];
          }
          currentKey = null;
          currentArray = null;
        } else {
          currentArray = [];
          metadata[key] = currentArray;
          
          const restOfLine = value.slice(1).trim();
          if (restOfLine) {
            currentArray.push(restOfLine.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1'));
          }
        }
      } else if (value === '' || value.startsWith('-')) {
        currentKey = key;
        currentArray = [];
        metadata[key] = currentArray;
        
        if (value.startsWith('- ')) {
          currentArray.push(value.slice(2).replace(/^["']|["']$/g, ''));
        }
      } else if (value) {
        metadata[key] = value.replace(/^["']|["']$/g, '');
        currentKey = null;
        currentArray = null;
      }
    }
  }
  
  if (inImageBlock && Object.keys(imageBlock).length > 0) {
    metadata.image = imageBlock;
  }
  
  return { metadata, content: markdownContent };
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

function getPostFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const mdFiles = entries.filter(e => e.isFile() && e.name.endsWith('.md'));
  const images = entries.filter(e => {
    const ext = path.extname(e.name).toLowerCase();
    return e.isFile() && ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext);
  });

  const langFiles = {};
  for (const lang of SUPPORTED_LANGUAGES) {
    const indexFile = mdFiles.find(f => f.name === `index.${lang}.md`);
    if (indexFile) {
      langFiles[lang] = path.join(dir, indexFile.name);
    } else {
      const genericFile = mdFiles.find(f => f.name === `${lang}.md`);
      if (genericFile) {
        langFiles[lang] = path.join(dir, genericFile.name);
      }
    }
  }

  if (Object.keys(langFiles).length === 0) {
    let mainMdFile = mdFiles.find(f => f.name === 'index.md');
    if (!mainMdFile) {
      mainMdFile = mdFiles[0];
    }
    if (mainMdFile) {
      langFiles['es'] = path.join(dir, mainMdFile.name);
    }
  }

  return {
    langFiles: langFiles,
    images: images.map(i => path.join(dir, i.name))
  };
}

function copyImages(postDir, postSlug) {
  if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
    fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
  }
  
  const postImagesDir = path.join(PUBLIC_IMAGES_DIR, postSlug);
  if (!fs.existsSync(postImagesDir)) {
    fs.mkdirSync(postImagesDir, { recursive: true });
  }
  
  const entries = fs.readdirSync(postDir, { withFileTypes: true });
  const images = entries.filter(e => {
    const ext = path.extname(e.name).toLowerCase();
    return e.isFile() && ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext);
  });
  
  const copiedImages = [];
  for (const image of images) {
    const src = path.join(postDir, image.name);
    const dest = path.join(postImagesDir, image.name);
    fs.copyFileSync(src, dest);
    copiedImages.push(image.name);
  }
  
  return copiedImages;
}

function processContent(content, postSlug, copiedImages) {
  content = content.replace(/{{<\s*figure\s+src="([^"]+)"\s+title="([^"]+)"[^>]*>}}/g, (match, src, title) => {
    return `![${title}](/blog-images/${postSlug}/${src})`;
  });
  
  content = content.replace(/{{<\s*figure\s+src="([^"]+)"[^>]*>}}/g, (match, src) => {
    return `![${src}](/blog-images/${postSlug}/${src})`;
  });

  if (copiedImages.length > 0) {
    for (const image of copiedImages) {
      const regex = new RegExp(`\\(${image}\\)`, 'g');
      content = content.replace(regex, `(/blog-images/${postSlug}/${image})`);
      const regex2 = new RegExp(`:${image}[:\"]`, 'g');
      content = content.replace(regex2, `:/blog-images/${postSlug}/${image}":`);
      const regex3 = new RegExp(`\\[([^\\]]+)\\]\\(${image}\\)`, 'g');
      content = content.replace(regex3, `[$1](/blog-images/${postSlug}/${image})`);
    }
  }
  return content;
}

function getPostTitleFromMetadata(metadata, lang) {
  if (metadata.title) {
    if (typeof metadata.title === 'object') {
      return metadata.title[lang] || metadata.title.es || Object.values(metadata.title)[0] || 'Untitled';
    }
    return metadata.title;
  }
  return 'Untitled';
}

function getPostFieldFromMetadata(metadata, field, lang, defaultValue = '') {
  if (metadata[field]) {
    if (typeof metadata[field] === 'object') {
      return metadata[field][lang] || metadata[field].es || Object.values(metadata[field])[0] || defaultValue;
    }
    return metadata[field];
  }
  if (metadata[field + 's']) {
    const arr = metadata[field + 's'];
    if (Array.isArray(arr)) {
      return arr[0] || defaultValue;
    }
  }
  return defaultValue;
}

function buildBlogPosts() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`Directory not found: ${CONTENT_DIR}`);
    process.exit(1);
  }
  
  const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
  const posts = [];
  let id = 1;
  
  for (const entry of entries) {
    const entryPath = path.join(CONTENT_DIR, entry.name);
    
    let langFiles = {};
    let postDir = null;
    let postSlug = entry.name;
    
    if (entry.isDirectory()) {
      const { langFiles: foundLangFiles, images } = getPostFiles(entryPath);
      if (Object.keys(foundLangFiles).length > 0) {
        langFiles = foundLangFiles;
        postDir = entryPath;
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const lang = entry.name.replace('.md', '');
      if (SUPPORTED_LANGUAGES.includes(lang)) {
        langFiles[lang] = entryPath;
        postSlug = lang;
      } else {
        langFiles['es'] = entryPath;
        postSlug = entry.name.replace('.md', '');
      }
    }
    
    if (Object.keys(langFiles).length === 0) {
      continue;
    }
    
    let copiedImages = [];
    if (postDir) {
      copiedImages = copyImages(postDir, postSlug);
    }
    
    const postData = {
      id: id++,
      title: {},
      excerpt: {},
      author: {},
      date: {},
      readTime: {},
      category: {},
      image: '',
      tags: { es: [], en: [] },
      content: {}
    };
    
    for (const lang of SUPPORTED_LANGUAGES) {
      if (!langFiles[lang]) continue;
      
      const fileContent = fs.readFileSync(langFiles[lang], 'utf8');
      let { metadata, content } = parseFrontmatter(fileContent);
      
      content = processContent(content, postSlug, copiedImages);
      
      postData.title[lang] = getPostTitleFromMetadata(metadata, lang);
      postData.excerpt[lang] = getPostFieldFromMetadata(metadata, 'excerpt', lang) || getPostFieldFromMetadata(metadata, 'summary', lang);
      postData.author[lang] = getPostFieldFromMetadata(metadata, 'author', lang, 'LIDSOL');
      postData.date[lang] = getPostFieldFromMetadata(metadata, 'date', lang);
      postData.readTime[lang] = getPostFieldFromMetadata(metadata, 'readTime', lang, '5 min');
      postData.category[lang] = getPostFieldFromMetadata(metadata, 'category', lang) || 'General';
      postData.content[lang] = content;
      
      if (metadata.tags && Array.isArray(metadata.tags)) {
        postData.tags[lang] = metadata.tags;
      }
    }
    
    if (postData.title.es && !postData.title.en) {
      postData.title.en = postData.title.es;
      postData.excerpt.en = postData.excerpt.es;
      postData.author.en = postData.author.es;
      postData.date.en = postData.date.es;
      postData.readTime.en = postData.readTime.es;
      postData.category.en = postData.category.es;
      postData.content.en = postData.content.es;
    }
    
    if (postData.tags.es.length > 0 && postData.tags.en.length === 0) {
      postData.tags.en = postData.tags.es;
    } else if (postData.tags.en.length > 0 && postData.tags.es.length === 0) {
      postData.tags.es = postData.tags.en;
    } else if (postData.tags.es.length === 0 && postData.tags.en.length === 0) {
      postData.tags.es = ['General'];
      postData.tags.en = ['General'];
    }
    
    let image = '';
    if (postDir) {
      const possibleImageNames = ['featured.png', 'featured.jpg', 'featured.jpeg', 'featured.gif'];
      for (const imgName of possibleImageNames) {
        const imgPath = path.join(postDir, imgName);
        if (fs.existsSync(imgPath)) {
          image = `/blog-images/${postSlug}/${imgName}`;
          break;
        }
      }
    }
    postData.image = image;
    
    if (!postData.date.es) {
      const dateMatch = postData.content.es ? postData.content.es.match(/date:\s*(\d{4}-\d{2}-\d{2})/) : null;
      if (dateMatch) {
        postData.date.es = formatDate(dateMatch[1]);
        postData.date.en = formatDate(dateMatch[1]);
      } else {
        const now = new Date();
        postData.date.es = formatDate(now.toISOString());
        postData.date.en = formatDate(now.toISOString());
      }
    }
    
    if (typeof postData.author.es === 'string') {
      const authorEs = postData.author.es;
      postData.author = { es: authorEs, en: authorEs };
    }
    
    posts.push(postData);
  }
  
  if (posts.length === 0) {
    console.log('No markdown files found in content/blog');
    return;
  }
  
  posts.sort((a, b) => new Date(b.date.es) - new Date(a.date.es));
  
  const tsContent = `export const blogPosts = ${JSON.stringify(posts, null, 2)};
`;
  
  fs.writeFileSync(OUTPUT_FILE, tsContent);
  console.log(`Generated ${OUTPUT_FILE} with ${posts.length} posts`);
}

buildBlogPosts();
