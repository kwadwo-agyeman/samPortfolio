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

const Background = () => {
  return (
    <div>
      <Box sx={bgAndSkillsStyles} className="bg-card">
        <div className="bg-text">
          Born in 2002 in Kumasi,Ghana.
          <span>
            I am a self-taught frontend dev who knows some backend: Node js
            and Express.js. <br />I am continuosly learning to be highly
            proficient in both fields: front and back.
          </span>
          <span>
            Have a strong interest for experimentation: "the best comes from
            trial and error". Great team member, open and fun to interact with.
          </span>
          <span>
            I have a keen passion for music, if I am not coding , I am 
            listening to music and relaxing.
          </span>
        </div>
      </Box>
    </div>
  );
};

export default Background;
