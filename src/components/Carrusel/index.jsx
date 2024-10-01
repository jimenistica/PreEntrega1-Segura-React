import React from 'react';
import { Carousel } from 'react-bootstrap';


const Carrusel = ({images}) => {
  return(
    <Carousel className='carrusel' controls={false} indicators={false}>
    {images.map((image, index) => (
        <Carousel.Item className='custom-carousel' interval={3000} key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={`Slide ${index}`}
          />
          {image.caption && (
            <Carousel.Caption className='custom-text'>
              <p dangerouslySetInnerHTML={{ __html: image.caption.text }} />
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
  </Carousel>
  );
};

export default Carrusel;
