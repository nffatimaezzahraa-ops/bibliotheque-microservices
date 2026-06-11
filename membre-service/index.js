const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3002;

app.get('/', (req, res) => {
    res.send('Membre Service fonctionne');
});

app.listen(PORT, () => {
    console.log(`Membre service démarré sur le port ${PORT}`);
});