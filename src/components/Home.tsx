import React from 'react';
import Slider from 'react-slick';
import { Container, Box, Typography, Link, useMediaQuery, useTheme } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Sample images for the carousel
const images = [
  'https://www.ashwinarchitects.com/wp-content/uploads/2023/03/best-interior-designers-in-bangalore.jpg.webp',
  'https://www.ashwinarchitects.com/wp-content/uploads/2023/03/leading-residential-architects-in-bangalore.jpg.webp',
  'https://www.ashwinarchitects.com/wp-content/uploads/2023/03/best-bangalore-architects.jpg.webp',
  'https://www.ashwinarchitects.com/wp-content/uploads/2023/03/best-architecture-firm-in-bangalore.jpg.webp'
];
// https://ashwinarchitects.com/wp-content/uploads/2023/03/leading-residential-architects-in-bangalore.jpg
const Home: React.FC = () => {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
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
