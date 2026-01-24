import { Code2, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const navLinks = [
    { name: { en: "Blog", es: "Blog" }, href: "#blog" },
    { name: { en: "Events", es: "Eventos" }, href: "#events" },
    { name: { en: "Courses", es: "Cursos" }, href: "#courses" },
    { name: { en: "Publications", es: "Publicaciones" }, href: "#publications" },
    { name: { en: "Projects", es: "Proyectos" }, href: "#projects" },
    { name: { en: "About", es: "Acerca\u00A0de" }, href: "#about" }, // Non-breaking space
    { name: { en: "Contact", es: "Contacto" }, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </div>
            <span className="text-base sm:text-lg font-semibold whitespace-nowrap">LIDSOL</span>
          </a>

          {/* Desktop Navigation - Show on larger screens */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 xl:px-4 py-2 rounded-full transition-colors hover:bg-accent font-medium text-sm whitespace-nowrap"
              >
                {link.name[language]}
              </a>
            ))}
            <div className="flex items-center gap-2 xl:gap-3 ml-1 xl:ml-2 pl-1 xl:pl-2">
              <LanguageSelector />
              <div className="relative">
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={toggleTheme}
                  aria-label="Toggle theme"
                  className="relative"
                />
                <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
                  <Sun className={`h-3.5 w-3.5 transition-opacity ${theme === "dark" ? "opacity-40" : "opacity-100 text-orange-500"}`} />
                  <Moon className={`h-3.5 w-3.5 transition-opacity ${theme === "dark" ? "opacity-100 text-blue-300" : "opacity-40"}`} />
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button & Controls */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            <LanguageSelector />
            <div className="relative">
              <Switch
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
                <Sun className={`h-3.5 w-3.5 transition-opacity ${theme === "dark" ? "opacity-40" : "opacity-100 text-orange-500"}`} />
                <Moon className={`h-3.5 w-3.5 transition-opacity ${theme === "dark" ? "opacity-100 text-blue-300" : "opacity-40"}`} />
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-4 rounded-xl transition-colors hover:bg-accent font-medium"
              >
                {link.name[language]}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
