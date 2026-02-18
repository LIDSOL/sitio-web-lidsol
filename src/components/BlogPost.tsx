import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLanguage } from "./LanguageProvider";

interface BlogPostContent {
  id: number;
  title: { en: string; es: string };
  excerpt: { en: string; es: string };
  author: { en: string; es: string };
  date: { en: string; es: string };
  readTime: { en: string; es: string };
  category: { en: string; es: string };
  image: string;
  tags: string[];
  content: { en: string; es: string };
}

interface BlogPostProps {
  post: BlogPostContent;
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  const { language } = useLanguage();

  const t = {
    backToBlog: { en: "Back to Blog", es: "Volver al Blog" },
    by: { en: "By", es: "Por" },
    memberOf: { en: "LIDSOL Member", es: "Miembro de LIDSOL" },
  };

  const title = post.title[language] || post.title.es || '';
  const excerpt = post.excerpt[language] || post.excerpt.es || '';
  const author = post.author[language] || post.author.es || '';
  const date = post.date[language] || post.date.es || '';
  const readTime = post.readTime[language] || post.readTime.es || '';
  const category = post.category[language] || post.category.es || '';
  const content = post.content[language] || post.content.es || '';

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" /> {t.backToBlog[language]}
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {readTime}
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">{title}</h1>

          <div className="flex items-center gap-2 mb-6">
            <User className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground">{t.by[language]} {author}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
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
          />
        </div>
        )}

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({children}) => <p className="text-foreground mb-6 leading-relaxed text-lg">{children}</p>,
              img: ({src, alt}) => (
                <figure className="my-8">
                  <img src={src} alt={alt} className="rounded-lg w-full" />
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
              pre: ({children}) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-6">{children}</pre>,
              code: ({className, children}) => {
                const match = /language-(\w+)/.exec(className || '');
                return !match ? <code className="bg-muted px-1 py-0.5 rounded text-sm">{children}</code> : <code className={className}>{children}</code>;
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
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="font-medium">{author}</div>
              <div className="text-sm text-muted-foreground">{t.memberOf[language]}</div>
            </div>
          </div>

          <Button onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> {t.backToBlog[language]}
          </Button>
        </div>
      </div>
    </section>
  );
}
