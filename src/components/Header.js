import React from 'react';
import styled from 'styled-components';
import LanguageContext from './resources/LanguageContext';
import translations from './resources/Translations';

const HeaderContainer = styled.div`
  background-color: #333;
  padding: 1rem;
  color: white;
  text-align: center;
  font-size: 2rem;
`;

const LanguageButton = styled.button`
  background-color: #555;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  float: right;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #777;
  }
`;


const Header = () => {
  const { language, setLanguage } = React.useContext(LanguageContext);
  const headerTranslations = translations[language].header;
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "eng" ? "fr" : "eng"));
  };

  return (
    <HeaderContainer>
      {headerTranslations}
      <LanguageButton onClick={toggleLanguage}>
        {language === "eng" ? "FR" : "ENG"}
      </LanguageButton>
    </HeaderContainer>
  );
};

export default Header;
