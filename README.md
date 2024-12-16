# Careers Management Microservice
 

Este es un servicio desarrollado en Node.js y Express dedicado a la gestión de careeras que puede tener un estudiante, en el contexto del desarrollo del Taller 2 para la asignatura de Arquitectura de sistemas.

## Características

**GRPC:**  framework de comunicación rápida y eficiente que permite invocar funciones remotas como si fueran locales. Utiliza HTTP/2, Protobuf  (mensajes binarios compactos) y soporta comunicación unaria, streaming y bidireccional. Es ideal para microservicios y sistemas distribuidos por su velocidad, escalabilidad y soporte multilenguaje.
**dotenv:** Biblioteca para cargar variables de entorno desde un archivo .env, facilitando la configuración de aplicaciones sin exponer datos sensibles en el código.
**Express:** Framework web minimalista y rápido que simplifica la creación de servidores HTTP y el manejo de rutas en aplicaciones Node.js.
jsonwebtoken: Herramienta para generar y verificar JSON Web Tokens (JWT), útiles para autenticación y autorización de usuarios.
**mongodb:** Biblioteca oficial para interactuar con MongoDB, una base de datos NoSQL orientada a documentos, desde aplicaciones Node.js.
**mongoose:** ODM (Object-Document Mapping) para trabajar con MongoDB, proporcionando esquemas, validaciones y herramientas avanzadas para gestionar datos.
**morgan: **Middleware de registro de solicitudes HTTP, útil para monitorear y depurar la actividad del servidor.
**Nodemon:** Herramienta de desarrollo que reinicia automáticamente el servidor al detectar cambios en los archivos del proyecto, agilizando el flujo de trabajo.

**Gestión de carreras:** Este microservicio se encarga de gestionar las carreras disponibles en el sistema, ademas de sus materias y los prerequisitos de estas
## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- **Node.js** (se recomienda la versión 14 o superior).
- **npm** (Administrador de paquetes de Node, incluido con Node.js).
## Dependencias
Este proyecto utiliza las siguientes dependencias:

- **dotenv**: Carga variables de entorno desde un archivo .env.
- **express**: Framework web minimalista para Node.js que permite manejar rutas, middleware y    solicitudes HTTP.
- **express-handlebars**: Un motor de plantillas para generar vistas dinámicas en aplicaciones Express.
- **@grpc/grpc-js:** Biblioteca para implementar comunicación entre aplicaciones mediante gRPC, un framework de llamadas a procedimientos remotos (RPC) diseñado para ser rápido y eficiente.
- **@grpc/proto-loader:** Carga archivos .proto que definen los servicios y mensajes de gRPC, permitiendo su uso en aplicaciones Node.js.
- **amqplib:** Cliente de RabbitMQ para Node.js que permite implementar mensajería y comunicación asincrónica entre microservicios usando el protocolo AMQP.
- **Express:** Framework web minimalista y rápido que simplifica la creación de servidores HTTP y el manejo de rutas en aplicaciones Node.js.
jsonwebtoken: Herramienta para generar y verificar JSON Web Tokens (JWT), útiles para autenticación y autorización de usuarios.
- **mongodb:** Biblioteca oficial para interactuar con MongoDB, una base de datos NoSQL orientada a documentos, desde aplicaciones Node.js.
- **mongoose:** ODM (Object-Document Mapping) para trabajar con MongoDB, proporcionando esquemas, validaciones y herramientas avanzadas para gestionar datos.
- **morgan:** Middleware de registro de solicitudes HTTP, útil para monitorear y depurar la actividad del servidor.

- **nodemon**: Herramienta que monitorea los archivos de la aplicación y reinicia automáticamente el servidor cuando detecta cambios, útil para el desarrollo.


### 1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git

cd tu-repositorio

npm install

npm run dev
```

# Servicios gRPC y Endpoints  

Este proyecto expone servicios gRPC para gestionar información de carreras y asignaturas, utilizando los archivos `.proto` como definición de los contratos.  

## Servicios Disponibles  

### Servicio: `career`  
- **Archivo `.proto`**: `careers.proto`  
- **Métodos expuestos**:  
  - **`careers`**: Retorna información relacionada con carreras.  

### Servicio: `subject`  
- **Archivo `.proto`**: `subjects.proto`  
- **Métodos expuestos**:  
  - **`subjects`**: Proporciona información detallada sobre asignaturas.  
  - **`prerequisites_objects`**: Obtiene los prerrequisitos de una asignatura en formato detallado.  
  - **`prerequisites_map`**: Devuelve un mapa con los prerrequisitos asociados a las asiggnaturas de una carrea.  
  - **`postrequisites_map`**: Retorna un mapa con las asignaturas que tienen como prerrequisito a la asignatura consultada.  

## Puerto del Servidor  
El servidor gRPC escucha en la dirección `0.0.0.0:50052`, donde se accede mediante Postman.  

## Estructura de los Archivos `.proto`  
1. **`careers.proto`**: Define el servicio `career` y los mensajes relacionados.  
2. **`subjects.proto`**: Define el servicio `subject` con sus métodos y estructuras de datos relacionadas.  

