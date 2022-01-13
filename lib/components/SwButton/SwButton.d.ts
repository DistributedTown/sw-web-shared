/// <reference types="react" />
import { ButtonProps } from "@mui/material";
export interface SwButtonProps extends ButtonProps {
    label?: string;
    component?: any;
    btnType?: "large" | "small" | "medium" | "semi-large";
    mode?: "light" | "dark";
    to?: string;
    children?: JSX.Element | string;
}
declare const SwButton: ({ label, children, className, mode, btnType, ...rest }: SwButtonProps) => JSX.Element;
export default SwButton;
