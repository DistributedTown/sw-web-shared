import React from "react";
import { SvgInputModel } from "../input.model";

function MobileSvg(
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
      viewBox="0 0 13.671 21.873"
    >
      <path
        d="M11.62 0H2.051A2.051 2.051 0 000 2.051v17.771a2.051 2.051 0 002.051 2.051h9.569a2.051 2.051 0 002.051-2.051V2.051A2.051 2.051 0 0011.62 0zM6.835 20.506A1.367 1.367 0 118.2 19.139a1.366 1.366 0 01-1.365 1.367zm4.785-4.614a.514.514 0 01-.513.513H2.563a.514.514 0 01-.513-.513V2.563a.514.514 0 01.513-.513h8.544a.514.514 0 01.513.513z"
        data-name="Icon awesome-mobile-alt"
      ></path>
    </svg>
  );
}

export default MobileSvg;