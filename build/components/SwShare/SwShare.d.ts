/// <reference types="react" />
export interface SimpleDialogProps {
    open: boolean;
    title: string;
    onClose: () => void;
    sx?: any;
    mode?: 'light' | 'dark';
    url: string;
}
declare function SwShare(props: SimpleDialogProps): JSX.Element;
export default SwShare;
