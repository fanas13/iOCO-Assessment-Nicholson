import MuiAppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import { styled } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import ListItem from '../../components/ListItem/index';
import Logo from '../../components/Logo/index';

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// method to render drawer links 
const RenderTopNavLinks = () => {
  // nav links 
  const navLinks = ['Store', 'Products & Services' , 'Help & Support']
  
  // check if the list exists to avoid re-rendering
  if (navLinks.length > 0 && navLinks != undefined) {
    const links  = navLinks.map((link) => {
      return(
        <Link color="secondary" style={{ textDecoration: 'none' }}>
            <MenuItem>
              <Typography>{link}</Typography>
            </MenuItem>
        </Link>
      );
    });
    return (
      <Toolbar>{links}</Toolbar>
    );
  };
}

export default function PersistentDrawerTop() {
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="relative" style={{marginBottom: '80px'}}>
        <Grid item md={12} container spacing={0} justifyContent="center" direction="row">
          <Hidden xsDown>
            <Grid md={1} container alignItems="center" justifyContent="flex-start" item> 
              <div className="logoContainer">
                <Logo />
              </div>
            </Grid>
          </Hidden>
          <Grid item md={6} justifyContent="center" direction="row">
            {RenderTopNavLinks()}
          </Grid>
          <Grid item md={2} direction="row">
            <Link color="secondary"  style={{ textDecoration: 'none' }}>
              <MenuItem disabled>
                <ListItem /> <Typography>PERSONAL</Typography>
              </MenuItem>
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}