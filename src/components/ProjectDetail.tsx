import { ArrowLeft, Github, ExternalLink, Star, Users, CheckCircle, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageProvider";
import { Project } from "../data/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const { language } = useLanguage();

  const t = {
    back: { en: "Back to Projects", es: "Volver a Proyectos" },
    description: { en: "Description", es: "Descripción" },
    features: { en: "Key Features", es: "Características Clave" },
    stats: { en: "Project Stats", es: "Estadísticas del Proyecto" },
    stars: { en: "Stars", es: "Estrellas" },
    contributors: { en: "Contributors", es: "Contribuidores" },
    status: { en: "Status", es: "Estado" },
    language: { en: "Language", es: "Lenguaje" },
    tags: { en: "Tags", es: "Etiquetas" },
    sourceCode: { en: "View Source Code", es: "Ver Código Fuente" },
    visitWebsite: { en: "Visit Website", es: "Visitar Sitio Web" },
    download: { en: "Download", es: "Descargar" },
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back[language]}
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-5xl sm:text-6xl mb-4">
                {project.title[language]}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.shortDescription[language]}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <Button asChild size="lg" className="gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  {t.sourceCode[language]}
                </a>
              </Button>
            )}

            {project.website && (
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5" />
                  {t.visitWebsite[language]}
                </a>
              </Button>
            )}

            {project.download && (
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <a
                  href={project.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="h-5 w-5" />
                  {t.download[language]}
                </a>
              </Button>
            )}
          </div>
        </div>

    {/* Description */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 mb-8">
        <h2 className="text-3xl mb-6">{t.description[language]}</h2>

      {project.image && (
        <div className="mt-4 mb-8 overflow-hidden rounded-2xl border border-border/40 bg-muted">
          <img
            src={project.image}
            alt={project.title[language]}
            className="
              w-full
              object-cover
              max-h-[420px]
              transition
              duration-300
            "
          />
        </div>
    )}



    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({children}) => <p className="text-justify hyphens-auto leading-relaxed mb-4" style={{textAlign: 'justify'}}>{children}</p>,
          br: () => <br className="mb-2" />
        }}
      >
        {project.fullDescription[language]
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0)
          .join('\n\n')}
      </ReactMarkdown>
    </div>
</div>


        {/* Features */}
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl mb-6">{t.features[language]}</h2>
          <ul className="space-y-3">
            {project.features[language].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-lg">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-card rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-muted-foreground">
                {t.stars[language]}
              </span>
            </div>
            <div className="text-3xl">{project.stars}</div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                {t.contributors[language]}
              </span>
            </div>
            <div className="text-3xl">{project.contributors}</div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">
                {t.status[language]}
              </span>
            </div>
            <div className="text-xl">{project.status[language]}</div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-4 h-4 ${project.color} rounded-full`} />
              <span className="text-sm text-muted-foreground">
                {t.language[language]}
              </span>
            </div>
            <div className="text-xl">{project.language}</div>
          </div>
        </div>

        {/* Tags */}
        <div className="bg-card rounded-3xl p-8 border border-border/50">
          <h2 className="text-2xl mb-4">{t.tags[language]}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-sm px-4 py-2"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

