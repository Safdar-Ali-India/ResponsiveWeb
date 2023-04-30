import { Box, Stack, Typography, Grid, Button, Card, CardActions, CardContent, CardMedia, Container } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import dornment from '../../../asset/image-1689@2x.png';
import profilricon from '../../../asset/group-16865520574@2x.png';

const Teamspc = () => {
    const navigate = useNavigate();
    const gobackhome = () => {
        navigate("/");
    }
    return (
        <Box style={{backgroundColor:'#1B2330'}}>
            <Container style={{height:'834px', borderRadius:'16px',backgroundColor:'#1B2330'}}>

                <Card style={{height:'734px' }}>
                    <Grid container sx={{ my: 3, mx: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginTop: '20px' }}>
                        <Box >
                            <Typography variant='h4' sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal', fontWeight: '400', fontSize: '40px', lineHeight: '60px',
                                display: 'flex', alignItems: 'center', color: '#1E2329',
                            }}>
                                 Create a Team, Play to{'\u00A0'} <span><b> go to Paris </b></span>{'\u00A0'} 
   
  together 
                            </Typography>
                        </Box>
                        <Grid item xs={12} sm={6} md={5} >
                            <Box>
                                <Card sx={{ display: 'flex', flexDirection: 'row', borderColor: 'grey',height:'70px', width: '238px', border: 1 }}>
                                    <CardMedia
                                        component="img"
                                        
                                        image={profilricon}
                                        alt="Paella dish"
                                        style={{ borderColor: 'grey.500', border: 1 ,  
                                            width: '67px', height:'67px'
                                            
                                          }}
                                    />
                                    <CardContent sx={{ display: 'flex', flexDirection: 'row', width: '40%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant="body2" color="text.secondary"  >Choose Avatar</Typography>
                                    </CardContent>

                                </Card>

                                <Stack sx={{ my: 1 }}>
                                    <Typography variant='subtitle2' >
                                        Group Name
                                    </Typography>
                                    <TextField id="outlined-basic" label="Outlined" size="small" variant="outlined" sx={{ m:{xs:'3px',sm:'5px',md:1}, width: {xs:'25ch',sm:'30ch',md:'40ch'} }} />
                                </Stack>
                                <Stack sx={{ my: 1 }}>
                                    <Typography variant='subtitle2' >
                                        Sharing Link
                                    </Typography>
                                    <TextField id="outlined-basic" label="Outlined" size="small" variant="outlined" sx={{ m: 1, width: '40ch' }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                                        }} />
                                </Stack>
                                
                                <Stack sx={{ my: 1 }}>
                                <Typography variant='subtitle2' >
                                Invite via Email
                                    </Typography>
                                    <TextField id="outlined-basic" label="Email Address" size="small" variant="outlined" sx={{ m: 1, width: '40ch' }} />
                                    <TextField id="outlined-basic" label="Email Address" size="small" variant="outlined" sx={{ m: 1, width: '40ch' }} />
                                    <TextField id="outlined-basic" label="Add another email" size="small" variant="outlined" sx={{ m: 1, width: '40ch' }} />
                                </Stack>
                                
                            </Box>


                        </Grid>
                        <Grid item xs={12} sm={6} md={7} sx={{ display: { xs: 'none', md: 'block' }, backgroundColor: '#00ffff' }}>
                            <Box sx={{
                                backgroundImage: `url(${dornment})`,
                                width: '750px',
                                height: '563px',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                aspectRatio: '1/1'
                            }}

                            />
                        </Grid>
                    </Grid>
                </Card>
                <Stack  >
                    <Typography variant='subtitle2'
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', my: 3 }}
                        onClick={gobackhome}
                    >
                        <ArrowBackIosIcon />
                        Back to homepage
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}

export default Teamspc