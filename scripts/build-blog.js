const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'blog');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'blogPosts.ts');
const PUBLIC_IMAGES_DIR = path.join(__dirname, '..', 'public', 'blog-images');

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
          const arrContent = value.slice(1, -1);
          if (arrContent.trim()) {
            metadata[key] = arrContent.split(',').map(s => {
              let item = s.trim().replace(/^"(.*)"$/, '$1');
              item = item.replace(/^'(.*)'$/, '$1');
              return item;
            });
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
  
  let mainMdFile = mdFiles.find(f => f.name === 'index.md');
  if (!mainMdFile) {
    mainMdFile = mdFiles[0];
  }
  
  return {
    mdFile: mainMdFile ? path.join(dir, mainMdFile.name) : null,
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
  // Process Hugo shortcodes: {{< figure src="..." title="..." >}} -> ![title](/blog-images/...)
  content = content.replace(/{{<\s*figure\s+src="([^"]+)"\s+title="([^"]+)"[^>]*>}}/g, (match, src, title) => {
    return `![${title}](/blog-images/${postSlug}/${src})`;
  });
  
  // Handle shortcodes without title
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
    
    let mdFile = null;
    let postDir = null;
    let postSlug = entry.name;
    
    if (entry.isDirectory()) {
      const { mdFile: foundMd, images } = getPostFiles(entryPath);
      if (foundMd) {
        mdFile = foundMd;
        postDir = entryPath;
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      mdFile = entryPath;
      postSlug = entry.name.replace('.md', '');
    }
    
    if (!mdFile) {
      continue;
    }
    
    let copiedImages = [];
    if (postDir) {
      copiedImages = copyImages(postDir, postSlug);
    }
    
    const fileContent = fs.readFileSync(mdFile, 'utf8');
    let { metadata, content } = parseFrontmatter(fileContent);
    
    content = processContent(content, postSlug, copiedImages);
    
    let author = metadata.author || metadata.authors?.[0] || 'Unknown';
    if (Array.isArray(author)) {
      author = author[0];
    }
    
    let image = '';
    if (metadata.image) {
      if (typeof metadata.image === 'string') {
        image = metadata.image;
      } else if (metadata.image.caption) {
        image = '';
      }
    }
    
    if (!image) {
      const possibleImageNames = ['featured.png', 'featured.jpg', 'featured.jpeg', 'featured.gif'];
      if (postDir) {
        for (const imgName of possibleImageNames) {
          const imgPath = path.join(postDir, imgName);
          if (fs.existsSync(imgPath)) {
            image = `/blog-images/${postSlug}/${imgName}`;
            break;
          }
        }
      }
    }
    
    posts.push({
      id: id++,
      title: metadata.title || 'Untitled',
      excerpt: metadata.excerpt || metadata.summary || '',
      author: author,
      date: formatDate(metadata.date || new Date().toISOString()),
      readTime: metadata.readTime || '5 min',
      category: metadata.category || metadata.categories?.[0] || 'General',
      image: image,
      tags: metadata.tags || [],
      content: content
    });
  }
  
  if (posts.length === 0) {
    console.log('No markdown files found in content/blog');
    return;
  }
  
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const tsContent = `export const blogPosts = ${JSON.stringify(posts, null, 2)};
`;
  
  fs.writeFileSync(OUTPUT_FILE, tsContent);
  console.log(`Generated ${OUTPUT_FILE} with ${posts.length} posts`);
}

buildBlogPosts();
