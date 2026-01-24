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
}

export const projects: Project[] = [
  {
    id: 1,
    title: { en: "LibreKernel", es: "LibreKernel" },
    shortDescription: { 
      en: "A custom Linux kernel optimized for educational purposes and security research.", 
      es: "Un kernel Linux personalizado optimizado para fines educativos e investigación de seguridad." 
    },
    fullDescription: {
      en: "LibreKernel is an educational Linux kernel distribution designed to help students and researchers understand operating system internals. It includes extensive documentation, debugging tools, and security enhancements that make it perfect for learning and experimentation. The project focuses on code clarity and educational value while maintaining compatibility with standard Linux applications.",
      es: "LibreKernel es una distribución de kernel Linux educativo diseñada para ayudar a estudiantes e investigadores a comprender los aspectos internos de los sistemas operativos. Incluye documentación extensa, herramientas de depuración y mejoras de seguridad que lo hacen perfecto para el aprendizaje y la experimentación. El proyecto se enfoca en la claridad del código y el valor educativo mientras mantiene la compatibilidad con aplicaciones Linux estándar."
    },
    category: { en: "System", es: "Sistema" },
    stars: 342,
    contributors: 12,
    language: "C",
    color: "bg-blue-500",
    tags: ["Linux", "Kernel", "Operating Systems", "Education", "C"],
    github: "https://github.com/lidsol/librekernel",
    features: {
      en: [
        "Comprehensive inline documentation",
        "Enhanced debugging capabilities",
        "Security-focused design",
        "Educational tutorials included",
        "Compatible with x86-64 architecture"
      ],
      es: [
        "Documentación en línea completa",
        "Capacidades de depuración mejoradas",
        "Diseño enfocado en seguridad",
        "Tutoriales educativos incluidos",
        "Compatible con arquitectura x86-64"
      ]
    },
    status: { en: "Active Development", es: "Desarrollo Activo" }
  },
  {
    id: 2,
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
  {
    id: 3,
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
  {
    id: 4,
    title: { en: "EduCompiler", es: "EduCompiler" },
    shortDescription: { 
      en: "Educational compiler toolkit for learning compiler construction and optimization.", 
      es: "Kit de herramientas de compilador educativo para aprender construcción y optimización de compiladores." 
    },
    fullDescription: {
      en: "EduCompiler is a comprehensive toolkit for learning compiler design and implementation. It includes a simple programming language, lexer, parser, semantic analyzer, and code generator with clear separation of concerns. The project emphasizes educational value with detailed comments, visualization tools, and step-by-step tutorials.",
      es: "EduCompiler es un kit de herramientas completo para aprender diseño e implementación de compiladores. Incluye un lenguaje de programación simple, analizador léxico, parser, analizador semántico y generador de código con clara separación de responsabilidades. El proyecto enfatiza el valor educativo con comentarios detallados, herramientas de visualización y tutoriales paso a paso."
    },
    category: { en: "Education", es: "Educación" },
    stars: 234,
    contributors: 9,
    language: "Python",
    color: "bg-green-500",
    tags: ["Compiler", "Education", "Python", "Programming Languages"],
    github: "https://github.com/lidsol/educompiler",
    features: {
      en: [
        "Complete compiler pipeline",
        "Interactive visualization",
        "Educational tutorials",
        "Step-by-step debugging",
        "Multiple optimization passes"
      ],
      es: [
        "Pipeline completo de compilación",
        "Visualización interactiva",
        "Tutoriales educativos",
        "Depuración paso a paso",
        "Múltiples pasadas de optimización"
      ]
    },
    status: { en: "Active Development", es: "Desarrollo Activo" }
  },
  {
    id: 5,
    title: { en: "CloudFS", es: "CloudFS" },
    shortDescription: { 
      en: "Distributed file system designed for cloud-native applications.", 
      es: "Sistema de archivos distribuido diseñado para aplicaciones nativas en la nube." 
    },
    fullDescription: {
      en: "CloudFS is a distributed, fault-tolerant file system optimized for cloud environments. It provides POSIX-like semantics with automatic replication, data integrity verification, and seamless scaling. Perfect for containerized applications and microservices architectures.",
      es: "CloudFS es un sistema de archivos distribuido y tolerante a fallos optimizado para entornos cloud. Proporciona semántica similar a POSIX con replicación automática, verificación de integridad de datos y escalado transparente. Perfecto para aplicaciones en contenedores y arquitecturas de microservicios."
    },
    category: { en: "Infrastructure", es: "Infraestructura" },
    stars: 421,
    contributors: 18,
    language: "Go",
    color: "bg-purple-500",
    tags: ["Distributed Systems", "Cloud", "Storage", "Go", "Kubernetes"],
    github: "https://github.com/lidsol/cloudfs",
    features: {
      en: [
        "Automatic replication",
        "Data integrity checks",
        "Horizontal scaling",
        "Kubernetes integration",
        "S3-compatible API"
      ],
      es: [
        "Replicación automática",
        "Verificación de integridad",
        "Escalado horizontal",
        "Integración con Kubernetes",
        "API compatible con S3"
      ]
    },
    status: { en: "Stable", es: "Estable" }
  },
  {
    id: 6,
    title: { en: "DataViz", es: "DataViz" },
    shortDescription: { 
      en: "Open source data visualization library with interactive charts and graphs.", 
      es: "Biblioteca de visualización de datos de código abierto con gráficos interactivos." 
    },
    fullDescription: {
      en: "DataViz is a powerful and flexible data visualization library for the web. Built on top of D3.js and Canvas, it provides an intuitive API for creating beautiful, interactive charts and graphs. The library is highly customizable and optimized for performance with large datasets.",
      es: "DataViz es una biblioteca de visualización de datos potente y flexible para la web. Construida sobre D3.js y Canvas, proporciona una API intuitiva para crear gráficos hermosos e interactivos. La biblioteca es altamente personalizable y optimizada para rendimiento con conjuntos de datos grandes."
    },
    category: { en: "Data Science", es: "Ciencia de Datos" },
    stars: 298,
    contributors: 11,
    language: "JavaScript",
    color: "bg-yellow-500",
    tags: ["Data Visualization", "JavaScript", "D3.js", "Charts", "Web"],
    github: "https://github.com/lidsol/dataviz",
    website: "https://dataviz.lidsol.org",
    features: {
      en: [
        "15+ chart types",
        "Interactive and responsive",
        "Large dataset support",
        "Theme customization",
        "Export to PNG/SVG"
      ],
      es: [
        "Más de 15 tipos de gráficos",
        "Interactivo y responsivo",
        "Soporte para grandes conjuntos de datos",
        "Personalización de temas",
        "Exportar a PNG/SVG"
      ]
    },
    status: { en: "Active Development", es: "Desarrollo Activo" }
  }
];
