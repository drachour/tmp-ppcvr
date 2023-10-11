import React from 'react';
import styled from 'styled-components';
import translations from '../components/resources/Translations';
import LanguageContext from '../components/resources/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const GalleryContainer = styled.div`
  background: linear-gradient(to right, #214150, #203a43, #3a6c82);
  color: white;
  padding: 40px 0;
`;

const TitleWrapper = styled.div`
max-width: 1100px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 4rem;
`;

const GradientTextTitle = styled.span`
font-size: 2.5rem;
background: linear-gradient(to right, #4a90e2, #8e44ad);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
margin: 0;
line-height: 1;
`;

const GalleryTitle = styled.h1`
font-size: 2rem;
color: #ffffff;
margin-bottom: 1rem;
margin-right: .5rem;
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Gallery = () => {
  const { language } = React.useContext(LanguageContext);
  const galleryTranslations = translations[language].gallery;
  const imageContext = require.context('../assets/images', false, /\.(jpg|jpeg|png)$/);
  const images = imageContext.keys().map(imageContext);

  return (
    <GalleryContainer>
      <div className="container">
        <TitleWrapper>
          <GalleryTitle><GradientTextTitle>{galleryTranslations.gradientTitle}</GradientTextTitle> {galleryTranslations.title}</GalleryTitle>
        </TitleWrapper>
        <div className="row">
          {images.map((image, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <ImageContainer>
                <img src={image} alt={`Gallery ${index}`} className="img-fluid" />
              </ImageContainer>
            </div>
          ))}
        </div>
      </div>
    </GalleryContainer>
  );
};

export default Gallery;
