import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Header from '../Component/Header'
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const Explore = () => {
    return (
        <Box sx={{ width: '100%', minHeight: '100vh' ,backgroundColor:'#1B2330' }}>
            <Header />
            <Container xs={12} >

                <Grid container sx={{ display: 'flex', flexDirection: 'row', my: 3, mx: 2 }} spacing={2}>
                    <Grid item xs={12} sm={6} md={4} >
                        <List sx={{width: '100%',maxWidth: 218}} component="nav" aria-label="mailbox folders" >
                            {/* <ListItem button>
                            <Divider />
                            <Divider light /> */}
                            {LeftSideArrayData.map((val,id)=>(
                                <Stack sx={{backgroundColor:'#2C394E'  }}>

                            <ListItem button>
                                <ListItemText primary={val} />
                                <ArrowForwardIosIcon />
                            </ListItem>
                                </Stack>
                            ))}

                        </List>

                    </Grid>
                    <Grid item xs={12} sm={6} md={8} sx={{backgroundColor:'#1B2330'  }}>
                        <Grid container sx={{  }} spacing={2}>
                            {RightSideArrayData.map((val,id)=>(

                            <Grid item xs={12} sm={6} md={3} sx={{backgroundColor:'#1B2330',color:'#ffffff'  }} > 
                           
                                <Typography variant='h6' sx={{lineHeight:'20px',fontSize:'16px',fontWeight:'700'}}>hello</Typography>
                                <List  component="nav" aria-label="mailbox folders">

                                <hr sx={{color:'#ffffff' ,width:'1px' }}   />
                                </List>
                                <Typography variant='subtitle2' sx={{lineHeight:'20px',fontSize:'12px',fontWeight:'600',opacity:'0.6'}}>{val}</Typography>
                                <Typography variant='subtitle2' sx={{lineHeight:'20px',fontSize:'12px',fontWeight:'600',opacity:'0.6'}}>{val}</Typography>
                                <Typography variant='subtitle2' sx={{lineHeight:'20px',fontSize:'12px',fontWeight:'600',opacity:'0.6'}}>{val}</Typography>
                                <Typography variant='subtitle2' sx={{lineHeight:'20px',fontSize:'12px',fontWeight:'600',opacity:'0.6'}}>{val}</Typography>
                                <Typography variant='subtitle2' sx={{lineHeight:'20px',fontSize:'12px',fontWeight:'600',opacity:'0.6'}}>{val}</Typography>
                                <Typography variant='subtitle2' sx={{lineHeight:'20px',fontSize:'12px',fontWeight:'600',opacity:'0.6'}}>{val}</Typography>
                            

                            </Grid>
                            ))}
                            {/* <Grid item>

                            </Grid>
                            <Grid item>

                            </Grid>
                            <Grid item> */}

                            {/* </Grid> */}
                        </Grid>
                       
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default Explore


const LeftSideArrayData = [
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
    'Lorem imput',
]
const RightSideArrayData = [
    'Lorem imput Lorem imput',
    'Lorem imput Lorem imput',
    'Lorem imput',
    
    'Lorem imputLorem imput',
    'Lorem imput',
    'Lorem imputLorem imput',
    'Lorem imput',
   
    'Lorem imputLorem imput',
    'Lorem imput',
    
    'Lorem imputLorem imput',
    'Lorem imput',
    'Lorem imputLorem imput',
    
]


