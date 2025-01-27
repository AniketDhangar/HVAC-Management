import React, { useState, useEffect } from 'react';
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
    Alert,
    Tab
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';
import toast from 'react-hot-toast';
import moment from 'moment';



const ServiceManagement = () => {
    const [services, setServices] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [loading, setLoading] = useState(false);
    const [serviceImage, setServiceImage] = useState(null)
    const [openDelete, setOpenDelete] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false)



    //this function is used to fetch the services

    const handleFormSubmit = async (e) => {

        // e.preventDefault();
        //this will give us the form data
        //and we will send this data to the server
        const formData = new FormData(e.target);

        // fromEntries method is used to convert the form data into object
        const reqFormData = Object.fromEntries(formData.entries());
        console.log(reqFormData)
        //this is the final data that we will send to the server
        const finalReqData = { ...reqFormData, serviceImage: reqFormData.serviceImage };
        console.log(finalReqData);

        try {
            const reqResult = await axios.post('http://localhost:3000/addservice', finalReqData,
                {
                    headers:
                    {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            console.log(reqResult)  //this will give us the response from the server
            alert("Service Added Successfully")
        } catch (error) {
            console.log(error)
            alert("Error in Adding Service")
        }

    }

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:3000/services');
                console.log('responce====>', response.data.allServices)
                setServices(response.data.allServices);
            } catch (error) {
                console.error(error);
            }
        }
        fetchServices();
    }, [])

    const handleDeleteOpen = async () => {
        setOpenDelete(true);
    }
    const handleDeleteClose = async () => {
        setOpenDelete(false);
    }
    const handleUpdateOpen = () => {
        setOpenUpdate(true)
    }
    const handleUpdateClose = () => {
        setOpenUpdate(false)
    }




    const handleOpenDialog = (service = null) => {
        if (service) {
            setSelectedService(service);
            setFormData({
                serviceName: service.serviceName,
                serviceDescription: service.serviceDescription,
                serviceType: service.serviceType,
                serviceImage: service.serviceImage
            });
        }
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedService(null);
    };



    const deleteService = async (e) => {

        //here we set auto reload
        window.location.reload();

        //here we are deleting the service
        try {
            const deletedService = await axios.delete('http://localhost:3000/deleteservice', {
                //here we are sending the id of the service that we want to delete
                data: { _id: selectedService._id }
            });
            console.log(deletedService)
            // alert("Service Deleted Successfully")
            setOpenDelete(false);
            toast.success("Removed")
        } catch (error) {
            console.log(error)
        }
    }






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

            {/* <Box>

                    services.map((service, index) => {
                        return (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>

                                <img
                                    src={`http://localhost:3000/${service.serviceImage}`}
                                    alt="serviceImage"
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                />
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {service.serviceName}
                                </Typography>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {service.serviceDescription}
                                </Typography>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {service.serviceType}
                                </Typography>
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
                              <img
                                    src={`http://localhost:3000/${service.serviceImage}`}
                                    alt="serviceImage"
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                /> 
                            </Box>
                        {
                    }
                    )
                } )
           </Box>  */}
            <TableContainer sx={{ fontSize: '20px' }}>
                <Table>
                    <TableHead sx={{ backgroundColor: 'gray' }} >
                        <TableRow>
                            <TableCell sx={{ backgroundColor: 'lightgray', fontWeight: 'bold', fontSize: '20px' }}>Serial No.</TableCell>
                            <TableCell sx={{ backgroundColor: 'lightgray', fontWeight: 'bold', fontSize: '20px' }}>Service Name</TableCell>
                            <TableCell sx={{ backgroundColor: 'lightgray', fontWeight: 'bold', fontSize: '20px' }}>Type</TableCell>
                            <TableCell sx={{ backgroundColor: 'lightgray', fontWeight: 'bold', fontSize: '20px' }}>Description</TableCell>
                            {/* <TableCell sx={{ backgroundColor: 'lightgray', fontWeight: 'bold', fontSize: '20px' }}>Added on</TableCell> */}
                            <TableCell sx={{ backgroundColor: 'lightgray', fontWeight: 'bold', fontSize: '20px' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((service) => (
                            <TableRow key={service._id}>
                                {/* //this will display the service number */}
                                <TableCell>{services.indexOf(service) + 1}</TableCell>
                                <TableCell>{service.serviceName}</TableCell>
                                <TableCell>{service.serviceType}</TableCell>
                                <TableCell>{service.serviceDescription}</TableCell>
                                {/* <TableCell>{moment(service.ServiceDate).format('DD-MM-YYYY HH:mm:ss')}</TableCell>   */}

                                <TableCell>
                                    <IconButton
                                        color="primary"
                                        onClick={() => {
                                            handleUpdateOpen()
                                        }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => {
                                            handleDeleteOpen()
                                            setSelectedService(service)
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                                {/* <TableCell>
                                    <img
                                        src={`http://localhost:3000/${service.serviceImage}`}
                                        alt="serviceImage"
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    />
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Add/Edit Service Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle>
                    {'Add New Service'}
                </DialogTitle>
                <form
                    onSubmit={(e) => { handleFormSubmit(e) }}
                >
                    <DialogContent>
                        <TextField
                            name="serviceName"
                            label="Service Name"
                            // value={formData.serviceName}
                            // onChange={handleInputChange}
                            fullWidth
                            required
                            margin="normal"
                        />
                        <TextField
                            name="serviceDescription"
                            label="Description"
                            // value={formData.serviceDescription}
                            // onChange={handleInputChange}
                            fullWidth
                            required
                            multiline
                            rows={3}
                            margin="normal"
                        />
                        <TextField
                            name="serviceType"
                            label="Service Type"
                            // value={formData.serviceType}
                            // onChange={handleInputChange}
                            select
                            fullWidth
                            required
                            margin="normal"
                        >
                            <MenuItem value="Repair">Repair</MenuItem>
                            <MenuItem value="Installation">Installation</MenuItem>
                            <MenuItem value="Service">Service</MenuItem>
                            <MenuItem value="Heater Maintenance">Heater Maintenance</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </TextField>

                        <TextField
                            name="serviceImage"
                            type="file"
                            onChange={(e) => setServiceImage(e.target.files[0])}
                            label="Service Image"
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
                            variant="outlined"
                            color="error"

                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>





            {/* Delete Confirmation Dialog */}
            <Dialog
                open={openDelete}
                onClose={handleDeleteClose}
            >
                <DialogTitle>
                    Delete ?
                </DialogTitle>
                <DialogContent>

                    Are you sure you want to delete this service?

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose}>Cancel</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            deleteService()
                            handleDeleteClose()
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openUpdate}
                onClose={handleUpdateClose}
                sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >

                <DialogTitle id="alert-dialog-title">
                    Update ?
                </DialogTitle>
                <DialogContent>
                    Are you sure want to update?

                </DialogContent>
                <DialogActions>
                    <Button variant='text'
                        autoFocus
                    >Yes</Button>
                    <Button variant='text'
                        onClick={() => { handleUpdateClose() }}
                    >No</Button>
                </DialogActions>
            </Dialog>
        </Paper >

    );
};

export default ServiceManagement; 