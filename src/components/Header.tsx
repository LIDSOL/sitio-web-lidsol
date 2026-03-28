import { Code2, Menu, X, Sun, Moon, ChevronDown, BookOpen, CalendarDays, GraduationCap, BookMarked, FolderGit2, Info, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { useState, useEffect, useCallback, ReactNode } from "react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { LanguageSelector } from "./LanguageSelector";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";

type Theme = "light" | "dark";
type Language = "en" | "es";

const NAV_LINKS = [
  { name: { en: "Blog", es: "Blog" }, href: "#blog", icon: BookOpen },
  { name: { en: "Events", es: "Eventos" }, href: "#events", icon: CalendarDays },
  { name: { en: "Courses", es: "Cursos" }, href: "#courses", icon: GraduationCap },
  { name: { en: "Publications", es: "Publicaciones" }, href: "#publications", icon: BookMarked },
  { name: { en: "Projects", es: "Proyectos" }, href: "#projects", icon: FolderGit2 },
  { name: { en: "About", es: "Acerca\u00A0de" }, href: "#about", icon: Info },
  { name: { en: "Contact", es: "Contacto" }, href: "#contact", icon: Mail },
];

function useActiveSection(): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted || typeof document === "undefined") return null;
  return createPortal(children, document.body);
}

function ThemeSwitch({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const dark = theme === "dark";
  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <button
        role="switch"
        aria-checked={dark}
        aria-label="Toggle theme"
        onClick={onToggle}
        style={{
          position: "relative",
          display: "inline-flex",
          height: "1.5rem",
          width: "2.75rem",
          flexShrink: 0,
          cursor: "pointer",
          alignItems: "center",
          borderRadius: "9999px",
          border: "2px solid transparent",
          outline: "none",
          transition: "background-color 0.2s",
          backgroundColor: dark ? "#62A0EA" : "#d1d5db",
        }}
      >
        <span
          style={{
            pointerEvents: "none",
            display: "inline-block",
            height: "1rem",
            width: "1rem",
            borderRadius: "9999px",
            backgroundColor: "white",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
            transition: "transform 0.2s",
            transform: dark ? "translateX(1.25rem)" : "translateX(0.125rem)",
          }}
        />
      </button>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 5px", pointerEvents: "none",
      }}>
        <Sun style={{ width: 13, height: 13, opacity: dark ? 0.35 : 1, color: dark ? undefined : "#f97316", transform: "translateY(-1px)" }} />
        <Moon style={{ width: 13, height: 13, opacity: dark ? 1 : 0.35, color: dark ? "#93c5fd" : undefined, transform: "translate(-2px, -1px)" }} />
      </div>
    </div>
  );
}

function LanguageSelectorInline({
  language, setLanguage,
}: { language: Language; setLanguage: (l: Language) => void }) {
  const [open, setOpen] = useState(false);
  const current = language === "en" ? "English" : "Español";
  const other = language === "en" ? "es" : "en";
  const otherLabel = language === "en" ? "Español" : "English";

  return (
    <div className="relative">
      <div className="flex items-center rounded-full border border-border/50 bg-card overflow-hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-accent transition-colors"
        >
          <span className="text-sm font-medium">{current}</span>
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full right-0 mt-2 z-50 min-w-[140px] rounded-2xl border border-border/50 bg-card shadow-lg overflow-hidden"
            >
              <button
                onClick={() => { setLanguage(language); setOpen(false); }}
                className="w-full px-4 py-2.5 text-left hover:bg-accent transition-colors flex items-center justify-between"
              >
                <span className="text-sm font-medium">{current}</span>
                <div className="w-2 h-2 bg-primary rounded-full" />
              </button>
              <button
                onClick={() => { setLanguage(other); setOpen(false); }}
                className="w-full px-4 py-2.5 text-left hover:bg-accent transition-colors text-sm"
              >
                {otherLabel}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const activeSection = useActiveSection();

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setDrawerOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const navLinks = [
    { name: { en: "Blog", es: "Blog" }, href: "#blog" },
    { name: { en: "Events", es: "Eventos" }, href: "#events" },
    { name: { en: "Courses", es: "Cursos" }, href: "#courses" },
    { name: { en: "Publications", es: "Publicaciones" }, href: "#publications" },
    { name: { en: "Projects", es: "Proyectos" }, href: "#projects" },
    { name: { en: "About", es: "Acerca\u00A0de" }, href: "#about" },
    { name: { en: "Contact", es: "Contacto" }, href: "#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-4 lg:px-6 h-full">
          <div className="flex h-14 items-stretch">
            {/* LEFT: hamburger (mobile) + logo */}
            <div className="flex items-center gap-0.5 flex-shrink-0 pr-2">
              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="Abrir menú"
                className="lg:hidden p-2 rounded-full hover:bg-accent transition-colors flex-shrink-0 self-center"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <a
                href="#"
                className="flex items-center gap-2 px-2 flex-shrink-0 hover:opacity-80 transition-opacity self-center"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                  <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                </div>
                <span className="text-base sm:text-lg font-semibold whitespace-nowrap">LIDSOL</span>
              </a>
            </div>

            {/* SPACER: pushes controls to the right on mobile */}
            <div className="flex-1" />

            {/* CENTER: desktop nav */}
            <nav className="hidden lg:flex items-stretch flex-1 overflow-x-auto scrollbar-none">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`
                      relative inline-flex items-center px-3 xl:px-4 text-sm font-medium
                      whitespace-nowrap select-none transition-colors duration-150
                      border-b-[3px] focus-visible:outline-none
                      ${isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-foreground/70 hover:text-foreground hover:bg-accent/50"}
                    `}
                  >
                    {link.name[language]}
                    {isActive && (
                      <motion.span
                        layoutId="tab-underline"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-sm"
                        transition={{ type: "spring", stiffness: 400, damping: 36 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* RIGHT: idioma + tema */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 pr-4 lg:pr-0">
              <LanguageSelectorInline language={language} setLanguage={setLanguage} />
              <ThemeSwitch theme={theme} onToggle={toggleTheme} />
            </div>
          </div>
        </div>
      </header>

      {/* Drawer móvil via Portal */}
      <Portal>
        <AnimatePresence>
          {drawerOpen && (
            <>
              <motion.div
                key="lidsol-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                onClick={() => setDrawerOpen(false)}
                style={{
                  position: "fixed", inset: 0,
                  zIndex: 9998,
                  backgroundColor: "rgba(0,0,0,0.45)",
                  backdropFilter: "blur(3px)",
                  WebkitBackdropFilter: "blur(3px)",
                }}
              />

              <motion.nav
                key="lidsol-drawer"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 34, mass: 0.8 }}
                style={{
                  position: "fixed", top: 0, left: 0,
                  zIndex: 9999,
                  height: "100dvh",
                  width: "17rem",
                  maxWidth: "85vw",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "4px 0 32px rgba(0,0,0,0.2)",
                  overflowY: "auto",
                }}
                className="bg-card border-r border-border"
              >
                <div className="flex items-center justify-between px-4 h-14 border-b border-border/50 flex-shrink-0">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                      <Code2 className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold">LIDSOL</span>
                  </a>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Cerrar menú"
                    className="p-2 rounded-full hover:bg-accent transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-12 space-y-4 px-2">
                  {NAV_LINKS.map((link) => {
                    const id = link.href.slice(1);
                    const isActive = activeSection === id;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setDrawerOpen(false)}
                        className={`
                          flex items-center gap-3 px-4 py-5 rounded-xl
                          transition-colors font-medium
                          ${isActive
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent text-foreground"}
                        `}
                      >
                        <link.icon
                          className={`h-5 w-5 shrink-0 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
                        />
                        {link.name[language]}
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
