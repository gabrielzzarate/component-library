import * as React from 'react';
import Heading from '../../components/Heading';
import Container from '../../components/Container';

const ContainerSample = () => {
  return (
    <div>
      <Container>
        <Heading>Container</Heading>
      </Container>
      <Container style={{ backgroundColor: '#348CEC' }}>
        <div style={{ height: 300, backgroundColor: '#C2DCF9' }}>
          <Heading h2>Default Container</Heading>
        </div>
      </Container>
      <Container fullVertical style={{ backgroundColor: '#348CEC' }}>
        <div style={{ height: 300, backgroundColor: '#C2DCF9' }}>
          <Heading h2>Full Vertical Container</Heading>
        </div>
      </Container>
      <Container full small style={{ backgroundColor: '#348CEC' }}>
        <div style={{ height: 300, backgroundColor: '#C2DCF9' }}>
          <Heading h2>Full Small Container</Heading>
        </div>
      </Container>
    </div>
  )
}

export default ContainerSample;