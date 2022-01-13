import React from "react";
interface SwMenuItemBase {
    type: string;
    color?: "primary" | "warn" | "secondary";
    icon?: React.Component;
    component?: React.Component;
    children?: SwMenuItem[];
    disabled?: boolean;
}
interface SwMenuDivider {
    type: string;
    dashed?: boolean;
}
interface SwMenuItemButton extends SwMenuItemBase {
    label: string;
    onClick?: (info: any) => void;
}
interface SwMenuItemHref extends SwMenuItemBase {
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
declare const SwMenuItems: ({ menuItems, open, mobile, handleToggle, }: SwMenuItemsProps) => JSX.Element;
export default SwMenuItems;
