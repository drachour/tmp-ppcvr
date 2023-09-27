import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div.attrs((props) => ({
  style: {
    display: props.show ? 'flex' : 'none',
  },
}))`
  position: fixed;
  top: 15%;
  left: 10%;
  width: 80%;
  height: 75%;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  
  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #4a90e2, #8e44ad); 
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #8e44ad, #4a90e2); 
  }
`;


const ModalContent = styled.div`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  z-index: 10000;
`;


const CloseButton = styled.button`
  position: fixed;
  top: 15%;
  right: 11%;
  width: 30px;
  height: 30px;
  background: linear-gradient(to bottom right, #4a90e2, #8e44ad);
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 0% 25%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
  z-index: 1000;  // Ensure it stays above other elements

  &:hover {
    background: linear-gradient(to bottom right, #8e44ad, #4a90e2);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;


const Modal = ({ show, children, onClose }) => (
  <ModalWrapper show={show ? 'true' : 'false'}>
    <ModalContent>
      <CloseButton onClick={onClose}>X</CloseButton>
      {children}
    </ModalContent>
  </ModalWrapper>
);
export default Modal;
