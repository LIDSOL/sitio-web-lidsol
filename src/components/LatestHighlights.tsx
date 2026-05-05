import { Badge } from "./ui/badge";
import { Calendar, Clock, MapPin, BookOpen, User, ArrowRight, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";
import { blogPosts } from "../data/blogPosts";
import { courses } from "../data/courses";
import { events, getEventStatus } from "../data/events";

interface LatestHighlightsProps {
  onViewPost: (id: number) => void;
  onViewAllPosts: () => void;
  onViewCourse: (id: number) => void;
  onViewAllCourses: () => void;
  onViewEvent: (id: number) => void;
  onViewAllEvents: () => void;
}

export function LatestHighlights({
  onViewPost,
  onViewAllPosts,
  onViewCourse,
  onViewAllCourses,
  onViewEvent,
  onViewAllEvents,
}: LatestHighlightsProps) {
  const { language } = useLanguage();

  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date[language] || a.date.es).getTime();
    const dateB = new Date(b.date[language] || b.date.es).getTime();
    return dateB - dateA;
  });

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.startDate || a.publishDate || "1970-01-01").getTime();
    const dateB = new Date(b.startDate || b.publishDate || "1970-01-01").getTime();
    return dateB - dateA;
  });

  const sortedCourses = [...courses].sort((a, b) => {
    const dateA = new Date(a.startDate || "1970-01-01").getTime();
    const dateB = new Date(b.startDate || "1970-01-01").getTime();
    return dateB - dateA;
  });

  const upcomingEvent = (() => {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const futureEvents = events
      .filter(event => {
        if (!event.startDate) return false;
        const [year, month, day] = event.startDate.split('-').map(Number);
        const eventDate = new Date(Date.UTC(year, month - 1, day));
        return eventDate >= today;
      })
      .sort((a, b) => {
        const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
        const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
        return dateA - dateB;
      });
    return futureEvents[0] || null;
  })();

  const latestPost = sortedBlogPosts[0];
  const latestCourse = sortedCourses[0];
  const latestEvent = upcomingEvent;

  const t = {
    sectionLabel: { en: "Highlights", es: "Destacados" },
    sectionTitle: { en: "What's happening at LIDSOL", es: "Lo que pasa en LIDSOL" },
    sectionSub: {
      en: "Stay up to date with our latest blog posts, courses, and events.",
      es: "Mantente al día con nuestras últimas publicaciones, cursos y eventos.",
    },
    blogLabel: { en: "Blog", es: "Blog" },
    courseLabel: { en: "Course", es: "Curso" },
    eventLabel: { en: "Event", es: "Evento" },
    readMore: { en: "Read article", es: "Leer artículo" },
    viewCourse: { en: "View course", es: "Ver curso" },
    viewEvent: { en: "View event", es: "Ver evento" },
    seeAllPosts: { en: "See all posts", es: "Ver todos los posts" },
    seeAllCourses: { en: "See all courses", es: "Ver todos los cursos" },
    seeAllEvents: { en: "See all events", es: "Ver todos los eventos" },
    upcoming: { en: "Upcoming", es: "Próximamente" },
    ongoing: { en: "Ongoing", es: "En curso" },
    readTime: { en: "min read", es: "min de lectura" },
    starts: { en: "Starts", es: "Inicia" },
    getLevelColor: (level: string) => {
      if (level === "Beginner" || level === "Principiante")
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      if (level === "Intermediate" || level === "Intermedio")
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
      return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";
    },
  };

  return (
    <section id="highlights" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            {t.sectionLabel[language]}
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-4xl sm:text-5xl mb-2">{t.sectionTitle[language]}</h2>
              <p className="text-muted-foreground max-w-xl">{t.sectionSub[language]}</p>
            </div>
          </div>
        </div>

        {/* All cards container */}
        <div className="space-y-6 mb-6">
          {/* Top row — Blog + Course */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Blog card */}
            <div
              className="group bg-card rounded-2xl border border-border overflow-hidden flex flex-col cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => onViewPost(latestPost.id)}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={latestPost.image}
                  alt={latestPost.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Label row */}
                <div className="flex items-center flex-wrap gap-2 mb-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {t.blogLabel[language]}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  {latestPost.tags[language]?.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {latestPost.title[language]}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground line-clamp-2 mb-0">
                  {latestPost.excerpt[language]}
                </p>

                {/* Footer */}
                <div className="flex items-center pt-4">
                  <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2">
                    {t.readMore[language]} <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground pt-4 border-t border-border/60">
                  <div className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    <span>{latestPost.authors[language]?.[0] || latestPost.authors.es?.[0]}</span>
                  </div>
                  <span className="text-muted-foreground/40">·</span>
                  <span>{latestPost.readTime[language] || latestPost.readTime.es} {t.readTime[language]}</span>
                </div>
              </div>
            </div>

            {/* Course card */}
            <div
              className="group bg-card rounded-2xl border border-border overflow-hidden flex flex-col cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => onViewCourse(latestCourse.id)}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={latestCourse.image || latestCourse.coverImage || ""}
                  alt={latestCourse.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {latestCourse.level && (
                  <Badge
                    className={`absolute top-3 right-3 rounded-full border text-xs ${t.getLevelColor(latestCourse.level[language])}`}
                  >
                    {latestCourse.level[language]}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
              {/* Label row */}
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {t.courseLabel[language]}
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-xs text-muted-foreground">{latestCourse.duration?.[language] || latestCourse.duration?.es}</span>
              </div>

                {/* Title */}
                <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {latestCourse.title[language]}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground line-clamp-2 mb-0">
                  {latestCourse.shortDescription?.[language] || latestCourse.shortDescription?.es}
                </p>

                {/* Footer */}
                <div className="flex items-center pt-4">
                  <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2">
                    {t.viewCourse[language]} <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground pt-4 border-t border-border/60">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>{latestCourse.instructor}</span>
                  </div>
                  <span className="text-muted-foreground/40">·</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{latestCourse.startDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row — Featured Event (wide card) */}
          <div
            className="group bg-card rounded-2xl border border-border overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 min-h-[250px]"
            onClick={() => onViewEvent(latestEvent.id)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative overflow-hidden h-40 md:h-auto md:min-h-[200px]">
                <ImageWithFallback
                  src={latestEvent.coverImage || latestEvent.image || ""}
                  alt={latestEvent.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
                {(() => {
                  const status = getEventStatus(latestEvent);
                  if (status === "upcoming") {
                    return (
                      <Badge className="absolute top-4 left-4 rounded-full bg-primary text-primary-foreground shadow-md">
                        {t.upcoming[language]}
                      </Badge>
                    );
                  }
                  if (status === "ongoing") {
                    return (
                      <Badge className="absolute top-4 left-4 rounded-full bg-blue-500 text-white shadow-md">
                        {t.ongoing[language]}
                      </Badge>
                    );
                  }
                  return null;
                })()}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6">
                <div className="flex flex-col flex-1">
                  {/* Label + tags */}
                  <div className="flex items-center flex-wrap gap-2 mb-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      {t.eventLabel[language]}
                    </span>
                    <span className="text-muted-foreground/40">·</span>
                    {latestEvent.tags?.[language].slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {latestEvent.title[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground line-clamp-3 flex-1 min-h-[3rem]">
                    {latestEvent.summary?.[language]}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center pt-4">
                  <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2">
                    {t.viewEvent[language]} <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Meta info - inline on desktop */}
                <div className="flex items-center flex-wrap gap-4 text-sm text-muted-foreground pt-4 border-t border-border/60">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    <span>{latestEvent.startDate}</span>
                  </div>
                  <span className="text-muted-foreground/40">·</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    <span>{latestEvent.time}</span>
                  </div>
                  <span className="text-muted-foreground/40">·</span>
                    <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>{latestEvent.locations?.[0]?.name[language]}</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom links row */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <button
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            onClick={onViewAllPosts}
          >
            {t.seeAllPosts[language]} <ChevronRight className="h-4 w-4" />
          </button>
          <button
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            onClick={onViewAllCourses}
          >
            {t.seeAllCourses[language]} <ChevronRight className="h-4 w-4" />
          </button>
          <button
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            onClick={onViewAllEvents}
          >
            {t.seeAllEvents[language]} <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
