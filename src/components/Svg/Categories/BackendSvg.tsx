
import React from "react";
import { SvgInputModel } from "../input.model";

function BackendSvg(
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
      viewBox="0 0 15.38 17.577"
    >
      <path
        d="M15.38 2.511V4.08c0 1.383-3.444 2.511-7.69 2.511S0 5.463 0 4.08V2.511C0 1.128 3.444 0 7.69 0s7.69 1.128 7.69 2.511zm0 3.531v3.531c0 1.383-3.444 2.511-7.69 2.511S0 10.956 0 9.573V6.042C1.652 7.18 4.676 7.71 7.69 7.71s6.038-.53 7.69-1.668zm0 5.493v3.531c0 1.383-3.444 2.511-7.69 2.511S0 16.449 0 15.066v-3.531C1.652 12.673 4.676 13.2 7.69 13.2s6.038-.527 7.69-1.665z"
        data-name="Icon awesome-database"
      ></path>
    </svg>
  );
}

export default BackendSvg;