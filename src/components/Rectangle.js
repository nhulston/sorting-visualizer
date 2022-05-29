import React, {Component} from 'react';
import styled from "styled-components";

export default class Rectangle extends Component {
    render() {
        let height = this.props.height * 0.35
        let color = this.props.color ? this.props.color : '#0070f3'
        let child = (
            <Text suppressHydrationWarning quantity={this.props.quantity}>
                {this.props.height}
            </Text>
        )
        if (this.props.left) {
            return <LeftRect
                height={height}
                quantity={this.props.quantity}
                color={color}
                moveAmount={this.props.moveAmount}
                delay={this.props.delay}
            >
                {child}
            </LeftRect>
        } else if (this.props.right) {
            return <RightRect
                height={height}
                quantity={this.props.quantity}
                color={color}
                moveAmount={this.props.moveAmount}
                delay={this.props.delay}
            >
                {child}
            </RightRect>
        } else {
            return <Rect
                height={height}
                quantity={this.props.quantity}
                color={color}
            >
                {child}
            </Rect>
        }
    }
}

const Rect = styled.div`
  position: relative;
  height: ${props => props.height}vh;
  width: ${props => 75 / props.quantity}vw;
  background: ${props => props.color};
  margin: ${props => -props.height}vh ${props => 40 / props.quantity}px 0;
  text-align: center;
  padding-top: ${props => 200 / props.quantity}px;
  border-radius: 8px 8px 0 0;
  transform: translateX(0);
`;

const LeftRect = styled(Rect)`
  animation: left ${props => props.delay}ms forwards ease;
  @keyframes left {
    0% {
      z-index: -1;
      transform: translateX(0);
      filter: brightness(100%);
    }
    50% {
      filter: brightness(95%);
    }
    100% {
      z-index: -1;
      transform: translateX(calc(${props => -75 / props.quantity * props.moveAmount}vw + ${props => -80 / props.quantity * props.moveAmount}px));
      filter: brightness(100%);
    }
  }
`;

const RightRect = styled(Rect)`
  animation: right ${props => props.delay}ms forwards ease;
  @keyframes right {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(${props => 75 / props.quantity * props.moveAmount}vw + ${props => 80 / props.quantity * props.moveAmount}px));
    }
  }
`;

const Text = styled.p`
  color: white;
  font-size: ${props => 300 / props.quantity}px;
  margin: 0;
`;