import React from "react";
import collegeBudImg from "../assets/collegeBudImg.png";
import FwdArrow from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";
const ProjectsCard = (props) => {
  return (
    <div className="project--cards">
      <div className="left">
        <div className="project--image">
          <div className="image">
            <img src={collegeBudImg} alt="Project-Img" />
          </div>
        </div>
        <Box className="view--details" onClick={props.openTab}>
          <h4 style={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
            View Details
            <span className="fwd--arrow">
              <FwdArrow />
            </span>
          </h4>
        </Box>
      </div>
      <div className="project--details">
        <p>Title : <span>College Buddy</span></p>
        <p>Languages/Tools: <span>JS HTML CSS REACT MUI NODE.JS MONGO-DB EXPRESS.JS </span></p>
      </div>
    </div>
  );
};

export default ProjectsCard;
