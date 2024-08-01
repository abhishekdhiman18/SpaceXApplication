import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import background from "../../Images/background.jpg";
import Falcon9 from "../../Images/Rocket/Falcon9.jpg";
import Starship from "../../Images/Rocket/Starship.jpg";
import FalconHeavy from "../../Images/Rocket/FalconHeavy.jpg";
import RocketDialog from './RocketDialog';
import image1 from '../../Images/Rocket/Falcon9Carousel/image1.jpeg';
import image2 from '../../Images/Rocket/Falcon9Carousel/image2.jpeg';
import image3 from '../../Images/Rocket/Falcon9Carousel/image3.jpeg';
import image4 from '../../Images/Rocket/Falcon9Carousel/image4.jpeg';
import image5 from '../../Images/Rocket/Falcon9Carousel/image5.jpeg';
import image6 from '../../Images/Rocket/Falcon9Carousel/image6.jpeg';
import image7 from '../../Images/Rocket/StarshipCarousel/image7.jpg';
import image8 from '../../Images/Rocket/StarshipCarousel/image8.jpg';
import image9 from '../../Images/Rocket/StarshipCarousel/image9.jpg';
import image10 from '../../Images/Rocket/StarshipCarousel/image10.jpg';
import image11 from '../../Images/Rocket/FalconHeavyCarousel/image11.jpg';
import image12 from '../../Images/Rocket/FalconHeavyCarousel/image12.jpg';
import image13 from '../../Images/Rocket/FalconHeavyCarousel/image13.jpg';
import image14 from '../../Images/Rocket/FalconHeavyCarousel/image14.jpg';

const RocketBox = ({ image, handleClickOpen, title }) => (
  <Box sx={{ ml: { md: "20px", xs: "0" }, mb: { xs: "20px" } }}>
    <Typography>{title}</Typography>
    <Box
      sx={{
        height: "355px",
        width: {md:"230px"},
        borderRadius: "15px",
        backgroundSize: "cover",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onClick={handleClickOpen}
    >
      <img
        src={image}
        alt={title}
        className="rocket-image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.3s ease",
        }}
      />
    </Box>
  </Box>
);

function Rockets() {
  const [openDialog, setOpenDialog] = useState(null);
  // const isMobile = useMediaQuery('(max-width:600px)');

  const handleClickOpen = (rocket) => {
    setOpenDialog(rocket);
  };

  const handleClose = () => {
    setOpenDialog(null);
  };

  const rockets = [
    { 
      image: Falcon9, 
      title: "Falcon 9", 
      description: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
      photos: [image1, image2, image3, image4, image5, image6] 
    },
    { 
      image: Starship, 
      title: "Falcon Heavy", 
      description: "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
      photos: [image7, image8, image9, image10] 
    },
    { 
      image: FalconHeavy, 
      title: "Starship", 
      description: "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.",
      photos: [image11, image12, image13, image14] 
    }
  ];

  return (
    <div>
      <Box
        sx={{
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          my: {md:"40px"},
          borderTopRightRadius: {md:"14px"},
          borderBottomRightRadius: {md:"14px"},
          overflow: {md:"auto"},
          width: { md: "900px", xs: "100%" },
          px: "32px",
          height: { md: "710px", xs: "100%" },
          background: "#ffffff",
          background: `url(${background}) no-repeat center  `,
          backgroundSize: {md:"120% 125%",xs:"cover"},
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          
        }}
      >
        <Box
          sx={{
            height: { md: "413px" , },
            width: { md: "788px", },
            background: "rgba(0, 0, 0, 0.5)",
            padding: {md:"16px",xs:"50px"},
            mx: {md:"auto"},
            mt:{xs:"100px",md:"0px"},
            borderRadius: "15px",
            color: "#ffffff",
            mb: "20px",
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            alignItems:{xs:"center",md:"none"}
          }}
        >

          {rockets.map((rocket, index) => (
            <RocketBox
              key={index}
              image={rocket.image}
              title={rocket.title}
              handleClickOpen={() => handleClickOpen(rocket)}
            />
          ))}
        </Box>
      </Box>
      {openDialog && (
        <RocketDialog
          open={Boolean(openDialog)}
          handleClose={handleClose}
          image={openDialog.image}
          title={openDialog.title}
          description={openDialog.description}
          photos={openDialog.photos}
        />
      )}
    </div>
  );
}

export default Rockets;
