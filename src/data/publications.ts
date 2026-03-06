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
  doi?: string;
  citations?: string;
  citation?: string;
  image: string;
  tags?: { en: string[]; es: string[] };
  pdf?: string;
  sourceCode?: string;
  available: boolean;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: {
      en: "Exploring Virtual Reality for Neural Rehabilitation and Phobia Treatment",
      es: "Explorando la Realidad Virtual para la Rehabilitación Neurológica y el Tratamiento de Fobias"
    },
    pdf: "/pdf/publication/portia.pdf",
    abstract: {
      en: "The principal objective of neural rehabilitation therapies is helping affected people to recover their mobility and reduce their dependency to other people in personal and occupational life. The way neural rehabilitation therapies are applied used to be based on the experience of the therapists and the epidemiological data available. Meanwhile, computer games (serious games), specially, based on virtual reality, are already used to treat exclusively certain types of phobia considering that an effective therapy consists on exposing patients to the source of their pathological fear within a controlled and safe environment. At present, at National Autonomous University of Mexico we are developing a set of applications based on videogames technology, programming them by the Unity SDK. The idea is helping patients to recover their mobility, which was lost by a neurological accident, or to confront their phobia. In this work we present the corresponding advances. In the case of neural rehabilitation, we focus the applications for ocular, head and neck recovery, developing some 3D scenarios for the Oculus Rift device. Respect to phobia treatment we consider attending arachnophobia, acrophobia and aviophobia, developing some 3D scenarios for Card Boards and also the Oculus Rift. \n We thank to the Dirección General de Asuntos del Personal Académico of the National Autonomous University of Mexico, through PAPIME for the support of the Project PE104416 _Ambientes Virtuales y Herramientas Digitales para Neurociencias_ and PAPIIT for the support of the Project IT101917 _Realidad Virtual en la Visualización de Información Geográfica y Geofísica._",
      es: "El objetivo principal de las terapias de rehabilitación neurológica es ayudar a las personas afectadas a recuperar su movilidad y reducir su dependencia de otras personas en la vida personal y laboral. La forma en que se aplicaban las terapias de rehabilitación neurológica solía basarse en la experiencia de los terapeutas y en los datos epidemiológicos disponibles. Mientras tanto, los videojuegos (juegos serios), especialmente aquellos basados en realidad virtual, ya se utilizan para tratar exclusivamente ciertos tipos de fobia, considerando que una terapia efectiva consiste en exponer a los pacientes a la fuente de su miedo patológico dentro de un entorno controlado y seguro. Actualmente, en la Universidad Nacional Autónoma de México, estamos desarrollando un conjunto de aplicaciones basadas en la tecnología de videojuegos, programándolas con el SDK de Unity. La idea es ayudar a los pacientes a recuperar su movilidad, que se perdió debido a un accidente neurológico, o a confrontar su fobia. En este trabajo presentamos los avances correspondientes. En el caso de la rehabilitación neurológica, nos enfocamos en aplicaciones para la recuperación ocular, de cabeza y cuello, desarrollando algunos escenarios en 3D para el dispositivo Oculus Rift. Respecto al tratamiento de fobias, consideramos atender la aracnofobia, la acrofobia y la aviofobia, desarrollando algunos escenarios en 3D para Card Boards y también para el Oculus Rift. \nAgradecemos a la Dirección General de Asuntos del Personal Académico de la Universidad Nacional Autónoma de México, a través de PAPIME, por el apoyo del Proyecto PE104416 _Ambientes Virtuales y Herramientas Digitales para Neurociencias_, y a PAPIIT por el apoyo del Proyecto IT101917 _Realidad Virtual en la Visualización de Información Geográfica y Geofísica._"
    },
    authors: ["D. Vargas-Herrera", "L. A. Oropeza", "Emilio Cabrera", "I. Caldelas", "F. Brambila-Paz", "R. Montúfar-Chaveznava"],
    year: "2019",
    type: {
      en: "Conference Paper",
      es: "Artículo de conferencia"
    },
    category: "Educación",
    doi: "https://link.springer.com/chapter/10.1007/978-3-030-16785-1_4",
    sourceCode: "https://github.com/LIDSOL/portia/tree/unity-2017.1",
    citation: `@InProceedings{10.1007/978-3-030-16785-1_4,
author="Vargas-Herrera, D.
and Oropeza, L. A.
and Cabrera, O. E.
and Caldelas, I.
and Brambila-Paz, F.
and Mont{\'u}far-Chaveznava, R.",
editor="Fardoun, Habib M.
and Hassan, Ahlam A. M.
and de la Gu{\'i}a, M. Elena",
title="Exploring Virtual Reality for Neural Rehabilitation and Phobia Treatment",
booktitle="New Technologies to Improve Patient Rehabilitation",
year="2019",
publisher="Springer International Publishing",
address="Cham",
pages="46--57",
abstract="The principal objective of neural rehabilitation therapies is helping affected people to recover their mobility and reduce their dependency to other people in personal and occupational life. The way neural rehabilitation therapies are applied used to be based on the experience of the therapists and the epidemiological data available. Meanwhile, computer games (serious games), specially, based on virtual reality, are already used to treat exclusively certain types of phobia considering that an effective therapy consists on exposing patients to the source of their pathological fear within a controlled and safe environment. At present, at National Autonomous University of Mexico we are developing a set of applications based on videogames technology, programming them by the Unity SDK. The idea is helping patients to recover their mobility, which was lost by a neurological accident, or to confront their phobia. In this work we present the corresponding advances. In the case of neural rehabilitation, we focus the applications for ocular, head and neck recovery, developing some 3D scenarios for the Oculus Rift device. Respect to phobia treatment we consider attending arachnophobia, acrophobia and aviophobia, developing some 3D scenarios for Card Boards and also the Oculus Rift.",
isbn="978-3-030-16785-1"
}`,
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
      pdf: "pdf/publication/ruano-2017.pdf",
      abstract: {
        en: "The Tor network is used to protect users' data privacy and can act as a shield to protect personal information. \n_This article was developed in connection with the [PE102718 PAPIME/DGAPA/UNAM](https://priv-anon.unam.mx/) project._  \n_We thank DGAPA-UNAM for their support in the development of this material for PAPIME PE102718 Development of teaching materials for privacy and anonymity mechanisms in networks._",
        es: "La red Tor es usada para proteger la privacidad de los datos de los usuarios y puede funcionar como un escudo para proteger la información personal. \n_Este artículo se desarrolló vinculado con el proyecto [PE102718 PAPIME/DGAPA/UNAM](https://priv-anon.unam.mx/)._ \n_Se agradece el apoyo otorgado para el desarrollo de este material a DGAPA-UNAM, PAPIME PE102718 Desarrollo de materiales didácticos para los mecanismos de privacidad y anonimato en redes._"
      },
      authors: ["Marco Ruano"],
      year: "2017",
      type: {
        en: "Journal Article",
        es: "Artículo de revista"
      },
      category: "Seguridad",
    citation: `@article{ruano_munoz_2017,
title={La red Tor como elemento de privacidad en nuestras vidas},
url={https://revista.seguridad.unam.mx/numero30/la-red-tor-como-elemento-de-privacidad-en-nuestras-vidas},
journal={.SEGURIDAD},
number={30}
publisher={DIRECCIÓN GENERAL DE CÓMPUTO Y DE TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIÓN, UNAM},
author={Ruano Muñoz, Marco Antonio},
year={2017},
month={Oct}}

Este artículo se desarrolló vinculado con el proyecto PE102718
PAPIME/DGAPA/UNAM.
`,

      image: torBrowserImg,
      tags: {
        en: ["Tor", "Privacy", "Anonymity", "Networks", "Information"],
        es: ["Tor", "Privacidad", "Anonimato", "Redes", "Información"]
    },
  available: true
}];
