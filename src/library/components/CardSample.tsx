import * as React from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Flex from '../../components/Flex';
import Card from '../../components/Card';

const CardSample = () => {
  return (
    <div>
      <Container>
        <Heading>Card</Heading>
        <Container>
          <Flex>
            <Card>
              <Heading h3>Normal Card</Heading>
              <p>
                Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi
                porta gravida at eget metus. Donec sed odio dui.
              </p>
            </Card>
            <Card big>
              <Heading h3>Big Card</Heading>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.
              </p>
            </Card>
            <Card primary>
              <Heading h3 style={{ color: '#fff'}}>
                Primary Card
              </Heading>
              <p>
                Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi
                porta gravida at eget metus. Donec sed odio dui.
              </p>
            </Card>
          </Flex>
        </Container>
      </Container>
    </div>
  );
};

export default CardSample;