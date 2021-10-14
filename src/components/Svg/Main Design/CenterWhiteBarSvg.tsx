import React from "react";
import { SvgInputModel } from "../input.model";

function CenterWhiteBarSvg(
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
      viewBox="0 0 8.659 767"
    >
      <g fill="#fff" data-name="Path 1488">
        <path d="M8.16 766.5H.5V.5h7.66v766z"></path>
        <path fill="#707070" d="M1 1v765h6.66V1H1M0 0h8.66v767H0V0z"></path>
      </g>
    </svg>
  );
}

export default CenterWhiteBarSvg;
