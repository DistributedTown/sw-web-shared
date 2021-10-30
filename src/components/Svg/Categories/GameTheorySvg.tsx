import React from "react";
import { SvgInputModel } from "../input.model";

function GameTheorySvg(
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
      viewBox="0 0 17.579 17.577"
    >
      <path
        d="M8.789.014h-2.2v2.2h2.2zM0 2.211v2.2h2.2v-2.2zM4.4.014H2.2v2.2h2.2zM6.594 8.8V11h2.2V8.8zM0 6.605V8.8h2.2V6.6zM13.183.014h-2.2v2.2h2.2zm4.4 0h-2.2v2.2h2.2zM4.4 8.8H2.2V11h2.2zm13.181 6.591V13.2h-2.2v2.2zm0-4.4V8.8h-2.2V11zm-4.394 6.594h2.2v-2.2h-2.2zm4.4-10.986v-2.2h-2.2v2.2zM4.4 17.591h2.2v-2.2H4.4zm-4.4 0h2.2v-2.2H0zm8.789 0h2.2v-2.2h-2.2zM0 11v2.2h2.2V11zm10.986-6.592V2.21h-2.2v2.2zm-2.2 4.4h2.2v-2.2h-2.2zm-2.2 4.4v2.2h2.2V13.2zm4.4-2.2h2.2V8.8h-2.2zm0-4.394h2.2V4.41h-2.2zm0 6.592v2.2h2.2V13.2zM2.2 13.2v2.2h2.2v-2.2zm4.4-8.789V2.21H4.4v2.2zm6.585 8.789h2.2V11h-2.2zm-4.4-6.592v-2.2h-2.2v2.2zm4.4-4.394v2.2h2.2v-2.2zM8.789 11v2.2h2.2V11zm-2.2-4.394H4.4V8.8h2.2zm6.591 2.2h2.2v-2.2h-2.2zM4.4 4.408H2.2v2.2h2.2zM4.4 11v2.2h2.2V11z"
        data-name="Icon awesome-chess-board"
        transform="translate(0 -.014)"
      ></path>
    </svg>
  );
}

export default GameTheorySvg;