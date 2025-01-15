import React, { useState, useEffect } from 'react';
// import { userAPI } from '../../services/api';
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
    Chip,
    Avatar
} from '@mui/material';

const UserTable = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetchUsers();
    // }, []);

    const fetchUsers = async () => {
        try {
            const response = await userAPI.getAllUsers();
            setUsers(response || []);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const getRoleColor = (role) => {
        switch (role?.toLowerCase()) {
            case 'admin':
                return 'error';
            case 'client':
                return 'primary';
            case 'customer':
                return 'success';
            case 'operator':
                return 'warning';
            default:
                return 'default';
        }
    };

    return (
        <Box sx={{p:2 }}>
            
            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                            <TableCell><strong>Profile</strong></TableCell>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                            <TableCell><strong>Phone</strong></TableCell>
                            <TableCell><strong>Role</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <TableRow 
                                    key={user._id}
                                    sx={{
                                        '&:hover': { backgroundColor: '#fafafa' }
                                    }}
                                >
                                    <TableCell>
                                        <Avatar 
                                            src={`http://localhost:5000/${user.profileImage}`}
                                            alt={user.name}
                                            sx={{ width: 40, height: 40 }}
                                        >
                                            {user.name?.charAt(0)}
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body1">
                                            {user.name} {user.lastname}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        {user.email}
                                    </TableCell>
                                    <TableCell>
                                        {user.mobile || 'N/A'}
                                    </TableCell>
                                    <TableCell>
                                        <Chip 
                                            label={user.role}
                                            color={getRoleColor(user.role)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center" sx={{ py: 3 }}>
                                    <Typography color="text.secondary">
                                        No users found
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default UserTable; 