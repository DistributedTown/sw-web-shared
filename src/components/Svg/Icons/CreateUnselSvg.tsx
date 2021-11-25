import React from "react";
import { SvgInputModel } from "../input.model";

function CreateUnselSvg(
  { height, width, className }: SvgInputModel = {
    height: "0",
    width: "0",
    className: "",
  }
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ height, width }}
      className={className}
      viewBox="0 0 36 36"
    >
      <path
        fillRule="evenodd"
        d="M36 18A18 18 0 1118 0a18 18 0 0118 18zM19.125 9a1.125 1.125 0 00-2.25 0v7.875H9a1.125 1.125 0 000 2.25h7.875V27a1.125 1.125 0 002.25 0v-7.875H27a1.125 1.125 0 000-2.25h-7.875z"
        data-name="Path 1592"
      ></path>
    </svg>
  );
}

export default CreateUnselSvg;
