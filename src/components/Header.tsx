import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

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
        elevation={1}
      >
        <Toolbar sx={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <div className="desktop-menu">
            <Button color="inherit" component={RouterLink} to="/" sx={{ color: 'black' }}>
              PROJECTS
            </Button>
            <Button color="inherit" component={RouterLink} to="/videos" sx={{ color: 'black' }}>
              VIDEOS
            </Button>
            <Button color="inherit" component={RouterLink} to="/about" sx={{ color: 'black' }}>
              ABOUT
            </Button>
            <Button color="inherit" component={RouterLink} to="/contact" sx={{ color: 'black' }}>
              CONTACT
            </Button>
          </div>
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
      </AppBar>

      <Drawer 
        anchor="left" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List sx={{ width: 250 }}>
          <ListItem button component={RouterLink} to="/" onClick={toggleDrawer(false)}>
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
