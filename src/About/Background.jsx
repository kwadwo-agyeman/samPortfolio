import { Box, Card } from "@mui/material";
import React from "react";
import "./About.css";

const Background = () => {
  return (
    <div>
      <Box className="bg-card">
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
