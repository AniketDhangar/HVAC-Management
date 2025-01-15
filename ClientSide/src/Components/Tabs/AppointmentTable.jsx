import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box,
    Chip
} from '@mui/material';

const AppointmentTable = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        //  dummy data on component mount
        const dummyData = [
            {
                _id: "1",
                customerId: { name: "John Doe", mobile: "1234567890" },
                sId: { sname: "AC Repair" },
                appointmentDate: "2025-01-15T10:30:00Z",
                appointmentStatus: "approved",
                appointmentMsg: "Please ensure the technician arrives on time."
            },
            {
                _id: "2",
                customerId: { name: "Alice Smith", mobile: "9876543210" },
                sId: { sname: "Plumbing Service" },
                appointmentDate: "2025-01-20T14:00:00Z",
                appointmentStatus: "waiting",
                appointmentMsg: "Looking forward to the appointment."
            },
            {
                _id: "3",
                customerId: { name: "Bob Johnson", mobile: "1122334455" },
                sId: { sname: "Electrical Work" },
                appointmentDate: "2025-01-25T16:30:00Z",
                appointmentStatus: "cancelled",
                appointmentMsg: "The appointment has been cancelled due to unforeseen circumstances."
            }
        ];
        setAppointments(dummyData);
    }, []);

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'approved':
                return 'success';
            case 'cancelled':
                return 'error';
            case 'waiting':
                return 'warning';
            default:
                return 'default';
        }
    };

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
                            <TableCell><b>Service</b></TableCell>
                            <TableCell><b>Date</b></TableCell>
                            <TableCell><b>Time</b></TableCell>
                            <TableCell><b>Status</b></TableCell>
                            <TableCell><b>Message</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow key={appointment._id}>
                                <TableCell>
                                    {appointment.customerId?.name || 'N/A'}
                                </TableCell>
                                <TableCell>
                                    {appointment.customerId?.mobile || 'N/A'}
                                </TableCell>

                                <TableCell>
                                    {appointment.sId?.sname || 'N/A'}
                                </TableCell>
                                <TableCell>
                                    {new Date(appointment.appointmentDate).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    {new Date(appointment.appointmentDate).toLocaleTimeString()}
                                </TableCell>

                                <TableCell>
                                    <Chip
                                        label={appointment.appointmentStatus}
                                        color={getStatusColor(appointment.appointmentStatus)}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    {appointment.appointmentMsg || 'No message'}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AppointmentTable;
