/// <reference types="react" />
import "./sw-layout.scss";
export interface SwLayoutProps {
    backgroundUrl?: any;
    contentBackgroundColor?: string;
    children?: JSX.Element;
    drawer?: JSX.Element;
    className?: string;
}
declare const SwLayout: ({ backgroundUrl, contentBackgroundColor, children, drawer, className, }: SwLayoutProps) => JSX.Element;
export default SwLayout;
