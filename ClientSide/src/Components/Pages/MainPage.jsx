import React, { useState } from 'react';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Container,
    Paper
} from '@mui/material';
import AppointmentTable from '../Tabs/AppointmentTable';

import Navbar from './Navbar';

import ServiceManagement from '../Tabs/ServiceManagement'
import UserTable from '../Tabs/UserTable';

// TabPanel component to handle tab content
function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`admin-tabpanel-${index}`}
            aria-labelledby={`admin-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function MainPage() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (tabName) => {
        const tabIndex = {
            'Dashboard': 0,
            'Appointments': 1,
            'Users': 2,
            'Services': 3,
            'Reviews': 4
        }[tabName];
        setSelectedTab(tabIndex);
    };

    return (
        <Box>
            <Navbar onTabChange={handleTabChange} />
            <Container maxWidth="xl">
                <Paper elevation={3} sx={{ mt: 3 }}>
                    <TabPanel value={selectedTab} index={0}>
                        <Typography variant="h5">Dashboard Content</Typography>
                    </TabPanel>

                    <TabPanel value={selectedTab} index={1}>
                        <Typography variant="h5" sx={{ textAlign: 'center' }}>Appointments Management</Typography>
                        <AppointmentTable />
                    </TabPanel>

                    <TabPanel value={selectedTab} index={2}>
                        <Typography variant="h5">User Management</Typography>
                        <UserTable />
                    </TabPanel>

                    <TabPanel value={selectedTab} index={3}>
                        {/* <Typography variant="h5">Services Management</Typography> */}

                        <ServiceManagement />  
                                </TabPanel>

                    <TabPanel value={selectedTab} index={4}>
                        <Typography variant="h5">Reviews Management</Typography>
                    </TabPanel>
                </Paper>
            </Container>
        </Box>
    );
}

export default MainPage;
