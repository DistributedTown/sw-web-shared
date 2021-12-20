import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import { styled } from "@mui/material";

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

export type SwMenuItem = SwMenuItemButton | SwMenuDivider | SwMenuItemHref;

export interface SwMenuItemsProps {
  menuItems: Partial<SwMenuItem>[];
  open?: boolean;
  mobile?: boolean;
  handleToggle: () => any;
}

const CustomizedList = styled(List)(
  ({ theme }) => `
.sw-sidebar-menu-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 18px;
    height: 18px;
    margin-left: 3px;
    margin-top: 3px;
  }
}

.MuiListItem-root {
  background-color: ${theme.palette.background.paper};
  border: 2px solid ${theme.palette.background.paper};
  height: 46px;
  cursor: pointer;
  width: 100%;


  transition: ${theme.transitions.create([
    "background-color",
    "color",
    "fill",
  ])};

  .MuiListItemText-root {
    color: ${theme.palette.primary.main};
    margin-left: 10px;
  }

  + .MuiListItem-root {
    margin-top: 25px;
  }

  .sw-sidebar-menu-icon svg {
    fill: ${theme.palette.primary.main};
  }

  &.Mui-disabled {
    background-color: ${theme.palette.text.disabled};
    border-color: ${theme.palette.background.paper};
  }

  &:not(.Mui-disabled) {
    &:hover,
    &.active-link {
      background-color: ${theme.palette.primary.main};
      border-color: ${theme.palette.background.paper};

      .MuiListItemText-root {
        color: ${theme.palette.text.primary};
      }

      .sw-sidebar-menu-icon svg {
        fill: ${theme.palette.text.primary};
      }
    }
  }
}
`
);

const SwMenuItems = ({
  menuItems = [],
  open = false,
  mobile = false,
  handleToggle = () => null,
}: SwMenuItemsProps) => {
  return (
    <CustomizedList className="sw-sidebar-menu">
      {menuItems.map((item, id) => {
        if (item.type === "divider") {
          return <Divider key={id} className="sw-sidebar-divider" />;
        }

        if (item.type === "href") {
          return (
            <Tooltip
              key={id}
              title={!open ? (item as SwMenuItemHref).label : ""}
              placement="right"
            >
              <ListItem
                onClick={mobile ? handleToggle : () => null}
                // @ts-ignore
                activeClassName="active-link"
                component={NavLink}
                disabled={item.disabled}
                to={(item as SwMenuItemHref).href}
                replace
                key={id}
              >
                <div className="sw-sidebar-menu-icon">{item.icon}</div>
                <ListItemText
                  sx={{
                    fontSize: "body1",
                  }}
                  primary={(item as SwMenuItemHref).label}
                />
              </ListItem>
            </Tooltip>
          );
        }

        return (
          <Tooltip
            key={id}
            title={!open ? (item as SwMenuItemButton).label : ""}
            placement="right"
          >
            <ListItem onClick={item.onClick} key={id} disabled={item.disabled}>
              <div className="sw-sidebar-menu-icon">{item.icon}</div>
              <ListItemText primary={(item as SwMenuItemButton).label} />
            </ListItem>
          </Tooltip>
        );
      })}
    </CustomizedList>
  );
};

export default SwMenuItems;
