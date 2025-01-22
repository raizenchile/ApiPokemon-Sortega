const express = require("express");
const router = express.Router();
const{ getAllPokemon, getPokemonById, createPokemon, updatePokemon, deletePokemon,getMyPokemon } = require("../controllers/pokemonController");
const authenticateToken = require("../middlewares/authMiddleware");

//Rutas Públicas de Pokemon 
router.get("/", getAllPokemon);
router.get("/:id", getPokemonById);

//Rutas Protegidas de Pokemon
router.get("/trainer/mypokemon", authenticateToken, getMyPokemon);
router.post("/",authenticateToken, createPokemon);
router.put("/:id", authenticateToken, updatePokemon);
router.delete("/:id", authenticateToken, deletePokemon);

module.exports = router;