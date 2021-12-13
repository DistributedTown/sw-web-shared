import React from "react";
import "./sw-menu-items.scss";
interface SwMenuItemBase {
    color?: "primary" | "warn" | "secondary";
    icon?: React.Component;
    component?: React.Component;
    children?: SwMenuItem[];
    disabled?: boolean;
}
interface SwMenuDivider {
    type: "divider";
    dashed?: boolean;
}
interface SwMenuItemButton extends SwMenuItemBase {
    type: "button";
    label: string;
    onClick?: (info: any) => void;
}
interface SwMenuItemHref extends SwMenuItemBase {
    type: "href";
    label: string;
    href?: string;
}
export declare type SwMenuItem = SwMenuItemButton | SwMenuDivider | SwMenuItemHref;
export interface SwMenuItemsProps {
    menuItems: Partial<SwMenuItem>[];
    open?: boolean;
    mobile?: boolean;
    handleToggle: () => any;
}
declare const SwMenuItems: ({ menuItems, open, mobile, handleToggle }: SwMenuItemsProps) => JSX.Element;
export default SwMenuItems;
