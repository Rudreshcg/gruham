import React from 'react';
import Slider from 'react-slick';
import { Container, Box, Typography, Link } from '@mui/material';
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
    <div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index} component="img" src={img} alt={`Slide ${index + 1}`} sx={{ width: '100%', height: 'auto' }} />
        ))}
      </Slider>
      <Container sx={{ mt: 4, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', py: 6 }}>
        <Box sx={{ flex: 1, mx: 2 }}>
          <Typography variant="h6" gutterBottom>SERVICES</Typography>
          {/* <Typography variant="h6">Residential Architecture</Typography>
          <Typography variant="h6">Commercial Architecture</Typography>
          <Typography variant="h6">Retail Architecture</Typography> */}
        </Box>
        <Box sx={{ flex: 1, mx: 2 }}>
          <Typography variant="h6" gutterBottom>CONTACT</Typography>
          {/* <Typography >Ashwin Architects</Typography>
          <Typography>23, Ratna Vilas Rd, Basavanagudi,</Typography>
          <Typography>Bengaluru, Karnataka 560004, India</Typography>
          <Typography>Call: +91 (702) 6524524</Typography>
          <Typography>Email: info@ashwinarchitects.com</Typography> */}
        </Box>
        <Box sx={{ flex: 1, mx: 2 }}>
          <Typography variant="h6" gutterBottom>CONNECT</Typography>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener" sx={{ display: 'block', textDecoration: 'none', color: 'textSecondary' }}>Facebook</Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener" sx={{ display: 'block', textDecoration: 'none', color: 'textSecondary' }}>Instagram</Link>
          <Link href="https://www.youtube.com" target="_blank" rel="noopener" sx={{ display: 'block', textDecoration: 'none', color: 'textSecondary' }}>YouTube</Link>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
