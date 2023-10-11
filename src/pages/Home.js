import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import translations from '../components/resources/Translations';
import LanguageContext from '../components/resources/LanguageContext';

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
  const { language } = React.useContext(LanguageContext);
  const homeTranslations = translations[language].home;
  return (
    <HomeContainer>
      <Subtitle>{homeTranslations.subtitle}</Subtitle>
      <TitleWrapper>
        <GradientTextTitle>{homeTranslations.gradientTitle}</GradientTextTitle>
        <Title>{homeTranslations.title}</Title>
      </TitleWrapper>
      <Subtitle>{homeTranslations.subtitleRole}</Subtitle>
      <Description>
      {homeTranslations.description[0]}
      <br/>
      {homeTranslations.description[1]}
      <br/>
      {homeTranslations.description[2]}
      </Description>
      <Menu openModal={openModal} />
    </HomeContainer>
  );
};

export default Home;
