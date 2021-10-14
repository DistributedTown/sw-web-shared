import React from "react";
import { SvgInputModel } from "../input.model";

function LayerBlurSvg(
  { height, width, className }: SvgInputModel = {
    height: "100%",
    width: "100%",
    className: "",
  }
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ height, width }}
      className={className}
      viewBox="0 0 1366 768"
    >
      <g
        fill="#fff"
        stroke="#707070"
        strokeWidth="1"
        data-name="Rectangle 1780"
      >
        <path stroke="none" d="M0 0H1366V768H0z"></path>
        <path fill="none" d="M0.5 0.5H1365.5V767.5H0.5z"></path>
      </g>
    </svg>
  );
}

export default LayerBlurSvg;
