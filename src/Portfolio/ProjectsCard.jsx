import React from "react";
import collegeBudImg from "../assets/collegeBudImg.png";
import UrbanCart from "../assets/UrbanCart.png";
import FwdArrow from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Tooltip } from "@mui/material";
import "./portfolio.css";

const ProjectsCard = (props) => {
  return (
    <>
      {ProjectsCardArr.map((cardDetails, cardIndex) => (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "38% 55%" },
            width: { xs: "70vw", sm: "50vw" },
          }}
          key={cardIndex}
          className="project--cards"
        >
          <div className="left">
            <div className="project--image">
              <div className="image">
                <img
                  src={cardDetails.img}
                  alt={`ProjectImg-${cardIndex + 1}`}
                />
              </div>
            </div>
            <Box
              className="view--details"
              onClick={() => props.openTab(cardIndex)}
            >
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                View Details
                <span className="fwd--arrow">
                  <FwdArrow />
                </span>
              </h4>
            </Box>
          </div>
          <div className="project--details">
            <p>
              Title : <span>{cardDetails.title}</span>
            </p>
            <p>
              Languages/Tools:
              <span>{cardDetails.lang}</span>
            </p>
            <p style={{ cursor: "pointer" }}>
              <Tooltip title="Github Repo">
                <a target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"white"}} href= {cardDetails.link}>
                  <GitHubIcon />
                </a>
              </Tooltip>
            </p>
          </div>
        </Box>
      ))}
    </>
  );
};

export default ProjectsCard;

const ProjectsCardArr = [
  {
    img: collegeBudImg,
    title: "College Buddy",
    lang: " JS HTML CSS REACT MUI NODE.JS MONGO-DB EXPRESS.JS",
    link:"https://github.com/kwadwo-agyeman/COLLEGEBUD"
  },
  {
    img: UrbanCart,
    title: "Urban Cart",
    lang: " JS HTML CSS REACT MUI ",
    link:"https://github.com/kwadwo-agyeman/Ecommerce"
  },
];
