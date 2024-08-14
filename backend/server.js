const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/walic', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB...'))
  .catch(err => console.error('No se pudo conectar a MongoDB...', err));

// Importar las rutas de usuario
const usuarioRoutes = require('./routes/usuarioRoutes');

// Definir las rutas de ítems directamente en app.js
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  }
});

const Item = mongoose.model('Item', itemSchema);

// Rutas de ítems
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).send('Error al obtener los ítems.');
    }
});

app.post('/items', async (req, res) => {
    try {
        const item = new Item({
            name: req.body.name,
            quantity: req.body.quantity
        });
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(500).send('Error al añadir el ítem.');
    }
});

app.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).send('Ítem no encontrado.');
        res.json(item);
    } catch (error) {
        res.status(500).send('Error al eliminar el ítem.');
    }
});

// Usar las rutas de usuario desde el archivo usuarioRoutes.js
app.use('/usuarios', usuarioRoutes);

// Configuración del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor ejecutándose en el puerto ${port}...`));




// Frontend/js/app.js
const app = angular.module('walicApp', []);
