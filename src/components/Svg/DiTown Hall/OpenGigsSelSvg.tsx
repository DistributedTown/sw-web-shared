import React from "react";
import { SvgInputModel } from "../input.model";

function OpenGigsSelSvg(
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
      data-name="Group 1465"
      viewBox="0 0 36 36"
    >
      <g>
        <path
          d="M7.245 24.652v-1.285H4.673v1.286a9 9 0 009 9h3.857v-2.572h-3.857a6.429 6.429 0 01-6.429-6.429z"
          data-name="Path 1564"
          transform="translate(-2.102 -.224)"
        ></path>
        <path
          d="M28.979 13.673v1.286h2.571v-1.286a9 9 0 00-9-9h-3.857v2.572h3.857a6.429 6.429 0 016.429 6.429z"
          data-name="Path 1565"
          transform="translate(-.693 -2.102)"
        ></path>
        <path
          d="M13.908 12.852H6.194a3.857 3.857 0 00-3.857 3.857v2.571h2.571v-2.571a1.286 1.286 0 011.286-1.286h7.714a1.286 1.286 0 011.286 1.286v2.571h2.571v-2.571a3.857 3.857 0 00-3.857-3.857z"
          data-name="Path 1566"
          transform="translate(-2.337 -1.28)"
        ></path>
        <path
          d="M9.816 12.622A5.143 5.143 0 104.673 7.48a5.143 5.143 0 005.143 5.143zm0-7.714A2.571 2.571 0 117.245 7.48a2.571 2.571 0 012.571-2.572z"
          data-name="Path 1567"
          transform="translate(-2.102 -2.337)"
        ></path>
        <path
          d="M32.6 29.208h-7.713a3.857 3.857 0 00-3.857 3.857v2.571h2.57v-2.571a1.286 1.286 0 011.286-1.286H32.6a1.286 1.286 0 011.286 1.286v2.571h2.571v-2.571a3.857 3.857 0 00-3.857-3.857z"
          data-name="Path 1568"
          transform="translate(-.459 .363)"
        ></path>
        <path
          d="M23.367 23.836a5.143 5.143 0 105.143-5.143 5.143 5.143 0 00-5.143 5.143zm7.714 0a2.571 2.571 0 11-2.571-2.571 2.571 2.571 0 012.571 2.571z"
          data-name="Path 1569"
          transform="translate(-.224 -.693)"
        ></path>
      </g>
    </svg>
  );
}

export default OpenGigsSelSvg;
