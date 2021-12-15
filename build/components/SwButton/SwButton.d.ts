/// <reference types="react" />
import { ButtonProps } from "@mui/material";
import "./sw-button.scss";
export interface SwButtonProps extends ButtonProps {
    label?: string;
    component?: any;
    btnType?: "large" | "small" | "medium";
    mode?: "light" | "dark";
    to?: string;
    children?: JSX.Element;
}
declare const SwButton: ({ label, children, className, mode, btnType, ...rest }: SwButtonProps) => JSX.Element;
export default SwButton;
