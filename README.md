![Build
Status](https://gitlab.com/lidsol/lidsol.gitlab.io/badges/master/build.svg)

# Sitio Web de LIDSOL

Este es el sitio web de Laboratorio de Investigación y Desarrollo de
Software Libre (LIDSOL).

## Cómo construir el sitio mediante contenedores de manera manual en el equipo local

Clona este repositorio usando `git`:

``` shell
$ git clone https://gitlab.com/lidsol/lidsol.gitlab.io.git
```

Clona el tema del sitio utilizando `make`:

``` shell
$ make init
```

Crea el contenedor para construir este sitio:

```shell
$ make build
```

Ahora puedes probar el sitio ejecutando el siguiente comando:

``` shell
$ make run
```

Espera a que se construya el sitio web y que diga que el servidor web
esta listo para recibir peticiones:

    Web Server is available at / (bind address 0.0.0.0)
    Press Ctrl+C to stop

Visita <http://localhost:1313/> para ver el sitio

## Cómo contribuir

Lee la documentación de [hugo](https://gohugo.io/getting-started) y del
[tema](https://sourcethemes.com/academic/docs).

Haz un fork de este repositorio, realiza tu modificación y abre un
*merge request* a la rama `master`.
