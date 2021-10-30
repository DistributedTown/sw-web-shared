import React from "react";
import { SvgInputModel } from "../input.model";

function LogoffSvg(
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
      viewBox="0 0 16 15.707"
    >
      <g
        data-name="Group 26"
        transform="translate(-1)"
      >
        <path
          d="M192 163.208h5.184l-1.192 1.222.817.817 2.624-2.624L196.81 160l-.847.817 1.222 1.222H192z"
          data-name="Path 1077"
          transform="translate(-182.434 -154.77)"
        ></path>
        <path
          d="M55.871 62.1a6.241 6.241 0 114.415-10.663l1.148-1.144a8.369 8.369 0 00-1.05-.876 7.849 7.849 0 101.046 12l-1.144-1.14a6.214 6.214 0 01-4.415 1.82zm7.287-6.209l-.032-.032.032-.032.032.032z"
          data-name="Path 1078"
          transform="translate(-47 -48)"
        ></path>
      </g>
    </svg>
  );
}

export default LogoffSvg;
