import { Code, GlobeLock, DoorOpen, CreativeCommons, Cpu, Container } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function Values() {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cardMousePosition, setCardMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCardMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredCard(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };

  const t = {
    title: { en: "Interests", es: "Intereses" },
    subtitle: { en: "At LIDSoL you will find:", es: "En LIDSoL encontrarás:" },
  };

  const values = [
    {
      icon: Code,
      title: { en: "Free Software", es: "Software libre" },
      description: { 
        en: "Free software allows people to use, study, modify and distribute software (including its source code), promoting collaboration and equitable access to technology.",
        es: "El software libre permite a las personas usar, estudiar, modificar y distribuir el software (incluido su código fuente), promoviendo la colaboración y el acceso equitativo a la tecnología." 
      }
    },
    {
      icon: GlobeLock,
      title: { en: "Computer Security", es: "Seguridad informática" },
      description: { 
        en: "Computer security refers to practices and technologies designed to protect systems and networks from unauthorized access and damage, ensuring the confidentiality, integrity and availability of information.",
        es: "La seguridad informática se refiere a las prácticas y tecnologías diseñadas para proteger sistemas y redes de accesos no autorizados y daños, asegurando la confidencialidad, integridad y disponibilidad de la información."
      }
    },
    {
      icon: DoorOpen,
      title: { en: "Open Access", es: "Open access" },
      description: { 
        en: "Open access is a publishing model that allows free dissemination of academic and scientific literature, removing economic barriers to access to research and data.",
        es: "El acceso abierto es un modelo de publicación que permite la difusión gratuita de literatura académica y científica, eliminando barreras económicas para el acceso a investigaciones y datos."
      }
    },
    {
      icon: CreativeCommons,
      title: { en: "Open Licenses", es: "Licencias abiertas" },
      description: { 
        en: "Open licenses allow users to modify, share and use resources under certain conditions, fostering collaboration and public access.",
        es: "Las licencias abiertas permiten a los usuarios modificar, compartir y utilizar recursos bajo ciertas condiciones, fomentando la colaboración y el acceso público."
      }
    },
    {
      icon: Cpu,
      title: { en: "Open Hardware", es: "Hardware Abierto" },
      description: { 
        en: "Open hardware refers to publicly available hardware designs that anyone can manufacture, modify or improve, promoting collaborative innovation.",
        es: "El hardware abierto se refiere a diseños de hardware disponibles públicamente que cualquiera puede fabricar, modificar o mejorar, promoviendo la innovación colaborativa."
      }
    },
    {
      icon: Container,
      title: { en: "DevOps", es: "DevOps" },
      description: { 
        en: "DevOps integrates software development and IT operations, improving collaboration and automating processes to accelerate the delivery cycle and increase software quality.",
        es: "DevOps integra desarrollo de software y operaciones de TI, mejorando la colaboración y automatizando procesos para acelerar el ciclo de entrega y aumentar la calidad del software."
      }
    }
  ];

  return (
    <section
      id="values"
      onMouseMove={handleMouseMove}
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(28, 113, 216, 0.08), transparent 40%)`,
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl">{t.title[language]}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card 
              key={`${value.title[language]}-${index}`} 
              className="text-center group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-card/95 border-border/60"
              onMouseMove={(e) => handleCardMouseMove(e, index)}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Mouse-following glow effect - same as project cards */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: hoveredCard === index
                    ? `radial-gradient(300px circle at ${cardMousePosition.x}px ${cardMousePosition.y}px, rgba(28, 113, 216, 0.15), transparent 40%)`
                    : 'transparent',
                }}
              />

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/15 via-transparent to-primary/10" />
              
              <CardHeader className="relative z-10">
                <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <value.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle>{value.title[language]}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground">{value.description[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}