import React from "react";
import { SvgInputModel } from "../input.model";

function FrontendSvg(
  { height, width, className }: SvgInputModel = {
    height: "100%",
    width: "100%",
    className: "",
  }
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 17.577 17.577"
    >
      <path
        fillRule="evenodd"
        d="M0 2.2A2.2 2.2 0 012.2 0h8.789a2.2 2.2 0 012.2 2.2v2.2h2.2a2.2 2.2 0 012.2 2.2v8.78a2.2 2.2 0 01-2.2 2.2H6.591a2.2 2.2 0 01-2.2-2.2v-2.2H2.2a2.2 2.2 0 01-2.2-2.2zm5.493 10.983v2.2a1.1 1.1 0 001.1 1.1h8.787a1.1 1.1 0 001.1-1.1V6.591a1.1 1.1 0 00-1.1-1.1h-2.2v5.493a2.2 2.2 0 01-2.2 2.2z"
        data-name="Path 1468"
      ></path>
    </svg>
  );
}

export default FrontendSvg;