import { ArrowLeft, Calendar, Clock, Users, CheckCircle, ExternalLink, Link, MapPin, Globe, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "./LanguageProvider";
import { Course } from "../data/courses";
import { members } from "../data/members";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

interface ModuleLine {
  text: string;
  level: number;
  isBullet: boolean;
  isTitle: boolean;
}

function parseModules(markdown: string): ModuleLine[] {
  const lines = markdown.split('\n').filter(line => line.trim());
  return lines.map(line => {
    const trimmed = line.trim();
    const leadingSpaces = line.search(/\S/);

    const titleMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (titleMatch) {
      return {
        text: titleMatch[2],
        level: titleMatch[1].length - 1,
        isBullet: false,
        isTitle: true
      };
    }

    const bulletMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      return {
        text: bulletMatch[1],
        level: Math.floor(leadingSpaces / 2),
        isBullet: true,
        isTitle: false
      };
    }

    return {
      text: trimmed,
      level: Math.floor(leadingSpaces / 2),
      isBullet: false,
      isTitle: false
    };
  });
}

function renderModuleLine(item: ModuleLine, index: number): JSX.Element {
  const { text, level, isBullet, isTitle } = item;

  const baseStyles = "flex items-start";
  const indentStyles = [
    "ml-0",
    "ml-6",
    "ml-12",
    "ml-18"
  ];

  const textStyles = isTitle
    ? level === 0
      ? "text-foreground text-lg font-bold tracking-tight"
      : "text-foreground text-base font-semibold"
    : "text-muted-foreground text-base font-medium";

  const icon = isTitle ? (
    level === 0 ? (
      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-sm flex-shrink-0">
        {index + 1}
      </div>
    ) : (
      <div className={`rounded-full bg-primary/60 ${level === 1 ? "w-2 h-2 mt-3" : "w-1.5 h-1.5 mt-3"} flex-shrink-0`} />
    )
  ) : isBullet ? (
    <div className={`w-2 h-2 rounded-full bg-primary/60 mt-3 flex-shrink-0`} />
  ) : (
    <div className={`w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-3 flex-shrink-0`} />
  );

  return (
    <li key={index} className="flex flex-col gap-1">
      <div className={`${baseStyles} ${indentStyles[Math.min(level, 3)]}`}>
        <div className="mr-4">{icon}</div>
        <span className={textStyles}>{text}</span>
      </div>
    </li>
  );
}

export function CourseDetail({ course, onBack }: CourseDetailProps) {
  const { language } = useLanguage();

  const getLevelColor = (level?: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500 text-white";
      case "Intermediate":
        return "bg-yellow-500 text-white";
      case "Advanced":
        return "bg-destructive text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };

  const t = {
    back: { en: "Back to Courses", es: "Volver a Cursos" },
    description: { en: "Course Description", es: "Descripción del Curso" },
    modules: { en: "Course Modules", es: "Contenido, actividades" },
    requirements: { en: "Requirements", es: "Requisitos" },
    objectives: { en: "Learning Objectives", es: "Objetivos de Aprendizaje" },
    courseInfo: { en: "Course Information", es: "Información del Curso" },
    instructor: { en: "Instructor", es: "Instructor" },
    modality: { en: "Modality", es: "Modalidad" },
    cost: { en: "Cost", es: "Costo" },
    location: { en: "Location", es: "Ubicación" },
    duration: { en: "Duration", es: "Duración" },
    schedule: { en: "Schedule", es: "Horario" },
    startDate: { en: "Start Date", es: "Fecha de Inicio" },
    capacity: { en: "Capacity", es: "Cupo" },
    level: { en: "Level", es: "Nivel" },
    relatedLinks: { en: "Related Links", es: "Enlaces relacionados" },
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

  const findMemberByInstructor = (instructorName: string) => {
    const search = instructorName.toLowerCase().trim();
    const byName = members.find(member => {
      const name = member.name.toLowerCase();
      return name === search || name.includes(search) || search.includes(name);
    });
    return byName || null;
  };

  const instructorMember = course.instructor ? findMemberByInstructor(course.instructor) : null;

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
            {course.tags?.[language]?.map((tag) => (
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
        <h1 className="text-5xl sm:text-6xl mb-6 font-bold tracking-tight">{course.title[language]}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            {course.shortDescription?.[language]}
          </p>


          {course.action1 && (
            <Button asChild size="lg" className="gap-2">
              <a href={course.action1.url} target="_blank" rel="noopener noreferrer">
                <Link className="h-5 w-5" />
                {course.action1.text[language]}
              </a>
            </Button>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h2 className="text-3xl mb-6">{t.description[language]}</h2>
              {course.fullDescription && (
                <article className="max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({children}) => <p className="text-foreground mb-6 leading-relaxed text-lg text-justify hyphens-auto" style={{textAlign: 'justify'}}>{children}</p>,
                      br: () => <br className="mb-2" />,
                      a: ({href, children}) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">{children}</a>
                      ),
                      h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
                      h4: ({children}) => <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>,
                    }}
                  >
                    {course.fullDescription[language]
                      .split('\n')
                      .map(line => line.trim())
                      .filter(line => line.length > 0)
                      .join('\n\n')}
                  </ReactMarkdown>
                </article>
              )}
            </div>

            {/* Description Image */}
            {course.descriptionImage && (
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={course.descriptionImage}
                  alt={course.title[language]}
                  className="w-full max-h-[500px] object-cover"
                />
              </div>
            )}

            {/* Modules */}
            {course.modules && (
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8">
              <h2 className="text-3xl mb-6">{t.modules[language]}</h2>
              <ul className="flex flex-col gap-1">
                {parseModules(course.modules[language]).map((line, index) => renderModuleLine(line, index))}
              </ul>
            </div>
            )}

            {/* Requirements */}
            {course.requirements && (
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h2 className="text-3xl mb-6">{t.requirements[language]}</h2>
              <ul className="space-y-3">
                {course.requirements[language]?.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
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
            <div className="sticky top-24 space-y-6">
              {/* Instructor Card */}
              {course.instructor && (
              <Card className="border-border/60">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">{t.instructor[language]}</h3>
                  <div
                    className={`flex items-center gap-4 ${instructorMember ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                    onClick={() => instructorMember && (window.location.hash = `#about/member/${instructorMember.id}`)}
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                      <ImageWithFallback
                        src={instructorMember?.image || ""}
                        alt={course.instructor}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-lg">{course.instructor}</div>
                      {instructorMember?.role && <div className="text-sm text-primary">{instructorMember.role[language]}</div>}
                    </div>
                  </div>
                </CardContent>
              </Card>
              )}

              <Card className="border-border/60">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-2xl">{t.courseInfo[language]}</h3>

                  <div className="space-y-4">
                    {course.startDate && (
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            {t.startDate[language]}
                          </div>
                          <div className="font-medium">{formatDate(course.startDate, language)}</div>
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
                        <div className="font-medium">{course.schedule[language]}</div>
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
                        <div className="font-medium">{course.duration[language]}</div>
                      </div>
                    </div>
                    )}

                    {course.modality && (
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {t.modality[language]}
                        </div>
                        <div className="font-medium">{course.modality[language]}</div>
                      </div>
                    </div>
                    )}

                    {course.cost && (
                    <div className="flex items-start gap-3">
                      <Wallet className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {t.cost[language]}
                        </div>
                        <div className="font-medium">{course.cost[language]}</div>
                      </div>
                    </div>
                    )}

                    {course.location && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {t.location[language]}
                        </div>
                        <div className="font-medium">{course.location[language]}</div>
                      </div>
                    </div>
                    )}

                    {course.capacity && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {t.capacity[language]}
                        </div>
                        <div className="font-medium">{course.capacity}</div>
                      </div>
                    </div>
                    )}
                  </div>

                  {course.links && course.links.length > 0 && (
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="text-sm text-muted-foreground mb-2">{t.relatedLinks[language]}</h4>
                      <div className="space-y-2">
                        {course.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:underline text-sm"
                          >
                            <ExternalLink className="h-4 w-4 flex-shrink-0" />
                            <span>{link.text[language]}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.action2 && (
                  <Button asChild className="w-full gap-2" size="lg">
                    <a href={course.action2.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                      {course.action2.text[language]}
                    </a>
                  </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
