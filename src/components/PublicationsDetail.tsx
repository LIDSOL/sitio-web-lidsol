import { X, FileText, Users, Calendar, Award, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageProvider";
import { Publication } from "../data/publications";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PublicationsDetailProps {
  publication: Publication;
  open: boolean;
  onClose: () => void;
}

export function PublicationsDetail({ publication, open, onClose }: PublicationsDetailProps) {
  const { language } = useLanguage();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog - GNOME style */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-auto bg-card rounded-xl border shadow-2xl mx-4">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h2 className="text-xl font-semibold line-clamp-2 pr-8">
            {publication.title[language]}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-3 right-3 rounded-full hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image */}
          {publication.image && (
            <div className="aspect-video rounded-lg overflow-hidden border">
              <ImageWithFallback
                src={publication.image}
                alt={publication.title[language]}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Type and Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge className={`border ${getTypeColor(publication.type)}`}>
              {publication.type[language]}
            </Badge>
            {publication.tags && publication.tags[language]?.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
          {/* Abstract */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {publication.abstract[language]}
            </p>
          </div>
          {/* Metadata */}
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{publication.authors.join(", ")}</span>
            </div>
            {publication.journal && (
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{publication.journal[language]}</span>
              </div>
            )}
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{publication.year}</span>
            </div>
            {publication.citations && (
              <div className="flex items-center gap-3">
                <Award className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  {publication.citations} {language === 'es' ? 'citaciones' : 'citations'}
                </span>
              </div>
            )}
            {publication.doi && (
              <div className="text-xs text-muted-foreground">
                DOI: {publication.doi}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
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
      </div>
    </div>
  );
}

function getTypeColor(type: { en: string; es: string }) {
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
}
