import React, { useState } from "react";
import "./portfolio.css";
import ProjectsCard from "./ProjectsCard";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
import { Box, styled } from "@mui/material";
const Portfolio = () => {
  const [videoTabClicked, setVideoTabClicked] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const videoDetailsArr = [
    {
      video: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jmn4EAV0RZA?si=oJ94x2TPhqXZqCyp"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ),
      title: "College Buddy",
      description:
        "College Buddy is a college application assistance website, that solves the problem of most highschoolers inability to add images of their activities directly on majority of college application websites or tools. With this tool, highschool students have the opportunity to combine text and visuals to properly communicate the activities they did in highschool;also, students have a lot of character range to add an essay of each activity they did.",
    },
    {
      video: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZNjoTQBuFOw?si=9mR9t1_m7x0cio0M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ),
      title: "Urban Cart",
      description:
        " Urban Cart is a clothing Ecommerce store where all genders (kids inclusive) can get fashionable clothing that match their style. The webstore is sectioned properply to facilitate easy navigation of users on the platform: 'No Stress to Shop'.",
    },
  ];

  const handleViewDetails = (Index) => {
    setVideoIndex(Index);
    setVideoTabClicked(true);
  };
  const handleTabClick = () => {
    setVideoTabClicked((prev) => !prev);
  };

  // const TabsBox = styled(Box)(({theme})=>({
  //   position: "absolute",
  //   top: "50%",
  //   transform: "translateY(-50%)",
  //   right: 0,
  //   zIndex: 227,
  //   height: "87%",
  //   width: "3vw",
  //   backgroundColor: "rgb(138, 43, 226, 0.5)",
  //   borderTopLeftRadius: "10px",
  //   borderBottomLeftRadius: "10px",
  //   padding: "4px 10px",
  //   display: "flex",
  //   gridTemplateRows: "30% 70%",
  //   gap: "1rem",
  //   transition: "width 500ms ease-in-out",
  //   border: "2px solid rgb(255, 255, 255, 0.9)",
  //   paddingBottom: "12px",

  // }))

  return (
    <div className="portfolio--max--container">
      {/* <div className="portfolio--header"> PORTFOLIO </div> */}
      <div className="portfolio--container">
        <div className="main--content">
          <ProjectsCard openTab={handleViewDetails} />
        </div>
        <Box
          className={`video--tab ${videoTabClicked ? "expand" : "collapse"}`}
          // sx={{ width: videoTabClicked ? "60vw" : "3vw" }}
        >
          <div
            className={`close--btn ${videoTabClicked ? "visible" : "hidden"}`}
            onClick={handleTabClick}
          >
            {videoTabClicked ? "close" : "open"}
          </div>
          {/** TAB **/}
          <Box className="tab--container">
            <div className="tab" onClick={handleTabClick}>
              <ArrowBack
                className="tab--arrow"
                sx={{
                  transform: videoTabClicked ? "rotate(180deg)" : "",
                  transition: "transform 300ms ease-in-out",
                }}
              />
            </div>
          </Box>
          {/*** VIDEO */}
          <div
            className="video--board"
            style={{
              visibility: videoTabClicked ? "visible" : "hidden",
              opacity: videoTabClicked ? 1 : 0,
            }}
          >
            <div className="video--board--content">
              <div className="visuals">{videoDetailsArr[videoIndex].video}</div>
              <div className="text">
                <h3 style={{ fontWeight: 700, fontSize: "1.5rem" }}>
                  {videoDetailsArr[videoIndex].title}
                </h3>
                <p style={{ fontWeight: 600, fontSize: "18px" }}>
                  {videoDetailsArr[videoIndex].description}
                </p>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Portfolio;
