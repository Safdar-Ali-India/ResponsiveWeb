

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {Grid,Container,Box,Typography,TextField,InputAdornment, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import { Search } from '@material-ui/icons';

export default function SearchBox() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '469px' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Paper>


    
    // <Box
    //   sx={{
    //     m:2,
    //     width: 500,
    //     maxWidth: '100%', backgroundColor: '#ffff', borderRadius:'8px'
    //   }}
    // >
    //   <TextField fullWidth label="Search " id="fullWidth"  InputProps={{
    //     endAdornment: (
    //       <InputAdornment position="end">
    //         <IconButton>
    //           <SearchIcon />
    //         </IconButton>
    //       </InputAdornment>
    //     ),
    //   }} >
    //   </TextField>
    //     {/* <SearchIcon /> */}
    // </Box>
  );
}