import React from "react";
import { SvgInputModel } from "../input.model";

function VideoSvg(
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
      viewBox="0 0 19.53 12.206"
    >
      <path
        fillRule="evenodd"
        d="M3.255 6.75v1.628h6.51v.814H2.441A2.441 2.441 0 000 11.633v4.883a2.441 2.441 0 002.441 2.441h9.765a2.441 2.441 0 002.433-2.239l4.891.612v-6.51l-4.891.611a2.441 2.441 0 00-2.433-2.239h-.814V7.564a.814.814 0 00-.814-.814zm11.393 6.32v2.008l3.255.407v-2.822zm-1.628-1.437a.814.814 0 00-.814-.814H2.441a.814.814 0 00-.814.814v4.883a.814.814 0 00.814.814h9.765a.814.814 0 00.814-.814z"
        data-name="Path 1473"
        transform="translate(0 -6.75)"
      ></path>
    </svg>
  );
}

export default VideoSvg;