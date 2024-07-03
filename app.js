const express = require('express');
const bodyParser = require('body-parser');
const { testConnection, initDb } = require('./src/db/sequelize'); // Importez les fonctions de connexion et d'initialisation de la base de données

const app = express();

// Middleware pour traiter les requêtes JSON
app.use(bodyParser.json());

// Exemple d'inclusion de routes
require('./src/routes/readPokedex')(app);

// Point d'entrée de l'application
async function startApp() {
    try {
        // Test de la connexion à la base de données
        await testConnection();

        // Initialisation de la base de données
        await initDb();

        // Écoute du port
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Serveur démarré sur le port ${PORT}`);
        });
    } catch (error) {
        console.error('Erreur lors du démarrage de l\'application :', error);
        process.exit(1); // Quitte l'application avec un code d'erreur
    }
}

// Démarrage de l'application
startApp();