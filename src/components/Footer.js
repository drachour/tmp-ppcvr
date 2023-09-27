import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #111;
  padding: 1rem;
  color: white;
  text-align: center;
  font-size: 1rem;
  margin-top: auto; // This pushes the footer to the bottom
`;

const Footer = () => {
  return (
    <FooterContainer>
      Copyright © 2023 | Developed by Gael Achour
    </FooterContainer>
  );
};

export default Footer;
