import { useLanguage } from "./LanguageProvider";
import { publications, Publication } from "../data/publications";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { FileText, ExternalLink, Download, Users, Calendar, Award, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CitationModal } from "./CitationModal";
import { motion } from "framer-motion";
import { useState } from "react";

interface PublicationsProps {
  onPublicationClick: (publicationId: number) => void;
}

export function Publications({ onPublicationClick }: PublicationsProps) {
  const { language } = useLanguage();
  const [citePublication, setCitePublication] = useState<Publication | null>(null);

  const handleCite = (publication: Publication) => {
    setCitePublication(publication);
  };

  const getTypeColor = (type: { en: string; es: string }) => {
    switch (type.en) {
      case "Research Article":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
      case "Conference":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";
      case "Review Article":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "Technical Article":
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
          <h1 className="text-5xl sm:text-6xl">{language === 'es' ? 'Publicaciones' : 'Publications'}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'es' ? 'Investigación y desarrollo en tecnologías de código abierto' : 'Research and development in open source technologies'}
          </p>
        </div>

{/* Publications Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {publications.slice(0).map((publication, index) => (
            <Card
              key={publication.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-border/60 flex flex-col h-full"
            >
              <div className="aspect-video relative overflow-hidden shrink-0">
                <ImageWithFallback
                  src={publication.image}
                  alt={publication.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 right-3 shadow-lg border ${getTypeColor(publication.type)}`}>
                  {publication.type[language]}
                </Badge>
              </div>
                <CardHeader className="flex-grow pb-2 pt-2">
                <div className="min-h-[24px]">
                  {publication.tags && publication.tags[language] && (
                    <div className="flex flex-wrap gap-2 mb-1">
                      {publication.tags[language].map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2 leading-relaxed font-bold">
                  {publication.title[language]}
                </CardTitle>
                <CardDescription className="mt-1 line-clamp-3">{publication.abstract[language]}</CardDescription>
                </motion.div>
              </CardHeader>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.1 }}
              >
              <CardContent className="mt-auto">
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Users className="h-3.5 w-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground line-clamp-1">{publication.authors.join(", ")}</span>
                  </div>
                  {publication.journal && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-muted-foreground line-clamp-1">{publication.journal[language]}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{publication.year}</span>
                  </div>
                  {publication.citations && (
                    <div className="flex items-center gap-2">
                      <Award className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-muted-foreground">{publication.citations} {language === 'es' ? 'citaciones' : 'citations'}</span>
                    </div>
                  )}
                  {publication.doi && (
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                      <a 
                        href={publication.doi.startsWith('http') ? publication.doi : `https://doi.org/${publication.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        DOI
                      </a>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {publication.pdf ? (
                    <Button variant="outline" size="sm" className="flex-1 gap-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                      <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                        <Download className="h-3.5 w-3.5" /> PDF
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="flex-1 gap-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" disabled>
                      <Download className="h-3.5 w-3.5" /> PDF
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="flex-1 gap-1" onClick={() => onPublicationClick(publication.id)}>
                    <ExternalLink className="h-3.5 w-3.5" /> {language === 'es' ? 'Ver' : 'View'}
                  </Button>
                  {publication.citation && (
                    <Button variant="outline" size="sm" className="flex-1 gap-1" onClick={() => handleCite(publication)}>
                      <Quote className="h-3.5 w-3.5" /> {language === 'es' ? 'Citar' : 'Cite'}
                    </Button>
                  )}
                </div>
              </CardContent>
              </motion.div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 border-border/60">
            <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl mb-1">24</div>
            <div className="text-sm text-muted-foreground">{language === 'es' ? 'Publicaciones' : 'Publications'}</div>
          </Card>
          <Card className="text-center p-6 border-border/60">
            <Award className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl mb-1">156</div>
            <div className="text-sm text-muted-foreground">{language === 'es' ? 'Citaciones' : 'Citations'}</div>
          </Card>
          <Card className="text-center p-6 border-border/60">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl mb-1">12</div>
            <div className="text-sm text-muted-foreground">{language === 'es' ? 'Investigadores' : 'Researchers'}</div>
          </Card>
          <Card className="text-center p-6 border-border/60">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl mb-1">5</div>
            <div className="text-sm text-muted-foreground">{language === 'es' ? 'Años Activos' : 'Active Years'}</div>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center">
          <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl mb-4">{language === 'es' ? '¿Tienes una investigación para compartir?' : 'Do you have research to share?'}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Si estás trabajando en investigación relacionada con software libre, hardware abierto o tecnologías abiertas, nos gustaría conocer tu trabajo y considerar su publicación en nuestro repositorio.'
              : 'If you are working on research related to free software, open hardware, or open technologies, we would like to know about your work and consider publishing it in our repository.'}
          </p>
          <Button size="lg" className="gap-2">
            {language === 'es' ? 'Enviar Propuesta' : 'Submit Proposal'} <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        {/* Cite Modal */}
        <CitationModal
          citation={citePublication?.citation ?? ""}
          open={!!citePublication}
          onClose={() => setCitePublication(null)}
        />
      </div>
    </section>
  );
}
