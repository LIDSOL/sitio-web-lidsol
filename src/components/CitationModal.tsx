import { Quote, X, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "./LanguageProvider";
import { motion, AnimatePresence } from "framer-motion"; // Parte del stack tecnológico

// Optimización: Importación ligera de SyntaxHighlighter
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

  // Bloqueo de scroll eficiente
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

          {/* 🌑 Overlay: Oscurece toda la página (incluyendo el Header) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/50 backdrop-brightness-75"
            onClick={onClose}
          />

          {/* 📦 Modal: Animación Zoom Rápido + Rebote Intenso */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{
              type: "spring",
              stiffness: 600, // Más rápido y rígido
              damping: 20,    // Menos amortiguación para más rebote
              mass: 0.5       // Más ligero para mayor velocidad
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-card rounded-2xl border shadow-2xl overflow-hidden"
          >
            {/* Header del Modal (Barra de título estilo GNOME) */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-muted/30">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Quote className="h-5 w-5 text-primary" />
                {language === "es" ? "Cita de publicación" : "Publication Citation"}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full h-8 w-8 hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Contenido */}
            <div className="p-6">
              <div className="rounded-xl overflow-hidden border bg-[#2d2d2d]">
                <SyntaxHighlighter
                  style={materialDark}
                  language="latex"
                  showLineNumbers
                  customStyle={{
                    margin: 0,
                    padding: '1.25rem',
                    fontSize: '0.85rem',
                    backgroundColor: 'transparent'
                  }}
                >
                  {citation}
                </SyntaxHighlighter>
              </div>

              {/* Único botón de acción para evitar redundancia */}
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={handleCopy}
                  className="min-w-[140px] rounded-xl shadow-sm transition-all active:scale-95"
                >
                  {copied ? (
                    <><Check className="mr-2 h-4 w-4" /> {language === "es" ? "Copiado" : "Copied"}</>
                  ) : (
                    <><Copy className="mr-2 h-4 w-4" /> {language === "es" ? "Copiar Cita" : "Copy Citation"}</>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body // Inyectado al final del body para cubrir el Header
  );
}
