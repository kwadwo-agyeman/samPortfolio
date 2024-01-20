import React, { useState, useRef } from "react";
import homeMusicIcon from "../../assets/musiclogo.png";
import homeMusicGif from "../../assets/musicGIF.gif";
import PauseIcon from '@mui/icons-material/Pause';
import PlayIcon from '@mui/icons-material/PlayArrow';
import musicGIF from "../../assets/bgSound.mp3";
import "./music.css";
import { Tooltip, Typography } from "@mui/material";
const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={musicGIF} loop />
      <div className="music--container" onClick={playPauseHandler}>
        <div className="music-paused-icon">
          <Tooltip
            title={
              isPlaying ? (
                <PauseIcon/>
              ) : (
                <PlayIcon/>
              )
            }
          >
            <img src={homeMusicGif} alt="homelogo" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Music;
