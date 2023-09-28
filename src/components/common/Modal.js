import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div.attrs((props) => ({
  style: {
    display: props.show ? 'flex' : 'none',
  },
}))`
  position: fixed;
  top: 9%;
  left: 3%;
  width: 94%;
  height: 85%;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  border-radius: 10px;
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
  background: linear-gradient(to right, #214150, #203a43, #3a6c82); 
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  z-index: 10000;
  border-radius: 10px;
`;


const CloseButton = styled.button`
  position: fixed;
  top: 9%;
  right: 3.8%;
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
