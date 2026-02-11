import { Star, Users, Github, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageProvider";
import { projects } from "../data/projects";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

interface ProjectsProps {
  onProjectClick: (projectId: number) => void;
}

function ContributionGraph({ projectId }: { projectId: number }) {
  const contributions = useMemo(() => {
    const weeks = 12;
    const days = 7;
    const seed = projectId * 1000;

    return Array.from({ length: weeks }, (_, weekIndex) =>
      Array.from({ length: days }, (_, dayIndex) => {
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
    <div className="flex gap-0.5 mb-4">
      {contributions.map((week, weekIndex) => (
        <div key={weekIndex} className="flex flex-col gap-0.5">
          {week.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`w-2 h-2 rounded-sm ${getColor(day)}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

type SortField = "id" | "name";
type SortDirection = "asc" | "desc";

export function Projects({ onProjectClick }: ProjectsProps) {
  const { language } = useLanguage();
  const [sortField, setSortField] = useState<SortField>("id");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const toggleSort = (field: SortField) => {
  if (field === sortField) {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  } else {
    setSortField(field);
    // mantenemos la dirección actual
  }
  };

  const sortedProjects = useMemo(() => {
    const copy = [...projects];

    return copy.sort((a, b) => {
      let result = 0;

      if (sortField === "id") {
        result = a.id - b.id;
      } else {
        result = a.title[language].localeCompare(b.title[language]);
      }

      return sortDirection === "asc" ? result : -result;
    });
  }, [sortField, sortDirection, language]);

  const t = {
    title: { en: "Research & Open‑Source Contributions", es: "Proyectos y Contribuciones de Código Abierto" },
    sourceCode: { en: "Source Code", es: "Código Fuente" },
    viewDetails: { en: "View Details", es: "Ver Detalles" },
    contributors: { en: "contributors", es: "contribuidores" },

    activity: { en: "Activity", es: "Actividad" },
    sortBy: { en: "Sort by:", es: "Ordenar por:" },
    sortAge: { en: "Age", es: "Antigüedad" },
    sortName: { en: "Name", es: "Nombre" },
  };

  const Arrow = ({ active }: { active: boolean }) =>
    sortDirection === "asc" ? (
      <ChevronUp className={`h-4 w-4 ${active ? "" : "opacity-40"}`} />
    ) : (
      <ChevronDown className={`h-4 w-4 ${active ? "" : "opacity-40"}`} />
    );

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl mb-2">{t.title[language]}</h1>

        {/* Sort (Nautilus-style) */}
        <div className="text-sm text-muted-foreground mb-8 flex items-center gap-4">
          <span>{t.sortBy[language]}</span>

          <button
            onClick={() => toggleSort("id")}
            className={`flex items-center gap-1 hover:underline ${
              sortField === "id" ? "text-foreground" : ""
            }`}
          >
            {t.sortAge[language]}
            {sortField === "id" && <Arrow active />}
          </button>

          <button
            onClick={() => toggleSort("name")}
            className={`flex items-center gap-1 hover:underline ${
              sortField === "name" ? "text-foreground" : ""
            }`}
          >
            {t.sortName[language]}
            {sortField === "name" && <Arrow active />}
          </button>
        </div>

        <div className="space-y-4">
          {sortedProjects.map((project, index) => {

            return (
              <div
                key={project.id}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all hover:shadow-md"
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className="text-xl hover:text-primary transition-colors cursor-pointer"
                          onClick={() => onProjectClick(project.id)}
                        >
                          {project.title[language]}
                        </h3>
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">
                          {project.category[language]}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-3 line-clamp-2">
                        {project.shortDescription[language]}
                      </p>

                      <div className="mb-3">
                        <div className="text-xs text-muted-foreground mb-2">
                          {t.activity[language]}
                        </div>
                        <ContributionGraph projectId={project.id} />
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-primary" />
                          {project.contributors} {t.contributors[language]}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className={`w-3 h-3 ${project.color} rounded-full`} />
                          {project.language}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                          {t.sourceCode[language]}
                        </Button>
                      )}
                      <Button
                        size="sm"
                        className="gap-2"
                        onClick={() => onProjectClick(project.id)}
                      >
                        {t.viewDetails[language]}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

