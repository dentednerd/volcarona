import { Query } from "react-apollo";
import React from 'react';
import { GET_CHARMANDER } from '../queries';

const Charmander = () => (
  <Query
    query={GET_CHARMANDER}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const pokemon = data.getPokemon

      console.log('SLOT 1', pokemon.types[0])

      return (
        <div key={pokemon.name}>
          <p>Name: {pokemon.name}</p>
          {pokemon.types.map(type => (
            <p key={type.slot}>Type: {type.type.name}</p>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Charmander;