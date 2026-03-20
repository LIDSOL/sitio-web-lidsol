import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";
import { courses } from "../data/courses";

interface LatestCourseProps {
  onViewCourse: (courseId: number) => void;
  onViewAllCourses: () => void;
}

export function LatestCourse({ onViewCourse, onViewAllCourses }: LatestCourseProps) {
  const { language } = useLanguage();
  
  // Get the first course (latest/upcoming)
  const latestCourse = courses[0];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Principiante":
      case "Beginner":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "Intermedio":
      case "Intermediate":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
      case "Avanzado":
      case "Advanced":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";
      default:
        return "";
    }
  };

  const t = {
    title: { en: "Latest Course", es: "Último Curso" },
    viewDetails: { en: "View Course Details", es: "Ver Detalles del Curso" },
    viewAll: { en: "View All Courses", es: "Ver Todos los Cursos" },
    startDate: { en: "Starts:", es: "Inicia:" },
    enrolled: { en: "enrolled", es: "inscritos" },
  };

  return (
    <section id="latest-course" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl mb-4">{t.title[language]}</h2>
        </div>

        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/60 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            <div 
              className="aspect-video md:aspect-auto relative overflow-hidden cursor-pointer" 
              onClick={() => onViewCourse(latestCourse.id)}
            >
              <ImageWithFallback
                src={latestCourse.image}
                alt={latestCourse.title[language]}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <Badge className={`absolute top-4 right-4 shadow-lg border ${getLevelColor(latestCourse.level[language])}`}>
                {latestCourse.level[language]}
              </Badge>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {latestCourse.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-3xl mb-4">{latestCourse.title[language]}</h3>
                <p className="text-muted-foreground mb-6">
                  {latestCourse.shortDescription[language]}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>{latestCourse.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{latestCourse.duration?.[language]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{t.startDate[language]} {latestCourse.startDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <Button 
                  className="gap-2 flex-1"
                  onClick={() => onViewCourse(latestCourse.id)}
                >
                  {t.viewDetails[language]} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={onViewAllCourses}
                >
                  {t.viewAll[language]}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
