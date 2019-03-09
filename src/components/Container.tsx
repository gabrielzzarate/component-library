import * as React from 'react';
import styled from '../styled-components'; 

export interface Props {
  full?: boolean,
  fullVertical?: boolean,
  small?: boolean,
}

const Container = styled.div`
  padding-left: ${(props: Props) => {
    if (props.full) return 0
    return 'calc((100vw - 960px) / 2)'
  }};

  padding-right: ${(props: Props) => {
    if (props.full) return 0
    return 'calc((100vw - 960px) / 2)'
  }};

  padding-top: ${(props: Props) => {
    if (props.fullVertical) return 0
    if (props.small) return '15px'
    return '25px'
  }};

  padding-bottom: ${(props: Props) => {
    if (props.fullVertical) return 0
    if (props.small) return '15px'
    return '25px'
  }};
`;

export default Container;