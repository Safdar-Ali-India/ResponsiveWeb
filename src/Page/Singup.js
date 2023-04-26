import React from 'react'
import {Container,Box, Grid, Typography, Button, Stack} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const Singup = () => {
  return (
    <Container sx={{backgroundColor:'#ff0000',height:'100vh',display:'flex',flexDirection:'column',
    justifyContent:'center',alignItems:'center' }}>
        <Box xs={12} sm={6} md={4} sx={{display:'flex',flexDirection:'column',
        justifyContent:'center',alignItems:'center' ,backgroundColor:'#00ff00'}}>
            <Stack  xs={12} sm={6} md={4}>
                <Typography variant='h5'>
                    text here
                </Typography>
            <Button variant="contained" endIcon={<FacebookIcon />} size="large">
        Send
      </Button>
            <Button variant="contained" endIcon={<FacebookIcon />} size="large">
        Send
      </Button>
            <Button variant="contained" endIcon={<FacebookIcon />} size="large">
        Send
      </Button>
              
            </Stack>
        </Box>

    </Container>
  )
}

export default Singup