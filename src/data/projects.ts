import  drawdbImg                from "../components/ui/source/imagesProjects/drawdb.png";

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
    title: { en: "DrawDB", es: "DrawDB" },
    shortDescription: {
      en: "A custom Linux kernel optimized for educational purposes and security research.",
      es: "Un kernel Linux personalizado optimizado para fines educativos e investigación de seguridad."
    },
    fullDescription: {
      en: "LibreKernel is an educational Linux kernel distribution designed to help students and researchers understand operating system internals. It includes extensive documentation, debugging tools, and security enhancements that make it perfect for learning and experimentation. The project focuses on code clarity and educational value while maintaining compatibility with standard Linux applications.",
      es: "DrawDB es un editor robusto y fácil de usar para relaciones de entidad de bases de datos (DBER) directamente en tu navegador. Crea diagramas con unos pocos clics, exporta scripts SQL, personaliza tu editor y mucho más sin necesidad de crear una cuenta. Consulta aquí el conjunto completo de funciones."
    },
    category: { en: "System", es: "Sistema" },
    stars: 1,
    contributors: 12,
    language: "Javascript",
    color: "bg-blue-500",
    tags: ["Data base", "Web", "Operating Systems", "Education", "C"],
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
    status: { en: "Active Development", es: "Desarrollo Activo" },
    image: drawdbImg,
  },
  //---
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
  //---
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
  //---

  ];
