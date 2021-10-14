import React from "react";
import { SvgInputModel } from "../input.model";

function Shape6Svg(
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
      viewBox="0 0 374.127 223.264"
    >
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1"
        d="M373.805 123.53L227.152.675.352 222.907"
        data-name="Path 1591"
      ></path>
    </svg>
  );
}

export default Shape6Svg;
