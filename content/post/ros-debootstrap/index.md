---
title: "Instalar ROS en cualquier distro usando debootstrap y proot"
summary: "ROS es asombroso, por desgracia solo se distribuye para Debian :c "
authors: ['emilio1625']
tags: ['ROS', 'hardware', 'debian', 'proot']
categories: []
date: 2019-12-22T13:42:27-06:00
lastmod: 2019-12-22T13:42:27-06:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

## Introducción

ROS (Robot Operating System) es un conjunto de paquetes de software que permite
controlar gran cantidad de sensores y actuadores y que provee algoritmos
preprogramados y herramientas para simulación de ambientes para robots,
desafortunadamente solo se distribuye para Debian y Ubuntu.

En este momento estoy usando [Void Linux](https://voidlinux.org) como
distribución principal en mi laptop pero para trabajar en mi tesis necesito
tener ROS instalado, podría instalar una máquina virtual
o hacer una partición con Debian, pero me da pereza configurar todo eso y me es
inconveniente por múltiples razones. Recompilar ROS para mi distro es una
tarea larga y tediosa (ya lo he hecho antes), así que eso tampoco es opción.

Como alternativa decidí usar proot y debooststrap para tener un entorno Debian
dentro de Void, que pueda usar cuando necesite ROS sin necesidad de reiniciar
ni usar una máquina virtual.

[`proot(1)`](https://proot-me.github.io/), una herramienta que suelo usar para
tener un entorno tipo GNU/Linux en mi teléfono Android. Si no estás
familiarizado con el concepto de
[`chroot(1)`](https://wiki.archlinux.org/index.php/Chroot_(Espa%C3%B1ol)) te
recomiendo que vayas antes a leer sobre el tema (aunque si sigues los pasos al
pie de letra quizá no tengas ningún problema, aunque eso nunca pasa ;).

[`debootstrap(8)`](https://wiki.debian.org/es/debootstrap),
una utilidad que instala una versión mínima de Debian, a la que vamos a hacer chroot.

## Manos a la obra

Para comenzar vamos a instalar debootstrap y proot, esto varía de distro
a distro, en mi caso ambos programas se encuentran en los repositorios
oficiales de Void Linux y probablemente se encuentre también en los repos de
tu distro.

```shell
$ xbps-install debootstrap proot
```

Una vez instalados vamos a crear una carpeta donde va a vivir el Debian que
vamos a instalar.

```shell
$ mkdir -p ~/Documentos/tesis/ROS
$ cd ~/Documentos/tesis/ROS
```

Ahora debemos seleccionar la versión de Debian a instalar. De acuerdo con el
sitio de ROS, su versión LTS Melodic Morenia sólo está disponible para Debian
9 Stretch, si vas a usar alguna otra versión verifica para que versión de
Debian está disponible. El espejo de Debian más cercano a mí es el de
<http://mmc.geofisica.unam.mx>, así que voy a ejecutar debootstrap indicándole
la versión de Debian y el espejo para descargar los paquetes.

```shell
$ sudo debootstrap stretch . ftp://mmc.geofisica.unam.mx/debian/
...
I: Base system installed successfully.
```

Si hasta aquí todo va bien en menos de 5 minutos deberías de tener una
instalación pequeña de Debian en la carpeta de `ROS`.

Bien, ahora vamos a cambiar los permisos de los archivos, ya que debootstrap
insiste en ejecutarse como root aunque no sea necesario.

```shell
$ sudo chmod -R $USER:$USER .
```

Vamos a entrar en este entorno de Debian, para evitar confusiones, cuando ejecute comandos dentro de Debian usaré el símbolo `>` para representar el prompt dentro de Debian y `$` dentro de Void.

Después de este comando, la terminal se comportará como si estuvieras dentro de
una instalación de Debian y podremos instalar ROS siguiendo las instrucciones
oficiales de ROS.

```shell
$ proot -R . /bin/bash -l
>
```

Si todo salió bien ahora deberías estar en una instalación de Debian, vamos
a ver su funciona.

```shell
$ cat /etc/debian_version
9.11
```

Como puedes ver ahora estamos dentro de Debian, pero sólo en esta terminal, si
abres una nueva terminal el entorno no va a ser el de Debian, sino el de la
distro que estés usando.

{{% alert warning %}}

Esta forma de lanzar `proot` hace que tu carpeta HOME este compartida entre tu
distro y Debian, lo que puede ocasionar conflicto entre los archivos de
configuración de varios programas. Si quieres usar una carpeta HOME distinta
para tu distro y Debian debes lanzar `proot` así:

```shell
$ HOME=/ruta/a/HOME/para/Debian proot -R . /bin/bash -l
>
```

{{% /alert %}}

Ahora si vamos a instalar ROS, para eso necesitamos ser root en Debian. En este
caso vamos a usar proot de la siguiente forma:

```shell
$ exit                     # salimos de la instalación de Debian
$ proot -S . /bin/bash -l  # y volvemos a entrar
#
```

Cuando lanzamos `proot` con la bandera `-S` proot lanza una shell como root en
Debian, ya que cuando usamos proot no podemos usar `sudo` dentro de Debian.
Para representar que estamos como `root` dentro del entorno de Debian usaré el símbolo `#` para el prompt.

Muy bien, ahora solo queda añadir los repositorios de ROS a Debian, actualizar
e instalar ROS.

```shell
# cat <<- EOF > /etc/apt/sources.list
    ###### Debian Main Repos
    deb http://deb.debian.org/debian/ oldstable main contrib non-free
    deb http://deb.debian.org/debian/ oldstable-updates main contrib non-free
    deb http://deb.debian.org/debian-security oldstable/updates main
    deb http://ftp.debian.org/debian stretch-backports main
    ###### ROS Repo
    deb http://packages.ros.org/ros/ubuntu stretch main
EOF

# apt update
# sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
# sudo apt update && sudo apt install ros-melodic-desktop
```

Listo, ahora tienes ROS instalado en tu sistema, aún faltan algunas cosas por
configurar, pero eso lo puedes leer en [la documentación de
ROS](http://wiki.ros.org/melodic/Installation/Debian#Initialize_rosdep).

Por último, si vas a estar usando seguido ROS, probablemente quieras crear un
alias para acceder rápidamente a Debian, en `bash` y `zsh` harías lo siguiente

```shell
$ alias debian="proot -R ~/Documento/tesis/ROS /bin/bash -l"
$ alias debiansu="proot -S ~/Documento/tesis/ROS /bin/bash -l"
```

## Conclusión

Siguiendo este procedimiento puedes instalar cualquier otra versión de ROS en
cualquier sistema Linux, incluso en un teléfono o tablet con Android. Si tienes
dificultades con el procedimiento siempre puedes acercarte al LIDSOL en busca
de ayuda.
