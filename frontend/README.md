# Frontend del Portfolio

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

Este proyecto es el **frontend de un portfolio personal** construido con **React y Vite**. Su objetivo es presentar de forma visual y atractiva la información gestionada por la API de backend, mostrando proyectos, habilidades, experiencia laboral y datos de contacto.

La aplicación está diseñada para ser rápida, moderna y completamente responsiva, garantizando una excelente experiencia de usuario en cualquier dispositivo.

## ¿Cómo se presenta mi solución?

La solución propuesta utiliza una arquitectura de componentes moderna, donde cada parte de la interfaz de usuario es un componente reutilizable. Esto facilita el desarrollo, mantenimiento y escalabilidad del proyecto.

El flujo de trabajo es el siguiente:

1.  **Petición de datos:** La aplicación se comunica con la API del backend para obtener la información necesaria para mostrar en la interfaz. Por ejemplo, al cargar la página de proyectos, realiza una petición `GET` al endpoint `/api/projects`.
2.  **Manejo del estado:** Los datos recibidos del backend se almacenan en el estado de los componentes de React, lo que permite que la interfaz se actualice automáticamente cuando los datos cambian.
3.  **Renderizado de componentes:** Los componentes de React toman los datos del estado y los "pintan" en la pantalla. Esto incluye elementos como listas de proyectos, tarjetas de habilidades y formularios de contacto.
4.  **Estilos y animaciones:** Se utiliza **Tailwind CSS** para un diseño rápido y personalizable, y **Framer Motion** para añadir animaciones fluidas y efectos visuales que mejoran la experiencia de usuario.

## Tecnologías y Librerías utilizadas

* **React** (v19+): Librería principal para construir la interfaz de usuario.
* **Vite** (v6+): Herramienta de construcción (`bundler`) rápida para el desarrollo.
* **TypeScript**: Añade tipado estático para un código más robusto y fácil de mantener.
* **Tailwind CSS**: Framework de CSS utilitario para estilizar rápidamente los componentes.
* **Framer Motion**: Librería para crear animaciones y transiciones de forma declarativa.
* **Lucide React**: Conjunto de íconos para la interfaz de usuario.
* **Swiper**: Librería para crear carruseles y sliders de contenido.
* **Ogl**: Librería para gráficos 3D ligeros y renderizado en la web.

## Estructura del proyecto

```
├── public/       # Archivos estáticos (imágenes, etc.)
├── src/
│   ├── components/   # Componentes reutilizables (Botones, Tarjetas, etc.)
│   ├── pages/        # Componentes de página (Home, Projects, About, etc.)
│   ├── App.tsx       # Componente principal de la aplicación
│   ├── main.tsx      # Punto de entrada de la aplicación
│   └── index.css     # Hoja de estilos principal
├── package.json      # Información del proyecto y dependencias
├── tsconfig.json     # Configuración de TypeScript
└── vite.config.ts    # Configuración de Vite
```

<p align="center">
    <b>Sebastián Alejandro Reibold</b><br>
    <i>Analista Programador Universitario | Fullstack Developer</i><br><br>
    <a href="https://www.linkedin.com/in/sebastian-alejandro-reibold/">
        <img src="https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white" alt="LinkedIn"/>
    </a>
    <a href="https://github.com/sebareibold">
        <img src="https://img.shields.io/badge/GitHub-black?logo=github&logoColor=white" alt="GitHub"/>
    </a>
</p>
