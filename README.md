# ApiPokemon-Sortega

Este proyecto implementa una API RESTful para una Pokédex utilizando Node.js y Express.js. La aplicación permite gestionar entrenadores y Pokémon, con autenticación basada en JWT (JSON Web Tokens). 

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

---█

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