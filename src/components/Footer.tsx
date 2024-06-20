import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', py: 3, textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '60px'}}>
        &copy; 2021 - 2024 Gruham &reg;
      </Typography>
    </Box>
  );
};

export default Footer;
