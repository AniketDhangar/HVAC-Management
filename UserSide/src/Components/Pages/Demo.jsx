import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardContent, Container , Chip} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Demo() {
    const theme = useTheme();
    const [services, setServices] = useState([]);

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

    // const toggleExpand = (index) => {
    //     setServices((prevServices) =>
    //         prevServices.map((service, i) =>
    //             i === index ? { ...service, expanded: !service.expanded } : service
    //         )
    //     );
    // };

    return (
        <Box sx={{ py: 8, backgroundColor: theme.palette.grey[100] }}>
            {/* <Container maxWidth="lg">
                
                <Grid container spacing={3}>
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
                                        height:'100%',
                                        position: 'relative'
                                    }}
                                >
                                    <Box>
                                        <img
                                            src={`http://localhost:3000/${service.serviceImage}`}
                                            alt="serviceImage"
                                            style={{ width: '100%', height: '50%', objectFit: 'cover', }}
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
                                        
                                            { service.serviceDescription}
                                          
                                    </Typography>

                                    <Typography variant="body1" color="text.secondary" align="center">
                                        {service.serviceType}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container> */}
        </Box>
    );
}

export default Demo;
