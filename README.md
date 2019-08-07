# Sitio Web de LIDSOL

Este es el sitio web de Laboratorio de Investigación y Desarrollo de
Software Libre (LIDSOL).

## Cómo construir el sitio

Clona este repositorio usando git.

Asegurate de tener la version *extended* de Hugo instalado. Puedes
verificar que versión tienes ejecutando `hugo version`:

```shell
$ hugo version
Hugo Static Site Generator v0.55.6/extended linux/amd64 BuildDate: unknown
```

Clona el tema del sitio usando git submodule

```shell
$ git submodule init
$ git submodule update
```

Ahora puedes probar el sitio ejecutando hugo:

```shell
hugo server -D --disableFastRender --bind=0.0.0.0 --baseURL="/" --appendPort=false
```


## Cómo contribuir

Lee la documentación de [hugo](https://gohugo.io/getting-started) y del
[tema](https://sourcethemes.com/academic/docs).

Haz un fork de este repositorio, realiza tu modificación y abre un
merge request.

