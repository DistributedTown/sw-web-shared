import React from "react";
import { SvgInputModel } from "../input.model";

function NotificationsSvg(
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
      viewBox="0 0 16 19.39"
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
          <stop offset="1" stopColor="#454545"></stop>
        </linearGradient>
      </defs>
      <g
        fill="url(#linear-gradient)"
        data-name="Group 336"
        transform="translate(57)"
      >
        <path
          d="M20.962 17.635a12.078 12.078 0 01-1.6-5.8V7.5A6.4 6.4 0 0013.038 1a6.4 6.4 0 00-6.323 6.5v4.33a11.87 11.87 0 01-1.6 5.8.4.4 0 000 .433.322.322 0 00.337.26h15.173a.44.44 0 00.375-.212.485.485 0 00-.038-.476z"
          data-name="Path 1032"
          transform="translate(-62.05 -1)"
        ></path>
        <path
          d="M17.7 43a2.392 2.392 0 004.329 0z"
          data-name="Path 1033"
          transform="translate(-68.878 -24.985)"
        ></path>
      </g>
    </svg>
  );
}

export default NotificationsSvg;
