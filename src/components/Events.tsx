import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar as CalendarIcon, MapPin, Clock, Users, ArrowRight, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { events } from "../data/events";
import { useLanguage } from "./LanguageProvider";
import { useState, useMemo } from "react";

interface EventsProps {
  onEventClick: (eventId: number) => void;
}

export function Events({ onEventClick }: EventsProps) {
  const { language } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Lógica para ordenar los eventos del más reciente al más antiguo
  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
      const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
      return dateB - dateA;
    });
  }, []);

  const upcomingEvent = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return events.find(event => {
      if (!event.startDate) return false;
      const eventDate = new Date(event.startDate);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    });
  }, []);

  const t = {
    title: { en: "Events", es: "Eventos" },
    subtitle: { en: "Workshops, conferences and community activities", es: "Talleres, conferencias y actividades de la comunidad" },
    viewMore: { en: "View More", es: "Ver Más" },
    upcoming: { en: "Upcoming", es: "Próximamente" },
    calendar: { en: "Event Calendar", es: "Calendario de Eventos" },
    nextEvent: { en: "Next Event", es: "Próximo Evento" },
    noUpcoming: { en: "No upcoming events", es: "Sin eventos próximos" },
  };

  return (
    <section id="events" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl sm:text-6xl">{t.title[language]}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        {/* Calendar at top */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-card rounded-3xl p-6 border border-border/50">
            <div className="space-y-4">
              <h2 className="text-2xl mb-2 text-center">{t.calendar[language]}</h2>
              <div className="flex justify-center">
                <div className="w-full flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-2xl border-none"
                  />
                </div>
              </div>

              {/* Notification Card - GNOME style */}
              <div className="bg-secondary rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-wide mb-1 text-muted-foreground">
                      {t.nextEvent[language]}
                    </div>
                    {upcomingEvent ? (
                      <button
                        onClick={() => onEventClick(upcomingEvent.id)}
                        className="text-left w-full hover:opacity-80 transition-opacity"
                      >
                        <div className="font-medium truncate">
                          {upcomingEvent.title[language]}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <CalendarIcon className="h-3.5 w-3.5" />
                          <span>{upcomingEvent.startDate}</span>
                          {upcomingEvent.time && (
                            <>
                              <span>·</span>
                              <Clock className="h-3.5 w-3.5" />
                              <span>{upcomingEvent.time}</span>
                            </>
                          )}
                        </div>
                      </button>
                    ) : (
                      <div className="text-sm text-muted-foreground">
                        {t.noUpcoming[language]}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline - Vertical Event Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {sortedEvents.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline connector (Se mantiene idéntico, solo cambia la referencia al arreglo ordenado) */}
              {index < sortedEvents.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-border -mb-6" />
              )}

              {/* Event Card */}
              <div className="flex gap-6">
                {/* Date indicator */}
                <div className="flex-shrink-0 w-16 pt-2">
                  <div className="bg-primary text-primary-foreground rounded-2xl p-3 text-center">
                    <div className="text-2xl leading-none mb-1">
                      {/* CORRECCIÓN: Usar getUTCDate() para evitar el desfase de la zona horaria local */}
                      {event.startDate ? new Date(event.startDate).getUTCDate() : '?'}
                    </div>
                    <div className="text-xs uppercase">
                      {/* CORRECCIÓN: Añadir timeZone: 'UTC' al formatear el mes */}
                      {event.startDate ? new Date(event.startDate).toLocaleString('default', { month: 'short', timeZone: 'UTC' }) : '-'}
                    </div>
                  </div>
                </div>

                {/* Event content */}
                <Card className="flex-1 overflow-hidden hover:shadow-lg transition-all duration-300 border-border/60 group">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div
                      className="md:col-span-2 aspect-video md:aspect-auto relative overflow-hidden cursor-pointer"
                      onClick={() => onEventClick(event.id)}
                    >
                      <ImageWithFallback
                        src={event.coverImage || event.image || ""}
                        alt={event.title[language]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {event.status === "upcoming" && (
                        <Badge className="absolute top-4 left-4 shadow-lg bg-green-500">
                          {t.upcoming[language]}
                        </Badge>
                      )}
                    </div>
                    <div className="md:col-span-3 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {event.tags?.[language].slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">
                        {event.title[language]}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {(event.summary || event.shortDescription)?.[language]}
                      </p>
                      <div className="space-y-2 mb-4 text-sm">
                        {event.startDate && (
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-muted-foreground">{event.startDate}</span>
                          </div>
                        )}
                        {event.time && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-muted-foreground">{event.time}</span>
                          </div>
                        )}
                        {event.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-muted-foreground">{event.location.name[language]}</span>
                          </div>
                        )}
                        {event.locations && event.locations.map((loc, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-muted-foreground">{loc.name[language]}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        onClick={() => onEventClick(event.id)}
                      >
                        {t.viewMore[language]} <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
