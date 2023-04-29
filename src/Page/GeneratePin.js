import React, { useState } from 'react'
import { Container, Box, Grid, Typography, Button, Stack, TextField } from '@mui/material';
// import { Stack, Typography, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneInput from 'react-phone-number-input/input';
import ReactPhoneInput from 'react-phone-input-mui';
import { withStyles } from '@material-ui/core';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useNavigate } from "react-router-dom";

const GeneratePin = (props) => {
    const [openInputbox, setopenInputbox] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    const signs= ()=>{
      navigate("/");
  
    }
        const [otp, setOtp] = React.useState('')
      
        const handleChange = (newValue) => {
          setOtp(newValue)
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
    const [code, setCode] = useState('');

    const handleCodeChange = (event) => {
      setCode(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: Implement code submission logic
    };


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
                                width: '46px',
                                height: '88px',
                             
                                objectFit: 'cover',
                            }}
                            alt=""
                            src="/final-lucky-dodo-var051@2x.png"
                        />
                        <img
                            style={{
                                // position: 'absolute',

                                width: '167px',height: '120px',
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
                        Generate Your Pin
                        </Typography>

                        {/* <Stack direction="row" spacing={30}>
  <Stack>+945 6784567</Stack>
  <a href="#" style={{ color: '#1B7BDB' }}>Resend</a>
</Stack> */}
                        <Box spacing={2} sx={{ width: '400px'}}>
      {/* <Typography variant="h6" align="center">
        Enter your code
      </Typography> */}
      <Typography variant="subtitle1" align="center">
        Please enter the code you received via SMS or email
      </Typography>
      {/* console.log("----- ",handleChange); */}
      
        
 
{/* </Stack> */}
{/* <MuiOtpInput value={otp} onChange={handleChange} />  */}
<MuiOtpInput value={otp} onChange={handleChange} length={6}  />
<br/>
        
        <Button type="submit" variant="contained" fullWidth onClick={signs}>
          Continue
        </Button>
 
    </Box>
    <Stack direction="row" spacing={30}>
   
  <a href="#" style={{ color: '#1B7BDB' }} spacing={30}>Update contact info</a>
</Stack>

</Stack>
</Box>
            </Container>
        </Box>
    )
}

export default GeneratePin