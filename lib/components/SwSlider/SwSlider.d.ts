/// <reference types="react" />
import { SliderProps } from "@mui/material";
export interface SwSliderProps extends SliderProps {
    mode?: "white" | "black";
    variant?: "dotted" | "filled";
}
declare const SwSlider: ({ className, mode, variant, ...rest }: SwSliderProps) => JSX.Element;
export default SwSlider;
