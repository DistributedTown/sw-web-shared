import * as React from "react";
import { Slider, SliderProps, SliderThumb, styled, Typography } from "@mui/material";
import "./sw-slider.scss";

export interface SwSliderProps extends SliderProps {
  mode?: 'white' | 'black'
}

const CustomizedSlider = styled(Slider)(
  ({ theme }) => ({
    // '.MuiSlider-thumb': {
    //   boxShadow: theme.shadows[6],
    //   '&:focus, &:hover, &.Mui-active': {
    //     boxShadow: theme.shadows[6],
    //   },
    // },
  }),
);

interface SwThumbComponentProps extends React.HTMLAttributes<any> {
}

const SwThumbComponent = (value: number) => {
  return (props: SwThumbComponentProps) => {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <Typography
          className="sw-thumb-value"
          component="span"
          variant="subtitle2"
        >
          {value || 0}
        </Typography>
      </SliderThumb>
    );
  }
}

const SwSlider = ({ className, mode = 'black', ...rest }: SwSliderProps) => {
  const [value, setValue] = React.useState(rest.defaultValue);
  return (
    <CustomizedSlider
      {...rest}
      onChange={(_, v) => setValue(v)}
      components={{ Thumb: SwThumbComponent(value as number) }}
      className={`sw-slider ${className} mode-${mode}`}
    />
  );
};

export default SwSlider;
