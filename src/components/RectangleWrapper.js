import React, {Component} from 'react';
import styled from "styled-components";

export default class RectangleWrapper extends Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        );
    }
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
`;