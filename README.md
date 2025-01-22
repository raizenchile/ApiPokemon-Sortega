# ApiPokemon-Sortega

Este proyecto implementa una API RESTful para una Pokédex utilizando Node.js y Express.js. La aplicación permite gestionar entrenadores y Pokémon, con autenticación basada en JWT (JSON Web Tokens). 

***Tecnologías utilizadas***
* Nodejs
* Express.js
* JWT (Json Web Tokens)
* bcrypt (encriptación de contraseñas)
* body-parser (Middleware de Express para analizar el cuerpo de las solicitudes HTTP entrantes)
* doteenv (Gestionar variables de entorno)

**Características Principales**

***Autenticación:***

* Registro de entrenadores Pokémon
* Inicio de sesión con generación de Tocken JWT
* Protección de rutas mediante middleware de autenticación

***Gestión de Pokémon***

* Público: Listar todos los Pokémon y obtener detalles de uno especifico.
* Autenticación:
    * Crear nuevos Pokémon
    * Listar los Pokémon de un Entrenador.
    * Actualizar o eliminar Pokémon (solo el entrenador propietario)

**Endpoints Disponibles**

***Autenticación:***

* POST /auth/register: Registro de un nuevo entrenador.
* POST /auth/login: Inicio de sesión de un entrenador (genera JWT).

***Pokémon***

* GET /pokemon: Listar todos los Pokémon (público).
* GET /pokemon/:id: Ver los detalles de un Pokémon específico (público).
* GET /pokemon/trainer/mypokemon: Ver los Pokémon del entrenador autenticado.
* POST /pokemon: Crear un nuevo Pokémon (autenticado).
* PUT /pokemon/:id: Actualizar un Pokémon (solo el propietario).
* DELETE /pokemon/:id: Eliminar un Pokémon (solo el propietario).

_______________________________________________________________________________________________

**Instalación y Ejecución**

**Requisitos Previos**
* Tener instalado Node.js (v14 o superior) y npm.

**Pasos de Instalación**
1. Clonar este repositorio
    git clone https://github.com/raizenchile/ApiPokemon-Sortega.git
    cd ApiPokemon-Sortega

2. Instalar las dependencias del proyecto:
    npm install

3. Crear un archivo .env en la raíz del proyecto con la siguiente información:
    PORT=3000
    JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzaCIsInBhc3N3b3JkIjoicGlrYXBpa2EiLCJyb2xlIjoidHJhaW5lciJ9.yBjO612C9k7pHjDl7LK66949rYom56n-_7RI2REZxBg

4. Iniciar el Servidor:
    npm start

5. La API estará disponible en http://localhost:3000.

_______________________________________________________________________________________________

**Uso con Postman**

***Autenticación***

1. Registro
    * Endpoint: POST /auth/register
    * Body (JSON):
        {
            "username": "usuarioTrainer",
            "password": "passwordTrainer",
            "role": "trainer"
        }

2. Login
    * Endpoint: POST /auth/login
    * Body (JSON):
        {
            "username": "usuarioTrainer",
            "password": "passwordTrainer"
        }   

    ***Respuesta:***
        {
            "message": "Inicio de sesión exitoso.",
            "token": "<jwt-token>"
        }

**Protección de Rutas**
Para acceder a las rutas protegidas (creación, actualización o eliminación de Pokémon), incluir el tolken JWT en los encabezados de la solciitud:
***Authorization: Bearer <token-jwt>

**Quiero agradecer al profesor Ricardo Castillo y sus clases, que sirvieron como base para este proyecto. También tomé referencias de la documentación oficial de las tecnologías utilizadas, grabaciones de clases anteriores, videos y de la ayuda proporcionada por ChatGPT para resolver dudas y mejorar el desarrollo.**