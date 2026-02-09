import  drawdbImg   from "../components/ui/source/imagesProjects/drawdb.png";
import  mirrorsImg  from "../components/ui/source/imagesProjects/mirrors.png";
import  privanonImg from "../components/ui/source/imagesProjects/priv-anon.jpg";

import  swayImg from "../components/ui/source/imagesProjects/sway.png";

export interface Project {
  id: number;
  title: { en: string; es: string };
  shortDescription: { en: string; es: string };
  fullDescription: { en: string; es: string };
  category: { en: string; es: string };
  stars: number;
  contributors: number;
  language: string;
  color: string;
  tags: string[];
  github?: string;
  website?: string;
  features: { en: string[]; es: string[] };
  status: { en: string; es: string };
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
      en: "LIDSoL’s mirrors are replica servers that provide local, synchronized copies of the official packages for several GNU/Linux distributions—AlmaLinux, Arch, Debian (including Debian CD), and Linux Mint. The mirrors are accessible via both HTTPS and rsync, allowing GNU/Linux users to sync their own repositories or update their systems directly from this mirror.",
      es:
          "El presente proyecto plantea el diseño de actividades, material didáctico y publicaciones orientados a la siguiente progresión temática relacionada con la seguridad de la información personal en redes. El desarrollo del proyecto busca formar conjuntos diferentes de habilidades en dos segmentos muy distintos: Por un lado, para la población en general, usuarios finales (y con esto, tenemos que enfatizar, nos referimos a todo usuario, no únicamente a los tecnófilos), y por otro lado, para los alumnos de las ingenierías en computación, telecomunicaciones, y áreas relacionadas. \nPara el grupo poblacional más amplio, buscamos en un primer momento concientización acerca de las expectativas razonables de privacidad en línea, iniciando desde el concepto general (¿qué se comprende por privacidad en medios digitales? ¿Qué modelos de amenaza debe el usuario considerar? ¿Qué buenas prácticas pueden reducir los riesgos?), para transitar hacia el objeto medular del proyecto, y llevar a usuarios finales a la adopción de herramientas que les provean el uso seguro y anónimo de las redes de comunicaciones, particularmente **de** la red Tor. \nPara el grupo específico de las ingenierías, el proyecto busca generar material que ayude a una comprensión comprehensiva de la base tecnológica sobre la cual se fundamentan Tor y otras tecnologías anonimizadoras, para lo cual generaremos material que complemente a la actual enseñanza de las materias de “redes de datos seguras”, “redes de telecomunicaciones” y “tecnologías e interconexión de redes” fundamentándose en la criptografía. Buscamos también, por medio de experiencias prácticas, llevar a los alumnos a la instalación de un laboratorio de sistemas que, mediante distintas estrategias, permitan el uso, evaluación y monitoreo de recursos de estos mecanismos. \nSe agradece el apoyo otorgado para el desarrollo de este material a DGAPA-UNAM, PAPIME PE102718 Desarrollo de materiales didácticos para los mecanismos de privacidad y anonimato en redes."
    },
    category: { en: "Privacy", es: "Privacidad" },
    stars: 0,
    contributors: 2,
    language: "Bash",
    color: "bg-blue-500",
    tags: ["Tor", "Privacy", "", "DevOps"],
    github: "https://github.com/LIDSOL/servidor/tree/main/files/mirrors",
    website: "https://lidsol.fi-b.unam.mx",
    features: {
      en: [
          "Local, synchronized replicas of the official repositories for several GNU/Linux distributions (AlmaLinux, Arch, Debian, Linux Mint, etc.).",
          "Dual access via HTTPS (secure download) and rsync (efficient synchronization).",
          "Automation with Bash scripts and scheduled jobs (cron) that update the mirrors periodically from upstream servers.",
          "Enhanced security with valid TLS certificates (Let’s Encrypt) and write restrictions on the rsync daemon.",
          "Modular and scalable architecture: new distributions can be added by creating folders and rsync rules without altering the core system."
],
      es: [
        "Réplicas locales y sincronizadas de los repositorios oficiales de varias distribuciones GNU/Linux (AlmaLinux, Arch, Debian, Linux Mint, etc.).",
        "Acceso dual mediante HTTPS (descarga segura) y rsync (sincronización eficiente).",
        "Automatización con scripts Bash y trabajos programados (cron) que actualizan los mirrors periódicamente desde los servidores upstream.",
        "Seguridad reforzada con certificados TLS válidos (Let’s Encrypt) y restricciones de escritura en el daemon rsync.",
        "Arquitectura modular y escalable: nuevas distribuciones pueden añadirse creando carpetas y reglas de rsync sin cambiar el core del sistema."
      ]
    },
    status: { en: "Active Development", es: "Desarrollo Activo" },
    image: privanonImg,
  },

    //---
  {
    id: 2,
    title: { en: "LIDSoL Linux Mirrors", es: "Repositorios espejo de Linux LIDSoL" },
    shortDescription: {
      en: "LIDSoL hosts a mirror repository of several GNU/Linux distributions (AlmaLinux, Arch, Debian, and Mint).",
      es: "LIDSoL aloja un repositorio espejo de varias distribuciones GNU/Linux (AlmaLinux, Arch, Debian y Mint)."
    },
    fullDescription: {
      en: "LIDSoL’s mirrors are replica servers that provide local, synchronized copies of the official packages for several GNU/Linux distributions—AlmaLinux, Arch, Debian (including Debian CD), and Linux Mint. The mirrors are accessible via both HTTPS and rsync, allowing GNU/Linux users to sync their own repositories or update their systems directly from this mirror.",
      es: "Los mirrors de LIDSoL son servidores de réplica que proporcionan copias locales y sincronizadas de los paquetes oficiales de diversas distribuciones GNU/Linux —AlmaLinux, Arch, Debian (incluido Debian CD) y Linux Mint—. Estos mirrors están disponibles tanto mediante HTTPS como mediante rsync, lo que permite a los usuarios de GNU/Linux sincronizar sus propios repositorios o actualizar sus sistemas directamente desde este espejo."
    },
    category: { en: "Mirrors", es: "Mirrors" },
    stars: 0,
    contributors: 2,
    language: "Bash",
    color: "bg-blue-500",
    tags: ["Mirrors", "GNU/Linux", "Web", "DevOps"],
    github: "https://github.com/LIDSOL/servidor/tree/main/files/mirrors",
    website: "https://lidsol.fi-b.unam.mx",
    features: {
      en: [
          "Local, synchronized replicas of the official repositories for several GNU/Linux distributions (AlmaLinux, Arch, Debian, Linux Mint, etc.).",
          "Dual access via HTTPS (secure download) and rsync (efficient synchronization).",
          "Automation with Bash scripts and scheduled jobs (cron) that update the mirrors periodically from upstream servers.",
          "Enhanced security with valid TLS certificates (Let’s Encrypt) and write restrictions on the rsync daemon.",
          "Modular and scalable architecture: new distributions can be added by creating folders and rsync rules without altering the core system."
],
      es: [
        "Réplicas locales y sincronizadas de los repositorios oficiales de varias distribuciones GNU/Linux (AlmaLinux, Arch, Debian, Linux Mint, etc.).",
        "Acceso dual mediante HTTPS (descarga segura) y rsync (sincronización eficiente).",
        "Automatización con scripts Bash y trabajos programados (cron) que actualizan los mirrors periódicamente desde los servidores upstream.",
        "Seguridad reforzada con certificados TLS válidos (Let’s Encrypt) y restricciones de escritura en el daemon rsync.",
        "Arquitectura modular y escalable: nuevas distribuciones pueden añadirse creando carpetas y reglas de rsync sin cambiar el core del sistema."
      ]
    },
    status: { en: "Active Development", es: "Desarrollo Activo" },
    image: mirrorsImg,
  },
  //---
  {
    id: 3,
    title: { en: "OpenDocs", es: "OpenDocs" },
    shortDescription: {
      en: "Collaborative documentation platform for open source projects with real-time editing.",
      es: "Plataforma de documentación colaborativa para proyectos de código abierto con edición en tiempo real."
    },
    fullDescription: {
      en: "OpenDocs is a modern documentation platform built specifically for open source projects. It features real-time collaborative editing, version control integration, beautiful rendering of Markdown and code blocks, and automatic API documentation generation. The platform makes it easy for teams to maintain high-quality documentation alongside their code.",
      es: "OpenDocs es una plataforma de documentación moderna construida específicamente para proyectos de código abierto. Cuenta con edición colaborativa en tiempo real, integración con control de versiones, renderizado hermoso de Markdown y bloques de código, y generación automática de documentación de API. La plataforma facilita que los equipos mantengan documentación de alta calidad junto con su código."
    },
    category: { en: "Web", es: "Web" },
    stars: 189,
    contributors: 8,
    language: "TypeScript",
    color: "bg-cyan-500",
    tags: ["Documentation", "Collaboration", "TypeScript", "React", "Real-time"],
    github: "https://github.com/lidsol/opendocs",
    website: "https://opendocs.lidsol.org",
    features: {
      en: [
        "Real-time collaborative editing",
        "Markdown and MDX support",
        "GitHub integration",
        "API documentation generator",
        "Multi-language support"
      ],
      es: [
        "Edición colaborativa en tiempo real",
        "Soporte para Markdown y MDX",
        "Integración con GitHub",
        "Generador de documentación de API",
        "Soporte multiidioma"
      ]
    },
    status: { en: "Beta", es: "Beta" }
  },
  //---
  {
    id: 4,
    title: { en: "SecureVPN", es: "SecureVPN" },
    shortDescription: {
      en: "Privacy-focused VPN solution built with modern cryptography standards.",
      es: "Solución VPN enfocada en privacidad construida con estándares modernos de criptografía."
    },
    fullDescription: {
      en: "SecureVPN is an open-source VPN solution that prioritizes user privacy and security. Built with Rust for memory safety and performance, it implements WireGuard protocol and modern cryptographic standards. The project includes both server and client applications, with a focus on ease of deployment and transparent operation.",
      es: "SecureVPN es una solución VPN de código abierto que prioriza la privacidad y seguridad del usuario. Construida con Rust para seguridad de memoria y rendimiento, implementa el protocolo WireGuard y estándares criptográficos modernos. El proyecto incluye aplicaciones tanto de servidor como de cliente, con enfoque en facilidad de despliegue y operación transparente."
    },
    category: { en: "Security", es: "Seguridad" },
    stars: 567,
    contributors: 15,
    language: "Rust",
    color: "bg-orange-500",
    tags: ["VPN", "Security", "Privacy", "Rust", "WireGuard", "Cryptography"],
    github: "https://github.com/lidsol/securevpn",
    features: {
      en: [
        "WireGuard protocol implementation",
        "Cross-platform support",
        "No-logs policy",
        "Modern cryptography",
        "Easy server deployment"
      ],
      es: [
        "Implementación del protocolo WireGuard",
        "Soporte multiplataforma",
        "Política de no registro",
        "Criptografía moderna",
        "Despliegue fácil del servidor"
      ]
    },
    status: { en: "Stable", es: "Estable" }
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
    category: { en: "Window Manager Tiling", es: "Window Manager Tiling" },
    stars: 1,
    contributors: 3,
    language: "Go",
    color: "bg-blue-500",
    tags: ["Sway", "Window Manager Tiling", "Customization", "Layouts"],
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
    image: swayImg,
  },
  //---

  ];
