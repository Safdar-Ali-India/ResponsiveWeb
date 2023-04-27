import * as React from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MenuforHeader from './MenuforHeader';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
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

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: '#1B2330' }}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            }}
          >
            LOGO
          </Typography> */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '38px',
            width: '156px',
            height: '58px',
          }}>
            <img
              style={{
                position: 'absolute',
                top: '2px',
                left: '56px',
                width: '100px',
                height: '56px',
                objectFit: 'cover'
              }}
              alt=""
              src="/final-lucky-dodo-var01@2x.png"
            />
            <img
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '98px',
                height: '55px'
              }}
              alt=""
              src="/final-lucky-dodo-var05@2x.png"
            />
          </div>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* <Menu
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
              <MenuforHeader page={pages} settings={settings} />
              {
                pages.map((page) => {
                  return <MenuforHeader page={page} />
                })
                
              }
            </Menu> */}
          </Box>
          <div style={{
            position: 'absolute',
  top: 0,
  left: '38px',
  width: '156px',
  height: '58px',
}}>
          <img
        style={{
          position: 'absolute',
          top: '2px',
          left: '56px',
          width: '100px',
          height: '56px',
          objectFit: 'cover'
        }}
            alt=""
            src="/final-lucky-dodo-var01@2x.png"
          />
          <img
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '98px',
              height: '55px'
            }}
            alt=""
            src="/final-lucky-dodo-var05@2x.png"
          />
        </div>
   
       
        
  <Stack
    spacing={2}
    direction="row"
    sx={{
      display: "flex",
      alignItems: "center",
      marginLeft: "56px",
      // marginRight: "132px",
      color: "white",
      flexGrow: 1,width:'1030px',
      justifyContent: "flex-end", color: "black"
    }}
  >
    <Button variant="outlined" sx={{ color: "white", borderColor: "white" ,"&:hover": {
      color: "black",
      borderColor: "black"
    }}}>
      Create a Team
    </Button>
  </Stack>
          
 
  
     
 


          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              
              <MenuforHeader />
            ))}
           
          </Box> */}
<div style={{
  background: 'linear-gradient(180deg, rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0))',
  width: '100vw',
  height: '58px',
  textAlign: 'left',
  fontSize: 'var(--button-normal-button-text-size)',
  fontFamily: 'var(--font-open-sans)'
}}>
  <div  style={{
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'var(--color-gray-400)',
  boxShadow: '0 4px 66px rgba(0, 0, 0, 0.25)',
  width: '100%',
  height: '60px'
}}/>

  <div style={{
  display: 'flex',
  flexDirection: 'row',
  position: 'absolute',
  top: '12px',
  left: '1290px',
  width: '20px',
  height: '34px'
}}>
    <Button>
      <FavoriteBorderTwoToneIcon style={{color:'white'}} />
    </Button>
    <Button>
      <SettingsTwoToneIcon style={{color:'white'}}/>
    </Button>
   
 
  </div>
</div>

          <Box sx={{ flexGrow: 0 , ml: 'auto'}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;