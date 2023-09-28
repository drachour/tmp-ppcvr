import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  margin-bottom: 4rem;
  color: #fff;
`;

const GradientText = styled.span`
  font-size: 2.5rem;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  -webkit-background-clip: text;
  color: transparent;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
`;

const TopSection = styled.div`
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 15px 15px 0px 0px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const MiddleSection = styled.div`
  height: 225px;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const BottomSection = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const StartButton = styled.button`
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(to right, #8e44ad, #4a90e2);
  }
`;


const CardPrice = () => {
  const pricingData = [
    {
      title: 'Application Windows',
      icon: '🖥',
      items: [
        { label: 'Basic App', price: '$250.00', unit: '(p/pjct)' },
        { label: 'Database Integration', price: '$350.00', unit: '(p/pjct)' },
        { label: 'Advanced Features', price: '$500.00', unit: '(p/pjct)' },
        { label: 'User Interface Design', price: '$150.00', unit: '(p/pjct)' },
        { label: 'Security Features', price: '$300.00', unit: '(p/pjct)' }
      ],
    },
    {
      title: 'Web Development',
      icon: '💻',
      items: [
        { label: 'Front-end Development', price: '$300.00', unit: '(p/pjct)' },
        { label: 'Back-end Development', price: '$400.00', unit: '(p/pjct)' },
        { label: 'Full Stack', price: '$600.00', unit: '(p/pjct)' },
        { label: 'SEO Optimization', price: '$200.00', unit: '(p/pjct)' },
        { label: 'E-commerce Integration', price: '$500.00', unit: '(p/pjct)' }
      ],
    },
    {
      title: 'Discord Bot',
      icon: '🤖',
      items: [
        { label: 'Basic Bot', price: '$150.00', unit: '(p/pjct)' },
        { label: 'Moderation Bot', price: '$250.00', unit: '(p/pjct)' },
        { label: 'Advanced Bot', price: '$400.00', unit: '(p/pjct)' },
        { label: 'Music Bot', price: '$300.00', unit: '(p/pjct)' },
        { label: 'Chat Bot', price: '$350.00', unit: '(p/pjct)' }
      ],
    },
    {
      title: 'Game Development',
      icon: '🎮',
      items: [
        { label: '2D Game', price: '$500.00', unit: '(p/pjct)' },
        { label: '3D Game', price: '$1000.00', unit: '(p/pjct)' },
        { label: 'VR Game', price: '$1500.00', unit: '(p/pjct)' },
        { label: 'Game Design', price: '$250.00', unit: '(p/pjct)' },
        { label: 'Level Design', price: '$300.00', unit: '(p/pjct)' }
      ],
    },
    {
      title: 'Mobile App Development',
      icon: '📱',
      items: [
        { label: 'Android App', price: '$400.00', unit: '(p/pjct)' },
        { label: 'Cross-Platform', price: '$700.00', unit: '(p/pjct)' },
        { label: 'UI/UX Design', price: '$300.00', unit: '(p/pjct)' },
        { label: 'In-App Purchases', price: '$250.00', unit: '(p/pjct)' }
      ],
    }
  ];
  
  return (
    <Container>
      <SectionTitle>
        <GradientText>Pricing</GradientText> Plan
      </SectionTitle>
      <PricingGrid>
        {pricingData.map((pricing, index) => (
          <PricingCard key={index}>
            <TopSection>
              <Title>{pricing.title}</Title>
              <IconContainer>{pricing.icon}</IconContainer>
            </TopSection>
            <MiddleSection>
              <ItemList>
                {pricing.items.map((item, i) => (
                  <Item key={i}>
                    {item.label}{' '}
                    <span>
                      {item.price} <small>{item.unit}</small>
                    </span>
                  </Item>
                ))}
              </ItemList>
            </MiddleSection>
            <BottomSection>
              <StartButton>Start A Project</StartButton>
            </BottomSection>
          </PricingCard>
        ))}
      </PricingGrid>
    </Container>
  );
};

export default CardPrice;