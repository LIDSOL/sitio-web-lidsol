export interface Member {
  id: number;
  name: string;
  role: { en: string; es: string };
  bio: { en: string; es: string };
  image: string;
  email: string;
  github?: string;
  linkedin?: string;
  specialties: string[];
  projects: string[];
  joined: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "Dr. Juan Pérez",
    role: { 
      en: "Lab Director", 
      es: "Director del Laboratorio" 
    },
    bio: { 
      en: "PhD in Computer Science with 15 years of experience in open source development. Passionate about free software education and community building.",
      es: "Doctor en Ciencias de la Computación con 15 años de experiencia en desarrollo de código abierto. Apasionado por la educación en software libre y la construcción de comunidades."
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    email: "juan.perez@lidsol.org",
    github: "jperez",
    linkedin: "juanperez",
    specialties: ["Linux Kernel", "System Programming", "Computer Architecture"],
    projects: ["LibreKernel", "EduCompiler"],
    joined: "2010"
  },
  {
    id: 2,
    name: "Ing. Ana Martínez",
    role: { 
      en: "Web Development Lead", 
      es: "Líder de Desarrollo Web" 
    },
    bio: { 
      en: "Full-stack developer specializing in Python and modern web technologies. Contributor to several Django open source projects.",
      es: "Desarrolladora full-stack especializada en Python y tecnologías web modernas. Contribuidora de varios proyectos Django de código abierto."
    },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    email: "ana.martinez@lidsol.org",
    github: "anamartinez",
    linkedin: "anamartinezdev",
    specialties: ["Python", "Django", "React", "DevOps"],
    projects: ["OpenDocs", "CloudFS"],
    joined: "2015"
  },
  {
    id: 3,
    name: "M.C. Carlos Sánchez",
    role: { 
      en: "Security Researcher", 
      es: "Investigador de Seguridad" 
    },
    bio: { 
      en: "Cybersecurity expert with focus on ethical hacking and penetration testing. Teaches security courses and organizes CTF events.",
      es: "Experto en ciberseguridad con enfoque en hacking ético y pruebas de penetración. Imparte cursos de seguridad y organiza eventos CTF."
    },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    email: "carlos.sanchez@lidsol.org",
    github: "csanchez",
    linkedin: "carlossanchezsec",
    specialties: ["Cybersecurity", "Penetration Testing", "Cryptography"],
    projects: ["SecureVPN"],
    joined: "2017"
  },
  {
    id: 4,
    name: "Ing. Laura Rodríguez",
    role: { 
      en: "DevOps Engineer", 
      es: "Ingeniera DevOps" 
    },
    bio: { 
      en: "Cloud infrastructure specialist with expertise in containerization and orchestration. Advocate for infrastructure as code and CI/CD best practices.",
      es: "Especialista en infraestructura cloud con experiencia en contenedorización y orquestación. Defensora de infraestructura como código y mejores prácticas CI/CD."
    },
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    email: "laura.rodriguez@lidsol.org",
    github: "lrodriguez",
    linkedin: "laurarodriguezdevops",
    specialties: ["Docker", "Kubernetes", "AWS", "Terraform"],
    projects: ["CloudFS"],
    joined: "2018"
  },
  {
    id: 5,
    name: "Roberto García",
    role: { 
      en: "Student Developer", 
      es: "Estudiante Desarrollador" 
    },
    bio: { 
      en: "Computer Engineering student passionate about data visualization and machine learning. Active contributor to open source projects.",
      es: "Estudiante de Ingeniería en Computación apasionado por la visualización de datos y aprendizaje automático. Contribuidor activo a proyectos de código abierto."
    },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    email: "roberto.garcia@lidsol.org",
    github: "rgarcia",
    specialties: ["Python", "JavaScript", "Data Science"],
    projects: ["DataViz"],
    joined: "2023"
  },
  {
    id: 6,
    name: "María López",
    role: { 
      en: "Student Developer", 
      es: "Estudiante Desarrolladora" 
    },
    bio: { 
      en: "Software Engineering student interested in systems programming and compiler design. Learning Rust and contributing to educational tools.",
      es: "Estudiante de Ingeniería de Software interesada en programación de sistemas y diseño de compiladores. Aprendiendo Rust y contribuyendo a herramientas educativas."
    },
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    email: "maria.lopez@lidsol.org",
    github: "mlopez",
    specialties: ["Rust", "C", "Compilers"],
    projects: ["EduCompiler"],
    joined: "2024"
  }
];
