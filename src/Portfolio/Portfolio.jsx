import React, { useState } from "react";
import "./portfolio.css";
import ProjectsCard from "./ProjectsCard";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
const Portfolio = () => {
  const [videoTabClicked, setVideoTabClicked] = useState(false);
  const handleTabClick = () => {
    setVideoTabClicked((prev) => !prev);
  };
  return (
    <div className="portfolio--max--container">
      {/* <div className="portfolio--header"> PORTFOLIO </div> */}
      <div className="portfolio--container">
        <div className="main--content">
          <ProjectsCard openTab={handleTabClick}/>
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
              <div className="visuals">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/jmn4EAV0RZA?si=oJ94x2TPhqXZqCyp"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                {/* <video controls>
                  <source src={CollegeBud}/>
                </video> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
