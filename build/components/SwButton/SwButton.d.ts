/// <reference types="react" />
import { ButtonProps } from "@mui/material";
import "./sw-button.scss";
export interface SwButtonProps extends ButtonProps {
    label?: string;
    component?: any;
    to?: string;
    children?: JSX.Element;
}
declare const SwButton: ({ label, children, className, variant, color, ...rest }: SwButtonProps) => JSX.Element;
export default SwButton;
