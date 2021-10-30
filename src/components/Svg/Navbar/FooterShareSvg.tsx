import React from "react";
import { SvgInputModel } from "../input.model";

function FooterShareSvg(
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
      viewBox="0 0 32 32.003"
    >
      <g transform="translate(-8.243 155.5)">
        <path
          d="M31.167 15.167a5.333 5.333 0 10-5.292-4.676L13.537 16.66a5.333 5.333 0 100 7.679l12.338 6.169a5.333 5.333 0 101.592-3.18l-12.338-6.169a5.387 5.387 0 000-1.316l12.338-6.169a5.307 5.307 0 003.7 1.493z"
          data-name="Path 1494"
          transform="translate(3.742 -160)"
        ></path>
      </g>
    </svg>
  );
}

export default FooterShareSvg;
