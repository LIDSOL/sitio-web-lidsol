import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";
import { events } from "../data/events";

interface LatestEventProps {
  onViewEvent: (eventId: number) => void;
  onViewAllEvents: () => void;
}

export function LatestEvent({ onViewEvent, onViewAllEvents }: LatestEventProps) {
  const { language } = useLanguage();
  
  // Get the first upcoming event
  const latestEvent = events.find(e => e.status === "upcoming") || events[0];

  const t = {
    title: { en: "Upcoming Event", es: "Próximo Evento" },
    viewMore: { en: "View Event Details", es: "Ver Detalles del Evento" },
    viewAll: { en: "View All Events", es: "Ver Todos los Eventos" },
  };

  return (
    <section id="latest-event" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl mb-4">{t.title[language]}</h2>
        </div>

        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/60 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            <div 
              className="aspect-video md:aspect-auto relative overflow-hidden cursor-pointer" 
              onClick={() => onViewEvent(latestEvent.id)}
            >
              <ImageWithFallback
                src={latestEvent.image}
                alt={latestEvent.title[language]}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-4 left-4 shadow-lg">
                {latestEvent.status === "upcoming" ? "Próximamente" : "Destacado"}
              </Badge>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {latestEvent.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-3xl mb-4">{latestEvent.title[language]}</h3>
                <p className="text-muted-foreground mb-6">
                  {latestEvent.shortDescription[language]}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{latestEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{latestEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{latestEvent.location[language]}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button 
                  className="gap-2 flex-1"
                  onClick={() => onViewEvent(latestEvent.id)}
                >
                  {t.viewMore[language]} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={onViewAllEvents}
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
