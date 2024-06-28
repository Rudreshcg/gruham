import { Box, Typography, TextField, Button, FormControlLabel, Checkbox, FormGroup, FormControl, FormLabel } from '@mui/material';
import React, { useState } from 'react';

const Contact: React.FC = () => {
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
    <Box sx={{ width: '100%', py: 9, backgroundColor: 'white', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Box sx={{ width: '60%', textAlign: 'center' }}>
          <Typography variant="h5">
            <strong>Gruham</strong>
          </Typography>
        </Box>
        <Box sx={{ width: '40%', textAlign: 'center' }}>

          <Box>
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
                maxWidth: 450,
                margin: '0 auto',
                pt: 6,
                backgroundColor: 'white',
                borderRadius: 1
              }}
            >
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Your Name</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Your Email</FormLabel>
                <TextField
                  variant="outlined"
                  type="email"
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Contact No.</FormLabel>
                <TextField
                  variant="outlined"
                  type="tel"
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Your City</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  
                />
              </FormControl>
              <FormControl required>
                <FormLabel sx={{ textAlign: 'left' }}>Select One</FormLabel>
                <FormGroup sx={{display: 'flex', flexDirection: 'row'}}>
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
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: '150px', alignSelf: 'center' }}
              >
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
