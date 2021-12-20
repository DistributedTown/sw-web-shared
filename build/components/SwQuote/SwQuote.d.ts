/// <reference types="react" />
export interface SwQuoteProps {
    children: JSX.Element;
    mobile?: boolean;
    mobileStartText?: JSX.Element;
    className?: string;
    showBorder?: boolean;
}
declare const SwQuote: ({ children, mobileStartText, mobile, className, showBorder, }: SwQuoteProps) => JSX.Element;
export default SwQuote;
