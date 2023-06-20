import React, { useContext } from "react";
import StateContext from "./StateContext";

const Icon = () => (
  <svg viewBox="0 0 512 512">
    <g>
      <path
        d="M96,0L83.8,1.9C58.9,7,39,26.9,33.9,51.8L32,64v352c0,53.1,42.9,96,96,96h352v-64H128c-17.9,0-32-14.1-32-32s14.1-32,32-32
		h352V32c0-17.9-14.1-32-32-32h-32v192l-64-64l-64,64V0H96z"
      />
    </g>
  </svg>
);

const LogbookButton = ({ onClick }) => {
  const { theme } = useContext(StateContext);
  return (
    <div className={`logbook-button ${theme}`} onClick={onClick}>
      <Icon />
    </div>
  );
};

export default LogbookButton;
