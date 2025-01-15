import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BuildIcon from '@mui/icons-material/Build';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import { useTheme } from '@mui/material/styles';

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

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.grey[100] }}>
      <Container maxWidth="lg" margin="0">
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

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Why Choose Our AC Services?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid  item xs={12} md={4}>
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
      </Container>
    </Box>
  );
};

export default Services;
