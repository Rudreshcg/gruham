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
        {['Residential', 'Commercial'].map((type, index) => (
          <Box key={type} sx={{ position: 'relative', flex: 1 }}>
            <Box
              component="img"
              src={
                index === 0 
                ? "https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/leading-residential-architects-in-bangalore.jpg.webp"
                : "https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/best-architecture-firm-in-bangalore.jpg.webp"
              }
              alt={type}
              sx={{ 
                width: '100%', 
                height: isMobile ? '165px' : 'auto',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 1,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                padding: '8px',
                borderRadius: '4px',
                zIndex: 2
              }}
            >
              <Link href={`/${type.toLowerCase()}`} color="inherit" underline="none">
                {type}
              </Link>
            </Typography>
          </Box>
        ))}
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
