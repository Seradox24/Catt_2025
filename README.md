# Proyecto CATT DUOC 2025

## Descripción

Este proyecto es una aplicación web desarrollada con Astro, diseñada para gestionar y mostrar ofertas de empleo en diversas áreas como ecoturismo y hotelería. La aplicación permite a los usuarios explorar diferentes oportunidades laborales y obtener información detallada sobre cada una de ellas.

## 🚀 Estructura del Proyecto

Dentro de tu proyecto Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── img/
├── src/
│   ├── components/
│   │   └── comp_emple/
│   │       └── Card1.astro
│   ├── layouts/
│   │   └── layout_emp.astro
│   └── pages/
│       ├── Empleos/
│       │   ├── Ecoturismo.astro
│       │   └── Hoteles.astro
│       └── postular.astro
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye tu sitio de producción en `./dist/`    |
| `npm run preview`         | Previsualiza tu construcción localmente, antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda usando el CLI de Astro               |

## 👀 ¿Quieres aprender más?

Siéntete libre de consultar [nuestra documentación](https://docs.astro.build) o unirte a nuestro [servidor de Discord](https://astro.build/chat).

