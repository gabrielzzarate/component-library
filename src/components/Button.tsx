import * as React from 'react';
import styled, { css } from '../styled-components';
import Loading from './Loading';

export interface Props {
  secondary?: any,
  inverse?: any,
  big?: any,
  children?: any,
  loading?: boolean,
}

export const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${(props: Props) => (props.secondary ? '#EB6E00' : '#348CEC')};
  color: #fff;
  padding: 10px 15px;
  font-size: ${(props: Props) => { 
    if (props.big) return '20px'
    return '16px'
  }};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
  border: 2px solid ${(props: Props) => (props.secondary ? '#EB6E00' : '#348CEC')};

  ${props => {
    return (
      props.inverse &&
      css`
        background-color: #fff;
        color: #111F4B;
        border-color: #111F4B;
      `
    );
  }}

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ secondary, big, inverse, loading, children, ...props }: Props) => {
  return (
    <StyledButton secondary={secondary} big={big} inverse={inverse} {...props}>
      {loading ? <Loading white /> : children}
    </StyledButton>
  )
}

export default Button;