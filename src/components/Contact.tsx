import { Box, Typography, TextField, Button, FormControlLabel, Checkbox, FormGroup, FormControl, FormLabel, useMediaQuery, useTheme, Grid, Link } from '@mui/material';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [plot, setPlot] = useState({
    plot30x40: false,
    largerArea: false
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlot({
      ...plot,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <Box sx={{ width: '100%', py: 9, backgroundColor: 'white', minHeight: '100vh', px: isMobile ? 3 : 0 }}>
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={7} lg={6} sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            <strong>Gruham</strong>
          </Typography>

          <Box sx={{ height: '50px' }} aria-hidden="true" />
          <Box>
            
          </Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Office Location:</strong>
          </Typography>
          <Box sx={{ mb: 2 }}>
            
          </Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Contact Number</strong>
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ display: 'block' }}>
              <Link href="tel:+919663051609" sx={{ color: '#3366ff' }}>
                +919663051609
              </Link>
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Project Enquiries</strong>
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ display: 'block' }}>
              
            </Typography>
          </Box>
          <Typography variant="body1">
            <strong>Career Opportunities</strong>
          </Typography>
          <Box>
            <Typography variant="body1" sx={{ display: 'block' }}>
              
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
          <Box>
            <Typography variant="h5">
              <strong>Contact Us</strong>
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 450,
                margin: '0 auto',
                pt: 6,
                backgroundColor: 'white',
                borderRadius: 1
              }}
            >
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Your Name</FormLabel>
                <TextField variant="outlined" fullWidth />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Your Email</FormLabel>
                <TextField variant="outlined" type="email" fullWidth />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Contact No.</FormLabel>
                <TextField variant="outlined" type="tel" fullWidth />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Your City</FormLabel>
                <TextField variant="outlined" fullWidth />
              </FormControl>
              <FormControl required>
                <FormLabel sx={{ textAlign: 'left' }}>Select One</FormLabel>
                <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={plot.plot30x40}
                        onChange={handleCheckboxChange}
                        name="plot30x40"
                      />
                    }
                    label="30 x 40 plot"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={plot.largerArea}
                        onChange={handleCheckboxChange}
                        name="largerArea"
                      />
                    }
                    label="Larger area"
                  />
                </FormGroup>
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Your Message</FormLabel>
                <TextField variant="outlined" fullWidth multiline rows={4} />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: '150px', alignSelf: 'center' }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
