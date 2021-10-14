import React from "react";
import { SvgInputModel } from "../input.model";

function ProjectsSelSvg(
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
      data-name="Group 1463"
      viewBox="0 0 35.981 36"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#545454"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#linear-gradient)"
        d="M34.461 28.217V22.9a2.57 2.57 0 00-2.57-2.57h-10.28v-5.14h2.57a2.572 2.572 0 002.57-2.57V4.905a2.572 2.572 0 00-2.57-2.57h-7.71a2.572 2.572 0 00-2.57 2.57v7.71a2.572 2.572 0 002.57 2.57h2.57v5.14H8.76A2.57 2.57 0 006.19 22.9v5.323a5.14 5.14 0 102.57 0V22.9h10.28v5.323a5.14 5.14 0 102.57 0V22.9h10.28v5.322a5.14 5.14 0 102.57 0zM16.471 4.905h7.71v7.71h-7.71zm-6.425 28.27a2.57 2.57 0 11-2.57-2.57 2.57 2.57 0 012.569 2.571zm12.85 0a2.57 2.57 0 11-2.57-2.57 2.57 2.57 0 012.57 2.57zm10.28 2.57a2.57 2.57 0 112.57-2.57 2.57 2.57 0 01-2.57 2.571z"
        transform="translate(-2.335 -2.335)"
      ></path>
    </svg>
  );
}

export default ProjectsSelSvg;
