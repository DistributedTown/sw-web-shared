/// <reference types="react" />
import { ButtonProps } from "@mui/material";
import "./sw-button.scss";
export interface SwButtonProps extends ButtonProps {
    label: string;
    component?: any;
    to?: string;
}
declare const SwButton: ({ label, className, variant, color, ...rest }: SwButtonProps) => JSX.Element;
export default SwButton;
