import { Code2 } from "lucide-react";
import { FacebookIcon } from "./ui/source/icons/FacebookIcon";
import { YoutubeIcon } from "./ui/source/icons/YoutubeIcon";
import { SendIcon } from "./ui/source/icons/SendIcon";
import { InstagramIcon } from "./ui/source/icons/InstagramIcon";
import { GithubIcon } from "./ui/source/icons/GithubIcon";
import { TwitterIcon } from "./ui/source/icons/TwitterIcon";
import { GitlabIcon } from "./ui/source/icons/GitlabIcon";
import { LinkedinIcon } from "./ui/source/icons/linkedinIcon";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { language } = useLanguage();

  const t = {
    contact: { en: "Contact", es: "Contacto" },
    location: { en: "Location", es: "Ubicación" },
    interestSites: { en: "Sites of interest", es: "Sitios de interés" },
    copyright: { en: "© 2026 Free Software Lab. MIT License.", es: "© 2026 Free Software Lab. Licencia MIT." },
    license: { en: "License", es: "Licencia" },
  };

  const locationLinks = [
    { name: { en: "Building P, Floor 2, P-213", es: "Edificio P, Piso 2, P-213" }, href: "https://www.openstreetmap.org/directions?engine=osrm_car&route=19.3277325,-99.1823637" },
    { name: { en: "Conjunto Sur (Annex), FI", es: "Conjunto Sur (Anexo), FI" }, href: "https://www.openstreetmap.org/directions?engine=osrm_car&route=19.3277325,-99.1823637" },
    { name: { en: "Cto. Exterior 18, CU, CDMX 04510", es: "Cto. Exterior 18, CU, CDMX 04510" }, href: "https://www.openstreetmap.org/directions?engine=osrm_car&route=19.3277325,-99.1823637" },
  ];

  const interestSitesLinks = [
    { name: { en: "UNAM", es: "UNAM" }, href: "https://www.unam.mx" },
    { name: { en: "Faculty of Engineering", es: "Facultad de Ingeniería" }, href: "https://www.ingenieria.unam.mx" },
    { name: { en: "Electrical Engineering Division", es: "División de Ingeniería Eléctrica" }, href: "https://www.fi-b.unam.mx" },
  ];

  return (
    <footer
      id="footer"
      className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-7 mb-12">

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400 dark:text-blue-500" />
              <span className="text-xl text-white">{t.contact[language]}</span>
            </div>

            <p className="text-gray-400 dark:text-gray-500 mb-6">
              <a
                href="mailto:lidsol@protonmail.com"
                className="hover:text-white transition-colors"
              >
                lidsol@protonmail.com
              </a>
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://github.com/lidsol" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-white">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://gitlab.com/lidsol" target="_blank" rel="noopener noreferrer" aria-label="Gitlab" className="hover:text-white">
                <GitlabIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/lidsol/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@lidsol" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="hover:text-white">
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/lidsol.unam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/lidsol_fi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://x.com/lidsol" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://telegram.me/lidsol" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-white">
                <SendIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:ml-auto flex flex-col md:flex-row gap-12 md:gap-7">
            <div className="min-w-0">
              <h3 className="text-white mb-4">{t.location[language]}</h3>
              <ul className="space-y-2">
                {locationLinks.map((link) => (
                  <li key={link.name[language]}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {link.name[language]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="text-white mb-4">{t.interestSites[language]}</h3>
              <ul className="space-y-2">
                {interestSitesLinks.map((link) => (
                  <li key={link.name[language]}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {link.name[language]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            {t.copyright[language]}
          </p>
          <div className="flex gap-6">
            <button onClick={() => window.location.hash = "#license"} className="text-sm text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
              {t.license[language]}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
