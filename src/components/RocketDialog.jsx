import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Carousel from './Carousel'; 

const RocketDialog = ({ open, handleClose, image, title, description,photos }) => {
  const [value, setValue] = useState('Overview');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog open={open} onClose={handleClose} 
      maxWidth="md"
      fullWidth
      sx={{
        '& .MuiPaper-root': {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          background:"#EFEFEF"
        },
        borderRadius:"15px",
        paddingY:"2rem"
      }}
    >
      <DialogContent dividers sx={{height:"600px", overflow:"auto",}}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: -2,
            top: -1,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              display: 'none',
            },
            '& .MuiTab-root': {
              color: '#656565',
              textTransform: 'none',
              fontSize: '24px',
              fontWeight: 'normal',
              '&:hover': {
                background: "#f1f1f1",
                borderRadius: "10px",
              },
              '&.Mui-selected': {
                color: 'black',
                fontWeight: 'bold',
                backgroundColor: 'transparent',
              },
            },
          }}
        >
          <Typography sx={{mt:"10px",paddingRight:"2px"}} fontSize="24px" fontWeight="700">{title}</Typography>
          <Tab value="Overview" label="Overview" />
          <Tab value="Photos" label="Photos"  />
        </Tabs>
        {value === 'Overview' && (
          <Box sx={{ display: {md:"flex"} }}>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                height: "500px",
                width: {md:"350px"},
                borderRadius: "15px",
                backgroundSize: "cover",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <img
                src={image}
                alt={title}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </Box>
            <Box sx={{ mt: 2, ml: {md:"30px"}, p: "15px", width: {md:"655px"}, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", borderRadius: "15px" }}>
              <Typography fontSize="11px" sx={{ mt: 2, color: "GrayText" }}>
                DESCRIPTION
              </Typography>
              <Typography fontSize="12px">
                {description}
              </Typography>
            </Box>
          </Box>
        )}
        {value === 'Photos' && (
          <Box sx={{ mt: 2  }}>
            <Carousel photos={photos} />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RocketDialog;
