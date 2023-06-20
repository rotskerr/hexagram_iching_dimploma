import React from "react";
import { animated, useSpring } from "react-spring";
import { mutate, number } from "../hexagrams";
import Hexagram from "./Hexagram";
import MDHexagramText from "./MDHexagramText";


const ResultPanel = ({ hexagram }) => {
  const animProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 300 },
  });

  const hexagram2 = mutate(hexagram);
  const hexNum1 = number(hexagram);
  const hexNum2 = number(hexagram2);

  return (
    <animated.div className="result" style={animProps}>
      <Hexagram lines={hexagram} />
      <MDHexagramText hexagramNumber={hexNum1} />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      {hexNum1 !== hexNum2 && (
        <>
          <Hexagram lines={hexagram2} />
          <MDHexagramText hexagramNumber={hexNum2} />
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </>
      )}
    </animated.div>
  );
};

export default ResultPanel;
