import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageSquare, Calendar, BookOpen } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Community() {
  const { language } = useLanguage();

  const t = {
    title: { en: "Join the Community", es: "Únete a la comunidad" },
    description: { 
      en: "Connect with developers, designers, and free software enthusiasts from around the world. Whether you're a beginner or an expert, there's a place for you here.",
      es: "Conéctate con desarrolladores, diseñadores y entusiastas del software libre de todo el mundo. Ya seas principiante o experto, hay un lugar para ti aquí."
    },
    ongoingProjects: { en: "Ongoing Projects", es: "Proyectos en curso" },
    ongoingProjectsDesc: { 
      en: "You can contribute to ongoing projects",
      es: "Puedes contribuir a los proyectos en curso"
    },
    eventsHackathons: { en: "Events and Hackathons", es: "Eventos y Hackathons" },
    eventsHackathonsDesc: { 
      en: "Participate in regular events and coding challenges",
      es: "Participa en eventos regulares y desafíos de programación"
    },
    learningResources: { en: "Learning Resources", es: "Recursos de aprendizaje" },
    learningResourcesDesc: { 
      en: "Access tutorials, guides, and mentorship programs",
      es: "Accede a tutoriales, guías y programas de mentoría"
    },
    telegram: { en: "Telegram", es: "Telegram" },
    viewCalendar: { en: "View Calendar", es: "Ver calendario" },
  };

  return (
    <section id="community" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-primary-foreground/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1568992688243-52608227497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjIyMTQwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Collaboration workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl sm:text-5xl">{t.title[language]}</h2>
            
            <p className="text-xl text-primary-foreground/90">
              {t.description[language]}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary-foreground/20">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">{t.ongoingProjects[language]}</h3>
                  <p className="text-primary-foreground/80">{t.ongoingProjectsDesc[language]}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary-foreground/20">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">{t.eventsHackathons[language]}</h3>
                  <p className="text-primary-foreground/80">{t.eventsHackathonsDesc[language]}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary-foreground/20">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">{t.learningResources[language]}</h3>
                  <p className="text-primary-foreground/80">{t.learningResourcesDesc[language]}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" variant="secondary">
                {t.telegram[language]}
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                {t.viewCalendar[language]}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
