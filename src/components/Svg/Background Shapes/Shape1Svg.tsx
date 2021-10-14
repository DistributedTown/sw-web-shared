import React from "react";
import { SvgInputModel } from "../input.model";

function Shape1Svg(
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
      viewBox="0 0 234.924 628.344"
    >
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1"
        d="M.372.333l234.052 261.7v219.94L45.059 627.949"
        data-name="Path 1589"
      ></path>
    </svg>
  );
}

export default Shape1Svg;
