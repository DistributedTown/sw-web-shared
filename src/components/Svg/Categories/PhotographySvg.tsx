import React from "react";
import { SvgInputModel } from "../input.model";

function PhotographySvg(
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
      viewBox="0 0 23.341 17.577"
    >
      <path
        d="M7.6 4.445L6.865 7.4H0v14.622h23.341V7.4H16.8l-.735-2.953zm4.13 2.947a6.564 6.564 0 11-6.564 6.564 6.563 6.563 0 016.564-6.564zm7.7 1.429h3.309v1.921h-3.312V8.821zm-7.7.51a4.625 4.625 0 104.625 4.625 4.625 4.625 0 00-4.625-4.625z"
        transform="translate(0 -4.445)"
      ></path>
    </svg>
  );
}

export default PhotographySvg;