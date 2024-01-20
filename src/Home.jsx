import React from "react";
import "./Home.css";
import { Box, Typography } from "@mui/material";
const Home = () => {
  return (
    <div className="home--max--container">
      {/* <div className="page--header">
        HOME
      </div> */}
      <Box className="home--container">
        <Typography variant="h3" className="home--text--container">
          <span className="top--home--text">
            HEY! I'M
            <svg viewBox=" 0 0 500 50">
              <text
                x="50%"
                y="50%"
                dy=".32em"
                textAnchor="middle"
                className="colored"
              >
                SAMUEL AGYEMANG
              </text>
            </svg>
            , BUT YOU CAN JUST CALL ME <span className="colored-2">SAM</span>
          </span>

          <span className="middle--home--text">
            your <span className="paint-hover"> friendly </span>neighborhood
            <span className="paint-hover"> frontend </span>
            <span className="paint-hover"> dev </span>
            with a sneaky peek into
            <span className="paint-hover"> the backend </span> world.
          </span>

          <span className="bottom--home--text">
            When I'm not coding, I'm on a passionate quest for the perfect
            harmony in music. Let's bring some laughs and good vibes to the
            coding symphony! <span className="rocket-icon">🚀</span>
          </span>
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
