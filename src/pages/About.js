import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import myImage from '../assets/images/backCoverDiscord-removebg-preview.png';
import Experience from '../components/Experience';
import translations from '../components/resources/Translations';
import LanguageContext from '../components/resources/LanguageContext';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(to right, #214150, #203a43, #3a6c82);
  border-radius: 10px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const Column = styled.div`
  flex: 1;
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const GradientTextTitle = styled.h1`
  font-size: 2rem;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  line-height: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const AboutTitle = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1rem;
  margin-right: .5rem;
`;

const AboutText = styled.p`
  color: #999999;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: justify;
  width: 70%;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Skill = styled.div`
  color: #ffffff;
  margin: 15px;
  width: 175px;
`;

const DividerContainer = styled.div`
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  padding: 2rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const SingleBox = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

const PartIcon = styled.div`
  font-size: 2rem;
`;

const Count = styled.h2`
  margin: 0;
  font-size: 2rem;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const About = () => {
  const { language } = React.useContext(LanguageContext);
  const aboutTranslations = translations[language].about;
  return (
    <AboutContainer>
      <TopContainer>
        <Column>
          <AboutImage src={myImage} alt="About Me" />
        </Column>
        <Column>
          <TitleWrapper>
            <AboutTitle>{aboutTranslations.title}</AboutTitle>
            <GradientTextTitle>{aboutTranslations.me}</GradientTextTitle>
          </TitleWrapper>
          <AboutText>
            {aboutTranslations.description[0]}
            <br />
            {aboutTranslations.description[1]}
          </AboutText>
          <SkillContainer>
            <Skill>
              <CircularProgressbar
                value={75}
                text={`${aboutTranslations.graphicsSkill} ${75}%`}
                styles={buildStyles({
                  textSize: "8px",
                  textColor: "#ffffff",
                  pathColor: "#4a90e2",
                  trailColor: "#ffffff"
                })}
              />
            </Skill>
            <Skill>
              <CircularProgressbar
                value={90}
                text={`${aboutTranslations.developingSkill} ${90}%`}
                styles={buildStyles({
                  textSize: "8px",
                  textColor: "#ffffff",
                  pathColor: "#4a90e2",
                  trailColor: "#ffffff"
                })}
              />
            </Skill>
          </SkillContainer>
          <SkillContainer>
            <Skill>
              <CircularProgressbar
                value={60}
                text={`${aboutTranslations.writingSkill} ${60}%`}
                styles={buildStyles({
                  textSize: "8px",
                  textColor: "#ffffff",
                  pathColor: "#4a90e2",
                  trailColor: "#ffffff"
                })}
              />
            </Skill>
            <Skill>
              <CircularProgressbar
                value={90}
                text={`${aboutTranslations.uiuxSkill} ${90}%`}
                styles={buildStyles({
                  textSize: "8px",
                  textColor: "#ffffff",
                  pathColor: "#4a90e2",
                  trailColor: "#ffffff"
                })}
              />
            </Skill>
          </SkillContainer>
        </Column>
      </TopContainer>
      <DividerContainer>
        <Row>
          <SingleBox>
            <PartIcon><i className="bi bi-patch-check"></i></PartIcon>
            <Count>7+</Count>
            <Description>{aboutTranslations.yearsExperience}</Description>
          </SingleBox>
          <SingleBox>
            <PartIcon><i className="bi bi-list-check"></i></PartIcon>
            <Count>10+</Count>
            <Description>{aboutTranslations.projectCompleted}</Description>
          </SingleBox>
          <SingleBox>
            <PartIcon><i className="fas fa-users"></i></PartIcon>
            <Count>52+</Count>
            <Description>{aboutTranslations.happyClients}</Description>
          </SingleBox>
          <SingleBox>
            <PartIcon><i className="fas fa-mug-hot"></i></PartIcon>
            <Count>2 031 423+</Count>
            <Description>{aboutTranslations.cupsOfTea}</Description>
          </SingleBox>
        </Row>
      </DividerContainer>
      <Experience />
    </AboutContainer>
  );
};

export default About;
