import React from "react";
import { SvgInputModel } from "../input.model";

function Shape4Svg(
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
      viewBox="0 0 117.453 66.133"
    >
      <g data-name="Group 1816" transform="translate(.502 .383)">
        <g
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
          data-name="Group 5"
        >
          <path
            d="M20.65.113L0 20.763v44.484h44.4l20.483-20.483V.113z"
            data-name="Path 11"
          ></path>
          <path d="M0 20.77h44L64.766.003" data-name="Path 12"></path>
          <path d="M0 65.251l21.322-21.322h43.336" data-name="Path 13"></path>
          <path
            d="M0 0L0 44.559"
            data-name="Line 1"
            transform="translate(44.072 20.537)"
          ></path>
          <path
            d="M0 0L0 43.812"
            data-name="Line 2"
            transform="translate(21.135 .186)"
          ></path>
        </g>
        <g
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
          data-name="Group 6"
          transform="translate(51.565)"
        >
          <path
            d="M20.65.113L0 20.763v44.484h44.4l20.483-20.483V.113z"
            data-name="Path 14"
          ></path>
          <path d="M0 20.77h44L64.767.003" data-name="Path 15"></path>
          <path d="M0 65.251l21.322-21.322h43.332" data-name="Path 16"></path>
          <path
            d="M0 0L0 44.559"
            data-name="Line 3"
            transform="translate(44.072 20.537)"
          ></path>
          <path
            d="M0 0L0 43.812"
            data-name="Line 4"
            transform="translate(21.135 .186)"
          ></path>
        </g>
        <g
          data-name="Group 7"
          transform="translate(78.03 27.408)"
          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
        >
          <circle
            cx="5.417"
            cy="5.417"
            r="5.417"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="1"
            data-name="Ellipse 1"
          ></circle>
        </g>
      </g>
    </svg>
  );
}

export default Shape4Svg;
