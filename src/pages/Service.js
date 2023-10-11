import React from 'react';
import styled from 'styled-components';
import CardPrice from '../components/CardPrice';
import translations from '../components/resources/Translations';
import LanguageContext from '../components/resources/LanguageContext';

const ServiceSection = styled.div`
background: linear-gradient(to right, #214150, #203a43, #3a6c82);
  padding: 4rem 0;
  color: #fff;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

const GradientText = styled.span`
  font-size: 2.5rem;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  line-height: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: #ffffff;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #4a90e2;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
`;

const DividerContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  padding: 2rem;
  margin-bottom: 4rem;
`;

const ProposalButton = styled.button`
  background: #fff;
  color: #0f2027;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 15px;
  margin-left: auto;
`;

const Services = () => {
  const { language } = React.useContext(LanguageContext);
  const serviceTranslations = translations[language].services;

  const serviceData = serviceTranslations.cards;

  return (
      <ServiceSection>
          <Container>
              <SectionTitle>
                  <GradientText>{serviceTranslations.sectionTitle.my}</GradientText> {serviceTranslations.sectionTitle.expertise}
              </SectionTitle>
              <ServiceGrid>
                  {serviceData.map((service, index) => (
                      <ServiceCard key={index}>
                          <CardIcon>{service.icon}</CardIcon>
                          <CardTitle>{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                      </ServiceCard>
                  ))}
              </ServiceGrid>
          </Container>
          <DividerContainer>
              <h1>{serviceTranslations.projectInMind}</h1>
              <ProposalButton>{serviceTranslations.submitProposal}</ProposalButton>
          </DividerContainer>
          <Container>
              <CardPrice/>
          </Container>
      </ServiceSection>
  );
};

export default Services;
