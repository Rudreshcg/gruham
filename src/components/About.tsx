import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          <strong>The Firm</strong>
        </Typography>
        <Typography variant="body1" color='#666' paragraph sx={{ lineHeight: 1.8 }}>
          Gruham was established with the mission to transform the concept of personal spaces, addressing the gap between people's vision of their ideal environments and the often uninspiring structures that populate our cities.
        </Typography>
        <Typography variant="body1" color='#666' paragraph sx={{ lineHeight: 1.8 }}>
          Our expertise spans holistic designs for individual residences, bungalows, housing layouts, apartment complexes, commercial complexes, and gated communities.
        </Typography>
        <Typography variant="body1" color='#666' paragraph sx={{ lineHeight: 1.8 }}>
          As a premier architectural firm, Gruham bridges the gap between contemporary architecture and the cultural context in which it resides. We also embrace the growing need for energy-efficient green buildings and focus on optimizing available spaces.
        </Typography>

        <Typography variant="h5" gutterBottom>
          <strong>Design Philosophy</strong>
        </Typography>
        <Typography variant="body1" color='#666' paragraph sx={{ lineHeight: 1.8 }}>
          “As the human mind is highly sensitive to its surroundings, our environment leaves a profound impact on us. Everything around us, from house plans to office designs, home interiors, architecture, people, traffic, career goals, and more, influences our sense of well-being. While we cannot control traffic, we can create a meaningful interface between you and your surroundings—your home and office—in a way that enhances positive energies through form, function, climate control, vastu, and more.”
        </Typography>
        <Typography variant="body1" color='#666' paragraph sx={{ lineHeight: 1.8 }}>
          – Dhanush N Gowda
        </Typography>

        <Typography variant="h5" gutterBottom>
          <strong>Healthy Living Spaces</strong>
        </Typography>
        <Typography variant="body1" color='#666' paragraph sx={{ lineHeight: 1.8 }}>
          As one of the leading architects, Gruham meets the rising demands and expectations of clients seeking innovative home and interior architecture. We are committed to creating healthy, lively, and captivating spaces, ensuring that all stakeholders are aligned with energy efficiency and sustainable architecture principles.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
