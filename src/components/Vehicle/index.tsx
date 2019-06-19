import * as React from 'react';
import BaseCharacter from '../BaseCharacter';

const Vehicle = ({ data }) => {
  const { name, vehicle_class, cargo_capacity, crew, manufacturer, cost_in_credits } = data.data;

  if (!data) {
    return null;
  }

  return (
    <BaseCharacter data={data}>
      <h2>{name}</h2>
      <h3>Class: {vehicle_class}</h3>
      <h3>cargo_capacity: {cargo_capacity}</h3>
      <h3>Crew#: {crew}</h3>      
      <h3>Cost in Credits: {cost_in_credits}</h3>
      <h3>Manufacturer: {manufacturer} </h3>
    </BaseCharacter>
  )
}

export default Vehicle;