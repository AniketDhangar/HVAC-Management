import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const drawerWidth = 280;

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'About', icon: <InfoIcon />, path: '/about' },
  { text: 'Services', icon: <CleaningServicesIcon />, path: '/services' },
  { text: 'Blog', icon: <BookTwoToneIcon />, path: '/blogs' },
  { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
];

function ResponsiveDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleClick = () => {
    navigate('/');
  };

  const drawer = (
    <Box sx={{ mt: 2, position: 'sticky', width: drawerWidth }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                },
                borderRadius: 2,
                m: 0.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === item.path
                      ? theme.palette.primary.contrastText
                      : 'inherit',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      {/* AppBar */}
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            variant="h1"
            component="div"
            onClick={handleClick}
            sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}
          >
            AC Services
          </Button>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                startIcon={item.icon}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  padding: '8px 16px',
                  backgroundColor:
                    location.pathname === item.path
                      ? 'rgba(255, 255, 255, 0.12)'
                      : 'transparent',
                  '&:hover': {
                    color: 'black',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%',
          // mt: { xs: 7, sm: 8 },
        }}
      >

      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
