import {
  Card,
  CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { User, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogPosts } from "../data/blogPosts";
import { useLanguage } from "./LanguageProvider";
import { useState } from "react";

interface BlogProps {
  onPostClick: (postId: number) => void;
}

const INITIAL_POSTS = 4;

export function Blog({ onPostClick }: BlogProps) {
  const { language } = useLanguage();
  const [visiblePosts, setVisiblePosts] = useState(INITIAL_POSTS);

  const t = {
    title: { en: "Blog", es: "Blog" },
    subtitle: {
      en: "Articles, tutorials and news about free software, security and open technology",
      es: "Artículos, tutoriales y noticias sobre software libre, seguridad y tecnología abierta",
    },
    readMore: { en: "Read more", es: "Leer más" },
    backToBlog: { en: "Back to Blog", es: "Volver al Blog" },
    noImage: { en: "No image", es: "Sin imagen" },
    loadMore: { en: "Load more articles", es: "Cargar más artículos" },
    showLess: { en: "Show less", es: "Mostrar menos" },
  };

  const getLocalizedPost = (post: typeof blogPosts[0]) => ({
    ...post,
    title: post.title[language] || post.title.es || "",
    excerpt: post.excerpt[language] || post.excerpt.es || "",
    author: post.author[language] || post.author.es || "",
    date: post.date[language] || post.date.es || "",
    readTime: post.readTime[language] || post.readTime.es || "",
    content: post.content[language] || post.content.es || "",
    tags: post.tags[language] || post.tags.es || [],
  });

  const visiblePostsList = blogPosts.slice(0, visiblePosts);
  const hasMore = visiblePosts < blogPosts.length;

  return (
    <section id="blog" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl sm:text-6xl">
            {t.title[language]}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {visiblePostsList.map((post) => {
            const localizedPost = getLocalizedPost(post);

            return (
              <Card
                key={post.id}
                className="flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-border/60 cursor-pointer"
                onClick={() => onPostClick(post.id)}
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  {post.image ? (
                    <ImageWithFallback
                      src={post.image}
                      alt={localizedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">
                        {t.noImage[language]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <CardContent className="flex flex-col flex-1 pt-2 px-4 pb-4">
                  {/* Title */}
                  <h3 className="text-xl leading-snug tracking-tight group-hover:text-primary transition-colors mb-2">
                    {localizedPost.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mt-1 mb-4">
                    {localizedPost.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-6 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{localizedPost.author}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{localizedPost.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{localizedPost.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="hidden lg:flex flex-wrap gap-2 mb-4">
                    {localizedPost.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex-1" />

                  {/* Button */}
                  <Button
                    variant="ghost"
                    className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    {t.readMore[language]}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => setVisiblePosts(blogPosts.length)}
            >
              {t.loadMore[language]}
            </Button>
          </div>
        )}

        {visiblePosts > INITIAL_POSTS && (
          <div className="text-center mt-4">
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => setVisiblePosts(INITIAL_POSTS)}
            >
              {t.showLess[language]}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
