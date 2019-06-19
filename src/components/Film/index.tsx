import * as React from 'react';
import BaseCharacter from '../BaseCharacter';

const Film = ({ data }) => {
  const { title, director, producer, opening_crawl } = data.data;

  return (
    <BaseCharacter data={data}>
      <h2>{title}</h2>
      <h2>Director: {director}</h2>
      <h3>Producer: {producer}</h3>
      <p>{opening_crawl}</p>
    </BaseCharacter>
  )
}

export default Film;