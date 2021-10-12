import * as React from "react";
import { Button, ButtonProps, darken, styled } from "@mui/material";
import "./sw-button.scss";

export interface SwButtonProps extends ButtonProps {
  label: string;
  component?: any; 
  to?: string;
}

const darkenedColor50Percent = (color) => darken(color, 0.5);

const CustomizedButton = styled(Button)(
  ({ theme }) => `
  width: 100%;
  background-color: ${theme.palette.text.primary};
  border: 2px solid ${theme.palette.text.primary};
  height: 56px;
  cursor: pointer;
  line-height: 0;
  color: ${theme.palette.primary.main};


  &.Mui-disabled {
    background-color: ${theme.palette.text.primary} !important;
  }

  &:hover,
  &.active-link {
    color: ${theme.palette.text.primary};
    background-color: ${theme.palette.primary.main};
  }
`,
);

const SwButton = ({
  label,
  className = "",
  variant = "contained",
  color = "primary",
  ...rest
}: SwButtonProps) => {
  return (
    <CustomizedButton
      {...rest}
      variant={variant}
      color={color}
      className={`sw-button ${className}`}
    >
      <span style={{marginTop: '4px'}} className="sw-btn-label">{label}</span>
    </CustomizedButton>
  );
};

export default SwButton;
