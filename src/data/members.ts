import noImg                from "../components/ui/source/images/no.png";
import gunnarImg            from "../components/ui/source/images/gunnar.jpg";
import tonejitoImg          from "../components/ui/source/images/tonejito.png";
import fulgueirasImg        from "../components/ui/source/images/fulgueiras.jpg";
import quiqueImg            from "../components/ui/source/images/quique.jpg";
import franciscoGalindoImg  from "../components/ui/source/images/franciscoGalindo.jpg";
import hansImg              from "../components/ui/source/images/hans.jpg";
import ugartecheaImg        from "../components/ui/source/images/ugartechea.jpg";
import barrigaImg           from "../components/ui/source/images/barriga.jpg";
import cabreraImg           from "../components/ui/source/images/cabrera.jpg";
import riosImg              from "../components/ui/source/images/elamarillo.jpg";
import alexisRiosImg        from "../components/ui/source/images/alexisRios.jpg";
import drag0nImg            from "../components/ui/source/images/drag0n.jpg";
import cinthyaCelinaImg     from "../components/ui/source/images/cinthyaCelina.jpg";
import pabloVivarImg        from "../components/ui/source/images/pabloVivar.jpg";
import luisVilchisImg       from "../components/ui/source/images/luisVilchis.png";
import aesahaettrImg        from "../components/ui/source/images/Æsahættr.jpg";
import ferImg               from "../components/ui/source/images/fer.jpg";

export type MemberCategory =
  | "academic"
  | "student"
  | "formerStudents";

export type Lang = "en" | "es";

export interface MemberLink {
  label: {
    en: string;
    es: string;
  };
  url: string;
}

export interface MemberContact {
  email?: string;
  web?: string;
  twitter?: string;
  gitlab?: string;
  github?: string;
  linkedin?: string;
  youtube?: string;
  instagram?: string;
  telegram?: string;
  facebook?: string;
}


export interface Member {
  id: number;
  name: string;
  role: { en: string; es: string };
  bio?: { en: string; es: string };
  image: string;
  joined: string;
  category: MemberCategory;

  educatedAt?: {
    en: string[];
    es: string[];
  };

  interests?: {
    en: string[];
    es: string[];
  };

  contact?: MemberContact;
  contributions?: MemberLink[];
  involvement?: MemberLink[];
}

export const members: Member[] = [
  {
    id: 1,
    name: "Dr. Gunnar Eyal Wolf Iszaevich",
    role: {
      en: "Academic Coordinator",
      es: "Coordinador Académico",
    },
    bio: {
      en: "Self‑taught software engineer; enthusiast, user, and free‑software developer since 1997, specialized in network administration and web‑system development. He has fostered cohesion and professionalization within local free‑software communities.",
      es: "Ingeniero en software de formación autodidacta; entusiasta, usuario y desarrollador de software libre desde 1997, especializado en la administración de redes y en el desarrollo de sistemas Web. Ha fomentado la cohesión y profesionalización de las comunidades locales de software libre.",
    },
    image: gunnarImg,
    joined: "2010",
    category: "academic",

    educatedAt: {
      en: ["Master’s in Engineering in Security and Information Technologies, 2018 (ESIME Culhuacán, IPN)"],
      es: ["Maestría en Ingeniería en Seguridad y Tecnologías de la Información, 2018 (ESIME Culhuacán, IPN)"],
    },

    contact: {
      email: "http://scr.im/47an",
      github: "https://github.com/gwolf",
      web: "https://gwolf.org/"
    },

    contributions: [
      {
        label: {
          en: "Debian Project developer",
          es: "Desarrollador del Proyecto Debian",
        },
        url: "https://people.debian.org/~gwolf/",
      },
      {
        label: {
          en: "Senior Member of the ACM",
          es: "Senior Member de la ACM",
        },
        url: "https://blog.xrds.acm.org/author/gunnar_wolf/",
      },
      {
        label: {
          en: "Member of the Creative Commons Mexico Chapter",
          es: "Miembro del Capítulo Creative Commons México",
        },
        url: "https://x.com/ccmx",
      },
    ],
  },
//---
  {
    id: 2,
    name: "Andrés Hernández",
    role: {
      en: "Academic mentor",
      es: "Mentor académico",
    },
    bio: {
      en: "Tonejito",
      es: "Tonejito",
    },

    image: tonejitoImg,
    joined: "2010",
    category: "academic",

    educatedAt: {
      en: ["Computer Engineering (FI UNAM)",  "Computing Security Fellowship Program (Information Security Coordination / UNAM‑CERT)", "GCUX and GWEB certifications (SANS Institute)"],
      es: ["Ingeniería en computación (Facultad de Ingeniería UNAM)", "Plan de Becarios de Seguridad en Cómputo (Coordinación de Seguridad de la Información / UNAM-CERT)", "Certificaciones GCUX y GWEB (SANS Institute)"],
    },
    contact: {
        github: "https://github.com/tonejito",
        gitlab: "https://gitlab.com/tonejito",
        twitter: "https://x.com/tonejito",
        youtube: "https://www.youtube.com/channel/UCk-SQLqCelc0fF6X6X2LVKg"
    },
    contributions: [
      {
        label: {
          en: "ACM Chapter – FI UNAM",
          es: "Capítulo de la ACM - Facultad de Ingeniería - UNAM",
        },
        url: "https://www.acm.org/",
      },
      {
        label: {
          en: "GIAC Advisory Board",
          es: "GIAC Advisory Board",

        },
        url: "https://www.giac.org/about/community/",
      },
    ]
  },
//---
  {
    id: 3,
    name: "Martin Fulgueiras",
    role: {
      en: "Organizational Architect",
      es: "Arquitecto Organizacional",
    },
    bio: {
      en: "I stumbled into the FLOSS world by looking for an ERP for a cookie factory. The factory closed, but the software and my curiosity remained. Now I help organizations navigate the complexities of technology.",
      es: "Llegué de casualidad al mundo FLOSS buscando un ERP para una fábrica de galletas. La fabrica se fue, pero el software y la curiosidad quedaron. Ahora ayudando a organizaciones a navegar los meandros de la tecnología.",
    },
    image: fulgueirasImg,
    joined: "2010",
    category: "student",

    educatedAt: {
      en: ["Industrial Engineering (Facultad de Ingenieria y Arquitectura de la Universidad de Lima)"],
      es: ["Ingeniería Industrial (Facultad de Ingenieria y Arquitectura de la Universidad de Lima)"],
    },

    interests: {
      en: [
        "Political Economy",
        "Reading",
        "Conversing",
        "Helping",
        "Exploring",
        "Learning new tools",
        "Sharing knowledge",
      ],
      es: [
        "Economía política",
        "Leer",
        "Platicar",
        "Ayudar",
        "Curiosear",
        "Aprender herramientas nuevas",
        "Compartir conocimiento"
      ],
    },

    contact: {
      github: "https://github.com/MartinFulgueiras",
      gitlab: "https://gitlab.com/MartinFulgueiras",
      instagram: "https://www.instagram.com/barrionomia",
      twitter: "https://x.com/barrionomia"
    },
    involvement: [
      {
        label: {
          en: "Free route",
          es: "Ruta libre",
        },
        url: "https://lidsol.unam.mx/post/rutalibre1",
      },
    ],
  },
//---
  {
    id: 4,
    name: "Quique Calderon",
    role: {
      en: "Team Leader",
      es: "Lider del equipo",
    },
    bio: {
      en: "A student trying to learn about computers, automation, problem solving through programming, and lots of technology. A fan of good food and long walks.",
      es: "Un estudiante intentando aprender sobre computadoras, automatización, resolución de problemas mediante la programación, y mucha tecnología. Fan de la buena comida y las largas caminatas.",
    },
    image: quiqueImg,
    joined: "2010",
    category: "student",

    educatedAt: {
      en: ["Computer Engineering (Faculty of Engineering, UNAM)", "Technical Degree in Computing (National Preparatory School #5 José Vasconcelos)"],
      es: ["Ingeniería en Computación (Facultad de Ingeniería de la UNAM)", "Carrera Técnica en Computación (Escuela Nacional Preparatoria #5 José Vasconcelos)"],
    },

    interests: {
      en: [
        "Sysadmin",
        "DevOps",
        "Competitive Programming",
        "FOSS",
        "Food"
      ],
      es: [
        "Sysadmin",
        "DevOps",
        "Programación Competitiva",
        "FOSS",
        "Comida"
      ],
    },
    contact: {
      github: "https://github.com/ksobrenat32",
      gitlab: "https://gitlab.com/ksobrenat32",
      linkedin: "https://mx.linkedin.com/in/enriquecalderonmx",
      telegram: "https://t.me/ksobrenat32",
      email: "mailto:lidsol@ks32.dev",
      twitter: "https://x.com/ksob32"
    },
    involvement: [
      {
        label: {
          en: "Ansible for a Better World",
          es: "Ansible para un mundo mejor",
        },
        url: "https://lidsol.unam.mx/post/ansible",
      },
    ],
  },
//---
  {
    id: 5,
    name: "Francisco Galindo",
    role: {
      en: "Treasurer and colleague",
      es: "Tesorero y Compa",
    },
    bio: {
      en: "I’m a buddy who loves everything related to computers and mathematics. I appreciate simple software that doesn’t try to overcomplicate things or impose restrictions when I just want to read a book.",
      es: "Soy un compa al que le gusta todo lo relacionado con las computadoras y las matemáticas. Me gusta el software simple, que no trate de bajarme la luna ni de imponerme reglas cuando yo sólo quiero leer un libro.",
    },
    image: franciscoGalindoImg,
    joined: "2010",
    category: "student",

    educatedAt: {
      en: ["Computer Engineering (Faculty of Engineering, UNAM)"],
      es: ["Ingenieria en Computación (Facultad de Ingenieria de la UNAM)"],
        },

    interests: {
      en: [
        "Programming",
        "Operating Systems",
        "Computer Hardware",
        "Mathematics",
        "Sciences",
        "Philosophy"
      ],
      es: [
        "Programación",
        "Sistemas operativos",
        "Hardware de computadoras",
        "Matemáticas",
        "Ciencias",
        "Filosofía"
      ],
    },
    contact: {
      github: "https://github.com/Francisco-Galindo",
      gitlab: "https://gitlab.com/Francisco-Galindo",
      email: "mailto:yo@franciscogalindo.com"
    },
  },

//---
  {
    id: 6,
    name: "Hans Marcus",
    role: {
      en: "Software Developer at LIDSoL",
      es: "Desarrollador de Software de LIDSoL",
    },
    bio: {
      en: "I’m a student eager to learn something new; I joined LIDSoL to explore computing more deeply, such as software development, server administration, and related areas.",
      es: "Soy un estudiante que se interesa en aprender algo nuevo, me uní a LIDSoL con la finalidad de explorar más a fondo la computación como el desarrollo de software, la administración de servidores, etc.",
    },
    image: hansImg,
    joined: "2010",
    category: "student",

    educatedAt: {
      en: ["Computer Engineering (Faculty of Engineering, UNAM)"],
      es: ["Ingenieria en Computación (Facultad de Ingenieria de la UNAM)"],
        },

    interests: {
      en: [
        "Information security",
        "Video games",
        "Sports",
        "Competitive Programming"
      ],
      es: [
        "Seguridad informática",
        "Videojuegos",
        "Deportes",
        "Programación Competitiva"
      ],
    },
    contact: {
        instagram: "https://www.instagram.com/hansel_nopal"
             },
  },
// ---
  {
    id: 7,
    name: "Luis Ugartechea",
    role: {
      en: "Software Developer at LIDSoL",
      es: "Desarrollador de Software de LIDSoL",
    },
    bio: {
      en: "I’m a buddy who enjoys customizing my own setup; ever since I discovered Linux, I’ve loved the level of personalization it allows, especially with the Sway window manager. I became a member of LIDSoL thanks to a friend, who showed me the breadth that Linux brings to computing.",
      es: "Soy un compa que disfruta la personalización propio de mi equipo, desde momento que conocí Linux me gusto el nivel de personalización que te permite, en especial el window manager Sway. Me convertí en miembro del LIDSoL gracias a un amigo, el me enseñó la amplitud que permite linux sobre la computación.",
    },
    image: ugartecheaImg,
    joined: "2010",
    category: "student",

    educatedAt: {
      en: ["Computer Engineering (Faculty of Engineering, UNAM)", "TOEFL"],
      es: ["Ingenieria en Computación (Facultad de Ingenieria de la UNAM)", "TOEFL"],
        },

    interests: {
      en: [
        "Information Security",
        "Skateboarding",
        "Calisthenics",
      ],
      es: [
        "Seguridad informática",
        "Skateboarding",
        "Calistenia"
      ],
    },
  },
//---
  {
    id: 9,
    name: "Diego Barriga",
    role: {
      en: "Treasurer of the ACM Student Chapter UNAM‑FI",
      es: "Tesorero del Capítulo Estudiantil de la ACM UNAM-FI",
    },
    bio: {
      en: "I develop NLP for Mexican languages in the Elotl Community, promote privacy and anonymity, practice aerial dance, and am a closet musician. Always pushing the frontiers of knowledge is my mantra.",
      es: "Desarrollo NLP para lenguas mexicanas en la Comunidad Elotl, promuevo la privacidad y el anonimato, hago danza aérea y soy músico de closet. Siempre empujar las fronteras del conocimiento es mi mantra.",
    },
    image: barrigaImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: [
          "Computer Engineering (Faculty of Engineering, UNAM)",
          "Introduction to Cryptography (LIDSoL, UNAM)",
          "Spring Master course (Dev.f)",
          "Backend with Django (Dev.f)",
          "Academic Computing Unit Fellowship Program (Faculty of Engineering, UNAM)"
          ],
      es: [
          "Ingeniería en Computación (Facultad de Ingeniería UNAM)",
          "Introducción a la Critografía (LIDSOL, UNAM)",
          "Curso para Spring Master (Dev.f)",
          "Backend con Django (Dev.f)",
          "Programa de Becarios de la Unidad de Cómputo Académico (Facultad de Ingeniería, UNAM)"
          ],
            },

    interests: {
      en: [
        "Natural Language Processing (NLP)",
        "Machine Learning",
        "Privacy and Anonymity",
        "Science Fiction",
        "Music"
          ],
      es: [
        "Procesamiento del Lenguaje Natural (NLP)",
        "Machine Learning",
        "Privacidad y anonimato",
        "Ciencia Ficción",
        "Música"
      ],
    },
    contact: {
      github: "https://github.com/umoqnier",
      gitlab: "https://gitlab.com/umoqnier",
      email: "http://scr.im/mazacuato"
    },
    contributions: [
      {
        label: {
          en: "NLP developer for the Elotl Community",
          es: "Desarrollador de NLP para la Comunidad Elotl",
        },
        url: "https://elotl.mx/",
      },
    ],
    involvement: [
      {
        label: {
          en: "Python: Zero to Hero",
          es: "Python: Zero to Hero",
        },
        url: "https://lidsol.unam.mx/talk/2020-1-python-zero-to-hero",
      },
      {
        label: {
          en: "Python contribution workshop",
          es: "Taller para contribuir a Python",
        },
        url: "https://lidsol.unam.mx/talk/cpython-workshop",
      },
      {
        label: {
          en: "Memories of the CCOSS",
          es: "Memorias del CCOSS",
        },
        url: "https://lidsol.unam.mx/post/ccoss",
      },
      {
        label: {
          en: "Part‑of‑speech (POS) tagger using Conditional Random Fields",
          es: "Etiquetador gramatical (POS) usando Conditional Random Fields",
        },
        url: "https://lidsol.unam.mx/post/pos-using-crf",
      },
      {
        label: {
          en: "Esquite",
          es: "Esquite",
        },
        url: "https://lidsol.unam.mx/post/esquite",
      },
    ],
  },
  //----
  {
    id: 10,
    name: "Emilio Cabrera",
    bio: {
      en: "Computer Engineering student interested in programming languages, open hardware, artificial intelligence, information security, and computing ethics.",
      es: "Estudiante de Ingeniería en Computación interesado en lenguajes de programación, hardware abierto, inteligencia artificial, seguridad informática y ética en la computación.",
    },
    image: cabreraImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: ["Computer Engineering (Faculty of Engineering, UNAM)"],
      es: ["Ingenieria en Computación (Facultad de Ingenieria de la UNAM)"],
        },

    contact: {
      gitlab: "https://gitlab.com/emilio1625",
      email: "http://scr.im/emilio1625"
    },
    involvement: [
      {
        label: {
          en: "Invitation to install Tor nodes",
          es: "invitacion a instalar nodos de tor",
        },
        url: "https://lidsol.unam.mx/post/invitacion-a-instalar-nodos-de-tor",
      },
       {
        label: {
          en: "Introduction to Pandoc",
          es: "Introducción a Pandoc",
        },
        url: "https://lidsol.unam.mx/talk/2020-1-pandoc",
      },
        {
        label: {
          en: "Install ROS on any distribution using debootstrap and proot",
          es: "Instalar ROS en cualquier distro usando debootstrap y proot",
        },
        url: "https://lidsol.unam.mx/post/ros-debootstrap",
      },
         {
        label: {
          en: "Python: Zero to Hero",
          es: "Python: Zero to Hero",
        },
        url: "https://lidsol.unam.mx/talk/2020-1-python-zero-to-hero",
      },
    ]
  },
//--
  {
    id: 11,
    name: "Juan M.S. Rios",
    image: riosImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: ["Faculty of Philosophy and Letters, UNAM"],
      es: ["Facultad de Filosofía y Letras, UNAM"],
    },

    contact: {
      telegram: "https://telegram.me/T3lior"
    },
    involvement: [
      {
        label: {
          en: "Lisp Seminar 2020",
          es: "Seminario De Lisp 2020",
        },
        url: "https://lidsol.unam.mx/talk/seminario-de-lisp-2020/",
      },
       {
        label: {
          en: "Invitation to install Tor nodes",
          es: "Invitación a instalar nuevos nodos de Tor",
        },
        url: "https://lidsol.unam.mx/post/invitacion-a-instalar-nodos-de-tor",
      }
    ]
  },
//--
  {
    id: 12,
    name: "Alexis Ríos",
    image: alexisRiosImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: ["Computer Engineering (Faculty of Engineering, UNAM)"],
      es: ["Ingeniería en Computación (Facultad de Ingeniería, UNAM)"],
    },

    contact: {
      email: "mailto:soir_0907@hotmail.com"
    },
  },
//---
  {
    id: 13,
    name: "BDrag0n",
    bio: {
      en: "\“On the other hand, a man who sits still and contemplative, with no purpose other than experiencing himself and his unity with the world—because he does nothing—is considered ‘passive.’ In reality, that attitude of concentrated meditation is the highest activity, an activity of the soul, and it is possible only under conditions of inner freedom and independence.\” (Fromm E., 1959)",
      es: "\“Por otra parte, se considera ‘pasivo’ a un hombre que está sentado, inmóvil y contemplativo, sin otra finalidad o propósito que experimentarse a sí mismo y su unicidad con el mundo, porque no ‘hace’ nada. En realidad, esa actitud de concentrada meditación es la actividad más elevada, una actividad del alma, y solo es posible bajo la condición de libertad e independencia interiores\” (Fromm E., 1959).",
    },

    image: drag0nImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: ["Computer Engineering (Faculty of Engineering, UNAM)"],
      es: ["Ingeniería en Computación (Facultad de Ingeniería, UNAM)"],
    },

    contact: {
      telegram: "https://telegram.me/BDrag0n"
    },
  },
//---
  {
    id: 14,
    name: "Cinthya Celina Tamayo González",
    bio: {
      en: "Telecommunications engineering student who entered the faculty in 2015 and is currently in the ninth semester, taking the network‑outgoing module. Has a special interest in wireless network security.",
      es: "Estudiante de ingeniería en telecomunicaciones, ingresó a la facultad en el año 2015, actualmente cursando el noveno semestre en el módulo de salida de redes. Especial interés en el área de seguridad de redes inalámbricas.",
    },
    image: cinthyaCelinaImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: ["Telecommunications Engineering (Faculty of Engineering, UNAM)"],
      es: ["Ingeniería en Telecomunicaciones (Facultad de Ingeniería, UNAM)"],
    },

    contact: {
      email: "http://scr.im/cinthya"
    },
  },
//---
  {
    id: 15,
    name: "Pablo Vivar Colina",
    bio: {
      en: "Student of Electrical and Electronic Engineering, enthusiastic about 3D printing and design on free platforms such as OpenSCAD, FreeCAD, and LibreCAD, creator of the interoperable Ditac system. Currently managing the collaborative design platform at idea161.org.",
      es: "Estudiante de Ingeniería Eléctrica Electrónica, entusiasta sobre la impresión y diseño en 3D en plataformas libres como OpensCAD, FreeCAD y libreCAD, creador del sistema interconectable Ditac. Actualmente gestionando la plataforma de diseños colaborativos en idea161.org.",
    },
    image: pabloVivarImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: ["Electrical and Electronic Engineering (Faculty of Engineering, UNAM)"],
      es: ["Ingeniería Eléctrica Electrónica (Facultad de Ingeniería, UNAM)"],
    },

    contact: {
      email: "http://scr.im/cinthya"
    },
    contributions: [
      {
        label: {
          en: "IDEA 1.61",
          es: "IDEA 1.61",
        },
        url: "https://idea161.org",
      },
      {
        label: {
          en: "Didac",
          es: "Didac",
        },
        url: "https://www.facebook.com/DitacOficial",
      }
    ],
  },
//---
  {
    id: 16,
    name: "Luis Vilchis",
    bio: {
      en: "A computing neophyte, dabbling in everything and mastering nothing. Nothing is free; everything is libre. \“We are condemned to freedom.\” — Grandfather Sartre",
      es:
          "Neófito de la computación, practicante en todo y experto en nada. \"Nada es gratis todo es libre. \nEstamos condenados a la libertad.\" – Abuelo Sartre",
    },
    image: luisVilchisImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: ["Computer Engineering (Faculty of Engineering, UNAM)"],
      es: ["Ingeniería en Computación (Facultad de Ingeniería, UNAM)"],
    },
    contact: {
      gitlab: "https://gitlab.com/luisfi",
      email: "mailto:luisunamfi@gmail.com"
    },
    involvement: [
      {
        label: {
          en: "Python contribution workshop",
          es: "Taller para contribuir a Python",
        },
        url: "https://lidsol.unam.mx/talk/cpython-workshop",
      },
    ],
  },
//-----
  {
    id: 17,
    name: "Paul Aguilar (Æsahættr Penserbjorne)",
    bio: {
      en: "Born in Guadalajara, free‑hearted, and now lost in the Monster City. By day I’m a digital‑security Jedi at SocialTIC, and by night a self‑styled hacktivist on the internet. Supposedly a Computer Engineer, a failed mathematician. I sparked the “Third Impact” with free‑software for Indigenous languages through LIDSoL and Elotl. The future is being written by sorcerers in LISP and Rust. I am nobody, I am nothing. I love tejuino and jericallas. ❤",
      es:
          "Tapatío de nacimiento, libre de corazón, perdido en la Ciudad Monstruo. Maestro Jedi de la seguridad digital en SocialTIC de día, disque bot hacktivista en Internet por las noches. Supuesto Ingeniero en Computación, intento fallido de matemático. Causante del Tercer Impacto con software libre en lenguas indígenas desde LIDSOL y Elotl. El futuro esta escrito por hechiceros en LISP y Rust. No soy nadie, no soy nada. Me gusta el tejuino y las jericallas ❤",
    },
    image: aesahaettrImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: ["Computer Engineering (Faculty of Engineering, UNAM)", "Technologist in Informatics and Computing (CETI Colomos)", "Mathematics (Faculty of Sciences, UNAM)"],
      es: ["Ingeniería en Computación (Facultad de Ingeniería, UNAM)","Tecnólogo en Informática y Computación (CETI Colomos)","Matemáticas (Facultad de Ciencias, UNAM)"],
    },
    contact: {
        github: "https://github.com/penserbjorne",
        gitlab: "https://gitlab.com/penserbjorne",
        linkedin: "https://linkedin.com/in/penserbjorne",
        twitter: "https://x.com/_penserbjorne"
    },
    contributions: [
      {
        label: {
          en: "Digital Security at SocialTIC",
          es: "Seguridad Digital en SocialTIC"
        },
        url: "https://socialtic.org",
      },
      {
        label: {
          en: "Elotl Community",
          es: "Comunidad Elotl"
        },
        url: "https://elotl.mx"
      },
    ]
  },
//----
  {
    id: 18,
    name: "Juan Flores",
    bio: {
      en: "Computer Engineering student at UNAM. Self‑taught in networking and information security. Participant in the project on privacy and anonymity mechanisms in networks. Currently interested in web development and the Python programming language.",
      es:
          "Estudiante de ingeniería en computación en la UNAM. Autodidacta en temas de redes y seguridad informática. Participante del proyecto mecanismos de privacidad y anonimato en redes. Actualmente interesado por el desarrollo web y el lenguaje de programación python.",
    },
    image: noImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: ["Computer Engineering (Faculty of Engineering, UNAM)"],
      es: ["Ingeniería en Computación (Facultad de Ingeniería, UNAM)"],
    },
    contact: {
        telegram: "https://telegram.me/SystemFailurem",
        email: "http://scr.im/juan1"
    },
  },
//----
  {
    id: 19,
    name: "Luz Torres",
    bio: {
      en: "Electrical and electronic engineering student interested in energy systems and energy management, learning about free software and how to use it in public agencies.",
      es:
          "Estudiante de ingeniería eléctrica electrónica, con interés en sistemas energéticos y gestión energética, aprendiz de software libre y como emplearlo en dependencias públicas.",
    },
    image: noImg,
    joined: "2010",
    category: "formerStudents",

    educatedAt: {
      en: ["Electrical and Electronic Engineering (Faculty of Engineering, UNAM)"],
      es: ["Ingeniería Eléctrica y Electrónica (Facultad de Ingeniería, UNAM)"],
    },
    contact: {
        telegram: "https://telegram.me/LuzTorres",
        email: "http://scr.im/luztorres21"
    },
    contributions: [
      {
        label: {
          en: "Energy and Environment Society (SOEMA), Faculty of Engineering, UNAM",
          es: "Sociedad de energía y medio ambiente SOEMA (FI UNAM)",
        },
        url: "https://www.facebook.com/SOEMA.FI.UNAM",
      },
      {
        label: {
          en: "Energy‑Saving Projects (PAE), Faculty of Engineering, UNAM",
          es: "Proyectos de Ahorro de energía PAE (FI UNAM)",
        },
        url: "http://odin.fi-b.unam.mx/paeunam/",
      }
    ],
  },
//---
  {
    id: 8,
    name: "Fernanda Ordoñez",
    role: {
      en: "Community Manager of LIDSoL",
      es: "Comunity Manager de LIDSoL",

    },
    bio: {
      en: "I am a passionate student at the Faculty of Engineering, UNAM, where I nurture my fascination with the vast realms of information security, free software, programming, and astronomy. My curiosity drives me to explore the intersections between digital protection and open‑source freedom, seeking to understand how these disciplines can reshape our view of the cosmos and strengthen our technological tools.",
      es: "Soy una estudiante apasionada de la Facultad de Ingeniería de la UNAM, donde cultivo mi fascinación por el vasto universo de la seguridad informática, el software libre, la programación y la astronomía. Mi curiosidad me impulsa a explorar las intersecciones entre la protección digital y la libertad del código abierto, buscando entender cómo estas disciplinas pueden transformar nuestra comprensión del cosmos y fortalecer nuestras herramientas tecnológicas.",
    },
    image: ferImg,
    joined: "2010",
    category: "student",

    educatedAt: {
      en: [
            "Computer Engineering (Faculty of Engineering, UNAM)",
            "TecnolochicasPRO – Web Development (Tecnolochicas – Televisa Foundation and Microsoft)",
            "Scrum Fundamentals Certified (SCRUMstudy)",
            "Women Leaders – Dalia Empower 2024 (Banco Santander in collaboration with Dalia Empower and Universidad Insurgentes)"
          ],
      es: [
          "Ingenieria en Computación (Facultad de Ingenieria de la UNAM)",
          "TecnolochicasPRO-Desarrollo Web (Tecnolochicas-Fundación Televisa y Microsoft)",
          "Scrum Fundamentals Certified (SCRUMstudy)",
          "Mujeres Líderes - Dalia Empower 2024 (Grupo Santander en colaboración con Dalia Empower y la Universidad Insurgentes)"
          ],
            },

    interests: {
      en: [
        "Information Security",
        "Networks and Communications",
        "Science – Astronomy",
        "Science Fiction",
        "Music",
        "Content Creation and Social Media",
        "Web Development"
          ],
      es: [
        "Seguridad Informatica",
        "Redes y Comunicaciones",
        "Ciencia-Astronomía",
        "Ciencia Ficción",
        "Música",
        "Creación de Contenido y Redes Sociales",
        "Desarrollo Web"
      ],
    },
    contact: {
      github: "https://github.com/fer-of",
      gitlab: "https://gitlab.com/fer-of",
      instagram: "https://www.instagram.com/or.fer/",
      twitter: "https://x.com/OrFernanda07",
      telegram: "https://telegram.me/Ord_Fer",
      email: "mailto:ferordonezfigueroa07@gmail.com"
    },
    involvement: [
      {
        label: {
          en: "Linux of History",
          es: "Historia de Linux",
        },
        url: "https://lidsol.unam.mx/post/linux",
      }
    ],
  },
  //----

];


