import { Query } from "react-apollo";
import React from 'react';
import StrongAgainst from './StrongAgainst';
import { GET_POKEMON } from '../queries';

const Pokemon = ({ name }) => (
  <Query
    query={GET_POKEMON}
    variables={{ name }}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const pokemon = data.getPokemon;
      console.log();

      return (
        <div key={pokemon.name}>
          <p>Name: {pokemon.name}</p>
          {pokemon.types.map(type => (
            <p key={type.slot}>Type: {type.type.name}</p>
          ))}
          {data.getPokemon.types.map(type => (
            <StrongAgainst key={type.type.name} pokeType={type.type.name} />
          ))}
          
        </div>
      );
    }}
  </Query>
);

export default Pokemon;