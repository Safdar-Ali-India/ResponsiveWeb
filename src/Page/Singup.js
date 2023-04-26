import React from 'react'
import { Container, Box, Grid, Typography, Button, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const Singup = () => {
    return (
        <Container sx={{
            height: '100vh',
            display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
        }}>

            <Box xs={12} sm={6} md={4} sx={{   }}>
                <Stack spacing={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant='h5'>
                        Welcome! How do you to get started?
                    </Typography>
                    <Button variant="contained" sx={{ width: '300px', }} startIcon={<FacebookIcon />} size="large">
                        Continue with Google
                    </Button>
                    <Button variant="contained" sx={{ width: '300px', }} startIcon={<FacebookIcon />} size="large">
                        Continue with Facebook
                    </Button>
                    <Button variant="contained" sx={{ width: '300px', }} startIcon={<FacebookIcon />} size="large">
                        Continue with Apple
                    </Button>
                    <Typography variant='subtitle1'>
                        ----------------or--------------
                    </Typography>
                    <Button variant="contained" sx={{ width: '350px', }} startIcon={<FacebookIcon />} size="large">
                        Mobile Number
                    </Button>

                </Stack>

            </Box>

        </Container>
    )
}

export default Singup