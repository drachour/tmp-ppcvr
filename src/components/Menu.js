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

  return (
    <MenuContainer>
        <Row>
            <Lozenge onClick={() => handleMenuItemClick(<About/>)}>
                <StyledLink>
                    <LinkText><i class="bi bi-person-circle"></i> ABOUT</LinkText>
                </StyledLink>
            </Lozenge>
            <Lozenge onClick={() => handleMenuItemClick(<Service/>)}>
                <StyledLink>
                    <LinkText><i class="bi bi-gear"></i> SERVICE</LinkText>
                </StyledLink>
            </Lozenge>
            <Lozenge onClick={() => handleMenuItemClick(<Faq/>)}>
                <StyledLink>
                    <LinkText><i class="bi bi-info-circle"></i> FAQ</LinkText>
                </StyledLink>
            </Lozenge>
        </Row>
        <Row>
            <Lozenge onClick={() => handleMenuItemClick(<Portfolio/>)}>
                <StyledLink>
                    <LinkText><i class="bi bi-folder"></i>PORTFOLIO</LinkText>
                </StyledLink>
            </Lozenge>
            <Lozenge onClick={() => handleMenuItemClick(<Gallery/>)}>
                <StyledLink>
                    <LinkText><i class="bi bi-image"></i>GALLERY</LinkText>
                </StyledLink>
            </Lozenge>
        </Row>
        <Row>
            <Lozenge onClick={() => handleMenuItemClick(<Contact />)}>
                <StyledLink>
                    <LinkText><i class="bi bi-person-plus"></i>CONTACT</LinkText>
                </StyledLink>
            </Lozenge>
        </Row>
    </MenuContainer>
  );
};

export default Menu;
