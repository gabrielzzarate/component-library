import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { ThemeProvider, createGlobalStyle } from './styled-components';
import Components from './library/components';

const theme = {
  primaryColor: "#FF0000",
  primaryColorInverted: "#3A3A3A"
};

const Heading = styled.h1`
  margin-bottom: 30px;
  color: ${props => props.theme.primaryColor};
`;

createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: Helvetica;
  }
  a {
    text-decoration: none;
    color: ${theme.primaryColor};
  }
  button {  font-family: Helvetica; }
`;

declare let module: any

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Components />
  </ThemeProvider>,
  document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}