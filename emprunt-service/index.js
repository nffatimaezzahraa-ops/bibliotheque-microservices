const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const PORT = 3003;

app.get('/', (req, res) => {
    res.send('Emprunt Service fonctionne');
});

app.listen(PORT, () => {
    console.log(`Emprunt service démarré sur le port ${PORT}`);
});