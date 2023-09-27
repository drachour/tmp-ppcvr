import React from 'react';
import styled from 'styled-components';

const Education = styled.div`
  padding: 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const ColMd6 = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const SingleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #203c60;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const Duration = styled.p`
  border-radius: 10px;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  font-size: 1rem;
  color: #fff;
  width: 150px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
`;

const BoxGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const EmptyBox = styled.div`
  flex:1;
`;

const EmptyBoxLeft = styled.div`
  width: 75px;
  height: 70px;
  border-left: 2px solid #4a90e2;
  border-bottom: 2px solid #4a90e2;
  border-top: none;
  border-right: none;
  margin-left: 20%;
`;

const EmptyBoxRight = styled.div`
  width: 75px;
  height: 70px;
  border-left: none;
  border-bottom: 2px solid #4a90e2;
  border-top: none;
  border-right: 2px solid #4a90e2;
  margin-right: 20%;
`;


const Experience = () => {
  return (
    <Education>
      <Container>
        <Row>
          <ColMd6>
            <SectionTitle>Education</SectionTitle>
            <BoxGrid>
              <SingleBox>
                <Duration>01/2022 – 12/2023</Duration>
                <Title>Programmeur Analyste</Title>
                <p>Collège Lasalle, Montréal, Québec</p>
              </SingleBox>
              <EmptyBox></EmptyBox>
            </BoxGrid>
          </ColMd6>
          <ColMd6>
            <SectionTitle>Experience</SectionTitle>
            <BoxGrid>
              <SingleBox>
                <Duration>2017 - Now</Duration>
                <Title>Programmeur Analyste</Title>
                <p>Personnel | Lacolle, Québec | Freelance</p>
              </SingleBox>
              <EmptyBox></EmptyBox>
            </BoxGrid>
            <BoxGrid>
              <EmptyBoxLeft></EmptyBoxLeft>
              <SingleBox>
                <Duration>2020 - 2022</Duration>
                <Title>Web Dev</Title>
                <p>Les Entreprises J.F. Faucher Inc. | La Prairie, Québec</p>
              </SingleBox>
            </BoxGrid>
            <BoxGrid>
              <SingleBox>
                <Duration>2017 - 2022</Duration>
                <Title>IT</Title>
                <p>Les Entreprises J.F. Faucher Inc. | La Prairie, Québec</p>
              </SingleBox>
              <EmptyBoxRight></EmptyBoxRight>
            </BoxGrid>
            <BoxGrid>
              <EmptyBoxLeft></EmptyBoxLeft>
              <SingleBox>
                <Duration>2015 - 2017</Duration>
                <Title>Information department team leader</Title>
                <p>Les Entreprises J.F. Faucher Inc. | La Prairie, Québec</p>
              </SingleBox>
            </BoxGrid>
          </ColMd6>
        </Row>
      </Container>
    </Education>
  );
};

export default Experience;
