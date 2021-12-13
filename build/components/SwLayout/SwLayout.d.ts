/// <reference types="react" />
import "./sw-layout.scss";
export interface SwLayoutProps {
    backgroundUrl?: any;
    hideTop?: boolean;
    scrollbarStyles: any;
    children?: JSX.Element;
    drawer?: JSX.Element;
    className?: string;
    top?: JSX.Element;
    disableGutters?: boolean;
}
declare const SwLayout: ({ backgroundUrl, hideTop, children, drawer, top, scrollbarStyles, disableGutters, className, }: SwLayoutProps) => JSX.Element;
export default SwLayout;
