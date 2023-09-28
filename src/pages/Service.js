import React from 'react';
import styled from 'styled-components';
import CardPrice from '../components/CardPrice';

const ServiceSection = styled.div`
  background-color: #0f2027;
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
    const serviceData = [
        {
            icon: '🖥',
            title: 'Application Windows',
            description: 'Developing desktop applications for Windows.'
        },
        {
            icon: '💻',
            title: 'Web Development',
            description: 'Creating stunning websites and web apps.'
        },
        {
            icon: '🤖',
            title: 'Discord Bot',
            description: 'Creating smart and interactive Discord bots.'
        },

        {
            icon: '🎮',
            title: 'Game Development',
            description: 'Creating interactive and fun games with Unity.'
        },
        {
            icon: '📱',
            title: 'Mobile App Development',
            description: 'Creating mobile applications for Android.'
        },
        {
            icon: '🛠',
            title: 'DevOps',
            description: 'Automating workflows and optimizing performance.'
        }
    ];

    return (
        <ServiceSection>
            <Container>
                <SectionTitle><GradientText>My</GradientText> Experties</SectionTitle>
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
                <h1>Have Any Project In Mind?</h1>
                <ProposalButton>Submit A Proposal</ProposalButton>
            </DividerContainer>
            <Container>
                <CardPrice/>
            </Container>
        </ServiceSection>
    );
};

export default Services;
