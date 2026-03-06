import { FileText, Users, Calendar, Award, Download, ExternalLink, ArrowLeft, Quote, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageProvider";
import { Publication } from "../data/publications";
import { members } from "../data/members";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CitationModal } from "./CitationModal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";

interface PublicationDetailProps {
  publication: Publication;
  onBack: () => void;
}

export function PublicationDetail({ publication, onBack }: PublicationDetailProps) {
  const { language } = useLanguage();
  const [showCitation, setShowCitation] = useState(false);

  interface AuthorMember {
    name: string;
    memberId?: number;
  }

  const findMemberByUsername = (authorName: string): AuthorMember => {
    const search = authorName.toLowerCase().trim();

    const usernameToMemberId: Record<string, number> = {
      'quique': 4,
      'barrionomia': 9,
    };

    if (usernameToMemberId[search]) {
      const member = members.find(m => m.id === usernameToMemberId[search]);
      if (member) {
        return { name: member.name, memberId: member.id };
      }
    }

    const byGithub = members.find(member => {
      const github = member.contact?.github?.toLowerCase() || '';
      const gitlab = member.contact?.gitlab?.toLowerCase() || '';
      const githubUsername = github.replace('https://github.com/', '').replace('http://github.com/', '');
      const gitlabUsername = gitlab.replace('https://gitlab.com/', '').replace('http://gitlab.com/', '');
      return githubUsername === search || gitlabUsername === search;
    });
    if (byGithub) {
      return { name: byGithub.name, memberId: byGithub.id };
    }

    const byName = members.find(member => {
      const name = member.name.toLowerCase();
      return name === search || name.includes(search) || search.includes(name);
    });
    if (byName) {
      return { name: byName.name, memberId: byName.id };
    }

    return { name: authorName };
  };

  const authorMembers: AuthorMember[] = publication.authors.map(findMemberByUsername);

  const handleAuthorClick = (memberId?: number) => {
    if (memberId) {
      window.location.hash = `#about/member/${memberId}`;
    }
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

        <h1 className="text-4xl sm:text-5xl mb-6" style={{ lineHeight: '1.3' }}>{publication.title[language]}</h1>

        <div style={{ textAlign: 'justify', textJustify: 'inter-word' }} className="mb-8">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            className="text-xl text-muted-foreground leading-relaxed prose prose-xl dark:prose-invert max-w-none"
            components={{
              p: ({children}) => <p className="text-justify hyphens-auto leading-relaxed mb-4" style={{textAlign: 'justify'}}>{children}</p>,
              br: () => <br className="mb-2" />,
              a: ({href, children}) => {
                const isExternal = href && (href.startsWith('http') || href.startsWith('//'));
                return (
                  <a 
                    href={href} 
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-primary hover:underline font-medium"
                  >
                    {children}
                  </a>
                );
              }
            }}
          >
            {publication.abstract[language]
              .split('\n')
              .map(line => line.trim())
              .filter(line => line.length > 0)
              .join('\n\n')}
          </ReactMarkdown>
        </div>

        <div className="space-y-4 text-lg mb-8">
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span className="text-muted-foreground">
              {authorMembers.map((author, idx) => (
                <span key={idx}>
                  {idx > 0 && (idx === authorMembers.length - 1 ? `, ${language === 'es' ? 'y' : 'and'} ` : ', ')}
                  <span
                    className={author.memberId ? "cursor-pointer hover:underline text-foreground font-medium" : ""}
                    onClick={() => handleAuthorClick(author.memberId)}
                  >
                    {author.name}
                    {author.memberId && <ExternalLink className="h-3 w-3 inline ml-1" />}
                  </span>
                </span>
              ))}
            </span>
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
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                <a 
                  href={publication.doi.startsWith('http') ? publication.doi : `https://doi.org/${publication.doi}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline text-primary"
                >
                  DOI: {publication.doi}
                </a>
              </span>
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

          {publication.sourceCode && (
            <Button variant="outline" className="gap-2" asChild>
              <a href={publication.sourceCode} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                {language === 'es' ? 'Código fuente' : 'Source code'}
              </a>
            </Button>
          )}

          {publication.citation && (
            <Button variant="outline" className="gap-2" onClick={() => setShowCitation(true)}>
              <Quote className="h-4 w-4" />
              {language === 'es' ? 'Citar' : 'Cite'}
            </Button>
          )}
        </div>

        {publication.citation && (
          <CitationModal
            citation={publication.citation}
            open={showCitation}
            onClose={() => setShowCitation(false)}
          />
        )}
      </div>
    </section>
  );
}
