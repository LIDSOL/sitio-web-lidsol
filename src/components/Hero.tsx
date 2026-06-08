import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import Link from "next/link";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const carouselImages = [
    { src: "/home/lukas-NLSXFjl_nhc-unsplash.jpg", alt: "Debian Neofetch"},
    { src: "/home/lukas-uZkHtWsi2dE-unsplash.jpg", alt: "Arch Sticker"},
    { src: "/home/lukas-DTochqoK3Rg-unsplash.jpg", alt: "NixOS Neofetch"},
    { src: "/home/eddie-sennov-43P5FiTFcXo-unsplash.jpg", alt: "ThinkPad Ubuntu"},
    { src: "/home/harrison-broadbent-1mu9gF8OhNk-unsplash.jpg", alt: "Open Hardware"},
  ];

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    resetTimer();
  };

  const prevImage = () => {
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
    contactSubject: { en: "Interest in LIDSoL", es: "Interés en LIDSoL" },
    contactBody: {
        en: "Hello, I would like to join the laboratory...",
        es: "Hola, me gustaría unirme al laboratorio..."
    },
  };

  const mailtoLink = `mailto:lidsol@protonmail.com?subject=${encodeURIComponent(t.contactSubject[language])}&body=${encodeURIComponent(t.contactBody[language])}`;

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 sm:py-32">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[15%] -right-[10%] w-[660px] h-[660px] bg-[#1e78e4]/50 rounded-full blur-[143px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block px-5 py-2 bg-white/10 text-primary-foreground rounded-full border border-white/20">
              {t.tagline[language]}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-primary-foreground">
              <ImageWithFallback
                src="/home/LIDSOLlogo.svg"
                alt="LIDSoL"
                className="h-18 w-auto drop-shadow-lg"
              />
            </h1>

            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              {t.description[language]}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 border-2"
                style={{ animation: "wiggle 1s ease-in-out infinite" }}
              >
                <Link href="#projects">
                  {t.exploreProjects[language]} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={mailtoLink}>
                  {t.joinCommunity[language]}
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl text-primary-foreground">5+</div>
                <div className="text-sm text-primary-foreground/70">{t.activeProjects[language]}</div>
              </div>
              <div>
                <div className="text-3xl text-primary-foreground">10+</div>
                <div className="text-sm text-primary-foreground/70">{t.contributors[language]}</div>
              </div>
              <div>
                <div className="text-3xl text-primary-foreground">100%</div>
                <div className="text-sm text-primary-foreground/70">{t.freeOpen[language]}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative"
            >
              {carouselImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: index === 0 ? 1 : 0 }}
                  animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                  style={{ pointerEvents: index === currentImageIndex ? "auto" : "none" }}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}

              {/* Navigation buttons at bottom right */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={prevImage}
                  className="bg-white/10 backdrop-blur hover:bg-white/20 p-2.5 rounded-full shadow-md transition-all border border-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 text-primary-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-white/10 backdrop-blur hover:bg-white/20 p-2.5 rounded-full shadow-md transition-all border border-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 text-primary-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
