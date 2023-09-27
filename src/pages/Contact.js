import React from 'react';
import styled from 'styled-components';
import myImage from '../assets/images/backCoverDiscord-removebg-preview.png';

const GradientText = styled.span`
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  -webkit-background-clip: text;
  color: transparent;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-image: linear-gradient(to right, #0f2027, #203a43, #2c5364);
`;

const ContactTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px 0px 0px 15px;
  padding: 2rem;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
`;

const ContactInformation = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 2rem;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  border-radius: 0px 15px 15px 0px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${myImage}) center/cover no-repeat;
  z-index: 0;
  border-radius: inherit;
  opacity: 1;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  opacity: 0.85;
  z-index: 0;
  border-radius: inherit;
`;

const BoxGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
`;

const SingleBox = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;

  &::placeholder {
    color: white;
    opacity: 1; /* Firefox */
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;

  &::placeholder {
    color: white;
    opacity: 1; /* Firefox */
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  width: 35%;
  border: none;
  border-radius: 25px;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 10px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const GradientDefs = () => (
  <svg style={{ height: '0' }}>
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#4a90e2', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8e44ad', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Get In Touch With <GradientText>Me</GradientText></ContactTitle>
      <BoxGrid>
        <ContactForm>
          <Input type="text" placeholder="Your full name" />
          <Input type="email" placeholder="Your email address" />
          <Input type="text" placeholder="Subject" />
          <TextArea rows="4" placeholder="Write your message"></TextArea>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
        <ContactInformation>
        <BackgroundImage />
        <GradientOverlay />
          <GradientDefs />
          <SingleBox>
            <IconBox>
              <svg width="35px" height="35px" viewBox="0 0 16 16">
                <g fill="url(#iconGradient)">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </g>
              </svg>
            </IconBox>
            <TextInfo>
              <span>+1 438 391-2197</span>
            </TextInfo>
          </SingleBox>
          <SingleBox>
            <IconBox>
              <svg width="35px" height="35px" viewBox="0 0 16 16">
                <g fill="url(#iconGradient)">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </g>
              </svg>
            </IconBox>
            <TextInfo>
              <span>contact@atsys.ca</span>
              <span>support@atsys.ca</span>
            </TextInfo>
          </SingleBox>
          <SingleBox>
            <IconBox>
              <svg width="35px" height="35px" viewBox="0 0 16 16">
                <g fill="url(#iconGradient)">
                  <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z" />
                </g>
              </svg>
            </IconBox>
            <TextInfo>
              <span>2 Rte 223, Lacolle, Québec</span>
              <span>J0J 1J0, Canada</span>
            </TextInfo>
          </SingleBox>
        </ContactInformation>
      </BoxGrid>
    </ContactContainer>
  );
};

export default Contact;
