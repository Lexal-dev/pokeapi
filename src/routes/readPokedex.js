const {Kanto} = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/kanto', (req, res) => {
        Kanto.findAll()
            .then(pokemons => {
                const message = 'La liste des pokémons a bien été récupérée.'
                res.json({message, data:pokemons})
            })
            .catch(error => {
                const message ="la liste des pokémons n'a pas été récupérée."
                res.status(500).json({message, data:error})
            })
    })
}