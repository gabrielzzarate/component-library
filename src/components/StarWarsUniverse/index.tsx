import * as React from 'react';
import BaseCharacter from '../BaseCharacter';
import Film from '../Film';
import Person from '../Person';
import Planet from '../Planet';
import Species from '../Species';
import Starship from '../StarShip';
import Vehicle from '../Vehicle';

class StarWarsUniverse extends React.PureComponent<any, any>{  
  components = {
    films: Film,
    people: Person,
    planets: Planet,
    species: Species,
    starships: Starship,
    vehicles: Vehicle,
  }

  render() {
    const { data } = this.props;
    console.log('data', data);

    if (!data || !data.data.url) {
      return null;
    }


    const Component = this.components[data.type];
    return (<Component {...this.props} />);
  }
}

export default StarWarsUniverse;