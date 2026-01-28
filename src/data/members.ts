import gunnarImg     from "../components/ui/source/images/gunnar.jpg";
import tonejitoImg   from "../components/ui/source/images/tonejito.png";
import fulgueirasImg from "../components/ui/source/images/fulgueiras.jpg";

export type MemberCategory =
  | "academic"
  | "student"
  | "formerstudent";

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
      en: " ",
      es: " ",
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
      en: "Academic Coordinator",
      es: "Arquitecto Organizacional",
    },
    bio: {
      en: "Self-taught software engineer and free-software developer since 1997.",
      es: "Llegué de casualidad al mundo FLOSS buscando un ERP para una fábrica de galletas. La fabrica se fue, pero el software y la curiosidad quedaron. Ahora ayudando a organizaciones a navegar los meandros de la tecnología.",
    },
    image: fulgueirasImg,
    joined: "2010",
    category: "student",

    educatedAt: {
      en: ["National Autonomous University of Mexico (UNAM)"],
      es: ["Ingeniería Industrial (Facultad de Ingenieria y Arquitectura de la Universidad de Lima)"],
    },

    interests: {
      en: [
        "Free Software communities",
        "Information security",
        "Unix-like systems",
      ],
      es: [
        "Comunidades de software libre",
        "Seguridad informática",
        "Sistemas tipo Unix",
      ],
    },

    contact: {
      email: "http://scr.im/47an",
      github: "https://github.com/gwolf",
      web: "https://gwolf.org",
      twitter: "https://twitter.com/gwolf",
    },

    contributions: [
      {
        label: {
          en: "Debian Project",
          es: "Proyecto Debian",
        },
        url: "https://www.debian.org",
      },
      {
        label: {
          en: "Personal Blog",
          es: "Blog Personal",
        },
        url: "https://gwolf.org/blog",
      },
    ],

    involvement: [
      {
        label: {
          en: "LIDSoL",
          es: "LIDSoL",
        },
        url: "https://lidsol.org",
      },
    ],
  },
//---
  {
    id: 4,
    name: "Dr. Gunnar Eyal Wolf Iszaevich",
    role: {
      en: "Academic Coordinator",
      es: "Coordinador Académico",
    },
    bio: {
      en: "Self-taught software engineer and free-software developer since 1997.",
      es: "Ingeniero en software autodidacta y desarrollador de software libre desde 1997.",
    },
    image: gunnarImg,
    joined: "2010",
    category: "formerstudent",

    educatedAt: {
      en: ["National Autonomous University of Mexico (UNAM)"],
      es: ["Universidad Nacional Autónoma de México (UNAM)"],
    },

    contact: {
      email: "http://scr.im/47an",
      github: "https://github.com/gwolf",
      web: "https://gwolf.org",
      twitter: "https://twitter.com/gwolf",
    },

    contributions: [
      {
        label: {
          en: "Debian Project",
          es: "Proyecto Debian",
        },
        url: "https://www.debian.org",
      },
      {
        label: {
          en: "Personal Blog",
          es: "Blog Personal",
        },
        url: "https://gwolf.org/blog",
      },
    ],

    involvement: [
      {
        label: {
          en: "LIDSoL",
          es: "LIDSoL",
        },
        url: "https://lidsol.org",
      },
    ],
  },



//---
  {
    id: 10,
    name: "Juan Flores",
    role: {
      en: " ",
      es: " ",
    },
    bio: {
      en: "Self-taught software engineer and free-software developer since 1997.",
      es: "Ingeniero en software autodidacta y desarrollador de software libre desde 1997.",
    },
    image: gunnarImg,
    joined: "2010",
    category: "formerstudent",

    educatedAt: {
      en: ["National Autonomous University of Mexico (UNAM)"],
      es: ["Universidad Nacional Autónoma de México (UNAM)"],
    },

    contact: {
      email: "http://scr.im/47an",
      github: "https://github.com/gwolf",
      web: "https://gwolf.org",
      twitter: "https://twitter.com/gwolf",
    },

    contributions: [
      {
        label: {
          en: "Debian Project",
          es: "Proyecto Debian",
        },
        url: "https://www.debian.org",
      },
      {
        label: {
          en: "Personal Blog",
          es: "Blog Personal",
        },
        url: "https://gwolf.org/blog",
      },
    ],

    involvement: [
      {
        label: {
          en: "LIDSoL",
          es: "LIDSoL",
        },
        url: "https://lidsol.org",
      },
    ],
  },
];

