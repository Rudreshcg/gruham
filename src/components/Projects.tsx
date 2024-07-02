import { Box, Typography, Link } from '@mui/material';
import React from 'react';
import TimelineComponent from './TimeLine';


const Projects: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 2, p: 2 }}>
        <Box sx={{ position: 'relative', flex: 1 }}>
          <img src="https://via.placeholder.com/1200x600?text=Image+1" alt="Residential" style={{ width: '100%', height: 'auto' }} />
          <Typography
            variant="h4"
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
          <img src="https://via.placeholder.com/1200x600?text=Image+2" alt="Commercial" style={{ width: '100%', height: 'auto' }} />
          <Typography
            variant="h4"
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
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Completed Projects</Typography>
        <TimelineComponent />
      </Box>
    </Box>
  );
};

export default Projects;
