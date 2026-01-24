import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    tags: string[];
    content: string[];
  };
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-8 gap-2" 
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" /> Volver al Blog
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-2 mb-6">
            <User className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground">Por {post.author}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-border/50 mb-12">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-foreground mb-6 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
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
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-muted-foreground">Miembro de LIDSOL</div>
            </div>
          </div>
          
          <Button onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Volver al Blog
          </Button>
        </div>
      </div>
    </section>
  );
}
