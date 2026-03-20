import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Pickaxe, BookCheck, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

export function Community() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const glowDark = {
    default: "0 0 15px rgba(28,113,216,0.15), 0 0 30px rgba(28,113,216,0.1), 0 0 50px rgba(28,113,216,0.08), 0 0 75px rgba(28,113,216,0.05)",
    hover: "0 0 20px rgba(28,113,216,0.25), 0 0 40px rgba(28,113,216,0.2), 0 0 60px rgba(28,113,216,0.15), 0 0 90px rgba(28,113,216,0.1)"
  };

  const glowLight = {
    default: "0 0 20px rgba(28,113,216,0.4), 0 0 40px rgba(28,113,216,0.3), 0 0 70px rgba(28,113,216,0.2), 0 0 100px rgba(28,113,216,0.15)",
    hover: "0 0 30px rgba(28,113,216,0.5), 0 0 60px rgba(28,113,216,0.4), 0 0 90px rgba(28,113,216,0.3), 0 0 120px rgba(28,113,216,0.2)"
  };

  const currentGlow = theme === "dark" ? glowDark : glowLight;

  const t = {
    title: { en: "Join the Community", es: "Únete a la comunidad" },
    description: {
      en: "Connect with free‑software enthusiasts.",
      es: "Conéctate con entusiastas del software libre."
    },
    servicioSocial: { en: "Do your social service here", es: "Libera tu servicio social aquí" },
    servicioSocialDesc: {
      en: "If you are a student of Computer Engineering at the FI UNAM, you can complete your social service with us, starting from the third semester.",
      es: "Si eres estudiante de Ingeniería en Computación de la FI UNAM puedes liberar tu servicio social con nosotros, a partir del tercer semestre."
    },
    events: { en: "Join events and courses", es: "Participa en eventos y cursos" },
    eventsDesc: {
      en: "We seek to promote and drive research and development of technologies through projects, courses, conferences, and installation events.",
      es: "Buscamos promover e impulsar la investigación y desarrollo de tecnologías a través de cursos, conferencias y eventos de instalación."
    },
    learningResources: { en: "Collaborate on Projects", es: "Colabora en proyectos" },
    learningResourcesDesc: {
      en: "Join active initiatives to strengthen your skills and apply your knowledge. You can become part of frontend, backend, and infrastructure teams, contributing to the development of real, high‑impact solutions.",
      es: "Únete a los proyectos en marcha para desarrollar tus habilidades y aplicar tus conocimientos. Podrás integrarte en equipos de frontend, backend e infraestructura, contribuyendo al desarrollo de soluciones reales y de alto impacto."
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
                src="/home/gabo-romay-j7Xs-riThbU-unsplash.jpg"
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
                  <BookCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">{t.servicioSocial[language]}</h3>
                  <p className="text-primary-foreground/80">{t.servicioSocialDesc[language]}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary-foreground/20">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">{t.events[language]}</h3>
                  <p className="text-primary-foreground/80">{t.eventsDesc[language]}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary-foreground/20">
                  <Pickaxe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">{t.learningResources[language]}</h3>
                  <p className="text-primary-foreground/80">{t.learningResourcesDesc[language]}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" variant="secondary" className="gap-2 border-2 transition-all duration-300"
                style={{ animation: "wiggle 1s ease-in-out infinite", boxShadow: currentGlow.default }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = currentGlow.hover; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = currentGlow.default; }}
                onClick={() => window.location.hash = "#events"}
              >
                {t.viewCalendar[language]} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://t.me/lidsol" target="_blank" rel="noopener noreferrer">
                  {t.telegram[language]}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
