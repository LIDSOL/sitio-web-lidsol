+++
widget = "portfolio"
headless = true
active = true
weight = 50
title = "Proyectos del Laboratorio"

[content]
  page_type = "project"

   [[content.filter_button]]
    name = "Todos"
    tag = "*"

  [[content.filter_button]]
    name = "Privacidad"
    tag = "privacidad"

  [[content.filter_button]]
    name = "Other"
    tag = "Demo"

[design]
  columns = "1"

  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   5 = Showcase
  view = 3

  # For Showcase view, flip alternate rows?
  flip_alt_rows = false
+++

