import React from "react";
import "./sw-sidebar.scss";
interface SwSidebarMenuItemBase {
    color?: "primary" | "warn" | "secondary";
    icon?: React.Component;
    component?: React.Component;
    children?: SwSidebarMenuItem[];
}
interface SwSidebarMenuDivider {
    type: "divider";
    dashed?: boolean;
}
interface SwSidebarMenuItemButton extends SwSidebarMenuItemBase {
    type: "button";
    label: string;
    onClick?: (info: any) => void;
}
interface SwSidebarMenuItemHref extends SwSidebarMenuItemBase {
    type: "href";
    label: string;
    href?: string;
}
export declare type SwSidebarMenuItem = SwSidebarMenuItemButton | SwSidebarMenuDivider | SwSidebarMenuItemHref;
export interface SwSidebarProps {
    open?: boolean;
    width?: string;
    backgroundColor?: string;
    mode: 'dock' | 'close';
    sidebarTopIcon?: React.ElementType | null;
    children: JSX.Element;
    mobile?: boolean;
    handleToggle: () => any;
    sx?: any;
    preventClose?: boolean;
}
declare const SwSidebar: ({ open, width, mode, preventClose, backgroundColor, sidebarTopIcon, mobile, handleToggle, children, sx }: SwSidebarProps) => JSX.Element;
export default SwSidebar;
