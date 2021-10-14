import React from "react";
import { SvgInputModel } from "../input.model";

function Shape5Svg(
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
      viewBox="0 0 74.281 173.434"
    >
      <g
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1"
        data-name="Group 1817"
        transform="translate(.5 .936)"
      >
        <g data-name="Group 9">
          <path
            d="M58.384 27.377l-8.835-4.3-26.815 2"
            data-name="Path 1-2"
          ></path>
          <path d="M73.28 63.037L62.29 79.224V0" data-name="Path 1-2"></path>
          <path d="M35.616 50.589V28.202" data-name="Path 1-2"></path>
          <path
            d="M62.291 79.224l10.99-16.187-10.99 16.187L50.284 54.04l8.1-2.617 14.9 11.614V15.416L62.294 0 49.552 23.076l.735 30.964"
            data-name="Path 1-2"
          ></path>
          <path
            d="M22.735 25.071v27.637L54.619 172.37"
            data-name="Path 1-2"
          ></path>
          <path
            d="M58.388 50.589h-22.77V28.202l-12.879-3.131 12.879 3.131 22.769-.826v24.047l-19.175 6.285L.005 70.559"
            data-name="Path 1-2"
          ></path>
          <path
            d="M.931 7.699l-.93 62.859.93-62.859 61.361-7.7"
            data-name="Path 1-2"
          ></path>
        </g>
        <path
          d="M0 11.96L14.898 0"
          data-name="Line 6"
          transform="translate(58.382 15.416)"
        ></path>
      </g>
    </svg>
  );
}

export default Shape5Svg;
