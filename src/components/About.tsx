import { Card, CardContent } from "./ui/card";
import { Users, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageProvider";
import { members } from "../data/members";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutProps {
  onMemberClick: (memberId: number) => void;
}

export function About({ onMemberClick }: AboutProps) {
  const { language } = useLanguage();

  const t = {
    title: { en: "About LIDSOL", es: "Acerca de LIDSOL" },
    subtitle: { 
      en: "Free Software Laboratory", 
      es: "Laboratorio de Investigación y Desarrollo de Software Libre" 
    },
    description: {
      en: "LIDSOL is a laboratory at the Faculty of Engineering, UNAM, dedicated to the research, development, and promotion of free and open-source software. We bring together students, alumni, and academics passionate about technology and committed to the principles of free software.",
      es: "LIDSOL es un laboratorio de la Facultad de Ingeniería de la UNAM, dedicado a la investigación, desarrollo y promoción de software libre y de código abierto. Reunimos a estudiantes, exalumnos y académicos apasionados por la tecnología y comprometidos con los principios del software libre."
    },
    historyTitle: { en: "Our History", es: "Nuestra Historia" },
    history: {
      en: "Founded in 2002, LIDSOL emerged from the need to create a space within the Faculty of Engineering where students could learn, experiment, and contribute to free software projects. Over more than two decades, we have grown into a vibrant community that has contributed to numerous open-source projects and trained hundreds of engineers in free software technologies.",
      es: "Fundado en 2002, LIDSOL surgió de la necesidad de crear un espacio dentro de la Facultad de Ingeniería donde los estudiantes pudieran aprender, experimentar y contribuir a proyectos de software libre. A lo largo de más de dos décadas, hemos crecido hasta convertirnos en una comunidad vibrante que ha contribuido a numerosos proyectos de código abierto y capacitado a cientos de ingenieros en tecnologías de software libre."
    },
    activitiesTitle: { en: "Our Activities", es: "Nuestras Actividades" },
    activities: {
      en: [
        "Development of open-source software projects",
        "Technical workshops and training courses",
        "Conferences and seminars on free software",
        "Participation in national and international events",
        "Technical support and consulting",
        "Promotion of free software culture and philosophy"
      ],
      es: [
        "Desarrollo de proyectos de software de código abierto",
        "Talleres técnicos y cursos de capacitación",
        "Conferencias y seminarios sobre software libre",
        "Participación en eventos nacionales e internacionales",
        "Soporte técnico y consultoría",
        "Promoción de la cultura y filosofía del software libre"
      ]
    },
    membersTitle: { en: "Our Team", es: "Nuestro Equipo" },
    membersCta: { en: "View Profile", es: "Ver Perfil" },
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl sm:text-6xl mb-4">{t.title[language]}</h1>
          <p className="text-2xl text-primary mb-6">{t.subtitle[language]}</p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.description[language]}
          </p>
        </div>

        {/* History Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
            <h2 className="text-3xl mb-6">{t.historyTitle[language]}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.history[language]}
            </p>
          </div>
        </div>

        {/* Activities Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl mb-6">{t.activitiesTitle[language]}</h2>
            <ul className="space-y-3">
              {t.activities[language].map((activity, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-lg">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-12">
          <h2 className="text-4xl mb-12 text-center">{t.membersTitle[language]}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <Card 
                key={member.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-border/60 cursor-pointer"
                onClick={() => onMemberClick(member.id)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">{member.role[language]}</p>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {member.bio[language]}
                  </p>
                  <div className="flex gap-2">
                    {member.github && (
                      <div className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
                        <Github className="h-4 w-4" />
                      </div>
                    )}
                    {member.linkedin && (
                      <div className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </div>
                    )}
                    <div className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {t.membersCta[language]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
