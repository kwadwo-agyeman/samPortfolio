import React, { useState, useEffect } from "react";
import "./App.css";
import backgroundImg from "./assets/13.jpg";
import PortfolioBg from "./assets/PortfolioBg.mp4";
import Nav from "./components/nav/nav";
import Music from "./components/music/music";
import Home from "./Home";
import About from "./About/About";
import Contact from "./Contact";
import Portfolio from "./Portfolio/Portfolio";

const App = () => {
  const [activePage, setActivePa] = useState("Home");
  const [cursorPosition, setCursorPosition] = useState({ x: "50%", y: "50%" });
  const [isMoving, setIsMoving] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  const moveCursor = (e) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
    setIsMoving(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMoving(false);
    }, 500); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [cursorPosition]);

  return (
    <div className="portfolio-Bg" onMouseMove={moveCursor}>
      <video autoPlay muted loop>
        <source src={PortfolioBg} type="video/mp4" />
        <img src={backgroundImg} alt="" />
      </video>
      <div className="overlay"></div>

      <div
        className={`cursor--container ${isMoving ? 'moving' : ''}`}
        style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px` }}
      >
        <div className="cursor"></div>
        <div className="ripple"></div>
      </div>

      <div className="nav-component">
        <Nav onNavClick={handleNavClick} />
      </div>

      <div className="music-component">
        <Music />
      </div>

      <div className="nav--pages">
        {activePage === "Home" && <Home />}
        {activePage === "About" && <About />}
        {activePage === "Portfolio" && <Portfolio />}
        {activePage === "Contact" && <Contact />}
      </div>
    </div>
  );
};

export default App;
