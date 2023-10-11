import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import translations from '../components/resources/Translations';
import LanguageContext from '../components/resources/LanguageContext';

const FaqContent = styled.div`
  padding: 40px 0;
  background: linear-gradient(to right, #214150, #203a43, #3a6c82);
`;
const GradientText = styled.span`
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  -webkit-background-clip: text;
  color: transparent;
`;
const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 5rem;
`;

const FaqBox = styled.div`
  background: linear-gradient(to right, #2c5685, #522764);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const SingleCard = styled.div`
  margin-bottom: 15px;
`;

const FaqHeader = styled.div`
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: ${props => (props.isOpen ? '10px 10px 0px 0px' : '10px')};
`;

const IconBox = styled.div`
  margin-right: 10px;
`;

const FaqBody = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 10px;
`;

const Faq = () => {
  const { language } = useContext(LanguageContext);
  const faqTranslations = translations[language].faq;

  const [isOpen, setIsOpen] = useState(null);

  const toggleFaq = index => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <FaqContent>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <SectionTitle>{faqTranslations.title} <GradientText>{faqTranslations.gradientText}</GradientText> </SectionTitle>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            {faqTranslations.faqs.map((faq, index) => (
              <FaqBox key={index}>
                <SingleCard>
                  <FaqHeader onClick={() => toggleFaq(index)} isOpen={isOpen === index}>
                    <h3>{faq.question}</h3>
                    <IconBox>
                      <FontAwesomeIcon icon={isOpen === index ? faMinus : faPlus} />
                    </IconBox>
                  </FaqHeader>
                  <FaqBody isOpen={isOpen === index}>
                    <p>{faq.answer}</p>
                  </FaqBody>
                </SingleCard>

              </FaqBox>
            ))}
          </div>
        </div>
      </div>
    </FaqContent>
  );
};

export default Faq;
