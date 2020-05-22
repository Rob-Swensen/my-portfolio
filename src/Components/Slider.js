import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/slider.scss";
import I1 from "../Pics/Brad.jpg";
import I2 from "../Pics/Family_Photo2.jpg";
import I3 from "../Pics/Utah_Valley.jpg";
import Images from "./Images";
import History from './History';

function Home() {
  let sliderArr = [
    <Images src={I1} />,
    <Images src={I2} />,
    <Images src={I3} />,
  ];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((slide, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translate(${x}%)` }}
          >
            {slide}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <FontAwesomeIcon className="icon" icon={faChevronLeft} size="4x" />
      </button>
      <button id="goRight" onClick={goRight}>
        <FontAwesomeIcon className="icon" icon={faChevronRight} size="4x" />
      </button>
    </div>
  );
}

export default Home;
