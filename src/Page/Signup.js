import React, { useState } from 'react'
import { Container, Box, Grid, Typography, Button, Stack, TextField } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneInput from 'react-phone-number-input/input';
import ReactPhoneInput from 'react-phone-input-mui';
import { withStyles } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
    const [openInputbox, setopenInputbox] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    const signFunction= ()=>{
      navigate("/enter-your-code");
  
    }
    const handleCountryChange = (country) => {
        setCountry(country);
    };
    const styles = theme => ({
        field: {
            margin: '10px 0',
        },
        countryList: {
            ...theme.typography.body1,
        },
    });



    const { value, defaultCountry, onChange, classes } = props;

    return (
        <Box>

            <Container sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'column'
            }}>
                {/* <Stack
                    direction="column"
                    spacing={2}
                    alignItems="center"
                > */}
                {/* </Stack> */}

                <Box xs={12} sm={6} md={4} spacing={2} >
                    <Stack direction="row"  sx={{ mb:'4',display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        
                        <img
                            style={{
                                // position: 'absolute',

                                width: '40px',
                                height: '85px',
                                objectFit: 'cover',
                            }}
                            alt=""
                            src="/final-lucky-dodo-var051@2x.png"
                        />
                        <img
                            style={{
                                // position: 'absolute',


                                width: '151px',
                                height: '85px',
                                objectFit: 'cover',
                            }}
                            alt=""
                            src="/final-lucky-dodo-var011@2x.png"
                        />
                    </Stack>
                    <Stack spacing={2} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h5' fontWeight='bold' style={{ marginBottom: '20px', fontSize: '28px' }} >
                            Welcome! How do you to get started?
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                width: '300px',
                                bgcolor: 'white',
                                border: '1px solid',
                                borderColor: 'grey.300',
                                display: 'flex',
                                alignItems: 'center',
                                '&:hover': {
                                    bgcolor: 'white'
                                }
                            }}
                        >
                            <img
                                style={{ width: '24px', height: '24px', marginRight: '10px' }}
                                alt=""
                                src="/google-logo.svg"
                            />
                            <b style={{ color: 'grey' }}>Continue with Google</b>
                        </Button>



                        {/* Configure more */}

                        <Button variant="contained" sx={{ width: '300px', display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '24px', height: '24px', marginRight: '10px' }} alt="" src="/facebook-logo.svg" />
                            <b>Continue with Facebook</b>
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                width: '300px',
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: 'black',
                                border: '1px solid black',
                                '&:hover': {
                                    bgcolor: 'black'
                                }
                            }}
                        >
                            <img
                                style={{ width: '24px', height: '24px', marginRight: '10px' }}
                                alt=""
                                src="/apple-logo.svg"
                            />
                            <b style={{ color: 'white' }}>Continue with Apple</b>
                        </Button>


                        <span style={{ color: 'grey' }} variant='subtitle2' fontWeight='bold'>
                            ------------- or --------------
                        </span>
                        <Typography variant='subtitle3' >
                            Sign up with you number instead
                        </Typography>
                        {openInputbox === false ? (


                            <Button
                                variant="contained"
                                sx={{ width: '350px' }}
                                //   startIcon={<FacebookIcon />}
                                //   size="large"
                                onClick={() => {
                                    setopenInputbox(!openInputbox);
                                }}
                            >
                                Mobile Number
                            </Button>


                        ) : (<Stack sx={{ m: 2 }} spacing={2}>
                            <ReactPhoneInput
                                value={value}
                                defaultCountry={defaultCountry || 'gb'}
                                onChange={onChange}
                                inputClass={classes?.field}
                                dropdownClass={classes?.countryList}
                                component={TextField}
                                inputExtraProps={{
                                    margin: 'normal',
                                    autoComplete: 'phone',
                                    name: 'custom-username'
                                }}
                            />
                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '350px', }} /> */}
                            <Typography variant='subtitle2' sx={{ width: '350px' }}><span style={{ color: 'grey' }}>
                                When you tap “Continue”, LuckyDodo will send a text with a verification code. Message and data rates may apply.The verified phone number can be used to login.</span>  <span style={{ color: '#1B7BDB' }}>Learn what happens when your number changes.</span>
                            </Typography>

                            <Button variant="contained" sx={{ width: '350px', }}  
                                size="large" onClick={signFunction}>
                                Continue
                            </Button>

                        </Stack>)

                        }


                    </Stack>

                </Box>

            </Container>
        </Box>
    )
}

export default Signup