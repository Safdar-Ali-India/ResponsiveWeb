import { Box, Stack, Typography, Grid,Button,Card,CardActions,CardContent,CardMedia, Container } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Teamspc = () => {
    const navigate = useNavigate();
    const gobackhome = ()=>{
        navigate("/");
    }
    return (
        <Box >
            <Container>

            <Card>
                <Grid container>
                    <Grid item xs={12} sm={6} md={5} sx={{ backgroundColor: '#00ff0f' }}>

                        

                    </Grid>
                    <Grid item xs={12} sm={6} md={7} sx={{ display: { xs: 'none', md: 'block' }, backgroundColor: '#00ffff' }}>
                        hguyhio
                    </Grid>
                </Grid>
            </Card>
            <Stack  >
                <Typography variant='subtitle2'
                 sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
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