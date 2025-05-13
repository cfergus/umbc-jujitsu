import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link, linkOptions } from "@tanstack/react-router";
import React from "react";


const drawerWidth = 240;
const homeLabel = "UMBC Jujitsu";

const navItems = linkOptions([
  {
    to: '/',
    label: 'Home',
    activeOptions: { exact: true }
  },
  { 
    to: '/belts',
    label: 'Belts',
  },
  {
    to: '/techniques',
    label: 'Techniques'
  }
]);

export default function JujitsuAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {homeLabel}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link 
            key={item.to}
            {...item}
            activeProps={{ className: 'font-bold'}}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItem  disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = document.body;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Toolbar>
          {/* 

          TODO : Haven't imported Icons yet

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Button color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
              Show Options        
          </Button>


          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {homeLabel}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {
              navItems.map( (item) => (

                <Link 
                  key={item.to}
                  {...item}
                  activeProps={{ className: 'font-bold'}}  // TODO : active class is being overridden by mui typography, it seems
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Button sx={{ color: '#fff' }}>{item.label}</Button>
                 
                </Link>
              ))
            }
          </Box>

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );


}