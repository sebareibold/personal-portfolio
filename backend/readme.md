# 💻 API REST - Portfolio Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-800000?style=flat-square&logo=mongoose&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=black)

Esta es una **API REST** diseñado para gestionar los datos de mi portfolio . Permite a un desarrollador almacenar y administrar información sobre los proyectos, habilidades, experiencia laboral y datos de contacto, la cual va a ser consumida por una interfaz de usuario frontend.

La API está diseñada con una arquitectura de múltiples capas para separar las responsabilidades, asegurando un código limpio y modular, fácil de mantener y escalar. Comunmente mis proyecto desarrollados con Node.js + Express.Js presenta el mismo diseño estructural. 

## ¿Cómo se presenta mi solución?

La solución propuesta sigue una arquitectura clara y estructurada, donde cada parte del sistema tiene una responsabilidad definida para manejar las peticiones de la API.

El flujo de trabajo es el siguiente:

1.  **Rutas:** Cada solicitud (ej. `GET /api/projects`) es recibida por un enrutador de Express que la dirige a la lógica de negocio correspondiente.
2.  **Lógica de Negocio (Managers):** Los "managers" gestionan las operaciones principales (CRUD) de cada entidad. Por ejemplo, `ProjectManager` se encarga de todo lo relacionado con proyectos, interactuando directamente con los modelos de la base de datos.
3.  **Modelos:** Los modelos, definidos con Mongoose, son la capa de datos que interactúa con la base de datos MongoDB. Proporcionan una interfaz para consultar, crear y actualizar los documentos de la API.
4.  **Autenticación:** Las rutas de modificación de datos están protegidas con middleware para asegurar que solo los usuarios autenticados y autorizados puedan acceder a ellas.

## Tecnologías utilizadas

* **Node.js** (v18+)
* **Express.js** (estructura base de API REST)
* **TypeScript** (tipado estático para un código más robusto)
* **MongoDB** (base de datos NoSQL)
* **Mongoose** (librería de modelado de objetos para MongoDB)
* **Dotenv** (gestión de variables de entorno)
* **Nodemon** (opcional, para desarrollo con autoreload)
* **Chalk** (estilos de texto para la consola)

## Estructura del proyecto

```
├── src
│   ├── managers     # Lógica de negocio (ProjectManager, SkillManager, etc.)
│   ├── models       # Esquemas de la base de datos (Project, Skill, etc.)
│   ├── routes       # Endpoints de la API (project.routes.ts, skill.routes.ts, etc.)
│   ├── server.ts    # Inicialización del servidor, configuración de rutas y conexión a la DB
│
├── .env             # Variables de entorno (no se suben al repositorio)
├── .gitignore
├── package-lock.json
├── package.json     # Información del proyecto y dependencias
├── tsconfig.json    # Configuración del compilador de TypeScript
└── README.md        # Documentación del proyecto
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