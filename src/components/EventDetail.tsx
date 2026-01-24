import { ArrowLeft, Calendar as CalendarIcon, MapPin, Clock, Users, CheckCircle, UserCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Calendar } from "./ui/calendar";
import { useLanguage } from "./LanguageProvider";
import { Event } from "../data/events";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface EventDetailProps {
  event: Event;
  onBack: () => void;
}

export function EventDetail({ event, onBack }: EventDetailProps) {
  const { language } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(new Date(event.startDate));

  const t = {
    back: { en: "Back to Events", es: "Volver a Eventos" },
    register: { en: "Register for Event", es: "Registrarse al Evento" },
    summary: { en: "Event Summary", es: "Resumen del Evento" },
    agenda: { en: "Agenda", es: "Agenda" },
    requirements: { en: "Requirements", es: "Requisitos" },
    eventDetails: { en: "Event Details", es: "Detalles del Evento" },
    location: { en: "Location", es: "Ubicación" },
    dateTime: { en: "Date & Time", es: "Fecha y Hora" },
    capacity: { en: "Capacity", es: "Capacidad" },
    speaker: { en: "Speaker / Instructor", es: "Ponente / Instructor" },
    eventDate: { en: "Event Date", es: "Fecha del Evento" },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image */}
      <div className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src={event.coverImage}
          alt={event.title[language]}
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

        {/* Event Header */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-xl mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.map((tag) => (
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
          <p className="text-xl text-muted-foreground mb-8">
            {event.shortDescription[language]}
          </p>

          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{event.location[language]}</span>
            </div>
          </div>

          <Button size="lg" className="gap-2">
            <Users className="h-5 w-5" />
            {t.register[language]}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calendar */}
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h2 className="text-3xl mb-6">{t.eventDate[language]}</h2>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-2xl border"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h2 className="text-3xl mb-6">{t.summary[language]}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {event.fullDescription[language]}
              </p>
            </div>

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
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h2 className="text-3xl mb-6">{t.requirements[language]}</h2>
              <ul className="space-y-3">
                {event.requirements[language].map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Event Details Card */}
            <Card className="border-border/60 sticky top-24">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-2xl">{t.eventDetails[language]}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.dateTime[language]}
                      </div>
                      <div className="font-medium">{event.date}</div>
                      <div className="text-sm text-muted-foreground">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.location[language]}
                      </div>
                      <div className="font-medium">{event.location[language]}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.capacity[language]}
                      </div>
                      <div className="font-medium">{event.capacity}</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full gap-2" size="lg">
                  <Users className="h-5 w-5" />
                  {t.register[language]}
                </Button>
              </CardContent>
            </Card>

            {/* Speaker Card */}
            {event.speaker && (
              <Card className="border-border/60">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">{t.speaker[language]}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border">
                      <ImageWithFallback
                        src={event.speaker.image}
                        alt={event.speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-lg">{event.speaker.name}</div>
                      <div className="text-sm text-primary">{event.speaker.role[language]}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.speaker.bio[language]}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
