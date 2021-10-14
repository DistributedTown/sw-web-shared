import React from "react";
import { SvgInputModel } from "../input.model";

function SettingsSvg(
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
      viewBox="0 0 16 16"
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
        d="M62.073 56.8a5 5 0 00.041-.8c0-.28-.041-.52-.041-.8l1.718-1.32a.367.367 0 00.082-.52l-1.636-2.76a.4.4 0 00-.491-.16l-2.046.8a5.955 5.955 0 00-1.391-.8l-.286-2.12a.438.438 0 00-.409-.32h-3.273a.438.438 0 00-.409.32l-.327 2.12a6.928 6.928 0 00-1.391.8l-2.046-.8a.383.383 0 00-.491.16l-1.636 2.76a.483.483 0 00.082.52l1.759 1.32c0 .28-.041.52-.041.8s.041.52.041.8l-1.718 1.32a.367.367 0 00-.082.52l1.636 2.76a.4.4 0 00.491.16l2.046-.8a5.954 5.954 0 001.391.8l.327 2.12a.4.4 0 00.409.32h3.273a.438.438 0 00.409-.32l.328-2.12a6.924 6.924 0 001.391-.8l2.046.8a.383.383 0 00.491-.16l1.636-2.76a.482.482 0 00-.082-.52zm-6.1 2a2.8 2.8 0 112.868-2.8 2.815 2.815 0 01-2.864 2.8z"
        data-name="Path 1163"
        transform="translate(-47.998 -48.001)"
      ></path>
    </svg>
  );
}

export default SettingsSvg;
