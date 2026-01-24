import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Only access localStorage once on initial render
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("lidsol-language");
      return (stored === "en" || stored === "es") ? stored : "es";
    }
    return "es";
  });

  useEffect(() => {
    // Save to localStorage when language changes
    if (typeof window !== 'undefined') {
      localStorage.setItem("lidsol-language", language);
    }
  }, [language]);

  // Memoize setLanguage to prevent unnecessary re-renders
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  // Memoize context value to prevent unnecessary re-renders of consumers
  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
