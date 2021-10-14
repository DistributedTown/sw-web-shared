import React from "react";
import { SvgInputModel } from "../input.model";

function SkillWalletNavSvg(
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
      viewBox="0 0 16 14.769"
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
        data-name="Group 1260"
        transform="translate(-142.231 -344.268)"
      >
        <path
          d="M53.95 74.665V68.1a1.641 1.641 0 011.642-1.642h7.577v-.819A1.636 1.636 0 0061.542 64h-11.85A1.662 1.662 0 0048 65.615v11.539a1.662 1.662 0 001.692 1.615h11.846a1.633 1.633 0 001.627-1.642v-.819h-7.577a1.641 1.641 0 01-1.638-1.642z"
          data-name="Path 1164"
          transform="translate(94.231 280.268)"
        ></path>
        <path
          d="M245 170.615v5.38a.617.617 0 00.615.615h7.185a.617.617 0 00.615-.615v-5.38a.617.617 0 00-.615-.615h-7.186a.617.617 0 00-.614.615zm2.963 3.916a1.23 1.23 0 111.149-1.149 1.23 1.23 0 01-1.149 1.148z"
          data-name="Path 1165"
          transform="translate(-95.184 178.348)"
        ></path>
      </g>
    </svg>
  );
}

export default SkillWalletNavSvg;
