import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { User, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogPosts } from "../data/blogPosts";
import { useLanguage } from "./LanguageProvider";

interface BlogProps {
  onPostClick: (postId: number) => void;
}

export function Blog({ onPostClick }: BlogProps) {
  const { language } = useLanguage();

  const t = {
    title: { en: "Blog", es: "Blog" },
    subtitle: {
      en: "Articles, tutorials and news about free software, security and open technology",
      es: "Artículos, tutoriales y noticias sobre software libre, seguridad y tecnología abierta"
    },
    readMore: { en: "Read more", es: "Leer más" },
    backToBlog: { en: "Back to Blog", es: "Volver al Blog" },
    noImage: { en: "No image", es: "Sin imagen" },
    loadMore: { en: "Load more articles", es: "Cargar más artículos" },
  };

  const getLocalizedPost = (post: typeof blogPosts[0]) => ({
    ...post,
    title: post.title[language] || post.title.es || '',
    excerpt: post.excerpt[language] || post.excerpt.es || '',
    author: post.author[language] || post.author.es || '',
    date: post.date[language] || post.date.es || '',
    readTime: post.readTime[language] || post.readTime.es || '',
    content: post.content[language] || post.content.es || '',
    tags: post.tags[language] || post.tags.es || [],
  });

  return (
    <section id="blog" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl sm:text-6xl">{t.title[language]}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => {
            const localizedPost = getLocalizedPost(post);
            return (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-border/60 cursor-pointer"
              onClick={() => onPostClick(post.id)}
            >
              <div className="aspect-video relative overflow-hidden">
                {post.image ? (
                <ImageWithFallback
                  src={post.image}
                  alt={localizedPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">{t.noImage[language]}</span>
                </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="group-hover:text-primary transition-colors">
                  {localizedPost.title}
                </CardTitle>
                <CardDescription className="mt-1">{localizedPost.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{localizedPost.author}</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{localizedPost.date}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{localizedPost.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {localizedPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <Button variant="ghost" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {t.readMore[language]} <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2">
            {t.loadMore[language]}
          </Button>
        </div>
      </div>
    </section>
  );
}
