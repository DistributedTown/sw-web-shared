/// <reference types="react" />
import { DividerProps } from "@mui/material";
import "./sw-divider.scss";
export interface SwDividerProps extends DividerProps {
    width?: string;
}
declare const SwDivider: ({ sx, width, ...props }: SwDividerProps) => JSX.Element;
export default SwDivider;
