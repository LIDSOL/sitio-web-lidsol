import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Clock, Calendar, Users, ArrowRight, Award } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { courses } from "../data/courses";
import { useLanguage } from "./LanguageProvider";

interface CoursesProps {
  onCourseClick: (courseId: number) => void;
}

export function Courses({ onCourseClick }: CoursesProps) {
  const { language } = useLanguage();

  const getLevelColor = (level: string) => {
    const levelEn = typeof level === 'string' ? level : level;
    switch (levelEn) {
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
    title: { en: "Courses", es: "Cursos" },
    subtitle: { en: "Training programs in open source technologies", es: "Programas de formación en tecnologías de código abierto" },
    featured: { en: "Last", es: "Último" },
    enroll: { en: "Enroll", es: "Inscribirse" },
    viewDetails: { en: "View Details", es: "Ver Detalles" },
    startDate: { en: "Starts:", es: "Inicia:" },
    enrolled: { en: "enrolled", es: "inscritos" },
    proposeCourse: { en: "Want to propose a course?", es: "¿Quieres proponer un curso?" },
    proposeDescription: {
      en: "If you have experience in any open source technology and want to share your knowledge, we'd love to hear your course proposal.",
      es: "Si tienes experiencia en alguna tecnología de código abierto y quieres compartir tu conocimiento, nos encantaría conocer tu propuesta de curso."
    },
    proposeCta: { en: "Propose Course", es: "Proponer Curso" },
  };

  const formatDate = (dateStr: string, lang: string) => {
    const date = new Date(dateStr);
    const day = date.getUTCDate();
    const month = date.toLocaleString(lang === 'es' ? 'es-MX' : 'en-US', { month: 'long', timeZone: 'UTC' });
    const year = date.getUTCFullYear();
    return lang === 'es'
      ? `${day} de ${month} de ${year}`
      : `${month} ${day}, ${year}`;
  };

  const sortedCourses = [...courses].sort((a, b) => {
    const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
    const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
    return dateB - dateA;
  });

  const featuredCourse = sortedCourses[0];
  const otherCourses = sortedCourses.slice(1);

  return (
    <section id="courses" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl sm:text-6xl">{t.title[language]}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        {/* Featured Course */}
        <Card className="mb-12 overflow-hidden hover:shadow-lg transition-all duration-300 border-border/60">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto relative overflow-hidden">
              <ImageWithFallback
                src={featuredCourse.image || ""}
                alt={featuredCourse.title[language]}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 shadow-lg">{t.featured[language]}</Badge>
              {featuredCourse.level && (
                <Badge className={`absolute top-4 right-4 shadow-lg border ${getLevelColor(featuredCourse.level[language])}`}>
                  {featuredCourse.level[language]}
                </Badge>
              )}
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredCourse.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <h2 className="text-3xl mb-4">{featuredCourse.title[language]}</h2>
                <p className="text-muted-foreground mb-6">{featuredCourse.shortDescription?.[language]}</p>
                <div className="space-y-3 mb-6">
                  {featuredCourse.instructor && (
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>{featuredCourse.instructor}</span>
                    </div>
                  )}
                  {(featuredCourse.duration || featuredCourse.schedule) && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{featuredCourse.duration?.[language]}{featuredCourse.duration && featuredCourse.schedule ? ' • ' : ''}{featuredCourse.schedule?.[language]}</span>
                    </div>
                  )}
                  {featuredCourse.startDate && (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{t.startDate[language]} {formatDate(featuredCourse.startDate, language)}</span>
                    </div>
                  )}
                  {featuredCourse.enrolled && (
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{featuredCourse.enrolled} {t.enrolled[language]}</span>
                    </div>
                  )}
                </div>
              </div>
              <Button
                className="w-fit gap-2"
                onClick={() => onCourseClick(featuredCourse.id)}
              >
                {t.enroll[language]} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {otherCourses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-border/60 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={course.image || ""}
                  alt={course.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {course.level && (
                  <Badge className={`absolute top-3 right-3 shadow-lg border ${getLevelColor(course.level[language])}`}>
                    {course.level[language]}
                  </Badge>
                )}
              </div>
              <CardHeader className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {course.title[language]}
                </CardTitle>
                <CardDescription className="mt-2">{course.shortDescription?.[language]}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4 text-sm">
                  {course.instructor && (
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-muted-foreground">{course.instructor}</span>
                    </div>
                  )}
                  {course.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-muted-foreground">{course.duration[language]}</span>
                    </div>
                  )}
                  {course.startDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-muted-foreground">{formatDate(course.startDate, language)}</span>
                    </div>
                  )}
                  {course.enrolled && (
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-muted-foreground">{course.enrolled} {t.enrolled[language]}</span>
                    </div>
                  )}
                </div>
                <Button
                  variant="outline"
                  className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => onCourseClick(course.id)}
                >
                  {t.viewDetails[language]} <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center">
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl mb-4">{t.proposeCourse[language]}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t.proposeDescription[language]}
          </p>
          <Button size="lg" className="gap-2">
            {t.proposeCta[language]} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
