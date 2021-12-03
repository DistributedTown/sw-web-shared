/// <reference types="react" />
import "simplebar/src/simplebar.css";
import "./sw-scrollbar.scss";
export interface SwScrollbarProps {
    className?: string;
    sx?: any;
    children: any;
}
declare const SwScrollbar: ({ className, sx, ...rest }: SwScrollbarProps) => JSX.Element;
export default SwScrollbar;
