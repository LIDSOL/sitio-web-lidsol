export interface Event {
  id: number;
  title: { en: string; es: string };
  event?: string;
  event_url?: string;
  shortDescription?: { en: string; es: string };
  fullDescription?: { en: string; es: string };
  date?: string;
  startDate?: string;
  endDate?: string;
  time?: string;
  location?: { en: string; es: string };
  capacity?: string;
  status?: "upcoming" | "ongoing" | "past";
  image?: string;
  coverImage?: string;
  tags?: string[];
  requirements?: { en: string[]; es: string[] };
  speaker?: {
    name: string;
    role?: { en: string; es: string };
    bio?: { en: string; es: string };
    image?: string;
  };
  speakers?: {
    name: string;
    role?: { en: string; es: string };
    bio?: { en: string; es: string };
    image?: string;
  }[];
  agenda?: { en: string[]; es: string[] };
  authors?: string[];
  all_day?: boolean;
  publishDate?: string;
  url_slides?: string;
  url_video?: string;
  url_code?: string;
  links?: { name: string; url: string }[];
}

export const events: Event[] = [
  {
    id: 1,
    title: {
      en: "FLISoL 2024",
      es: "FLISoL 2024"
    },
    event: "Festival Latinoamericano de Instalación de Software Libre",
    event_url: "https://flisol.info/FLISOL2024/Mexico/CDMX/UNAM",
    shortDescription: {
      en: "El LIDSoL nuevamente los invita a la edición 2024 del Festival Latinoamericano de Software Libre.",
      es: "El LIDSoL nuevamente los invita a la edición 2024 del Festival Latinoamericano de Software Libre."
    },
    fullDescription: {
      en: "## What is FLISoL?\n\nFLISoL is the largest Free Software dissemination event in Latin America. Since 2005, it has been held annually on the 4th Saturday of April.\n\nIts main objective is to promote the use of free software, making known to the general public its philosophy, scope, advances, and development.\n\nThe event is organized by various local Free Software communities and takes place simultaneously with events where free software is installed, free of charge and totally legally, on the computers that attendees bring. Additionally, in parallel, talks, presentations, and workshops are offered on local, national, and Latin American topics related to Free Software.\n\n## Where is it?\n\nThe event will take place on May 8 and 9, 2024, at the North Complex of the Faculty of Engineering at UNAM.\n\n## What will there be?\n\n### Free Software Installation\n\nThe main activity of the event is installing free software on attendees' computers.\n\n### Workshops\n\nThere will be introductory workshops on technologies like Arduino and Git.",
      es: "## ¿Qué es FLISoL?\n\nEl FLISoL es el evento de difusión de Software Libre más grande en Latinoamérica se realiza desde el año 2005 y desde el 2008 se adoptó su realización el 4to sábado de Abril de cada año.\n\nSu principal objetivo es promover el uso del software libre, dando a conocer al público en general su filosofía, alcances, avances y desarrollo.\n\nEl evento es organizado por las diversas comunidades locales de Software Libre y se desarrolla simultáneamente con eventos en los que se instala, de manera gratuita y totalmente legal, software libre en las computadoras que llevan los asistentes. Además, en forma paralela, se ofrecen charlas, ponencias y talleres, sobre temáticas locales, nacionales y latinoamericanas en torno al Software Libre.\n\n## ¿Donde es?\n\nEl evento se llevará a cabo los días 08 y 09 de Mayo de 2024 en el Conjunto Norte de la Facultad de Ingeniería en Ciudad Universitaria.\n\n## ¿Qué habrá?\n\n### Instalación de software libre\n\nLa actividad principal del evento es la instalación de software libre en las computadoras de los asistentes.\n\n### Talleres\n\nLos dos días que dura el evento habrá talleres introductorios a tecnologías como Arduino y Git."
    },
    startDate: "2024-05-08",
    endDate: "2024-05-09",
    location: {
      en: "Conjunto Norte, Facultad de Ingeniería, UNAM",
      es: "Conjunto Norte, Facultad de Ingeniería, UNAM"
    },
    status: "past",
    image: "/events-images/flisol-2024.jpg",
    coverImage: "/events-images/flisol-2024.jpg",
    tags: ["flisol", "open source", "comunidad"],
    all_day: false,
    publishDate: "2024-05-01"
  },
  {
    id: 2,
    title: {
      en: "FLISoL 2023",
      es: "FLISoL 2023"
    },
    event: "Festival Latinoamericano de Instalación de Software Libre",
    event_url: "https://flisol.info/FLISOL2023/Mexico/CDMX/UNAM",
    shortDescription: {
      en: "El LIDSoL nuevamente los invita a la edición 2023 del Festival Latinoamericano de Software Libre.",
      es: "El LIDSoL nuevamente los invita a la edición 2023 del Festival Latinoamericano de Software Libre."
    },
    fullDescription: {
      en: "## What is FLISoL?\n\nFLISoL is the largest Free Software dissemination event in Latin America.\n\n## Where is it?\n\nThe event will take place on April 21, 2023, at the North Complex of the Faculty of Engineering at UNAM.",
      es: "## ¿Qué es FLISoL?\n\nEl FLISoL es el evento de difusión de Software Libre más grande en Latinoamérica.\n\n## ¿Donde es?\n\nEl evento se llevará a cabo el día 21 de abril de 2023 en el Conjunto Norte de la Facultad de Ingeniería en Ciudad Universitaria."
    },
    startDate: "2023-04-21",
    endDate: "2023-04-21",
    location: {
      en: "Conjunto Norte, Facultad de Ingeniería, UNAM",
      es: "Conjunto Norte, Facultad de Ingeniería, UNAM"
    },
    status: "past",
    image: "/events-images/flisol-2023.jpg",
    coverImage: "/events-images/flisol-2023.jpg",
    tags: ["flisol", "open source", "comunidad"],
    all_day: false,
    publishDate: "2023-04-10"
  },
  {
    id: 3,
    title: {
      en: "FLISoL 2022",
      es: "FLISoL 2022"
    },
    event: "Festival Latinoamericano de Instalación de Software Libre",
    event_url: "https://flisol.info/FLISOL2022/Mexico/CDMX/UNAM",
    shortDescription: {
      en: "El LIDSoL nuevamente los invita a la edición 2022 del Festival Latinoamericano de Software Libre.",
      es: "El LIDSoL nuevamente los invita a la edición 2022 del Festival Latinoamericano de Software Libre."
    },
    fullDescription: {
      en: "## What is FLISoL?\n\nFLISoL is the largest Free Software dissemination event in Latin America.\n\n## Where is it?\n\nThe event will take place on April 29, 2022, at the North Complex of the Faculty of Engineering at UNAM.",
      es: "## ¿Qué es FLISoL?\n\nEl FLISoL es el evento de difusión de Software Libre más grande en Latinoamérica.\n\n## ¿Donde es?\n\nEl evento se llevará a cabo el día 29 de abril de 2022 en el Conjunto Norte de la Facultad de Ingeniería en Ciudad Universitaria."
    },
    startDate: "2022-04-29",
    endDate: "2022-04-29",
    location: {
      en: "Conjunto Norte, Facultad de Ingeniería, UNAM",
      es: "Conjunto Norte, Facultad de Ingeniería, UNAM"
    },
    status: "past",
    image: "/events-images/flisol-2022.jpg",
    coverImage: "/events-images/flisol-2022.jpg",
    tags: ["flisol", "open source", "comunidad"],
    all_day: false,
    publishDate: "2022-04-15"
  },
  {
    id: 4,
    title: {
      en: "FLISoL 2020",
      es: "FLISoL 2020"
    },
    event: "Festival Latinoamericano de Instalación de Software Libre",
    event_url: "https://flisol.info/FLISOL2020/Mexico/CDMX/FIUNAM",
    shortDescription: {
      en: "El LIDSoL nuevamente los invita a la edición 2020 del Festival Latinoamericano de Software Libre.",
      es: "El LIDSoL nuevamente los invita a la edición 2020 del Festival Latinoamericano de Software Libre."
    },
    fullDescription: {
      en: "## What is FLISoL?\n\nFLISoL is the largest Free Software dissemination event in Latin America.\n\n## Where is it?\n\nThe event will take place on April 23 and 24, 2020, at the Javier Barros Sierra Auditorium, Faculty of Engineering, UNAM.",
      es: "## ¿Qué es FLISoL?\n\nEl FLISoL es el evento de difusión de Software Libre más grande en Latinoamérica.\n\n## ¿Donde es?\n\nEl evento se llevará a cabo los días 23 y 24 de Abril de 2020 en el Auditorio Javier Barros Sierra de la Facultad de Ingeniería en Ciudad Universitaria."
    },
    startDate: "2020-04-23",
    endDate: "2020-04-24",
    location: {
      en: "Auditorio Javier Barros Sierra, Facultad de Ingeniería, UNAM",
      es: "Auditorio Javier Barros Sierra, Facultad de Ingeniería, UNAM"
    },
    status: "past",
    image: "/events-images/flisol-2020.png",
    coverImage: "/events-images/flisol-2020.png",
    tags: ["flisol", "open source", "comunidad"],
    all_day: false,
    publishDate: "2020-02-18"
  },
  {
    id: 5,
    title: {
      en: "CCOSS 2019",
      es: "CCOSS 2019"
    },
    event: "Cumbre de Contribuidores de Open Source Software 2019",
    event_url: "https://ccoss.org/",
    shortDescription: {
      en: "El propósito del CCOSS es aumentar la cantidad de personas de Latinoamérica que contribuyen a los proyectos de código abierto.",
      es: "El propósito del CCOSS es aumentar la cantidad de personas de Latinoamérica que contribuyen a los proyectos de código abierto."
    },
    fullDescription: {
      en: "### What is CCOSS?\n\nCCOSS is an event aimed at people in the technology community interested in getting involved or contributing to open source projects.\n\nThe purpose of this event is:\n\n- Provide content, mainly in Spanish, about some of the most important open source projects in the world.\n- Provide a space for the community to interact and generate collaboration opportunities.\n- Increase the number of people and organizations in Latin America contributing to open source projects.\n\n### Where is it?\n\nIt will take place on September 14 and 15, 2019, in Guadalajara, Jalisco. The venue will be the Wizeline facilities.",
      es: "### ¿Qué es CCOSS?\n\nCCOSS es un evento dirigido a personas de la comunidad de tecnología interesadas en involucrase o contribuir en proyectos de código abierto.\n\nEl propósito de este evento es:\n\n- Proveer contenido, principalmente en español, sobre algunos de los proyectos open source más importantes en el mundo.\n- Brindar un espacio para que la comunidad interactúe y genere oportunidades de colaboración.\n- Aumentar la cantidad de personas y organizaciones de Latinoamérica que contribuyen a los proyectos de código abierto.\n\n### ¿Donde es?\n\nSe realizará el 14 y 15 de septiembre de 2019 en Guadalajara, Jalisco. La sede será las instalaciones de Wizeline."
    },
    startDate: "2019-09-14",
    endDate: "2019-09-15",
    location: {
      en: "Zapopan, Jalisco",
      es: "Zapopan, Jalisco"
    },
    status: "past",
    image: "/events-images/ccoss-2019.jpg",
    coverImage: "/events-images/ccoss-2019.jpg",
    tags: ["ccoss", "open source", "comunidad"],
    all_day: false,
    publishDate: "2019-09-04"
  },
  {
    id: 6,
    title: {
      en: "Taller para contribuir a Python",
      es: "Taller para contribuir a Python"
    },
    event: "PythonDay",
    event_url: "https://pythondaymx.github.io/",
    shortDescription: {
      en: "Acércate a la comunidad de Python y ayuda al desarrollo del proyecto.",
      es: "Acércate a la comunidad de Python y ayuda al desarrollo del proyecto."
    },
    fullDescription: {
      en: "### About the workshop\n\nThe main objective is to help take that first step to get closer to the Python community, as well as the tools needed to contribute to the project and help its development. This workshop is part of the PythonDay event celebration.\n\n### What is needed to take the workshop?\n- Desire to get closer to the community\n- A laptop (preferably with GNU/Linux)\n\n### What is the cost of the workshop?\nThe workshop is totally free, you just have to register.",
      es: "### ¿De qué es el taller?\n\nEl objetivo principal es ayudar a dar ese primer paso para acercarte a la comunidad de Python, así como a las herramientas necesarias para poder contribuir al proyecto y ayudar a su desarrollo. Este taller forma parte de la celebración del evento PythonDay.\n\n### ¿Qué se necesita para tomar el taller?\n- Ganas de acercarte a la comunidad\n- Una laptop (de preferencia con GNU/Linux)\n\n### ¿Qué costo tiene el taller?\nEl taller es totalmente gratuito, sólo hay que registrarse."
    },
    startDate: "2019-10-19",
    endDate: "2019-10-19",
    location: {
      en: "Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas, UNAM",
      es: "Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas, UNAM"
    },
    status: "past",
    image: "/events-images/cpython-workshop.png",
    coverImage: "/events-images/cpython-workshop.png",
    tags: ["python", "pythonday", "comunidad", "contribuir"],
    all_day: false,
    publishDate: "2019-10-10"
  },
  {
    id: 7,
    title: {
      en: "Salvemos Internet",
      es: "Salvemos Internet"
    },
    shortDescription: {
      en: "La neutralidad de la red en peligro. ¡Necesitamos actuar!",
      es: "La neutralidad de la red en peligro. ¡Necesitamos actuar!"
    },
    fullDescription: {
      en: "The Federal Telecommunications Institute (IFT) has submitted for public consultation a draft Traffic Management Guidelines that could allow:\n\n- Censorship\n- Paid prioritization\n- Invasion of privacy\n\nThe guidelines do not include sufficient transparency and monitoring measures to prevent and sanction companies that violate network neutrality.\n\nIn this talk, Iván Martínez, Incidence Officer at R3D, will tell us about the implications of the IFT's draft on network neutrality.",
      es: "El Instituto Federal de Telecomunicaciones (IFT) ha sometido a consulta pública un anteproyecto de Lineamientos de Gestión de Tráfico que podría permitir:\n\n- Censura\n- Priorización pagada\n- Invasión a la privacidad\n\nLos lineamientos no contemplan medidas suficientes de transparencia y monitoreo para evitar y sancionar que las empresas violen la neutralidad de la red.\n\nEn esta charla Iván Martínez, Oficial de Incidencia en R3D, nos hablará sobre las implicaciones del anteproyecto del IFT en la neutralidad de la red."
    },
    startDate: "2020-02-27",
    endDate: "2020-02-27",
    location: {
      en: "Auditorio Raúl J. Marsal",
      es: "Auditorio Raúl J. Marsal"
    },
    status: "past",
    image: "/events-images/salvemos-internet.png",
    coverImage: "/events-images/salvemos-internet.png",
    tags: ["salvemos el internet", "neutralidad de la red"],
    all_day: false,
    publishDate: "2020-02-26"
  },
  {
    id: 8,
    title: {
      en: "Salvemos El Internet",
      es: "Salvemos El Internet"
    },
    shortDescription: {
      en: "Ayúdanos a salvar el internet",
      es: "Ayúdanos a salvar el internet"
    },
    fullDescription: {
      en: "LIDSOL and UNAM Civic Innovation Lab join the action day so that together we can #SalvemosInternet. Come, learn about the topic, and send your comments about the draft Traffic Management Guidelines to the IFT.\n\nWe will be giving away muffins and cookies to everyone who sends their comment to the IFT. Look for us on the ground floor of Building I of the Engineering Annex on Wednesday, February 26, 2020.",
      es: "El LIDSOL y UNAM Civic Innovation Lab nos sumamos al día de acción para que juntxs #SalvemosInternet. Ven, aprende sobre el tema y envía tus comentarios sobre el anteproyecto de Lineamientos de Gestión de Tráfico al IFT.\n\nEstaremos obsequiando muffins y galletas a todas las personas que envíen su comentario al IFT. Buscanos en la planta baja del Edificio I del Anexo de Ingeniería el miércoles 26 de Febrero de 2020."
    },
    startDate: "2020-02-26",
    endDate: "2020-02-26",
    location: {
      en: "Edificio I, Anexo de Ingeniería, UNAM",
      es: "Edificio I, Anexo de Ingeniería, UNAM"
    },
    status: "past",
    image: "/events-images/salvemos-el-internet.jpg",
    coverImage: "/events-images/salvemos-el-internet.jpg",
    tags: ["salvemos el internet", "neutralidad de la red"],
    all_day: false,
    publishDate: "2020-02-24"
  },
  {
    id: 9,
    title: {
      en: "Seminario De Lisp 2020",
      es: "Seminario De Lisp 2020"
    },
    event_url: "meet.jit.si/SeminarioLISPLidsol",
    shortDescription: {
      en: "Acércate a la programación funcional y a la computación con LISP :)",
      es: "Acércate a la programación funcional y a la computación con LISP :)"
    },
    fullDescription: {
      en: "In this seminar we review chapters from the book *Common Lisp: A Gentle Introduction to Symbolic Computation* and solve various exercises related to the LISP family of languages.",
      es: "En este seminario revisamos capítulos del libro *Common Lisp: A Gentle Introduction to Symbolic Computation* y resolvemos ejercicios varios relacionados con la familia de lenguajes de LISP."
    },
    startDate: "2020-06-03",
    endDate: "2020-12-16",
    status: "past",
    image: "/events-images/seminario-de-lisp-2020.png",
    coverImage: "/events-images/seminario-de-lisp-2020.png",
    tags: ["LISP", "Programación funcional", "Scheme", "Common Lisp"],
    authors: ["telior"],
    url_video: "https://www.youtube.com/watch?v=a0YrCABCOEY",
    all_day: false,
    publishDate: "2020-06-02"
  },
  {
    id: 10,
    title: {
      en: "Túneles y Agente de OpenSSH",
      es: "Túneles y Agente de OpenSSH"
    },
    event: "LPI: OpenExpo Virtual Experience 2020",
    event_url: "https://www.lpi.org/es/articles/lpi-excited-support-openexpo-virtual-experience-2020-0",
    shortDescription: {
      en: "Charla de @tonejito de LIDSoL en OpenExpo Europe 2020",
      es: "Charla de @tonejito de LIDSoL en OpenExpo Europe 2020"
    },
    fullDescription: {
      en: "We will see how SSH authentication works with keys through `IdentityFile`, how to use the SSH agent and share it with several teams in a nested way through `ForwardAgent` to avoid copying SSH keys. We will also see how to expose and reach internal and external services through SSH tunnels with `LocalForward` and `RemoteForward`, and finally we will analyze the SOCKS proxy provided by SSH with the `DynamicForward` option.\n\nThese tools are useful for various purposes such as accessing internal resources when operating in the field, accessing blocked resources using a remote intermediary, data exfiltration after an intrusion, and generally for system administration.",
      es: "Veremos como funciona la autenticación de SSH con llaves por medio de `IdentityFile`, cómo utilizar el _agente de SSH_ y compartirlo con varios equipos de manera anidada por medio de `ForwardAgent` para evitar copiar las llaves SSH. También veremos como exponer y alcanzar servicios internos y externos a través de los _túneles SSH_ con `LocalForward` y `RemoteForward_ y por último analizaremos el _proxy SOCKS_ que provee SSH con la opción `DynamicForward`.\n\nEstas herramientas son útiles para diversos fines como ingresar a recursos internos cuando se opera en el campo, acceder recursos bloqueados utilizando un equipo remoto como intermediario, exfiltrar datos después de una intrusión y en general para la administración de sistemas."
    },
    startDate: "2020-06-20",
    endDate: "2020-06-20",
    status: "past",
    image: "/events-images/lpi-openexpo-2020.png",
    coverImage: "/events-images/lpi-openexpo-2020.png",
    tags: ["lpi", "seguridad", "openssh", "lpic3", "linux"],
    authors: ["tonejito"],
    url_code: "https://github.com/tonejito/lpi-openexpo-2020.git",
    url_slides: "/files/lpi-openexpo-2020-ssh-tonejito.pdf",
    url_video: "https://youtu.be/-8kx_-twFJA",
    all_day: false,
    publishDate: "2020-06-08"
  },
  {
    id: 11,
    title: {
      en: "Las tecnologías de internet en los movimientos sociales",
      es: "Las tecnologías de internet en los movimientos sociales"
    },
    event_url: "https://mx.internetanonima.net/tecnologias-de-internet-en-los-movimientos-sociales",
    shortDescription: {
      en: "May First Movement Technology es una organización de miembros sin fines de lucro que se dedica a la construcción de movimientos mediante el avance del uso estratégico y el control colectivo de la tecnología.",
      es: "May First Movement Technology es una organización de miembros sin fines de lucro que se dedica a la construcción de movimientos mediante el avance del uso estratégico y el control colectivo de la tecnología."
    },
    fullDescription: {
      en: "May First Movement Technology is a member-driven, non-profit organization that builds movements through the strategic advancement and collective control of technology for local struggles, global transformation, and emancipation without borders.",
      es: "May First Movement Technology es una organización de miembros sin fines de lucro que se dedica a la construcción de movimientos mediante el avance del uso estratégico y el control colectivo de la tecnología para las luchas locales, la transformación global y la emancipación sin fronteras."
    },
    startDate: "2019-09-13",
    endDate: "2019-09-13",
    location: {
      en: "Laboratorio Microsoft/UNAM, Edificio Q, 2do Piso, Facultad de Ingeniería",
      es: "Laboratorio Microsoft/UNAM, Edificio Q, 2do Piso, Facultad de Ingeniería"
    },
    status: "past",
    image: "/events-images/tecnologias-de-internet-en-los-movimientos-sociales.png",
    coverImage: "/events-images/tecnologias-de-internet-en-los-movimientos-sociales.png",
    tags: ["priv-anon", "tor", "mayfirst", "pe102718"],
    all_day: false,
    publishDate: "2019-09-04"
  },
  {
    id: 12,
    title: {
      en: "Python: Zero to Hero",
      es: "Python: Zero to Hero"
    },
    event: "Cursos Intersemestrales 2020-1",
    shortDescription: {
      en: "En este curso ahondaremos en los elementos básicos del lenguaje que servirán como cimientos para la elaboración de un proyecto.",
      es: "En este curso ahondaremos en los elementos básicos del lenguaje que servirán como cimientos para la elaboración de un proyecto."
    },
    fullDescription: {
      en: "Python is a versatile language that has shown explosive growth in recent years. This course covers the basic elements of the language that will serve as the foundation for developing a project that demonstrates the development speed, code clarity, and power of the language.\n\n#### Requirements\n- Bring your own computer\n\n#### Registration\n- Register your attendance here",
      es: "Python es un lenguaje versatil y en constante crecimiento. En los últimos años a mostrado una adopción explosiva. En este curso abundaremos en los elementos básicos del lenguaje que servirán como cimientos para la elaboración de un proyecto que muestre la rápidez de desarrollo, claridad del código y poder del lenguaje.\n\n#### Requisitos\n- Traer computadora personal\n\n#### Registro\n- Registra tu asistencia aquí"
    },
    startDate: "2020-01-06",
    endDate: "2020-01-10",
    location: {
      en: "Facultad de Ingeniería, salón por definir",
      es: "Facultad de Ingeniería, salón por definir"
    },
    status: "past",
    tags: ["python", "cursos", "2020-1"],
    authors: ["umoqnier"],
    all_day: false,
    publishDate: "2019-12-01"
  },
  {
    id: 13,
    title: {
      en: "Introducción a Pandoc",
      es: "Introducción a Pandoc"
    },
    event: "Cursos Intersemestrales 2020-1",
    shortDescription: {
      en: "Crea documentos de apariencia profesional y gestiona tus citas y bibliografía sin sufrir usando Pandoc.",
      es: "Crea documentos de apariencia profesional y gestiona tus citas y bibliografía sin sufrir usando Pandoc."
    },
    fullDescription: {
      en: "This course presents an introduction to Pandoc, a file writing and conversion tool that allows writing in a very easy-to-use format and transforming it into LaTeX, Word, Beamer presentations, a web page, among many other formats.\n\nThis course is aimed at students who are beginning or will begin writing their thesis, or who want to give a professional format to their schoolwork without dealing with the tediousness that writing a document using LaTeX can entail.\n\n#### Requirements\n- Bring your own computer\n\n#### Registration\n- Register your attendance here",
      es: "En este curso se presenta una introducción al uso de Pandoc, una herramienta para la escritura y conversión de archivos que permite escribir usando un formato muy sencillo de usar y de transformar en documentos de LaTeX, Word, presentaciones de Beamer, en una página web entre muchos otros formatos.\n\nEste curso esta orientado a alumnos que estan comenzando o van a comenzar a escribir su tesis, o que quieran dar un formato profesional a sus trabajos escolares sin lidar con lo tedioso que puede ser escribir un documento usando LaTeX.\n\n#### Requisitos\n- Traer computadora personal\n\n#### Registro\n- Registra tu asistencia aquí"
    },
    startDate: "2020-01-06",
    endDate: "2020-01-10",
    location: {
      en: "Facultad de Ingeniería, salón por definir",
      es: "Facultad de Ingeniería, salón por definir"
    },
    status: "past",
    tags: ["pandoc", "cursos", "2020-1"],
    authors: ["emilio1625"],
    all_day: false,
    publishDate: "2019-12-01"
  },
  {
    id: 14,
    title: {
      en: "Introducción a las redes neuronales: un enfoque interpretativo",
      es: "Introducción a las redes neuronales: un enfoque interpretativo"
    },
    event: "Cursos Intersemestrales 2020-1",
    shortDescription: {
      en: "El curso presentará las nociones esenciales para comprender el diseño y la implementación de redes neuronales.",
      es: "El curso presentará las nociones esenciales para comprender el diseño y la implementación de redes neuronales."
    },
    fullDescription: {
      en: "The course will present the essential notions to understand the design and implementation of neural networks. For this, basic concepts of machine learning, statistical inference, and optimization will be reviewed. Specific architectures will be reviewed, such as perceptron, FeedForward, Radial Basis Networks, AutoEncoders, and Recurrent Networks. In addition to presenting the theory behind neural networks, we will seek to develop an interpretive awareness from concrete examples, mainly linked to natural language and the problems that participants present.\n\n#### Requirements\n- Basic knowledge of probability, statistics, linear algebra, and calculus\n\n#### Optional\n- It is recommended to have experience using the Python programming language\n- Bring your own computer\n\n#### Registration\n- Register your attendance here",
      es: "El curso presentará las nociones esenciales para comprender el diseño y la implementación de redes neuronales. Para esto, se revisarán conceptos básicos sobre aprendizaje de máquina, inferencia estadística y optimización. Se revisarán arquitecturas específicas, tales como el perceptrón, redes FeedForward, Radial Basis Networks, AutoEncoders y Redes Recurrentes. Además de presentar la teoría que envuelve las redes neuronales, se buscará desarrollar una conciencia interpretativa a partir de ejemplos concretos, principalmente ligados a lenguaje natural y a las problemáticas que los participantes presenten.\n\n#### Requisitos\n- Conocimientos básicos en probabilidad, estadística, álgebra lineal y cálculo\n\n#### Opcional\n- Se recomienda tener experiencia usando el lenguaje de programación Python\n- Traer computadora personal\n\n#### Registro\n- Registra tu asistencia aquí"
    },
    startDate: "2020-01-13",
    endDate: "2020-01-17",
    location: {
      en: "Facultad de Ingeniería, salon por definir",
      es: "Facultad de Ingeniería, salon por definir"
    },
    status: "past",
    tags: ["ia", "ml", "cursos", "2020-1"],
    authors: ["mijangos"],
    all_day: false,
    publishDate: "2019-12-01"
  }
];
