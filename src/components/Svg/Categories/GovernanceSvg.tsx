import React from "react";
import { SvgInputModel } from "../input.model";

function GovernanceSvg(
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
      viewBox="0 0 22.538 17.577"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#939393"></stop>
          <stop offset="1"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#linear-gradient)"
        d="M.133 14.044a2.911 2.911 0 005.772 0zM15.859 19.9a.451.451 0 01-.45.452H7a.45.45 0 110-.9h8.409a.449.449 0 01.45.448zm-9.259.686h9.21v1.3H6.6zm10.035-6.542a2.909 2.909 0 005.77 0zm5.612-.906l-2.366-3.255h1.263a.561.561 0 000-1.121h-6.692a3.314 3.314 0 00-2.54-2.133V4.872a.56.56 0 00-.561-.562l-.052.006-.052-.006a.559.559 0 00-.56.562v1.756a3.312 3.312 0 00-2.539 2.133H1.453a.561.561 0 000 1.121h1.206L.3 13.138H0v.6h6.039v-.6h-.3L3.38 9.883h5.485a2.376 2.376 0 01.035-.371.53.53 0 00.032-.173 2.4 2.4 0 011.756-1.773v6.174h-.023a6.818 6.818 0 01-2.792 5.486h6.858a6.826 6.826 0 01-2.794-5.486h-.022V7.566a2.4 2.4 0 011.755 1.773.57.57 0 00.034.173 2.5 2.5 0 01.029.371h5.428L16.8 13.139h-.3v.6h6.038v-.6zm-19.466 0H.893l1.886-2.6v2.6zm.483 0v-2.6l1.886 2.6H3.262zm16.017 0h-1.89l1.887-2.6zm.481 0v-2.6l1.889 2.6zM3.58 7.978a.56.56 0 11-.559-.562.56.56 0 01.559.562zm16.5-.03a.56.56 0 11-.273-.5.557.557 0 01.272.501z"
        data-name="Icon map-lawyer"
        transform="translate(0 -4.311)"
      ></path>
    </svg>
  );
}

export default GovernanceSvg;