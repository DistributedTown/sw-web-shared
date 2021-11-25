import React from "react";
import { SvgInputModel } from "../input.model";

function ScoreReachedSvg(
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
      viewBox="0 0 13.278 16.73"
    >
      <g
        transform="translate(-.001)"
        style={{ isolation: "isolate" }}
      >
        <path
          d="M4.078 7.03a2.39 2.39 0 10-2.39-2.39 2.39 2.39 0 002.39 2.39zm0-3.585A1.195 1.195 0 112.883 4.64a1.195 1.195 0 011.195-1.195z"
          data-name="Path 1529"
          transform="translate(-1.687 -2.25)"
        ></path>
        <path
          d="M15.89 2.25a2.39 2.39 0 102.39 2.39 2.39 2.39 0 00-2.39-2.39zm0 3.585a1.195 1.195 0 111.195-1.195 1.195 1.195 0 01-1.195 1.195z"
          data-name="Path 1530"
          transform="translate(-9.251 -2.25)"
        ></path>
        <path
          d="M27.7 7.03a2.39 2.39 0 10-2.39-2.39 2.39 2.39 0 002.39 2.39zm0-3.585a1.195 1.195 0 11-1.192 1.195A1.195 1.195 0 0127.7 3.445z"
          data-name="Path 1531"
          transform="translate(-16.814 -2.25)"
        ></path>
        <path
          d="M4.078 13.5a2.39 2.39 0 102.39 2.39 2.39 2.39 0 00-2.39-2.39zm0 3.585a1.195 1.195 0 111.195-1.195 1.195 1.195 0 01-1.195 1.195z"
          data-name="Path 1532"
          transform="translate(-1.687 -7.525)"
        ></path>
        <path
          d="M15.89 13.5a2.39 2.39 0 102.39 2.39 2.39 2.39 0 00-2.39-2.39zm0 3.585a1.195 1.195 0 111.195-1.195 1.195 1.195 0 01-1.195 1.195z"
          data-name="Path 1533"
          transform="translate(-9.251 -7.525)"
        ></path>
        <path
          d="M27.7 13.5a2.39 2.39 0 102.39 2.39 2.39 2.39 0 00-2.39-2.39zm0 3.585a1.195 1.195 0 111.2-1.195 1.195 1.195 0 01-1.2 1.195z"
          data-name="Path 1534"
          transform="translate(-16.814 -7.525)"
        ></path>
        <path
          d="M27.7 24.75a2.39 2.39 0 102.39 2.39 2.39 2.39 0 00-2.39-2.39zm0 3.585a1.195 1.195 0 111.2-1.195 1.195 1.195 0 01-1.2 1.195z"
          data-name="Path 1535"
          transform="translate(-16.814 -12.8)"
        ></path>
        <path
          d="M3.938 28.688h1.195v1.195H3.938z"
          data-name="Path 1536"
          transform="translate(-2.742 -14.647)"
        ></path>
        <path
          d="M10.688 28.688h1.195v1.195h-1.195z"
          data-name="Path 1537"
          transform="translate(-7.107 -14.647)"
        ></path>
        <path
          d="M17.438 28.688h1.195v1.195h-1.195z"
          data-name="Path 1538"
          transform="translate(-11.172 -14.647)"
        ></path>
      </g>
    </svg>
  );
}

export default ScoreReachedSvg;
