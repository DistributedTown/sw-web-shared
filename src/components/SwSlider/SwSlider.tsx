import * as React from "react";
import {
  Slider,
  SliderProps,
  SliderThumb,
  styled,
  Typography,
} from "@mui/material";

export interface SwSliderProps extends SliderProps {
  mode?: "white" | "black";
  variant?: "dotted" | "filled";
}

const CustomizedSlider = styled(Slider)(
  ({ theme }) => `
    border-radius: 0;
    width: 214px;
    display: flex;
    grid-gap: 1px;
    align-items: center;
  
    .MuiSlider-track {
      border: 0;
      background-color: transparent;
      transform: translate(-2px, -50%);
    }
  
    .MuiSlider-mark {
      width: 11px;
      height: 8px;
      border-radius: 0;
      opacity: 1;
      position: relative;
    }
  
    .MuiSlider-rail {
      background-color: transparent;
    }
  
    .MuiSlider-thumb {
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      .sw-thumb-value {
        width: 100%;
        height: 100%;
        line-height: 26px;
        text-align: center;
      }
    }


    &.variant-dotted {
      &.Mui-disabled .MuiSlider-thumb {
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main};
        background-color: ${theme.palette.text.disabled};
      }
    
      &.mode-white {
        color: ${theme.palette.text.primary};
    
        .MuiSlider-mark {
          background-color: ${theme.palette.background.paper};
        }
    
        &:not(.Mui-disabled) .MuiSlider-thumb {
          background: ${theme.palette.primary.main};
          border: 1px solid ${theme.palette.background.paper};
          color: ${theme.palette.text.primary};
        }
      }
    
      &.mode-black {
        color: ${theme.palette.primary.main};
    
        .MuiSlider-mark {
          background-color: ${theme.palette.primary.main};
        }
    
        &:not(.Mui-disabled) .MuiSlider-thumb {
          background: ${theme.palette.background.paper};
          border: 1px solid ${theme.palette.primary.main};
          color: ${theme.palette.primary.main};
        }
      }
    }

    &.variant-filled {
      width: unset;
      border: 1px solid;

      .MuiSlider-thumb {
        background: transparent;
        border: none;
        transition: left .4s linear;
        
        &:hover, &.Mui-active, &.Mui-focusVisible, &:before {
          box-shadow: none;
        }
      }

      .MuiSlider-track {
        height: 100%;
        transform: translate(0, -50%);
      }

      &.mode-black {
        .MuiSlider-track {
          background-color: ${theme.palette.primary.main};
        }
      }
    }
  `
);

interface SwThumbComponentProps extends React.HTMLAttributes<any> {}

const SwThumbComponent = (value: number, variant: "filled" | "dotted") => {
  return (props: SwThumbComponentProps) => {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        {variant === "dotted" && (
          <Typography
            className="sw-thumb-value"
            component="span"
            variant="subtitle2"
          >
            {value || 0}
          </Typography>
        )}
      </SliderThumb>
    );
  };
};

const SwMarkComponent = () => {
  return (props) => {
    const { children, style, ownerState, markActive, ...other } = props;
    return <div {...other} />;
  };
};

const SwSlider = ({
  className,
  mode = "black",
  variant = "dotted",
  ...rest
}: SwSliderProps) => {
  return (
    <CustomizedSlider
      {...rest}
      components={{
        Thumb: SwThumbComponent(rest.value as number, variant),
        Mark: SwMarkComponent(),
      }}
      className={`sw-slider ${className} variant-${variant} mode-${mode}`}
    />
  );
};

export default SwSlider;
