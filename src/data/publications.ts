import torBrowserImg    from "../../public/publication-images/tor-browser.jpg";
import vrImg            from "../../public/publication-images/vr-para-enfentar-fobias.png";

export interface Publication {
  id: number;
  title: { en: string; es: string };
  abstract: { en: string; es: string };
  authors: string[];
  journal?: { en: string; es: string };
  year: string;
  type: { en: string; es: string };
  category: string;
  doi: string;
  citations?: string;
  image: string;
  tags?: { en: string[]; es: string[] };
  available: boolean;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: {
      en: "Exploring Virtual Reality for Neural Rehabilitation and Phobia Treatment",
      es: "Explorando la Realidad Virtual para la Rehabilitación Neurológica y el Tratamiento de Fobias"
    },
    abstract: {
      en: "The principal objective of neural rehabilitation therapies is helping affected people to recover their mobility and reduce their dependency to other people in personal and occupational life. The way neural rehabilitation therapies are applied used to be based on the experience of the therapists and the epidemiological data available. Meanwhile, computer games (serious games), specially, based on virtual reality, are already used to treat exclusively certain types of phobia considering that an effective therapy consists on exposing patients to the source of their pathological fear within a controlled and safe environment. At present, at National Autonomous University of Mexico we are developing a set of applications based on videogames technology, programming them by the Unity SDK. The idea is helping patients to recover their mobility, which was lost by a neurological accident, or to confront their phobia. In this work we present the corresponding advances. In the case of neural rehabilitation, we focus the applications for ocular, head and neck recovery, developing some 3D scenarios for the Oculus Rift device. Respect to phobia treatment we consider attending arachnophobia, acrophobia and aviophobia, developing some 3D scenarios for Card Boards and also the Oculus Rift.",
      es: "El objetivo principal de las terapias de rehabilitación neurológica es ayudar a las personas afectadas a recuperar su movilidad y reducir su dependencia de otras personas en su vida personal y laboral. La forma en que se aplicaban las terapias de rehabilitación neurológica solía basarse en la experiencia de los terapeutas y en los datos epidemiológicos disponibles. Por otra parte, los juegos de computadora (serious games), especialmente aquellos basados en realidad virtual, ya se utilizan para tratar exclusivamente ciertos tipos de fobias, considerando que una terapia efectiva consiste en exponer a los pacientes a la fuente de su miedo patológico dentro de un entorno controlado y seguro. Actualmente, en la Universidad Nacional Autónoma de México estamos desarrollando un conjunto de aplicaciones basadas en tecnología de videojuegos, programadas mediante el SDK de Unity. La idea es ayudar a los pacientes a recuperar la movilidad perdida debido a un accidente neurológico, o bien, a enfrentar su fobia. En este trabajo presentamos los avances correspondientes. En el caso de la rehabilitación neurológica, enfocamos las aplicaciones en la recuperación ocular, de cabeza y cuello, desarrollando algunos escenarios 3D para el dispositivo Oculus Rift. Con respecto al tratamiento de fobias, consideramos atender la aracnofobia, la acrofobia y la aviophobia, desarrollando escenarios 3D tanto para Cardboard como para Oculus Rift."
    },
    authors: ["D. Vargas-Herrera", "L. A. Oropeza", "Emilio Cabrera", "I. Caldelas", "F. Brambila-Paz", "R. Montúfar-Chaveznava"],
    year: "2019",
    type: {
      en: "Conference Paper",
      es: "Artículo de conferencia"
    },
    category: "Educación",
    doi: "10.1234/rmte.2024.001",
    image: vrImg,
    tags: {
      en: ["Virtual Reality", "Videogames", "Phobia"],
      es: ["Realidad Virtual", "Videojuegos", "Fobias"]
    },
    available: true
  },
    {
      id: 2,
      title: {
        en: "The Tor Network as a Privacy Tool in Our Lives",
        es: "La red Tor como elemento de privacidad en nuestras vidas"
      },
      abstract: {
        en: "The Tor network is used to protect users' data privacy and can function as a shield to safeguard personal information.",
        es: "La red Tor es usada para proteger la privacidad de los datos de los usuarios y puede funcionar como un escudo para proteger la información personal."
      },
      authors: ["Marco Ruano"],
      year: "2017",
      type: {
        en: "Journal Article",
        es: "Artículo de revista"
      },
      category: "Seguridad",
      doi: "10.1234/jcsr.2024.042",
      image: torBrowserImg,
      tags: {
        en: ["Tor", "Privacy", "Anonymity", "Networks", "Information"],
        es: ["Tor", "Privacidad", "Anonimato", "Redes", "Información"]
    },
  available: true
}];
