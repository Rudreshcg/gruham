import { Box, Typography, TextField, Button, FormControlLabel, Checkbox, FormGroup, FormControl, FormLabel, useMediaQuery, useTheme, Grid, Link } from '@mui/material';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [plot, setPlot] = useState({
    plot30x40: false,
    largerArea: false
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    city: '',
    message: ''
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlot({
      ...plot,
      [event.target.name]: event.target.checked
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      contactNo: formData.contactNo,
      city: formData.city,
      plot30x40: plot.plot30x40 ? 'Yes' : 'No',
      largerArea: plot.largerArea ? 'Yes' : 'No',
      message: formData.message
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.error('Failed to send email.', error);
        alert('Failed to send email.');
      });
  };

  return (
    <Box sx={{ width: '100%', py: 9, backgroundColor: 'white', minHeight: '100vh' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="flex-start" sx={{ flexDirection: { xs: 'column', md: 'row' }, rowGap: 2, columnGap: 2, maxWidth: '1200px', width: '100%', mx: 'auto' }}>
        <Grid item xs={12} md={7} lg={6} sx={{ textAlign: 'center', padding: '50px !important' }}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              <strong>Gruham</strong>
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'left' }}>
            <Box sx={{ height: '50px' }} aria-hidden="true" />
            <Box>

            </Box>
            
            <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Office Location:</strong>
            </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Contact Number</strong>
              </Typography>
              <Typography variant="body2" sx={{ display: 'block' }}>
                <Link href="tel:+919663051609" sx={{ color: '#3366ff' }}>
                  +919663051609
                </Link>
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Project Enquiries</strong>
            </Typography>
              <Typography variant="body1" sx={{ display: 'block' }}>
              <Link href="mailto:info@gruham.in" sx={{ color: '#3366ff' }}>
                  info@gruham.in
                </Link>
              </Typography>
            </Box>
            <Typography variant="body1">
              <strong>Career Opportunities</strong>
            </Typography>
            <Box>
              <Typography variant="body1" sx={{ display: 'block' }}>

              </Typography>
            </Box>
          </Box>

        </Grid>
        <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
          <Box>
            <Typography variant="h5">
              <strong>Contact Us</strong>
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
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
                <TextField variant="outlined" fullWidth name="name" value={formData.name} onChange={handleChange} />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Your Email</FormLabel>
                <TextField variant="outlined" type="email" fullWidth name="email" value={formData.email} onChange={handleChange} />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Contact No.</FormLabel>
                <TextField variant="outlined" type="tel" fullWidth name="contactNo" value={formData.contactNo} onChange={handleChange} />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ textAlign: 'left' }}>Your City</FormLabel>
                <TextField variant="outlined" fullWidth name="city" value={formData.city} onChange={handleChange} />
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
                <TextField variant="outlined" fullWidth multiline rows={6} name="message" value={formData.message} onChange={handleChange} />
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
