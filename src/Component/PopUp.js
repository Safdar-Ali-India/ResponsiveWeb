import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
  Typography,
  Box
} from '@mui/material';

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import ImageInCard from './ImageInCard';

export default function PopUp(props) {


console.log("prop.pupup",props);





  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    props.setcallpopup(false)
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if(props.data===true){
        console.log(8999989898);
        setOpen(true);
    }
    // if(props.data!==true){
    //     setOpen(false);
    // }
    
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open,props]);




  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
         
        <Box sx={{ my: "2", backgroundColor: "#1B2330" }}>
          

          <Stack sx={{ mx: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                ml: 1,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "32px",
                color: "#FFFFFF",
              }}
              // onClick={handleClick}
            >
              Sew Again
              <ArrowForwardIosIcon sx={{mt:'5px'}}/>
            </Typography>
            <Grid container spacing={1}>
              <ImageInCard itemData={props.itemData} />
              
            </Grid>
          </Stack>

          {/* <Stack sx={{ mx: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                ml: 1,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "32px",
                color: "#FFFFFF",
              }}
              // onClick={handleClick}
            >
              Top 10 in your country
              <ArrowForwardIosIcon />
            </Typography>
            <Grid container spacing={2}>
              <ImageInCard />
              <ImageInCard />
              <ImageInCard />
              <ImageInCard />
            </Grid>
          </Stack>

          <Stack sx={{ m: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                ml: 1,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "32px",
                color: "#FFFFFF",
              }}
            >
              Sew Again
              <ArrowForwardIosIcon />
            </Typography>
            <Grid container spacing={2}>
              <ImageInCard />
              <ImageInCard />
              <ImageInCard />
              <ImageInCard />
            </Grid>
          </Stack>

          <Stack sx={{ m: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                ml: 1,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "32px",
                color: "#FFFFFF",
              }}
            >
              Sew Again
              <ArrowForwardIosIcon sx={{ pt: "-6" }} />
            </Typography>
            <Grid container spacing={2}>
              <ImageInCard />
              <ImageInCard />
              <ImageInCard />
              <ImageInCard />
              <ImageInCard />
            </Grid>
          </Stack> */}
        </Box>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}