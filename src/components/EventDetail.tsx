import { ArrowLeft, Calendar as CalendarIcon, CalendarX, MapPin, Clock, Users, CheckCircle, Link as LinkIcon, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Calendar } from "./ui/calendar";
import { useLanguage } from "./LanguageProvider";
import { Event } from "../data/events";
import { members } from "../data/members";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface EventDetailProps {
  event: Event;
  onBack: () => void;
  onMemberClick?: (memberId: number) => void;
}

function getMemberById(id: number) {
  return members.find(m => m.id === id);
}

function parseEventDate(dateStr: string): Date | null {
  if (!dateStr) return null;

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateStr)) {
    console.warn(`Invalid date format: "${dateStr}". Expected YYYY-MM-DD`);
    return null;
  }

  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) {
    console.warn(`Invalid date: "${dateStr}"`);
    return null;
  }

  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    console.warn(`Invalid date: "${dateStr}"`);
    return null;
  }

  return date;
}

export function EventDetail({ event, onBack, onMemberClick }: EventDetailProps) {
  const { language } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(() => parseEventDate(event.startDate));

  const t = {
    back: { en: "Back to Events", es: "Volver a Eventos" },
    description: { en: "Description", es: "Descripción" },
    agenda: { en: "Agenda", es: "Agenda" },
    requirements: { en: "Requirements", es: "Requisitos" },
    eventDetails: { en: "Event Details", es: "Detalles del Evento" },
    location: { en: "Location", es: "Ubicación" },
    dateTime: { en: "Date & Time", es: "Fecha y Hora" },
    speakers: { en: "Speakers", es: "Ponentes" },
    eventDate: { en: "Event Date", es: "Fecha del Evento" },
    startDate: { en: "Start Date", es: "Fecha de inicio" },
    endDate: { en: "End Date", es: "Fecha de fin" },
    time: { en: "Time", es: "Hora" },
    capacity: { en: "Capacity", es: "Capacidad" },
    relatedLinks: { en: "Related Links", es: "Enlaces relacionados" },
  };

  const matchedSpeakers = (event.speakers || []).map(speaker => {
    if (speaker.memberId) {
      const member = getMemberById(speaker.memberId);
      if (member) {
        return {
          memberId: member.id,
          name: member.name,
          role: member.role,
          bio: member.bio,
          image: member.image,
        };
      }
    }
    if (speaker.name) {
      const matchedMember = members.find(m => m.name.toLowerCase() === speaker.name!.toLowerCase());
      if (matchedMember) {
        return {
          memberId: matchedMember.id,
          name: matchedMember.name,
          role: matchedMember.role,
          bio: matchedMember.bio,
          image: matchedMember.image,
        };
      }
    }
    return {
      memberId: undefined,
      name: speaker.name || '',
      role: speaker.role,
      bio: speaker.bio,
      image: speaker.image,
    };
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image (Hero) */}
      <div className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src={event.coverImage || event.image || ""}
          alt={event.title[language]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 via-background/50 via-background/20 to-transparent" />
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

        {/* Event Header */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-xl mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags?.[language].map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            {event.status === "upcoming" && (
              <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                Upcoming
              </Badge>
            )}
          </div>

          <h1 className="text-5xl sm:text-6xl mb-6">{event.title[language]}</h1>
          {event.summary && (
            <p className="text-xl text-muted-foreground mb-8">
              {event.summary[language]}
            </p>
          )}

          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            {event.startDate && (
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                <span>{event.startDate}</span>
              </div>
            )}
            {event.time && (
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>{event.time}</span>
              </div>
            )}
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {event.location.url ? (
                  <a
                    href={event.location.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    {event.location.name[language]}
                  </a>
                ) : (
                  <span>{event.location.name[language]}</span>
                )}
              </div>
            )}
            {event.locations && event.locations.length > 0 && event.locations.map((loc, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {loc.url ? (
                  <a
                    href={loc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    {loc.name[language]}
                  </a>
                ) : (
                  <span>{loc.name[language]}</span>
                )}
              </div>
            ))}
          </div>

          {event.action1 && (
            <a
              href={event.action1.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                <ExternalLink className="h-5 w-5" />
                {event.action1.text[language]}
              </Button>
            </a>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calendar */}
            <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-xl">
              <h2 className="text-3xl mb-6">{t.eventDate[language]}</h2>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  defaultMonth={date}
                  className="rounded-2xl border"
                />
              </div>
            </div>

            {/* Description Image */}
            {event.image && (
              <div className="overflow-hidden rounded-2xl mb-8 shadow-xl">
                <img
                  src={event.image}
                  alt={event.title[language]}
                  className="w-full max-h-[500px] object-cover"
                />
              </div>
            )}

            {/* Description */}
            {event.description && (
            <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-xl">
              <h2 className="text-3xl mb-6">{t.description[language]}</h2>
              <article className="max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({children}) => <p className="text-foreground mb-6 leading-relaxed text-lg text-justify hyphens-auto" style={{textAlign: 'justify'}}>{children}</p>,
                    img: ({src, alt}) => (
                      <figure className="my-8">
                        <img src={src} alt={alt} className="rounded-2xl w-full" loading="lazy" decoding="async" />
                        {alt && <figcaption className="text-center text-muted-foreground mt-2 text-sm">{alt}</figcaption>}
                      </figure>
                    ),
                    a: ({href, children}) => (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{children}</a>
                    ),
                    h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
                    h4: ({children}) => <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>,
                    ul: ({children}) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
                    ol: ({children}) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
                    li: ({children}) => <li className="text-muted-foreground">{children}</li>,
                    blockquote: ({children}) => <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">{children}</blockquote>,
                  }}
                >
                  {event.description[language]}
                </ReactMarkdown>
              </article>
            </div>
            )}

            {/* Agenda */}
            {event.agenda && (
              <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8">
                <h2 className="text-3xl mb-6">{t.agenda[language]}</h2>
                <ul className="space-y-3">
                  {event.agenda[language].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {event.requirements && (
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h2 className="text-3xl mb-6">{t.requirements[language]}</h2>
              <ul className="space-y-3">
                {event.requirements[language]?.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24 space-y-6">
            {/* Event Details Card */}
            <Card className="border-border/60">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-2xl">{t.eventDetails[language]}</h3>

                <div className="space-y-4">
                  {event.time && (
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.time[language]}
                      </div>
                      <div className="font-medium">{event.time}</div>
                    </div>
                  </div>
                  )}

                  {event.startDate && (
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.startDate[language]}
                      </div>
                      <div className="font-medium">{event.startDate}</div>
                    </div>
                  </div>
                  )}

                  {event.endDate && (
                  <div className="flex items-start gap-3">
                    <CalendarX className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.endDate[language]}
                      </div>
                      <div className="font-medium text-muted-foreground">{event.endDate}</div>
                    </div>
                  </div>
                  )}

                  {event.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.location[language]}
                      </div>
                      {event.location.url ? (
                        <a
                          href={event.location.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary hover:underline"
                        >
                          {event.location.name[language]}
                        </a>
                      ) : (
                        <div className="font-medium">{event.location.name[language]}</div>
                      )}
                    </div>
                  </div>
                  )}

                  {event.locations && event.locations.length > 0 && event.locations.map((loc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.location[language]}
                      </div>
                      {loc.url ? (
                        <a
                          href={loc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary hover:underline"
                        >
                          {loc.name[language]}
                        </a>
                      ) : (
                        <div className="font-medium">{loc.name[language]}</div>
                      )}
                    </div>
                  </div>
                  ))}

                  {event.capacity && (
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.capacity[language]}
                      </div>
                      <div className="font-medium">{event.capacity}</div>
                    </div>
                  </div>
                  )}

                  {event.links && event.links.length > 0 && (
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="text-sm text-muted-foreground mb-2">{t.relatedLinks[language]}</h4>
                      <div className="space-y-2">
                        {event.links.map((link, index) => (
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
                </div>

                {event.action2 && (
                  <a
                    href={event.action2.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full gap-2" size="lg">
                      <ExternalLink className="h-5 w-5" />
                      {event.action2.text[language]}
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>

            {/* Speakers Cards */}
            {matchedSpeakers.length > 0 && (
              <Card className="border-border/60">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">{t.speakers[language]}</h3>
                  <div className="space-y-4">
                    {matchedSpeakers.map((speaker, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-4 ${speaker.memberId ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                        onClick={() => speaker.memberId && onMemberClick?.(speaker.memberId)}
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                          <ImageWithFallback
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-lg">{speaker.name}</div>
                          {speaker.role && <div className="text-sm text-primary">{speaker.role[language]}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
