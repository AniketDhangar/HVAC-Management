import React, { useState, useEffect } from 'react';
// import { serviceAPI } from '../../services/api';
import {
    Container,
    Paper,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    MenuItem,
    Box,
    IconButton,
    Snackbar,
    Alert
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const ServiceManagement = () => {
    const [services, setServices] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const [formData, setFormData] = useState({
        sname: '',
        sdescription: '',
        stype: '',
        visitingCharge: '',
        serviceLogo: null
    });

    // Fetch services on component mount
    // useEffect(() => {
    //     fetchServices();
    // }, []);

    // const fetchServices = async () => {
    //     try {
    //         const response = await serviceAPI.getAllServices();
    //         setServices(response.allServices || []);
    //     } catch (error) {
    //         showNotification('Error fetching services', 'error');
    //     }
    // };

    const handleOpenDialog = (service = null) => {
        if (service) {
            setSelectedService(service);
            setFormData({
                sname: service.sname,
                sdescription: service.sdescription,
                stype: service.stype,
                visitingCharge: service.visitingCharge,
                serviceLogo: null // Can't pre-fill file input
            });
        } else {
            setSelectedService(null);
            setFormData({
                sname: '',
                sdescription: '',
                stype: '',
                visitingCharge: '',
                serviceLogo: null
            });
        }
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedService(null);
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'serviceLogo' && files) {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            });

            if (selectedService) {
                await serviceAPI.updateService(selectedService._id, formDataToSend);
                showNotification('Service updated successfully');
            } else {
                await serviceAPI.createService(formDataToSend);
                showNotification('Service created successfully');
            }

            handleCloseDialog();
            fetchServices();
        } catch (error) {
            showNotification(error.response?.data?.message || 'Error processing service', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (serviceId) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                await serviceAPI.deleteService(serviceId);
                showNotification('Service deleted successfully');
                fetchServices();
            } catch (error) {
                showNotification('Error deleting service', 'error');
            }
        }
    };

    const showNotification = (message, severity = 'success') => {
        setNotification({
            open: true,
            message,
            severity
        });
    };

    const handleCloseNotification = () => {
        setNotification(prev => ({ ...prev, open: false }));
    };

    return (

        <Paper maxWidth="lg" elevation={3} sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Service Management
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenDialog()}
                >
                    Add New Service
                </Button>
            </Box>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Service Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Visiting Charge</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((service) => (
                            <TableRow key={service._id}>
                                <TableCell>{service.sname}</TableCell>
                                <TableCell>{service.stype}</TableCell>
                                <TableCell>{service.sdescription}</TableCell>
                                <TableCell>{service.visitingCharge}</TableCell>
                                <TableCell>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleOpenDialog(service)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => handleDelete(service._id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Add/Edit Service Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle>
                    {selectedService ? 'Edit Service' : 'Add New Service'}
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            name="sname"
                            label="Service Name"
                            value={formData.sname}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            margin="normal"
                        />
                        <TextField
                            name="sdescription"
                            label="Description"
                            value={formData.sdescription}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            multiline
                            rows={3}
                            margin="normal"
                        />
                        <TextField
                            name="stype"
                            label="Service Type"
                            value={formData.stype}
                            onChange={handleInputChange}
                            select
                            fullWidth
                            required
                            margin="normal"
                        >
                            <MenuItem value="AC Repair">AC Repair</MenuItem>
                            <MenuItem value="Heater Maintenance">Heater Maintenance</MenuItem>
                            <MenuItem value="Plumbing">Plumbing</MenuItem>
                            <MenuItem value="Electrical">Electrical</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                        <TextField
                            name="visitingCharge"
                            label="Visiting Charge"
                            value={formData.visitingCharge}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            margin="normal"
                        />
                        <TextField
                            name="serviceLogo"
                            type="file"
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

            {/* Notifications */}
            <Snackbar
                open={notification.open}
                autoHideDuration={6000}
                onClose={handleCloseNotification}
            >
                <Alert
                    onClose={handleCloseNotification}
                    severity={notification.severity}
                >
                    {notification.message}
                </Alert>
            </Snackbar>
        </Paper>

    );
};

export default ServiceManagement; 