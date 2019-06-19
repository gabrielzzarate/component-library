import * as React from 'react';
import BaseCharacter from '../BaseCharacter';

const Species = ({ data }) => {
  const { name, classification, language, designation } = data.data;

  if (!data) {
    return null;
  }

  return (
    <BaseCharacter data={data}>
      <h2>{name}</h2>
      <h2>Classification: {classification}</h2>
      <h3>Language: {language}</h3>      
      <h3>Designation: {designation}</h3>
    </BaseCharacter>
  )
}

export default Species;