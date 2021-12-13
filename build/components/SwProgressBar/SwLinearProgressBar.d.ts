/// <reference types="react" />
import "./sw-progress-bar.scss";
export interface ProgressBarProps {
    className?: string;
    percentage?: any;
    sx?: any;
    variant?: any;
    children: any;
}
declare const SwProgressBar: ({ percentage, className, variant, ...rest }: ProgressBarProps) => JSX.Element;
export default SwProgressBar;
