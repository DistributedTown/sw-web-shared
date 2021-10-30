import React from "react";
import { SvgInputModel } from "../input.model";

function WebDevSvg(
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
      viewBox="0 0 22.467 19.971"
    >
      <path
        d="M20.595 0H1.872A1.873 1.873 0 000 1.872v12.482a1.873 1.873 0 001.872 1.872h7.489L8.737 18.1H5.929a.936.936 0 100 1.872h10.609a.936.936 0 000-1.872H13.73l-.624-1.872h7.489a1.873 1.873 0 001.872-1.872V1.872A1.873 1.873 0 0020.595 0zm-.624 13.73H2.5V2.5h17.471z"
        data-name="Icon awesome-desktop"
      ></path>
    </svg>
  );
}

export default WebDevSvg;