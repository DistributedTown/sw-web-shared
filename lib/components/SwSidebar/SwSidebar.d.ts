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
    menuItems: Partial<SwSidebarMenuItem>[];
    open?: boolean;
    width?: number;
    backgroundColor?: string;
    sidebarTop?: JSX.Element;
    mobile?: boolean;
    variant?: "permanent" | "persistent" | "temporary";
}
declare const SwSidebar: ({ menuItems, open, width, backgroundColor, variant, sidebarTop, mobile }: SwSidebarProps) => JSX.Element;
export default SwSidebar;
