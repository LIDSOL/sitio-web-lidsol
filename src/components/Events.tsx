import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar as CalendarIcon, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { events } from "../data/events";
import { useLanguage } from "./LanguageProvider";
import { useState } from "react";

interface EventsProps {
  onEventClick: (eventId: number) => void;
}

export function Events({ onEventClick }: EventsProps) {
  const { language } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(new Date());

  const t = {
    title: { en: "Events", es: "Eventos" },
    subtitle: { en: "Workshops, conferences and community activities", es: "Talleres, conferencias y actividades de la comunidad" },
    viewMore: { en: "View More", es: "Ver Más" },
    upcoming: { en: "Upcoming", es: "Próximamente" },
    calendar: { en: "Event Calendar", es: "Calendario de Eventos" },
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
          <div className="bg-card rounded-3xl p-8 border border-border/50">
            <h2 className="text-2xl mb-6 text-center">{t.calendar[language]}</h2>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-2xl border"
              />
            </div>
          </div>
        </div>

        {/* Timeline - Vertical Event Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline connector */}
              {index < events.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-border -mb-6" />
              )}
              
              {/* Event Card */}
              <div className="flex gap-6">
                {/* Date indicator */}
                <div className="flex-shrink-0 w-16 pt-2">
                  <div className="bg-primary text-primary-foreground rounded-2xl p-3 text-center">
                    <div className="text-2xl leading-none mb-1">
                      {event.startDate ? new Date(event.startDate).getDate() : '?'}
                    </div>
                    <div className="text-xs uppercase">
                      {event.startDate ? new Date(event.startDate).toLocaleString('default', { month: 'short' }) : '-'}
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
                        src={event.image || ""}
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
                        {event.tags?.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">
                        {event.title[language]}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {event.shortDescription?.[language]}
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
                            <span className="text-muted-foreground">{event.location[language]}</span>
                          </div>
                        )}
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
