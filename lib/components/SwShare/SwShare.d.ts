/// <reference types="react" />
export interface SimpleDialogProps {
    open: boolean;
    title: string;
    onClose: () => void;
    sx?: any;
    dialogsx?: any;
    fullScreen?: boolean;
    mode?: "light" | "dark";
    url: string;
    twitterProps?: any;
    linkedinProps?: any;
    telegramProps?: any;
}
declare function SwShare(props: SimpleDialogProps): JSX.Element;
export default SwShare;
