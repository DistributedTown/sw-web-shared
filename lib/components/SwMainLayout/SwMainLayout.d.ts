import React from "react";
import "./sw-main-layout.scss";
interface SwMainLayoutMenuItemBase {
    color?: "primary" | "warn" | "secondary";
    icon?: React.Component;
    label: string;
    children?: SwMainLayoutMenuItem[];
}
interface SwMainLayoutMenuItemLink extends SwMainLayoutMenuItemBase {
    type: "link";
    href?: string;
}
interface SwMainLayoutMenuItemButton extends SwMainLayoutMenuItemBase {
    type: "button";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare type SwMainLayoutMenuItem = SwMainLayoutMenuItemLink | SwMainLayoutMenuItemButton;
export interface SwMainLayoutProps {
    menuItems: SwMainLayoutMenuItem[];
    backgroundUrl?: string;
    logo: string;
    contentBackgroundColor?: string;
    sidebarBackgroundColor?: string;
}
declare const SwMainLayout: ({ menuItems, backgroundUrl, contentBackgroundColor, sidebarBackgroundColor, }: SwMainLayoutProps) => JSX.Element;
export default SwMainLayout;
