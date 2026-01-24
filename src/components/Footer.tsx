import { Code2, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Ubicación: [
      { name: "Edificio P, Piso 2, P-213", href: "/projects" },
      { name: "Conjunto Sur (Anexo), Facultad de Ingenieria", href: "/projects/featured" },
      { name: "Cto. Exterior 18, CU, Ciudad de México 04510", href: "/projects/recent" },
      { name: "Submit Project", href: "/projects/submit" }
    ],
    Contacto: [
      { name: "Telegram", href: "/community" },
      { name: "Facebook", href: "/community/code-of-conduct" },
      { name: "X", href: "/community/events" }
    ],
    Resources: [
      { name: "Modificación de ejemplo", href: "/resources/docs" },
      { name: "Tutorials", href: "/resources/tutorials" },
      { name: "Blog", href: "/resources/blog" },
      { name: "FAQ", href: "/resources/faq" }
    ]
  };

  return (
    <footer id="footer" className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400 dark:text-blue-500" />
              <span className="text-xl text-white">Contacto</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6">
              lidsol@protonmail.com
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@freesoftwarelab.org" className="hover:text-white transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © 2024 Free Software Lab. Licensed under GPL-3.0.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/license" className="text-sm hover:text-white transition-colors">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}