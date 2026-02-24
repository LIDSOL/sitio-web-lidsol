import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";
import { blogPosts } from "../data/blogPosts";

interface LatestBlogPostProps {
  onViewPost: (postId: number) => void;
  showHeader?: boolean;
  showViewAll?: boolean;
}

export function LatestBlogPost({ onViewPost, showHeader = true, showViewAll = true }: LatestBlogPostProps) {
  const { language } = useLanguage();

  const latestPost = blogPosts[0];

  const t = {
    title: { en: "Latest from Our Blog", es: "Último del Blog" },
    subtitle: { en: "Stay updated with our latest articles", es: "Mantente al día con nuestros últimos artículos" },
    viewPost: { en: "Read Full Article", es: "Leer Artículo Completo" },
    viewAll: { en: "View All Posts", es: "Ver Todos los Posts" },
    readTime: { en: "min read", es: "min de lectura" },
    new: { en: "New", es: "Nuevo" },
  };

  const title = latestPost.title[language] || latestPost.title.es || '';
  const excerpt = latestPost.excerpt[language] || latestPost.excerpt.es || '';
  const authors = latestPost.authors[language] || latestPost.authors.es || [];
  const date = latestPost.date[language] || latestPost.date.es || '';
  const readTime = latestPost.readTime[language] || latestPost.readTime.es || '';
  const tags = latestPost.tags[language] || latestPost.tags.es || [];

  return (
    <section id="latest-blog" className={`${showHeader ? 'py-20' : 'py-4'} bg-background ${showViewAll ? 'mb-2' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {showHeader && (
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl mb-4">{t.title[language]}</h2>
          </div>
        )}

        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/60 max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div
                className="aspect-video md:aspect-auto relative overflow-hidden cursor-pointer"
                onClick={() => onViewPost(latestPost.id)}
            >
              <ImageWithFallback
                src={latestPost.image}
                alt={title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-4 left-4 shadow-lg bg-primary">
                {t.new[language]}
              </Badge>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl mb-4">{title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{authors[0]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{date}</span>
                  </div>
                  <div>
                    {readTime} {t.readTime[language]}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
              <Button
                className="gap-2"
                onClick={() => onViewPost(latestPost.id)}
              >
                {t.viewPost[language]} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {showViewAll && (
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="gap-2" onClick={() => window.location.hash = "#blog"}>
              {t.viewAll[language]} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
