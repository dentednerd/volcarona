import React from 'react';
import { ApolloProvider } from "react-apollo";
import client from './client';
import Charmander from './components/Charmander';

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Does it say Charmander?</h2>
      <Charmander name="charmander"/>
    </div>
  </ApolloProvider>
);

export default App;