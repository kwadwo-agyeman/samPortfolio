import { Box, Card } from "@mui/material";
import React from "react";
import "./About.css";

const Others = () => {
  return (
    <div>
      <Box className="others-card">
        <div className="others--left--side">
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
