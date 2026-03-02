const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('.'));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour simuler le paiement Wave
app.post('/payer', (req, res) => {
    console.log("💰 Demande de paiement reçue !");
    res.json({ 
        success: true, 
        payment_url: "https://pay.wave.com/simulation-zani" 
    });
});

app.listen(port, () => {
    console.log(`🚀 Serveur ZANI actif sur le port ${port}`);
});