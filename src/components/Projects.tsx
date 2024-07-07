import { Box, Typography, Link, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import TimelineComponent from './TimeLine';
import ProjectStatus from './ProjectStatus';


const Projects: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 2, p: 2 }}>
        <Box sx={{ position: 'relative', flex: 1 }}>
          <img src="https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/leading-residential-architects-in-bangalore.jpg.webp" alt="Residential" style={{ width: '100%', height: isMobile ? '165px' : 'auto' }} />
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              padding: '8px',
              borderRadius: '4px'
            }}
          >
            <Link href="/residential" color="inherit" underline="none">
              Residential
            </Link>
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', flex: 1 }}>
          <img src="https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/best-architecture-firm-in-bangalore.jpg.webp" alt="Commercial" style={{ width: '100%', height: isMobile ? '165px' : 'auto' }} />
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              padding: '8px',
              borderRadius: '4px'
            }}
          >
            <Link href="/commercial" color="inherit" underline="none">
              Commercial
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box>
        {/* <ProjectStatus/> */}
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>COMPLETED PROJECTS</Typography>
        <TimelineComponent />
      </Box>
    </Box>
  );
};

export default Projects;
