import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
    const [isOpen, setIsOpen] = useState(null);

    const toggleFaq = index => {
        setIsOpen(isOpen === index ? null : index);
    };

    const faqs = [
        {
            question: 'How long does it take to build a website?',
            answer: 'The time it takes to build a website can vary depending on the complexity and requirements. Generally, a simple website can take 2-4 weeks.',
        },
        {
            question: 'Do you redesign existing websites?',
            answer: 'Yes, we do offer redesign services for existing websites.',
        },
        {
            question: 'Do you work internationally?',
            answer: 'Yes, we work with clients from all over the world.',
        },
        {
            question: 'Will my website work on smartphones and tablets?',
            answer: 'Absolutely, we ensure all our designs are fully responsive and compatible with different devices.',
        },
        {
            question: 'Can you help me rank high in Google?',
            answer: 'Yes, we offer SEO services to help your website rank higher in search engines.',
        },
        {
            question: 'How much does a website cost?',
            answer: 'The cost of a website depends on various factors such as features, complexity, and design elements. Contact us for a detailed quote.',
        },
        {
            question: 'Do you offer maintenance services?',
            answer: 'Yes, we offer various maintenance packages to keep your website up to date.',
        },
        {
            question: 'Can I update the website myself?',
            answer: 'If your website is built on a CMS, you can update content yourself. We also provide a guide on how to do so.',
        },
    ];

    return (
        <FaqContent>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <SectionTitle>Frequently Asked <GradientText>Questions</GradientText></SectionTitle>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">

                        {faqs.map((faq, index) => (
                            <FaqBox>
                                <SingleCard key={index}>
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
