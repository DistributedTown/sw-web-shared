import React from "react";
import { SvgInputModel } from "../input.model";

function TeachingSvg(
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
    viewBox="0 0 21.971 17.577"
  >
    <path
      d="M7.141 12.084a.785.785 0 00-.242.037 4.529 4.529 0 01-1.405.237 4.532 4.532 0 01-1.406-.237.783.783 0 00-.242-.037A3.845 3.845 0 000 15.95a1.644 1.644 0 001.648 1.627h7.69a1.644 1.644 0 001.648-1.627 3.845 3.845 0 00-3.845-3.866zm-1.648-1.1a3.3 3.3 0 10-3.3-3.3 3.3 3.3 0 003.3 3.302zM20.323 0H7.141a1.678 1.678 0 00-1.648 1.7v1.6a4.344 4.344 0 012.2.611V2.2h12.081v9.887h-2.2v-2.2h-4.391v2.2h-2.618a4.375 4.375 0 011.363 2.2h8.4a1.678 1.678 0 001.648-1.7V1.7A1.678 1.678 0 0020.323 0z"
      data-name="Icon awesome-chalkboard-teacher"
    ></path>
  </svg>
  );
}

export default TeachingSvg;