// routes/gestionRoutes.js
const express = require('express');
const router = express.Router();

// Definir rutas relacionadas con la gestión de inventario
router.get('/gestion', (req, res) => {
    res.send('Gestión de inventario');
});

// Exportar el router
module.exports = router;
