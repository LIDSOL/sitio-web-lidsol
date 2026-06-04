import latexImg             from "../../public/courses-images/LaTeX.png";
import latexThumbImg        from "../../public/courses-images/l-ch-AuMob2xihZk-unsplash.jpg";
import latexBannerImg       from "../../public/courses-images/LaTeXfeatured.png";
import lispImg              from "../../public/courses-images/lisp.png";
import pumaHatImg           from "../../public/courses-images/pumapwn.jpg";
import matrixIMg            from "../../public/courses-images/markus-spiske-iar-afB0QQw-unsplash.jpg";
import sysAdminCoverImg     from "../../public/courses-images/lukas-ktmQBr5hNd8-unsplash.jpg";
import sysAdminImg          from "../../public/courses-images/sysadmin.webp";
import pythonFeaturedImg    from "../../public/courses-images/python-featured.png";

export interface Course {
  id: number;
  title: { en: string; es: string };
  shortDescription?: { en: string; es: string };
  fullDescription?: { en: string; es: string };
  instructor?: string;
  modality?: { en: string; es: string };
  cost?: { en: string; es: string };
  location?: { en: string; es: string };
  duration?: { en: string; es: string };
  startDate?: string;
  schedule?: { en: string; es: string };
  level?: { en: string; es: string };
  capacity?: string;
  action1?: {
    text: { en: string; es: string };
    url: string;
  };
  action2?: {
    text: { en: string; es: string };
    url: string;
  };
  image?: string;
  coverImage?: string;
  descriptionImage?: string;
  links?: {
    text: { en: string; es: string };
    url: string;
  }[];
  tags?: { en: string[]; es: string[] };
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
    startDate: "2020-06-01",
    fullDescription: {
      en: "In this seminar, we will recover various materials to learn about the benefits and challenges of the LISP family of languages. Initially, we focused on programming using Scheme, a minimalist and elegant dialect of the LISP family. Currently, we are reviewing the Common Lisp dialect. \n We meet three days a week: Monday, Wednesday, and Thursday from 7:00 PM to 8:00 PM (Mexico City Time) in the Jitsi room [SeminarioLispLisdol](https://meet.jit.si/SeminarioLISPLidsol).",
      es: "En este seminario recuperaremos diversos materiales para aprender las bondades y retos de la familia de lenguajes LISP. En un principio nos enfocamos en la programación empleando scheme, un dialecto minimalista y elegante de la familia de lenguajes de programación LISP. Actualmente revisamos el dialecto Common Lisp. \n Nos reunimos tres días a la semana; lunes, miercoles y jueves en un horario de 19:00 a 20:00 (Tiempo de la Ciudad de México) en la sala de Jitsi [SeminarioLispLisdol](https://meet.jit.si/SeminarioLISPLidsol)."
    },
    instructor: "Juan M.S. Rios",
    duration: { en: "2 weeks", es: "2 semanas" },
    schedule: { en: "Wednesday and Saturday, 19:00-21:00 (UTC-6)", es: "Miercoles y Sábado, 19:00-21:00 (UTC-6)" },
    level: { en: "Intermediate", es: "Intermedio" },
    action1: {
      text: { en: "Repository", es: "Repositorio" },
      url: "https://gitlab.com/lidsol/seminario-lisp"
    },
    action2: {
      text: { en: "Join Session", es: "Unirse a la Sesión" },
      url: "https://meet.jit.si/SeminarioLISPLidsol"
    },
    image: lispImg,
    coverImage: lispImg,
    tags: {
      en: ["LISP", "Functional Programming", "Scheme", "SICP"],
      es: ["LISP", "Programación Funcional", "Scheme", "SICP"]
    },
    modules: {
        en: `# Structure and Interpretation of Computer Programs
# The Little Schemer
# A Gentle Introduction to Symbolic Computation
# Practical Common Lisp
# ANSI Common Lisp
# The Seasoned Schemer
# The Reasoned Schemer`,
        es: `# Estructura e interpretación de programas de computadora
# El pequeño Schemer
# Una introducción sencilla a la computación simbólica
# Common Lisp práctico
# ANSI Common Lisp
# El Schemer experimentado
# El Schemer razonado`
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
      en: "Python is a versatile and constantly growing language. In recent years it has seen explosive adoption reflected in areas such as artificial intelligence, web development, and large-scale data handling, among others. In this course we will delve into the basic elements of the language that will serve as the foundation for creating a project that demonstrates development speed, code clarity, and the language's power.\n## Who is it for?\n* The course is designed and built for people with no prior programming knowledge and only basic computing skills.\n* It is suitable for those who want to start programming since the `python` programming language is relatively simple, has clear syntax, is well documented, and is powerful.\n* This course does not aim to be exhaustive; rather, it seeks to cover the fundamentals necessary to begin in the world of programming.\n## Repository\n* [GitLab](https://gitlab.com/lidsol/intro-python)\n## Questions?\n* Twitter: [@umoqnier](https://twitter.com/umoqnier)\n* Email: diegobarriga at protonmail.com",
      es: "Python es un lenguaje versátil y en constante crecimiento. En los últimos años ha mostrado una adopción explosiva que se refleja en el desarrollo de inteligencia artificial, desarrollo web, manejo de grandes cantidades de datos, entre otras. En este curso abundaremos en los elementos básicos del lenguaje que servirán como cimientos para la elaboración de un proyecto que muestre la rapidez de desarrollo, claridad del código y poder del lenguaje.\n## A quien va dirigido?\n * El curso esta pensado y construido para personas sin conocimientos previos en programación y con nociones elementales de computación.\n* Es adecuado para quienes quieran comenzar a programar ya que el lenguaje de programación `python` es relativamente sencillo, con sintaxis clara, ampliamente documentado y poderoso.\n* Este curso no pretende ser exhaustivo, sin embargo, se busca abarcar los fundamentos suficientes para iniciar en el mundo de la programación.\n## Repositorio\n* [Gitlab](https://gitlab.com/lidsol/intro-python)\n## ¿Tienes alguna duda?\n* Twitter: [@umoqnier](https://twitter.com/umoqnier)\n* Correo: diegobarriga at protonmail.com",
    },
    instructor: "Diego Barriga",
    duration: { en: "1 week", es: "1 semana" },
    startDate: "2020-06-23",
    level: { en: "Beginner", es: "Principiantes" },
    action1: {
      text: { en: "Repository", es: "Repositorio" },
      url: "https://gitlab.com/lidsol/intro-python"
    },
    image: pythonFeaturedImg,
    coverImage: pythonFeaturedImg,
    tags: {
      en: ["Python", "Introduction to Programming"],
      es: ["Python", "Introducción a la programación"]
    },
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
      es: "Comunidad de ciberseguridad.Explora la seguridad informática desde una perspectiva ética y aprende pruebas de penetración"
    },
    startDate: "2020-07-18",
    fullDescription: {
      en: "We are a community with a diverse range of profiles and interests focused on computer security. We aim to create a space where hacking enthusiasts can connect and expand the cybersecurity landscape in Mexico.",
      es: "Somos una comunidad con pluralidad de perfiles e intereses con un enfoque de seguridad informática. Buscamos crear una comunidad donde entusiastas del hacking puedan convivir y expandir el panorama de la ciberseguridad en México."
    },
    instructor: "BDrag0n",
    image: pumaHatImg,
    coverImage: matrixIMg,
    links: [
      { text: { en: "YouTube Channel", es: "Canal de YouTube" }, url: "https://www.youtube.com/channel/UCENnUbsGGX8wPwxKbtqABwA" },
      { text: { en: "Facebook", es: "Facebook" }, url: "https://www.facebook.com/PumaHat" },
    ],
    tags: {
      en: ["Security", "Pentesting", "Ethical Hacking", "Cybersecurity"],
      es: ["Seguridad", "Pentesting", "Hacking Ético", "Ciberseguridad"]
    },
    modules: {
        en: `# Linux Basics\n\nIn these sessions we learn the fundamentals of Linux with a focus on security.\n\n# Networking Basics\n\nComing soon\n\n# CTF\n\nOnce a week we meet to solve Hack The Box, TryHackMe machines, and other CTF-style challenges.\n\n# Podcast\n\nWe publish interviews and talks with experts from various security fields. The goal is to showcase their backgrounds, areas of expertise, and opinions. Through a plurality of ideas we aim to broaden the perspective on security.\n`,
        es: `# Linux Basics\n
En estas sesiones aprendemos sobre las bases de Linux con un enfoque a seguridad.\n
# Redes Basics\n
Próximamente\n
# CTF\n
Una vez por semana nos reunimos para resolver maquinas de hackthebox, tryhackme y otros retos estilo ctf.\n
# Podcast\n
Publicamos entrevistas y charlas con expertos en distintas áreas de seguridad. Esto con el objetivo de exponer su trayectoria, área de expertise y opiniones. A través de la pluralidad de ideas buscamos ampliar el panorama sobre la seguridad.
      `
    },
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
    image: sysAdminImg,
    coverImage: sysAdminCoverImg,
    tags: {
      en: ["Sysadmin", "GNU/Linux", "Server", "Infrastructure"],
      es: ["Sysadmin", "GNU/Linux", "Servidor", "Infraestructura"]
    },
    startDate: "2020-07-29",
    fullDescription: {
      en: "A system administrator, known as a sysadmin, is a professional specialized in the management and maintenance of an organization's technological infrastructure. Their work consists of configuring, maintaining, and securing servers, networks, and computer systems so they operate efficiently and securely. Sysadmins are also responsible for ensuring that technological services are available and functioning correctly for users. Additionally, they manage information security, perform backups, and resolve technical issues to ensure that the entire organization's operating system is reliable and effective.",
      es: "Un administrador de sistemas, conocido como sysadmin, es un profesional especializado en la gestión y mantenimiento de la infrestructura tecnologica de una organizacion. Su trabajo consiste en configurar, mantener y asegurar servidores, redes y sistemas informaticos para que funcionen de manera eficiente y segura. Los sysadmin tambien se encargan de garantizar que los servicios tecnológicos estén disponibles y funcionando correctamente para los usuarios. Además, gestionan la seguridad de la información, realizan copias de seguridad y resuelven problemas técnicos para asegurar que todo el sistema operativo de la organización sea confiable y efectivo.\n## Aprender a...\nGestionar servidores GNU/Linux! 🌟\n✨ Únete a nuestro curso presencial organizado por el Laboratorio de Investigación y Desarrollo de Software Libre (LIDSOL).\nMejora tus habilidades en administración de sistemas y gestión de servidores\nAprendiendo GNU/Linux de la mano de expertos y potencia tu carrera en el ámbito profesional.\nNo pierdas la oportunidad de dominar esta importante herramienta de administración de sistemas.\n- 💰 Costo: $600 para la comunidad UNAM, $1000 para el público en general"
    },
    duration: { en: "1 week", es: "1 semana" },
    level: { en: "Intermediate", es: "Intermedio" },
    schedule: { en: "Mon–Fri, 10:00-14:00", es: "Lunes a Viernes, 10:00-14:00" },
    instructor: "Francisco Galindo",
    modality: { en: "On site", es: "Presencial" },
    cost: { en: "", es: "$600 para la comunidad UNAM, $1000 para el público en general"},
    links: [
      { text: { en: "Instagram", es: "Instagram" }, url: "https://www.instagram.com/lidsol_fi/" },
      { text: { en: "Mail", es: "Correo" }, url: "mailto:lidsol-info@proton.me" },
    ],
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
    startDate: "2024-05-04",
    fullDescription: {
      en: "Learn LaTeX from the comfort of your home! 🖥️✨ Join our free online course organized by the Free Software Research and Development Laboratory (LIDSoL).\nDo you want to improve your skills in typesetting and creating professional scientific and academic documents? This is the perfect time! Learn LaTeX from experts and boost your academic and professional career.\nDon't miss the opportunity to master this powerful text-editing tool.\nRecorded sessions are available on our YouTube channel.",
      es: "¡Aprende LaTeX desde la comodidad de tu hogar! 🖥️✨ Únete a nuestro curso virtual gratuito organizado por el Laboratorio de Investigación y Desarrollo de Software Libre (LIDSoL). \n¿Quieres mejorar tus habilidades en composición tipográfica y creación de documentos científicos y académicos de manera profesional? ¡Este es el momento perfecto! Aprende LaTeX de la mano de expertos y potencia tu carrera en el ámbito académico y profesional.\nNo pierdas la oportunidad de dominar esta poderosa herramienta de edición de textos.\nLas sesiones grabadas están disponibles en nuestro canal de YouTube."
    },
    instructor: "Francisco Galindo",
    duration: { en: "5 weeks", es: "5 semanas" },
    schedule: { en: "Saturday, 15:00-16:30 UTC-6", es: "Sábados, 15:00-16:30 UTC-6" },
    level: { en: "Beginner", es: "Principiantes" },
    action1: {
      text: { en: "Repository", es: "Repositorio" },
      url: "https://github.com/LIDSOL/cursos/tree/master/2024-2/2024-05-05-Latex"
    },
    action2: {
      text: { en: "Watch Recordings", es: "Ver Grabaciones" },
      url: "https://www.youtube.com/watch?v=mq2zEP0bo2E&list=PLvd_owpd6H-kSoqbbvdGc_Pg3YRytK8ZN"
    },
    image: latexImg,
    descriptionImage: latexBannerImg,
    coverImage: latexThumbImg,
    tags: {
      en: ["LaTeX", "Text Composition", "Academic Documents", "Digital Typography"],
      es: ["LaTeX", "Composición De Textos", "Documentos Académicos", "Tipografía Digital"]
    },

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
