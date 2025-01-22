# ApiPokemon-Sortega

Este proyecto implementa una API RESTful para una Pokédex utilizando Node.js y Express.js. La aplicación permite gestionar entrenadores y Pokémon, con autenticación basada en JWT (JSON Web Tokens). 

Características Principales

Autenticación:

* Registro de entrenadores Pokémon
* Inicio de sesión con generación de Tocken JWT
* Protección de rutas mediante middleware de autenticación

Gestión de Pokémon

* Público: Listar todos los Pokémon y obtener detalles de uno especifico.
* Autenticación:
    * Crear nuevos Pokémon
    * Listar los Pokémon de un Entrenador.
    * Actualizar o eliminar Pokémon (solo el entrenador propietario)