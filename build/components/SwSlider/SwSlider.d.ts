/// <reference types="react" />
import { SliderProps } from "@mui/material";
import "./sw-slider.scss";
export interface SwSliderProps extends SliderProps {
    mode?: 'white' | 'black';
}
declare const SwSlider: ({ className, mode, ...rest }: SwSliderProps) => JSX.Element;
export default SwSlider;
