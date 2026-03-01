const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express();
const port = 3000;

// Configuration de base
app.use(express.json());
app.use(express.static('.'));

// ROUTE : Inscription
app.post('/inscription', (req, res) => {
    const userData = req.body;
    fs.appendFileSync('utilisateurs.txt', `Email: ${userData.email}, Pass: ${userData.password}\n`);
    res.json({ success: true, message: "Utilisateur enregistré dans la base !" });
});

// ROUTE : Paiement Wave
app.post('/payer', async (req, res) => {
    console.log("Connecté à l'API Wave...");
    
    const options = {
        amount: 5000,
        currency: "XOF",
        error_url: "http://localhost:3000/erreur",
        success_url: "http://localhost:3000/succes"
    };

    res.json({ 
        success: true, 
        payment_url: "https://pay.wave.com/simulation-paiement-zani" 
    });
});

app.listen(port, () => {
    console.log(`Le serveur tourne sur http://localhost:${port}`);
});