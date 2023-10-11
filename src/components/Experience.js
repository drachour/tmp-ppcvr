import React from 'react';
import styled from 'styled-components';
import translations from './resources/Translations';
import LanguageContext from './resources/LanguageContext';

const Education = styled.div`
  padding: 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const ColMd6 = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const SingleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #203c60;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  width: 390px;
`;

const Duration = styled.p`
  border-radius: 10px;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  font-size: 1rem;
  color: #fff;
  width: 150px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
`;

const BoxGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const EmptyBox = styled.div`
  flex:1;
`;

const EmptyBoxLeft = styled.div`
  width: 75px;
  height: 70px;
  border-left: 2px solid #4a90e2;
  border-bottom: 2px solid #4a90e2;
  border-top: none;
  border-right: none;
  margin-left: 20%;
`;

const EmptyBoxRight = styled.div`
  width: 75px;
  height: 70px;
  border-left: none;
  border-bottom: 2px solid #4a90e2;
  border-top: none;
  border-right: 2px solid #4a90e2;
  margin-right: 20%;
`;


const Experience = () => {
  const { language } = React.useContext(LanguageContext);
  const experienceTranslations = translations[language].experience;

  return (
    <Education>
      <Container>
        <Row>
          <ColMd6>
            <SectionTitle>{experienceTranslations.educationTitle}</SectionTitle>
            {experienceTranslations.eductionCards.map((education, index) => (
              <BoxGrid key={index}>
                {index % 2 === 0 && <EmptyBoxLeft />}
                <SingleBox>
                  <Duration>{education.duration}</Duration>
                  <Title>{education.title}</Title>
                  <p>{education.location}</p>
                </SingleBox>
                {index % 2 === 1 && <EmptyBoxRight />}
              </BoxGrid>
            ))}
          </ColMd6>

          <ColMd6>
            <SectionTitle>{experienceTranslations.experienceTitle}</SectionTitle>
            {experienceTranslations.experienceCards.map((experience, index) => (
              <BoxGrid key={index}>
                {index % 2 === 0 && <EmptyBoxLeft />}
                <SingleBox>
                  <Duration>{experience.duration}</Duration>
                  <Title>{experience.title}</Title>
                  <p>{experience.location}</p>
                </SingleBox>
                {index % 2 === 1 && <EmptyBoxRight />}
              </BoxGrid>
            ))}
          </ColMd6>
        </Row>
      </Container>
    </Education>
  );
};

export default Experience;
