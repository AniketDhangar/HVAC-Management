import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Stack,
} from '@mui/material';
// import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const serviceTypes = [
  'AC Installation',
  'AC Repair',
  'AC Maintenance',
  'AC Gas Refill',
  'AC Deep Cleaning',
  'Emergency Repair',
  'Parts Replacement',
];

const acTypes = [
  'Split AC',
  'Window AC',
  'Portable AC',
  'Central AC',
  'Cassette AC',
  'Tower AC',
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    acType: '',
    acBrand: '',
    date: null,
    time: null,
    problemDescription: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleDateChange = (newDate) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     date: newDate,
  //   }));
  // };

  // const handleTimeChange = (newTime) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     time: newTime,
  //   }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
   alert('Service Request submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Book AC Service
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Service Type</InputLabel>
                <Select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  label="Service Type"
                >
                  {serviceTypes.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>AC Type</InputLabel>
                <Select
                  name="acType"
                  value={formData.acType}
                  onChange={handleChange}
                  label="AC Type"
                >
                  {acTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="AC Brand"
                name="acBrand"
                value={formData.acBrand}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Service Address"
                name="address"
                multiline
                rows={2}
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Date and Time Pickers here if required */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Problem Description"
                name="problemDescription"
                multiline
                rows={4}
                value={formData.problemDescription}
                onChange={handleChange}
                placeholder="Please describe the issue you're experiencing with your AC..."
              />
            </Grid>
          </Grid>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ py: 1.5 }}
            >
              Book Service
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default AppointmentForm;
