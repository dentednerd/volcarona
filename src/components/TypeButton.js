import React from 'react';
import styled from 'styled-components';
import allTypes from '../allTypes';

const TypeContainer = styled('span')`
  background-color: ${props => allTypes[props.thisType].color};
  color: #fff;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  margin: 0 0.25rem;
  text-transform: uppercase;
  padding: 0.125rem;
  text-shadow: -1px 1px rgba(0,0,0,0.5);
`;

const TypeButton = ({ thisType }) => {
  if (!thisType) return null;

  return (
    <TypeContainer thisType={thisType}>
      {thisType}
    </TypeContainer>
  );
};

export default TypeButton;
