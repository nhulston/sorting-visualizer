import React, {Component} from 'react';
import styled, {keyframes} from "styled-components";

export default class Rectangle extends Component {
    render() {
        let moveAmount = this.props.dif
        let shift = 90 / this.props.quantity * moveAmount
        let height = Math.round(this.props.height * 0.35)
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
                shift={-shift}
                delay={this.props.delay}
            >
                {child}
            </LeftRect>
        } else if (this.props.right) {
            return <RightRect
                height={height}
                quantity={this.props.quantity}
                color={color}
                shift={shift}
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

const Rect = styled.div.attrs(props => ({
    style: {
        height: `${props.height}vh`,
    }
}))`
  position: relative;
  width: ${props => 80 / props.quantity}vw;
  background: ${props => props.color};
  margin: ${props => -props.height}vh ${props => 5 / props.quantity}vw 0;
  text-align: center;
  padding-top: ${props => 200 / props.quantity}px;
  border-radius: 8px 8px 0 0;
`;

const moveLeft = (shift) => keyframes`
  0% {
    z-index: -1;
    filter: brightness(100%);
  }
  50% {
    filter: brightness(95%);
  }
  100% {
    z-index: -1;
    transform: translateX(${shift}vw);
    filter: brightness(100%);
  }
`;

const moveRight = (shift) => keyframes`
  0% {
    z-index: 1;
  }
  100% {
    z-index: 1;
    transform: translateX(${shift}vw);
  }
`;

const LeftRect = styled(Rect)`
  animation: ${props => moveLeft(props.shift)} ${props => props.delay}ms forwards ease;
`;

const RightRect = styled(Rect)`
  animation: ${props => moveRight(props.shift)} ${props => props.delay}ms forwards ease;
`;

const Text = styled.p`
  color: white;
  font-size: ${props => 300 / props.quantity}px;
  margin: 0;
`;