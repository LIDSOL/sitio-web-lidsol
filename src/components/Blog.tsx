import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogPosts } from "../data/blogPosts";

interface BlogProps {
  onPostClick: (postId: number) => void;
}

export function Blog({ onPostClick }: BlogProps) {
  return (
    <section id="blog" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl sm:text-6xl">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Artículos, tutoriales y noticias sobre software libre, seguridad y tecnología abierta
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
        <Card 
          className="mb-12 overflow-hidden hover:shadow-lg transition-all duration-300 border-border/60 cursor-pointer"
          onClick={() => onPostClick(blogPosts[0].id)}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto relative overflow-hidden">
              {blogPosts[0].image ? (
              <ImageWithFallback
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Sin imagen</span>
              </div>
              )}
              <Badge className="absolute top-4 left-4 shadow-lg">Destacado</Badge>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary">{blogPosts[0].category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl mb-4">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-2 mb-6">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{blogPosts[0].author}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags && blogPosts[0].tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
              <Button className="w-fit gap-2">
                Leer más <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.slice(1).map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-border/60 cursor-pointer"
              onClick={() => onPostClick(post.id)}
            >
              <div className="aspect-video relative overflow-hidden">
                {post.image ? (
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Sin imagen</span>
                </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="mt-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{post.author}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags && post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <Button variant="ghost" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Leer más <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2">
            Cargar más artículos
          </Button>
        </div>
      </div>
    </section>
  );
}