import { Box, Card } from "@mui/material";
import React from "react";
import "./About.css";

const Skills = () => {
  return (
    <div>
      <Box className="skills-card ">
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
