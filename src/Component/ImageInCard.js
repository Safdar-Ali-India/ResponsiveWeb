
import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack'
import KeepMountedModal from '../Component/Model1'


const ImageInCard = (props) => {
    console.log("props", props.itemData);
    const [open, setOpen] = React.useState(false);
    const [value1, setvalue1] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const sendPicdata = (val) => {
        setvalue1(val)
        //    return  open && <KeepMountedModal val={val} setOpen={setOpen} open={open} handleOpen={handleOpen}  handleClose={handleClose} />
    }

    return (
        <>

            {props.itemData.map((val, id) => (


                <>



                    <Grid item xs={6} sm={4} md={2.4} onClick={handleOpen}>

                        <Box sx={{
                            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.08), 0px 1px 3px rgba(0, 0, 0, 0.1)", my: 1, mx: '4px', display: 'flex',
                            borderRadius: '8px', flexDirection: 'column'
                        }}>
                            {/* <Stack   > */}
                            <Box sx={{
                                backgroundImage: `url(${val.img})`,
                                height: '160px',
                                width: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                aspectRatio: '1/1'
                            }}
                                onClick={() => sendPicdata(val)}
                            />

                            {/* </Stack> */}
                            <Typography variant='subtitle1' gutterBottom sx={{
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '19px',
                                textAlign: 'left',
                                color: '#FFFFFF',
                                mt:"7px",
                            }}>{val.title}</Typography>

                        </Box>
                    </Grid>

                </>

            ))}
            {open && <KeepMountedModal val={value1} setOpen={setOpen} open={open} handleOpen={handleOpen} handleClose={handleClose} />}

        </>



    )
}

export default ImageInCard



// const itemData = [
//     {
//         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//         title: 'Breakfast',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//         title: 'Burger',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//         title: 'Camera',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//         title: 'Coffee',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//         title: 'Coffee',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//         title: 'Coffee',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//         title: 'Coffee',
//     },


// ];