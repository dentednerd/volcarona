import { Query } from "react-apollo";
import React from 'react';
import StrongAgainst from './StrongAgainst';
import { GET_POKEMON } from '../queries';

const Charmander = ({ name }) => (
  <Query
    query={GET_POKEMON}
    variables={{ name }}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const pokemon = data.getPokemon;
      const pokeType = data.getPokemon.types[0].type.name
      console.log();

      return (
        <div key={pokemon.name}>
          <p>Name: {pokemon.name}</p>
          {pokemon.types.map(type => (
            <p key={type.slot}>Type: {type.type.name}</p>
          ))}
          <StrongAgainst pokeType={pokeType} />
        </div>
      );
    }}
  </Query>
);

export default Charmander;