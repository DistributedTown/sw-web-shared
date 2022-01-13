import * as React from "react";
import { Button, ButtonProps, styled } from "@mui/material";

export interface SwButtonProps extends ButtonProps {
  label?: string;
  component?: any;
  btnType?: "large" | "small" | "medium" | "semi-large";
  mode?: "light" | "dark";
  to?: string;
  children?: JSX.Element | string;
}

const CustomizedButton = styled(Button)((props) => {
  const { theme } = props;
  return `
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
  
      .MuiButton-endIcon svg, .MuiButton-startIcon svg {
        fill: ${theme.palette.primary.main};
      }
  
      &:hover,
      &.active-link {
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.text.primary};
        border-color: ${theme.palette.background.paper};
        .MuiButton-endIcon svg, .MuiButton-startIcon svg {
          fill: ${theme.palette.background.paper};
        }
      }
    }
  
  
    &.dark {
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.text.primary};
      border-color: ${theme.palette.background.paper};
  
      .MuiButton-endIcon svg, .MuiButton-startIcon svg {
        fill: ${theme.palette.background.paper};
      }
  
      &:hover,
      &.active-link {
        color: ${theme.palette.primary.main};
        background-color: ${theme.palette.background.paper};
        border-color: ${theme.palette.primary.main};
    
        .MuiButton-endIcon svg, .MuiButton-startIcon svg {
          fill: ${theme.palette.primary.main};
        }
      }
    }
  
  
    &.large {
      width: 380px;
      height: 85px;
      padding: 0 35px;
      .MuiButton-endIcon, .MuiButton-startIcon {
        svg {
          width: 45px;
          height: 45px;
        }
      }
  
      .MuiButton-endIcon {
        margin-left: 0;
        margin-right: 31px;
      }
  
      .MuiButton-startIcon {
        margin-right: 0;
        margin-left: 31px;
      }
  
      & > .sw-btn-label {
        width: 100%;
        font-size: ${theme.typography.h2.fontSize};
        line-height: 45px;
      }
    }
  
    &.medium {
      width: 180px;
      height: 50px;
      padding: 10px;
      .MuiButton-startIcon {
        margin-right: 10px;
      }
      .MuiButton-endIcon, .MuiButton-startIcon {
        svg {
          width: 25px;
          height: 25px;
        }
      }
  
      & > .sw-btn-label {
        font-size: ${theme.typography.body1.fontSize};
        line-height: 25px;
      }
    }

    &.semi-large {
      width: 245px;
      height: 60px;
      padding: 10px 38px;
      .MuiButton-startIcon {
        margin-right: 10px;
      }
      .MuiButton-endIcon, .MuiButton-startIcon {
        svg {
          width: 25px;
          height: 25px;
        }
      }
  
      & > .sw-btn-label {
        font-size: ${theme.typography.body1.fontSize};
        line-height: 25px;
        width: 100%;
      }
    }
  
  
    &.Mui-disabled {
      background-color: ${theme.palette.text.disabled} !important;
      & > .sw-btn-label {
        color: #616161;
      }
    }
  `;
});

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
      <span style={{marginTop: '4px'}}className="sw-btn-label">
        {children || label}
      </span>
    </CustomizedButton>
  );
};

export default SwButton;
