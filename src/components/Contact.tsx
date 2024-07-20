import { Box, Typography, TextField, Button, FormControlLabel, Checkbox, FormGroup, FormControl, FormLabel, useMediaQuery, useTheme, Grid, Link, Snackbar, Alert, FormHelperText } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

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
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    contactNo: false,
    city: false,
    message: false,
    checkbox: false
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlot({
      ...plot,
      [event.target.name]: event.target.checked
    });
    setErrors({ ...errors, checkbox: false });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    setErrors({ ...errors, [event.target.name]: false });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      contactNo: '',
      city: '',
      message: ''
    });
    setPlot({
      plot30x40: false,
      largerArea: false
    });
    setErrors({
      name: false,
      email: false,
      contactNo: false,
      city: false,
      message: false,
      checkbox: false
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      contactNo: !formData.contactNo,
      city: !formData.city,
      message: !formData.message,
      checkbox: !plot.plot30x40 && !plot.largerArea
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    const data = {
      name: formData.name,
      email: formData.email,
      contactNo: formData.contactNo,
      city: formData.city,
      plot30x40: plot.plot30x40 ? 'Yes' : 'No',
      largerArea: plot.largerArea ? 'Yes' : 'No',
      message: formData.message
    };

    const url = 'https://script.google.com/macros/s/AKfycbwKYPsvw2qFCnbsc9Y40AwPAmakbrWzyFy3TJXoCZcNUl1bd6vI9Kg_N3-rm9cXcErN/exec';

    try {
      const response = await axios.post(url, null, { params: data });
      console.log('Data submitted successfully!', response.data);
      setSnackbar({ open: true, message: 'Data submitted successfully!', severity: 'success' });
      resetForm(); // Reset form after successful submission
    } catch (error) {
      console.error('Failed to submit data.', error);
      setSnackbar({ open: true, message: 'Failed to submit data.', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
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
              <FormControl fullWidth required error={errors.name}>
                <FormLabel sx={{ textAlign: 'left', color: 'black !important' }}>Your Name</FormLabel>
                <TextField variant="outlined" fullWidth name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <FormHelperText sx={{ color: 'red' }}>This field is required</FormHelperText>}
              </FormControl>
              <FormControl fullWidth required error={errors.email}>
                <FormLabel sx={{ textAlign: 'left', color: 'black !important' }}>Your Email</FormLabel>
                <TextField variant="outlined" type="email" fullWidth name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <FormHelperText sx={{ color: 'red' }}>This field is required</FormHelperText>}
              </FormControl>
              <FormControl fullWidth required error={errors.contactNo}>
                <FormLabel sx={{ textAlign: 'left', color: 'black !important' }}>Contact No.</FormLabel>
                <TextField variant="outlined" type="tel" fullWidth name="contactNo" value={formData.contactNo} onChange={handleChange} />
                {errors.contactNo && <FormHelperText sx={{ color: 'red' }}>This field is required</FormHelperText>}
              </FormControl>
              <FormControl fullWidth required error={errors.city}>
                <FormLabel sx={{ textAlign: 'left', color: 'black !important' }}>Your City</FormLabel>
                <TextField variant="outlined" fullWidth name="city" value={formData.city} onChange={handleChange} />
                {errors.city && <FormHelperText sx={{ color: 'red' }}>This field is required</FormHelperText>}
              </FormControl>
              <FormControl required error={errors.checkbox}>
                <FormLabel sx={{ textAlign: 'left', color: 'black !important' }}>Select One</FormLabel>
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
                {errors.checkbox && (
                  <FormHelperText sx={{ color: 'red' }}>Please select at least one option</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth required error={errors.message}>
                <FormLabel sx={{ textAlign: 'left', color: 'black !important' }}>Your Message</FormLabel>
                <TextField variant="outlined" fullWidth multiline rows={6} name="message" value={formData.message} onChange={handleChange} />
                {errors.message && <FormHelperText sx={{ color: 'red' }}>This field is required</FormHelperText>}
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
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
