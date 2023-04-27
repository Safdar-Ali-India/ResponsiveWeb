import React, { useState } from 'react'
import { Container, Box, Grid, Typography, Button, Stack, TextField } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const Singup = () => {
    const [openInputbox, setopenInputbox] = useState(false)
    return (
        <Box>

            <Container sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Box xs={12} sm={6} md={4} >
                    <Stack spacing={2} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h3' sx={{ mb:3 }}>
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
                        {openInputbox === false ?
                            <Button variant="contained" sx={{ width: '350px', }} startIcon={<FacebookIcon />}
                                size="large" onClick={() => { setopenInputbox(!openInputbox) }}>
                                Mobile Number
                            </Button> : <Stack sx={{m:2}} spacing={2}>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '350px', }} />
                                <Typography variant='subtitle2' sx={{ width: '350px', }}>
                                    When you tap “Continue”, LuckyDodo will send a text with a verification code.
                                    Message and data rates may apply. The verified phone number can be used to login.
                                    Learn what happens when your number changes.
                                </Typography>
                                <Button variant="contained" sx={{ width: '350px', }} startIcon={<FacebookIcon />}
                                size="large" onClick={() => { setopenInputbox(!openInputbox) }}>
                                Continue
                            </Button>

                            </Stack>

                        }


                    </Stack>

                </Box>

            </Container>
        </Box>
    )
}

export default Singup