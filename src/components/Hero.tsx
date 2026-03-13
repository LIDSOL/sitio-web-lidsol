import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { language } = useLanguage();
  const { theme } = useTheme();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const carouselImages = [
    {
      src: "/hero/eddie-sennov-Tiy7aJwWPvc-unsplash.jpg",
      alt: "Debian Neofetch"
    },
    {
      src: "/hero/lukas-uZkHtWsi2dE-unsplash.jpg",
      alt: "Arch sticker"
    },
    {
      src: "/hero/gabriel-heinzer-4Mw7nkQDByk-unsplash.jpg",
      alt: "HTOP"
    },
    {
      src: "/hero/vishnu-mohanan-rZKdS0wI8Ks-unsplash.jpg",
      alt: "Raspberry pi"
    },
    {
      src: "/hero/lukas-NLSXFjl_nhc-unsplash.jpg",
      alt: "Thinkpad"
    }
  ];

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
  }, [carouselImages.length]);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    resetTimer();
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetTimer]);

  const t = {
    tagline: { en: "FI ● UNAM ● CDMX", es: "FI ● UNAM ● CDMX" },
    description: {
      en: "We are a laboratory formed by volunteers, students, former students, and academics interested in the development of free and open technologies.",
      es: "Somos un laboratorio formado por voluntarios, estudiantes, ex-estudiantes y académicos interesados en el desarrollo de tecnologías libres y abiertas"
    },
    exploreProjects: { en: "Explore Projects", es: "Explorar Proyectos" },
    joinCommunity: { en: "Join Our Community", es: "Únete a la Comunidad" },
    activeProjects: { en: "Active Projects", es: "Proyectos Activos" },
    contributors: { en: "Contributors", es: "Contribuidores" },
    freeOpen: { en: "Free & Open", es: "Libre y Abierto" },
    // Agregamos los textos del correo aquí para que sean traducibles
    contactSubject: { en: "Interest in LIDSoL", es: "Interés en LIDSoL" },
    contactBody: {
        en: "Hello, I would like to join the laboratory...",
        es: "Hola, me gustaría unirme al laboratorio..."
    },
  };

  // CORRECCIÓN: Definimos el link después de 't' y usamos el objeto de traducción
  const mailtoLink = `mailto:lidsol@protonmail.com?subject=${encodeURIComponent(t.contactSubject[language])}&body=${encodeURIComponent(t.contactBody[language])}`;

  const glowDark = {
    default: `
      0 0 15px rgba(28,113,216,0.15),
      0 0 30px rgba(28,113,216,0.1),
      0 0 50px rgba(28,113,216,0.08),
      0 0 75px rgba(28,113,216,0.05)
    `,
    hover: `
      0 0 20px rgba(28,113,216,0.25),
      0 0 40px rgba(28,113,216,0.2),
      0 0 60px rgba(28,113,216,0.15),
      0 0 90px rgba(28,113,216,0.1)
    `
  };

  const glowLight = {
    default: `
      0 0 20px rgba(28,113,216,0.4),
      0 0 40px rgba(28,113,216,0.3),
      0 0 70px rgba(28,113,216,0.2),
      0 0 100px rgba(28,113,216,0.15)
    `,
    hover: `
      0 0 30px rgba(28,113,216,0.5),
      0 0 60px rgba(28,113,216,0.4),
      0 0 90px rgba(28,113,216,0.3),
      0 0 120px rgba(28,113,216,0.2)
    `
  };

  const currentGlow = theme === "dark" ? glowDark : glowLight;

  const carouselGlowDark = `
    0 0 15px rgba(28,113,216,0.1),
    0 0 30px rgba(28,113,216,0.08),
    0 0 50px rgba(28,113,216,0.06),
    0 0 75px rgba(28,113,216,0.04),
    0 0 100px rgba(28,113,216,0.01)
  `;

  const carouselGlowLight = `
    0 0 20px rgba(28,113,216,0.3),
    0 0 40px rgba(28,113,216,0.25),
    0 0 60px rgba(28,113,216,0.2),
    0 0 80px rgba(28,113,216,0.15),
    0 0 100px rgba(28,113,216,0.1)
  `;

  const currentCarouselGlow = theme === "dark" ? carouselGlowDark : carouselGlowLight;

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1c71d8]/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#6C63FF]/10 rounded-full blur-[110px]" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#3B82F6]/10 rounded-full blur-[90px]" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#62a0ea]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block px-5 py-2 bg-primary/10 text-foreground rounded-full border border-primary/20">
              {t.tagline[language]}
            </div>


<h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground">
  <ImageWithFallback
    src={theme === "dark" ? "/hero/LIDSOLlogoColor-oscuro.svg" : "/hero/LIDSOLlogoColor-claro.svg"}
    alt="LIDSoL"
    className="h-14 w-auto"
    style={{
      //Para tener efecto más sutil.
      filter: `
        drop-shadow(0 0 10px rgba(28,113,216,0.7))
        drop-shadow(0 0 22px rgba(28,113,216,0.1))
        drop-shadow(0 0 50px rgba(28,113,216,0.05))
      `
    }}
  />
</h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              {t.description[language]}
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Explore Projects button with glow */}
              <Button
                asChild
                size="lg"
                className="relative transition-all duration-300"
                style={{
                  animation: "wiggle 1s ease-in-out infinite",
                  boxShadow: currentGlow.default
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = currentGlow.hover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = currentGlow.default;
                }}
              >
                <Link href="#projects">
                  {t.exploreProjects[language]} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              {/* Join Community button with subtle glow */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-md scale-110" />
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="relative"
                >
                  <a href={mailtoLink}>
                    {t.joinCommunity[language]}
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">{t.activeProjects[language]}</div>
              </div>
              <div>
                <div className="text-3xl text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">{t.contributors[language]}</div>
              </div>
              <div>
                <div className="text-3xl text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">{t.freeOpen[language]}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border relative"
              style={{
                boxShadow: currentCarouselGlow
              }}
            >
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentImageIndex}
                  custom={direction}
                  initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={carouselImages[currentImageIndex].src}
                    alt={carouselImages[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons at bottom right */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={prevImage}
                  className="bg-card/95 backdrop-blur hover:bg-card p-2.5 rounded-full shadow-md transition-all border border-border/50"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-card/95 backdrop-blur hover:bg-card p-2.5 rounded-full shadow-md transition-all border border-border/50"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

