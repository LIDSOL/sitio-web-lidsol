import privanonImg  from "../components/ui/source/imagesProjects/priv-anon.jpg";
import torImg       from "../components/ui/source/imagesProjects/tor.png"
import mirrorsImg   from "../components/ui/source/imagesProjects/mirrors.png";
import drawdbImg    from "../components/ui/source/imagesProjects/drawdb.png";
import papeadorImg  from "../components/ui/source/imagesProjects/papeador.png";
import swayImg      from "../components/ui/source/imagesProjects/sway.png";
import swayyImg     from "../components/ui/source/imagesProjects/sway2.png";

export interface Project {
  id: number;
  title: { en: string; es: string };
  shortDescription?: { en: string; es: string };
  fullDescription?: { en: string; es: string };

  stars?: number;
  contributors?: number;
  language?: string;
  color: string;
  tags?: { en: string[]; es: string[] };
  github?: string;
  website?: string;
  download?: string;
  features?: { en: string[]; es: string[] };
  status?: { en: string; es: string };
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
        en: "Development of educational materials for privacy and anonymity mechanisms in networks.",
        es: "Desarrollo de materiales didácticos para los mecanismos de privacidad y anonimato en redes " },
    shortDescription: {
      en: "Development of educational and multimedia materials that explain and promote the use of privacy and anonymity technologies (primarily the Tor network) for technical, academic, and social‑science audiences.",
      es: "Desarrollo de materiales didácticos y multimedia que explican y promueven el uso de tecnologías de privacidad y anonimato (principalmente la red Tor) para audiencias técnicas, académicas y de ciencias sociales."
    },
    fullDescription: {
      en: "The present project proposes the design of activities, didactic materials, and publications oriented toward the following thematic progression related to personal information security on networks. The development of the project aims to build different sets of skills in two very distinct segments: on the one hand, the general population, end users (and it is important to emphasize that this refers to all users, not only technophiles), and on the other hand, students of computer engineering, telecommunications, and related fields. \nFor the broader population group, we initially seek to raise awareness about reasonable expectations of online privacy, starting from the general concept (what is meant by privacy in digital media? What threat models should users consider? What best practices can reduce risks?), and then moving toward the core objective of the project: guiding end users toward the adoption of tools that provide secure and anonymous use of communication networks, particularly of the Tor network. \nFor the specific group of engineering students, the project seeks to generate material that supports a comprehensive understanding of the technological foundations on which Tor and other anonymizing technologies are built. To this end, we will develop materials that complement current teaching in courses such as “secure data networks,” “telecommunications networks,” and “network technologies and interconnection,” grounded in cryptography. We also aim, through hands-on experiences, to guide students in setting up a systems laboratory that, through different strategies, enables the use, evaluation, and monitoring of resources provided by these mechanisms. \nWe acknowledge the support provided for the development of this material by DGAPA-UNAM, PAPIME PE102718, Development of didactic materials for privacy and anonymity mechanisms in networks.",
      es: "El presente proyecto plantea el diseño de actividades, material didáctico y publicaciones orientados a la siguiente progresión temática relacionada con la seguridad de la información personal en redes. El desarrollo del proyecto busca formar conjuntos diferentes de habilidades en dos segmentos muy distintos: Por un lado, para la población en general, usuarios finales (y con esto, tenemos que enfatizar, nos referimos a todo usuario, no únicamente a los tecnófilos), y por otro lado, para los alumnos de las ingenierías en computación, telecomunicaciones, y áreas relacionadas. \nPara el grupo poblacional más amplio, buscamos en un primer momento concientización acerca de las expectativas razonables de privacidad en línea, iniciando desde el concepto general (¿qué se comprende por privacidad en medios digitales? ¿Qué modelos de amenaza debe el usuario considerar? ¿Qué buenas prácticas pueden reducir los riesgos?), para transitar hacia el objeto medular del proyecto, y llevar a usuarios finales a la adopción de herramientas que les provean el uso seguro y anónimo de las redes de comunicaciones, particularmente **de** la red Tor. \nPara el grupo específico de las ingenierías, el proyecto busca generar material que ayude a una comprensión comprehensiva de la base tecnológica sobre la cual se fundamentan Tor y otras tecnologías anonimizadoras, para lo cual generaremos material que complemente a la actual enseñanza de las materias de “redes de datos seguras”, “redes de telecomunicaciones” y “tecnologías e interconexión de redes” fundamentándose en la criptografía. Buscamos también, por medio de experiencias prácticas, llevar a los alumnos a la instalación de un laboratorio de sistemas que, mediante distintas estrategias, permitan el uso, evaluación y monitoreo de recursos de estos mecanismos. \nSe agradece el apoyo otorgado para el desarrollo de este material a DGAPA-UNAM, PAPIME PE102718 Desarrollo de materiales didácticos para los mecanismos de privacidad y anonimato en redes."
    },
  tags: {
    en: ["Tor", "Privacy", "Anonymity", "Security"],
    es: ["Tor", "Privacidad", "Anonimato", "Seguridad"],
  },
    github: "https://gitlab.com/lidsol/papime-pe102718-mecanismos-de-privacidad-y-anonimato",
    website: "https://priv-anon.unam.mx/",
    download: "/downloads/priv-anon.pdf",
    features: {
    en: [
      "Privacy awareness: Educational materials focused on reasonable expectations of online privacy.",
      "Threat modeling: Introduction to common digital threat models for end users.",
      "Best practices: Guidance on practices that reduce privacy and security risks.",
      "Tor adoption: Promotion and training in the use of the Tor network for secure and anonymous communication.",
      "Technical foundations: In-depth explanation of cryptographic and network principles behind anonymity systems.",
      "Academic support: Materials designed to complement courses on secure networks and telecommunications.",
      "Hands-on labs: Practical activities involving installation, evaluation, and monitoring of anonymity mechanisms.",
      "Open educational resources: All materials are openly accessible and reusable."
    ],
    es: [
      "Concientización en privacidad: Material educativo sobre expectativas razonables de privacidad en línea.",
      "Modelos de amenaza: Introducción a los principales modelos de amenaza en entornos digitales.",
      "Buenas prácticas: Recomendaciones para reducir riesgos de seguridad y privacidad.",
      "Adopción de Tor: Capacitación y fomento del uso de la red Tor para comunicación segura y anónima.",
      "Fundamentos técnicos: Explicación profunda de los principios criptográficos y de redes detrás de los sistemas de anonimato.",
      "Apoyo académico: Material complementario para asignaturas de redes seguras y telecomunicaciones.",
      "Laboratorios prácticos: Actividades para la instalación, evaluación y monitoreo de mecanismos de anonimato.",
      "Recursos educativos abiertos: Todo el material es libre y reutilizable."
    ]
    },
    image: privanonImg,
  },
//---
  {
  id: 2,
  title: {
    en: "LIDSoL Tor Node",
    es: "Nodo Tor de LIDSoL"
  },
  shortDescription: {
    en: "LIDSoL operates a Tor node to support anonymous communication and strengthen the Tor network.",
    es: "LIDSoL opera un nodo Tor para apoyar la comunicación anónima y fortalecer la red Tor."
  },
  tags: {
    en: ["Tor", "Privacy", "Anonymity", "Security", "Networking", "GNU/Linux"],
    es: ["Tor", "Privacidad", "Anonimato", "Seguridad", "Redes", "GNU/Linux"],
  },
  github: "https://github.com/LIDSOL/servidor/tree/main/files/tor",
  features: {
    en: [
      "Tor node contributing bandwidth and availability to the Tor network.",
      "Configuration aligned with Tor Project best practices.",
      "Monitoring and logging for operational visibility and reliability.",
      "Deployed on GNU/Linux servers with a focus on security and stability."
    ],
    es: [
      "Nodo de Tor que aporta ancho de banda y disponibilidad a la red Tor.",
      "Configuración alineada con las mejores prácticas del Proyecto Tor.",
      "Monitoreo y registro para visibilidad operativa y confiabilidad.",
      "Desplegado en servidores GNU/Linux con énfasis en seguridad y estabilidad."
    ]
  },
  status: {
    en: "Stable",
    es: "Estable"
  },
  image: torImg,
},
//---
  {
    id: 3,
    title: { en: "LIDSoL Linux Mirrors", es: "Repositorios espejo de Linux LIDSoL" },
    shortDescription: {
      en: "LIDSoL hosts a mirror repository of several GNU/Linux distributions (AlmaLinux, Arch, Debian, and Mint).",
      es: "LIDSoL aloja un repositorio espejo de varias distribuciones GNU/Linux (AlmaLinux, Arch, Debian y Mint)."
    },
    fullDescription: {
      en: "LIDSoL’s mirrors are replica servers that provide local, synchronized copies of the official packages for several GNU/Linux distributions—AlmaLinux, Arch, Debian (including Debian CD), and Linux Mint. The mirrors are accessible via both HTTPS and rsync, allowing GNU/Linux users to sync their own repositories or update their systems directly from this mirror.",
      es: "Los mirrors de LIDSoL son servidores de réplica que proporcionan copias locales y sincronizadas de los paquetes oficiales de diversas distribuciones GNU/Linux —AlmaLinux, Arch, Debian (incluido Debian CD) y Linux Mint—. Estos mirrors están disponibles tanto mediante HTTPS como mediante rsync, lo que permite a los usuarios de GNU/Linux sincronizar sus propios repositorios o actualizar sus sistemas directamente desde este espejo."
    },
    tags: {
    en: ["Mirrors", "GNU/Linux", "Web", "DevOps"],
    es: ["Mirrors", "GNU/Linux", "Web", "DevOps"],
  },
    github: "https://github.com/LIDSOL/servidor/tree/main/files/mirrors",
    website: "https://lidsol.fi-b.unam.mx",
    features: {
      en: [
          "Local, synchronized replicas of the official repositories for several GNU/Linux distributions (AlmaLinux, Arch, Debian, Linux Mint, etc.).",
          "Dual access via HTTPS (secure download) and rsync (efficient synchronization).",
          "Enhanced security with valid TLS certificates (Let’s Encrypt) and write restrictions on the rsync daemon."
],
      es: [
        "Réplicas locales y sincronizadas de los repositorios oficiales de varias distribuciones GNU/Linux (AlmaLinux, Arch, Debian, Linux Mint, etc.).",
        "Acceso dual mediante HTTPS (descarga segura) y rsync (sincronización eficiente).",
        "Seguridad reforzada con certificados TLS válidos (Let’s Encrypt) y restricciones de escritura en el daemon rsync."
      ]
    },
    status: { en: "Stable", es: "Estable" },
    image: mirrorsImg,
  },
//---
  {
    id: 4,
    title: { en: "Drawdb", es: "Drawdb" },
    shortDescription: {
      en: "Free, simple, and intuitive online database diagram editor and SQL generator. Fork by LIDSoL.",
      es: "DrawDB es una herramienta libre, sencilla e intuitiva que permite editar diagramas de bases de datos en línea y generar sus scripts SQL (y viceversa). Un fork de LIDSoL."
    },
    fullDescription: {
      en: "DrawDB is a robust and user-friendly editor that allows you to create entity-relationship diagrams for databases directly in your browser. With just a few clicks, you can visually design database schemas, export SQL scripts, customize the editing environment, and much more — all without the need to create an account.",
      es: "DrawDB es un editor robusto e intuitivo que permite crear diagramas entidad-relación para bases de datos directamente desde el navegador. Con unos pocos clics, puedes diseñar esquemas de forma visual, exportar scripts SQL, personalizar el entorno de edición y mucho más, todo sin necesidad de crear una cuenta."
    },
    stars: 1,
    contributors: 8,
    language: "JavaScript",
    color: "bg-yellow-500",
    tags: {
    en: ["Database Design", "Entity Relationship Diagram", "Schema Design", "Diagram Editor", "SQL", "Developer Tools", "Web Based"],
    es: ["Diseño de Bases de Datos", "Diagrama Entidad-Relación", "Diseño de Esquema", "Editor de Diagramas", "SQL", "Herramientas de Desarrollo", "Basado en Web"],
  },
    github: "https://github.com/LIDSOL/drawdb",
    website: "https://db.lidsol.unam.mx",
    features: {
      en: [
        "Export: Export diagrams as DDL scripts, JSON, or images.",
        "Reverse engineering: Import existing DDL scripts to automatically generate diagrams.",
        "Migrations: Version diagrams and generate migration scripts to update the database schema.",
        "Configurable interface: Customize the UI and select visible components based on your needs.",
        "Keyboard shortcuts: Use keyboard shortcuts to speed up the workflow.",
        "Templates: Create diagrams from predefined templates.",
        "Custom templates: Save reusable structures as templates and load them when needed.",
        "Advanced editor: Support for undo, redo, copy, paste, duplicate, and advanced diagram editing.",
        "Schema validation: Detect errors in diagrams to ensure the consistency of generated scripts.",
        "Relational databases: Support for MySQL, PostgreSQL, SQLite, MariaDB, and SQL Server.",
        "Object-relational databases: Support for custom types and JSON schemas.",
        "Presentation mode: Display diagrams in full-screen mode for presentations and technical reviews."
      ],
      es: [
        "Exportación: Exporta diagramas como scripts DDL, JSON o imágenes.",
        "Genera Scripts a partir de diagramas y viceversa: Importa scripts DDL existentes para generar diagramas automáticamente.",
        "Migraciones: Versiona diagramas y genera scripts de migración para actualizar el esquema de la base de datos.",
        "Interfaz configurable: Ajusta la interfaz y selecciona los componentes visibles según tus necesidades.",
        "Atajos de teclado: Utiliza atajos de teclado para acelerar el flujo de trabajo.",
        "Plantillas: Crea diagramas a partir de plantillas predefinidas.",
        "Plantillas personalizadas: Guarda estructuras reutilizables como plantillas y cárgalas cuando sea necesario.",
        "Editor avanzado: Soporte para deshacer, rehacer, copiar, pegar, duplicar y edición avanzada de diagramas.",
        "Validación de esquemas: Detecta errores en el diagrama para garantizar la consistencia de los scripts generados.",
        "Bases de datos relacionales: Compatibilidad con MySQL, PostgreSQL, SQLite, MariaDB y SQL Server.",
        "Bases de datos objeto-relacionales: Soporte para tipos personalizados y esquemas JSON.",
        "Modo presentación: Visualiza diagramas en pantalla completa para presentaciones y revisiones técnicas."
      ]
    },
    status: { en: "Beta", es: "Beta" },
    image: drawdbImg,
  },
//---
  {
    id: 5,
    title: { en: "Papeador", es: "Papeador" },
    shortDescription: {
      en: "Papeador is a competitive programming online judge that automatically evaluates code solutions in a secure and isolated container-based environment.",
      es: "Papeador es un juez virtual de programación competitiva que evalúa automáticamente soluciones de código en un entorno seguro y aislado mediante contenedores."
    },
    fullDescription: {
      en: "Papeador is a platform designed to manage programming contests, problems, and users, and to automatically evaluate code submissions made by participants. The system follows a client–server architecture, where a centralized backend exposes an API consumed by the frontend. Code submissions are processed asynchronously through a queue, and each submission is executed inside an isolated container that includes only the tools required to compile and run the user’s program. \n During evaluation, the judge runs the code against a predefined set of test cases while enforcing time and memory limits. Once execution is complete, the system determines the corresponding verdict and stores the results for later consultation and leaderboard generation. Papeador is intended as a secure and extensible foundation for programming competitions, academic practice, or algorithm training, following the principles of modern online judges.",
      es: "El papeador es una plataforma diseñada para administrar concursos de programación, problemas y usuarios, y para evaluar de forma automática, los envíos de código realizados por los participantes. El sistema sigue una arquitectura cliente-servidor, donde un backend central expone una API consumida por el frontend. Los envíos de código se procesan de manera asincrónica mediante una cola, y cada submission se ejecuta dentro de un contenedor aislado que contiene únicamente las herramientas necesarias para compilar y ejecutar el programa del usuario. \n Durante la evaluación, el juez ejecuta el código contra un conjunto de casos de prueba previamente definidos, controlando límites de tiempo y memoria. Una vez finalizada la ejecución, el sistema determina el veredicto correspondiente y almacena los resultados para su consulta posterior y para la generación de leaderboards. Papeador está pensado como una base extensible y segura para competencias de programación, prácticas académicas o entrenamiento en algoritmos, siguiendo los principios de jueces en línea modernos."
    },

    stars: 0,
    contributors: 8,
    language: "Go",
    color: "bg-blue-500",
    tags: {
    en: ["Competitive Programming", "Online Judge", "Docker", "Containerization", "Sandbox", "Backend", "API"],
    es: ["Programación Competitiva", "Juez en Línea", "Docker", "Contenedores", "Sandbox", "Backend", "API"],
  },
    github: "https://github.com/LIDSOL/papeador",
    features: {
      en: [
        "Automatic code evaluation: Compilation and execution of solutions against predefined test cases.",
        "Secure container-based execution: Each submission runs inside an isolated container that is created and destroyed per submission.",
        "User and contest management: Support for multiple users, contests, and problems.",
        "Modular architecture: Clear separation between the API, judge, submission queue, and database.",
        "Multi-language support: Use of language-specific images and Dockerfiles.",
        "Clear results and verdicts: Enforcement of time and memory limits during execution; Accepted, Wrong Answer, Time Limit Exceeded, Memory Limit Exceeded, Runtime Error, and Compilation Error.",
        "Leaderboards: Ranking generation based on stored results."
      ],
      es: [
        "Evaluación automática de código: Compilación y ejecución de soluciones contra casos de prueba predefinidos.",
        "Ejecución segura de contenedores: Cada envío se ejecuta en un contenedor aislado que se crea y destruye por submission.",
        "Gestión de usuarios y concursos: Soporte para múltiples usuarios, concursos y problemas.",
        "Soporte para múltiples lenguajes: Uso de imágenes y Dockerfile específicos por lenguaje.",
        "Arquitectura modular: Separación clara entre API, juez, cola de envíos y base de datos.",
        "Resultados y veredictos claros: Soporte para límites de tiempo y memoria durante la ejecución. Evalúa: accepted, Wrong Answer, Time Limit Exceeded, Memory Limit Exceeded, Runtime Error y Compilation Error.",
        "Leaderboards: Generación de rankings a partir de los resultados almacenados."
      ]
    },
    status: { en: "In Development", es: "En desarrollo" },
    image: papeadorImg,
  },
//---
  {
    id: 6,
    title: { en: "Sway Layout Manager", es: "Sway Layout Manager" },
    shortDescription: {
      en: "Sway Layout Manager is an application that automates the process of saving and restoring window layouts and container arrangements in Sway. Save your current workspace arrangements as named presets and restore them when needed, eliminating the tedious task of manually reopening and positioning applications.",
      es: "Sway Layout Manager es una aplicación que automatiza el proceso de guardar y restaurar los layouts de ventanas y la disposición de los contenedores en Sway. Guarda la organización actual de tus espacios de trabajo como pre ajustes con nombre y recupérala cuando la necesites, eliminando la tediosa tarea de volver a abrir y posicionar manualmente las aplicaciones."
    },
    fullDescription: {
      en: "# Usage\n ### Save Current Layout\n```bash\nswaylayoutmgr save <name>\n```\n Captures the current state of all active workspaces and saves it as a named layout preset.\n### Load Saved Layout\n```bash\nswaylayoutmgr load <name>\n```\nRestores a previously saved layout, launching applications and positioning them according to the saved configuration.\n### List Available Presets\n```bash\nswaylayoutmgr list\n```\nDisplays all available layout presets with metadata including creation date, workspace count, and application summary.\n### Delete Preset\n```bash\nswaylayoutmgr delete <name>\n```\nRemoves a saved preset (with confirmation prompt).\n## Use Case Example\nA developer working with Visual Studio Code on the left half of the screen and two terminal windows stacked vertically on the right half can save this arrangement as `dev-workspace`. Later, they can instantly recreate this exact layout with:\n```bash\nswaylayoutmgr load dev-workspace\n```\n# Requirements\n- Operating System: GNU/Linux distribution with Wayland support\n- Window Manager: Sway (version 1.10 or higher)\n- Runtime: No additional dependencies for CLI usage\n# Installation\n> **Note**: This project is currently in development. Installation instructions will be provided once the first release is available.\n",
      es: "# Uso\n\n### Guardar diseño actual\n```bash\nswaylayoutmgr save <name>\n```\n Captura el estado actual de todos los espacios de trabajo activos y lo guarda como un preset de diseño con nombre.\n ### Cargar un diseño guardado\n```bash\nswaylayoutmgr load <name>\n```\nRestaura un diseño previamente guardado, lanzando las aplicaciones y posicionándolas según la configuración almacenada.\n### Listar presets disponibles\n```bash\nswaylayoutmgr list\n```\nMuestra todos los presets de diseño disponibles junto con metadatos como la fecha de creación, el número de espacios de trabajo y un resumen de aplicaciones.\n### Eliminar un preset\n```bash\nswaylayoutmgr delete <name>\n```\nElimina un preset guardado (con solicitud de confirmación).\n## Ejemplo de caso de uso\nUn desarrollador que trabaja con Visual Studio Code en la mitad izquierda de la pantalla y dos ventanas de terminal apiladas verticalmente en la mitad derecha puede guardar esta disposición como `dev-workspace`. Más tarde, puede recrear instantáneamente este mismo diseño con: \n ```bash\nswaylayoutmgr load dev-workspace\n```\n# Requisitos\n- Sistema operativo: Distribución GNU/Linux con soporte para Wayland\n- Gestor de ventanas: Sway (versión 1.10 o superior)\n- Entorno de ejecución: No se requieren dependencias adicionales para el uso del CLI\n# Instalación\n> **Nota**: Este proyecto se encuentra actualmente en desarrollo. Las instrucciones de instalación se proporcionarán una vez que esté disponible la primera versión."
    },

    stars: 1,
    contributors: 3,
    language: "Go",
    color: "bg-blue-500",
    tags: {
    en: ["Sway", "Window Manager Tiling", "Customization"],
    es: ["Sway", "Gestor de Ventanas mosaico", "Personalización"],
  },
    github: "https://github.com/LIDSOL/sway-layout-manager",
    features: {
      en: [
        "Save Layout Presets: Get current window arrangements across multiple workspaces and outputs",
        "Layout Loading: Load saved layouts restoring window positions and applications",
        "Dual Interface: Command-line interface (CLI) for automation and scripting",
        "Future GUI Support: Planned graphical interface for visual management",
        "No Dependencies: Core CLI compiles to a single executable with no runtime dependencies"
      ],
      es: [
        "Guardar presets de diseño: Obtiene la disposición actual de las ventanas a través de múltiples espacios de trabajo y salidas",
        "Carga de diseños: Carga diseños guardados restaurando la posición de las ventanas y las aplicaciones",
        "Interfaz dual: Interfaz de línea de comandos (CLI) para automatización y scripting",
        "Soporte futuro para GUI: Interfaz gráfica planificada para la gestión visual",
        "Sin dependencias: El CLI principal se compila como un único ejecutable sin dependencias en tiempo de ejecución"
      ]
    },
    status: { en: "In Development", es: "En desarrollo" },
    image: swayyImg,
  },
//---
  ];
