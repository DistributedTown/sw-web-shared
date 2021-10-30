import React from "react";
import { SvgInputModel } from "../input.model";

function BlockchainSvg(
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
    viewBox="0 0 10.436 17.577"
  >
    <path
      d="M10.433 8.953l-5.215 3.186L0 8.953 5.218 0zm-5.215 4.209L0 9.976l5.218 7.6 5.218-7.6-5.218 3.186z"
      data-name="Icon awesome-ethereum"
    ></path>
  </svg>
  );
}

export default BlockchainSvg;