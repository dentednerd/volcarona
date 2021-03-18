import { Query } from "react-apollo";
import React from 'react';
import styled from 'styled-components';
import StrongAgainst from './StrongAgainst';
import TypeButton from './TypeButton';
import { GET_POKEMON } from '../queries';

const PokemonContainer = styled('div')`
  background-color: #fff;
  color: #000;
  border-radius: 2rem;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  box-shadow: -0.5rem 0.5rem 0.5rem rgba(0,0,0,0.5);

  form {
    display: none;
  }
`;

const Header = styled('header')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const PokemonName = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const NameToTitleCase = (name) => {
  const array = name.split('');
  array[0] = array[0].toUpperCase();
  return array.join('');
}

const Pokemon = ({ name, setSlot }) => (
  <Query
    query={GET_POKEMON}
    variables={{ name }}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const pokemon = data.getPokemon;

      if (!pokemon) return null;

      const pokemonTypes = pokemon.types.reduce((acc,  type) => {
        acc.push(type.type.name);
        return acc;
      }, []);

      return (
        <PokemonContainer className={pokemon.name}>
          <form>
            <input
              value={name}
              onChange={e => setSlot({ [name]: e.target.value })}
              placeholder="Pokemon"
              type="text"
              name={name}
              required
            />
          </form>
          <Header>
            <PokemonName>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h2>
                {NameToTitleCase(name)}
              </h2>
            </PokemonName>
            <div>
              {pokemonTypes.map(type => (
                <TypeButton key={type} thisType={type} />
              ))}
            </div>
          </Header>
          <StrongAgainst types={pokemonTypes} />
        </PokemonContainer>
      );
    }}
  </Query>
);

export default Pokemon;
