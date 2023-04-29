// import React from 'react'
import Header from "../Component/Header";
import img from "../asset/titleimage@2x.png";
import * as React from "react";
import ImageInCard from "../Component/ImageInCard";
import SearchBox from "../Component/SearchBox";
import Imageee from "../asset/final-lucky-dodo-var01@2x.png";
import image1 from "../asset/unsplashwh8lh2qzzs@2x.png";
import BackGroundImg from "../Component/BackGroundImg";
import PopUp from "../Component/PopUp";
import { useMediaQuery } from "@mui/material";
import {
  Grid,
  Box,
  Paper,
  Typography,
  RadioGroup,
  Container,
  FormLabel,
  Stack,
  styled,
  FormControl,
  Radio,
  FormControlLabel,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const StyledPaper = styled(Paper)({
  backgroundImage: 'url("../asset/group-16865520576@2x.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh", // set a minimum height to make sure the image covers the entire background
});

export default function LuckyHome() {
    const isMobile = useMediaQuery("(max-width: 600px)");
  const [spacing, setSpacing] = React.useState(2);
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  const jsx = `<Grid container spacing={${spacing}}>`;

  // ======popup=============

  const [open, setOpen] = React.useState(false);
  const [callpopup, setcallpopup] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClick = () => {
    console.log("888888888888");
    setcallpopup(!callpopup);
  };

  // ===========end popup=======

  return (
    <>
      <Box>
        <Header />
        <Box
          sx={{
            width: "100%",
            height: "150px",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Paper
            sx={{
              backgroundImage: `url(${image1})`,
              height: "160px",
              width: "100%",

              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              aspectRatio: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "40px",
                lineHeight: "110%",
              }}
              gutterBotto
            >
              Events & Things in New York
            </Typography>
          </Paper>
        </Box>
        {/* <Container sx={{  backgroundColor: "#ff0000" }}> */}
        <Box sx={{ my: "2", backgroundColor: "#1B2330" }}>
          <Box
            sx={{
              py: 3,
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SearchBox />
          </Box>

          <Stack sx={{ mx: 3, }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{display:'flex',justifyContent:'left',alignItems:'left',flexDirection:'row',
                ml: 1,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "32px",
                color: "#FFFFFF",
              }}
              onClick={handleClick}
            >
              See Again
              <ArrowForwardIosIcon sx={{mt:"5px"}} />
            </Typography>
            <Grid container spacing={1}>
              <ImageInCard itemData={itemData1} />
              {/* <ImageInCard itemData={itemData}/>
              <ImageInCard itemData={itemData}/>
              <ImageInCard itemData={itemData}/> */}
            </Grid>
          </Stack>

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
              onClick={handleClick}
            >
             Top 10 in your country
              <ArrowForwardIosIcon />
            </Typography>
            <Grid container spacing={2}>
              <ImageInCard itemData={itemData2}/>
              {/* <ImageInCard itemData={itemData}/>
              <ImageInCard itemData={itemData}/>
              <ImageInCard itemData={itemData}/> */}
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
               Trending now
              <ArrowForwardIosIcon />
            </Typography>
            <Grid container spacing={2}>
              <ImageInCard itemData={itemData3}/>
              {/* <ImageInCard itemData={itemData}/>
              <ImageInCard itemData={itemData}/>
              <ImageInCard itemData={itemData}/> */}
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
             Sci-fi shows
              <ArrowForwardIosIcon sx={{ pt: "-6" }} />
            </Typography>
            <Grid container spacing={2}>
              <ImageInCard itemData={itemData4}/>
              {/* <ImageInCard itemData={itemData}/>
              <ImageInCard itemData={itemData}/>
              <ImageInCard itemData={itemData}/>
              <ImageInCard itemData={itemData}/> */}
            </Grid>
          </Stack>
        </Box>
        <Box>
      {isMobile ? (
        <Box>Mobile content</Box>
      ) :  callpopup && <PopUp data={callpopup} setcallpopup={setcallpopup} />
      }
    </Box>
        {/* {callpopup && <PopUp data={callpopup} setcallpopup={setcallpopup} />} */}
        {/* </Container> */}

      </Box>
    </>
  );
}




const itemData = [
  {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  }];
  const itemData1 = [
    {
      img: '/image44@2x.png',
        title: 'Breakfast',
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: '/image45@2x.png',
        title: 'Burger',
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: '/image46@2x.png',
        title: 'Camera',
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: '/image47@2x.png',
        title: 'Coffee',
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }];
    const itemData2 = [
      {
        img: '/11.svg',
        img: '/image43@2x.png',
          title: 'Breakfast',
          body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        img: '/21.svg',
          img: '/image42@2x.png',
          title: 'Burger',
          body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        img: '/31.svg',
          img: '/image41@2x.png',
          title: 'Camera',
          body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
          img: '/41.svg',
          img: '/image40@2x.png',
          title: 'Coffee',
          body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      }];
      const itemData3 = [
        {
            img: '/image34@2x.png',
            title: 'Breakfast',
            body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            img: '/image37@2x.png',
            title: 'Burger',
            body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            img: '/image35@2x.png',
            title: 'Camera',
            body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            img: '/image38@2x.png',
            title: 'Coffee',
            body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
];
      const itemData4 = [
        {
            img: '/image48@2x.png',
            title: 'Breakfast',
            body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            img: '/image47@2x.png',
            title: 'Burger',
            body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            img: '/image51@2x.png',
            title: 'Camera',
            body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            img: '/image50@2x.png',
            title: 'Coffee',
            body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
];