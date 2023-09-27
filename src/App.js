import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './components/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Modal from './components/common/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

const AppContainer = styled.div`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <AppContainer>
        <Header />

        <Routes>
          <Route index element={<Home openModal={openModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {isModalOpen && <Modal show={isModalOpen} onClose={closeModal}>{modalContent}</Modal>}
        
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;