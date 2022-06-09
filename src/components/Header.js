import React, {Component} from 'react';
import styled from "styled-components";
import {AiFillHome} from "react-icons/ai"
import Slider from 'rc-slider';

export default class Header extends Component {
    render() {
        return (
            <Container>
                <InnerWrapper numChildren={3}>
                    <IconWrapper href="/">
                        <AiFillHome/>
                    </IconWrapper>
                    <SliderContainer>
                        <Text>Array Size</Text>
                        <Slider
                            min={4}
                            max={50}
                            defaultValue={27}
                            onChange={this.props.onChangeArrSize}
                        />
                    </SliderContainer>
                    <SliderContainer>
                        <Text>Sorting Speed</Text>
                        <Slider
                            min={10}
                            max={1500}
                            defaultValue={1000}
                            onChange={this.props.onChangeSortingSpeed}
                        />
                    </SliderContainer>
                </InnerWrapper>
                <InnerWrapper numChildren={2}>
                    <Button
                        onClick={this.props.onRegenerate}
                    >
                        Regenerate
                    </Button>
                    <Button
                        onClick={this.props.sort}
                    >
                        Sort
                    </Button>
                </InnerWrapper>
            </Container>
        );
    }
}

const Container = styled.div`
  top: 0; left: 0;
  display: flex;
  flex-direction: row;
  margin: 50px 0;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 950px) {
    transform: scale(.8) translateX(-100px) translateY(-30px);
    width: 120%;
  }

  @media (max-width: 600px) {
    transform: scale(.6) translateX(-230px) translateY(-50px);
    width: 150%;
  }

  @media (max-width: 500px) {
    transform: scale(.6) translateX(-280px) translateY(-70px);
    width: 180%;
  }

  @media (max-width: 400px) {
    transform: scale(.6) translateX(-200px) translateY(-90px);
    width: 180%;
  }
`;

const InnerWrapper = styled.div`
  width: ${props => props.numChildren * 20}%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 950px) {
    width: 100%
  }
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  align-items: center;
  margin: 0 20px;
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
  margin: 0 10px;

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
  margin: 0 10px;
  &:hover {
    color: #0070f3; //TODO replace all occurrences with variable
    transform: scale(1.05);
    transition: .2s ease;
  }
`;