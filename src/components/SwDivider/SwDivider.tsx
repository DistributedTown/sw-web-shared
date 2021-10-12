import * as React from "react";
import { Divider, DividerProps } from "@mui/material";
import "./sw-divider.scss";

export interface SwDividerProps extends DividerProps {}

const SwDivider = ({ sx, ...props }: SwDividerProps) => {
  let styles = {
    ...(sx || {}),
  };

  if (props.orientation !== "vertical") {
    styles = {
      ...styles,
      width: '100%',
      height: 4,
      marginTop: "40px",
      marginBottom: "40px",
      
    };
  } else {
    styles = {
      ...styles,
      height: '100%',
      width: 4,
      marginLeft: "40px",
      marginRight: "40px",
    };
  }

  return <Divider color="white" sx={styles} {...props} />;
};

export default SwDivider;
