import React from 'react';
import styled from 'styled-components';
import translations from './resources/Translations';
import LanguageContext from './resources/LanguageContext';

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
  const { language } = React.useContext(LanguageContext);
  const cardPriceTranslations = translations[language].cardPrice;

  return (
    <Container>
      <SectionTitle>
        <GradientText>{cardPriceTranslations.sectionTitle.pricing}</GradientText> {cardPriceTranslations.sectionTitle.plan}
      </SectionTitle>
      <PricingGrid>
        {cardPriceTranslations.cards.map((pricing, index) => (
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
              <StartButton>{cardPriceTranslations.startButton}</StartButton>
            </BottomSection>
          </PricingCard>
        ))}
      </PricingGrid>
    </Container>
  );
};

export default CardPrice;