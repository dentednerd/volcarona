import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh"
});

  const Charmander = () => (
    <Query
      query={gql`
        {
          pokemon (name: "charmander") {
            name
            attacks {
                fast {
                  name
                  type
                  damage
                }
              }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        console.log(data.pokemon);
  
        return (
          <div key={data.pokemon.name}>
            <p>{data.pokemon.name}</p>
            {data.pokemon.attacks.fast.map(attack => (
              <p key={attack.name}>{attack.name}: type {attack.type}, damage {attack.damage}</p>
            ))}
          </div>
        );
      }}
    </Query>
  );

  const App = () => (
    <ApolloProvider client={client}>
      <div>
        <h2>Does it say Charmander?</h2>
        <Charmander />
      </div>
    </ApolloProvider>
  );
  
  render(<App />, document.getElementById("root"));
