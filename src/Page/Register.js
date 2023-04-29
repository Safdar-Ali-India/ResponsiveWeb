import React, { useState, useRef } from 'react'
import { Container, Box, Grid, Typography, Button, Stack, TextField } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
// import PhoneInput from 'react-phone-number-input/input';
import UseStyles from "../Component/UseStyles";
import ReactPhoneInput from 'react-phone-input-mui';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core';
import PhoneInput from "react-phone-input-2";
import "../css files/Phone.module.css";
const Register = (props) => {
    const classes1 = UseStyles();
    const [openInputbox, setopenInputbox] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');

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
    const Input = (props) => {
        const classes = UseStyles();
      
        return (
          <Box className={classes.BoxInline} pr={1} pl={1}>
            <Box className={classes.BoxText} pr={1}>
              {props.label || props.labels} : {props.req && <span>*</span>}
            </Box>
            <Box>
              <PhoneInput
                specialLabel={""}
                country={"in"}
                inputStyle={{
                  borderColor: props.touched && props.error && "red"
                }}
                {...props}
              />
              {props.touched && props.error && (
                <p
                  style={{ color: "red" }}
                  className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense"
                >
                  {props.error}
                </p>
              )}
            </Box>
          </Box>
        );
      };
      
    const nameRef = useRef();

    // form submit handler
    const onSubmit = (e) => {
        e.preventDefault();

        console.log({
            // every ref will ALWAYS have the "current" property, which is the HTML DOM element
            userName: nameRef.current.value
        });

        // reset the form after using the value - NOT RECOMMENDED
        nameRef.current.value = "";
    };

    function handleLoginClick() {
        console.log("Login clicked");
      }
    const { value, defaultCountry, onChange, classes } = props;

    return (
        <Box>

            <Container sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                {/* <Stack
                    direction="column"
                    spacing={2}
                    alignItems="center"
                > */}
                {/* </Stack> */}

                <Box xs={12} sm={6} md={4} spacing={2} >
                    <Stack direction="row" sx={{ mb: '4', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <img
                            style={{
                                // position: 'absolute',

                                width: '43px',
                                height: '90px',
                                objectFit: 'cover',
                            }}
                            alt=""
                            src="/final-lucky-dodo-var051@2x.png"
                        />
                        <img
                            style={{
                                // position: 'absolute',


                                width: '144px',
                                height: '97px',
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
                        Sign up
                        </Typography>
                        <Typography variant='subtitle3'  sx={{ color: 'grey' }}> Fill in your details below and Sign up  </Typography>
                        {/* <Button
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
                        </Button> */}
                        {/* <Stack> */}
                            {/* <typography   >Full name</typography > */}
                            {/* <form onSubmit={onSubmit}  >
                                <input id="name" ref={nameRef} type="text" /> */}
                                {/* <button type="submit">Submit</button> */}
                            {/* </form> */}
                        
                           

<Box sx={{ maxWidth: '400px', margin: '0 auto' }}>
<Stack direction="row" spacing={2} sx={{ marginBottom: '20px', mr: 2 }}>
  <stack sx={{ display: 'inline-block' }}>
    <label htmlFor="firstName">First Name </label>
    <br />
    <input type="text" id="firstName" defaultValue="First Name"  style={{ width: '212px',borderRadius: '8px' }} />
  </stack>

  <stack sx={{ display: 'inline-block' }}>
    <label htmlFor="lastName">Last Name </label>
    <br />
    <input type="text" id="lastName" defaultValue="Last Name"style={{ width: '212px' ,borderRadius: '8px'}} />
  </stack>
</Stack>
 






 
    <Stack direction="row" spacing={2} sx={{ marginBottom: '20px' }}>
      <stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label htmlFor="gender" >Gender </label> <br />
        <select id="gender" sx={{ marginTop: '5px' }} style={{ width: '232px',borderRadius: '8px' }}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </stack>

      <stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label htmlFor="dateOfBirth">Date of Birth </label><br />
        <input type="date" id="dateOfBirth" sx={{ marginTop: '5px' }}style={{ width: '212px',borderRadius: '8px' }} />
      </stack>
    </Stack>

  <Stack direction="row" spacing={3} sx={{ marginBottom: '16px' }}>
    <stack>
      <label htmlFor="country">Country </label>
      <select id="country" style={{ width: '230px',borderRadius: '8px' }}>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
      </select>
    </stack>

    <stack>
      <label htmlFor="city">City </label><br/>
      <select id="city" style={{ width: '222px',borderRadius: '8px' }}>
        <option value="new-york">New York</option>
        <option value="toronto">Toronto</option>
        <option value="london">London</option>
      </select>
    </stack>
  </Stack>

  <Stack direction="row" spacing={2} sx={{ marginBottom: '16px' }}>
    <stack>
      <label htmlFor="email" >Email:</label>
      <input type="email" id="email" style={{ width: '452px',borderRadius: '8px' }}/>
    </stack>
  </Stack>
</Box>
<Box sx={{ maxWidth: '600px', margin: '0 auto' }} className="form-container">
  {/* ... */}
</Box>                
<Typography variant='subtitle2' sx={{ width: '450px' }}><span style={{ color: 'grey' }}>
By signing up to the Design studio of Databox.mu platform you understand and agree with our</span>  <a href="#" style={{ color: '#1B7BDB' }}> Terms of Service and Privacy Policy</a>
                            </Typography>
                        {/* Configure more */}

                   

 
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
                              Continue
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

                            <Button variant="contained" sx={{ width: '350px', }} startIcon={<FacebookIcon />}
                                size="large" onClick={() => { setopenInputbox(!openInputbox) }}>
                                Continue
                            </Button>

                        </Stack>)

                        }

<Typography variant='subtitle3'  sx={{ color: 'grey' }}>  Already Haven An Account? <a href="#" onClick={handleLoginClick} style={{ color: '#1B7BDB' }}>
      Login
    </a> </Typography>  
                        
                    </Stack>

                </Box>

            </Container>
        </Box>
    )
}

export default Register