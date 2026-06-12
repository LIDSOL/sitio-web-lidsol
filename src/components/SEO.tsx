import { useEffect } from "react";
import { useLanguage } from "./LanguageProvider";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

function setOrUpdateMeta(name: string, content: string) {
  const attr = name.startsWith("og:") ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const SITE_NAME = "LIDSoL";
const BASE_URL = "https://lidsol.fi-b.unam.mx";
const DEFAULT_IMAGE = "/home/LIDSOLlogo.svg";
const DEFAULT_DESC = {
  en: "Free Software Research and Development Laboratory at FI UNAM. We promote free and open technologies through projects, courses, events, and publications.",
  es: "Laboratorio de Investigación y Desarrollo de Software Libre en la FI UNAM. Promovemos tecnologías libres y abiertas mediante proyectos, cursos, eventos y publicaciones.",
};

export function SEO({ title, description, image, url, type = "website" }: SEOProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;

    document.title = fullTitle;
    document.documentElement.lang = language;

    setOrUpdateMeta("description", description);
    setOrUpdateMeta("og:title", fullTitle);
    setOrUpdateMeta("og:description", description);
    setOrUpdateMeta("og:type", type);
    setOrUpdateMeta("og:url", fullUrl);
    setOrUpdateMeta("og:site_name", SITE_NAME);
    setOrUpdateMeta("og:image", image ? `${BASE_URL}${image}` : `${BASE_URL}${DEFAULT_IMAGE}`);
    setOrUpdateMeta("twitter:card", "summary_large_image");
    setOrUpdateMeta("twitter:title", fullTitle);
    setOrUpdateMeta("twitter:description", description);
    setOrUpdateMeta("twitter:image", image ? `${BASE_URL}${image}` : `${BASE_URL}${DEFAULT_IMAGE}`);
    setOrUpdateMeta("twitter:site", "@lidsol");
  }, [title, description, image, url, type, language]);

  return null;
}

export function OrganizationSchema() {
  const { language } = useLanguage();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: "LIDSoL",
    alternateName: language === "es"
      ? "Laboratorio de Investigación y Desarrollo de Software Libre"
      : "Free Software Research and Development Laboratory",
    description: DEFAULT_DESC[language],
    url: BASE_URL,
    logo: `${BASE_URL}/home/LIDSOLlogo.svg`,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Nacional Autónoma de México",
      alternateName: "UNAM",
    },
    areaServed: "MX",
    knowsAbout: [
      "Free Software",
      "Open Source",
      "Linux",
      "Information Security",
      "Privacy",
    ],
    sameAs: [
      "https://github.com/lidsol",
      "https://gitlab.com/lidsol",
      "https://www.youtube.com/@lidsol",
      "https://x.com/lidsol",
      "https://t.me/lidsol",
    ],
  };

  useEffect(() => {
    let el = document.getElementById("ld-organization");
    if (!el) {
      el = document.createElement("script");
      el.id = "ld-organization";
      el.setAttribute("type", "application/ld+json");
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
  }, [language]);

  return null;
}
