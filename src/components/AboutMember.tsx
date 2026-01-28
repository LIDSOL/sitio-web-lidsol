import {
  ArrowLeft,
  Calendar,
  Link as LinkIcon,
} from "lucide-react";

import { FacebookIcon } from "./ui/source/icons/FacebookIcon";
import { GithubIcon } from "./ui/source/icons/GithubIcon";
import { GitlabIcon } from "./ui/source/icons/GitlabIcon";
import { InstagramIcon } from "./ui/source/icons/InstagramIcon";
import { LinkedinIcon } from "./ui/source/icons/linkedinIcon";
import { MailOpenIcon } from "./ui/source/icons/MailOpenIcon";
import { SendIcon } from "./ui/source/icons/SendIcon";
import { TwitterIcon } from "./ui/source/icons/TwitterIcon";
import { YoutubeIcon } from "./ui/source/icons/YoutubeIcon";
import { GlobeIcon } from "./ui/source/icons/GlobeIcon";

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
    educatedAt: { en: "Educated at", es: "Educado en" },
    externalWork: { en: "External Work", es: "Trabajo Externo" },
    lidsolInvolvement: {
      en: "LIDSoL Participation",
      es: "Participaciones en LIDSoL",
    },
    contact: { en: "Contact", es: "Contacto" },
  } as const;

  const socialIcons = {
    email: MailOpenIcon,
    web: GlobeIcon,
    twitter: TwitterIcon,
    gitlab: GitlabIcon,
    github: GithubIcon,
    linkedin: LinkedinIcon,
    youtube: YoutubeIcon,
    instagram: InstagramIcon,
    telegram: SendIcon,
    facebook: FacebookIcon,
  } as const;

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <Button variant="outline" onClick={onBack} className="mb-16 gap-2">
          <ArrowLeft className="h-4 w-4" />
          {t.back[language]}
        </Button>

        <div className="bg-card rounded-3xl border p-8 space-y-14">
          {/* Header */}
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <h1 className="text-4xl mb-6">{member.name}</h1>

              <p className="text-xl text-primary mb-4">
                {member.role[language]}
              </p>

              {/* Joined */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Calendar className="h-4 w-4" />
                {t.joined[language]} {member.joined}
              </div>

              {/* Bio */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {member.bio[language]}
              </p>

              {/* Educated at — AHORA DEBAJO DE LA BIO Y CON DOTS */}
              {member.educatedAt && (
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-2">
                    {t.educatedAt[language]}:
                  </p>
            <ul className="space-y-2">
              {member.educatedAt[language].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 text-muted-foreground">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
                </div>
              )}
            </div>
          </div>




          {/* External Work */}
          {member.contributions?.length ? (
            <section className="pt-6">
              <h3 className="text-lg mb-4">
                {t.externalWork[language]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.contributions.map((c) => (
                  <a
                    key={c.url}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="secondary" className="gap-1">
                      <LinkIcon className="h-3 w-3" />
                      {c.label[language]}
                    </Badge>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {/* LIDSoL Participation */}
          {member.involvement?.length ? (
            <section className="pt-6">
              <h3 className="text-lg mb-4">
                {t.lidsolInvolvement[language]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.involvement.map((i) => (
                  <a
                    key={i.url}
                    href={i.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">
                      {i.label[language]}
                    </Badge>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {/* Contact */}
          {member.contact && (
            <section className="pt-6">
              <h3 className="text-lg mb-4">
                {t.contact[language]}
              </h3>

              <div className="flex flex-wrap gap-3">
                {Object.entries(member.contact).map(([key, value]) => {
                  if (!value) return null;
                  const Icon =
                    socialIcons[key as keyof typeof socialIcons];
                  if (!Icon) return null;

                  return (
                    <a
                      key={key}
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 capitalize"
                      >
                        <Icon className="h-4 w-4" />
                        {key}
                      </Button>
                    </a>
                  );
                })}
              </div>
            </section>
          )}

{/* Interests */}
{(() => {
  const interests = member.interests?.[language] ?? [];

  if (interests.length === 0) return null;

  return (
    <section className="pt-6">
      <h3 className="text-lg mb-4">
        {language === "en" ? "Interests" : "Intereses"}
      </h3>

      <div className="flex flex-wrap gap-2">
        {interests.map((interest, idx) => (

        <Badge
          key={idx}
          variant="secondary"
          className="
            bg-muted/40
            text-muted-foreground
            border border-border/40
            font-normal
            hover:bg-muted/50
          "
        >
  {interest}
</Badge>

        ))}
      </div>
    </section>
  );
})()}



        </div>
      </div>
    </div>
  );
}

