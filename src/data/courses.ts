import lispImg              from "../../public/courses-images/lisp.png";
import pythonFeaturedImg    from "../../public/courses-images/python-featured.png";


import latexImg     from "../../public/courses-images/LaTeX.png";
import sysAdminImg  from "../../public/courses-images/sysadmin.png";

export type ModuleItem = string | [string, (string | string[])[]?];

export interface Course {
  id: number;
  title: { en: string; es: string };
  shortDescription?: { en: string; es: string };
  fullDescription?: { en: string; es: string };
  instructor?: string;
  duration?: { en: string; es: string };
  startDate?: string;
  schedule?: { en: string; es: string };
  level?: { en: string; es: string };
  enrolled?: string;
  resources?: string;
  image?: string;
  coverImage?: string;
  tags?: string[];
  modules?: { en: ModuleItem[]; es: ModuleItem[] };
  requirements?: { en: string[]; es: string[] };
  objectives?: { en: string[]; es: string[] };
}

export const courses: Course[] = [
  {
    id: 1,
    title: {
      en: "LISP Seminar",
      es: "Seminario de LISP"
    },
    shortDescription: {
      en: "Get closer to functional programming and computing with LISP :)",
      es: "Acércate a la programación funcional y a la computación con LISP :)"
    },
    fullDescription: {
      en: "In this seminar, we will recover various materials to learn about the benefits and challenges of the LISP family of languages. Initially, we focused on programming using Scheme, a minimalist and elegant dialect of the LISP family. Currently, we are reviewing the Common Lisp dialect. \n We meet three days a week: Monday, Wednesday, and Thursday from 7:00 PM to 8:00 PM (Mexico City Time) in the Jitsi room [SeminarioLispLisdol](https://meet.jit.si/SeminarioLISPLidsol).",
      es: "En este seminario recuperaremos diversos materiales para aprender las bondades y retos de la familia de lenguajes LISP. En un principio nos enfocamos en la programación empleando scheme, un dialecto minimalista y elegante de la familia de lenguajes de programación LISP. Actualmente revisamos el dialecto Common Lisp. \n Nos reunimos tres días a la semana; lunes, miercoles y jueves en un horario de 19:00 a 20:00 (Tiempo de la Ciudad de México) en la sala de Jitsi [SeminarioLispLisdol](https://meet.jit.si/SeminarioLISPLidsol)."
    },
    instructor: "Telior",
    duration: { en: "2 weeks", es: "2 semanas" },
    startDate: "2020-06-01",
    schedule: { en: "Monday, Wednesday, and Thursday, 19:00-21:00", es: "Lunes, miércoles y jueves, 19:00-21:00" },
    level: { en: "Intermediate", es: "Intermedio" },
    resources: "https://gitlab.com/lidsol/seminario-lisp",
    image: lispImg,
    coverImage: lispImg,
    tags: ["LISP", "Functional Programming", "Scheme", "sicp"],
    modules: {
      en: [
        "Structure and Interpretation of Computer Programs: The SICP book was used at MIT for decades to introduce students to computing and programming.",
        "The Little Schemer",
        "A Gentle Introduction to Symbolic Computation",
        "Practical Common Lisp",
        "ANSI Common Lisp",
        "The Seasoned Schemer",
        "The Reasoned Schemer"
      ],
      es: [
        "Structure and Interpretation of Computer Programs: El libro SICP fue utilizado en el MIT durante décadas para iniciar a sus alumnos a la computación y a la programación.",
        "The Little Schemer",
        "A Gentle Introduction to Symbolic Computation",
        "Practical Common Lisp",
        "ANSI Common Lisp",
        "The Seasoned Schemer",
        "The Reasoned Schemer"
      ]
    }
    },
  {
    id: 2,
    title: {
      en: "Python Fundamentals",
      es: "Fundamentos de Python"
    },
    shortDescription: {
      en: "A course on the fundamentals of the Python programming language 🐍",
      es: "Curso de los fundamentos del lenguaje de programación Python 🐍"
    },
    fullDescription: {
      en: "Python is a versatile and constantly growing language. In recent years, it has shown explosive adoption reflected in fields such as artificial intelligence, web development, and big data management, among others. In this course, we will delve into the basic elements of the language that will serve as the foundation for creating a project that demonstrates development speed, code clarity, and the language's overall power. \nThe course is designed and built for individuals without prior programming knowledge and with elementary computing notions. It is ideal for those who want to start programming, as Python is relatively simple, has clear syntax, is extensively documented, and is powerful.",
      es: "Python es un lenguaje versátil y en constante crecimiento. En los últimos años ha mostrado una adopción explosiva que se refleja en el desarrollo de inteligencia artificial, desarrollo web, manejo de grandes cantidades de datos, entre otras. En este curso abundaremos en los elementos básicos del lenguaje que servirán como cimientos para la elaboración de un proyecto que muestre la rapidez de desarrollo, claridad del código y poder del lenguaje. \nEl curso esta pensado y construido para personas sin conocimientos previos en programación y con nociones elementales de computación. Es adecuado para quienes quieran comenzar a programar ya que el lenguaje de programación python es relativamente sencillo, con sintaxis clara, ampliamente documentado y poderoso. \n _Fundamentos de Python por LIDSOL se distribuye bajo una Licencia Creative Commons Atribución 4.0 Internacional._",
    },
    instructor: "Diego Barriga",
    duration: { en: "1 week", es: "1 semana" },
    startDate: "2020-06-23",
    level: { en: "Beginner", es: "Principiantes" },
    resources: "https://gitlab.com/lidsol/intro-python",
    image: pythonFeaturedImg,
    coverImage: pythonFeaturedImg,
    tags: ["Python", "Django", "Web Development", "Backend", "REST API"],
    modules: {
      en: [
        ["Introduction", [
          "What is Python?",
          "Guido Van Rossum",
          "Companies using the language",
          ["Understanding computers (a bit)", [
            "Programmable computers",
            ["Software and Hardware", ["CPU", "Primary memory", "Secondary memory", "I/O devices"]],
            "Programming languages"
          ]],
          "Program design",
          "Installing Python",
          "Installing a text editor",
          "Python interpreter"
        ]],
        ["Input, Processing and Output", [
          "String",
          "Screen output",
          ["Print statement", ["Using print", "F-strings", "Format"]],
          ["Comments", ["Single line", "Multi-line"]],
          ["Data types", ["Strings", "Integers", "Floating point numbers", "Booleans"]],
          "Arithmetic operators",
          "Reading from keyboard"
        ]],
        ["Control structures", ["if", "if-else", "if-elif-else", "while", "for"]],
        ["Sequences", ["Lists", "Tuples", "Dictionaries", "Sets"]],
        ["Modular programming", [
          ["Functions", ["Required positional parameters", "Optional parameters"]]
        ]]
      ],
      es: [
        ["Introducción", [
          "¿Qué es Python?",
          "Guido Van Rossum",
          "Empresas que utilizan el lenguaje",
          ["Entendiendo las computadoras (un poco)", [
            "Computadoras programables",
            ["Software y Hardware", ["CPU", "Memoria principal", "Memoria secundaria", "Dispositivos de E/S"]],
            "Lenguajes de programación"
          ]],
          "Diseño de programas",
          "Instalación de Python",
          "Instalación de editor de texto",
          "Intérprete de Python"
        ]],
        ["Entrada, Procesamiento y Salida de datos", [
          "Cadena",
          "Impresión en pantalla",
          ["Uso de print", ["Uso de print", "F-strings", "Format"]],
          ["Comentarios", ["De una línea", "Multilínea"]],
          ["Tipos de datos", ["Strings", "Números enteros", "Número de punto flotante", "Booleanos"]],
          "Operadores Aritméticos",
          "Lectura desde el teclado"
        ]],
        ["Estructuras de control", ["if", "if-else", "if-elif-else", "while", "for"]],
        ["Secuencias", ["Listas", "Tuplas", "Diccionarios", "Conjuntos"]],
        ["Programación modular", [
          ["Funciones", ["Parámetros obligatorios posicionales", "Parámetros opcionales"]]
        ]]
      ]
    },
    objectives: {
      en: [
        "This course does not claim to be exhaustive; however, it aims to cover enough fundamentals to kickstart your journey into the world of programming."
      ],
      es: [
        "Este curso no pretende ser exhaustivo, sin embargo, se busca abarcar los fundamentos suficientes para iniciar en el mundo de la programación."
      ]
    }
  },
  {
    id: 3,
    title: {
      en: "",
      es: "Puma Hat"
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
    duration: { en: "12 weeks", es: "12 semanas" },
    startDate: "2025-02-05",
    schedule: { en: "Friday, 16:00-20:00", es: "Viernes, 16:00-20:00" },
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
  //---
  {
    id: 4,
    title: {
      en: " ",
      es: "Curso básico de SysAdmin GNU/Linux"
    },
    shortDescription: {
      en: " ",
      es: "Aprende a gestionar servidores GNU/Linux 🐧"
    },
    fullDescription: {
      en: " ",
      es: "Un administrador de sistemas, conocido como sysadmin, es un profesional especializado en la gestión y mantenimiento de la infrestructura tecnologica de una organizacion. Su trabajo consiste en configurar, mantener y asegurar servidores, redes y sistemas informaticos para que funcionen de manera eficiente y segura. Los sysadmin tambien se encargan de garantizar que los servicios tecnológicos estén disponibles y funcionando correctamente para los usuarios. Además, gestionan la seguridad de la información, realizan copias de seguridad y resuelven problemas técnicos para asegurar que todo el sistema operativo de la organización sea confiable y efectivo."
    },
    instructor: "Ing. Laura Rodríguez",
    duration: { en: "6 weeks", es: "6 semanas" },
    startDate: "2025-02-12",
    schedule: { en: "Saturday, 10:00-14:00", es: "Sábados, 10:00-14:00" },
    level: { en: "Intermediate", es: "Intermedio" },
    enrolled: "12/20",
    image: sysAdminImg,
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
  },
  {
    id: 5,
    title: {
      en: "LaTeX Course",
      es: "Curso de LaTeX"
    },
    shortDescription: {
      en: "Learn to containerize applications and orchestrate them in production.",
      es: "Acércate a LaTex para mejorar tus habilidades en composición tipográfica y creación de documentos científicos y académicos de manera profesional."
    },
    fullDescription: {
      en: "Master the art of containerization with Docker and Kubernetes. This course covers everything from basic container concepts to advanced orchestration strategies. You'll learn how to package applications, manage container lifecycles, implement CI/CD pipelines, and deploy scalable applications in production. Essential for modern DevOps practices.",
      es: "¡Aprende LaTeX desde la comodidad de tu hogar! 🖥️✨ Únete a nuestro curso virtual gratuito organizado por el Laboratorio de Investigación y Desarrollo de Software Libre (LIDSoL). \n¿Quieres mejorar tus habilidades en composición tipográfica y creación de documentos científicos y académicos de manera profesional? ¡Este es el momento perfecto! Aprende LaTeX de la mano de expertos y potencia tu carrera en el ámbito académico y profesional."
    },
    instructor: "Francisco Galindo",
    duration: { en: "5 weeks", es: "5 semanas" },
    startDate: "2024-05-04",
    schedule: { en: "Saturday, 15:00-16:30 UTC-6", es: "Sábados, 15:00-16:30 UTC-6" },
    level: { en: "Intermediate", es: "Intermedio" },
    image: latexImg,
    coverImage: latexImg,
    tags: ["LaTeX", "Composición De Textos", "Documentos Académicos",  "Tipografía Digital"],
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
