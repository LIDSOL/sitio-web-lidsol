export interface Publication {
  id: number;
  title: { en: string; es: string };
  abstract: { en: string; es: string };
  authors: string[];
  journal: { en: string; es: string };
  year: string;
  type: { en: string; es: string };
  category: string;
  doi: string;
  citations: string;
  image: string;
  tags: { en: string[]; es: string[] };
  available: boolean;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: {
      en: "Adoption of Free Software in Mexican Educational Institutions: A Case Study",
      es: "Adopción de Software Libre en Instituciones Educativas Mexicanas: Un Estudio de Caso"
    },
    abstract: {
      en: "This study analyzes the implementation of free software tools in public universities in Mexico, evaluating the economic, pedagogical, and technological sovereignty benefits that this transition represents.",
      es: "Este estudio analiza la implementación de herramientas de software libre en universidades públicas de México, evaluando los beneficios económicos, pedagógicos y de soberanía tecnológica que representa esta transición."
    },
    authors: ["Dr. María González", "Dr. Juan Pérez", "M.C. Carlos Sánchez"],
    journal: {
      en: "Revista Mexicana de Tecnología Educativa",
      es: "Revista Mexicana de Tecnología Educativa"
    },
    year: "2024",
    type: {
      en: "Research Article",
      es: "Artículo de Investigación"
    },
    category: "Educación",
    doi: "10.1234/rmte.2024.001",
    citations: "15",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    tags: {
      en: ["Education", "Free Software", "Public Policy"],
      es: ["Educación", "Software Libre", "Políticas Públicas"]
    },
    available: true
  },
  {
    id: 2,
    title: {
      en: "Analysis of Vulnerabilities in Linux Systems: Detection and Mitigation Techniques",
      es: "Análisis de Vulnerabilidades en Sistemas Linux: Técnicas de Detección y Mitigación"
    },
    abstract: {
      en: "An exhaustive analysis of the most common vulnerabilities in Linux systems, proposing early detection methodologies and mitigation strategies based on open source tools.",
      es: "Un análisis exhaustivo de las vulnerabilidades más comunes en sistemas Linux, proponiendo metodologías de detección temprana y estrategias de mitigación basadas en herramientas de código abierto."
    },
    authors: ["M.C. Carlos Sánchez", "Ing. Ana Torres"],
    journal: {
      en: "Journal of Cybersecurity Research",
      es: "Journal of Cybersecurity Research"
    },
    year: "2024",
    type: {
      en: "Research Article",
      es: "Artículo de Investigación"
    },
    category: "Seguridad",
    doi: "10.1234/jcsr.2024.042",
    citations: "23",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    tags: {
      en: ["Security", "Linux", "Vulnerabilities"],
      es: ["Seguridad", "Linux", "Vulnerabilidades"]
    },
    available: true
  },
  {
    id: 3,
    title: {
      en: "Optimization of Docker Containers for Educational Applications",
      es: "Optimización de Contenedores Docker para Aplicaciones Educativas"
    },
    abstract: {
      en: "We present optimization strategies for containerized educational applications, reducing resource consumption and improving scalability in academic environments.",
      es: "Presentamos estrategias de optimización para aplicaciones educativas containerizadas, reduciendo el consumo de recursos y mejorando la escalabilidad en entornos académicos."
    },
    authors: ["Ing. Laura Rodríguez", "Dr. Juan Pérez"],
    journal: {
      en: "International Conference on Cloud Computing in Education",
      es: "International Conference on Cloud Computing in Education"
    },
    year: "2024",
    type: {
      en: "Conference",
      es: "Conferencia"
    },
    category: "DevOps",
    doi: "10.1234/iccc.2024.089",
    citations: "8",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    tags: {
      en: ["Docker", "DevOps", "Education"],
      es: ["Docker", "DevOps", "Educación"]
    },
    available: true
  },
  {
    id: 4,
    title: {
      en: "Open Hardware in Engineering Teaching: Experiences with Arduino and Raspberry Pi",
      es: "Hardware Abierto en la Enseñanza de Ingeniería: Experiencias con Arduino y Raspberry Pi"
    },
    abstract: {
      en: "We document five years of experiences using open hardware platforms in the teaching of electronic engineering and computing at UNAM.",
      es: "Documentamos las experiencias de cinco años utilizando plataformas de hardware abierto en la enseñanza de ingeniería electrónica y computación en la UNAM."
    },
    authors: ["Ing. Ana Torres", "Dr. María González"],
    journal: {
      en: "Innovación Educativa",
      es: "Innovación Educativa"
    },
    year: "2023",
    type: {
      en: "Research Article",
      es: "Artículo de Investigación"
    },
    category: "Hardware",
    doi: "10.1234/ie.2023.156",
    citations: "31",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    tags: {
      en: ["Open Hardware", "Arduino", "Education"],
      es: ["Hardware Abierto", "Arduino", "Educación"]
    },
    available: true
  },
  {
    id: 5,
    title: {
      en: "Blockchain and Free Software: Opportunities for Government Transparency",
      es: "Blockchain y Software Libre: Oportunidades para la Transparencia Gubernamental"
    },
    abstract: {
      en: "We explore how the combination of blockchain technology with free software principles can improve transparency and accountability in government services.",
      es: "Exploramos cómo la combinación de tecnología blockchain con principios de software libre puede mejorar la transparencia y accountability en servicios gubernamentales."
    },
    authors: ["Dr. Juan Pérez", "M.C. Carlos Sánchez"],
    journal: {
      en: "Revista de Gobierno Digital",
      es: "Revista de Gobierno Digital"
    },
    year: "2023",
    type: {
      en: "Review Article",
      es: "Artículo de Revisión"
    },
    category: "Blockchain",
    doi: "10.1234/rgd.2023.234",
    citations: "19",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    tags: {
      en: ["Blockchain", "Government", "Transparency"],
      es: ["Blockchain", "Gobierno", "Transparencia"]
    },
    available: true
  },
  {
    id: 6,
    title: {
      en: "Development of Accessible Web Applications with Open Source Technologies",
      es: "Desarrollo de Aplicaciones Web Accesibles con Tecnologías de Código Abierto"
    },
    abstract: {
      en: "A practical guide for developing web applications that comply with accessibility standards using open source frameworks and tools.",
      es: "Una guía práctica para desarrollar aplicaciones web que cumplan con estándares de accesibilidad utilizando frameworks y herramientas de código abierto."
    },
    authors: ["Ing. Laura Rodríguez", "Ing. Ana Torres"],
    journal: {
      en: "Web Accessibility Journal",
      es: "Web Accessibility Journal"
    },
    year: "2023",
    type: {
      en: "Technical Article",
      es: "Artículo Técnico"
    },
    category: "Desarrollo Web",
    doi: "10.1234/waj.2023.078",
    citations: "12",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
    tags: {
      en: ["Accessibility", "Web", "Open Source"],
      es: ["Accesibilidad", "Web", "Open Source"]
    },
    available: true
  }
];
