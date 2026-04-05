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
import { motion } from "framer-motion";

interface BlogProps {
  onPostClick: (postId: number) => void;
}

const INITIAL_POSTS = 2;

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
    authors: post.authors[language] || post.authors.es || [],
    date: post.date[language] || post.date.es || "",
    readTime: post.readTime[language] || post.readTime.es || "",
    content: post.content[language] || post.content.es || "",
    tags: post.tags[language] || post.tags.es || [],
  });

  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1, 1 + visiblePosts);
  const hasMore = blogPosts.length > 1 + visiblePosts;

  const handleLoadMore = () => {
    setVisiblePosts(blogPosts.length - 1);
  };

  const handleShowLess = () => {
    setVisiblePosts(INITIAL_POSTS);
  };

  const handleViewPost = (postId: number) => {
    onPostClick(postId);
  };

  return (
    <section id="blog" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 mt-8">
          <h1 className="text-5xl sm:text-6xl">
            {t.title[language]}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        {/* Featured Post */}
        <Card
          className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/60 max-w-5xl mx-auto mb-12"
          onClick={() => handleViewPost(featuredPost.id)}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto relative overflow-hidden cursor-pointer">
              <ImageWithFallback
                src={featuredPost.image}
                alt={getLocalizedPost(featuredPost).title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-4 left-4 shadow-lg bg-primary">
                {language === 'en' ? 'Featured' : 'Destacado'}
              </Badge>
            </div>
            <motion.div
              className="p-8 flex flex-col justify-between"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div>
                <h3 className="text-3xl mb-4">{getLocalizedPost(featuredPost).title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {getLocalizedPost(featuredPost).excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{getLocalizedPost(featuredPost).authors[0]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{getLocalizedPost(featuredPost).date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{getLocalizedPost(featuredPost).readTime} {language === 'en' ? 'read' : 'de lectura'}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {getLocalizedPost(featuredPost).tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
              <Button className="gap-2 w-fit">
                {language === 'en' ? 'Read Article' : 'Leer Artículo'} <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </Card>

        {/* Blog Posts Grid - Next 2 posts after featured */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 mt-8">
          {gridPosts.map((post) => {
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
                      <span>{localizedPost.authors[0]}</span>
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
              onClick={handleLoadMore}
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
              onClick={handleShowLess}
            >
              {t.showLess[language]}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
