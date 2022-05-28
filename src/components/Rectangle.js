import React, {Component} from 'react';
import styled from "styled-components";

export default class Rectangle extends Component {
    render() {
        return (
            <Container
                height={this.props.height * .35}
                quantity={this.props.quantity}
            >
                <Text suppressHydrationWarning quantity={this.props.quantity}>
                    {this.props.height}
                </Text>
            </Container>
        );
    }
}

const Container = styled.div`
  height: ${props => props.height}vh;
  width: ${props => 75 / props.quantity}vw;
  background: #0070f3;
  margin: ${props => -props.height}vh ${props => 40 / props.quantity}px 0;
  text-align: center;
  padding-top: ${props => 200 / props.quantity}px;
`;

const Text = styled.p`
  color: white;
  font-size: ${props => 300 / props.quantity}px;
  margin: 0;
`;