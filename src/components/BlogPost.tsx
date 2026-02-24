import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, User, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useLanguage } from "./LanguageProvider";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { members } from "../data/members";

interface BlogPostContent {
  id: number;
  title: { en: string; es: string };
  excerpt: { en: string; es: string };
  authors: { en: string[]; es: string[] };
  date: { en: string; es: string };
  readTime: { en: string; es: string };
  image: string;
  tags: { en: string[]; es: string[] };
  content: { en: string; es: string };
}

interface BlogPostProps {
  post: BlogPostContent;
  onBack: () => void;
  onMemberClick?: (memberId: number) => void;
}

export function BlogPost({ post, onBack, onMemberClick }: BlogPostProps) {
  const { language } = useLanguage();

  const t = {
    backToBlog: { en: "Back to Blog", es: "Volver al Blog" },
    by: { en: "By", es: "Por" },
    memberOf: { en: "LIDSOL Member", es: "Miembro de LIDSOL" },
    viewProfile: { en: "View profile", es: "Ver perfil" },
  };

  const title = post.title[language] || post.title.es || '';
  const excerpt = post.excerpt[language] || post.excerpt.es || '';
  const date = post.date[language] || post.date.es || '';
  const readTime = post.readTime[language] || post.readTime.es || '';
  const category = '';
  const content = post.content[language] || post.content.es || '';
  const tags = post.tags[language] || post.tags.es || [];
  const authors = post.authors[language] || post.authors.es || [];

  interface AuthorMember {
    name: string;
    member?: typeof members[0];
    memberId?: number;
  }

  const findMemberByUsername = (authorName: string): AuthorMember => {
    const search = authorName.toLowerCase().trim();

    // Direct mapping for known usernames that don't match GitHub usernames
    const usernameToMemberId: Record<string, number> = {
      'quique': 4,       // Quique Calderon - github is ksobrenat32
      'barrionomia': 9,  // Diego Barriga - github is barriga
    };

    let foundMember: AuthorMember = { name: authorName };

    if (usernameToMemberId[search]) {
      const member = members.find(m => m.id === usernameToMemberId[search]);
      if (member) {
        return { name: member.name, member, memberId: member.id };
      }
    }

    // Try to find by GitHub/GitLab username
    const byGithub = members.find(member => {
      const github = member.contact?.github?.toLowerCase() || '';
      const gitlab = member.contact?.gitlab?.toLowerCase() || '';
      const githubUsername = github.replace('https://github.com/', '').replace('http://github.com/', '');
      const gitlabUsername = gitlab.replace('https://gitlab.com/', '').replace('http://gitlab.com/', '');
      return githubUsername === search || gitlabUsername === search;
    });
    if (byGithub) {
      return { name: byGithub.name, member: byGithub, memberId: byGithub.id };
    }

    // Try to find by full name (case-insensitive)
    const byName = members.find(member => {
      const name = member.name.toLowerCase();
      return name === search || name.includes(search) || search.includes(name);
    });
    if (byName) {
      return { name: byName.name, member: byName, memberId: byName.id };
    }

    return { name: authorName };
  };

  const authorMembers: AuthorMember[] = authors.map(findMemberByUsername);

  const handleAuthorClick = (memberId?: number) => {
    if (memberId && onMemberClick) {
      onMemberClick(memberId);
    }
  };

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="outline"
          className="mb-8 gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" /> {t.backToBlog[language]}
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">{title}</h1>

          <div className="flex items-center gap-2 mb-6">
            <User className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground">{t.by[language]}</span>
            <div className="flex flex-wrap gap-2">
              {authorMembers.map((author, idx) => (
                <span key={idx} className="text-muted-foreground">
                  {idx > 0 && (idx === authorMembers.length - 1 ? ` ${language === 'es' ? 'y' : 'and'} ` : ', ')}
                  <span
                    className={author.memberId ? "cursor-pointer hover:underline text-foreground font-medium" : ""}
                    onClick={() => handleAuthorClick(author.memberId)}
                  >
                    {author.name}
                    {author.memberId && <ExternalLink className="h-3 w-3 inline ml-1" />}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-border/50 mb-12">
          <ImageWithFallback
            src={post.image}
            alt={title}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        )}

        {/* Content */}
        <article className="prose prose-lg prose-justify max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              p: ({children}) => <p className="text-foreground mb-6 leading-relaxed text-lg text-justify hyphens-auto" style={{textAlign: 'justify'}}>{children}</p>,
              img: ({src, alt}) => (
                <figure className="my-8">
                  <img src={src} alt={alt} className="rounded-2xl w-full" loading="lazy" decoding="async" />
                  {alt && <figcaption className="text-center text-muted-foreground mt-2 text-sm">{alt}</figcaption>}
                </figure>
              ),
              a: ({href, children}) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{children}</a>
              ),
              h2: ({children}) => <h2 className="text-3xl font-bold mt-12 mb-4">{children}</h2>,
              h3: ({children}) => <h3 className="text-2xl font-semibold mt-8 mb-3">{children}</h3>,
              ul: ({children}) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
              li: ({children}) => <li className="text-muted-foreground">{children}</li>,
              pre: ({children}) => {
                const codeChild = children as React.ReactElement;
                const className = codeChild?.props?.className || '';
                const match = /language-(\w+)/.exec(className);
                const language = match ? match[1] : 'text';
                const codeContent = codeChild?.props?.children || '';

                return (
                  <SyntaxHighlighter
                    style={materialDark}
                    language={language}
                    showLineNumbers={true}
                    customStyle={{
                      borderRadius: '1rem',
                      border: '1px solid hsl(var(--border) / 0.5)',
                      padding: '1.5rem',
                      marginBottom: '1.5rem',
                      fontSize: '1rem',
                    }}
                    codeTagProps={{
                      style: {
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      }
                    }}
                  >
                    {String(codeContent).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                );
              },
              code: ({className, children}) => {
                const match = /language-(\w+)/.exec(className || '');
                const language = match ? match[1] : '';
                return !match ? (
                  <code className="bg-muted px-1 py-0.5 rounded text-sm">{children}</code>
                ) : (
                  <SyntaxHighlighter
                    style={materialDark}
                    language={language}
                    showLineNumbers={true}
                    customStyle={{
                      borderRadius: '1rem',
                      border: '1px solid hsl(var(--border) / 0.5)',
                      padding: '1.5rem',
                      marginBottom: '1.5rem',
                      fontSize: '1rem',
                    }}
                    codeTagProps={{
                      style: {
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      }
                    }}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                );
              },
              blockquote: ({children}) => <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">{children}</blockquote>,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        {/* Divider */}
        <div className="my-12 border-t border-border" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            {authorMembers.map((author, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 ${author.memberId ? 'cursor-pointer hover:opacity-80' : ''}`}
                onClick={() => handleAuthorClick(author.memberId)}
              >
                {author.member?.image ? (
                  <ImageWithFallback
                    src={author.member.image}
                    alt={author.name}
                    className="w-12 h-12 rounded-full object-cover border border-primary/20"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                )}
                <div>
                  <div className="font-medium flex items-center gap-1">
                    {author.name}
                    {author.memberId && <ExternalLink className="h-3 w-3 text-muted-foreground" />}
                  </div>
                  <div className="text-sm text-muted-foreground">{t.memberOf[language]}</div>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> {t.backToBlog[language]}
          </Button>
        </div>
      </div>
    </section>
  );
}
