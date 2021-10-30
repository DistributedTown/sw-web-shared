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
      className={className}
      width={width}
      height={height}
      viewBox="0 0 17.577 17.577"
    >
      <path
        d="M14.789 11.112c4.368 0 8.789-1.393 8.789-4.056S19.156 3 14.789 3 6 4.393 6 7.056s4.421 4.056 8.789 4.056z"
        data-name="Path 1469"
        transform="translate(-6 -3)"
      ></path>
      <path
        d="M6 20.028c0 2.663 4.421 4.056 8.789 4.056s8.789-1.393 8.789-4.056V18c0 2.663-4.421 4.056-8.789 4.056S6 20.663 6 18z"
        data-name="Path 1471"
        transform="translate(-6 -11.104)"
      ></path>
      <path
        d="M6 26.028c0 2.663 4.421 4.056 8.789 4.056s8.789-1.393 8.789-4.056V24c0 2.663-4.421 4.056-8.789 4.056S6 26.663 6 24z"
        data-name="Path 1472"
        transform="translate(-6 -12.507)"
      ></path>
    </svg>
  );
}

export default TokenomicsSvg;