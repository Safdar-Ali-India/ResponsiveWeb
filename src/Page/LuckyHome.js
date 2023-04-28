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
  const handleCliak = () => {
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
              onClick={handleCliak}
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
              onClick={handleCliak}
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
          </Stack>
        </Box>
        {/* </Container> */}

        {callpopup && <PopUp data={callpopup} setcallpopup={setcallpopup} />}
      </Box>
    </>
  );
}
