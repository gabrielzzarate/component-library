import * as React from 'react';
import styled, { css, keyframes } from '../styled-components';

export interface Props {
  primary?: boolean,
  animated?: boolean,
  delay?: number,
  big?: boolean,
  noMargin?: boolean,
}

export interface State {
  animated: boolean,
}

const animatedCss = css`
  opacity: 1;
  transform: translateY(0);
`;

const primaryCss = css`
  background-color: #008bf8;
  color: #fff;
`;

const StyledCard = styled.div`
  width: ${(props: Props) => (props.big ? '450px' : '300px')};
  padding: 15px;
  opacity: 0;
  transform: translateY(50px);
  margin: ${(props: Props) => (props.noMargin ? 0 : '15px')};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
    border-radius: 5px;

  ${props => props.animated && animatedCss}
  ${props => props.primary && primaryCss}
`;

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      animated: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { animated: true }
      })
    }, this.props.delay)
  }

  render() {
    const { delay = 0, animated, primary, noMargin, big, ...props } = this.props;
    return (
      <StyledCard
        animated={this.state.animated}
        delay={delay}
        primary={primary}
        big={big}
        noMargin={noMargin}
        {...props}
      >
        {this.props.children}
      </StyledCard>
    )
  }
}

export default Card;
