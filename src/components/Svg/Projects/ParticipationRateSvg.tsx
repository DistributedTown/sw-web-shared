import React from "react";
import { SvgInputModel } from "../input.model";

function ParticipationRateSvg(
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
      viewBox="0 0 23 23"
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
      <g fill="url(#linear-gradient)" transform="translate(-2.25 -2.25)">
        <path
          d="M3.893 22.5v1.643H7.66l-5.41 5.41 1.162 1.162 5.41-5.41v3.767h1.643V22.5z"
          data-name="Path 1580"
          transform="translate(0 -5.464)"
        ></path>
        <path
          d="M27.071 4.5h-5.75v1.643h2.945l-6.231 6.231-3.526-3.527a.821.821 0 00-1.162 0L9 13.2l1.162 1.162 3.767-3.767 3.527 3.527a.821.821 0 001.162 0L25.429 7.3v2.95h1.643z"
          data-name="Path 1581"
          transform="translate(-1.821 -.607)"
        ></path>
        <path
          d="M18 31.5h11.5v1.643H18z"
          data-name="Path 1582"
          transform="translate(-4.25 -7.893)"
        ></path>
        <path d="M2.25 2.25h1.643v11.5H2.25z" data-name="Path 1583"></path>
      </g>
    </svg>
  );
}

export default ParticipationRateSvg;
