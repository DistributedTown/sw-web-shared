import React from "react";
import { SvgInputModel } from "../input.model";

function TokenomicsSvg(
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
      viewBox="0 0 16.431 16.432"
    >
      <g
        data-name="Group 1893"
        transform="translate(-141.564 -460.578)"
      >
        <path
          d="M14.215 10.583c4.083 0 8.215-1.3 8.215-3.792S18.3 3 14.215 3 6 4.3 6 6.792s4.132 3.791 8.215 3.791z"
          data-name="Path 1469"
          transform="translate(135.564 457.578)"
        ></path>
        <path
          d="M6 19.9c0 2.489 4.132 3.792 8.215 3.792s8.215-1.3 8.215-3.792V18c0 2.489-4.132 3.792-8.215 3.792S6 20.489 6 18z"
          data-name="Path 1471"
          transform="translate(135.564 449.025)"
        ></path>
        <path
          d="M6 25.9c0 2.489 4.132 3.792 8.215 3.792s8.215-1.3 8.215-3.792V24c0 2.489-4.132 3.792-8.215 3.792S6 26.489 6 24z"
          data-name="Path 1472"
          transform="translate(135.564 447.322)"
        ></path>
      </g>
    </svg>
  );
}

export default TokenomicsSvg;
