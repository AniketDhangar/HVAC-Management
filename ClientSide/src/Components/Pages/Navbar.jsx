import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  CalendarToday as AppointmentIcon,
  People as UserIcon,
  Home as ServiceIcon,
  Star as ReviewIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

function Navbar({ onTabChange }) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Add theme and media query
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const settings = ['Profile', 'Settings', 'Logout'];
  const tabs = [
    { name: 'Dashboard', icon: <DashboardIcon /> },
    { name: 'Appointments', icon: <AppointmentIcon /> },
    { name: 'Users', icon: <UserIcon /> },
    { name: 'Services', icon: <ServiceIcon /> },
    { name: 'Reviews', icon: <ReviewIcon /> },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#333' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Left - Menu Icon & Logo */}
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              HVAC ADMIN
            </Typography>

            {/* Middle - Navigation Tabs - Only visible on desktop */}
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                {tabs.map((tab) => (
                  <Box
                    key={tab.name}
                    sx={{
                      mx: 2,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': { color: 'primary.main' },
                    }}
                    onClick={() => onTabChange(tab.name)}
                  >
                    {tab.icon}
                    <Typography sx={{ ml: 1 }}>{tab.name}</Typography>
                  </Box>
                ))}
              </Box>
            )}

            {/* Right - Profile Menu */}
            <Box sx={{ flexGrow: isMobile ? 1 : 0, display: 'flex', justifyContent: 'flex-end',

             }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }} >
                  <Avatar alt="Admin User" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu} >
                    <Typography textAlign="center" width='100px' padding='3px' color='black'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer - Only for mobile */}
      {isMobile && (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                HVAC ADMIN
              </Typography>
            </Box>
            <Divider />
            <List>
              {tabs.map((tab) => (
                <ListItem button key={tab.name} onClick={() => onTabChange(tab.name)}>
                  <ListItemIcon>{tab.icon}</ListItemIcon>
                  <ListItemText primary={tab.name} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon><SettingsIcon /></ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><LogoutIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
}

export default Navbar; 