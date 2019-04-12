import React  from 'react';
import { ApolloProvider } from "react-apollo";
import client from './client';
import Pokemon from './components/Pokemon';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slot1: 'bulbasaur',
      slot2: 'charmander',
      slot3: 'squirtle',
      slot4: 'chikorita',
      slot5: 'cyndaquil',
      slot6: 'totodile',
      strengths: []
    }
    // this.updatePokemon = this.updatePokemon.bind(this);
  }



  // updatePokemon(slot, event) {
  //   this.setState({
  //     partyPokemon[slot]: {
  //       ...this.state.partyPokemon,
  //       state.partyPokemon[slot]: event.target.value
  //     }
  //   })
  // }

  render() {
    const partyPokemon = [
      this.state.slot1,
      this.state.slot2,
      this.state.slot3,
      this.state.slot4,
      this.state.slot5,
      this.state.slot6,
    ]
    return (
      <ApolloProvider client={client}>
        <div className="volcarona">
          <h1>Volcarona</h1>
          <h2>the Pokemon party strength rating app</h2>
          <div className="partyPokemon">
            {partyPokemon.map(slot => (
              <div key={slot}>
                <form>
                  <input
                    value={slot}
                    onChange={e => this.setState({ [slot]: e.target.value })}
                    placeholder={`Pokemon ${slot}`}
                    type="text"
                    name={slot}
                    required
                  />
                </form>
                <Pokemon name={slot} />
              </div>
            ))}
          </div>
        </div>
      </ApolloProvider>
    );
  }
} 

export default App;