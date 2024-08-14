// Backend/routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).send('Error al obtener los usuarios.');
    }
});

// Añadir un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const usuario = new Usuario({
            nombre: req.body.nombre,
            email: req.body.email
        });
        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).send('Error al añadir el usuario.');
    }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) return res.status(404).send('Usuario no encontrado.');
        res.json(usuario);
    } catch (error) {
        res.status(500).send('Error al eliminar el usuario.');
    }
});

module.exports = router;
