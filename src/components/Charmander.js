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

      return (
        <div key={data.pokemon.name}>
          <p>Name: {data.pokemon.name}</p>
          {data.pokemon.types.map(type => (
            <p key={type}>Type: {type}</p>
          ))}
          <p>Attacks:</p>
          <ul>
          {data.pokemon.attacks.fast.map(attack => (
            <li key={attack.name}>{attack.name}: type {attack.type}, damage {attack.damage}</li>
          ))}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default Charmander;