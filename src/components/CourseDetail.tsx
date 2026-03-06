import { ArrowLeft, BookOpen, Calendar, Clock, Users, CheckCircle, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "./LanguageProvider";
import { Course } from "../data/courses";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export function CourseDetail({ course, onBack }: CourseDetailProps) {
  const { language } = useLanguage();

  const getLevelColor = (level: string) => {
    const levelEn = course.level?.en || "";
    switch (levelEn) {
      case "Beginner":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "Intermediate":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
      case "Advanced":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";
      default:
        return "";
    }
  };

  const t = {
    back: { en: "Back to Courses", es: "Volver a Cursos" },
    enroll: { en: "Enroll Now", es: "Inscribirse Ahora" },
    description: { en: "Course Description", es: "Descripción del Curso" },
    modules: { en: "Course Modules", es: "Módulos del Curso" },
    requirements: { en: "Requirements", es: "Requisitos" },
    objectives: { en: "Learning Objectives", es: "Objetivos de Aprendizaje" },
    courseInfo: { en: "Course Information", es: "Información del Curso" },
    instructor: { en: "Instructor", es: "Instructor" },
    duration: { en: "Duration", es: "Duración" },
    schedule: { en: "Schedule", es: "Horario" },
    startDate: { en: "Start Date", es: "Fecha de Inicio" },
    enrolled: { en: "Enrolled", es: "Inscritos" },
    level: { en: "Level", es: "Nivel" },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image */}
      <div className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src={course.coverImage || course.image || ""}
          alt={course.title[language]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl -mt-32 relative pb-20">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 gap-2 bg-card/80 backdrop-blur hover:bg-card"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back[language]}
        </Button>

        {/* Course Header */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-xl mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {course.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            {course.level && (
              <Badge className={`border ${getLevelColor(course.level.en)}`}>
                {course.level[language]}
              </Badge>
            )}
          </div>
          
          <h1 className="text-5xl sm:text-6xl mb-6">{course.title[language]}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {course.shortDescription?.[language]}
          </p>

          <Button size="lg" className="gap-2">
            <Award className="h-5 w-5" />
            {t.enroll[language]}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h2 className="text-3xl mb-6">{t.description[language]}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {course.fullDescription?.[language]}
              </p>
            </div>

            {/* Modules */}
            {course.modules && (
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8">
              <h2 className="text-3xl mb-6">{t.modules[language]}</h2>
              <ul className="space-y-3">
                {course.modules[language]?.map((module, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground text-lg">{module}</span>
                  </li>
                ))}
              </ul>
            </div>
            )}

            {/* Requirements */}
            {course.requirements && (
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h2 className="text-3xl mb-6">{t.requirements[language]}</h2>
              <ul className="space-y-3">
                {course.requirements[language]?.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            )}

            {/* Objectives */}
            {course.objectives && (
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h2 className="text-3xl mb-6">{t.objectives[language]}</h2>
              <ul className="space-y-3">
                {course.objectives[language]?.map((obj, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            )}
          </div>

          {/* Sidebar - Course Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-border/60">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-2xl">{t.courseInfo[language]}</h3>
                  
                  <div className="space-y-4">
                    {course.instructor && (
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {t.instructor[language]}
                        </div>
                        <div className="font-medium">{course.instructor}</div>
                      </div>
                    </div>
                    )}

                    {course.duration && (
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {t.duration[language]}
                        </div>
                        <div className="font-medium">{course.duration}</div>
                      </div>
                    </div>
                    )}

                    {course.startDate && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {t.startDate[language]}
                        </div>
                        <div className="font-medium">{course.startDate}</div>
                      </div>
                    </div>
                    )}

                    {course.schedule && (
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {t.schedule[language]}
                        </div>
                        <div className="font-medium">{course.schedule}</div>
                      </div>
                    </div>
                    )}

                    {course.enrolled && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {t.enrolled[language]}
                        </div>
                        <div className="font-medium">{course.enrolled}</div>
                      </div>
                    </div>
                    )}
                  </div>

                  <Button className="w-full gap-2" size="lg">
                    <Award className="h-5 w-5" />
                    {t.enroll[language]}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
