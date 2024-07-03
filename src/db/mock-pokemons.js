const idReturn = (id) => {
    let urlId = "";
    if (id >= 10 && id <= 99)
    {
        urlId = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`;
    } else if (id <= 9  && id >= 0)
    {
        urlId = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`;
    } else {
        urlId = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    }

    return urlId;
}

const pokemons = [
    {
      id: 1,
      name: "Bulbizarre",
      picture: idReturn(1),
      types: ["Plante", "Poison"],
      description: "Un Pokémon graine.",
      hp: 10,
      pc: 10,
    },
    {
      id: 2,
      name: "Herbizarre",
      picture: idReturn(2),
      types: ["Plante", "Poison"],
      description: "Un Pokémon bourgeon.",
      hp: 10,
      pc: 10,
    },
    {
      id: 3,
      name: "Florizarre",
      picture: idReturn(3),
      types: ["Plante", "Poison"],
      description: "Un Pokémon fleur.",
      hp: 10,
      pc: 10,
    },
    {
      id: 4,
      name: "Salamèche",
      picture: idReturn(4),
      types: ["Feu"],
      description: "Un Pokémon lézard.",
      hp: 10,
      pc: 10,
    },
    {
      id: 5,
      name: "Reptincel",
      picture: idReturn(5),
      types: ["Feu"],
      description: "Un Pokémon flamme.",
      hp: 10,
      pc: 10,
    },
    {
      id: 6,
      name: "Dracaufeu",
      picture: idReturn(6),
      types: ["Feu", "Vol"],
      description: "Un Pokémon dragon.",
      hp: 10,
      pc: 10,
    },
    {
      id: 7,
      name: "Carapuce",
      picture: idReturn(7),
      types: ["Eau"],
      description: "Un Pokémon tortue.",
      hp: 10,
      pc: 10,
    },
    {
      id: 8,
      name: "Carabaffe",
      picture: idReturn(8),
      types: ["Eau"],
      description: "Un Pokémon carapace.",
      hp: 10,
      pc: 10,
    },
    {
      id: 9,
      name: "Tortank",
      picture: idReturn(9),
      types: ["Eau"],
      description: "Un Pokémon mâchoire.",
      hp: 10,
      pc: 10,
    },
    {
      id: 10,
      name: "Chenipan",
      picture: idReturn(10),
      types: ["Insecte"],
      description: "Un Pokémon chenille.",
      hp: 10,
      pc: 10,
    }
  ];

  module.exports = pokemons;