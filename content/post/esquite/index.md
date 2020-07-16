---
title: Esquite
subtitle: "Un *framework* para administrar corpus paralelos"
summary: Presentamos el framework Esquite pensado para personas que quieren administrar un corpus paralelo
authors: ["umoqnier"]
tags: ["nlp", "corpus paralelo", "elotl", "django", "python", "software libre",
"lenguas indigenas"]
categories: []
date: 2020-07-13T12:53:44-05:00
lastmod: 2020-07-13T12:53:44-05:00
featured: false
draft: false
image:
  caption: "Logo de comunidad Elotl"
  focal_point: "Smart"
  preview_only: true
projects: []
---

## Comunidad Elotl

Ser parte de LIDSoL me ha permitido conocer y colaborar con otras comunidades
que hacen un trabajo estupendo. [Comunidad Elotl](https://elotl.mx/) es una de
ellas.

Elotl es un proyecto colaborativo, sin fines de lucro, dedicado a la
creación de herramientas digitales libres (obvio :heart:) y gratuitas con el objetivo de
preservar y difundir lenguas indígenas mexicanas. Además, buscan promover este
tema en la agenda nacional y realizar investigaciones académicas en ese sentido.

El tema central de Elotl es la **diversidad lingüística** y la creación de
tecnología para toda esta diversidad. México cuenta con 11 grupos de lenguas
desglosadas en 68 lenguas distintas y que a su vez engloban 364 variantes (casi
una variante por día del año :astonished:).

## ¿Qué es Esquite?

Además de ser un vaso con deliciosos elotes desgranados, mayonesa, queso
y chile (del que pica) es uno de los proyectos con los que LIDSoL ha colaborado.
[**Esquite**](https://github.com/ElotlMX/Esquite) es un *framework* de software
libre destinado a personas que poseen corpus paralelos (textos bilingües) y que
desean tener un sistema web que les permita subir, administrar realizar
búsquedas de palabras o frases en sus corpus.

El software esta hecho en `django` (otro *framework* para desarrollo web escrito
en `python` :snake:) y utiliza `elasticsearch` como motor de búsquedas y gestión
de documentos.

Un ejemplo de uso del *framework* es el corpus paralelo
[TSU̱NKUA](https://tsunkua.elotl.mx/) que permite consultar documentos bilingües
digitalizados y alineados de distintas variantes del otomí. Al día de la
publicación de esta entrada el corpus cuenta con aproximadamente `5519` líneas
paralelas de `6` documentos distintos.

{{< figure src="tsunkua.png" title="Corpus Paralelo Tsunkua" lightbox="true" >}}

Para enriquecer las búsquedas la plataforma web cuenta con un filtrado por
variante dialectal. Además, el motor de búsqueda permite realizar operaciones
especiales para la realización de búsquedas avanzadas. Algunos operadores son
los que se listan a continuación:

* **Búsqueda difusa**(`~`): Incluye en los resultados las palabras con
  similitud ortográfica. Por ejemplo si se busca: `jamadi~`, los resultados
  incluirán las palabras `jämadi`, `dabadi`, `juadi`, `jamfri`, etcétera.
* **Comodín**(`*`): Reemplaza cero o más caracteres. Por ejemplo: `mexic*`
* **Comodín**(`?`): Reemplaza un caracter. Por ejemplo: `nin?s`

Un característica especialmente pensada para las personas que estén
interesadas en la investigación o que deseen hacer experimentos con los
resultados las búsquedas que realicen se pone a disposición de las usuarias la
posibilidad de exportar los resultados en formato `.csv`. Para mayor información
pueden checar la [sección de ayuda](https://tsunkua.elotl.mx/ayuda/) de la página.

{{< figure src="export_csv.png" title="Botón para exportar resultados" lightbox="true" >}}

## Me convenciste, dame 2

Bueno, ya que insisten, vamos a ver que necesitamos para instalar nuestro
flamante *framework* de corpus paralelos. Los programas que debes tener
instalados son los siguientes:

### Dependencias

* `git`
* `python3.6` o una versión más actual
    * `virtualenv`: entornos virtuales para paquetes de `python`
* `elasticsearch 7.6` o mayor

### Instalación

#### 0. Instalamos y corremos `elasticsearch`

Puedes consultar la [página oficial de
Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html)
para completar este paso

#### 1. Clonamos el [repositorio de esquite](https://github.com/ElotlMX/Esquite)

```shell
user@machine:~$ git clone https://github.com/ElotlMX/Esquite.git
```

#### 2. Preparando el entorno

Entramos al directorio de Esquite, creamos el entorno virtual y lo activamos[^1]

```shell
user@machine:~$ cd Esquite/
user@machine:~/Esquite$ virtualenv env
user@machine:~/Esquite$ source env/bin/activate
```


#### 3. Instalación de dependencias

```shell
(env)user@machine:~/Esquite$ pip install -r requeriments.txt
```

#### 4. Asistente de configuración :dizzy:

El proyecto requiere de un archivo de configuración. Este archivo es creado de
forma automática con un asistente que utiliza *Deep Learning* (broma).
Ejecutamos el asistente con el siguiente comando:

```shell
(env)user@machine:~/Esquite$ python wizard.py
```

El asistente pedirá una serie de detalles para la plataforma como el nombre de
la organización que la mantendrá, nombre del proyecto, le primera y segunda
lengua del corpus, etcétera. La configuración se verá de está manera:

```shell
Asistente de configuración del backend 🧙
Nombre de la organización>> LIDSoL
Nombre del proyecto>> Galagar
Primera lengua del corpus (l1)>> español
Segunda lengua del corpus (l2)>> galáctico
Generando token secreto
⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙
🛑 El corpus requiere que exista un indice de
Elasticsearch con las configuraciones que se indican
en la documentación 🛑
⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙
Índice de Elasticsearch>> galagar
Protocolo HTTP o HTTPS [http]>>
Nombre o IP del servidor de Elasticsearch [localhost]>>
Puerto del servidor de Elasticsearch [9200]>>
Token Google Analytics (OPCIONAL)>>
Colores del proyecto (HEXADECIMALES)
Primario [#ffffff]>>#295db6
Secundario [#000000]>>#9adc49
Generando archivo para la configuración:
{'ALT_TEXT': '#000000',
 'COLABS': [],
 'DEBUG': 'False',
 'GOOGLE_ANALYTICS': '',
 'INDEX': 'galagar',
 'KEYBOARD': [],
 'L1': 'Español',
 'L2': 'Galáctico',
 'NAME': 'GALAGAR',
 'ORG_NAME': 'LIDSOL',
 'PRIMARY_COLOR': '#295db6',
 'SECONDARY_COLOR': '#9adc49',
 'SECRET_KEY': '<secreto>',
 'SOCIAL': {'blog': '',
            'email': '',
            'facebook': '',
            'github': '',
            'site': '',
            'twitter': ''},
 'TEXT_COLOR': '#ffffff',
 'URL': 'http://localhost:9200/'}
Terminado :)
```

El asistente menciona que debemos tener un índice de `elasticsearch` creado para
que funcione correctamente nuestra plataforma web. Para crear el índice con las
configuraciones[^2] necesarias ejecutamos esta línea de código:

```shell
$ curl -X PUT -H "Content-Type: application/json" -d @elastic-config.json localhost:9200/<nombre-de-tu-indice>
```

#### 6. Corremos la aplicación

```shell
(env)user@machine:~/Esquite$ python manage.py runserver
```

Listo, si vamos a nuestro navegador a la dirección `localhost:8000/` deberíamos ver
algo como esto:

{{< figure src="galagar.png" title="Corpus Paralelo Galagar" lightbox="true" >}}

Se pueden realizar algunas personalizaciones como los colores de la página,
colaboradorxs del proyecto, ligas a las redes sociales y el banner de la página
(que por cierto modificamos para este ejemplo). La personalización la abordaremos
a detalle en otra entrada ;)

## Administración

El sistema cuenta con un administrador de documentos en la dirección
`localhost:8000/corpus-admin/` donde podemos agregar nuevos documentos,
visualizarlos, agregar nuevas líneas a un documento previo y
eliminarlos. Además, podemos ver las variantes presentes en el corpus y hacer una
copia de seguridad en formato `csv`.

{{< figure src="admin.png" title="Administrador de documentos" lightbox="true" >}}

Esto se ve triste porque nuestro sistema está vacío. Debemos alimentarlo con
textos paralelos :book:.

## Alimentame humano :robot:

{{< figure src="sin_rostro.gif" title="Sin rostro de El Viaje de Chihiro" lightbox="true" >}}

Damos click en "Nuevo Documento", agregamos el nombre del documento, el archivo
`csv` con nuestro corpus alineado y un archivo `pdf` asociado a nuestro documento.
El formato de los archivos `csv` es la siguiente:

| l1 | l2 | variante     |
|----|----|--------------|
Una vez una señora se emborrachó | xu̱tu̱ bimáyóhthó 'á ngŭ ra bésíno | Otomí del Estado de México (ots)
Luego se fue a dormir a la casa del vecino | nándi na ra t'u̱xú bintí | Otomí del Estado de México (ots)
Después que se durmió | despwés ya biyóbí | Otomí del Estado de México (ots)

El archivo tiene una cabecera[^3]. La primera columna es texto en español, la siguiente columna será la segunda
lengua (en este ejemplo otomí) y la tercera columna[^4] es la variante (si esta está
disponible).

{{< figure src="upload.png" title="Subiendo un documento" lightbox="true" >}}


{{< figure src="docs.png" title="Lista de documentos" lightbox="true" >}}

## Probemos

{{< figure src="busqueda1.png" title="Resultados para búsqueda *amor*" lightbox="true" >}}

{{< figure src="busqueda2.png" title="Resultados para búsqueda *amor~*" lightbox="true" >}}

## Conclusiones

* Este *framework* al ser software libre les permite ver, modificar, estudiar
  y redistribuir sus modificaciones al código fuente. Este código se encuentra
  en [el repositorio](https://github.com/ElotlMX/Esquite/) antes mencionado.
* Si les gusta programar y les interesan las tecnologías aplicadas al lenguaje
  la Comunidad Elotl está abierta a que puedan contribuir con el desarrollo de
  esta y otras plataformas. Manden sus *Pull Requests* :D
* Si no les gusta programar o no es su área de estudio aún pueden colaborar con la
  comunidad haciendo:
    * Investigación :microscope:: Algunos integrantes de la Comunidad Elotl tienen posibilidad
    de dirigir o asesorar tesis, principalmente dentro de la UNAM
    * Difusión :satellite:: comparte información reelevante con la comunidad para que sea
      difundida
    * Donaciones :gift:: todas las herramientas son gratuitas y para poder continuar
      con los desarrollos la Comunidad está constantemente búsqueda de
      donativos.
    * Pueden checar todas las opciones de colaboración en [esta
  liga](https://elotl.mx/como-colaborar/).

[^1]: Asegúrate de que tienes `python3` por defecto en tu sistema con el
comando `python --version`. Si tienes `python2.7` pueden ejecutar el comando
`virtualenv env -p /usr/bin/python3`.
[^2]: El archivo `elastic-config.json` viene con la clonación del repo :p
[^3]: Es indispensable que exista la cabecera ya que la primer línea del
archivo se ignora por defecto.
[^4]: En caso de no existir la variante la columna **debe existir** pero vacía.
