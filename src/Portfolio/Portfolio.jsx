import React, { useState } from "react";
import "./portfolio.css";
import ProjectsCard from "./ProjectsCard";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
const Portfolio = () => {
  const [videoTabClicked, setVideoTabClicked] = useState(false);
  const videoDetailsArr = [
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/jmn4EAV0RZA?si=oJ94x2TPhqXZqCyp"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>,
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/ZNjoTQBuFOw?si=9mR9t1_m7x0cio0M"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>,
  ];
  const [videoIndex, setVideoIndex] = useState(0);
  const handleViewDetails = (Index) => {
    setVideoIndex(Index);
    setVideoTabClicked(true)
  };
  const handleTabClick = () => {
    setVideoTabClicked((prev) => !prev);
  };

  return (
    <div className="portfolio--max--container">
      {/* <div className="portfolio--header"> PORTFOLIO </div> */}
      <div className="portfolio--container">
        <div className="main--content">
          <ProjectsCard openTab={handleViewDetails} />
        </div>
        <div
          className="video--tab"
          style={{ width: videoTabClicked ? "60vw" : "3vw" }}
        >
          {/** TAB **/}
          <div className="tab--container">
            <div className="tab" onClick={handleTabClick}>
              <ArrowBack
                className="tab--arrow"
                sx={{
                  transform: videoTabClicked ? "rotate(180deg)" : "",
                  transition: "transform 300ms ease-in-out",
                }}
              />
            </div>
          </div>
          {/*** VIDEO */}
          <div
            className="video--board"
            style={{
              visibility: videoTabClicked ? "visible" : "hidden",
              opacity: videoTabClicked ? 1 : 0,
            }}
          >
            <div className="video--board--content">
              <div className="visuals">{videoDetailsArr[videoIndex]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
