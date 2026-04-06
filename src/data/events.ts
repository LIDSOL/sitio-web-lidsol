export interface Event {
  id: number;
  title: { en: string; es: string };
  summary?: { en: string; es: string };
  description?: { en: string; es: string };
  image?: string;
  coverImage?: string;
  startDate: string;
  endDate?: string;
  time?: string;
  location?: {
    name: { en: string; es: string };
    url?: string;
  };
  tags?: { en: string[]; es: string[] };
  links?: {
    text: { en: string; es: string };
    url: string;
  }[];
  speakers?: {
    memberId?: number;
    name?: string;
    role?: { en: string; es: string };
    bio?: { en: string; es: string };
    image?: string;
  }[];
  requirements?: { en: string[]; es: string[] };
  agenda?: { en: string[]; es: string[] };
  action1?: {
    text: { en: string; es: string };
    url: string;
  };
  action2?: {
    text: { en: string; es: string };
    url: string;
  };
  status?: "upcoming" | "ongoing" | "past";
  publishDate?: string;
}
export const events: Event[] = [
{
    id: 1,
    title: {
      en: "The Internet Technologies in Social Movements",
      es: "Las tecnologías de internet en los movimientos sociales"
    },
  action1: {
    text: {
        en: "Event URL",
        es: "URL de evento" },
    url: "https://mx.internetanonima.net/tecnologias-de-internet-en-los-movimientos-sociales"
  },
    location: {
      name: {
        en: "Microsoft/UNAM Laboratory, Building Q, 2nd Floor, Faculty of Engineering",
        es: "Laboratorio Microsoft/UNAM, Edificio Q, 2do Piso, Facultad de Ingeniería"
      }
    },
    summary: {
      en: "May First Movement Technology is a member‑based nonprofit organization dedicated to building movements by advancing the strategic use and collective control of technology.",
      es: "May First Movement Technology es una organización de miembros sin fines de lucro que se dedica a la construcción de movimientos mediante el avance del uso estratégico y el control colectivo de la tecnología."
    },
    description: {
      en: "May First Movement Technology is a member-driven, non-profit organization that builds movements through the strategic advancement and collective control of technology for local struggles, global transformation, and emancipation without borders.",
      es: "May First Movement Technology es una organización de miembros sin fines de lucro que se dedica a la construcción de movimientos mediante el avance del uso estratégico y el control colectivo de la tecnología para las luchas locales, la transformación global y la emancipación sin fronteras."
    },
    startDate: "2019-09-13",
    endDate: "2019-09-13",
    time: "10:00 — 11:30",
    status: "past",
    image: "/events-images/tecnologias-de-internet-en-los-movimientos-sociales.png",
    coverImage: "events-images/lianhao-qu-LfaN1gswV5c-unsplash.jpg",
    tags: { en: ["Privacy and anonymity", "Tor", "MayFirst", "pe102718"], es: ["Privacidad y anonimato", "Tor", "MayFirst", "pe102718"] },
    publishDate: "2019-09-04"
  },
  {
    id: 2,
    title: {
      en: "CCOSS 2019",
      es: "CCOSS 2019"
    },
  action2: {
    text: {
        en: "Event URL",
        es: "URL de evento" },
    url: "https://ccoss.org/"
  },
    location: {
      name: {
        en: "Wizeline facilities located at Amado Nervo 2200, Col. Jardines del Sol, Zapopan, Jalisco 45050.",
        es: "Instalaciones de Wizeline ubicadas en Amado Nervo 2200, Col. Jardines del Sol, Zapopan, Jal. 45050."
      }
    },
    summary: {
      en: "The purpose of CCOSS is to increase the number of people from Latin America who contribute to open‑source projects.",
      es: "El propósito del CCOSS es aumentar la cantidad de personas de Latinoamérica que contribuyen a los proyectos de código abierto."
    },
    description: {
      en: "This event is not organized by LIDSOL, but members of the lab will be present at the event and we extend an invitation to attend.\n ## What is it\n #### Overview\n CCOSS is an event aimed at people in the tech community who are interested in getting involved or contributing to open‑source projects. The purpose of this event is:\n - Provide content, mainly in Spanish, about some of the most important open‑source projects in the world.\n - Offer a space for the community to interact and generate collaboration opportunities.\n - Increase the number of people and organizations from Latin America that contribute to open‑source projects. \n#### Where is it?\nIt will take place on September 14‑15, 2019 in Guadalajara, Jalisco. The venue will be the Wizeline facilities located at Amado Nervo 2200, Col. Jardines del Sol, Zapopan, Jal. 45050.\n#### Who is it for?\nWe expect between 500 and 600 participants. Most will be professionals, students, and academics in technology fields, but the door is also open to researchers and entrepreneurs interested in making a project available as open source. Additionally, we will have international representatives from the main open‑source projects and foundations.\n### What will there be?\n#### Talks and contribution workshops\nOn the first day we will have plenary sessions, panel discussions, and sessions that provide a general overview of the state of open source, its economic model, licensing options, and general recommendations for contributing.\nThe second day will mainly consist of workshops led by representatives of open‑source projects, focused on teaching participants how to contribute to each project.\n[Check the session schedule.](https://ccoss.org/schedule/)\n#### How do I participate?\nTo participate you can register at https://ccoss-2019.eventbrite.com.mx. The recovery fee is 500 MXN for professionals and 200 MXN for students.\n### Extra information\n#### Who organizes it?\nWe are a group of people interested in putting Latin America on the open‑source map. Meet the [organizing team members](https://ccoss.org/team/).\n#### How can I contact you?\nPlease write to [hola@ccoss.org](mailto:hola@ccoss.org)",
      es: "Este evento no es organizado por LIDSOL, pero integrantes del laboratorio estarán presentes en el evento y extendemos la invitación a asistir. \n ## ¿Qué es \n#### Panorama general \nCCOSS es un evento dirigido a personas de la comunidad de tecnología interesadas en involucrase o contribuir en proyectos de código abierto.\n El propósito de este evento es:\n - Proveer contenido, principalmente en español, sobre algunos de los proyectos open source más importantes en el mundo.\n - Brindar un espacio para que la comunidad interactúe y genere oportunidades de colaboración.\n - Aumentar la cantidad de personas y organizaciones de Latinoamérica que contribuyen a los proyectos de código abierto.\n #### ¿Donde es?\n Se realizará el 14 y 15 de septiembre de 2019 en Guadalajara, Jalisco. La sede será las instalaciones de Wizeline ubicadas en Amado Nervo 2200, Col. Jardines del Sol, Zapopan, Jal. 45050.\n #### ¿A quién está dirigido?\n Esperamos entre 500 y 600 participantes. La mayoría serán profesionistas, estudiantes y académicos en áreas de tecnología pero la puerta también está abierta a investigadores y emprendedores interesados en hacer disponible como open source algún proyecto. Adicionalmente contaremos con representantes internacionales de los principales proyectos y fundaciones de software open source.\n ### ¿Qué habrá?\n #### Conferencias y talleres de contribución\n Durante el primer día tendremos sesiones plenarias, paneles de discusión y sesiones que proveerán un panorama general sobre el estado del open source, su modelo económico, opciones de licenciamiento y recomendaciones generales para contribuir.\n El segundo día consistirá principalmente de talleres dirigidos por representantes de proyectos de código abierto, enfocados en enseñar a los participantes a contribuir a cada proyecto.\n [Consulta la agenda de sesiones.](https://ccoss.org/schedule/)\n #### ¿Cómo participo?\n Para participar puedes registrarte en https://ccoss-2019.eventbrite.com.mx. La cuota de recuperación es de 500 pesos para profesionistas y 200 pesos para estudiantes.\n ### Información extra\n #### ¿Quiénes lo organizan?\n Somos un grupo de personas interesadas en poner a Latinoamérica en el mapa del open source. Conoce a [los integrantes del equipo organizador](https://ccoss.org/team/).\n #### ¿Cómo los contacto?\n Por favor escríbenos a [hola@ccoss.org](mailto:hola@ccoss.org)"
    },
    startDate: "2019-09-14",
    endDate: "2019-09-15",
    time: "09:00 — 20:00",
    status: "past",
    tags: { en: ["ccoss", "open source", "community"], es: ["ccoss", "open source", "comunidad"] },
    image: "/events-images/ccoss-2019.jpg",
  action1: {
    text: {
        en: "Register",
        es: "Registro" },
    url: "https://www.eventbrite.com/e/cumbre-de-contribuidores-de-open-source-software-ccoss-tickets-64676847191?aff=oddtdtcreator"
  },
    publishDate: "2019-09-04"
  },
  {
    id: 3,
    title: {
      en: "Workshop to contribute to Python",
      es: "Taller para contribuir a Python"
    },
  action1: {
    text: {
        en: "Register",
        es: "Registro" },
    url: "https://pythondaymx2019.boletia.com/"
  },
  action2: {
    text: {
        en: "Official PythonDay page",
        es: "Página oficial de PythonDay" },
    url: "https://pythondaymx.github.io/"
  },
    coverImage: "/events-images/cpython-workshop.png",
    location: {
      name: {
        en: "Institute of Research in Applied Mathematics and Systems, UNAM",
        es: "Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas, UNAM"
      }
    },
    summary: {
      en: "Get involved with the Python community and help develop the project.",
      es: "Acércate a la comunidad de Python y ayuda al desarrollo del proyecto."
    },
    description: {
      es: "Te has preguntado la diferencia entre Python, CPython, Jython y Pypy. Se dará una explicación de cuáles son las diferencias entre estos conceptos. Por otro lado, explicaremos quién compone la comunidad de Python, dónde encontrarla y cómo introducirse en el proyecto, así como un vistazo general a la guía de desarrolladores.\n### ¿De qué es el taller?\nEl objetivo principal es ayudar a dar ese primer paso para acercarte a la comunidad de Python, así como  a las herramientas necesarias para poder contribuir al proyecto y ayudar a su desarrollo. Este taller forma parte de la celebración del evento PythonDay.\n### ¿Qué se necesita para tomar el taller?\n- Ganas de acercarte a la comunidad\n- Una laptop (de preferencia con GNU/Linux)\n### ¿Qué costo tiene el taller?\nEl taller es totalmente gratuito, sólo hay que [registrarse](https://pythondaymx2019.boletia.com/).",
      en: "You may have wondered about the difference between Python, CPython, Jython, and PyPy. An explanation will be given of the distinctions among these concepts. Additionally, we will explain who makes up the Python community, where to find it, and how to get involved in the project, as well as a general overview of the developer guide.\n### What is the workshop about?\nThe main goal is to help you take that first step toward the Python community, as well as to provide the necessary tools to contribute to the project and aid its development. This workshop is part of the celebration of the PythonDay event.\n### What do you need to attend the workshop?\n- A desire to engage with the community\n- A laptop (preferably running GNU/Linux)\n### What is the cost of the workshop?\nThe workshop is completely free; you just need to [register](https://pythondaymx2019.boletia.com/)."
    },
    startDate: "2019-10-19",
    endDate: "2019-10-19",
    time: "10:00 - 13:00",
    status: "past",
    speakers: [
      { memberId: 16 },
      { memberId: 9 }
    ],
    tags: { en: ["python", "pythonday", "community", "contribute"], es: ["python", "pythonday", "comunidad", "contribuir"] },
    publishDate: "2019-10-10"
  },
  {
    id: 4,
    title: {
      en: "Introduction to Pandoc",
      es: "Introducción a Pandoc"
    },
    location: {
      name: {
        en: "Faculty of Engineering, classroom to be determined.",
        es: "Facultad de Ingeniería, salón por definir"
      }
    },
    summary: {
      en: "Create professional‑looking documents and manage your citations and bibliography without hassle using Pandoc.",
      es: "Crea documentos de apariencia profesional y gestiona tus citas y bibliografía sin sufrir usando Pandoc."
    },
    description: {
      en: "This course provides an introduction to using Pandoc, a tool for writing and converting files that lets you compose in a very simple format and transform it into LaTeX documents, Word files, Beamer presentations, a web page, and many other formats.\nThe course is aimed at students who are starting—or about to start—writing their thesis, or who want to give a professional look to their school projects without dealing with the tediousness of writing a document in LaTeX.",
      es: "En este curso se presenta una introducción al uso de Pandoc, una herramienta para la escritura y conversión de archivos que permite escribir usando un formato muy sencillo de usar y de transformar en documentos de LATEX, Word, presentaciones de Beamer, en una página web entre muchos otros formatos.\nEste curso esta orientado a alumnos que estan comenzando o van a comenzar a escribir su tesis, o que quieran dar un formato profesional a sus trabajos escolares sin lidiar con lo tedioso que puede ser escribir un documento usando LATEX."
    },
    startDate: "2020-01-06",
    endDate: "2020-01-10",
    time: "12:00 - 14:00",
    publishDate: "2019-12-01",
    speakers: [
      { memberId: 10 }
    ],
    tags: { en: ["Pandoc", "Intersemester Courses", "Documents"], es: ["Pandoc", "Cursos intersemestrales", "Documentos"] },
    requirements: {
      en: ["Bring your own computer"],
      es: ["Traer computadora personal"]
    },
  action1: {
    text: {
        en: "Register",
        es: "Registro" },
    url: "https://forms.gle/DfJdZ9bEJQjAHn5X6"
  },
  action2: {
    text: {
        en: "Register",
        es: "Registro" },
    url: "https://forms.gle/DfJdZ9bEJQjAHn5X6"
  },
    coverImage: "events-images/pandoc-cartoon.svgz",
    status: "past",
  },
  {
    id: 5,
    title: {
      en: "Python: Zero to Hero",
      es: "Python: Zero to Hero"
    },
    location: {
      name: {
        en: "Faculty of Engineering, classroom to be determined",
        es: "Facultad de Ingeniería, salon por definir"
      }
    },
    summary: {
      en: "In this course we will delve into the basic elements of the language that will serve as foundations for developing a project.",
      es: "En este curso ahondaremos en los elementos básicos del lenguaje que servirán como cimientos para la elaboración de un proyecto."
    },
    description: {
      en: "Python is a versatile language that has shown explosive growth in recent years. This course covers the basic elements of the language that will serve as the foundation for developing a project that demonstrates the development speed, code clarity, and power of the language.",
      es: "Python es un lenguaje versatil y en constante crecimiento. En los últimos años a mostrado una adopción explosiva. En este curso abundaremos en los elementos básicos del lenguaje que servirán como cimientos para la elaboración de un proyecto que muestre la rápidez de desarrollo, claridad del código y poder del lenguaje."
    },
    startDate: "2020-01-06",
    endDate: "2020-01-10",
    time: "10:00 - 12:00",
    speakers: [
      { memberId: 10 }
    ],
    tags: { en: ["Python", "Courses Intersemester", "Programming"], es: ["Python", "Cursos intersemestrales", "Programación"] },
    requirements: {
      en: ["Bring your own computer"],
      es: ["Traer computadora personal"]
    },
    publishDate: "2019-12-01",
    status: "past",
    coverImage: "events-images/rubaitul-azad-ZIPFteu-R8k-unsplash.jpg",
  action1: {
    text: {
        en: "Register",
        es: "Registro" },
    url: "https://forms.gle/CUDRfU4cF3MgTfub8"
  },
  action2: {
    text: {
        en: "Register",
        es: "Registro" },
    url: "https://forms.gle/CUDRfU4cF3MgTfub8"
  },
  },
  {
    id: 6,
    title: {
      en: "Introduction to Neural Networks: An Interpretive Approach",
      es: "Introducción a las redes neuronales: un enfoque interpretativo"
    },
    location: {
      name: {
        en: "Faculty of Engineering, classroom to be determined",
        es: "Facultad de Ingeniería, salon por definir"
      }
    },
    summary: {
      en: "The course will present the essential concepts needed to understand the design and implementation of neural networks.",
      es: "El curso presentará las nociones esenciales para comprender el diseño y la implementación de redes neuronales."
    },
    description: {
      en: "The course will present the essential concepts needed to understand the design and implementation of neural networks. To this end, basic topics in machine learning, statistical inference, and optimization will be reviewed. Specific architectures such as the perceptron, feed‑forward networks, radial‑basis networks, autoencoders, and recurrent networks will be examined. In addition to covering the theory behind neural networks, the course will aim to develop an interpretive awareness through concrete examples, primarily related to natural‑language tasks and the problems participants bring forward.",
      es: "El curso presentará las nociones esenciales para comprender el diseño y la implementación de redes neuronales. Para esto, se revisarán conceptos básicos sobre aprendizaje de máquina, inferencia estadística y optimización. Se revisarán arquitecturas específicas, tales como el perceptrón, redes FeedForward, Radial Basis Networks, AutoEncoders y Redes Recurrentes. Además de presentar la teoría que envuelve las redes neuronales, se buscará desarrollar una conciencia interpretativa a partir de ejemplos concretos, principalmente ligados a lenguaje natural y a las problemáticas que los participantes presenten."
    },
    startDate: "2020-01-13",
    endDate: "2020-01-17",
    time: "10:00 - 13:00",
    tags:{
      en: ["Artificial Intelligence", "Machine Learning", "Intersemester Courses"],
      es: ["Inteligencia Artificial", "ML", "Cursos Intersemestrales"]},
    requirements: {
      en: [
        "Basic knowledge of probability, statistics, linear algebra, and calculus",
        "It is recommended to have experience using the Python programming language (optional)",
        "Bring your own computer (optional)"
      ],
      es: [
        "Conocimientos básicos en probabilidad, estadística, álgebra lineal y cálculo",
        "Se recomienda tener experiencia usando el lenguaje de programación Python (opcional)",
        "Traer computadora personal (opcional)"
      ]
    },
    action1: {
    text: {
        en: "Register",
        es: "Registro" },
    url: "https://forms.gle/CUDRfU4cF3MgTfub8"
    },
    action2: {
    text: {
        en: "Register",
        es: "Registro" },
    url: "https://forms.gle/CUDRfU4cF3MgTfub8"
    },
    coverImage: "events-images/conny-schneider-xuTJZ7uD7PI-unsplash.jpg",
    status: "past",
    publishDate: "2019-12-01"
  },
  {
    id: 7,
    title:{
        es: "Salvemos Internet",
        en: "Save the Internet"
    },
    summary: {
        en: "Net neutrality is in danger. We need to act!",
        es: "La neutralidad de la red en peligro. ¡Necesitamos actuar!"
    },
    description: {
        en: "The Federal Institute of Telecommunications (IFT) has opened a public consultation on a draft Traffic Management Guidelines that could allow:\n- Censorship\n- Paid prioritization\n- Invasion of privacy\n\nThe guidelines do not include sufficient transparency and monitoring measures to prevent and sanction companies that violate net neutrality.\nIván Martínez (Incident Officer at R3D) will give a talk on the implications of the IFT draft for network neutrality.\nIn addition, LIDSOL and the UNAM Civic Innovation Lab will be giving away muffins and cookies to everyone who submits a comment to the IFT.",
        es: "El instituto Federal de Telecomunicaciones (IFT) ha sometido a consulta pública un anteproyecto de Lineamientos de Gestión de Tráfico que podría permitir:\n- Censura\n- Priorización pagada\n- Invasión a la privacidad\n\nLos lineamientos no contemplan medidas suficientes de transparencia y monitoreo para evitar y sancionar que las empresas violen la neutralidad de internet.\nIván Martínez (Oficial de Incidencia en R3D) dará una charla sobre las implicaciones del anteproyecto del IFT en la nautralidad de la red.\nAdemás, LIDSOL y UNAM Civic Innovation Lab estará obsequiando muffins y galletas a todas las personas que envíen su comentario al IFT."
    },
    location: {
      name: {
        en: "Auditorio Raúl J. Marsal",
        es: "Auditorio Raúl J. Marsal"
      }
    },
    startDate: "2020-02-26",
    endDate: "2020-02-27",
    time: "08:00 - 20:00",
    status: "past",
    coverImage: "/events-images/salvemos-internet.png",
    tags: { en: ["save the internet", "net neutrality"], es: ["salvemos el internet", "neutralidad de la red"] },
    links: [
      {
        text: { en: "R3D", es: "R3D" },
        url: "https://r3d.mx/"
      }
    ],
    publishDate: "2020-02-26"
  },
  {
    id: 8,
    title: {
      en: "FLISoL 2020: Latin American Free‑Software Installation Festival",
      es: "FLISoL 2020: Festival Latinoamericano de Instalación de Software Libre"
    },
    links: [
      {
        text: { en: "Official FLISoL page", es: "Página oficial de FLISoL" },
        url: "https://flisol.info/FLISOL2020/Mexico/CDMX/FIUNAM"
      }
    ],
    location: {
      name: {
        en: "Javier Barros Sierra Auditorium, Faculty of Engineering, UNAM.",
        es: "Auditorio Javier Barros Sierra, Facultad de Ingeniería, UNAM"
      }
    },
    startDate: "2020-04-23",
    endDate: "2020-04-24",
    time: "11:00 - 18:00",
    publishDate: "2020-02-18",
    summary: {
      en: "LIDSoL again invites you to the 2020 edition of the Latin American Free‑Software Festival.",
      es: "El LIDSoL nuevamente los invita a la edición 2020 del Festival Latinoamericano de Software Libre."
    },
    coverImage: "/events-images/flisol-2020.png",
    description: {
        en: "## What is FLISoL?\n\nFLISoL is the largest Free‑Software dissemination event in Latin America. It has been held since 2005, and since 2008 it takes place on the fourth Saturday of April each year. Its main goal is to promote the use of free software by introducing the general public to its philosophy, scope, advances, and development. The event is organized by various local free‑software communities and runs in parallel with activities where free software is installed—completely free and legal—on attendees’ computers. Additionally, parallel talks, presentations, and workshops cover local, national, and Latin‑American topics related to free software across its full spectrum: artistic, academic, business, and social.\n\n## Where is it?\n\nThe event will take place on April 23 and 24, 2020, at the Javier Barros Sierra Auditorium, Faculty of Engineering, UNAM, Ciudad Universitaria.\n\n## Who is it for?\n\nFLISoL is open to all audiences: students, academics, entrepreneurs, workers, public officials, enthusiasts, and even people with limited computer knowledge who want to discover new ways to use their machines.\n\n## What will happen?\n\n### Free‑software installation\nThe main activity is the installation of free software on attendees’ computers. If you want to try free software or install a free operating system, bring your laptop and we’ll help you install it.\n\n### Conferences\nDuring the two‑day event there will be talks about adopting and using free software in industry, government, and academia.\n\n### Competitions\nA programming contest is also planned; more details will be announced later.\n\n## How can you participate?\n\n### Speaker\nIf you would like to give a talk about free software during the event, register your presentation at [this link](https://www.papercall.io/flisol-fiunam).\n\n### Installer\nIf you have experience with free software and know how to install it on different platforms, attend the event and help others learn to use free software.\n\n### Attendee\nEntry is open to the public and free of charge. Bring your equipment if you want to try or install free software—we’ll assist you. If you plan to test a new operating system, be sure to back up your data beforehand.",
        es: "## ¿Qué es FLISoL?\n El FLISoL es el evento de difusión de Software Libre más grande en Latinoamérica se realiza desde el año 2005 y desde el 2008 se adoptó su realización el 4to sábado de Abril de cada año.\nSu principal objetivo es promover el uso del software libre, dando a conocer al público en general su filosofía, alcances, avances y desarrollo. El evento es organizado por las diversas comunidades locales de Software Libre y se desarrolla simultáneamente con eventos en los que se instala, de manera gratuita y totalmente legal, software libre en las computadoras que llevan los asistentes. Además, en forma paralela, se ofrecen charlas, ponencias y talleres, sobre temáticas locales, nacionales y latinoamericanas en torno al Software Libre, en toda su gama de expresiones: artística, académica, empresarial y social.\n## ¿Donde es?\n El evento se llevará a cabo los días 23 y 24 de Abril de 2020 en la Facultad de Ingeniería en Ciudad Universitaria, en el Auditorio Javier Barros Sierra.\n## ¿A quién está dirigido?\nEl FLISoL esta dirigido a todo tipo de público: estudiantes, académicos, empresarios, trabajadores, funcionarios públicos, entusiastas y aun personas que no poseen mucho conocimiento informático y desean encontrar nuevas formas de usar sus computadoras.\n## ¿Qué habrá?\n### Instalación de software libre\nLa actividad principal del evento es la instalación de software libre en las computadoras de los asistentes, así que si deseas probar algún software libre o instalar un sistema operativo libre puedes traer tu computadora y nosotros te ayudaremos a instalarlo.\n### Conferencias\nLos dos días que dura el evento habrán conferencias relacionadas con la adopción y uso del software libre en la industria, el gobierno y la academia.\n### Concursos\nTambién tenemos planeado un concurso de programación, más adelante publicaremos más información al respecto.\n## ¿Cómo participo?\n### Conferencista\nSi te gustaría dar una charla sobre software libre durante el evento puedes registrar una charla en [este enlace](https://www.papercall.io/flisol-fiunam).\n### Instalador\nSi ya has usado software libre y sabes cómo instalar software en distintas plataformas, puedes asistir al evento y ayudar a otra persona a aprender a usarsoftware libre.\n### Asistente\nLa entrada al evento esta abierta a todo público y es gratuita. Si deseas probar o instalar software libre trae tu equipo y nosotros te ayudamos. Si deseas probar un nuevo sistema operativo realiza antes un respaldo de tu información."
    },
    status: "past",
    tags: { en: ["flisol", "open source", "community"], es: ["flisol", "open source", "comunidad"] },
  },
  {
    id: 9,
    title: {
      en: "Lisp Seminar 2020",
      es: "Seminario De Lisp 2020"
    },
    summary: {
      en: "Get into functional programming and computing with LISP :)",
      es: "Acércate a la programación funcional y a la computación con LISP :)"
    },
    description: {
      en: "In this seminar we review chapters from the book *Common Lisp: A Gentle Introduction to Symbolic Computation* and solve various exercises related to the LISP family of languages.",
      es: "En este seminario revisamos capítulos del libro *Common Lisp: A Gentle Introduction to Symbolic Computation* y resolvemos ejercicios varios relacionados con la familia de lenguajes de LISP."
    },
    action1: {
    text: {
        en: "Seminar from jit.si",
        es: "Seminario desde jit.si" },
    url: "meet.jit.si/SeminarioLISPLidsol"
    },
    action2: {
    text: {
        en: "Seminar from jit.si",
        es: "Seminario desde jit.si" },
    url: "meet.jit.si/SeminarioLISPLidsol"
    },
    startDate: "2020-06-03",
    endDate: "2020-12-16",
    time: "19:00 - 21:00",
    publishDate: "2020-06-02",
    speakers: [
      { memberId: 11 }
    ],
    tags: { en: ["LISP", "Functional Programming", "Scheme", "Common Lisp"], es: ["LISP", "Programación funcional", "Scheme", "Common Lisp"] },
    status: "past",
    image: "/events-images/seminario-de-lisp-2020.png",
    links: [
      {
        text: { en: "Opening", es: "Opening" },
        url: "https://www.youtube.com/watch?v=a0YrCABCOEY"
      }
    ],
  },
  {
    id: 10,
    title: {
      en: "Tunnels and OpenSSH Agent",
      es: "Túneles y Agente de OpenSSH"
    },
    summary: {
      en: "Talk by @tonejito from LIDSoL at OpenExpo Europe 2020",
      es: "Charla de @tonejito de LIDSoL en OpenExpo Europe 2020"
    },
    description: {
      en: "We will see how SSH authentication works with keys through `IdentityFile`, how to use the SSH agent and share it with several teams in a nested way through `ForwardAgent` to avoid copying SSH keys. We will also see how to expose and reach internal and external services through SSH tunnels with `LocalForward` and `RemoteForward`, and finally we will analyze the SOCKS proxy provided by SSH with the `DynamicForward` option.\n\nThese tools are useful for various purposes such as accessing internal resources when operating in the field, accessing blocked resources using a remote intermediary, data exfiltration after an intrusion, and generally for system administration.",
      es: "Veremos como funciona la autenticación de SSH con llaves por medio de `IdentityFile`, cómo utilizar el _agente de SSH_ y compartirlo con varios equipos de manera anidada por medio de `ForwardAgent` para evitar copiar las llaves SSH. También veremos como exponer y alcanzar servicios internos y externos a través de los _túneles SSH_ con `LocalForward` y `RemoteForward y por último analizaremos el proxy SOCKS que provee SSH con la opción DynamicForward.\n\nEstas herramientas son útiles para diversos fines como ingresar a recursos internos cuando se opera en el campo, acceder recursos bloqueados utilizando un equipo remoto como intermediario, exfiltrar datos después de una intrusión y en general para la administración de sistemas."
    },
    startDate: "2020-06-20",
    endDate: "2020-06-20",
    time: "12:00 - 12:45",
    speakers: [
      { memberId: 2 }
    ],
    tags: { en: ["lpi", "security", "openssh", "lpic3", "linux"], es: ["lpi", "seguridad", "openssh", "lpic3", "linux"] },
    status: "past",
    image: "/events-images/lpi-openexpo-2020.png",
    action1: {
    text: {
        en: "Event url",
        es: "URL del evento" },
    url: "https://www.lpi.org/es/articles/lpi-excited-support-openexpo-virtual-experience-2020-0"
    },
    links: [
      {
        text: { en: "Video", es: "Video" },
        url: "https://youtu.be/-8kx_-twFJA"
      },
      {
        text: { en: "Slides", es: "Diapositivas" },
        url: "/files/lpi-openexpo-2020-ssh-tonejito.pdf"
      },
      {
        text: { en: "Code repository", es: "Repositorio de código" },
        url: "https://github.com/tonejito/lpi-openexpo-2020.git"
      },
      {
        text: { en: "LPI agenda", es: "Agenda de LPI" },
        url: "https://www.lpi.org/es/articles/lpi-excited-support-openexpo-virtual-experience-2020-0/"
      },
      {
        text: { en: "OpenExpo agenda", es: "Agenda de OpenExpo" },
        url: "https://openexpoeurope.com/es/virtual-experience/#agenda"
      },
    ],
    publishDate: "2020-06-08"
  },
  {
    id: 11,
    title: {
      en: "FLISoL 2022",
      es: "FLISoL 2022"
    },
    links: [
      {
        text: { en: "Official FLISoL page", es: "Página oficial de FLISoL" },
        url: "https://flisol.info/FLISOL2022/Mexico/CDMX/UNAM"
      }
    ],
    action1: {
    text: {
        en: "Event url",
        es: "URL del evento" },
    url: "https://flisol.info/FLISOL2022/Mexico/CDMX/UNAM"
    },
    location: {
      name: {
        en: "Official FLISoL page",
        es: "Página oficial de FLISoL"
      }
    },
    startDate: "2022-04-29",
    endDate: "2022-04-29",
    time: "10:00 - 17:00",
    summary: {
      en: "El LIDSoL nuevamente los invita a la edición 2022 del Festival Latinoamericano de Software Libre.",
      es: "El LIDSoL nuevamente los invita a la edición 2022 del Festival Latinoamericano de Software Libre."
    },
    tags: { en: ["flisol", "open source", "community"], es: ["flisol", "open source", "comunidad"] },
    description: {
          en: "## What is FLISoL?\nFLISoL is the largest Free Software outreach event in Latin America. It has been held since 2005, and since 2008 it has been scheduled for the fourth Saturday of April each year.\nIts main goal is to promote the use of free software, introducing the general public to its philosophy, scope, advances, and development.\nThe event is organized by various local Free Software communities and runs simultaneously with activities where free software is installed—free of charge and entirely legally—on the computers attendees bring. In parallel, talks, presentations, and workshops are offered on local, national, and Latin American topics related to Free Software, covering its full range of expressions: artistic, academic, business, and social.\n## Where is it?\nThe event will take place on April 29, 2022, at the Conjunto Norte of the Faculty of Engineering in Ciudad Universitaria.\n## Who is it for?\nFLISoL is aimed at all audiences: students, academics, entrepreneurs, workers, public officials, enthusiasts, and even people with little computer knowledge who want to discover new ways to use their computers.\n## What will happen?\n### Free‑software installation\nThe main activity of the event is installing free software on attendees' computers, so if you want to try free software or install a free operating system you can bring your computer and we will help you install it.\n### Conferences\nDuring the two days of the event there will be conferences related to the adoption and use of free software in industry, government, and academia.\n## How can I participate?\n### Speaker\nIf you would like to give a talk about free software during the event, you can register a talk on [our Telegram channel](https://t.me/LIDSoL).\n### Installer\nIf you have already used free software and know how to install software on different platforms, you can attend the event and help others learn to use free software.\n### Attendee\nEntry to the event is open to the public and is free of charge.\nIf you want to try or install free software, bring your device and we will help you. If you wish to try a new operating system, make a backup of your data beforehand.",
          es: "## ¿Qué es FLISoL?\nEl FLISoL es el evento de difusión de Software Libre más grande en Latinoamérica se realiza desde el año 2005 y desde el 2008 se adoptó su realización el 4to sábado de Abril de cada año.\nSu principal objetivo es promover el uso del software libre, dando a conocer al público en general su filosofía, alcances, avances y desarrollo.\nEl evento es organizado por las diversas comunidades locales de Software Libre y se desarrolla simultáneamente con eventos en los que se instala, de manera gratuita y totalmente legal, software libre en las computadoras que llevan los asistentes. Además, en forma paralela, se ofrecen charlas, ponencias y talleres, sobre temáticas locales, nacionales y latinoamericanas en torno al Software Libre, en toda su gama de expresiones: artística, académica, empresarial y social.\n## ¿Donde es?\nEl evento se llevará a cabo el día 29 de abril de 2022 en el Conjunto Norte de la Facultad de Ingeniería en Ciudad Universitaria.\n## ¿A quién está dirigido?\nEl FLISoL esta dirigido a todo tipo de público: estudiantes, académicos, empresarios, trabajadores, funcionarios públicos, entusiastas y aun personas que no poseen mucho conocimiento informático y desean encontrar nuevas formas de usar sus computadoras.\n## ¿Qué habrá?\n### Instalación de software libre\nLa actividad principal del evento es la instalación de software libre en las computadoras de los asistentes, así que si deseas probar algún software libre o instalar un sistema operativo libre puedes traer tu computadora y nosotros te ayudaremos a instalarlo.\n### Conferencias\nLos dos días que dura el evento habrán conferencias relacionadas con la adopción y uso del software libre en la industria, el gobierno y la academia.\n## ¿Cómo participo?\n### Conferencista\nSi te gustaría dar una charla sobre software libre durante el evento puedes registrar una charla en [nuestro canal del Telegram](https://t.me/LIDSoL)\n### Instalador\nSi ya has usado software libre y sabes cómo instalar software en distintas plataformas, puedes asistir al evento y ayudar a otra persona a aprender a usar software libre.\n### Asistente\nLa entrada al evento esta abierta a todo público y es gratuita.\nSi deseas probar o instalar software libre trae tu equipo y nosotros te ayudamos. Si deseas probar un nuevo sistema operativo realiza antes un respaldo de tu información."
    },
    status: "past",
    image: "/events-images/FLISoL-2022-talks.jpg",
    coverImage: "/events-images/FLISoL-2022.jpg",
    publishDate: "2022-04-15"
  },
  {
    id: 12,
    title: {
      en: "FLISoL 2023",
      es: "FLISoL 2023"
    },
    location: {
      name: {
        en: "Conjunto Norte, Facultad de Ingeniería, UNAM",
        es: "Conjunto Norte, Facultad de Ingeniería, UNAM"
      }
    },
    startDate: "2023-04-21",
    endDate: "2023-04-26",
    time: "10:00 - 17:00",
    publishDate: "2023-04-10",
     summary: {
      en: "LIDSoL again invites you to the 2023 edition of the Latin American Free‑Software Festival.",
      es: "El LIDSoL nuevamente los invita a la edición 2023 del Festival Latinoamericano de Software Libre."
    },
    description: {
      en: "## What is FLISoL?\nFLISoL is the largest free‑software outreach event in Latin America. It has been held since 2005, and since 2008 it takes place on the fourth Saturday of April each year. Its main goal is to promote the use of free software by introducing the general public to its philosophy, scope, advances, and development. The event is organized by various local free‑software communities and runs in parallel with activities where free software is installed—completely free and legal—on the attendees’ computers. In addition, parallel talks, presentations, and workshops cover local, national, and Latin‑American topics related to free software across its full range of expression: artistic, academic, business, and social.\n## Where is it?\nThe event will take place on April 21, 2023, at the North Campus of the Faculty of Engineering, Ciudad Universitaria.\n## Who is it for?\nFLISoL is aimed at all audiences: students, academics, entrepreneurs, workers, public officials, enthusiasts, and even people with limited computer knowledge who want to discover new ways to use their machines.\n## What will happen?\n### Free‑software installation\nThe main activity of the event is the installation of free software on attendees’ computers, so if you want to try free software or install a free operating system, bring your computer and we’ll help you install it.\n### Conferences\nDuring the two‑day event there will be talks related to the adoption and use of free software in industry, government, and academia.\n## How can you participate?\n### Speaker\nIf you would like to give a talk about free software during the event, register your presentation on [our Telegram channel](https://t.me/LIDSoL).\n### Installer\nIf you have experience with free software and know how to install it on different platforms, attend the event and help someone else learn to use free software.\n### Attendee\nEntry is open to the public and free of charge. Bring your equipment if you want to try or install free software—we’ll assist you. If you plan to test a new operating system, be sure to back up your data beforehand.\n## Talks\n![Talks](/events-images/FLISoL-2023-talks.jpg)\n## Workshops\n![Workshop](/events-images/FLISoL-2023-workshops.jpg)",
      es: "## ¿Qué es FLISoL?\nEl FLISoL es el evento de difusión de Software Libre más grande en Latinoamérica se realiza desde el año 2005 y desde el 2008 se adoptó su realización el 4to sábado de Abril de cada año.\nSu principal objetivo es promover el uso del software libre, dando a conocer al público en general su filosofía, alcances, avances y desarrollo.\nEl evento es organizado por las diversas comunidades locales de Software Libre y se desarrolla simultáneamente con eventos en los que se instala, de manera gratuita y totalmente legal, software libre en las computadoras que llevan los asistentes. Además, en forma paralela, se ofrecen charlas, ponencias y talleres, sobre temáticas locales, nacionales y latinoamericanas en torno al Software Libre, en toda su gama de expresiones: artística, académica, empresarial y social.\n## ¿Donde es?\nEl evento se llevará a cabo el día 21 de abril de 2023 en el Conjunto Norte de la Facultad de Ingeniería en Ciudad Universitaria.\n## ¿A quién está dirigido?\nEl FLISoL esta dirigido a todo tipo de público: estudiantes, académicos, empresarios, trabajadores, funcionarios públicos, entusiastas y aun personas que no poseen mucho conocimiento informático y desean encontrar nuevas formas de usar sus computadoras.\n## ¿Qué habrá?\n### Instalación de software libre\nLa actividad principal del evento es la instalación de software libre en las computadoras de los asistentes, así que si deseas probar algún software libre o instalar un sistema operativo libre puedes traer tu computadora y nosotros te ayudaremos a instalarlo.\n### Conferencias\nLos dos días que dura el evento habrán conferencias relacionadas con la adopción y uso del software libre en la industria, el gobierno y la academia.\n## ¿Cómo participo?\n### Conferencista\nSi te gustaría dar una charla sobre software libre durante el evento puedes registrar una charla en [nuestro canal del Telegran](https://t.me/LIDSoL)\n### Instalador\nSi ya has usado software libre y sabes cómo instalar software en distintas plataformas, puedes asistir al evento y ayudar a otra persona a aprender a usar software libre.\n### Asistente\nLa entrada al evento esta abierta a todo público y es gratuita.\nSi deseas probar o instalar software libre trae tu equipo y nosotros te ayudamos.\nSi deseas probar un nuevo sistema operativo realiza antes un respaldo de tu información. \n## Charlas \n![Conferencias](/events-images/FLISoL-2023-talks.jpg)\n## Talleres\n![Talleres](/events-images/FLISoL-2023-workshops.jpg)"
    },
    tags: { en: ["flisol", "open source", "community"], es: ["flisol", "open source", "comunidad"] },
    status: "past",
    image: "/events-images/flisol-2023.jpg",
    action1: {
    text: {
        en: "Conference streaming",
        es: "Transmisión de conferencias" },
    url: "https:jitsi.debian.social/flisol_fi_unam"
    },
    action2: {
    text: {
        en: "Conference streaming",
        es: "Transmisión de conferencias" },
    url: "https:jitsi.debian.social/flisol_fi_unam"
    },
    links: [
      {
        text: { en: "Official FLISoL page", es: "Página oficial de FLISoL" },
        url: "https://flisol.info/FLISOL2023/Mexico/CDMX/UNAM"
      }
    ],
  },
  {
    id: 13,
    title: {
      en: "FLISoL 2024",
      es: "FLISoL 2024"
    },
    location: {
      name: {
        en: "Conjunto Norte, Facultad de Ingeniería, UNAM",
        es: "Conjunto Norte, Facultad de Ingeniería, UNAM"
      }
    },
    startDate: "2024-05-08",
    endDate: "2024-05-09",
    time: "10:00 - 16:00 hrs",
    summary: {
      en: "LIDSoL invites you again to the 2024 edition of the Latin American Free Software Festival.",
      es: "El LIDSoL nuevamente los invita a la edición 2024 del Festival Latinoamericano de Software Libre."
    },
    tags: { en: ["flisol", "open source", "community"], es: ["flisol", "open source", "comunidad"] },
    image: "/events-images/flisol-2024.jpg",
    description: {
      en: "## What is FLISoL?\nFLISoL is the largest free‑software outreach event in Latin America. It has been held since 2005, and since 2008 it takes place on the fourth Saturday of April each year. Its main goal is to promote the use of free software by introducing the general public to its philosophy, scope, advances, and development. The event is organized by various local free‑software communities and runs in parallel with activities where free software is installed—completely free and legal—on the attendees’ computers. In addition, parallel talks, presentations, and workshops cover local, national, and Latin‑American topics related to free software across its full range of expression: artistic, academic, business, and social.\n## Where is it?\nThe event will take place on May 8 and 9, 2024, at the North Campus of the Faculty of Engineering, Ciudad Universitaria.\n## Who is it for?\nFLISoL is aimed at all audiences: students, academics, entrepreneurs, workers, public officials, enthusiasts, and even people with limited computer knowledge who want to discover new ways to use their machines.\n## What will happen?\n### Free‑software installation\nThe main activity of the event is the installation of free software on attendees’ computers, so if you want to try free software or install a free operating system, bring your computer and we’ll help you install it.\n### Conferences\nDuring the two‑day event there will be talks related to the adoption and use of free software in industry, government, and academia.\n## How can you participate?\n### Speaker\nIf you would like to give a talk about free software during the event, register your presentation on [our Telegram channel](https://t.me/LIDSoL).\n### Installer\nIf you have experience with free software and know how to install it on different platforms, attend the event and help someone else learn to use free software.\n### Attendee\nEntry is open to the public and free of charge. Bring your equipment if you want to try or install free software—we’ll assist you. If you plan to test a new operating system, be sure to back up your data beforehand.\n## Workshops\n![Talleres](/events-images/FLISoL2024-workshops.jpg)",
      es: "## ¿Qué es FLISoL?\nEl FLISoL es el evento de difusión de Software Libre más grande en Latinoamérica se realiza desde el año 2005 y desde el 2008 se adoptó su realización el 4to sábado de Abril de cada año.\nSu principal objetivo es promover el uso del software libre, dando a conocer al público en general su filosofía, alcances, avances y desarrollo.\nEl evento es organizado por las diversas comunidades locales de Software Libre y se desarrolla simultáneamente con eventos en los que se instala, de manera gratuita y totalmente legal, software libre en las computadoras que llevan los asistentes. Además, en forma paralela, se ofrecen charlas, ponencias y talleres, sobre temáticas locales, nacionales y latinoamericanas en torno al Software Libre, en toda su gama de expresiones: artística, académica, empresarial y social.\n## ¿Donde es?\nEl evento se llevará a cabo el día 8 y 9 de mayo de 2024 en el Conjunto Norte de la Facultad de Ingeniería en Ciudad Universitaria.\n## ¿A quién está dirigido?\nEl FLISoL esta dirigido a todo tipo de público: estudiantes, académicos, empresarios, trabajadores, funcionarios públicos, entusiastas y aun personas que no poseen mucho conocimiento informático y desean encontrar nuevas formas de usar sus computadoras.\n## ¿Qué habrá?\n### Instalación de software libre\nLa actividad principal del evento es la instalación de software libre en las computadoras de los asistentes, así que si deseas probar algún software libre o instalar un sistema operativo libre puedes traer tu computadora y nosotros te ayudaremos a instalarlo.\n### Conferencias\nLos dos días que dura el evento habrán conferencias relacionadas con la adopción y uso del software libre en la industria, el gobierno y la academia.\n## ¿Cómo participo?\n### Conferencista\nSi te gustaría dar una charla sobre software libre durante el evento puedes registrar una charla en [nuestro canal del Telegran](https://t.me/LIDSoL)\n### Instalador\nSi ya has usado software libre y sabes cómo instalar software en distintas plataformas, puedes asistir al evento y ayudar a otra persona a aprender a usar software libre.\n### Asistente\nLa entrada al evento esta abierta a todo público y es gratuita.\nSi deseas probar o instalar software libre trae tu equipo y nosotros te ayudamos.\nSi deseas probar un nuevo sistema operativo realiza antes un respaldo de tu información.\n## Talleres\n![Talleres](/events-images/FLISoL2024-workshops.jpg)"
    },
  action1: {
    text: {
        en: "Official FLISoL page",
        es: "Página oficial de FLISoL" },
    url: "https://flisol.info/FLISOL2024/Mexico/CDMX/UNAM"
 },
    links: [
      {
        text: { en: "Official FLISoL page", es: "Página oficial de FLISoL" },
        url: "https://flisol.info/FLISOL2024/Mexico/CDMX/UNAM"
      }
    ],
    publishDate: "2024-05-01",
    status: "past",
  },
];

