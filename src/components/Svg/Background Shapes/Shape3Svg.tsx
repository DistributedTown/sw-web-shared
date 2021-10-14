import React from "react";
import { SvgInputModel } from "../input.model";

function Shape3Svg(
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
      viewBox="0 0 65.596 49.049"
    >
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1"
        d="M64.999 0L0 48.245"
        data-name="Line 51"
        transform="translate(.299 .402)"
      ></path>
    </svg>
  );
}

export default Shape3Svg;
