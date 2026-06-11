const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/bibliotheque")
.then(() => console.log("MongoDB connecté"))
.catch(err => console.log(err));

const LivreSchema = new mongoose.Schema({
    titre: String,
    auteur: String
});

const Livre = mongoose.model("Livre", LivreSchema);

app.get("/livres", async (req, res) => {
    const livres = await Livre.find();
    res.json(livres);
});

app.post("/livres", async (req, res) => {
    const livre = new Livre(req.body);
    await livre.save();
    res.json(livre);
});

app.listen(3001, () => {
    console.log("Livre service démarré sur le port 3001");
});