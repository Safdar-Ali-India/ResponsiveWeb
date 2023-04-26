


import * as React from 'react';
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
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', m: 2, alignItems: 'center' }}>

                <SearchBox />



                <Container sx={{ width: '100%', display: 'flex', m: 2, }}>

                    <Grid container spacing={2} >
                    {itemData.map((value,idenx)=>(
                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column' }} >

                            <Box sx={{
                                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.08), 0px 1px 3px rgba(0, 0, 0, 0.1)", m: 1, display: 'flex',
                                alignItems: 'center', borderRadius: '8px', flexDirection: 'column'
                            }}>
                                <Paper sx={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1575936123452-b67c3203c357')",
                                    height: '160px',
                                    width: '100%',

                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    aspectRatio: '1/1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }} >
                                    <Typography variant='subtitle1' gutterBottom>Image Name</Typography>
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
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];