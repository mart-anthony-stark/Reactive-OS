import React from "react";
import { AiOutlinePause } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

const Mix = ({ mix, playingMix }) => {
  return (
    <div className="single-item">
      <img src={mix.img} alt={mix.title} />
      <div className="item-right">
        <h4>{mix.title}</h4>
        {playingMix === mix.title ? (
          <IconContext.Provider
            value={{
              className: "play-pause-icon",
            }}
          >
            <AiOutlinePause />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider
            value={{
              className: "play-pause-icon play",
            }}
          >
            <BiPlay />
          </IconContext.Provider>
        )}
      </div>
    </div>
  );
};

export default Mix;
