import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Portfolio from './pages/Portfolio';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Modal from './components/common/Modal';
import LanguageProvider from './components/resources/LanguageProvider';
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
    <LanguageProvider>
      <Router>
        <AppContainer>
          <Header />

          <Routes>
            <Route index element={<Home openModal={openModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>

          {isModalOpen && <Modal show={isModalOpen} onClose={closeModal}>{modalContent}</Modal>}

          <Footer />
        </AppContainer>
      </Router>
    </LanguageProvider>
  );
}

export default App;