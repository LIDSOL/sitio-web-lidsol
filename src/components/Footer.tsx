// Íconos
import { Code2 } from "lucide-react";
import { FacebookIcon } from "./ui/source/icons/FacebookIcon";
import { YoutubeIcon } from "./ui/source/icons/YoutubeIcon";
import { SendIcon } from "./ui/source/icons/SendIcon";
import { InstagramIcon } from "./ui/source/icons/InstagramIcon";
import { GithubIcon } from "./ui/source/icons/GithubIcon";
import { TwitterIcon } from "./ui/source/icons/TwitterIcon";
import { GitlabIcon } from "./ui/source/icons/GitlabIcon";
import { LinkedinIcon } from "./ui/source/icons/linkedinIcon";

export function Footer() {
  /**
   * Links del footer
   * - Estructura declarativa → fácil de extender
   * - No se recalcula nada en render
   */
  const footerLinks = {
    Ubicación: [
      {
        name: "Edificio P, Piso 2, P-213",
        href: "https://www.openstreetmap.org/directions?engine=osrm_car&route=19.3277325,-99.1823637",
      },
      {
        name: "Conjunto Sur (Anexo), Facultad de Ingeniería",
        href: "https://www.openstreetmap.org/directions?engine=osrm_car&route=19.3277325,-99.1823637",
      },
      {
        name: "Cto. Exterior 18, CU, Ciudad de México 04510",
        href: "https://www.openstreetmap.org/directions?engine=osrm_car&route=19.3277325,-99.1823637",
      },
    ],
    "Sitios de interes": [
      { name: "Universidad Nacional Autónoma de México", href: "https://www.unam.mx" },
      { name: "Facultad de Ingeniería", href: "https://www.ingenieria.unam.mx" },
      { name: "División de Ingeniería Electrica", href: "https://www.fi-b.unam.mx" },
    ],
  };

  return (
    <footer
      id="footer"
      className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/*
          Grid principal:
          - Mobile: una columna (stack vertical)
          - Desktop: 6 columnas para control fino de posición
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">

          {/* ================= Contacto ================= */}
          <div className="lg:col-span-2 mb-12 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400 dark:text-blue-500" />
              <span className="text-xl text-white">Contacto</span>
            </div>

            <p className="text-gray-400 dark:text-gray-500 mb-6">
              <a
                href="mailto:lidsol@protonmail.com"
                className="hover:text-white transition-colors"
              >
                lidsol@protonmail.com
              </a>
            </p>

            {/* Redes sociales */}

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://github.com/lidsol" aria-label="Github" className="hover:text-white">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://gitlab.com/lidsol" aria-label="Gitlab" className="hover:text-white">
                <GitlabIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/lidsol/"
                aria-label="LinkedIn"
                className="hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@lidsol" aria-label="Youtube" className="hover:text-white">
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/lidsol.unam"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/lidsol_fi"
                aria-label="Instagram"
                className="hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://x.com/lidsol" aria-label="Twitter" className="hover:text-white">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://telegram.me/lidsol" aria-label="Telegram" className="hover:text-white">
                <SendIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ================= Ubicación (centrado en desktop) ================= */}
          <div className="lg:col-span-2 lg:col-start-3 mt-12/ lg:mt-0 mb-12">
            <h3 className="text-white mb-4">Ubicación</h3>
            <ul className="space-y-2">
              {footerLinks["Ubicación"].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Sitios de interés (derecha en desktop) ================= */}
          <div className="lg:col-span-2 lg:col-start-5 mt-12 lg:mt-0 mb-12">
            <h3 className="text-white mb-4">Sitios de interes</h3>
            <ul className="space-y-2">
              {footerLinks["Sitios de interes"].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= Barra inferior ================= */}
        <div className="pt-8 border-t border-gray-800 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © 2024 Free Software Lab. Licensed under GPL-3.0.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-sm hover:text-white">Terms of Service</a>
            <a href="/license" className="text-sm hover:text-white">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
