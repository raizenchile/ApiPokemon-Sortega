const jwt = require("jsonwebtoken");

// Middleware para verificar el token JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Obtener el token de la cabecera de autorización

    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado. Acceso denegado." });
    }

    try {
        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Almacenar los datos del usuario decodificados en la solicitud
        next(); // Continuar con la siguiente función en la cadena
    } catch (err) {
        return res.status(403).json({ message: "Token inválido o expirado." });
    }
};

module.exports = authenticateToken;