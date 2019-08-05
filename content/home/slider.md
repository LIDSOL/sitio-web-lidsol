+++
widget = "slider"
headless = true
active = true
weight = 10

interval = 3000
height = "calc(100vh - 50px)"

[[item]]
#title = "Hello"
#content = "I am center aligned :smile:"
#  align = "center"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
#overlay_color = "#666"  # An HTML color value.
  overlay_img = "slider/portada.jpg"  # Image path relative to your `static/img/` folder.
#overlay_filter = 0.1  # Darken the image. Value in range 0-1.

[[item]]
  content = "Somos un laboratorio formado por voluntarios, alumnos, ex-alumnos y académicos interesados en el desarrollo de tecnologías libres y abiertas"
  align = "left"

  overlay_color = "#555"  # An HTML color value.
  overlay_img = "slider/01.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.

[[item]]
  content = "Buscamos promover e impulsar la investigación y desarrollo de tecnologías a través proyectos, cursos, conferencias y eventos de instalación"
  align = "right"

  overlay_color = "#333"  # An HTML color value.
  overlay_img = "slider/02.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.

[[item]]
  title = "Libera tu servicio social aquí"
  content = "Si eres estudiante de Ingeniería en Computación de la FI UNAM puedes liberar tu servicio social con nosotros, a partir de tercer semestre."
  align = "left"

  overlay_color = "#333"  # An HTML color value.
  overlay_img = "slider/03.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.
+++
