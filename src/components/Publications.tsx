import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { FileText, ExternalLink, Download, Users, Calendar, Award } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Publications() {
  const publications = [
    {
      id: 1,
      title: "Adopción de Software Libre en Instituciones Educativas Mexicanas: Un Estudio de Caso",
      abstract: "Este estudio analiza la implementación de herramientas de software libre en universidades públicas de México, evaluando los beneficios económicos, pedagógicos y de soberanía tecnológica que representa esta transición.",
      authors: ["Dr. María González", "Dr. Juan Pérez", "M.C. Carlos Sánchez"],
      journal: "Revista Mexicana de Tecnología Educativa",
      year: "2024",
      type: "Artículo de Investigación",
      category: "Educación",
      doi: "10.1234/rmte.2024.001",
      citations: "15",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
      tags: ["Educación", "Software Libre", "Políticas Públicas"],
      available: true
    },
    {
      id: 2,
      title: "Análisis de Vulnerabilidades en Sistemas Linux: Técnicas de Detección y Mitigación",
      abstract: "Un análisis exhaustivo de las vulnerabilidades más comunes en sistemas Linux, proponiendo metodologías de detección temprana y estrategias de mitigación basadas en herramientas de código abierto.",
      authors: ["M.C. Carlos Sánchez", "Ing. Ana Torres"],
      journal: "Journal of Cybersecurity Research",
      year: "2024",
      type: "Artículo de Investigación",
      category: "Seguridad",
      doi: "10.1234/jcsr.2024.042",
      citations: "23",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
      tags: ["Seguridad", "Linux", "Vulnerabilidades"],
      available: true
    },
    {
      id: 3,
      title: "Optimización de Contenedores Docker para Aplicaciones Educativas",
      abstract: "Presentamos estrategias de optimización para aplicaciones educativas containerizadas, reduciendo el consumo de recursos y mejorando la escalabilidad en entornos académicos.",
      authors: ["Ing. Laura Rodríguez", "Dr. Juan Pérez"],
      journal: "International Conference on Cloud Computing in Education",
      year: "2024",
      type: "Conferencia",
      category: "DevOps",
      doi: "10.1234/iccc.2024.089",
      citations: "8",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
      tags: ["Docker", "DevOps", "Educación"],
      available: true
    },
    {
      id: 4,
      title: "Hardware Abierto en la Enseñanza de Ingeniería: Experiencias con Arduino y Raspberry Pi",
      abstract: "Documentamos las experiencias de cinco años utilizando plataformas de hardware abierto en la enseñanza de ingeniería electrónica y computación en la UNAM.",
      authors: ["Ing. Ana Torres", "Dr. María González"],
      journal: "Innovación Educativa",
      year: "2023",
      type: "Artículo de Investigación",
      category: "Hardware",
      doi: "10.1234/ie.2023.156",
      citations: "31",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
      tags: ["Hardware Abierto", "Arduino", "Educación"],
      available: true
    },
    {
      id: 5,
      title: "Blockchain y Software Libre: Oportunidades para la Transparencia Gubernamental",
      abstract: "Exploramos cómo la combinación de tecnología blockchain con principios de software libre puede mejorar la transparencia y accountability en servicios gubernamentales.",
      authors: ["Dr. Juan Pérez", "M.C. Carlos Sánchez"],
      journal: "Revista de Gobierno Digital",
      year: "2023",
      type: "Artículo de Revisión",
      category: "Blockchain",
      doi: "10.1234/rgd.2023.234",
      citations: "19",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
      tags: ["Blockchain", "Gobierno", "Transparencia"],
      available: true
    },
    {
      id: 6,
      title: "Desarrollo de Aplicaciones Web Accesibles con Tecnologías de Código Abierto",
      abstract: "Una guía práctica para desarrollar aplicaciones web que cumplan con estándares de accesibilidad utilizando frameworks y herramientas de código abierto.",
      authors: ["Ing. Laura Rodríguez", "Ing. Ana Torres"],
      journal: "Web Accessibility Journal",
      year: "2023",
      type: "Artículo Técnico",
      category: "Desarrollo Web",
      doi: "10.1234/waj.2023.078",
      citations: "12",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
      tags: ["Accesibilidad", "Web", "Open Source"],
      available: true
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Artículo de Investigación":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
      case "Conferencia":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";
      case "Artículo de Revisión":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "Artículo Técnico":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20";
      default:
        return "";
    }
  };

  return (
    <section id="publications" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl sm:text-6xl">Publicaciones</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Investigación y desarrollo en tecnologías de código abierto
          </p>
        </div>

        {/* Featured Publication */}
        <Card className="mb-12 overflow-hidden hover:shadow-lg transition-all duration-300 border-border/60">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto relative overflow-hidden">
              <ImageWithFallback
                src={publications[0].image}
                alt={publications[0].title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 shadow-lg">Destacado</Badge>
              <Badge className={`absolute top-4 right-4 shadow-lg border ${getTypeColor(publications[0].type)}`}>
                {publications[0].type}
              </Badge>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {publications[0].tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <h2 className="text-3xl mb-4">{publications[0].title}</h2>
                <p className="text-muted-foreground mb-6">{publications[0].abstract}</p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{publications[0].authors.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{publications[0].journal}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{publications[0].year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{publications[0].citations} citaciones</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mb-6">
                  DOI: {publications[0].doi}
                </div>
              </div>
              <div className="flex gap-3">
                <Button className="gap-2">
                  <Download className="h-4 w-4" /> Descargar PDF
                </Button>
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="h-4 w-4" /> Ver en Línea
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {publications.slice(1).map((publication) => (
            <Card 
              key={publication.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-border/60 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={publication.image}
                  alt={publication.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 right-3 shadow-lg border ${getTypeColor(publication.type)}`}>
                  {publication.type}
                </Badge>
              </div>
              <CardHeader className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {publication.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {publication.title}
                </CardTitle>
                <CardDescription className="mt-2 line-clamp-3">{publication.abstract}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Users className="h-3.5 w-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground line-clamp-1">{publication.authors.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-muted-foreground line-clamp-1">{publication.journal}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{publication.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{publication.citations} citaciones</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Download className="h-3.5 w-3.5" /> PDF
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-1">
                    <ExternalLink className="h-3.5 w-3.5" /> Ver
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 border-border/60">
            <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl mb-1">24</div>
            <div className="text-sm text-muted-foreground">Publicaciones</div>
          </Card>
          <Card className="text-center p-6 border-border/60">
            <Award className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl mb-1">156</div>
            <div className="text-sm text-muted-foreground">Citaciones</div>
          </Card>
          <Card className="text-center p-6 border-border/60">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl mb-1">12</div>
            <div className="text-sm text-muted-foreground">Investigadores</div>
          </Card>
          <Card className="text-center p-6 border-border/60">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl mb-1">5</div>
            <div className="text-sm text-muted-foreground">Años Activos</div>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center">
          <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl mb-4">¿Tienes una investigación para compartir?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Si estás trabajando en investigación relacionada con software libre, hardware abierto o tecnologías abiertas, 
            nos gustaría conocer tu trabajo y considerar su publicación en nuestro repositorio.
          </p>
          <Button size="lg" className="gap-2">
            Enviar Propuesta <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
