import lispImg              from "../../public/courses-images/lisp.png";
import pythonFeaturedImg    from "../../public/courses-images/python-featured.png";
import pumaHatImg           from "../../public/courses-images/pumapwn.jpg";


import sysAdminCoverImg     from "../../public/courses-images/gabriel-heinzer-4Mw7nkQDByk-unsplash.jpg";
import sysAdminImg          from "../../public/courses-images/sysadmin.png";
import latexFeaturedImg     from "../../public/courses-images/jl-cabrera-vbRWm4Qn-28-unsplash.jpg";
import latexImg             from "../../public/courses-images/LaTeX.png";


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
  courseUrl?: string;
  image?: string;
  coverImage?: string;
  tags?: string[];
  modules?: { en: string; es: string };
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
    courseUrl: "https://meet.jit.si/SeminarioLISPLidsol",
    image: lispImg,
    coverImage: lispImg,
    tags: ["LISP", "Functional Programming", "Scheme", "sicp"],
    modules: {
      en: `Structure and Interpretation of Computer Programs
The Little Schemer
A Gentle Introduction to Symbolic Computation
Practical Common Lisp
ANSI Common Lisp
The Seasoned Schemer
The Reasoned Schemer`,
      es: `Structure and Interpretation of Computer Programs
The Little Schemer
A Gentle Introduction to Symbolic Computation
Practical Common Lisp
ANSI Common Lisp
The Seasoned Schemer
The Reasoned Schemer`
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
    tags: ["Python", "Introducción a la programación"],
    modules: {
      en: `# Introduction
  ## What is Python?
    - Guido Van Rossum
    - Companies using the language
  ## Understanding computers (a bit)
    - Programmable computers
    ## Software and Hardware
      - CPU
      - Primary memory
      - Secondary memory
      - I/O devices
    - Programming languages
  ## Program design
    - Development cycle
    - How does a program work?
    - Python programs as scripts
  - Installing Python
  - Installing a text editor
  - Python interpreter
# Input, Processing and Output
  ## Strings
  ## Screen output
    - Using print
    - F-strings
    - Format
  ## Comments
    - Single line
    - Multi-line
  ## Data types
    - Strings
    - Integers
    - Floating point numbers
    - Booleans
  - Arithmetic operators
  - Reading from keyboard
# Control structures
  - If, If-else, If-elif-else
  - While
  - For
# Sequences
  - Lists
  - Tuples
  - Dictionaries`,
      es: `# Introducción
  ## ¿Qué es Python?
    - Guido Van Rossum
    - Empresas que utilizan el lenguaje
  ## Entendiendo las computadoras (un poco)
    - Computadoras programables
  ## Software y Hardware
      - CPU
      - Memoria principal
      - Memoria secundaria
      - Dispositivos de E/S
    - Lenguajes de programación
  ## Diseño de programas
    - Ciclo de desarrollo
    - ¿Cómo funciona un programa?
    - Programas en Python como scripts
  - Instalación de Python
  - Instalación de editor de texto
  - Intérprete de Python
# Entrada, Procesamiento y Salida de datos
  ## Cadenas
  ## Impresión en pantalla
    - Uso de print
    - F-strings
    - Format
  ## Comentarios
    - De una línea
    - Multilínea
  ## Tipos de datos
    - Strings
    - Números enteros
    - Número de punto flotante
    - Booleanos
  - Operadores Aritméticos
  - Lectura desde el teclado
# Estructuras de control
  - If, If-else, If-elif-else
  - While
  - For
# Secuencias
  - Listas
  - Tuplas
  - Diccionarios`,
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
      en: "Puma Hat",
      es: "Puma Hat"
    },
    shortDescription: {
      en: "Explore computer security from an ethical perspective and learn penetration testing.",
      es: "Comunidad de ciberseguridad. Explora la seguridad informática desde una perspectiva ética y aprende pruebas de penetración."
    },
    fullDescription: {
      en: "We are a community with a diverse range of profiles and interests focused on computer security. We aim to create a space where hacking enthusiasts can connect and expand the cybersecurity landscape in Mexico. \nCheck our activities section to learn about our upcoming events.",
      es: "Somos una comunidad con pluralidad de perfiles e intereses con un enfoque de seguridad informática. Buscamos crear una comunidad donde entusiastas del hacking puedan convivir y expandir el panorama de la ciberseguridad en México. \nRevisa nuestra sección de actividades para informarte sobre nuestros próximos eventos."
    },
    instructor: "BDrag0n",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600",
    tags: ["Security", "Pentesting", "Ethical Hacking", "Cybersecurity"],
    modules: {
      en: `Cybersecurity Fundamentals
Reconnaissance and Footprinting
Common Vulnerabilities
System Exploitation
Post-Exploitation
Reports and Remediation`,
      es: `Fundamentos de Ciberseguridad
Reconocimiento y Footprinting
Vulnerabilidades comunes
Explotación de sistemas
Post-explotación
Informes y Remediación`
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
      en: "Basic GNU/Linux System Administrator Course",
      es: "Curso básico de SysAdmin GNU/Linux"
    },
    shortDescription: {
      en: "Learn GNU/Linux Server Administration ",
      es: "Aprende a gestionar servidores GNU/Linux 🐧"
    },
    fullDescription: {
      en: "A system administrator, known as a sysadmin, is a professional specialized in the management and maintenance of an organization's technological infrastructure. Their work consists of configuring, maintaining, and securing servers, networks, and computer systems so they operate efficiently and securely. Sysadmins are also responsible for ensuring that technological services are available and functioning correctly for users. Additionally, they manage information security, perform backups, and resolve technical issues to ensure that the entire organization's operating system is reliable and effective.",
      es: "Un administrador de sistemas, conocido como sysadmin, es un profesional especializado en la gestión y mantenimiento de la infrestructura tecnologica de una organizacion. Su trabajo consiste en configurar, mantener y asegurar servidores, redes y sistemas informaticos para que funcionen de manera eficiente y segura. Los sysadmin tambien se encargan de garantizar que los servicios tecnológicos estén disponibles y funcionando correctamente para los usuarios. Además, gestionan la seguridad de la información, realizan copias de seguridad y resuelven problemas técnicos para asegurar que todo el sistema operativo de la organización sea confiable y efectivo."
    },
    instructor: "Francisco Galindo",
    duration: { en: "1 week", es: "1 semana" },
    startDate: "2024-07-29",
    schedule: { en: "Mon–Fri, 10:00-14:00", es: "Lunes a Viernes, 10:00-14:00" },
    level: { en: "Intermediate", es: "Intermedio" },
    image: sysAdminImg,
    coverImage: sysAdminCoverImg,
    tags: ["Sysadmin", "Gnu/Linux", "Server", "Infrastructure"],
    modules: {
      en: `# Command Line 7.5 h
## Directory structure in GNU/Linux 0.5 h
## Users and permissions 1 h
## Basic commands 2 h
## Text editor 1 h
## Software installation 1 h
## Shell 2 h
# Debian GNU/Linux System 12.5 h
## Systemd 1 h
## Service administration 2.5 h
## Networking and Firewall 3 h
## Storage and file systems 2 h
## Data backup methods 2 h
## Containers 2 h`,
      es: `# Linea de comandos 7.5 h
## Estructura de directorios en GNU/Linux 0.5 h
## Usuarios y permisos 1 h
## Comandos básicos 2 h
## Editor de texto 1 h
## Instalación de programas 1 h
## Shell 2 h
# Sistema Debian GNU/Linux 12.5 h
## Systemd 1 h
## Administración de servicios 2.5 h
## Redes y Firewall 3 h
## Almacenamiento y sistemas de archivos 2 h
## Métodos de respaldo de información 2 h
## Contenedores 2 h`
    },
    requirements: {
      en: [
        "Basic knowledge of GNU/Linux",
        "Computer with a Debian virtual machine (instructions will be sent)"
      ],
      es: [
        "Conocimientos básicos de GNU/Linux",
        "Computadora con máquina virtual con Debian (se enviarán instrucciones)"
      ]
    },
    objectives: {
      en: [
        "Students will gain knowledge about GNU/Linux systems administration for server-side use."
      ],
      es: [
        "Los alumnos obtendrán conocimientos sobre la administración de sistemas GNU/Linux para su uso como servidor."
      ]
    }
  },
//---
  {
    id: 5,
    title: {
      en: "LaTeX Course",
      es: "Curso de LaTeX"
    },
    shortDescription: {
      en: "Approach LaTeX to enhance your skills in typographic composition and the professional creation of scientific and academic documents.",
      es: "Acércate a LaTex para mejorar tus habilidades en composición tipográfica y creación de documentos científicos y académicos de manera profesional."
    },
    fullDescription: {
      en: "Learn LaTeX from the comfort of your home! 🖥️✨ Join our free virtual course organized by the Research and Development Laboratory for Free Software (LIDSoL). \nDo you want to improve your skills in typographic composition and the professional creation of scientific and academic documents? This is the perfect time! Learn LaTeX from experts and boost your career in the academic and professional fields.",
      es: "¡Aprende LaTeX desde la comodidad de tu hogar! 🖥️✨ Únete a nuestro curso virtual gratuito organizado por el Laboratorio de Investigación y Desarrollo de Software Libre (LIDSoL). \n¿Quieres mejorar tus habilidades en composición tipográfica y creación de documentos científicos y académicos de manera profesional? ¡Este es el momento perfecto! Aprende LaTeX de la mano de expertos y potencia tu carrera en el ámbito académico y profesional."
    },
    instructor: "Francisco Galindo",
    duration: { en: "5 weeks", es: "5 semanas" },
    startDate: "2024-05-04",
    schedule: { en: "Saturday, 15:00-16:30 UTC-6", es: "Sábados, 15:00-16:30 UTC-6" },
    level: { en: "Beginner", es: "Principiantes" },
    resources: "https://github.com/LIDSOL/cursos/tree/master/2024-2/2024-05-05-Latex",
    courseUrl: "https://www.youtube.com/watch?v=mq2zEP0bo2E&list=PLvd_owpd6H-kSoqbbvdGc_Pg3YRytK8ZN",
    image: latexImg,
    coverImage: latexFeaturedImg,
    tags: ["LaTeX", "Composición De Textos", "Documentos Académicos",  "Tipografía Digital"],
    modules: {
      en: `# What are TeX and LaTeX
# Basic syntax
## Writing text
## Commands
## Environments
## Groups
## Comments
## Classes and packages
# Adding content to the document
## Writing mathematics
## Notes
## Links
## Adding links in the text
# Formatting the document
## Line spacing
## Paragraph spacing
## Text alignment`,
      es: `# ¿Qué son TeX y LaTeX
# Sintaxis básica
## Escribiendo texto
## Comandos
## Ambientes
## Grupos
## Comentarios
## Clases y paquetes
# Agregando contenido al documento
## Escribiendo matemáticas
## Notas
## Enlaces
## Agregando enlaces en el texto
# Dándole formato al documento
## Interlineado
## Espaciado entre párrafos
## Alineación de texto`
    },
    objectives: {
      en: [
        "The objective of the first sessions is for you to be able to create a LaTeX document, whether for personal interest or necessity.",
        "Include the vast majority of standard elements found in other word processing systems: justification, adding images, and inserting tables.",
        "Learn about unique LaTeX features compared to more popular systems: equation typesetting and bibliography management."
      ],
      es: [
        "El objetivo de las primeras sesiones es que puedas crear un documento de LaTeX, ya sea por gusto o por necesidad.",
        "Agregar la gran mayoría de los elementos habituales en otros sistemas de procesamiento de texto: justificación, adición de imágenes, adición de tablas.",
        "Conocer elementos únicos de LaTeX frente a sistemas más populares: composición de ecuaciones, manejo de bibliografía."
      ]
    }
  },
];
