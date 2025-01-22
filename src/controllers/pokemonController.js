const pokemons= [];

//Listar los Pokemon
const getAllPokemon = (req, res) => {
    res.status(200).json(pokemons);
};

//Ver detalles de un Pokemon según su ID
const getPokemonById = (req, res) => {
    const pokemon = pokemons.find((p) => p.id === parseInt(req.params.id));
    if(!pokemon){
        return res.status(404).json({message: "Pokemon no encontrado"});
    }
    res.status(200).json(pokemon);
};

//Ver Pokemon de un Entrenador Autenticado
const getMyPokemon = (req, res) => {
    const trainerId = req.user.id;
    const myPokemons = pokemons.filter((p) => p.trainerId === trainerId);
    res.status(200).json(myPokemons);
};

//Crear un nuevo Pokemon
const createPokemon = (req, res) => {
    const { name, type, level } = req.body;
    const trainerId = req.user.id;

    if(!name || !type || !level){
        return res.status(400).json({message: "Por favor, complete todos los campos"});
    }
    const newPokemon = {id: pokemons.length + 1, name, type, level, trainerId,createdAt: new Date(),};
    pokemons.push(newPokemon);
    res.status(201).json({message: "Pokemon creado con éxito", pokemon: newPokemon});
};

//Actualizar información de un Pokemon
const updatePokemon = (req, res) => {
    const pokemon = pokemons.find((p) => p.id === parseInt(req.params.id));
    if(!pokemon){
        return res.status(404).json({message: "Pokemon no encontrado"});
    }

    //Validar propiedad del Pokemon
    if(pokemon.trainerId !== req.user.id){
        return res.status(403).json({message: "No tienes permiso para actualizar este Pokemon"});
    }

    const {name, type, level} = req.body;
    if(name) pokemon.name = name;
    if(type) pokemon.type = type;
    if(level) pokemon.level = level;   

    res.status(200).json({message: "Pokemon actualizado con éxito", pokemon});
};

//Eliminar un Pokemon
const deletePokemon = (req, res) => {
    const pokemonIndex = pokemons.find((p) => p.id === parseInt(req.params.id));
    if(!pokemonIndex === -1){
        return res.status(404).json({message: "Pokemon no encontrado"});
    }

    const pokemon = pokemons[pokemonIndex];

    //Validar propiedad del Pokemon
    if(pokemon.trainerId !== req.user.id){
        return res.status(403).json({message: "No tienes permiso para eliminar este Pokemon"});
    }

    pokemons.splice(pokemonIndex, 1);
    res.status(200).json({message: "Pokemon eliminado con éxito"});
};

module.exports = { getAllPokemon, getPokemonById, createPokemon, updatePokemon, deletePokemon, getMyPokemon };
