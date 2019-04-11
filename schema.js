const { makeExecutableSchema } = require('graphql-tools');
const fetch = require("node-fetch");

const typeDefs = `
  type Query {
    getPokemon(id: Int, name: String): Pokemon
    getType(id: Int, name: String): Type
  }

  type Pokemon {
    id: Int
    name: String
    types: [PokemonTypesObj]
    sprites: SpriteObj
  }

  type PokemonTypesObj {
    slot: Int
    type: PokemonType
  }

  type PokemonType {
    name: String
  }

  type SpriteObj {
    front_default: String
  }

  type Type {
    id: Int
    name: String
    damage_relations: DamageObj
  }

  type DamageObj {
    no_damage_to: [RelatedType]
    half_damage_to: [RelatedType]
    double_damage_to: [RelatedType]
    no_damage_from: [RelatedType]
    half_damage_from: [RelatedType]
    double_damage_from: [RelatedType]
  }

  type RelatedType {
    name: String
  }
`;

const resolvers = {
  Query: {
    getPokemon: async (_, { id, name }) => {
      const searchTerm = id ? id : name;
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${searchTerm}`);
      return response.json();
    },
    getType: async (_, { id, name }) => {
      const searchTerm = id ? id : name;
      const response = await fetch(`http://pokeapi.co/api/v2/type/${searchTerm}`);
      return response.json();
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;

