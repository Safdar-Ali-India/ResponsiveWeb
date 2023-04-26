// import React from 'react'
import Header from '../Component/Header'
import img from '../asset/titleimage@2x.png'
// import Stack from '@mui/material/Stack';


// const LuckyHome = () => {
//   return (
//     <>
//     <Stack direction="row" spacing={2}>


//     </Stack>

//     </>
//   )
// }

// export default 


import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import BackGroundImg from '../Component/BackGroundImg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchBox from '../Component/SearchBox';
import { styled } from '@mui/material/styles';
import ImageInCard from '../Component/ImageInCard';
import Imageee from '../asset/final-lucky-dodo-var01@2x.png'
import { Stack } from '@mui/material';
// import img from '../asset/group-16865520576@2x.png'



const StyledPaper = styled(Paper)({
    backgroundImage: 'url("../asset/group-16865520576@2x.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // set a minimum height to make sure the image covers the entire background
});

export default function LuckyHome() {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `
<Grid container spacing={${spacing}}>
`;

    return (

        <>
            <Box>
                <Header />
                <Box sx={{ width: '100%', height: "100px", backgroundColor: "#00ffff" }}>
                    <h1>image</h1>
                </Box>
                {/* <Container sx={{  backgroundColor: "#ff0000" }}> */}
                <Box sx={{my:'2',}}>
                <Box sx={{
                     my:'2',
                    width: '100%',
                    height: "auto",
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <SearchBox />
                </Box>
                <Stack sx={{mx:3}}>

                <Typography variant='h5' gutterBottom sx={{ml:1}}>Sew Again  </Typography>
                    <Grid container spacing={2} >

                        <ImageInCard />
                        <ImageInCard />
                        <ImageInCard />
                        <ImageInCard />
                        {/* <ImageInCard /> */}

                    </Grid>
                </Stack>
                <Stack sx={{m:3}}>

                <Typography variant='h5' gutterBottom sx={{ml:1}}>Sew Again  </Typography>
                    <Grid container spacing={2} >

                        <ImageInCard />
                        <ImageInCard />
                        <ImageInCard />
                        <ImageInCard />
                        {/* <ImageInCard /> */}

                    </Grid>
                </Stack>
                <Stack sx={{m:3}}>

                <Typography variant='h5' gutterBottom sx={{ml:1}}>Sew Again  </Typography>
                    <Grid container spacing={2} >

                        <ImageInCard />
                        <ImageInCard />
                        <ImageInCard />
                        <ImageInCard />
                        <ImageInCard />

                    </Grid>
                </Stack>
                </Box>
                {/* </Container> */}


            </Box>
        </>


    );
}