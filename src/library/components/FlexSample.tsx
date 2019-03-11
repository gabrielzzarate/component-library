import * as React from 'react';
import Container from '../../components/Container';
import Flex, { Column } from '../../components/Flex';

const FlexSample = () => {
  return (
    <div>
      <Container style={{ backgroundColor: '#EB6E00' }}>
          <Container small full style={{ backgroundColor: '#fff'}}>
            <Flex justifyAround>
              <div
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                backgroundColor: '#EB6E00',
                }}
              />
              <div
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                backgroundColor: '#EB6E00',
                }}
              />
              <div
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                backgroundColor: '#EB6E00',
                }}
              />
            </Flex>
          </Container>
      </Container>
      <Container style={{ background: '#008BF8'}}>
        <Flex noWrap>
          <Column three style={{ height: 300, backgroundColor: '#5CB5FA' }} />
          <Column three style={{ height: 300, backgroundColor: '#B9DFFD' }} />
          <Column three style={{ height: 300, backgroundColor: '#5CB5FA' }} />    
        </Flex>
      </Container>
      <Container style={{ background: '#73CE32' }}>
        <Container small full style={{ backgroundColor: '#fff' }}>
          <Flex noWrap justifyAround>
            <Column four style={{ height: 150, backgroundColor: '#D5FDA8' }} />
            <Column four style={{ height: 150, backgroundColor: '#D5FDA8' }} />
            <Column four style={{ height: 150, backgroundColor: '#D5FDA8' }} />
          </Flex>
        </Container>
      </Container>
    </div>
  )
}

export default FlexSample;