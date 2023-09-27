import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Lozenge } from './common/Lozenge';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';

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
  transform: rotate(-45deg);
`;

const Menu = ({ openModal }) => {
    const handleMenuItemClick = (content) => {
      openModal(content);
    };

  return (
    <MenuContainer>
        <Row>
            <Lozenge>
                <StyledLink to="/">
                    <LinkText>Home</LinkText>
                </StyledLink>
            </Lozenge>
            <Lozenge onClick={() => handleMenuItemClick(<Skills/>)}>
                <StyledLink>
                    <LinkText>Skills</LinkText>
                </StyledLink>
            </Lozenge>
            <Lozenge onClick={() => handleMenuItemClick(<Projects/>)}>
                <StyledLink>
                    <LinkText>Projects</LinkText>
                </StyledLink>
            </Lozenge>
        </Row>
        <Row>
            <Lozenge onClick={() => handleMenuItemClick(<About/>)}>
                <StyledLink>
                    <LinkText>About</LinkText>
                </StyledLink>
            </Lozenge>
            <Lozenge onClick={() => handleMenuItemClick(<Experience/>)}>
                <StyledLink>
                    <LinkText>Experience</LinkText>
                </StyledLink>
            </Lozenge>
        </Row>
        <Row>
            <Lozenge onClick={() => handleMenuItemClick(<Contact />)}>
                <StyledLink>
                    <LinkText>Contact</LinkText>
                </StyledLink>
            </Lozenge>
        </Row>
    </MenuContainer>
  );
};

export default Menu;
