import * as React from 'react';
import BaseCharacter from '../BaseCharacter';

const Planet = ({ data }) => {
  const { name, climate, terrain, population, gravity } = data.data;

  if (!data) {
    return null;
  }

  return (
    <BaseCharacter data={data}>
      <h2>{name}</h2>
      <h2>Climate: {climate}</h2>
      <h3>Terrain: {terrain}</h3>      
      <h3>Population: {population}</h3>
      <h3>Gravity: {gravity}</h3>
    </BaseCharacter>
  )
}

export default Planet;