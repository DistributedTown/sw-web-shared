import React from "react";
import "./sw-sidebar.scss";
interface SwSidebarMenuItemBase {
    color?: "primary" | "warn" | "secondary";
    icon?: React.Component;
    component?: React.Component;
    label: string;
    children?: SwSidebarMenuItem[];
}
interface SwSidebarMenuDivider {
    type: "divider";
    dashed?: boolean;
}
interface SwSidebarMenuItemButton extends SwSidebarMenuItemBase {
    type: "button";
    href?: string;
    onClick?: (info: any) => void;
}
export declare type SwSidebarMenuItem = SwSidebarMenuItemButton | SwSidebarMenuDivider;
export interface SwSidebarProps {
    menuItems: SwSidebarMenuItem[];
    open?: boolean;
    width?: number;
    backgroundColor?: string;
    sidebarTop?: JSX.Element;
    variant?: "permanent" | "persistent" | "temporary";
}
declare const SwSidebar: ({ menuItems, open, width, backgroundColor, variant, sidebarTop, }: SwSidebarProps) => JSX.Element;
export default SwSidebar;
