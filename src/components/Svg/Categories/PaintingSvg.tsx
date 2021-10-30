import React from "react";
import { SvgInputModel } from "../input.model";

function PaintingSvg(
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
      viewBox="0 0 21.667 17.152"
    >
      <path
        d="M9.843 4.32C4.141 4.32.72 8.894.72 11.181s1.14 4 3.421 4 3.421.571 3.421 2.287a3.9 3.9 0 003.991 4c7.413 0 10.833-4 10.833-8 0-6.861-5.702-9.148-12.543-9.148zM8.417 6.607a1.429 1.429 0 11-1.425 1.429 1.427 1.427 0 011.425-1.429zm4.561 0a1.429 1.429 0 11-1.425 1.429 1.427 1.427 0 011.425-1.429zm4.562 2.287a1.429 1.429 0 11-1.425 1.43 1.427 1.427 0 011.425-1.43zM4.426 10.038A1.429 1.429 0 113 11.466a1.426 1.426 0 011.426-1.428zm7.127 5.717a1.715 1.715 0 11-1.71 1.716 1.712 1.712 0 011.71-1.716z"
        data-name="Icon map-art-gallery"
        transform="translate(-.72 -4.32)"
      ></path>
    </svg>
  );
}

export default PaintingSvg;