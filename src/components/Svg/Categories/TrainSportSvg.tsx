import React from "react";
import { SvgInputModel } from "../input.model";

function TrainSportSvg(
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
      viewBox="0 0 25.084 19.755"
    >
      <path
        d="M29.171 12.619l-3.923-5.6 1.868-1.309 3.922 5.6z"
        data-name="Path 1474"
        transform="translate(-6.514 -5.71)"
      ></path>
      <path
        d="M23.622 16.409l-2.107-2.985-10.037 6.963 2.107 2.982-2.007 1.393-5.62-7.955 2.007-1.392 2.107 2.985 10.036-6.962L18 8.453l2.007-1.392 5.621 7.953-2.007 1.393z"
        data-name="Path 1475"
        transform="translate(-3.252 -6.034)"
      ></path>
      <path
        d="M30.735 9.622L32.6 8.315l-1.305-1.867-1.867 1.307 1.307 1.867z"
        data-name="Path 1476"
        transform="translate(-7.517 -5.887)"
      ></path>
      <path
        d="M8.922 26.8L5 21.2l-1.868 1.3 3.922 5.6z"
        data-name="Path 1477"
        transform="translate(-2.573 -8.35)"
      ></path>
      <path
        d="M5.57 27.242L3.7 28.549l-1.3-1.867 1.867-1.307z"
        data-name="Path 1478"
        transform="translate(-2.396 -9.353)"
      ></path>
    </svg>
  );
}

export default TrainSportSvg;