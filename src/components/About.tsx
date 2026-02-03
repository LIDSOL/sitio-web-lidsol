import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageProvider";
import { members, Member } from "../data/members";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Timeline } from "./Timeline";

interface AboutProps {
  onMemberClick: (memberId: number) => void;
}

export function About({ onMemberClick }: AboutProps) {
  const { language } = useLanguage();

  const t = {
    title: { en: "About LIDSOL", es: "Acerca de LIDSOL" },
    subtitle: {
      en: "Free Software Laboratory",
      es: "Laboratorio de Investigación y Desarrollo de Software Libre",
    },
    description: {
      en: "LIDSoL is a laboratory of the Faculty of Engineering at UNAM. We aim to promote and drive research and development of free technologies by carrying out related projects in various fields, seeking progress and improving society.",
      es: "LIDSoL es un laboratorio de la Facultad de Ingeniería de la UNAM. Buscamos promover e impulsar la investigación y desarrollo de tecnologías libres realizando proyectos afines en distintas áreas buscando el progreso y mejorando la sociedad.",
    },
    historyTitle: { en: "Our History", es: "Nuestra Historia" },
    history: {
      en: [
        {
          year: "1998 - 2001",
          text: "Between 1998 and 2001, the precursor to LIDSoL was the Linux Users Group of the Faculty of Engineering (GULFI), founded by students who adopted the penguin’s operating system early on.",
        },
        {
          year: "2001 - Present",
          text: "With the support of Engineer Juan Correón Granados, GULFI transformed into LIDSoL in 2001, under the umbrella of the Electrical Engineering Division, and moved into its current facilities on the second floor of Building P of the Engineering Annex.",
        },
        {
          year: "2019 - Present",
          text: "In early 2019, LIDSoL members re-established the ACM student chapter at the Faculty of Engineering.",
        },
        {
          year: "2026",
          text: "LIDSoL continues to promote free software and open technologies.",
        },
      ],
      es: [
        {
          year: "1998 - 2001",
          text: "Entre 1998 y 2001, el antecedente de LIDSoL fue el Grupo de Usuarios de Linux de la Facultad de Ingeniería (GULFI), fundado por estudiantes que adoptaron temprano el sistema operativo del pingüino.",
        },
        {
          year: "2001 - Presente",
          text: "Con el apoyo del Ing. Juan Correón Granados el GULFI se transformó en el LIDSOL en 2001, bajo el cobijo de la División de Ingeniería Eléctrica, y se alojó en sus instalaciones actuales en el segundo piso del edificio P del Anexo de Ingeniería.",
        },
        {
          year: "2019 - Presente",
          text: "A principios de 2019, miembros de LIDSoL reconstituyeron el capítulo estudiantil de la ACM en la Facultad de Ingeniería.",
        },
        {
          year: "2026",
          text: "LIDSOL continúa impulsando el software libre y tecnologías abiertas.",
        },
      ],
    },
    activitiesTitle: { en: "Our Activities", es: "Nuestras Actividades" },
    activities: {
      en: [
        "Courses and workshops.",
        "Events and conferences.",
        "Installation of free software and operating systems.",
        "Advice on the use of free and open licenses.",
        "Development of research projects.",
        "Development of free and open technologies.",
      ],
      es: [
        "Cursos y talleres.",
        "Eventos y conferencias.",
        "Instalación de software y sistemas operativos Libres.",
        "Asesoría sobre el uso de licencias libres y abiertas.",
        "Desarrollo de proyectos de investigación.",
        "Desarrollo de tecnologías libres y abiertas.",
      ],
    },
    membersTitle: { en: "Members", es: "Integrantes" },
    sections: {
      academic: { en: "Academic Coordinators", es: "Responsables académicos" },
      student: { en: "Students", es: "Alumnos" },
      formerstudent: { en: "Former Students", es: "Exalumnos" },
    },
    membersCta: { en: "View Profile", es: "Ver Perfil" },
  };

  const academics = members.filter(m => m.category === "academic");
  const students = members.filter(m => m.category === "student");
  const formerStudents = members.filter(m => m.category === "formerStudents");

  const renderMembers = (list: Member[]) => (
    <div className="flex justify-center">
    <div className="grid gap-6 max-w-5xl justify-items-center grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">

        {list.map(member => (
          <Card
            key={member.id}
            onClick={() => onMemberClick(member.id)}
            className="
                w-full
                max-w-[320px]
                h-[460px]
                flex
                flex-col
                overflow-hidden
                cursor-pointer
                transition-all
                duration-300
                hover:shadow-lg
                hover:scale-[1.02]
                group
            "
          >
            {/* Imagen */}
            <div className="h-[200px] overflow-hidden shrink-0">
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Contenido */}
            <CardContent className="p-6 flex flex-col flex-1">
              {/* Texto */}
              <div className="flex flex-col gap-1 min-h-[120px] mb-4">
                <h3 className="text-xl truncate group-hover:text-primary transition-colors">
                  {member.name}
                </h3>

                <p className="text-sm text-primary h-[1.25rem] truncate">
                  {member.role?.[language]?.trim() || "\u00A0"}
                </p>

                <p className="hidden md:block text-sm text-muted-foreground line-clamp-3 min-h-[4.5rem]">
                  {member.bio?.[language]?.trim() || "\u00A0"}
                </p>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Botón */}
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
              >
                {t.membersCta[language]}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl sm:text-6xl mb-4">{t.title[language]}</h1>
          <p className="text-2xl text-primary mb-6">{t.subtitle[language]}</p>
          <p className="text-lg text-muted-foreground">{t.description[language]}</p>
        </div>

        {/* History */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card rounded-3xl p-8 border">
            <h2 className="text-3xl mb-6">{t.historyTitle[language]}</h2>
            <Timeline items={t.history[language]} />
          </div>
        </div>

        {/* Activities */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-primary/5 rounded-3xl p-8">
            <h2 className="text-3xl mb-6">{t.activitiesTitle[language]}</h2>
            <ul className="space-y-3">
              {t.activities[language].map((a, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Members */}
        <div className="mb-20">
          <h2 className="text-4xl mb-16 text-center">{t.membersTitle[language]}</h2>

          <section className="mb-16">
            <h3 className="text-3xl mb-8 text-center">{t.sections.academic[language]}</h3>
            {renderMembers(academics)}
          </section>

          <section className="mb-16">
            <h3 className="text-3xl mb-8 text-center">{t.sections.student[language]}</h3>
            {renderMembers(students)}
          </section>

          {formerStudents.length > 0 && (
            <section>
              <h3 className="text-3xl mb-8 text-center">
                {t.sections.formerstudent[language]}
              </h3>
              {renderMembers(formerStudents)}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

