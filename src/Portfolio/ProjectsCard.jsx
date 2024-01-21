import React from "react";
import collegeBudImg from "../assets/collegeBudImg.png";
import UrbanCart from "../assets/UrbanCart.png"
import FwdArrow from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

const ProjectsCard = (props) => {
  return (
    <>
      {ProjectsCardArr.map((cardDetails, cardIndex) => (
        <div key={cardIndex} className="project--cards">
          <div className="left">
            <div className="project--image">
              <div className="image">
                <img
                  src={cardDetails.img}
                  alt={`ProjectImg-${cardIndex + 1}`}
                />
              </div>
            </div>
            <Box className="view--details" onClick={()=>props.openTab(cardIndex)} >
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
          </div>
        </div>
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
  },
  {
    img: UrbanCart,
    title: "Urban Cart",
    lang: " JS HTML CSS REACT MUI ",
  },
];
