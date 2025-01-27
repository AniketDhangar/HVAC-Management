import React, { useState } from 'react';
import axios from 'axios';
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



const serviceTypes = ["Repair", "Installation", "Service", "Other", "Maintenance"];

const AppointmentForm = () => {

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMobile: '',
    userAddress: '',
    serviceType: '',
    deviceBrand: '',
    // appointmentDate:'',
    problemDescription: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/takeappoinment",
        formData
      );
      alert("Service request submitted successfully!");
      console.log(response.data);
    } catch (error) {
      alert("An error occurred while submitting the request.");
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Book AC Service
        </Typography>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{ mt: 2 }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Full Name"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                name="userMobile"
                value={formData.userMobile}
                onChange={handleChange}
              />
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Email"
                name="userEmail"
                type="email"
                value={formData.userEmail} 
                onChange={handleChange}
              />
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label=""
                name="appointmentDate"
                type="date"
                value={formData.appointmentDate}
                onChange={handleChange}
              />
            </Grid> */}

            {/* 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
            </LocalizationProvider> */}




            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Service Type</InputLabel>
                <Select
                  name="serviceType"
                  value={formData.serviceType || ""}
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
              <TextField
                fullWidth
                label="Device Brand"
                name="deviceBrand"
                value={formData.deviceBrand}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Service Address"
                name="userAddress"
                multiline
                rows={2}
                value={formData.userAddress}
                onChange={handleChange}
              />
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
            <Button fullWidth type="submit" variant="contained" sx={{ py: 1.5 }}>
              Book Service
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default AppointmentForm;
