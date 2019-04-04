import gql from "graphql-tag";

const GET_CHARMANDER = gql`
{
  pokemon (name: "charmander") {
    name
    types
    attacks {
        fast {
          name
          type
          damage
        }
      }
  }
}
`;

export { GET_CHARMANDER};