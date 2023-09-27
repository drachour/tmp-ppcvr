import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #333;
  padding: 1rem;
  color: white;
  text-align: center;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      Gael Achour's Portfolio
    </HeaderContainer>
  );
};

export default Header;
