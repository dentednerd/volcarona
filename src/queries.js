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
  }
}
`;

const GET_TYPE = gql`
query Type($type: String) {
  getType (name: $type) {
    damage_relations {
      double_damage_to {
        name
      }
    }
  }
}
`;
export { GET_POKEMON, GET_TYPE };