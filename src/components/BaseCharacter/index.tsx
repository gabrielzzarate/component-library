import * as React from 'react';
import Container from '../Container';
import Card from '../Card';
import Button from '../Button';
import styled, { css } from '../../styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BaseCharacter = ({ children, data, ...otherProps }: { children: any, data: any, otherProps?: any[] }) => {

  if (!data) {
    return null;
  }

  console.log('data', data);

  return (
    <Container>
      <Card big>
        <h1>{data.type} from the star wars universe</h1>
        {children}
        
        <ButtonWrapper>
          <Button href={data.data.url}>Learn More</Button>
        </ButtonWrapper>
      </Card>
    </Container>
  )
}

export default BaseCharacter;