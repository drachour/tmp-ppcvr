import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 10rem);
  background-image: linear-gradient(to right, #0f2027, #203a43, #2c5364);
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #ffffff;
  margin: 0;
  margin-left: 5px;
  line-height: 1;
`;

const GradientTextTitle = styled.h1`
  font-size: 4rem;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  line-height: 1;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #ffffff;
`;

const Description = styled.p`
  margin-bottom: 45px;
`;

const Home = ({ openModal }) => {
  return (
    <HomeContainer>
      <Subtitle>Hello!</Subtitle>
      <TitleWrapper>
        <GradientTextTitle>I'M</GradientTextTitle>
        <Title>Gael Achour</Title>
      </TitleWrapper>
      <Subtitle>Back End Developer</Subtitle>
      <Description>
        I am Gael Achour. <br />
        I am simple, creative, enthusiastic, and autonomous. <br />
        I always like to create new and interesting programs and templates that will be helpful for others
      </Description>
      <Menu openModal={openModal} />
    </HomeContainer>
  );
};

export default Home;
