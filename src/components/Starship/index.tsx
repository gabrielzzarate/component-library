import * as React from 'react';
import BaseCharacter from '../BaseCharacter';

const Starship = ({ data }) => {
  const { name, starship_class, cargo_capacity, crew, hyperdrive_rating, manufacturer } = data.data;

  if (!data) {
    return null;
  }

  return (
    <BaseCharacter data={data}>
      <h2>{name}</h2>
      <h3>Class: {starship_class}</h3>
      <h3>cargo_capacity: {cargo_capacity}</h3>
      <h3>Crew#: {crew}</h3>      
      <h3>hyperdrive_rating: {hyperdrive_rating}</h3>
      <h3>Manufacturer: {manufacturer} </h3>
    </BaseCharacter>
  )
}

export default Starship;