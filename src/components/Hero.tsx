import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import Link from "next/link";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { language } = useLanguage();

  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1640552435388-a54879e72b28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      alt: "Debian Neofetch"
    },
    {
      src: "https://images.unsplash.com/photo-1714846200875-006da50cb5b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      alt: "Arch sticker"
    },
    {
      src: "https://www.tecmint.com/wp-content/uploads/2019/04/herbstluftwm-manual-tiling-window-manager-for-linux-768x556.png",
      alt: "Sudo ubuntu"
    },
    {
      src: "https://images.unsplash.com/photo-1640552435845-d65c23b75934?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      alt: "HTOP"
    },
    {
      src: "https://images.unsplash.com/photo-1610812387871-806d3db9f5aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480",
      alt: "Raspberry pi"
    },
    {
      src: "https://www.tpart.net/wp-content/uploads/2024/12/x210Ai-completed-laptop-768x1024.jpg",
      alt: "Thinkpad"
    }
  ];

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

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
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#528DDA] via-[#507BC7] to-[#45428F] py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block px-5 py-2 bg-white/10 text-white rounded-full border border-white/20">
              {t.tagline[language]}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white">
              LIDSoL
            </h1>

            <p className="text-xl text-white/90 max-w-2xl">
              {t.description[language]} 🚀
            </p>

            <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="
                border-2 border-[#241F31]
                shadow-lg shadow-[#5A4BCF]/40
                hover:shadow-xl hover:shadow-[#5A4BCF]/50
                transition-shadow duration-300
                gap-2
                bg-[#1E78E4] text-[#F6F5F4]
                hover:bg-[#241F31]
                "
              style={{ animation: "wiggle 1s ease-in-out infinite" }}
            >
            <Link href="#projects">
            {t.exploreProjects[language]} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

              <Button
                  size="lg"
                  variant="outline">
                  {t.joinCommunity[language]}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl text-white">5+</div>
                <div className="text-sm text-white/70">{t.activeProjects[language]}</div>
              </div>
              <div>
                <div className="text-3xl text-white">5+</div>
                <div className="text-sm text-white/70">{t.contributors[language]}</div>
              </div>
              <div>
                <div className="text-3xl text-white">100%</div>
                <div className="text-sm text-white/70">{t.freeOpen[language]}</div>
              </div>
            </div>
          </div>



          {/* Image */}
          <div className="relative">
            {/* Blur effect around carousel */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-2xl" />

            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border border-border/50 relative">
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
