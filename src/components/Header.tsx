import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, List, ListItem, ListItemText, Divider, Box, Collapse, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import Logo from '../images/Logo.jpeg'; // Correct path to the image

const DesktopMenu = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: 'white', 
          color: 'black' 
        }} 
        elevation={0}
      >
        <Toolbar sx={{ maxWidth: '1200px', margin: '0 auto', width: '100%', minHeight: '90px !important', padding: '0px' }}>
          <Box sx={{ flexGrow: 1, px: 1 }}>
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <img
                src={Logo} 
                alt="My App"
                style={{ height: '60px', width: 'auto', paddingLeft: isMobile ? '12px' : '0px'}} 
              />
            </RouterLink>
          </Box>
          <DesktopMenu>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/" 
              sx={{ 
                color: '#4b4f58', 
                p: "16px 24px",
                '&:hover': {
                  color: 'blue', 
                  backgroundColor: 'inherit' 
                } 
              }}
            >
              HOME
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/projects" 
              sx={{ 
                color: '#4b4f58', 
                p: "16px 24px",
                '&:hover': {
                  color: 'blue', 
                  backgroundColor: 'inherit'
                } 
              }}
            >
              PROJECTS
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/about" 
              sx={{ 
                color: '#4b4f58', 
                p: "16px 24px",
                '&:hover': {
                  color: 'blue', 
                  backgroundColor: 'inherit' 
                } 
              }}
            >
              ABOUT
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/contact" 
              sx={{ 
                color: '#4b4f58', 
                p: "16px 24px",
                '&:hover': {
                  color: 'blue', 
                  backgroundColor: 'inherit' 
                } 
              }}
            >
              CONTACT
            </Button>
          </DesktopMenu>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            sx={{ display: { xs: 'block', md: 'none', paddingRight: '12px' } }}
            onClick={toggleDrawer}
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        <Divider sx={{ width: '100%' }} />
      </AppBar>

      <Collapse in={drawerOpen}>
        <Box 
          sx={{ 
            width: '100%', 
            position: 'absolute', 
            backgroundColor: 'white',
            zIndex: 1,
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <List>
            <ListItem button component={RouterLink} to="/" onClick={toggleDrawer}>
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button component={RouterLink} to="/projects" onClick={toggleDrawer}>
              <ListItemText primary="PROJECTS" />
            </ListItem>
            <ListItem button component={RouterLink} to="/about" onClick={toggleDrawer}>
              <ListItemText primary="ABOUT" />
            </ListItem>
            <ListItem button component={RouterLink} to="/contact" onClick={toggleDrawer}>
              <ListItemText primary="CONTACT" />
            </ListItem>
          </List>
        </Box>
      </Collapse>

      <Box sx={{ marginTop: drawerOpen ? '32vh' : 0 }}>
      </Box>
    </>
  );
};

export default Header;
