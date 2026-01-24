import { ArrowLeft, Mail, Github, Linkedin, Calendar, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageProvider";
import { Member } from "../data/members";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutMemberProps {
  member: Member;
  onBack: () => void;
}

export function AboutMember({ member, onBack }: AboutMemberProps) {
  const { language } = useLanguage();

  const t = {
    back: { en: "Back to Team", es: "Volver al Equipo" },
    joined: { en: "Joined", es: "Se unió" },
    specialties: { en: "Specialties", es: "Especialidades" },
    projects: { en: "Projects", es: "Proyectos" },
    contact: { en: "Contact", es: "Contacto" },
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back[language]}
        </Button>

        {/* Member Profile */}
        <div className="bg-card rounded-3xl border border-border/50 overflow-hidden">
          <div className="grid md:grid-cols-5 gap-8 p-8">
            {/* Profile Image */}
            <div className="md:col-span-2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-border/50">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <h1 className="text-4xl mb-2">{member.name}</h1>
                <p className="text-xl text-primary">{member.role[language]}</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{t.joined[language]} {member.joined}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {member.bio[language]}
              </p>

              {/* Specialties */}
              <div>
                <h3 className="text-lg mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  {t.specialties[language]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Projects */}
              {member.projects && member.projects.length > 0 && (
                <div>
                  <h3 className="text-lg mb-3">{t.projects[language]}</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.projects.map((project) => (
                      <Badge key={project} variant="outline" className="border-primary/30">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact */}
              <div>
                <h3 className="text-lg mb-3">{t.contact[language]}</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                  {member.github && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                  )}
                  {member.linkedin && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
