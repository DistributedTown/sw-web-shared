import React from "react";
import { SvgInputModel } from "../input.model";

function MilestonesCompletedSvg(
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
      viewBox="0 0 21.5 21.5"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0"></stop>
          <stop offset="1" stopColor="gray"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#linear-gradient)"
        d="M0 0v21.5h21.5V7.6l-3.527 3.527v6.844H3.527V3.527h6.844L13.9 0zm18.454.272l-7.779 7.78L7.9 5.272 5.046 8.124l5.629 5.628 2.85-2.85 7.775-7.78-2.846-2.85z"
      ></path>
    </svg>
  );
}

export default MilestonesCompletedSvg;
