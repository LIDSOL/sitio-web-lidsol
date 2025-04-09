# Sitio Web de LIDSOL

Bienvenido al repositorio oficial del **Sitio Web de LIDSOL**, el Laboratorio de Investigación y Desarrollo de Software Libre.  
Este sitio está desarrollado con [Hugo](https://gohugo.io/), usando la plantilla [Hugoplate](https://github.com/zeon-studio/hugoplate) como submódulo de Git.

> ⚠️ **Este sitio está actualmente en desarrollo activo.**

---

## Clonar el repositorio

Este proyecto utiliza un **submódulo de Git** para integrar la plantilla. Asegúrate de clonar el repositorio incluyendo los submódulos:

###Opción recomendada (una sola línea):

```bash
git clone --recurse-submodules git@github.com:TU-USUARIO/sitio-web-lidsol.git
```

### Si ya lo clonaste sin submódulos:

Inicializa y actualiza el submódulo manualmente:

```bash
git submodule init
git submodule update
```

---

## Requisitos previos

Asegúrate de tener las siguientes herramientas instaladas:

- **Hugo Extended** versión `0.144` o superior
- **Node.js** versión `22` o superior
- **Go** versión `1.24` o superior

Verifica tus versiones con:

```bash
hugo version
node -v
go version
```

---

##  Configuración inicial

Después de clonar el repositorio, ejecuta este comando para configurar tu entorno de desarrollo:

```bash
npm run project-setup
```

Esto realizará lo siguiente:
- Crea la carpeta `themes/`
- Clona la plantilla Hugoplate
- Copia el contenido de `exampleSite/` a la raíz del proyecto

---

## Instalación de dependencias

Instala los paquetes de Node necesarios:

```bash
npm install
```

---

## Modo desarrollo

Inicia el servidor de desarrollo con:

```bash
npm run dev
```

Luego abre tu navegador en [http://localhost:1313](http://localhost:1313)


---

## Cómo contribuir

¡Agradecemos todas las contribuciones!

1. Haz un fork de este repositorio.
2. Crea una nueva rama para tu cambio.
3. Realiza tus modificaciones y pruébalas localmente.
4. Abre un **Pull Request** con una descripción clara de los cambios.

Puedes revisar la [documentación oficial de Hugo](https://gohugo.io/documentation/) y la [documentación del tema Hugoplate](https://github.com/zeon-studio/hugoplate) para más ayuda.

---

## Mantenimiento

Este proyecto es mantenido por el equipo de desarrollo de **LIDSOL**.