import React from 'react';
import { ApolloProvider } from "react-apollo";
import client from './client';
import Pokemon from './components/Pokemon';

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>PokeTypes</h2>
      <Pokemon name="charmander"/>
      <Pokemon name="chimchar"/>
      <Pokemon name="volcarona"/>
    </div>
  </ApolloProvider>
);

export default App;