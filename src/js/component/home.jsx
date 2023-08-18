import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const cycleColor = (prevColor) => {
    const order = ["red", "yellow", "green", "purple"];
    const index = order.indexOf(prevColor);
    return order[(index + 1) % order.length];
  };

  return (
    <div className="container">
      <div className="trafficLight">
        {colors.map(clr => (
          <div key={clr}
               className={`light ${clr} ${color === clr ? "glow" : ""}`}
               onClick={() => setColor(clr)} />
        ))}
      </div>
      <div className="controls">
        <button onClick={() => setColor(prev => cycleColor(prev))}>
          Cycle Color
        </button>
        <button onClick={() => {
          if (!colors.includes("purple")) {
            setColors([...colors, "purple"]);
          }
        }}>
          Add Purple
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
