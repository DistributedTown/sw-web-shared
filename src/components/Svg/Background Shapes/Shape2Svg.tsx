import React from "react";
import { SvgInputModel } from "../input.model";

function Shape2Svg(
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
      viewBox="0 0 295.059 393.445"
    >
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1"
        d="M.469 60.764l233.79-59.759L64.42 148.894l88.592 50.688L238.459 2.674l55.948 189.156-227.948 22.348-65.99 179.1"
        data-name="Path 1590"
      ></path>
    </svg>
  );
}

export default Shape2Svg;
