import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './MainAppBar.css'; // Ensure this file has the correct styles
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { PAGE_NAME } from '../../utils/constans';
import { Link } from 'react-router-dom';


export default function MainAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the selected path
    handleDrawerClose(); // Close drawer after navigation
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#002655' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, color: 'white' }}
          >
            Menu
          </Typography>
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Sidebar Menu (Drawer) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <div
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
          className="drawer-container"
        >
          <List>
            <ListItem button onClick={() => handleNavigate('/payment')}>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Pay or Transfer" />
            </ListItem>
            <ListItem button component={Link} to={PAGE_NAME.INTERNATIONAL_PAY_FROM}>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="International" />
            </ListItem>
            <ListItem button component={Link} to={PAGE_NAME.PAYEES}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Payees" />
            </ListItem>
            <ListItem button component={Link} to={PAGE_NAME.NOTIFICATIONS_SETTINGS}>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notification Settings" />
            </ListItem>
            <ListItem button component={Link} to={PAGE_NAME.CONTACTS}>
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItem>
            <ListItem button component={Link} to={PAGE_NAME.SETTINGS}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Box>
  );
}
