import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-image: linear-gradient(to right, #0f2027, #203a43, #2c5364);
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  a {
    color: #ffffff;
    text-decoration: underline;
  }
`;

const ContactForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #ffffff;
  color: #0f2027;
  font-size: 1rem;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactInfo>Email: <a href="mailto:example@example.com">example@example.com</a></ContactInfo>
      <ContactInfo>LinkedIn: <a href="https://www.linkedin.com/in/example/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></ContactInfo>

      <ContactForm>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea rows="4" placeholder="Your Message"></TextArea>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
