import React from "react";
import Background from "./Background";
import Skills from "./Skills";
import Others from "./Others";
import { Box, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
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
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "2rem",
            margin: "0 auto",
          }}
        >
          <Background />
          <Skills />
        </Box>

        <Others />

        <Box className="contact--box" sx={{display:"flex",alignItems:"center",gap:"5rem",margin:"0 auto"}}>
          <a href="mailto:sam300kye@gmail.com">
            <EmailIcon />
          </a>

          <a>
            <GitHubIcon />
          </a>

          <a>
            <LinkedInIcon/>
          </a>
        </Box>
      </div>
    </div>
  );
};

export default About;
