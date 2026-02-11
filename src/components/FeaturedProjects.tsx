import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Users, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import { projects } from "../data/projects";
import { useLanguage } from "./LanguageProvider";

// Simple contribution graph component
function ContributionGraph({ projectId }: { projectId: number }) {
  // Generate contribution data once based on projectId (deterministic)
  const contributions = useMemo(() => {
    const weeks = 12;
    const days = 7;
    // Use projectId as seed for consistent data
    const seed = projectId * 1000;
    return Array.from({ length: weeks }, (_, weekIndex) =>
      Array.from({ length: days }, (_, dayIndex) => {
        // Deterministic "random" based on position and projectId
        const value = (seed + weekIndex * 7 + dayIndex) % 5;
        return value;
      })
    );
  }, [projectId]);

  const getColor = (level: number) => {
    if (level === 0) return "bg-muted";
    if (level === 1) return "bg-primary/20";
    if (level === 2) return "bg-primary/40";
    if (level === 3) return "bg-primary/60";
    return "bg-primary/80";
  };

  return (
    <div className="flex gap-0.5">
      {contributions.map((week, weekIndex) => (
        <div key={weekIndex} className="flex flex-col gap-0.5">
          {week.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`w-2 h-2 rounded-sm ${getColor(day)}`}
              title={`${day} contributions`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function FeaturedProjects() {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const toggleExpanded = (projectId: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  // Get the last 3 projects
  const featuredProjects = projects.slice(-3);

  const t = {
    title: { en: "Projects in Development", es: "Proyectos en desarrollo" },
    subtitle: { en: "Explore some of our projects", es: "Explora algunos de nuestros proyectos" },
    viewAll: { en: "View All Projects", es: "Ver Todos los Proyectos" },
    showMore: { en: "Show more", es: "Ver más" },
    showLess: { en: "Show less", es: "Ver menos" },
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
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(28, 113, 216, 0.08), transparent 40%)`,
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl">{t.title[language]}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => {
            const isExpanded = expandedProjects.has(project.id);
            return (
              <Card 
                key={project.id} 
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-card/95 group relative overflow-hidden border-border/60 flex flex-col"
              >
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/15 via-transparent to-primary/10" />
                
                <CardHeader className="relative z-10 flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <CardTitle className="mb-2">{project.title[language]}</CardTitle>

                      <CardDescription className={isExpanded ? "" : "line-clamp-2"}>
                        {isExpanded ? project.fullDescription[language] : project.shortDescription[language]}
                      </CardDescription>
                    </div>
                  </div>
                  
                  {/* Show More/Less Button */}
                  <button
                    onClick={() => toggleExpanded(project.id)}
                    className="text-sm text-primary hover:underline mt-2 text-left"
                  >
                    {isExpanded ? t.showLess[language] : t.showMore[language]}
                  </button>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  {/* Contribution Graph */}
                  <div className="border-t border-border/50 pt-4">
                    <div className="text-xs text-muted-foreground mb-2">Activity</div>
                    <ContributionGraph projectId={project.id} />
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">{project.contributors} {t.contributors[language]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 ${project.color} rounded-full`} />
                      <span className="text-sm">{project.language}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
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