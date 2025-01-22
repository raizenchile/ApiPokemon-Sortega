const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const users = [];

//Registro de Entrenador
const registerTrainer = async (req, res) => {
    const { username, password, role } = req.body;

    if(!username || !password || !role) {
        return res.status(400).json({ message: "Por favor, complete todos los campos" });
    }

      // Verificar si el usuario ya existe
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: "El usuario ya existe." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: users.length + 1,
        username,
        password: hashedPassword,
        role,
    };

    users.push(newUser);
  res.status(201).json({ message: "Entrenador registrado con éxito." });
};

    //Inicio de sesión de Entrenador
    const loginTrainer = async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }
    // Verificar si el usuario existe
    const user = users.find((u) => u.username === username);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }
    // Verificar si la contraseña es válida
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciales inválidas." });
    }
  
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  
    res.json({ message: "Inicio de sesión exitoso.", token });
};
  
  // Exporta las funciones correctamente
  module.exports = { registerTrainer, loginTrainer };