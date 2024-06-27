import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Box sx={{ width: '40%', textAlign: 'center' }}>
          <Typography variant="h5">
            <strong>Gruham</strong>
          </Typography>
        </Box>
        <Box sx={{ width: '60%', textAlign: 'center' }}>

          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 600,
              margin: '0 auto'
            }}
          >
            <Box>
              <Typography variant="h5">
                <strong>Contact Us</strong>
              </Typography>

            </Box>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 600,
                margin: '0 auto'
              }}
            >
              <TextField
                label="Your Name"
                variant="standard"
                fullWidth
                required
              />
              <TextField
                label="Your Email"
                variant="standard"
                type="email"
                fullWidth
                required
              />
              <TextField
                label="Contact No."
                variant="standard"
                type="tel"
                fullWidth
                required
              />
              <TextField
                label="Your City"
                variant="standard"
                fullWidth
                required
              />
              <TextField
                select
                label="Select One"
                variant="standard"
                fullWidth
                required
              >
                <MenuItem value="30x40 plot">30 x 40 plot</MenuItem>
                <MenuItem value="Larger area">Larger area</MenuItem>
              </TextField>
              <TextField
                label="Your Message"
                variant="standard"
                fullWidth
                multiline
                rows={4}
                required
              />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
