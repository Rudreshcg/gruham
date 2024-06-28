import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme, Link } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ backgroundColor: '#f9f9f9' }}>
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          py: 6,
          px: 2
        }}
      >
        <Box sx={{ flex: 1, mx: 2, mb: isMobile ? 2 : 0 }}>
          <Typography variant="body1" sx={{ mb: 4 }}>
            <strong>SERVICES</strong>
          </Typography>
          <Typography sx={{ mb: 0.5 }}>Residential Construction</Typography>
          <Typography sx={{ mb: 0.5 }}>Commercial Construction</Typography>
          <Typography sx={{ mb: 0.5 }}>Retail Construction</Typography>
        </Box>
        <Box sx={{ flex: 1, mx: 2, mb: isMobile ? 2 : 0 }}>
          <Typography variant="body1" sx={{ mb: 4 }}>
            <strong>CONTACT</strong>
          </Typography>
          {/* <Typography>Ashwin Architects</Typography>
          <Typography>23, Ratna Vilas Rd, Basavanagudi,</Typography>
          <Typography>Bengaluru, Karnataka 560004, India</Typography>
          <Typography>Call: +91 (702) 6524524</Typography>
          <Typography>Email: info@ashwinarchitects.com</Typography> */}
        </Box>
        <Box sx={{ flex: 1, mx: 2 }}>
          <Typography variant="body1" sx={{ mb: 4 }}>
            <strong>CONNECT</strong>
          </Typography>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener" sx={{ display: 'block', textDecoration: 'none', color: 'textSecondary' }}>Facebook</Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener" sx={{ display: 'block', textDecoration: 'none', color: 'textSecondary' }}>Instagram</Link>
          <Link href="https://www.youtube.com" target="_blank" rel="noopener" sx={{ display: 'block', textDecoration: 'none', color: 'textSecondary' }}>YouTube</Link>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: '#f0f0f0', py: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '60px' }}>
          &copy; 2021 - 2024 Gruham &reg;
        </Typography>
      </Box>

    </Box>
  );
};

export default Footer;
