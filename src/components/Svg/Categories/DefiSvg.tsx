


import React from "react";
import { SvgInputModel } from "../input.model";

function DefiSvg(
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
      viewBox="0 0 13.183 17.577"
    >
      <path
        d="M22.183 6H9v2.2l7.141 6.591L9 21.38v2.2h13.183v-3.3h-7.69l5.493-5.493L14.493 9.3h7.69z"
        data-name="Icon material-functions"
        transform="translate(-9 -6)"
      ></path>
    </svg>
  );
}

export default DefiSvg;