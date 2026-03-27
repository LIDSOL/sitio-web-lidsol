import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Users, ArrowRight } from "lucide-react";
import { useState, useMemo, useCallback, useEffect } from "react";
import { projects } from "../data/projects";
import { useLanguage } from "./LanguageProvider";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";



export function FeaturedProjects() {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Debounce mouse movement to reduce updates
  const debouncedSetMousePosition = useMemo(() => {
    let timeoutId: NodeJS.Timeout;
    return (x: number, y: number) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMousePosition({ x, y });
      }, 16); // ~60fps
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    debouncedSetMousePosition(
      e.clientX - rect.left,
      e.clientY - rect.top
    );
  }, [debouncedSetMousePosition]);

  // Get projects based on screen size
  const featuredProjects = isDesktop ? projects.slice(-3) : projects.slice(-4);

  const t = {
    title: { en: "Projects in Development", es: "Proyectos en desarrollo" },
    subtitle: { en: "Explore some of our projects", es: "Explora algunos de nuestros proyectos" },
    viewAll: { en: "View All Projects", es: "Ver Todos los Proyectos" },
    contributors: { en: "contributors", es: "contribuidores" },
  };

  return (
    <section
      className="py-20 bg-muted relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: useMemo(() =>
            `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(28, 113, 216, 0.08), transparent 40%)`,
            [mousePosition.x, mousePosition.y]
          ),
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl">{t.title[language]}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => {
            return (
              <Card
                key={project.id}
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-card/95 group relative overflow-hidden border-border/60 flex flex-col cursor-pointer"
                onClick={() => window.location.hash = `#projects/${project.id}`}
              >
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/15 via-transparent to-primary/10" />

                <CardHeader className="relative z-10 flex-grow pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="mb-2">{project.title[language]}</CardTitle>

                      <CardDescription className="line-clamp-3">
                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                            >
                              {project.shortDescription[language]}
                            </ReactMarkdown>
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      {/* Estrellas */}
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-muted-foreground">{project.stars}</span>
                      </span>

                      {/* Contribuidores */}
                      <span className="inline-flex items-center gap-1">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {project.contributors} {t.contributors[language]}
                        </span>
                      </span>

                      {/* Lenguaje - Ahora con el mismo gap que los anteriores */}
                      {project.language && (
                        <span className="inline-flex items-center gap-1.5">
                          <div className={`w-3 h-3 ${project.color || 'bg-gray-500'} rounded-full`} />
                          <span className="text-sm text-muted-foreground">{project.language}</span>
                        </span>
                      )}
                    </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.[language]?.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2" onClick={() => window.location.hash = "#projects"}>
            {t.viewAll[language]} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
