import React, { useState } from "react";

function Home() {
  let sliderArr = [1, 2, 3];

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
    </div>
  );
}

export default Home;
