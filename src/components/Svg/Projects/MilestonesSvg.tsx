import React from "react";
import { SvgInputModel } from "../input.model";

function MilestonesSvg(
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
      viewBox="0 0 13.277 3.319"
    >
      <path
        d="M11.618 0A1.661 1.661 0 0010.1 1H8.159a1.658 1.658 0 00-3.041 0H3.18a1.66 1.66 0 100 1.328h1.938a1.658 1.658 0 003.041 0H10.1A1.659 1.659 0 1011.618 0z"
      ></path>
    </svg>
  );
}

export default MilestonesSvg;
