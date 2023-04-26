


import * as React from 'react';
// import styles from "../css files/";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid, Container, Box, Typography } from '@mui/material';
import Header from '../Component/Header';
import Paper from '@mui/material/Paper';
import SearchBox from '../Component/SearchBox';

export default function City() {
    const [tick, settick] = React.useState(false)
    const marktheimage = (id) => {
        settick("true")
    }
    return (
       
<>
            <Header />
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center',backgroundColor: '#1B222F' }}>
            
         
                <SearchBox />



                <Container sx={{ width: '100%', display: 'flex', m: 2 }}>

                    <Grid container spacing={2} >
                    {itemData.map((value,idenx)=>(
                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column' }} >

                            <Box sx={{
                                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.08), 0px 1px 3px rgba(0, 0, 0, 0.1)", m: 1, display: 'flex',
                                alignItems: 'center', borderRadius: '8px', flexDirection: 'column'
                            }}>
                                <Paper sx={{
                                    backgroundImage: `url(${value.img})`,
                                    height: '160px',
                                    width: '100%',

                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    aspectRatio: '1/1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }} >
                                    <Typography variant='h5' gutterBotto style={{color: '#fff', fontWeight: 'bold'}}>{value.title}</Typography>
                                </Paper>

                                {/* </Stack> */}


                            </Box>
                        </Grid>
                        ))}
                    </Grid>
                   

                </Container>
            </Box>
            </>
    );
}

const itemData = [
    {
        img: '/image20@2x.png',
        title: 'Madrid',
    },
    {
        img: '/image20@2x.png',
        title: 'Madrid',
    },
    {
        img: '/image21@2x.png',
        title: 'Pekin',
    },
    {
        img: '/image20@2x.png',
        title: 'Madrid',
    },
    {
        img: '/image23@2x.png',
        title: 'New York',
    },
    {
        img: '/image24@2x.png',
        title: 'Barselona',
    },
    {
        img: '/image26@2x.png',
        title: 'Praha',
    },
    {
        img: '/image23@2x.png',
        title: 'New York',
    },
    {
        img: '/image27@2x.png',
        title: 'London',
    },
    {
        img: '/image28@2x.png',
        title: 'Los Angeles',
    },
    {
        img: '/image26@2x.png',
        title: 'London',
    },
    {
        img: '/image26@2x.png',
        title: 'London',
    },
    {
        img: '/image27@2x.png',
        title: 'London',
    },
    {
        img: '/image6@2x.png',
        title: 'Paris',
    },
    {
        img: '/image21@2x.png',
        title: 'Tokyo',
    },
    {
        img: '/image27@2x.png',
        title: 'Paris',
    }
     
];