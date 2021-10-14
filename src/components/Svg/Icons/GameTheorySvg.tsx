import React from "react";
import { SvgInputModel } from "../input.model";

function GameTheorySvg(
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
      viewBox="0 0 16.431 16.43"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#c1c1c1"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#linear-gradient)"
        d="M8.215.014H6.16v2.055h2.055zM0 2.068v2.054h2.054V2.068zM4.109.014H2.054v2.055h2.055zm2.054 8.215v2.055h2.055V8.229zM0 6.175V8.23h2.054V6.175zM12.322.014h-2.054v2.055h2.054zm4.109 0h-2.055v2.055h2.054zM4.109 8.229H2.054v2.055h2.055zm12.32 6.16v-2.054h-2.054v2.055zm0-4.109V8.226h-2.054v2.054zm-4.107 6.164h2.054V14.39h-2.054zm4.109-10.269V4.121h-2.055v2.054zM4.109 16.444h2.054V14.39H4.109zm-4.109 0h2.054V14.39H0zm8.215 0h2.054V14.39H8.215zM0 10.283v2.055h2.054v-2.055zm10.268-6.161V2.067H8.214v2.055zM8.214 8.231h2.054V6.176H8.214zM6.16 12.34v2.055h2.054V12.34zm4.109-2.055h2.054V8.231h-2.055zm0-4.107h2.054V4.123h-2.055zm0 6.161v2.055h2.054v-2.055zm-8.214 0v2.055h2.054v-2.057zm4.108-8.217V2.067H4.109v2.055zm6.161 8.215h2.054v-2.055h-2.054zM8.215 6.175V4.121H6.161v2.054zm4.109-4.108v2.055h2.054V2.068zm-4.109 8.216v2.055h2.055v-2.055zM6.161 6.175H4.109V8.23h2.054zm6.161 2.055h2.054V6.175h-2.054zM4.109 4.122H2.054v2.054h2.055zm0 6.161v2.055h2.054v-2.055z"
        data-name="Icon awesome-chess-board"
        transform="translate(0 -.014)"
      ></path>
    </svg>
  );
}

export default GameTheorySvg;
