import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./sw-menu-items.scss";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip/Tooltip";

interface SwMenuItemBase {
  color?: "primary" | "warn" | "secondary";
  icon?: React.Component;
  component?: React.Component;
  children?: SwMenuItem[];
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

export type SwMenuItem =
  | SwMenuItemButton
  | SwMenuDivider
  | SwMenuItemHref;

export interface SwMenuItemsProps {
  menuItems: Partial<SwMenuItem>[];
  open?: boolean;
  mobile?: boolean;
  handleToggle: () => any
}

const SwMenuItems = ({
  menuItems = [],
  open = false,
  mobile = false,
  handleToggle = () => null
}: SwMenuItemsProps) => {
  return (
    <List className="sw-sidebar-menu">
      {menuItems.map((item, id) => {
        if (item.type === "divider") {
          return <Divider key={id} className="sw-sidebar-divider" />;
        }

        if (item.type === "href") {
          return (
            <Tooltip
              key={id}
              title={!open ? item.label : ""}
              placement="right"
            >
              <ListItem
                onClick={mobile ? handleToggle : () => null}
                activeClassName="active-link"
                component={NavLink}
                to={item.href}
                replace
                key={id}
              >
                <div className="sw-sidebar-menu-icon">{item.icon}</div>
                <ListItemText primary={item.label} />
              </ListItem>
            </Tooltip>
          );
        }

        return (
          <Tooltip
            key={id}
            title={!open ? item.label : ""}
            placement="right"
          >
            <ListItem onClick={item.onClick} key={id}>
              <div className="sw-sidebar-menu-icon">{item.icon}</div>
              <ListItemText primary={item.label} />
            </ListItem>
          </Tooltip>
        );
      })}
    </List>
  );
};

export default SwMenuItems;
