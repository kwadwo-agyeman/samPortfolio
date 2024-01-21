import { Box, Card } from "@mui/material";
import React from "react";
import "./About.css";

const otherStyles = {
  width: "70vw",
  height: "fit-content",
  margin: "0 auto",
  background: "rgba(225, 84, 225, 0.4)",
  backdropFilter: "8px",
  borderRadius: "10px",
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
  fontWeight: 500,
  color: "rgb(255, 255, 255, 0.7)",
  transition: "color 0.2s ease-in-out",
};

const windowWidth = window.innerWidth >= 600;
const Others = () => {
  return (
    <div>
      <Box sx={otherStyles} className="others-card">
        <div
          style={{
            borderRight: windowWidth
              ? "none"
              : "4px solid rgb(219, 7, 219, 0.3)",
          }}
          className="others--left--side"
        >
          <div className="others--heading">
            <h3>Education</h3>
          </div>
          Bsc. Civil Engineering,
          <br /> Kwame Nkrumah University Of Science and Technology
          <br />
          from: 2020 - 2023
        </div>
        <div className="others--right--side"></div>
      </Box>
    </div>
  );
};

export default Others;
