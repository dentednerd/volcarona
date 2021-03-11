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

export { GET_POKEMON };
