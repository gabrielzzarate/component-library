const _ = require('axios');
import * as React from 'react';
import Button from '../../components/Button'

export const TYPES = [ 'films', 'people', 'planets', 'species', 'starships', 'vehicles'];
  
class GetCharacterData extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  async componentDidMount() {
    const data = await this.getCharacterData();

    this.setState({ data });
  }
  
  getCharacterData = async () => {
    const randomType = TYPES[Math.floor(Math.random() * TYPES.length)];
    let randomNumber = Math.floor(Math.random() * 6);

    const res = await _.get(`https://swapi.co/api/${randomType}/${randomNumber + 1}/`);
    return {
      type: randomType, 
      data: res.data,
    };
  }

  refetch = async () => {
    const data = await this.getCharacterData();

    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    if (!data) {
      return null;
    }

    return (
      <div>
        <Button onClick={() => this.refetch()}>Refetch</Button>
        {this.props.children(data)}
      </div>
    )
  }
}

export default GetCharacterData;