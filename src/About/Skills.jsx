import { Box, Card } from "@mui/material";
import React from "react";
import "./About.css";

const bgAndSkillsStyles = {
  width: {xs:"70vw",sm:"35vw"},
  height: "fit-content",
  background: "rgb(128, 0, 128, 0.4)",
  backdropFilter:" 8px",
  borderRadius: "10px",
  fontWeight:" 500",
  color: "rgb(255, 255, 255, 0.7)",
  transition: "color 0.2s ease-in-out",

}


const Skills = () => {
  return (
    <div>
      <Box sx={bgAndSkillsStyles} className="skills-card ">
        <div className="heading--skills">
          <h3>Skills</h3>
          <div className="underline"></div>
        </div>

        <div className="skills--max--container">
          <div className="skills--container">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>

          <div className="skills--container">
            <p>Material UI</p>
            <p>MongoDB</p>
            <p>Express JS</p>
            <p>Node js</p>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Skills;
