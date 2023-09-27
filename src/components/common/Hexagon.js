import styled from 'styled-components';

export const Hexagon = styled.div`
  width: 100px;
  height: 57.74px;
  background-color: #4a90e2;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    z-index: -1;
  }

  &::before {
    top: -28.9px;
    border-bottom: 28.9px solid #4a90e2;
  }

  &::after {
    bottom: -28.9px;
    border-top: 28.9px solid #4a90e2;
  }
`;

export default Hexagon;
