import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import background from "../../Images/background.jpg";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";

function Dashboard() {
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [previousLaunches, setPreviousLaunches] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchUpcomingLaunches = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v3/launches/upcoming"
        );
        setUpcomingLaunches(response.data);
      } catch (error) {
        console.error("Error fetching the upcoming launches:", error);
        console.error("Error details:", error.message);
      }
    };

    const fetchPreviousLaunches = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v3/launches/past"
        );
        setPreviousLaunches(response.data);
      } catch (error) {
        console.error("Error fetching the previous launches:", error);
        console.error("Error details:", error.message);
      }
    };

    setTimeout(() => {
      setShow(true);
    }, 3000);

    fetchUpcomingLaunches();
    fetchPreviousLaunches();
  }, []);

  console.log(upcomingLaunches, "data api");

  const LaunchFacilityCard = ({
    station,
    launchPad,
    location,
    temp,
    weather,
    wind,
    backgroundImage,
  }) => {
    return (
      <Box
        sx={{
          width: "350px",
          height: "90px",
          p: "14px",
          border: "1px solid black",
          borderRadius: "15px",
          background: `url(${backgroundImage}) no-repeat center `,
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography fontSize="18px">{station}</Typography>
            <Typography fontSize="12px" sx={{ color: "#ffffff80" }}>
              {launchPad}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize="12px" sx={{ color: "#ffffff80" }}>
              Region
            </Typography>
            <Typography fontSize="18px">{location}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography fontSize="12px" sx={{ color: "#ffffff80" }}>
              TEMP
            </Typography>
            <Typography fontSize="18px">{temp}</Typography>
          </Box>
          <Box>
            <Typography fontSize="12px" sx={{ color: "#ffffff80" }}>
              WEATHER
            </Typography>
            <Typography fontSize="18px">{weather}</Typography>
          </Box>
          <Box>
            <Typography fontSize="12px" sx={{ color: "#ffffff80" }}>
              WIND
            </Typography>
            <Typography fontSize="18px">{wind}</Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleString("en-US", options).replace(",", "");
  }

  return (
    <div>
      <Box
        sx={{
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          my: { md: "40px" },
          borderTopRightRadius: { md: "14px" },
          borderBottomRightRadius: { md: "14px" },
          overflow: { md: "auto" },
          width: { md: "900px", xs: "100%" },
          px: "32px",
          height: { md: "710px", xs: "100%" },
          background: "#ffffff",
          background: `url(${background}) no-repeat center  `,
          backgroundSize: { md: "120% 125%", xs: "cover" },
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: { xs: "center" },
        }}
      >
        <Box>
          <Box
            sx={{
              height: "282px",
              width: "364px",
              background: "rgba(0, 0, 0, 0.5)",
              padding: "28px",
              m: "9px",
              borderRadius: "15px",
              color: "#ffffff",
              mb: "20px",
              mt: { xs: "100px", md: "0px" },
            }}
          >
            <Typography fontSize="18px">Upcoming launches</Typography>
            <Box sx={{ display: "flex", mt: "8px" }}>
              <Box sx={{}}>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  MISSION NAME
                </Typography>
                <Typography fontSize="18px">
                  {upcomingLaunches[0]?.mission_name}
                </Typography>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  ROCKET
                </Typography>
                <Typography fontSize="18px">
                  {upcomingLaunches[0]?.rocket.rocket_name}
                </Typography>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  FLIGHT NUMBER
                </Typography>
                <Typography fontSize="18px">
                  {upcomingLaunches[0]?.flight_number}
                </Typography>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  TIME(UTC)
                </Typography>
                <Typography fontSize="18px">
                  {formatDate(upcomingLaunches[0]?.launch_date_local)}
                </Typography>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  LINKS
                </Typography>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Tooltip title="Wikipedia Unavailable">
                    <svg
                      style={{ cursor: "not-allowed" }}
                      height="25"
                      width="25"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 97.75 97.75"
                      fill="#4a4a4a"
                    >
                      <path d="M48.875,0C21.883,0,0,21.883,0,48.875S21.883,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.867,0,48.875,0z M77.691,37.503c-2.779,6.28-11.279,26.171-16.951,39.136c-0.008,0.006-1.486-0.003-1.49-0.005l-8.945-21.069 c-3.545,6.953-7.473,14.181-10.832,21.059c-0.02,0.035-1.625,0.016-1.627-0.006c-5.135-11.986-10.459-23.893-15.621-35.87 c-1.195-2.928-5.387-7.637-8.256-7.61c0-0.34-0.016-1.099-0.02-1.558l17.682-0.002l-0.014,1.531 c-2.076,0.096-5.664,1.421-4.734,3.713c2.492,5.381,11.316,26.227,13.701,31.519c1.664-3.257,6.311-11.939,8.225-15.609 c-1.5-3.078-6.457-14.57-7.943-17.464c-1.121-1.887-3.934-2.118-6.1-2.151c0-0.483,0.025-0.855,0.016-1.518l15.543,0.048v1.412 c-2.104,0.058-4.096,0.841-3.193,2.853c2.091,4.34,3.312,7.43,5.231,11.444c0.613-1.176,3.755-7.622,5.253-11.024 c0.905-2.262-0.447-3.109-4.232-3.211c0.05-0.372,0.017-1.119,0.05-1.475l13.424,0.013l0.006,1.401 c-2.467,0.096-5.021,1.41-6.354,3.45l-6.464,13.406c0.709,1.773,6.924,15.58,7.578,17.111L74.988,36.18 c-0.951-2.497-3.984-3.055-5.17-3.082c0.008-0.398,0.01-1.005,0.012-1.512l13.951,0.04l0.02,0.07l-0.023,1.394 C80.717,33.183,78.824,34.82,77.691,37.503z"></path>
                    </svg>
                  </Tooltip>
                  <Tooltip title="Youtube Unavailable">
                    <a
                      href={upcomingLaunches[0]?.links.video_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        height="25"
                        width="25"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#4a4a4a"
                        style={{ cursor: "not-allowed" }}
                      >
                        <path d="m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0"></path>
                        <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0"></path>
                      </svg>
                    </a>
                  </Tooltip>
                  <Tooltip title="Reddit ">
                    <a href={upcomingLaunches[0]?.links.reddit_campaign}>
                      <svg
                        style={{ cursor: "pointer" }}
                        height="25"
                        width="25"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                      >
                        <path d="m309.605469 343.347656c-11.46875 11.46875-36.042969 15.5625-53.554688 15.5625-17.5625 0-42.085937-4.09375-53.554687-15.5625-2.714844-2.714844-7.066406-2.714844-9.777344 0-2.714844 2.714844-2.714844 7.066406 0 9.777344 18.175781 18.175781 53.09375 19.609375 63.332031 19.609375s45.105469-1.433594 63.335938-19.609375c2.660156-2.714844 2.660156-7.066406 0-9.777344-2.714844-2.714844-7.066407-2.714844-9.78125 0zm0 0"></path>
                        <path d="m224 282.675781c0-14.695312-11.980469-26.675781-26.675781-26.675781-14.691407 0-26.675781 11.980469-26.675781 26.675781 0 14.691407 11.984374 26.675781 26.675781 26.675781 14.695312 0 26.675781-11.980468 26.675781-26.675781zm0 0"></path>
                        <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm148.53125 290.148438c.5625 3.6875.871094 7.425781.871094 11.214843 0 57.445313-66.867188 103.988281-149.351563 103.988281s-149.351562-46.542968-149.351562-103.988281c0-3.839843.308593-7.628906.871093-11.316406-13.003906-5.835937-22.066406-18.890625-22.066406-34.046875 0-20.582031 16.691406-37.324219 37.324219-37.324219 10.035156 0 19.097656 3.941407 25.804687 10.394531 25.90625-18.6875 61.75-30.621093 101.632813-31.644531 0-.511719 18.636719-89.292969 18.636719-89.292969.359375-1.738281 1.382812-3.226562 2.867187-4.195312 1.484375-.972656 3.277344-1.28125 5.019531-.921875l62.054688 13.207031c4.351562-8.804687 13.308594-14.898437 23.804688-14.898437 14.746093 0 26.675781 11.929687 26.675781 26.675781s-11.929688 26.675781-26.675781 26.675781c-14.285157 0-25.855469-11.265625-26.519532-25.394531l-55.554687-11.828125-16.996094 80.027344c39.167969 1.378906 74.34375 13.257812 99.839844 31.691406 6.707031-6.5 15.820312-10.496094 25.90625-10.496094 20.636719 0 37.324219 16.691407 37.324219 37.324219 0 15.257812-9.164063 28.3125-22.117188 34.148438zm0 0"></path>
                        <path d="m314.675781 256c-14.695312 0-26.675781 11.980469-26.675781 26.675781 0 14.691407 11.980469 26.675781 26.675781 26.675781 14.691407 0 26.675781-11.984374 26.675781-26.675781 0-14.695312-11.980468-26.675781-26.675781-26.675781zm0 0"></path>
                      </svg>
                    </a>
                  </Tooltip>
                </Box>
              </Box>
              <Box sx={{ ml: "90px" }}>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  ROCKET LOGO
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "110px",
                    width: "110px",
                    background: "rgba(51, 51, 51, 0.5)",
                    borderRadius: "15px",
                    mt: "5px",
                    padding: "10px",
                  }}
                >
                  <img
                    src={upcomingLaunches[0]?.links.mission_patch}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "inherit",
                    }}
                    alt=""
                  />
                </Box>
                <Box sx={{ mt: "24px" }}>
                  <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                    LAUNCHPAD
                  </Typography>
                  <Typography fontSize="18px">
                    {upcomingLaunches[0]?.launch_site.site_name}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "282px",
              width: "364px",
              background: "rgba(0, 0, 0, 0.5)",
              padding: "28px",
              m: "9px",
              borderRadius: "15px",
              color: "#ffffff",
              mb: "20px",
            }}
          >
            <Typography fontSize="18px">Previous launches</Typography>
            <Box sx={{ display: "flex", mt: "8px" }}>
              <Box sx={{}}>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  MISSION NAME
                </Typography>
                <Typography fontSize="18px">
                  {previousLaunches[0]?.mission_name}
                </Typography>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  ROCKET
                </Typography>
                <Typography fontSize="18px">
                  {previousLaunches[0]?.rocket.rocket_name}
                </Typography>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  FLIGHT NUMBER
                </Typography>
                <Typography fontSize="18px">
                  {previousLaunches[0]?.flight_number}
                </Typography>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  TIME(UTC)
                </Typography>
                <Typography fontSize="18px">
                  {formatDate(previousLaunches[0]?.launch_date_local)}
                </Typography>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  LINKS
                </Typography>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Tooltip title="Wikipedia ">
                    <a
                      href={previousLaunches[0]?.links?.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        style={{ cursor: "pointer" }}
                        height="25"
                        width="25"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 97.75 97.75"
                        fill="#fff"
                      >
                        <path d="M48.875,0C21.883,0,0,21.883,0,48.875S21.883,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.867,0,48.875,0z M77.691,37.503c-2.779,6.28-11.279,26.171-16.951,39.136c-0.008,0.006-1.486-0.003-1.49-0.005l-8.945-21.069 c-3.545,6.953-7.473,14.181-10.832,21.059c-0.02,0.035-1.625,0.016-1.627-0.006c-5.135-11.986-10.459-23.893-15.621-35.87 c-1.195-2.928-5.387-7.637-8.256-7.61c0-0.34-0.016-1.099-0.02-1.558l17.682-0.002l-0.014,1.531 c-2.076,0.096-5.664,1.421-4.734,3.713c2.492,5.381,11.316,26.227,13.701,31.519c1.664-3.257,6.311-11.939,8.225-15.609 c-1.5-3.078-6.457-14.57-7.943-17.464c-1.121-1.887-3.934-2.118-6.1-2.151c0-0.483,0.025-0.855,0.016-1.518l15.543,0.048v1.412 c-2.104,0.058-4.096,0.841-3.193,2.853c2.091,4.34,3.312,7.43,5.231,11.444c0.613-1.176,3.755-7.622,5.253-11.024 c0.905-2.262-0.447-3.109-4.232-3.211c0.05-0.372,0.017-1.119,0.05-1.475l13.424,0.013l0.006,1.401 c-2.467,0.096-5.021,1.41-6.354,3.45l-6.464,13.406c0.709,1.773,6.924,15.58,7.578,17.111L74.988,36.18 c-0.951-2.497-3.984-3.055-5.17-3.082c0.008-0.398,0.01-1.005,0.012-1.512l13.951,0.04l0.02,0.07l-0.023,1.394 C80.717,33.183,78.824,34.82,77.691,37.503z"></path>
                      </svg>
                    </a>
                  </Tooltip>
                  <Tooltip title="Youtube">
                    <a
                      href={previousLaunches[0]?.links?.video_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        height="25"
                        width="25"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        style={{ cursor: "pointer" }}
                      >
                        <path d="m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0"></path>
                        <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0"></path>
                      </svg>
                    </a>
                  </Tooltip>
                  <Tooltip title="Reddit Unavailable">
                    <svg
                      style={{ cursor: "not-allowed" }}
                      height="25"
                      width="25"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#4a4a4a"
                    >
                      <path d="m309.605469 343.347656c-11.46875 11.46875-36.042969 15.5625-53.554688 15.5625-17.5625 0-42.085937-4.09375-53.554687-15.5625-2.714844-2.714844-7.066406-2.714844-9.777344 0-2.714844 2.714844-2.714844 7.066406 0 9.777344 18.175781 18.175781 53.09375 19.609375 63.332031 19.609375s45.105469-1.433594 63.335938-19.609375c2.660156-2.714844 2.660156-7.066406 0-9.777344-2.714844-2.714844-7.066407-2.714844-9.78125 0zm0 0"></path>
                      <path d="m224 282.675781c0-14.695312-11.980469-26.675781-26.675781-26.675781-14.691407 0-26.675781 11.980469-26.675781 26.675781 0 14.691407 11.984374 26.675781 26.675781 26.675781 14.695312 0 26.675781-11.980468 26.675781-26.675781zm0 0"></path>
                      <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm148.53125 290.148438c.5625 3.6875.871094 7.425781.871094 11.214843 0 57.445313-66.867188 103.988281-149.351563 103.988281s-149.351562-46.542968-149.351562-103.988281c0-3.839843.308593-7.628906.871093-11.316406-13.003906-5.835937-22.066406-18.890625-22.066406-34.046875 0-20.582031 16.691406-37.324219 37.324219-37.324219 10.035156 0 19.097656 3.941407 25.804687 10.394531 25.90625-18.6875 61.75-30.621093 101.632813-31.644531 0-.511719 18.636719-89.292969 18.636719-89.292969.359375-1.738281 1.382812-3.226562 2.867187-4.195312 1.484375-.972656 3.277344-1.28125 5.019531-.921875l62.054688 13.207031c4.351562-8.804687 13.308594-14.898437 23.804688-14.898437 14.746093 0 26.675781 11.929687 26.675781 26.675781s-11.929688 26.675781-26.675781 26.675781c-14.285157 0-25.855469-11.265625-26.519532-25.394531l-55.554687-11.828125-16.996094 80.027344c39.167969 1.378906 74.34375 13.257812 99.839844 31.691406 6.707031-6.5 15.820312-10.496094 25.90625-10.496094 20.636719 0 37.324219 16.691407 37.324219 37.324219 0 15.257812-9.164063 28.3125-22.117188 34.148438zm0 0"></path>
                      <path d="m314.675781 256c-14.695312 0-26.675781 11.980469-26.675781 26.675781 0 14.691407 11.980469 26.675781 26.675781 26.675781 14.691407 0 26.675781-11.984374 26.675781-26.675781 0-14.695312-11.980468-26.675781-26.675781-26.675781zm0 0"></path>
                    </svg>
                  </Tooltip>
                </Box>
              </Box>
              <Box sx={{ ml: "90px" }}>
                <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                  MISSION PATCH
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "110px",
                    width: "110px",
                    background: "rgba(51, 51, 51, 0.5)",
                    borderRadius: "15px",
                    mt: "5px",
                    padding: "10px",
                  }}
                >
                  <img
                    src={previousLaunches[0]?.links.mission_patch}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "inherit",
                    }}
                  />
                </Box>
                <Box sx={{ mt: "24px" }}>
                  <Typography fontSize="11px" sx={{ color: "#ffffff80" }}>
                    CREW
                  </Typography>
                  <PersonIcon />
                  <PersonIcon />
                  <PersonIcon />
                  <PersonIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              height: "282px",
              width: "364px",
              background: "rgba(0, 0, 0, 0.5)",
              padding: "28px",
              m: "9px",
              borderRadius: "15px",
              color: "#ffffff",
              mb: "20px",
              overflow: "auto",
              marginTop: { md: "0", xs: "0" },
            }}
          >
            <Typography fontSize="18px">Launch facilities</Typography>
            <Box sx={{ mb: "15px", mt: "5px" }}>
              <LaunchFacilityCard
                station="Cape Canaveral"
                launchPad="LC-39A & SLC-40"
                location="Florida"
                temp="25°C"
                weather="Clear"
                wind="2 m/s"
                backgroundImage="../../Images/Cards/Card1.jpg"
              />
            </Box>
            <Box sx={{ mb: "15px" }}>
              <LaunchFacilityCard
                station="Starbase Boca Chica"
                launchPad="Starship Launch Facility"
                location="Texas"
                temp="28°C"
                weather="Clear"
                wind="7 m/s"
                backgroundImage="../../Images/Cards/Card2.jpg"
              />
            </Box>
            <Box sx={{}}>
              <LaunchFacilityCard
                station="Vandenerg Base"
                launchPad="USSF SLC-4E"
                location="California"
                temp="12°C"
                weather="Mist"
                wind="3 m/s"
                backgroundImage="../../Images/Cards/Card3.jpg"
              />
            </Box>
          </Box>

          <Box
            sx={{
              height: "282px",
              width: "364px",
              background: "rgba(0, 0, 0, 0.5)",
              padding: "28px",
              m: "9px",
              borderRadius: "15px",
              color: "#ffffff",
            }}
          >
            <Typography fontSize="18px">Starlink</Typography>
            <Box
              sx={{
                display: "flex",
                height: "80%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <svg
                className="interactive-icon"
                width="150"
                height="150"
                viewBox="0 0 714 714"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M180.612 492.891L219.292 465.505L208.912 450.846L170.233 478.232C162.847 474.835 154.1 476.822 148.907 483.077C143.715 489.332 143.37 498.295 148.067 504.93C152.765 511.564 161.334 514.218 168.959 511.397C176.584 508.576 181.364 500.986 180.612 492.891V492.891Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M485.25 530.297L500.82 552.287C503.686 556.335 509.291 557.293 513.339 554.427L535.328 538.858L514.57 509.539L485.251 530.298L485.25 530.297Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M311.262 191.307L290.504 161.988L319.823 141.23L340.581 170.549L311.262 191.307Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M342.4 235.286L321.641 205.967L350.961 185.208L371.719 214.527L342.4 235.286Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M549.988 528.479L529.229 499.16L558.548 478.401L579.307 507.72L549.988 528.479Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M325.334 71.3024L303.345 86.8714L324.103 116.19L353.423 95.4318L337.854 73.4425C334.987 69.394 329.382 68.4365 325.334 71.3024V71.3024Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M267.284 222.445L246.525 193.126L275.844 172.368L296.603 201.687L267.284 222.445Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M531.691 409.382L510.932 380.063L540.251 359.305L561.01 388.624L531.691 409.382Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M487.711 440.521L466.953 411.202L496.272 390.443L517.03 419.762L487.711 440.521Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M443.733 471.659L422.974 442.34L452.293 421.581L473.052 450.9L443.733 471.659Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M569.199 275.853L593.517 268.485C596.28 267.646 598.471 265.531 599.406 262.8C600.342 260.068 599.908 257.054 598.238 254.698L533.626 163.442C531.959 161.086 529.26 159.674 526.373 159.649C523.486 159.624 520.763 160.988 519.055 163.315L504.026 183.805L569.199 275.853Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M518.849 484.499L498.091 455.18L527.41 434.422L548.168 463.741L518.849 484.499Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M562.829 453.361L542.07 424.042L571.389 403.283L592.148 432.602L562.829 453.361Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M474.871 515.637L454.112 486.318L483.431 465.56L504.19 494.879L474.871 515.637Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M298.421 266.424L277.663 237.105L306.982 216.346L327.741 245.665L298.421 266.424Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M355.241 160.169L334.483 130.85L363.802 110.091L384.56 139.41L355.241 160.169Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M280.124 147.329L259.366 118.01L288.685 97.2512L309.443 126.57L280.124 147.329Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M618.097 469.252L602.528 447.263L573.208 468.021L593.967 497.34L615.956 481.771C620.004 478.905 620.962 473.3 618.097 469.252V469.252Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M386.379 204.148L365.621 174.829L394.94 154.07L415.698 183.389L386.379 204.148Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M222.717 143.958C218.669 146.824 217.711 152.43 220.577 156.478L236.146 178.467L265.465 157.708L244.706 128.389L222.717 143.958Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M455.397 177.291L279.482 301.843C271.386 307.575 269.47 318.785 275.202 326.882L358.237 444.159C363.969 452.255 375.18 454.171 383.276 448.439L559.191 323.887C567.287 318.154 569.204 306.944 563.471 298.848L480.436 181.571C474.704 173.474 463.494 171.558 455.397 177.291ZM481.346 213.939L533.242 287.237C541.84 299.381 538.966 316.197 526.822 324.795L402.215 413.02C390.071 421.618 373.255 418.744 364.657 406.6L312.76 333.301C304.162 321.157 307.036 304.341 319.18 295.743L443.787 207.518C455.932 198.92 472.747 201.795 481.346 213.939V213.939Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M302.06 395.899C275.129 357.374 224.655 343.368 181.724 362.507C179.269 363.624 177.438 365.775 176.728 368.377C176.018 370.979 176.503 373.761 178.05 375.97L279.563 519.548C281.13 521.747 283.594 523.133 286.286 523.329C288.979 523.525 291.619 522.511 293.486 520.562C325.87 486.441 329.467 434.133 302.06 395.899Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <rect
                  x="385.276"
                  y="402.561"
                  width="107.77"
                  height="170.64"
                  rx="14"
                  transform="rotate(-125.3 385.276 402.561)"
                  fill="rgba(255,255,255,0.4)"
                ></rect>
                <path
                  className="blinking-light"
                  d="M434.234 323.492C426.18 329.194 415.028 327.288 409.325 319.234V319.234C403.623 311.18 405.529 300.028 413.583 294.325V294.325C421.637 288.623 432.789 290.529 438.492 298.583V298.583C444.194 306.637 442.288 317.789 434.234 323.492V323.492Z"
                  fill="#ff1d0d"
                ></path>
              </svg>
              <Typography fontSize="16px">
                There are currently 3268 active Starlink satellites on the low
                Earth orbit.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
