import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Lozenge } from './common/Lozenge';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import Portfolio from '../pages/Portfolio';
import Service from '../pages/Service';
import Faq from '../pages/Faq';
import translations from './resources/Translations';
import LanguageContext from './resources/LanguageContext';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 0px;
  background-color: transparent;
  &:hover {
    color: lime;
  }
`;

const LinkText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
`;

const Menu = ({ openModal }) => {
    const handleMenuItemClick = (content) => {
      openModal(content);
    };

    const { language } = React.useContext(LanguageContext);
    const menuTranslations = translations[language].menu;

  return (
    <MenuContainer>
        <Row>
            <Lozenge onClick={() => handleMenuItemClick(<About/>)}>
                <StyledLink>
                    <LinkText><i class="bi bi-person-circle"></i>{menuTranslations.about}</LinkText>
                </StyledLink>
            </Lozenge>
            <Lozenge onClick={() => handleMenuItemClick(<Service/>)}>
                <StyledLink>
                    <LinkText><i class="bi bi-gear"></i>{menuTranslations.service}</LinkText>
                </StyledLink>
            </Lozenge>
            <Lozenge onClick={() => handleMenuItemClick(<Faq/>)}>
                <StyledLink>
                    <LinkText><i class="bi bi-info-circle"></i>{menuTranslations.faq}</LinkText>
                </StyledLink>
            </Lozenge>
        </Row>
        <Row>
            <Lozenge onClick={() => handleMenuItemClick(<Portfolio/>)}>
                <StyledLink>
                    <LinkText><i class="bi bi-folder"></i>{menuTranslations.portfolio}</LinkText>
                </StyledLink>
            </Lozenge>
            <Lozenge onClick={() => handleMenuItemClick(<Gallery/>)}>
                <StyledLink>
                    <LinkText><i class="bi bi-image"></i>{menuTranslations.gallery}</LinkText>
                </StyledLink>
            </Lozenge>
        </Row>
        <Row>
            <Lozenge onClick={() => handleMenuItemClick(<Contact />)}>
                <StyledLink>
                    <LinkText><i class="bi bi-person-plus"></i>{menuTranslations.contact}</LinkText>
                </StyledLink>
            </Lozenge>
        </Row>
    </MenuContainer>
  );
};

export default Menu;
