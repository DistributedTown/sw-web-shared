import * as React from "react";
import { Divider, DividerProps } from "@mui/material";
import "./sw-divider.scss";

export interface SwDividerProps extends DividerProps {
  width?: string
}

const SwDivider = ({ sx, width = '4px', ...props }: SwDividerProps) => {
  let styles = {
    ...(sx || {}),
  };

  if (props.orientation !== "vertical") {
    styles = {
      ...styles,
      width: "100%",
      height: width,
      marginTop: "40px",
      marginBottom: "40px",
    };
  } else {
    styles = {
      ...styles,
      height: "100%",
      width: width,
      marginLeft: "40px",
      marginRight: "40px",
    };
  }

  return (
    <Divider className="sw-divider" color="white" sx={styles} {...props} />
  );
};

export default SwDivider;
