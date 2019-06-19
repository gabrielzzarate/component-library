import * as React from 'react';
const _ = require('axios');
import ButtonSample from './ButtonSample';
import ContainerSample from './ContainerSample';
import FlexSample from './FlexSample';
import HeadingSample from './HeadingSample';
import CardSample from './CardSample';
import GetCharacterData from '../../containers/GetCharacterData';
import StarWarsUniverse from '../../components/StarWarsUniverse';

// const Components = () => {
//   return (
//     <div>
//       <ButtonSample />
//       <ContainerSample />
//       <FlexSample />
//       <HeadingSample />
//       <CardSample />
//     </div>
//   )
// }

class Components extends React.Component<any, any>{

  render() {
    return (
      <GetCharacterData>
        {(data) => (
          <StarWarsUniverse
            data={data}
          />
        )}
      </GetCharacterData>
    )
  }
}

export default Components;