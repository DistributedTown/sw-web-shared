import React from "react";
import { SvgInputModel } from "../input.model";

function YourContributionsSvg(
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
      viewBox="0 0 32.545 30.438"
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
        stroke="rgba(0,0,0,0)"
        strokeMiterlimit="10"
        strokeWidth="1"
        d="M33.015 8.024a1.123 1.123 0 00-.827-.554 1.18 1.18 0 00-.969.293L26.9 11.776a1.2 1.2 0 01-1.591 0l-1.868-1.736a.992.992 0 010-1.477l4.3-3.993a1 1 0 00.311-.928 1.061 1.061 0 00-.647-.764 9.57 9.57 0 00-9.863 1.711c-2.173 2-2.82 5.131-1.775 8.584a.989.989 0 01-.316 1.044L3.747 24.141a4.005 4.005 0 00-1.367 4.128 4.362 4.362 0 003.289 3.055 4.734 4.734 0 004.448-1.267l10.806-10.89a1.175 1.175 0 011.109-.3 13.521 13.521 0 003.25.416 8.576 8.576 0 005.9-2.065 8.066 8.066 0 001.837-9.2zM6.995 29.342a2.289 2.289 0 01-2.273-1.174 1.979 1.979 0 01.438-2.38 2.38 2.38 0 012.564-.407 2.064 2.064 0 011.264 2.11A2.174 2.174 0 017 29.342z"
        transform="translate(-1.716 -1.537)"
      ></path>
    </svg>
  );
}

export default YourContributionsSvg;
