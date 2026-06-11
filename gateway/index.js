const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Gateway fonctionne');
});

app.listen(3000, () => {
    console.log('Gateway démarré sur le port 3000');
});