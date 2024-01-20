import React from "react";
import Background from "./Background";
import Skills from "./Skills";
import Others from "./Others";
import { Box } from "@mui/material";
import "./About.css";

const About = () => {
  return (
    <div className="About--max--container">
      {/* <div className="about--header">
        ABOUT
      </div> */}
      <div className="About--container">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            margin: "0 auto",
          }}
        >
          <Background />
          <Skills />
        </Box>

        <Others />
      </div>
    </div>
  );
};

export default About;
