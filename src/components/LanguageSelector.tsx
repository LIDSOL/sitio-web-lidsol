import { useLanguage } from "./LanguageProvider";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = language === "en" ? "English" : "Español";
  const otherLang = language === "en" ? "es" : "en";
  const otherLangLabel = language === "en" ? "Español" : "English";

  return (
    <div className="relative">
      {/* Split Button */}
      <div className="flex items-center rounded-full border border-border/50 bg-card overflow-hidden">
        {/* Main button - shows current language */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-1.5 hover:bg-accent transition-colors"
        >
          <span className="text-sm font-medium">{currentLang}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-full right-0 mt-2 z-50 min-w-[140px] rounded-2xl border border-border/50 bg-card shadow-lg overflow-hidden">
            <button
              onClick={() => {
                setLanguage(language);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2.5 text-left hover:bg-accent transition-colors flex items-center justify-between"
            >
              <span className="text-sm font-medium">{currentLang}</span>
              <div className="w-2 h-2 bg-primary rounded-full" />
            </button>
            <button
              onClick={() => {
                setLanguage(otherLang);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2.5 text-left hover:bg-accent transition-colors text-sm"
            >
              {otherLangLabel}
            </button>
          </div>
        </>
      )}
    </div>
  );
}