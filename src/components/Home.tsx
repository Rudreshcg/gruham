import React from 'react';
import Slider from 'react-slick';
import { Container, Box, Typography, Link, useMediaQuery, useTheme } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Sample images for the carousel
const images = [
  'https://via.placeholder.com/1200x600?text=Image+1',
  'https://via.placeholder.com/1200x600?text=Image+2',
  'https://via.placeholder.com/1200x600?text=Image+3'
];

const Home: React.FC = () => {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <Box 
              key={index} 
              component="img" 
              src={img} 
              alt={`Slide ${index + 1}`} 
              sx={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
