import * as React from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Tooltip,
  MenuItem,


} from '@mui/material';
import { useMediaQuery } from "@mui/material";

import DroupDown from './DroupDown';
import MenuforHeader from './MenuforHeader';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';


import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import SwipeableTemporaryDrawer from './Drawer/LeftDrawer';

import { useNavigate } from "react-router-dom";


import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const pages = [
  {
    type: "DropDown",
    name: "New York",
    city: ["New York", "Banglore", "Bihar"]
  },
  {
    type: "DropDown",
    name: "Explor",
    city: ["Delhi", "Banglore", "Bihar"]
  },
  {
    type: "Button",
    name: "Create Team"
  } 
];



function Header() {

  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // ===============
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
   
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const navigatefromright=(text)=>{
    
    if(text==='Logout'){
      navigate("/signup");
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {
        anchor === 'left' && (
          pages.map((val, id) => (
            <DroupDown page={val} />
          ))
        )}

      {
        anchor === 'right' && (

          <List  >
            {settings.map((text, index) => (
              <ListItem key={text} disablePadding >
                <ListItemButton onClick={()=>navigatefromright(text)}>
                  <ListItemIcon >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text}    />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )
      }
    </Box>
  );




  return (
    <AppBar position="static" >
      <Container maxWidth="xl" sx={{ backgroundColor: '#1B2330' }}>
        <Toolbar disableGutters    >
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              // backgroundColor:"#1B2330"
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',  } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={!isMobile ?
                handleOpenNavMenu : toggleDrawer("left", true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >


              {isMobile ? (
                <React.Fragment key={"left"}>
                  {/* <Button onClick={toggleDrawer("left", true)}>{"left"}</Button> */}
                  <SwipeableDrawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                   >
                    {list("left")}
                  </SwipeableDrawer>
                </React.Fragment>
              ) : pages.map((page) => (
                <DroupDown page={page} />
              ))
              }


            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <DroupDown page={page} />
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={!isMobile ?
                  handleOpenUserMenu : toggleDrawer("right", true)}
                sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {isMobile ? (
                <React.Fragment key={"right"} >
                  {/* <Button onClick={toggleDrawer("right", true)}>{"right"}</Button> */}
                  <SwipeableDrawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                    onOpen={toggleDrawer("right", true)}
                  
                  >
                    {list("right")}
                  </SwipeableDrawer>
                </React.Fragment>
              )
                : settings.map((text) => (
                  <MenuItem key={text} onClick={()=>navigatefromright(text)}  >
                    <Typography textAlign="center">{text}</Typography>
                  </MenuItem>
                ))

              }

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;








