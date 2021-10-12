/// <reference types="react" />
import "./sw-layout.scss";
export interface SwLayoutProps {
    backgroundUrl?: any;
    contentBackgroundColor?: string;
    children?: JSX.Element;
    drawer?: JSX.Element;
    className?: string;
    top?: JSX.Element;
}
declare const SwLayout: ({ backgroundUrl, contentBackgroundColor, children, drawer, top, className, }: SwLayoutProps) => JSX.Element;
export default SwLayout;
