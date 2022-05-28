import React, {Component} from 'react';
import styled from "styled-components";

export default class Rectangle extends Component {
    render() {
        return (
            <Container
                height={this.props.height * .7}
                quantity={this.props.quantity}
            >
                {this.props.height}
            </Container>
        );
    }
}

const Container = styled.div`
  height: ${props => props.height}vh;
  width: ${props => 70 / props.quantity}vw;
  background: #0070f3;
  margin: ${props => -props.height}vh ${props => 40 / props.quantity}px 0;
`;