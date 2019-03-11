import * as React from 'react';
import styled, { keyframes } from '../styled-components';

export interface Props {
  big?: boolean,
  small?: boolean,
  white?: boolean,
}

const Bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

const StyledDotsLoader = styled.div`
  display: inline-block;
`;

const Dot = styled.span`
  width: ${(props: Props) => (props.big ? '20px' : '12px')};
  height: ${(props: Props) => (props.big ? '20px' : '12px')};
  background-color: ${(props: Props) => (props.white ? '#FFF' : '#000')};
  border-radius: 100%;
  display: inline-block;
  animation: ${Bounce} 1s infinite ease-in-out both;

  &:first-child {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

const Loading = (props: Props) => {
  return (
    <StyledDotsLoader {...props}>
      <Dot {...props} style={{}} />
      <Dot {...props} style={{}} />
      <Dot {...props} style={{}} />
    </StyledDotsLoader>
  )
}

export default Loading;
