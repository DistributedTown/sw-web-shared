/// <reference types="react" />
import "./sw-quote.scss";
export interface SwQuoteProps {
    children: JSX.Element;
    mobile?: boolean;
    mobileStartText?: JSX.Element;
}
declare const SwQuote: ({ children, mobileStartText, mobile, }: SwQuoteProps) => JSX.Element;
export default SwQuote;
