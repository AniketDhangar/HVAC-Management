import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Container, Chip, Divider, CardActions, Button } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BuildIcon from '@mui/icons-material/Build';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const servicesList = [
  {
    title: 'AC Repair & Maintenance',
    description: 'Professional repair and maintenance services for all AC brands and models. We diagnose and fix issues quickly.',
    icon: BuildIcon,
  },
  {
    title: 'Emergency Services',
    description: "24/7 emergency AC repair services. We understand that AC problems don't wait for business hours.",
    icon: TimelapseIcon,
  },
  {
    title: 'Installation Services',
    description: 'Expert installation of new AC units with proper sizing and efficiency recommendations.',
    icon: EngineeringIcon,
  },
  {
    title: 'Preventive Maintenance',
    description: 'Regular maintenance programs to keep your AC running efficiently and prevent future problems.',
    icon: AcUnitIcon,
  },
];

const Services = () => {
  const theme = useTheme();
  const [services, setServices] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/services');
        console.log('Response:', response.data.allServices);
        // Add `expanded` state to each service
        const servicesWithState = response.data.allServices.map((service) => ({
          ...service,
          expanded: false,
        }));
        setServices(servicesWithState);
      } catch (error) {
        console.error(error);
      }
    };
    fetchServices();
  }, []);


  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.grey[100] }}>
      <Container maxWidth="lg" margin="0" 
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 6,
            color: theme.palette.primary.main
          }}
        >
          Our Services
        </Typography>
 {/* demo services not changable */}
        <Grid container spacing={4}>
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.5s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[6],
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      pt: 3,
                      color: theme.palette.primary.main
                    }}
                  >
                    <IconComponent sx={{ fontSize: 40 }} />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      align="center"
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>



 {/* local text */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Why Choose Our AC Services?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Experienced Technicians
              </Typography>
              <Typography variant="body1">
                Our certified technicians have years of experience in handling all types of AC systems.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Affordable Pricing
              </Typography>
              <Typography variant="body1">
                We offer competitive rates and transparent pricing with no hidden charges.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Quality Guarantee
              </Typography>
              <Typography variant="body1">
                All our repairs and services come with a satisfaction guarantee.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />
        <Typography
        mt={5}
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 6,
            color: theme.palette.primary.main
          }}
        >
          Our Services
        </Typography>

{/* services added by admin */}
        <Grid container spacing={3} >
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.5s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[6],
                  },
                }}
              >

                <CardContent
                  sx={{
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <Box>
                    <img
                      src={`http://localhost:3000/${service.serviceImage}`}
                      alt="serviceImage"
                      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius:'20px' }}
                    />
                  </Box>
                  <Chip label={service.serviceType} color="gray" sx={{ my: 2 }} />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {service.serviceName}
                  </Typography>

                  <Typography variant="body1" color="text.secondary" align="center">

                    {service.serviceDescription}

                  </Typography>
                  <CardActions>
                  <Button
                  onClick={()=>{navigate('/appointments') }}
                  >take appoitmment</Button>
                </CardActions>

                  {/* <Typography variant="body1" color="text.secondary" align="center">
                    {service.serviceType}
                  </Typography> */}
                </CardContent>

             
              </Card>
            </Grid>
          ))}
        </Grid>


      </Container>
    </Box>
  );
};

export default Services;
