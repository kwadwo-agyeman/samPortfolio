import React from "react";
import About from "@mui/icons-material/AccountCircleOutlined";
import Home from "@mui/icons-material/HomeOutlined";
import PortfolioIcon from "@mui/icons-material/AlbumOutlined";
import ContactPhone from "@mui/icons-material/ContactPhoneOutlined";
import "./nav.css";
import { Tooltip } from "@mui/material";
const nav = (props) => {
  return (
    <div className="nav--container">
      <div className="nav-bigger-circle">
        <div className="nav-center-circle"></div>

        <div className="home">
          <Tooltip title={"Home"}>
            <Home onClick = {()=>props.onNavClick("Home")} />
          </Tooltip>
        </div>

        <div className="about">
          <Tooltip title={"About Me"}>
            <About onClick = {()=>props.onNavClick("About")} />
          </Tooltip>
        </div>

        <div className="portfolio">
          <Tooltip title={"My Portfolio"}>
            <PortfolioIcon onClick = {()=>props.onNavClick("Portfolio")} />
          </Tooltip>
        </div>

        <div className="contact">
          <Tooltip title={"Contact Me"}>
            <ContactPhone onClick = {()=>props.onNavClick("Contact")} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default nav;
