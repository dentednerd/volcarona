import React, { useState }  from 'react';
import { ApolloProvider } from "react-apollo";
import styled from 'styled-components';
import client from './client';
import Pokemon from './components/Pokemon';
import './App.css';

const Party = styled('section')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
`;

const App = () => {
  const [slot0, setSlot0] = useState('bulbasaur');
  const [slot1, setSlot1] = useState('charmander');
  const [slot2, setSlot2] = useState('squirtle');
  const [slot3, setSlot3] = useState('chikorita');
  const [slot4, setSlot4] = useState('cyndaquil');
  const [slot5, setSlot5] = useState('totodile');

  const partyPokemon = [
    {
      name: slot0,
      setState: setSlot0
    },
    {
      name: slot1,
      setState: setSlot1
    },
    {
      name: slot2,
      setState: setSlot2
    },
    {
      name: slot3,
      setState: setSlot3
    },
    {
      name: slot4,
      setState: setSlot4
    },
    {
      name: slot5,
      setState: setSlot5
    },
  ];

  return (
    <ApolloProvider client={client}>
      <main>
        <h1>Volcarona</h1>
        <h2>the Pokemon party strength rating app</h2>
        <Party>
          {partyPokemon.map((slot, index) => (
            <Pokemon key={slot.name}name={slot.name} setSlot={slot.setState} />
          ))}
        </Party>
      </main>
    </ApolloProvider>
  );
}

export default App;
