import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image%201",
  "https://via.placeholder.com/600x300/C70039/FFFFFF?text=Image%202",
  "https://via.placeholder.com/600x300/581845/FFFFFF?text=Image%203",
  "https://via.placeholder.com/600x300/900C3F/FFFFFF?text=Image%204",
  "https://via.placeholder.com/600x300/FFC300/FFFFFF?text=Image%205",
  "https://via.placeholder.com/600x300/DAF7A6/FFFFFF?text=Image%206",
  "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image%207",
  "https://via.placeholder.com/600x300/C70039/FFFFFF?text=Image%208",
  "https://via.placeholder.com/600x300/581845/FFFFFF?text=Image%209",
  "https://via.placeholder.com/600x300/900C3F/FFFFFF?text=Image%2010",
  "https://via.placeholder.com/600x300/FFC300/FFFFFF?text=Image%2011",
  "https://via.placeholder.com/600x300/DAF7A6/FFFFFF?text=Image%2012",
];

const ImageCarousel = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} >
          <Carousel
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            emulateTouch={true}
            infiniteLoop={true}
          >
            {images.map((image, index) =>
              index % 4 === 0 ? (
                <div key={index}>
                  {" "}
                  <Grid container spacing={2}>
                    {" "}
                    {images.slice(index, index + 4).map((image, innerIndex) => (
                      <Grid key={innerIndex} item xs={12} sm={6} md={3}>
                        {" "}
                        <img
                          src={image}
                          alt={`carousel-${innerIndex}`}
                          style={{ width: "100%", height: "auto" }}
                        />{" "}
                      </Grid>
                    ))}{" "}
                  </Grid>{" "}
                </div>
              ) : null
            )}
          </Carousel>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ImageCarousel;
