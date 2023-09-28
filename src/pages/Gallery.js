import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const GalleryContainer = styled.div`
  background: linear-gradient(to right, #214150, #203a43, #3a6c82);
  color: white;
  padding: 40px 0;
`;

const GalleryTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: #FFFFFF;
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Gallery = () => {
  
  const imageContext = require.context('../assets/images', false, /\.(jpg|jpeg|png)$/);
  const images = imageContext.keys().map(imageContext);

  return (
    <GalleryContainer>
      <div className="container">
        <GalleryTitle>My Gallery</GalleryTitle>
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
