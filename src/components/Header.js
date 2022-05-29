import React, {Component} from 'react';
import styled from "styled-components";
import {AiFillHome} from "react-icons/ai"
import Slider from 'rc-slider';

export default class Header extends Component {
    render() {
        return (
            <Container>
                <IconWrapper href="/">
                    <AiFillHome/>
                </IconWrapper>
                <Button
                    onClick={this.props.onRegenerate}
                >
                    Regenerate
                </Button>
                <SliderContainer>
                    <Text>Array Size</Text>
                    <Slider
                        min={4}
                        max={20}
                        defaultValue={12}
                        onChange={this.props.onChangeArrSize}
                    />
                </SliderContainer>
                <SliderContainer>
                    <Text>Sorting Speed</Text>
                    <Slider
                        min={10}
                        max={1500}
                        defaultValue={755}
                        onChange={this.props.onChangeSortingSpeed}
                    />
                </SliderContainer>
                <Button
                    onClick={this.props.sort}
                >
                    Sort
                </Button>
            </Container>
        );
    }
}

const Container = styled.div`
  top: 0; left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px;
  align-items: center;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  font-size: 24px;
`;

const Button = styled.button`
  border: none;
  background-color: #0070f3;
  color: white;
  font-size: 24px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, .3);
  padding: 0 25px;
  height: 60px;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.05) 0 0);
  }
  
  &:active {
    transition: 2s ease;
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
  }
`;

const IconWrapper = styled.a`
  font-size: 36px;
  &:hover {
    color: #0070f3; //TODO replace all occurrences with variable
    transform: scale(1.05);
    transition: .2s ease;
  }
`;