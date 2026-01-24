export interface Event {
  id: number;
  title: { en: string; es: string };
  shortDescription: { en: string; es: string };
  fullDescription: { en: string; es: string };
  date: string;
  startDate: string;
  endDate: string;
  time: string;
  location: { en: string; es: string };
  capacity: string;
  status: "upcoming" | "ongoing" | "past";
  image: string;
  coverImage: string;
  tags: string[];
  requirements: { en: string[]; es: string[] };
  speaker?: {
    name: string;
    role: { en: string; es: string };
    bio: { en: string; es: string };
    image: string;
  };
  agenda?: { en: string[]; es: string[] };
}

export const events: Event[] = [
  {
    id: 1,
    title: { 
      en: "Workshop: Introduction to Git and GitHub", 
      es: "Taller: Introducción a Git y GitHub" 
    },
    shortDescription: { 
      en: "Learn the fundamentals of version control with Git and collaboration on GitHub.", 
      es: "Aprende los fundamentos del control de versiones con Git y colaboración en GitHub." 
    },
    fullDescription: {
      en: "This hands-on workshop will introduce you to the world of version control using Git and collaborative development with GitHub. You'll learn essential commands, how to manage branches, resolve conflicts, and contribute to open source projects. Perfect for beginners who want to start contributing to open source.",
      es: "Este taller práctico te introducirá al mundo del control de versiones usando Git y desarrollo colaborativo con GitHub. Aprenderás comandos esenciales, cómo gestionar ramas, resolver conflictos y contribuir a proyectos de código abierto. Ideal para principiantes que quieren comenzar a contribuir al código abierto."
    },
    date: "25 de Noviembre, 2024",
    startDate: "2024-11-25",
    endDate: "2024-11-25",
    time: "16:00 - 18:00",
    location: { 
      en: "Computer Lab, Building T", 
      es: "Laboratorio de Cómputo, Edificio T" 
    },
    capacity: "30 participantes",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600",
    tags: ["Git", "GitHub", "Version Control", "Workshop"],
    requirements: {
      en: [
        "Bring your own laptop",
        "Git installed (we'll help if needed)",
        "GitHub account (free)",
        "Basic command line knowledge helpful"
      ],
      es: [
        "Traer tu propia laptop",
        "Git instalado (ayudaremos si es necesario)",
        "Cuenta de GitHub (gratuita)",
        "Conocimiento básico de línea de comandos útil"
      ]
    },
    speaker: {
      name: "Roberto García",
      role: { 
        en: "Student Developer", 
        es: "Estudiante Desarrollador" 
      },
      bio: { 
        en: "Active open source contributor with experience in multiple projects.", 
        es: "Contribuidor activo de código abierto con experiencia en múltiples proyectos." 
      },
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800"
    },
    agenda: {
      en: [
        "Introduction to version control",
        "Git basics: commit, push, pull",
        "Branching and merging",
        "GitHub workflow",
        "Pull requests and code review",
        "Contributing to open source"
      ],
      es: [
        "Introducción al control de versiones",
        "Básicos de Git: commit, push, pull",
        "Ramificación y fusión",
        "Flujo de trabajo en GitHub",
        "Pull requests y revisión de código",
        "Contribuir al código abierto"
      ]
    }
  },
  {
    id: 2,
    title: { 
      en: "Hackathon: Free Software for Education", 
      es: "Hackathon: Software Libre para la Educación" 
    },
    shortDescription: { 
      en: "48-hour hackathon creating open source educational tools.", 
      es: "Hackathon de 48 horas creando herramientas educativas de código abierto." 
    },
    fullDescription: {
      en: "Join our 48-hour hackathon where we'll create educational tools for the open source community. Work in teams, get mentorship from experts, and compete for prizes. Whether you're a designer, developer, or educator, there's a place for you in this event. All skill levels welcome!",
      es: "Únete a nuestro hackathon de 48 horas donde crearemos herramientas educativas para la comunidad de código abierto. Trabaja en equipos, recibe mentoría de expertos y compite por premios. Ya seas diseñador, desarrollador o educador, hay un lugar para ti en este evento. ¡Todos los niveles de habilidad son bienvenidos!"
    },
    date: "2-3 de Diciembre, 2024",
    startDate: "2024-12-02",
    endDate: "2024-12-03",
    time: "Sábado 9:00 - Domingo 18:00",
    location: { 
      en: "LIDSOL Auditorium", 
      es: "Auditorio LIDSOL" 
    },
    capacity: "50 participantes",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600",
    tags: ["Hackathon", "Education", "Open Source", "Competition"],
    requirements: {
      en: [
        "Laptop with development environment",
        "Team of 2-4 people (or join a team there)",
        "Enthusiasm and creativity",
        "Food and drinks provided"
      ],
      es: [
        "Laptop con entorno de desarrollo",
        "Equipo de 2-4 personas (o únete a un equipo ahí)",
        "Entusiasmo y creatividad",
        "Comida y bebidas proporcionadas"
      ]
    },
    speaker: {
      name: "Dr. Juan Pérez",
      role: { 
        en: "Lab Director", 
        es: "Director del Laboratorio" 
      },
      bio: { 
        en: "Organizer and mentor for the hackathon.", 
        es: "Organizador y mentor del hackathon." 
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800"
    },
    agenda: {
      en: [
        "Saturday 9:00 - Opening and team formation",
        "Saturday 10:00 - Hacking begins!",
        "Saturday 13:00 - Lunch break",
        "Saturday 19:00 - Dinner",
        "Sunday 9:00 - Final push",
        "Sunday 14:00 - Project presentations",
        "Sunday 17:00 - Awards ceremony"
      ],
      es: [
        "Sábado 9:00 - Inauguración y formación de equipos",
        "Sábado 10:00 - ¡Comienza el hacking!",
        "Sábado 13:00 - Descanso para almuerzo",
        "Sábado 19:00 - Cena",
        "Domingo 9:00 - Empujón final",
        "Domingo 14:00 - Presentaciones de proyectos",
        "Domingo 17:00 - Ceremonia de premios"
      ]
    }
  },
  {
    id: 3,
    title: { 
      en: "Conference: Security and Privacy in Linux", 
      es: "Conferencia: Seguridad y Privacidad en Linux" 
    },
    shortDescription: { 
      en: "Security experts share best practices for protecting Linux systems.", 
      es: "Expertos en seguridad comparten mejores prácticas para proteger sistemas Linux." 
    },
    fullDescription: {
      en: "Join us for an evening with cybersecurity experts discussing the latest in Linux security and privacy. Topics include system hardening, privacy tools, secure configurations, and real-world case studies. Perfect for system administrators, security enthusiasts, and anyone concerned about their digital privacy.",
      es: "Únete a nosotros para una tarde con expertos en ciberseguridad discutiendo lo último en seguridad y privacidad de Linux. Los temas incluyen endurecimiento de sistemas, herramientas de privacidad, configuraciones seguras y estudios de casos del mundo real. Perfecto para administradores de sistemas, entusiastas de la seguridad y cualquier persona preocupada por su privacidad digital."
    },
    date: "10 de Diciembre, 2024",
    startDate: "2024-12-10",
    endDate: "2024-12-10",
    time: "18:00 - 20:00",
    location: { 
      en: "Main Conference Hall", 
      es: "Sala de Conferencias Principal" 
    },
    capacity: "100 participantes",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600",
    tags: ["Security", "Linux", "Privacy", "Conference"],
    requirements: {
      en: [
        "No prerequisites",
        "Basic Linux knowledge helpful",
        "Notebook for taking notes"
      ],
      es: [
        "Sin prerequisitos",
        "Conocimiento básico de Linux útil",
        "Cuaderno para tomar notas"
      ]
    },
    speaker: {
      name: "M.C. Carlos Sánchez",
      role: { 
        en: "Security Researcher", 
        es: "Investigador de Seguridad" 
      },
      bio: { 
        en: "Cybersecurity expert specializing in Linux security and ethical hacking.", 
        es: "Experto en ciberseguridad especializado en seguridad Linux y hacking ético." 
      },
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800"
    },
    agenda: {
      en: [
        "Introduction to Linux security landscape",
        "System hardening techniques",
        "Privacy tools and configurations",
        "Firewall and network security",
        "Encryption and secure storage",
        "Q&A session"
      ],
      es: [
        "Introducción al panorama de seguridad Linux",
        "Técnicas de endurecimiento de sistemas",
        "Herramientas y configuraciones de privacidad",
        "Firewall y seguridad de red",
        "Cifrado y almacenamiento seguro",
        "Sesión de preguntas y respuestas"
      ]
    }
  },
  {
    id: 4,
    title: { 
      en: "Install Fest: Linux Installation Day", 
      es: "Install Fest: Día de Instalación de Linux" 
    },
    shortDescription: { 
      en: "Bring your laptop and we'll help you install your favorite Linux distribution.", 
      es: "Trae tu laptop y te ayudaremos a instalar tu distribución Linux favorita." 
    },
    fullDescription: {
      en: "Thinking about trying Linux but not sure where to start? Bring your laptop to our Install Fest! We'll help you choose a distribution, create bootable media, partition your drive, and install Linux. Our experts will be on hand to answer questions and solve problems. We can set up dual boot with Windows or help with a complete Linux installation.",
      es: "¿Pensando en probar Linux pero no estás seguro por dónde empezar? ¡Trae tu laptop a nuestro Install Fest! Te ayudaremos a elegir una distribución, crear medios de arranque, particionar tu disco e instalar Linux. Nuestros expertos estarán disponibles para responder preguntas y resolver problemas. Podemos configurar arranque dual con Windows o ayudar con una instalación completa de Linux."
    },
    date: "15 de Diciembre, 2024",
    startDate: "2024-12-15",
    endDate: "2024-12-15",
    time: "10:00 - 16:00",
    location: { 
      en: "LIDSOL Laboratory", 
      es: "Laboratorio LIDSOL" 
    },
    capacity: "40 participantes",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600",
    tags: ["Linux", "Installation", "Support", "Workshop"],
    requirements: {
      en: [
        "Bring your laptop",
        "Backup important data before coming",
        "At least 25GB free disk space",
        "USB drive (8GB or larger) recommended"
      ],
      es: [
        "Traer tu laptop",
        "Respaldar datos importantes antes de venir",
        "Al menos 25GB de espacio libre en disco",
        "USB drive (8GB o mayor) recomendado"
      ]
    },
    speaker: {
      name: "LIDSOL Team",
      role: { 
        en: "Various Members", 
        es: "Varios Miembros" 
      },
      bio: { 
        en: "Multiple LIDSOL members will be available to help.", 
        es: "Varios miembros de LIDSOL estarán disponibles para ayudar." 
      },
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800"
    },
    agenda: {
      en: [
        "Choose your Linux distribution",
        "Create bootable USB",
        "Disk partitioning",
        "Install Linux",
        "Post-installation configuration",
        "Tips and recommended software"
      ],
      es: [
        "Elegir tu distribución Linux",
        "Crear USB de arranque",
        "Particionamiento de disco",
        "Instalar Linux",
        "Configuración post-instalación",
        "Consejos y software recomendado"
      ]
    }
  }
];
