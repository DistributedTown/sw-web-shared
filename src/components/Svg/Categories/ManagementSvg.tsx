

import React from "react";
import { SvgInputModel } from "../input.model";

function ManagementSvg(
  { height, width, className }: SvgInputModel = {
    height: "100%",
    width: "100%",
    className: "",
  }
) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width={height} height={width} viewBox="0 0 26.746 23.402">
        <path id="Icon_awesome-briefcase" data-name="Icon awesome-briefcase" d="M16.716,18.13a.836.836,0,0,1-.836.836H10.865a.836.836,0,0,1-.836-.836V15.623H0v7.522a2.571,2.571,0,0,0,2.507,2.507H24.238a2.571,2.571,0,0,0,2.507-2.507V15.623H16.716ZM24.238,7.265H20.059V4.757A2.571,2.571,0,0,0,17.552,2.25H9.194A2.571,2.571,0,0,0,6.686,4.757V7.265H2.507A2.571,2.571,0,0,0,0,9.772v4.179H26.746V9.772A2.571,2.571,0,0,0,24.238,7.265Zm-7.522,0H10.03V5.593h6.686Z" transform="translate(0 -2.25)" />
      </svg>
  );
}

export default ManagementSvg;