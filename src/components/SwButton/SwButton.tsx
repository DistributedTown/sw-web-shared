import * as React from "react";
import { Button, ButtonProps, styled } from "@mui/material";

export interface SwButtonProps extends ButtonProps {
  label?: string;
  component?: any;
  btnType?: "large" | "small" | "medium";
  mode?: "light" | "dark";
  to?: string;
  children?: JSX.Element;
}

const CustomizedButton = styled(Button)(
  ({ theme }) => `
  width: 100%;
  background-color: ${theme.palette.text.primary};
  border: 2px solid;
  cursor: pointer;
  box-shadow: ${theme.shadows[2]};
  text-transform: inherit;

  & > .sw-btn-label {
    text-align: center;
  }


  &.light {
    color: ${theme.palette.primary.main};
    background-color: ${theme.palette.background.paper};
    border-color: ${theme.palette.primary.main};

    .MuiButton-endIcon svg {
      fill: ${theme.palette.primary.main};
    }

    &:hover,
    &.active-link {
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.text.primary};
      border-color: ${theme.palette.background.paper};
      .MuiButton-endIcon svg {
        fill: ${theme.palette.background.paper};
      }
    }
  }


  &.dark {
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.text.primary};
    border-color: ${theme.palette.background.paper};

    .MuiButton-endIcon svg {
      fill: ${theme.palette.background.paper};
    }

    &:hover,
    &.active-link {
      color: ${theme.palette.primary.main};
      background-color: ${theme.palette.background.paper};
      border-color: ${theme.palette.primary.main};
  
      .MuiButton-endIcon svg {
        fill: ${theme.palette.primary.main};
      }
    }
  }


  &.large {
    width: 380px;
    height: 85px;
    padding: 0 35px;
    .MuiButton-endIcon {
      margin-left: 0;
      margin-right: 31px;
      svg {
        width: 45px;
        height: 45px;
      }
    }

    & > .sw-btn-label {
      width: 100%;
      font-size: ${theme.typography.h2.fontSize}
    }
  }

  &.medium {
    width: 180px;
    height: 50px;
    padding: 0 35px;
    .MuiButton-endIcon {
      svg {
        width: 16px;
        height: 16px;
      }
    }

    & > .sw-btn-label {
      font-size: ${theme.typography.body1.fontSize}
    }
  }


  &.Mui-disabled {
    background-color: ${theme.palette.text.disabled} !important;
  }
`
);

const SwButton = ({
  label = null,
  children = null,
  className = "",
  mode = null,
  btnType = null,
  ...rest
}: SwButtonProps) => {
  return (
    <CustomizedButton
      {...rest}
      className={`sw-button ${className} ${mode} ${btnType}`}
    >
      <span style={{ marginTop: "4px" }} className="sw-btn-label">
        {children || label}
      </span>
    </CustomizedButton>
  );
};

export default SwButton;
