import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box
} from '@mui/material';

const AppointmentTable = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get("http://localhost:3000/getappoinment");
                console.table(response.data.appointments);
                setAppointments(response.data.appointments || []);
            } catch (error) {
                alert("Error fetching appointments");
                console.error(error);
                setAppointments([]);
            }
        };
        const intervalId = setInterval(() => {
            fetchAppointments();
        }, 0);

        return () => clearInterval(intervalId);
    },
        []);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Appointment Requests
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                            <TableCell><b>Customer Name</b></TableCell>
                            <TableCell><b>Contact</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                            <TableCell><b>Device Brand</b></TableCell>
                            <TableCell><b>Service Type</b></TableCell>
                            {/* <TableCell><b>on Date</b></TableCell> */}
                            <TableCell><b>Address</b></TableCell>
                            <TableCell><b>Message</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} align="center">
                                    No appointments found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            appointments.map((appointment) => (
                                <TableRow key={appointment._id}>
                                    <TableCell>{appointment.userName || "N/A"}</TableCell>
                                    <TableCell>{appointment.userMobile || "N/A"}</TableCell>
                                    <TableCell>{appointment.userEmail || "N/A"}</TableCell>
                                    <TableCell>{appointment.deviceBrand || "N/A"}</TableCell>
                                    <TableCell>{appointment.serviceType || "N/A"}</TableCell>
                                    {/* <TableCell>{(appointment.appointmentDate)}</TableCell> */}
                                    <TableCell>{appointment.userAddress || "N/A"}</TableCell>
                                    <TableCell>{appointment.problemDescription || "N/A"}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AppointmentTable;
