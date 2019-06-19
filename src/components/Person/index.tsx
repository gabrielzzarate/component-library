import * as React from 'react';
import BaseCharacter from '../BaseCharacter';

const Person = ({ data }) => {
  const { name, gender, skin_color, hair_color, eye_color, height, mass } = data.data;

  if (!data) {
    return null;
  }

  return (
    <BaseCharacter data={data}>
      <h2>{name}</h2>
      <h3>Gender: {gender}</h3>
      <h3>Skin: {skin_color}</h3>
      <h3>Hair color: {hair_color}</h3>
      <h3>Eye color: {eye_color}</h3>
      <h3>Height: {height}</h3> 
      <h3>Weight: {mass}</h3>

    </BaseCharacter>
  )
}

export default Person;