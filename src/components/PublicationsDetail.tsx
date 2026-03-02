import { FileText, Users, Calendar, Award, Download, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageProvider";
import { Publication } from "../data/publications";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PublicationDetailProps {
  publication: Publication;
  onBack: () => void;
}

export function PublicationDetail({ publication, onBack }: PublicationDetailProps) {
  const { language } = useLanguage();

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
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Button
          variant="outline"
          className="mb-8 gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" /> 
          {language === 'es' ? 'Volver a Publicaciones' : 'Back to Publications'}
        </Button>

        {publication.image && (
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-border/50 mb-8">
            <ImageWithFallback
              src={publication.image}
              alt={publication.title[language]}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className={`border ${getTypeColor(publication.type)}`}>
            {publication.type[language]}
          </Badge>
          {publication.tags && publication.tags[language]?.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>

        <h1 className="text-4xl sm:text-5xl mb-6">{publication.title[language]}</h1>

        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          {publication.abstract[language]}
        </p>

        <div className="space-y-4 text-lg mb-8">
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span className="text-muted-foreground">{publication.authors.join(", ")}</span>
          </div>
          {publication.journal && (
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{publication.journal[language]}</span>
            </div>
          )}
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">{publication.year}</span>
          </div>
          {publication.citations && (
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">
                {publication.citations} {language === 'es' ? 'citaciones' : 'citations'}
              </span>
            </div>
          )}
          {publication.doi && (
            <div className="text-sm text-muted-foreground">
              DOI: {publication.doi}
            </div>
          )}
        </div>

        <div className="flex gap-4">
          {publication.pdf ? (
            <Button className="gap-2" asChild>
              <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                {language === 'es' ? 'Descargar PDF' : 'Download PDF'}
              </a>
            </Button>
          ) : (
            <Button className="gap-2" disabled>
              <Download className="h-4 w-4" />
              {language === 'es' ? 'Descargar PDF' : 'Download PDF'}
            </Button>
          )}
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            {language === 'es' ? 'Ver en línea' : 'View online'}
          </Button>
        </div>
      </div>
    </section>
  );
}
