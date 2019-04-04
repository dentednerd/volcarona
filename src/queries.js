import gql from "graphql-tag";

const GET_CHARMANDER = gql`
{
  getPokemon (name: "charmander") {
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

export { GET_CHARMANDER };