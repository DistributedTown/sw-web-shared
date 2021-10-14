import React from "react";
import { SvgInputModel } from "../input.model";

function TownhallNavSvg(
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
      viewBox="0 0 16 11.733"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0"></stop>
          <stop offset="1" stopColor="#454545"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#linear-gradient)"
        d="M20.583 11.492a2.56 2.56 0 01-1.867-.861A3.328 3.328 0 0117.85 8.6a2.785 2.785 0 01.7-2.125 2.843 2.843 0 014.052 0 2.778 2.778 0 01.713 2.125 3.337 3.337 0 01-.867 2.033 2.553 2.553 0 01-1.865.859zm2.201-2.934z"
        data-name="Path 1496"
        transform="translate(-9.917 -5.625)"
      ></path>
      <path
        fill="url(#linear-gradient)"
        d="M22.1 25.05h-8.787a.923.923 0 01-.733-.356 1.007 1.007 0 01-.175-.859 4.394 4.394 0 012.011-2.7A6.626 6.626 0 0121 21.118a4.369 4.369 0 012.012 2.718 1.009 1.009 0 01-.177.859.923.923 0 01-.731.354z"
        data-name="Path 1497"
        transform="translate(-7.041 -13.317)"
      ></path>
      <path
        fill="url(#linear-gradient)"
        d="M7.777 12.808a2.507 2.507 0 01-2.3-2.431 2.35 2.35 0 01.6-1.787 2.371 2.371 0 013.4 0 2.333 2.333 0 01.6 1.784 2.505 2.505 0 01-2.3 2.43z"
        data-name="Path 1498"
        transform="translate(-3.41 -6.808)"
      ></path>
      <path
        fill="url(#linear-gradient)"
        d="M7.68 20.016a5.057 5.057 0 00-2.188-.43 5.157 5.157 0 00-2.686.721 3.618 3.618 0 00-1.653 2.223.913.913 0 00.16.779.844.844 0 00.669.325h3.7a.267.267 0 00.262-.219c0-.021.009-.042.014-.063a4.828 4.828 0 011.924-2.794.267.267 0 00-.021-.446c-.052-.031-.112-.063-.181-.1z"
        data-name="Path 1499"
        transform="translate(-1.125 -12.968)"
      ></path>
    </svg>
  );
}

export default TownhallNavSvg;
