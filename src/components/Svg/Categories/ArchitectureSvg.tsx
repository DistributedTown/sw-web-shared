import React from "react";
import { SvgInputModel } from "../input.model";

function ArchitectureSvg(
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
      viewBox="0 0 17.577 19.463"
    >
      <path
        d="M21.213 6.822l-8.161-3.766a.628.628 0 00-.527 0L4.364 6.822A.628.628 0 004 7.393v10.672a.628.628 0 00.364.571l8.161 3.764a.628.628 0 00.527 0l8.161-3.767a.628.628 0 00.364-.571V7.393a.628.628 0 00-.364-.571zm-8.424-2.5l6.66 3.076-6.66 3.076-6.661-3.081zM5.256 8.373l6.905 3.189v9.291l-6.905-3.19zm8.161 12.48v-9.291l6.905-3.189v9.291z"
        transform="translate(-4 -2.998)"
      ></path>
    </svg>
  );
}

export default ArchitectureSvg;