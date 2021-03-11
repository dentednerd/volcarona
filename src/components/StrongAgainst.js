import React, { useState, useEffect } from 'react';
import TypeButton from './TypeButton';
import allTypes from '../allTypes';

const StrongAgainst = ({ types }) => {
  const [strengths, setStrengths] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);

  useEffect(() => {
    const strongTypes = types.reduce((acc, type) => {
      acc = acc.concat(allTypes[type].attackStrong);
      return acc;
    }, []);
    setStrengths(strongTypes);
    const weakTypes = types.reduce((acc, type) => {
      acc = acc.concat(allTypes[type].defendWeak);
      return acc;
    }, []);
    setWeaknesses(weakTypes);
  }, [types]);

  return strengths && (
    <>
      <p>
        Strong against
        {strengths.map(strength => (
          <TypeButton key={strength} thisType={strength} />
        ))}
      </p>
        <p>
        Weak against
        {weaknesses.map(weakness => (
          <TypeButton key={weakness} thisType={weakness} />
        ))}
      </p>
    </>
  );
};

export default StrongAgainst;
