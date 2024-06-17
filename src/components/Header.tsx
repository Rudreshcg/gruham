import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

// Create a styled component for the desktop menu
const DesktopMenu = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
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
        <Toolbar sx={{ maxWidth: '1200px', margin: '0 auto', width: '100%', minHeight: '80px', padding: '0 16px' }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          >
            My App
          </Typography>
          <DesktopMenu>
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
              to="/videos" 
              sx={{ 
                color: '#4b4f58', 
                p: "16px 24px",
                '&:hover': {
                  color: 'blue', 
                  backgroundColor: 'inherit' 
                } 
              }}
            >
              VIDEOS
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
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider sx={{ width: '100%' }} />
      </AppBar>

      <Drawer 
        anchor="left" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List sx={{ width: 250 }}>
          <ListItem button component={RouterLink} to="/projects" onClick={toggleDrawer(false)}>
            <ListItemText primary="PROJECTS" />
          </ListItem>
          <ListItem button component={RouterLink} to="/videos" onClick={toggleDrawer(false)}>
            <ListItemText primary="VIDEOS" />
          </ListItem>
          <ListItem button component={RouterLink} to="/about" onClick={toggleDrawer(false)}>
            <ListItemText primary="ABOUT" />
          </ListItem>
          <ListItem button component={RouterLink} to="/contact" onClick={toggleDrawer(false)}>
            <ListItemText primary="CONTACT" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
