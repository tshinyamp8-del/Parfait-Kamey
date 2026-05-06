const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Route d'accueil
app.get('/', (req, res) => {
    res.json({
        message: "Bienvenue sur l'API de mon Portfolio",
        owner: "Kamey Tshinyam",
        status: "Online"
    });
});

// Projets mis à jour (Fullstack)
app.get('/projects', (req, res) => {
    res.json([
        { id: 1, name: "MAVILLE", tech: "AdonisJS, SQL", desc: "Plateforme de livraison" },
        { id: 2, name: "Clone X", tech: "JS, CSS Grid", desc: "Interface dynamique" },
        { id: 3, name: "URL Shortener", tech: "Node.js, Express", desc: "Raccourcisseur de liens" }
    ]);
});

// Compétences structurées
app.get('/skills', (req, res) => {
    res.json({
        backend: ["Node.js", "AdonisJS", "Express", "SQL"],
        frontend: ["Figma", "UI/UX", "CSS Grid/Flexbox"],
        tools: ["Git", "GitHub", "IA-Augmented Dev"]
    });
});

// Correction de la route socials
app.get('/socials', (req, res) => {
    res.json({
        linkedin: "https://www.linkedin.com/in/...",
        instagram: "https://www.instagram.com/...",
        x: "https://x.com/..."
    });
});

// Port 3300 (standard pour AdonisJS/Express local)
const PORT = 3300;
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});