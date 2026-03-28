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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { language } = useLanguage();
  const { theme } = useTheme();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const carouselImages = [
    {
      src: "/home/eddie-sennov-Tiy7aJwWPvc-unsplash.jpg",
      alt: "Debian Neofetch"
    },
    {
      src: "/home/lukas-uZkHtWsi2dE-unsplash.jpg",
      alt: "Arch sticker"
    },
    {
      src: "/home/gabriel-heinzer-4Mw7nkQDByk-unsplash.jpg",
      alt: "HTOP"
    },
    {
      src: "/home/vishnu-mohanan-rZKdS0wI8Ks-unsplash.jpg",
      alt: "Raspberry pi"
    },
    {
      src: "/home/lukas-NLSXFjl_nhc-unsplash.jpg",
      alt: "Thinkpad"
    }
  ];

  useEffect(() => {
    carouselImages.forEach((img) => {
      const image = new Image();
      image.src = img.src;
    });
  }, []);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
  }, [carouselImages.length]);

  const nextImage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    resetTimer();
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning, carouselImages.length, resetTimer]);

  const prevImage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    resetTimer();
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning, carouselImages.length, resetTimer]);

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
    contactSubject: { en: "Interest in LIDSoL", es: "Interés en LIDSoL" },
    contactBody: {
        en: "Hello, I would like to join the laboratory...",
        es: "Hola, me gustaría unirme al laboratorio..."
    },
  };

  const mailtoLink = `mailto:lidsol@protonmail.com?subject=${encodeURIComponent(t.contactSubject[language])}&body=${encodeURIComponent(t.contactBody[language])}`;

  const glowDark = {
    default: `
      0 0 14px rgba(28,113,216,0.35),
      0 0 28px rgba(28,113,216,0.25),
      0 0 49px rgba(28,113,216,0.18),
      0 0 70px rgba(28,113,216,0.11)
    `,
    hover: `
      0 0 21px rgba(28,113,216,0.49),
      0 0 42px rgba(28,113,216,0.35),
      0 0 63px rgba(28,113,216,0.25),
      0 0 91px rgba(28,113,216,0.14)
    `
  };

  const glowLight = {
    default: `
      0 0 14px rgba(28,113,216,0.42),
      0 0 35px rgba(28,113,216,0.32),
      0 0 56px rgba(28,113,216,0.21),
      0 0 77px rgba(28,113,216,0.14)
    `,
    hover: `
      0 0 25px rgba(28,113,216,0.53),
      0 0 49px rgba(28,113,216,0.39),
      0 0 70px rgba(28,113,216,0.28),
      0 0 98px rgba(28,113,216,0.18)
    `
  };

  const currentGlow = theme === "dark" ? glowDark : glowLight;

  const exploreButtonGlow = theme === "dark"
    ? `0 0 7px rgba(28,113,216,0.01), 0 0 14px rgba(28,113,216,0.02), 0 0 25px rgba(28,113,216,0.1), 0 0 35px rgba(28,113,216,0.3)`
    : `0 0 7px rgba(28,113,216,0.1), 0 0 18px rgba(28,113,216,0.2), 0 0 28px rgba(28,113,216,0.4), 0 0 40px rgba(28,113,216,0.9)`;

  const exploreButtonGlowHover = theme === "dark"
    ? `0 0 11px rgba(28,113,216,0.49), 0 0 21px rgba(28,113,216,0.15), 0 0 32px rgba(28,113,216,0.25), 0 0 46px rgba(28,113,216,0.1)`
    : `0 0 13px rgba(28,113,216,0.53), 0 0 25px rgba(28,113,216,0.19), 0 0 35px rgba(28,113,216,0.28), 0 0 49px rgba(28,113,216,0.8)`;

  const carouselGlowDark = `
    0 0 25px rgba(28,113,216,0.01),
    0 0 30px rgba(28,113,216,0.05),
    0 0 34px rgba(28,113,216,0.09),
    0 0 37px rgba(28,113,216,0.1),
    0 0 40px rgba(28,113,216,0.5)
  `;

  const carouselGlowLight = `
    0 0 30px rgba(28,113,216,0.1),
    0 0 40px rgba(28,113,216,0.2),
    0 0 50px rgba(28,113,216,0.3),
    0 0 65px rgba(28,113,216,0.4),
    0 0 85px rgba(28,113,216,0.5)
  `;

  const currentCarouselGlow = theme === "dark" ? carouselGlowDark : carouselGlowLight;

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[15%] -right-[10%] w-[660px] h-[660px] bg-[#1e78e4]/50 rounded-full blur-[143px]" />
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
                src={theme === "dark" ? "/home/LIDSOLlogoColor-oscuro.svg" : "/home/LIDSOLlogoColor-claro.svg"}
                alt="LIDSoL"
                className="h-18 w-auto"
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
                  boxShadow: exploreButtonGlow
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = exploreButtonGlowHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = exploreButtonGlow;
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
              style={{ boxShadow: currentCarouselGlow }}
            >
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={currentImageIndex}
                  custom={direction}
                  initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 1 }}
                  transition={{
                    x: { duration: 0.2, ease: "easeOut" }
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
