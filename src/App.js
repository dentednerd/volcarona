import React, { useState }  from 'react';
import { ApolloProvider } from "react-apollo";
import client from './client';
import Pokemon from './components/Pokemon';
import './App.css';

function App() {
  const [slot1, setSlot1] = useState('bulbasaur');
  const [slot2, setSlot2] = useState('charmander');
  const [slot3, setSlot3] = useState('squirtle');
  const [slot4, setSlot4] = useState('chikorita');
  const [slot5, setSlot5] = useState('cyndaquil');
  const [slot6, setSlot6] = useState('totodile');

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Volcarona</h1>
        <h2>the Pokemon party strength rating app</h2>
        <div className="partyPokemon">
          <div>
            <form>
              <input
                value={slot1}
                onChange={e => setSlot1(e.target.value)}
                placeholder="Pokemon #1"
                type="text"
                name="slot1"
                required
              />
            </form>
            <Pokemon name={slot1} />
          </div>
          <div>
            <form>
            <input
              value={slot2}
              onChange={e => setSlot2(e.target.value)}
              placeholder="Pokemon #2"
              type="text"
              name="slot2"
              required
            />
            </form>
            <Pokemon name={slot2} />
          </div>
          <div>
            <form>
            <input
              value={slot3}
              onChange={e => setSlot3(e.target.value)}
              placeholder="Pokemon #3"
              type="text"
              name="slot3"
              required
            />
            </form>
            <Pokemon name={slot3} />
          </div>
          <div>
            <form>
            <input
              value={slot4}
              onChange={e => setSlot4(e.target.value)}
              placeholder="Pokemon #4"
              type="text"
              name="slot4"
              required
            />
            </form>
            <Pokemon name={slot4} />
          </div>
          <div>
            <form>
              <input
                value={slot5}
                onChange={e => setSlot5(e.target.value)}
                placeholder="Pokemon #5"
                type="text"
                name="slot5"
                required
              />
            </form>
            <Pokemon name={slot5} />
          </div>
          <div>
            <form>
              <input
                value={slot6}
                onChange={e => setSlot6(e.target.value)}
                placeholder="Pokemon #6"
                type="text"
                name="slot6"
                required
              />
            </form>
            <Pokemon name={slot6} />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
} 

export default App;