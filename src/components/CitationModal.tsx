import { Quote, X, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "./LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import latex from "react-syntax-highlighter/dist/esm/languages/prism/latex";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("latex", latex);

interface CitationModalProps {
  citation: string;
  open: boolean;
  onClose: () => void;
}

export function CitationModal({ citation, open, onClose }: CitationModalProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Manejo de teclado (ESC) y bloqueo de Scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Usamos createPortal para inyectar el modal fuera de la jerarquía normal de componentes
  return createPortal(
    <AnimatePresence>
      {open && (
        <div style={{ zIndex: 999999 }} className="fixed inset-0 flex items-center justify-center p-4">
          
          {/* Overlay: Fondo con opacidad que cubre TODO (incluyendo Header) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-brightness-75"
            onClick={onClose}
          />

          {/* Modal: Animación estilo GNOME (Rápida + Rebote) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ 
              type: "spring", 
              stiffness: 600, 
              damping: 25, 
              mass: 0.8 
            }}
            onClick={(e) => e.stopPropagation()}
            style={{ zIndex: 999999 }}
            className="relative w-full max-w-2xl bg-card rounded-2xl border shadow-2xl overflow-hidden"
          >
            {/* Título / Header del Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-muted/20">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Quote className="h-5 w-5 text-primary" />
                {language === "es" ? "Cita de publicación" : "Publication Citation"}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full h-9 w-9 hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-6">
              <div className="rounded-xl overflow-hidden border bg-[#1e1e1e]">
                <SyntaxHighlighter
                  style={materialDark}
                  language="latex"
                  showLineNumbers
                  customStyle={{
                    margin: 0,
                    padding: '1.25rem',
                    fontSize: '0.85rem',
                    background: 'transparent'
                  }}
                >
                  {citation}
                </SyntaxHighlighter>
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={handleCopy} className="min-w-[140px] rounded-xl shadow-sm">
                  {copied ? (
                    <><Check className="mr-2 h-4 w-4" /> {language === "es" ? "Copiado" : "Copied"}</>
                  ) : (
                    <><Copy className="mr-2 h-4 w-4" /> {language === "es" ? "Copiar" : "Copy"}</>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
