import * as React from "react";
import { Divider, DividerProps, styled } from "@mui/material";

export interface SwDividerProps extends DividerProps {
  width?: string;
}

const CustomizedDivider = styled(Divider)(
  ({ theme }) => `

  ${theme.breakpoints.down("md")} {
    &.MuiDivider-vertical {
      margin-left: 28px;
      margin-right: 28px;
    }

    &:not(.MuiDivider-vertical) {
      margin-top: 28px;
      margin-bottom: 28px;
    }
  }

  ${theme.breakpoints.down("sm")} {
    &.MuiDivider-vertical {
      margin-left: 10px;
      margin-right: 10px;
    }

    &:not(.MuiDivider-vertical) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`
);

const SwDivider = ({ sx, width = "1px", ...props }: SwDividerProps) => {
  let styles: any = {
    ...(sx || {}),
  };

  if (props.orientation !== "vertical") {
    styles = {
      ...styles,
      width: "100%",
      height: width,
      marginTop: "56px",
      marginBottom: "56px",
    };
  } else {
    styles = {
      ...styles,
      height: "100%",
      width: width,
      marginLeft: "56px",
      marginRight: "56px",
    };
  }

  return (
    <CustomizedDivider
      className="sw-divider"
      color="white"
      sx={styles}
      {...props}
    />
  );
};

export default SwDivider;
