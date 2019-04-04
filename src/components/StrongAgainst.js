import React from 'react';
import { Query } from "react-apollo";
import { GET_TYPE } from '../queries';

const StrongAgainst = ({ pokeType }) => (
    <Query
      query={GET_TYPE}
      variables={{ type: pokeType }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :( with {pokeType}</p>;

        const strongAgainst = data.getType.damage_relations.double_damage_to
        const weakAgainst = data.getType.damage_relations.double_damage_from

        return (
          <div>
            <p>Strong against {strongAgainst.map(againstType => `${againstType.name}, `)}</p>
            <p>Weak against {weakAgainst.map(againstType => `${againstType.name}, `)}</p>
          </div>
        );
      }}
    </Query>
);

export default StrongAgainst;