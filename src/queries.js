import gql from "graphql-tag";

const GET_POKEMON = gql`
query Pokemon($name: String!) {
  getPokemon (name: $name) {
    name
    types {
      slot
      type {
        name
      }
    }
    sprites {
      front_default
    }
  }
}
`;

const GET_TYPE = gql`
query Type($type: String) {
  getType (name: $type) {
    damage_relations {
      no_damage_from {
        name
      }
      half_damage_from {
        name
      }
      double_damage_from {
        name
      }
      no_damage_to {
        name
      }
      half_damage_to {
        name
      }
      double_damage_to {
        name
      }
    }
  }
}
`;
export { GET_POKEMON, GET_TYPE };