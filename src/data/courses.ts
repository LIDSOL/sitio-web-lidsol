export interface Course {
  id: number;
  title: { en: string; es: string };
  shortDescription: { en: string; es: string };
  fullDescription: { en: string; es: string };
  instructor: string;
  duration: string;
  startDate: string;
  schedule: string;
  level: { en: string; es: string };
  enrolled: string;
  image: string;
  coverImage: string;
  tags: string[];
  modules: { en: string[]; es: string[] };
  requirements: { en: string[]; es: string[] };
  objectives: { en: string[]; es: string[] };
}

export const courses: Course[] = [
  {
    id: 1,
    title: { 
      en: "Linux Fundamentals", 
      es: "Fundamentos de Linux" 
    },
    shortDescription: { 
      en: "Master command line, system administration, and fundamental Linux concepts.", 
      es: "Domina la línea de comandos, administración del sistema y conceptos fundamentales de Linux." 
    },
    fullDescription: {
      en: "This comprehensive course will take you from Linux beginner to confident user. You'll learn essential command-line skills, system administration basics, and how to navigate and manage a Linux system. Perfect for students, developers, and anyone interested in exploring the world of Unix-like operating systems.",
      es: "Este curso integral te llevará de principiante en Linux a usuario competente. Aprenderás habilidades esenciales de línea de comandos, fundamentos de administración de sistemas y cómo navegar y gestionar un sistema Linux. Perfecto para estudiantes, desarrolladores y cualquier persona interesada en explorar el mundo de los sistemas operativos tipo Unix."
    },
    instructor: "Dr. Juan Pérez",
    duration: "8 semanas",
    startDate: "Enero 15, 2025",
    schedule: "Martes y Jueves, 18:00-20:00",
    level: { en: "Beginner", es: "Principiante" },
    enrolled: "25/30",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600",
    tags: ["Linux", "Terminal", "Bash", "System Administration"],
    modules: {
      en: [
        "Introduction to Linux and Open Source",
        "Basic Command Line",
        "File System and Permissions",
        "Process Management",
        "Networking in Linux",
        "Bash Scripting"
      ],
      es: [
        "Introducción a Linux y Open Source",
        "Línea de comandos básica",
        "Sistema de archivos y permisos",
        "Gestión de procesos",
        "Redes en Linux",
        "Scripting con Bash"
      ]
    },
    requirements: {
      en: [
        "Basic computer knowledge",
        "No prior Linux experience required",
        "Computer for installing Linux (VM or dual boot)"
      ],
      es: [
        "Conocimientos básicos de computación",
        "No se requiere experiencia previa en Linux",
        "Computadora para instalar Linux (VM o arranque dual)"
      ]
    },
    objectives: {
      en: [
        "Navigate the Linux file system confidently",
        "Execute and understand essential commands",
        "Manage users, groups, and permissions",
        "Write basic Bash scripts",
        "Troubleshoot common Linux issues"
      ],
      es: [
        "Navegar el sistema de archivos Linux con confianza",
        "Ejecutar y comprender comandos esenciales",
        "Gestionar usuarios, grupos y permisos",
        "Escribir scripts básicos de Bash",
        "Solucionar problemas comunes de Linux"
      ]
    }
  },
  {
    id: 2,
    title: { 
      en: "Web Development with Python and Django", 
      es: "Desarrollo Web con Python y Django" 
    },
    shortDescription: { 
      en: "Learn to create robust and scalable web applications using Python and Django.", 
      es: "Aprende a crear aplicaciones web robustas y escalables usando Python y Django." 
    },
    fullDescription: {
      en: "Build modern web applications from scratch using Python and the powerful Django framework. This course covers everything from basic setup to deployment, including database design, user authentication, REST APIs, and production best practices. You'll work on real-world projects and learn industry-standard development workflows.",
      es: "Construye aplicaciones web modernas desde cero usando Python y el poderoso framework Django. Este curso cubre todo desde la configuración básica hasta el despliegue, incluyendo diseño de bases de datos, autenticación de usuarios, APIs REST y mejores prácticas de producción. Trabajarás en proyectos del mundo real y aprenderás flujos de trabajo de desarrollo estándar de la industria."
    },
    instructor: "Ing. Ana Martínez",
    duration: "10 semanas",
    startDate: "Enero 22, 2025",
    schedule: "Lunes y Miércoles, 17:00-19:00",
    level: { en: "Intermediate", es: "Intermedio" },
    enrolled: "18/25",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600",
    tags: ["Python", "Django", "Web Development", "Backend", "REST API"],
    modules: {
      en: [
        "Python for Web",
        "Django Configuration",
        "Models and Databases",
        "Views and Templates",
        "Authentication and Security",
        "Deploy and Production"
      ],
      es: [
        "Python para web",
        "Configuración de Django",
        "Modelos y Bases de Datos",
        "Vistas y Templates",
        "Autenticación y Seguridad",
        "Deploy y Producción"
      ]
    },
    requirements: {
      en: [
        "Basic Python knowledge",
        "Understanding of HTML and CSS",
        "Familiarity with databases (helpful but not required)"
      ],
      es: [
        "Conocimientos básicos de Python",
        "Comprensión de HTML y CSS",
        "Familiaridad con bases de datos (útil pero no requerido)"
      ]
    },
    objectives: {
      en: [
        "Build full-featured web applications with Django",
        "Design and implement database schemas",
        "Create RESTful APIs",
        "Implement user authentication and authorization",
        "Deploy applications to production"
      ],
      es: [
        "Construir aplicaciones web completas con Django",
        "Diseñar e implementar esquemas de bases de datos",
        "Crear APIs RESTful",
        "Implementar autenticación y autorización de usuarios",
        "Desplegar aplicaciones a producción"
      ]
    }
  },
  {
    id: 3,
    title: { 
      en: "Cybersecurity and Ethical Hacking", 
      es: "Ciberseguridad y Ethical Hacking" 
    },
    shortDescription: { 
      en: "Explore computer security from an ethical perspective and learn penetration testing.", 
      es: "Explora la seguridad informática desde una perspectiva ética y aprende pruebas de penetración." 
    },
    fullDescription: {
      en: "Dive into the world of cybersecurity with a focus on ethical practices. This advanced course teaches you how to think like an attacker to better defend systems. You'll learn penetration testing methodologies, vulnerability assessment, exploitation techniques, and how to secure systems against common attacks. All techniques are taught within a legal and ethical framework.",
      es: "Sumérgete en el mundo de la ciberseguridad con un enfoque en prácticas éticas. Este curso avanzado te enseña a pensar como un atacante para defender mejor los sistemas. Aprenderás metodologías de pruebas de penetración, evaluación de vulnerabilidades, técnicas de explotación y cómo asegurar sistemas contra ataques comunes. Todas las técnicas se enseñan dentro de un marco legal y ético."
    },
    instructor: "M.C. Carlos Sánchez",
    duration: "12 semanas",
    startDate: "Febrero 5, 2025",
    schedule: "Viernes, 16:00-20:00",
    level: { en: "Advanced", es: "Avanzado" },
    enrolled: "15/20",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600",
    tags: ["Security", "Pentesting", "Ethical Hacking", "Cybersecurity"],
    modules: {
      en: [
        "Cybersecurity Fundamentals",
        "Reconnaissance and Footprinting",
        "Common Vulnerabilities",
        "System Exploitation",
        "Post-Exploitation",
        "Reports and Remediation"
      ],
      es: [
        "Fundamentos de Ciberseguridad",
        "Reconocimiento y Footprinting",
        "Vulnerabilidades comunes",
        "Explotación de sistemas",
        "Post-explotación",
        "Informes y Remediación"
      ]
    },
    requirements: {
      en: [
        "Strong Linux knowledge",
        "Networking fundamentals",
        "Basic programming skills",
        "Understanding of computer systems"
      ],
      es: [
        "Conocimientos sólidos de Linux",
        "Fundamentos de redes",
        "Habilidades básicas de programación",
        "Comprensión de sistemas informáticos"
      ]
    },
    objectives: {
      en: [
        "Conduct professional penetration tests",
        "Identify and exploit common vulnerabilities",
        "Understand attack methodologies",
        "Secure systems against threats",
        "Write professional security reports"
      ],
      es: [
        "Realizar pruebas de penetración profesionales",
        "Identificar y explotar vulnerabilidades comunes",
        "Comprender metodologías de ataque",
        "Asegurar sistemas contra amenazas",
        "Escribir informes profesionales de seguridad"
      ]
    }
  },
  {
    id: 4,
    title: { 
      en: "Containers with Docker and Kubernetes", 
      es: "Contenedores con Docker y Kubernetes" 
    },
    shortDescription: { 
      en: "Learn to containerize applications and orchestrate them in production.", 
      es: "Aprende a containerizar aplicaciones y orquestarlas en producción." 
    },
    fullDescription: {
      en: "Master the art of containerization with Docker and Kubernetes. This course covers everything from basic container concepts to advanced orchestration strategies. You'll learn how to package applications, manage container lifecycles, implement CI/CD pipelines, and deploy scalable applications in production. Essential for modern DevOps practices.",
      es: "Domina el arte de la containerización con Docker y Kubernetes. Este curso cubre todo desde conceptos básicos de contenedores hasta estrategias avanzadas de orquestación. Aprenderás a empaquetar aplicaciones, gestionar ciclos de vida de contenedores, implementar pipelines CI/CD y desplegar aplicaciones escalables en producción. Esencial para prácticas DevOps modernas."
    },
    instructor: "Ing. Laura Rodríguez",
    duration: "6 semanas",
    startDate: "Febrero 12, 2025",
    schedule: "Sábados, 10:00-14:00",
    level: { en: "Intermediate", es: "Intermedio" },
    enrolled: "12/20",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600",
    tags: ["Docker", "Kubernetes", "DevOps", "Containers", "Cloud"],
    modules: {
      en: [
        "Introduction to Containers",
        "Docker Fundamentals",
        "Docker Compose",
        "Kubernetes Basics",
        "Deployment and Scaling",
        "CI/CD with Containers"
      ],
      es: [
        "Introducción a Contenedores",
        "Docker Fundamentals",
        "Docker Compose",
        "Kubernetes Basics",
        "Despliegue y Escalado",
        "CI/CD con Containers"
      ]
    },
    requirements: {
      en: [
        "Basic Linux command line",
        "Understanding of networking",
        "Familiarity with web applications",
        "Basic programming knowledge"
      ],
      es: [
        "Línea de comandos básica de Linux",
        "Comprensión de redes",
        "Familiaridad con aplicaciones web",
        "Conocimientos básicos de programación"
      ]
    },
    objectives: {
      en: [
        "Create and manage Docker containers",
        "Build multi-container applications",
        "Deploy applications to Kubernetes",
        "Implement container orchestration",
        "Set up CI/CD pipelines"
      ],
      es: [
        "Crear y gestionar contenedores Docker",
        "Construir aplicaciones multi-contenedor",
        "Desplegar aplicaciones en Kubernetes",
        "Implementar orquestación de contenedores",
        "Configurar pipelines CI/CD"
      ]
    }
  }
];
