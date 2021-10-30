import React from "react";
import { SvgInputModel } from "../input.model";

function HouseHoldingSvg(
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
      viewBox="0 0 15.623 15.624"
    >
      <path
        d="M15.288 12.074L11.715 8.5a2.266 2.266 0 00-2.606-.424L5.856 4.824V2.929L1.951 0 0 1.953l2.927 3.905h1.895l3.253 3.253a2.27 2.27 0 00.425 2.606l3.573 3.573a1.134 1.134 0 001.608 0l1.608-1.608a1.14 1.14 0 000-1.608zm-5.169-5.209a3.21 3.21 0 012.285.946L13 8.4a4.319 4.319 0 001.336-.9 4.388 4.388 0 001.156-4.171.365.365 0 00-.613-.168l-2.27 2.27-2.075-.341-.345-2.072 2.27-2.27a.368.368 0 00-.174-.616 4.4 4.4 0 00-4.168 1.156A4.324 4.324 0 006.86 4.449l2.505 2.505a3.324 3.324 0 01.754-.088zm-3.17 2.5l-1.73-1.73-4.65 4.656a1.953 1.953 0 002.761 2.761l3.77-3.771a3.277 3.277 0 01-.153-1.913zm-5 5.035a.732.732 0 11.732-.732.734.734 0 01-.73.732z"
        data-name="Icon awesome-tools"
        transform="translate(.004)"
      ></path>
    </svg>
  );
}

export default HouseHoldingSvg;