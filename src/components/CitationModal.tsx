import { Quote, X, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CitationModalProps {
  citation: string;
  open: boolean;
  onClose: () => void;
}

export function CitationModal({ citation, open, onClose }: CitationModalProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative w-1/2 max-w-2xl bg-card rounded-xl border shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b bg-muted/50">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Quote className="h-5 w-5" />
            {language === 'es' ? 'Cita' : 'Citation'}
          </h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="rounded-full hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-6 overflow-x-auto max-h-[60vh]">
          <SyntaxHighlighter
            style={materialDark}
            language="latex"
            showLineNumbers={true}
            customStyle={{
              borderRadius: '1rem',
              border: '1px solid hsl(var(--border) / 0.5)',
              padding: '1.5rem',
              marginBottom: '0',
              fontSize: '0.875rem',
            }}
            codeTagProps={{
              style: {
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              }
            }}
          >
            {citation}
          </SyntaxHighlighter>
          <div className="mt-4 flex justify-end">
            <Button 
              className="gap-2" 
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  {language === 'es' ? 'Copiado' : 'Copied'}
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  {language === 'es' ? 'Copiar' : 'Copy'}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
