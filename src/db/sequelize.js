const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const  pokemons  = require('./mock-pokemons')
const kantoModel = require('../models/kanto');


const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Utilisé pour contourner les erreurs d'authentification SSL
        }
    },
});

// Vérifier la connexion à la base de données
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données PostgreSQL établie avec succès.');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données PostgreSQL :', error);
    }
}

const Kanto = kantoModel(sequelize, DataTypes);

const initDb = () => {
    return sequelize.sync({ force: true })
        .then(_ => {
            console.log('La base de donnée "Pokédex" a bien été synchronisée.');

            // Insère les données de mock dans la base de données
            return Promise.all(pokemons.map(pokemon => {
                return Kanto.create({
                    name: pokemon.name,
                    picture: pokemon.picture,
                    types: pokemon.types, // Utiliser directement pokemon.types ici
                    description: pokemon.description,
                    hp: pokemon.hp,
                    pc: pokemon.pc
                });
            }));
        })
        .then(() => {
            console.log('Initialisation des données terminée.');
        })
        .catch((error) => {
            console.error('Erreur lors de l\'initialisation des données :', error);
        });
}

module.exports = { Kanto, testConnection, initDb };