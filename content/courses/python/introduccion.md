---
title: Python, computadoras y diseño
linktitle: Introducción
toc: true
type: docs
date: "2020-07-03T00:00:00Z"
draft: false
menu:
  python:
    parent: Contenidos
    weight: 2

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

## ¿Qué es `python`?

{{< figure src="../img/python.png" caption="Logo de Python" alt="Logo de Python" >}}

Python es un lenguaje de programación de *alto nivel*, "fácil" de aprender y simple de usar. Es multiplataforma por lo qué está disponible para sistemas GNU/Linux, Mac OS y Windows. Destacan su elegante sintaxis, que es de tipos dinámicos y que es "interpretado" (más bien es híbrido pero por ahora no importa mucho). Consecuencia de lo anterior, este lenguaje es ideal para scripting y desarrollo rápido de aplicaciones en muchas áreas.

### Guido Van Rossum

En Diciembre de 1989, comienza con el desarrollo de un lenguaje de *scripting* por *hobbie* para "mantenerse ocupado en navidad". Para 1994 publica la versión 1.0

{{< figure src="../img/guido.png" height="50%" width="50%" caption="Guido Van Rossum de Doc Searls - 2006oscon_203.JPG, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=4974869" alt="Creador de Python Guido Van Rossum" >}}


### ¿Quién utiliza python?

Listado de empresas que utilizan el lenguaje:

#### Google [^1]

> Python where we can, C++ where we must. 
> 
> -- <cite>Guido</cite>

#### Facebook

* Servicios en el manejo de infraestructura
* Ads API
* Async IRCbot framework

#### Netflix

* Análisis de datos

#### Dropbox [^1]

* Server side code
* APIs

#### Reddit

* `web.py`

#### Spotify

* Análisis de datos
* Servicios

## Entendiendo las computadoras (un poco)

Estan en todas partes (incluso detrás de ti ¡voltea ahora!). Las computadoras pueden realizar una gran variedad de tareas porque pueden ser programadas para ello. En este sentido, las computadoras no estan diseñadas para un solo trabajo (al menos la mayoría no)

### CPU (Central Procesing Unit)

Conocido como el *cerebro* de la computadora. En realidad no es un cerebro, solo entiende codigo binario y hace tareas pequeñas muy rápido. Por ejemplo, sumar dos números, leer datos de la memoria, determinar si un número es igual a otro, mover un número de un lugar en la memoria a otro lugar, entre otras

### Memoria principal

Tambien conocida como la memoria RAM (Random Access Memory). En esta memoria se almacenan los programas y sus datos mientras se ejecutan. Por ejemplo, su usas Libreoffice para escribir una carta tanto el programa como el contenido de tu carta estarán en memoria RAM.

Esta memoria es de tipo volatil porque al quitarle la energía (apagar la computadora) toda la información contenida se borrará.

### Memoria secundaria

Tambien conocida como Discos Duros, Discos de estado solido, USB, CD, DVD, 3.3, 5.25. Estas memorias con para almacenar información a largo plazo. Son del tipo no volatil ya que al quitar la energía no se borra la información. Generalmente los programas importan datos desde esta memoria y los cargan en la memoria principal. 

### Dispositivos de entrada/salida

Pueden ser teclados, cámaras, impresoras, mouses, pantallas táctiels, escáners, micrófonos, pantallas y más

### Programas

* Un programa es una serie de pasos que la computadora sigue para completar una tarea
* Los programas son tambien llamados *software* o *apps*
* El software es muy importante porque hace a las computadoras útiles (bueno, tambien la electricidad es importante). 
* Hay software que nos ayuda a dibujar, contar, calcular o incluso a ¡crear más software!

### Lenguajes de programación

El CPU solo entiende un lenguaje y es binario

```
01110111 01100001 01101011 01100101 00100000 01110101 01110000 00100000 01101110 01100101 01101111

00100000 01100110 01101111 01101100 01101100 01101111 01110111 00100000 01110100 01101000 01100101 00100000 01110111 01101000 01101001 01110100 01100101 00100000 01110010 01100001 01100010 01100010 01101001 01110100 
```

Como mucha gente encuentra complicado programar en lenguaje binario se crearon lenguajes más amigables para los humanos (según). [Ejemplos](https://www.wikiwand.com/es/Anexo:Ejemplos_de_implementaci%C3%B3n_del_%C2%ABHola_mundo%C2%BB)

## Diseño de programas

**Los programas deben ser cuidadosamente diseñados antes de ser escritos.** Hay herramientas que podemos usar durante el diseño de programas como pseudocódigo y diagramas de flujo.


### Ciclo de desarrollo de programas

#### 1. Diseñar el programa

* Es como una casa, si no la diseñas antes de comenzar a construir después dedicarás mucho tiempo a reparar cosas en lugar de construir la casa en si

#### 2. Escribir código

* Cada lenguaje tiene sus propias reglas, conocidas como sintaxis, y deben ser seguidas o si no tendremos errores. La sintaxis de un lenguaje menciona cosas como palabras clave, operadores, definición elementos, etc.

```python
while (estado_vital("viva")):
    code(level="x1000")
    drink("cafecito")
    continue
```

#### 3. Corregir errores de sintaxis

* Si existen errores de sintaxis nuestros programas no funcionaran y deberemos corregirlos

#### 4. Probar el programa

* Para ver si hace lo que debería hacer

#### 5. Corregir errores lógicos

* Si el programa no hace lo que queremos lo reprendemos, nos reprendemos a nosotros y corregimos los problemas

#### 6. Regresar al paso 1 (sorbo de café) 


{{< figure src="../img/ciclo.png" caption="Ciclo de diseño de programas" alt="Ciclo de diseño de programas" >}}

#### Un ejemplo

Imaginemos que queremos hacer un programa que toma dos números y
que los suma. Por ahora no te preocupes mucho si no entiendes el código ya que
solo es un ejemplo ilustrativo. En las siguientes lecciones ya lo entenderás.

Un programa en `python` que resuelve nuestro problema podría se el siguiente:

```python
#!/usr/bin/python
# Programa suma.py

# Pide a la usuaria que ingrese el primer numero por teclado
numero_1 = input("Ingresa el numero 1>> ")
# Pide a la usuaria que ingrese el segundo numero por teclado
numero_2 = input("Ingresa numero 2>> ")

# Suma
resultado = numero_1 + numero_2

# Imprime el resultado en pantalla
print(resultado)
```

Corriendo el programa

```bash
user@machine$ python suma.py 
Ingresa el numero 1>> 2
Ingresa numero 2>> 2
22
```

Diseñamos el programa, escribimos el código, no tuvimos errores de sintaxis y
probamos nuestro programa pero parece que no hace lo que queremos. Debemos
corregir errores lógicos entonces. Con las correcciones quedaría así:

```python
#!/usr/bin/python
# Programa suma.py

# Pide a la usuaria que ingrese el primer numero por teclado
numero_1 = int(input("Ingresa el numero 1>> "))
# Pide a la usuaria que ingrese el segundo numero por teclado
numero_2 = int(input("Ingresa numero 2>> "))

# Suma
resultado = numero_1 + numero_2

# Imprime el resultado en pantalla
print(resultado)
```

Corriendo el programa de nuevo

```bash
user@machine$ python suma.py 
Ingresa el numero 1>> 2
Ingresa numero 2>> 2
4
```

Ahora si funciona :smile:

No por ahora no es necesario que entiendas el codigo ni las modificaciones.
Solo queremos poner un ejemplo donde nuestro programa no tiene errores pero no
hace lo que queremos. Mas adelante veremos como obtener errores
(muchos errores :boom:)

## Instalemos lo necesario

* `python`
* Editor de texto

{{< figure src="../img/code_editor.png" caption="Editor de código neovim" alt="Editor de código neovim" >}}

### El interprete

El lenguaje de programación `python` brinda un modo **interactivo**

```bash
user@machine$ python
Python 3.7.5 (default, Oct 17 2019, 12:09:47) 
[GCC 9.2.1 20190827 (Red Hat 9.2.1-1)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 
``` 

[^1]: En estas empresas trabajó Guido en los periodos: Google (2005 - 2012) y Dropbox (2013 - 2019)
