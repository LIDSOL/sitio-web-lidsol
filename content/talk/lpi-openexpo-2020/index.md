---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Túneles y Agente de OpenSSH"
event: "LPI: OpenExpo Virtual Experience 2020"
event_url: https://www.lpi.org/es/articles/lpi-excited-support-openexpo-virtual-experience-2020-0
location:
address:
  street:
  city:
  region:
  postcode:
  country:
summary: Charla de @tonejito de LIDSoL en OpenExpo Europe 2020 - Sábado 20 de Junio de 2020 12:00 hrs (CST)
abstract: |-
    Veremos como funciona la autenticación de SSH con llaves por medio de `IdentityFile`, cómo utilizar el _agente de SSH_ y compartirlo con varios equipos de manera anidada por medio de `ForwardAgent` para evitar copiar las llaves SSH. También veremos como exponer y alcanzar servicios internos y externos a través de los _túneles SSH_ con `LocalForward` y `RemoteForward` y por último analizaremos el _proxy SOCKS_ que provee SSH con la opción `DynamicForward`.

    Estas herramientas son útiles para diversos fines como ingresar a recursos internos cuando se opera en el campo, acceder recursos bloqueados utilizando un equipo remoto como intermediario, exfiltrar datos después de una intrusión y en general para la administración de sistemas.

    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2020-06-20T12:00:59-05:00
date_end: 2020-06-20T12:45:59-05:00
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: 2020-06-08T19:26:00-05:00

authors: ["tonejito"]
tags: ["lpi", "seguridad", "openssh", "lpic3", "linux"]

# Is this a featured talk? (true/false)
featured: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Tonejito
  url: https://twitter.com/tonejito
  icon_pack: fab
  icon: twitter
- name: Tonejito
  url: https://tinyurl.com/Redes-Ciencias-UNAM-YouTube
  icon_pack: fab
  icon: youtube
- name: Agenda de LPI
  url: https://www.lpi.org/es/articles/lpi-excited-support-openexpo-virtual-experience-2020-0
- name: Agenda de OpenExpo
  url: https://openexpoeurope.com/es/virtual-experience/#agenda
- name: LPIconnect
  url: https://twitter.com/lpiconnect
  icon_pack: fab
  icon: twitter
- name: OpenExpoEurope
  url: https://twitter.com/OpenExpoEurope
  icon_pack: fab
  icon: twitter
- name: Conversión de huso horario
  url: https://www.timeanddate.com/worldclock/converter.html?iso=20200620T170000&p1=141&p2=155

# Optional filename of your slides within your talk's folder or a URL.
url_slides: /files/lpi-openexpo-2020-ssh-tonejito.pdf
url_code: https://github.com/tonejito/lpi-openexpo-2020.git
url_pdf:
url_video: https://www.youtube.com/channel/UCEdZMA3it9kp9iwlY9vEYWQ

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
