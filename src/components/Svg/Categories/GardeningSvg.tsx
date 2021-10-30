import React from "react";
import { SvgInputModel } from "../input.model";

function GardeningSvg(
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
      viewBox="0 0 19.77 17.577"
    >
      <path
        d="M18.751.332a.534.534 0 00-.971-.041 5.886 5.886 0 01-5.145 3H9.888A6.592 6.592 0 003.3 9.885a6.787 6.787 0 00.051.7 16.423 16.423 0 019.834-2.9.549.549 0 010 1.1c-8.629 0-12.289 5.29-13.1 7.277a1.1 1.1 0 002.035.838 9.031 9.031 0 012.468-3.11 6.576 6.576 0 006 2.65c5.389-.391 9.182-5.224 9.182-11.142A12.482 12.482 0 0018.751.332z"
        data-name="Icon awesome-leaf"
        transform="translate(-.004 .002)"
      ></path>
    </svg>
  );
}

export default GardeningSvg;