// import React from 'react';
// import { Box, Typography, Container, useMediaQuery, useTheme, Link } from '@mui/material';

// const Footer: React.FC = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Box sx={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #e0e0e0' }}>
//       <Container
//         maxWidth="lg"
//         sx={{
//           display: 'flex',
//           flexDirection: isMobile ? 'column' : 'row',
//           justifyContent: 'space-between',
//           py: 8,
//           px: 3,
//           textAlign: isMobile ? 'center' : 'left',
//         }}
//       >
//         <Box sx={{ flex: 1, mx: 2, mb: isMobile ? 4 : 0 }}>
//           <Typography variant="h6" sx={{ mb: 4, color: '#333', fontWeight: 'bold' }}>
//             SERVICES
//           </Typography>
//           <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>Residential Construction</Typography>
//           <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>Commercial Construction</Typography>
//           <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>Retail Construction</Typography>
//         </Box>
//         <Box sx={{ flex: 1, mx: 2, mb: isMobile ? 4 : 0 }}>
//           <Typography variant="h6" sx={{ mb: 4, color: '#333', fontWeight: 'bold' }}>
//             CONTACT
//           </Typography>
//           <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>Gruham</Typography>
//           <Link href="tel:+919663051609" sx={{ display: 'block', textDecoration: 'none', color: 'primary.main', mb: 1 }}>
//             Call: +919663051609
//           </Link>
//           <Link href="mailto:info@gruham.in" sx={{ display: 'block', textDecoration: 'none', color: 'primary.main', mb: 1 }}>
//             Email: info@gruham.in
//           </Link>
//         </Box>
//         <Box sx={{ flex: 1, mx: 2 }}>
//           <Typography variant="h6" sx={{ mb: 4, color: '#333', fontWeight: 'bold' }}>
//             CONNECT
//           </Typography>
//           <Link href="https://www.facebook.com" target="_blank" rel="noopener" sx={{ display: 'block', textDecoration: 'none', color: 'primary.main', mb: 1 }}>
//             Facebook
//           </Link>
//           <Link href="https://www.instagram.com" target="_blank" rel="noopener" sx={{ display: 'block', textDecoration: 'none', color: 'primary.main', mb: 1 }}>
//             Instagram
//           </Link>
//           <Link href="https://www.youtube.com" target="_blank" rel="noopener" sx={{ display: 'block', textDecoration: 'none', color: 'primary.main', mb: 1 }}>
//             YouTube
//           </Link>
//         </Box>
//       </Container>
//       <Box sx={{ backgroundColor: '#e0e0e0', py: 3, textAlign: 'center' }}>
//         <Typography variant="body2" color="textSecondary" sx={{ fontSize: '14px', color: '#888' }}>
//           &copy; 2021 - 2024 Gruham &reg; | All rights reserved.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '40px 0', borderTop: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 4 : 8}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
              SERVICES
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>Residential Construction</Typography>
            <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>Commercial Construction</Typography>
            <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>Retail Construction</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
              CONTACT
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>Gruham</Typography>
            <Link href="tel:+919663051609" sx={{ display: 'block', textDecoration: 'none', color: 'primary.main', mb: 1 }}>
              Call: +919663051609
            </Link>
            <Link href="mailto:info@gruham.in" sx={{ display: 'block', textDecoration: 'none', color: 'primary.main', mb: 1 }}>
              Email: info@gruham.in
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
              CONNECT
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <IconButton href="https://www.facebook.com" target="_blank" rel="noopener" sx={{ color: '#666' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com" target="_blank" rel="noopener" sx={{ color: '#666' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.youtube.com" target="_blank" rel="noopener" sx={{ color: '#666' }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', marginTop: '40px', borderTop: '1px solid #e0e0e0', paddingTop: '20px' }}>
          <Typography variant="body2" color="textSecondary">
            &copy; 2021 - 2024 Gruham &reg; | All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
