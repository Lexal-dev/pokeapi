const validTypes = [
    "Normal", 
    "Feu", 
    "Eau", 
    "Plante", 
    "Electrique", 
    "Glace", 
    "Combat", 
    "Poison", 
    "Sol", 
    "Vol", 
    "Psy", 
    "Insecte", 
    "Roche", 
    "Spectre", 
    "Dragon", 
    "Ténèbres", 
    "Acier", 
    "Fée"
];

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Kanto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "Le nom est déjà utilisé."
            },
            validate: {
                notEmpty: {msg: "Ne peut pas être vide"},
                notNull: {msg: "Ne peut pas être nul"},
                min: {
                    args: [3],
                    msg: "Le nom d'un pokémon ne peut pas être inférieur à 3 caractères"
                },
                max: {
                    args: [30],
                    msg: "Le nom d'un pokémon ne peut pas dépasser 30 caractères"
                }
            }
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: { msg: "L'url n'est pas valide."},
                notNull: { msg: "Ne peut pas être nul"}
            }
        },
        types: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,

        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: "Ne peut pas être nul" },
                isWithinRange(value) {
                    if (value < 0 || value > 999) {
                        throw new Error('La valeur doit être comprise entre 0 et 999');
                    }
                }
            }
        },
        pc: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: "Ne peut pas être nul" },
                isWithinRange(value) {
                    if (value < 0 || value > 999) {
                        throw new Error('La valeur doit être comprise entre 0 et 999');
                    }
                }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Ne peut pas être vide"},
                notNull: { msg: "Ne peut pas être nul"},
                min: {
                    args: [10],
                    msg: "Le nom d'un pokémon ne peut pas être inférieur à 10 caractères"
                },
                max: {
                    args: [150],
                    msg: "Le nom d'un pokémon ne peut pas dépasser 150 caractères"
                }
            },
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    });
};