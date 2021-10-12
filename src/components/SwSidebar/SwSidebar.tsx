import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./sw-sidebar.scss";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip/Tooltip";

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

export type SwSidebarMenuItem =
  | SwSidebarMenuItemButton
  | SwSidebarMenuDivider
  | SwSidebarMenuItemHref;

export interface SwSidebarProps {
  menuItems: Partial<SwSidebarMenuItem>[];
  open?: boolean;
  width?: number;
  backgroundColor?: string;
  sidebarTop?: JSX.Element;
  variant?: "permanent" | "persistent" | "temporary";
}

const DrawerRef = (drawerWidth: number, backgroundColor: string) =>
  styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      padding: "50px",
      width: drawerWidth,
      borderRight: `4px solid ${theme.palette.text.primary}`,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor,
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        padding: "10px",
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
        ".MuiList-root .MuiListItem-root": {
          padding: 0,
          ".MuiListItemText-root": {
            display: "none",
          },
        },
      }),
      "& > .MuiList-root .MuiListItem-root": {},
    },
  }));



const SwSidebar = ({
  menuItems = [],
  open = false,
  width = 300,
  backgroundColor = "transparent",
  variant = "permanent",
  sidebarTop = null,
}: SwSidebarProps) => {
  const Drawer = DrawerRef(width, backgroundColor);
  const [opened, setOpened] = React.useState(open);
  return (
    <Drawer className="sw-main-sidebar" variant={variant} open={opened}>
      <div className="sw-sidebar-top">{sidebarTop}</div>
      <List className="sw-sidebar-menu">
        {menuItems.map((item, id) => {
          if (item.type === "divider") {
            return <Divider key={id} className="sw-sidebar-divider" />;
          }

          if (item.type === "href") {
            return (
              <Tooltip
                key={id}
                title={!opened ? item.label : ""}
                placement="right"
              >
                <ListItem
                  exact={true}
                  activeClassName="active-link"
                  component={NavLink}
                  to={item.href}
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
              title={!opened ? item.label : ""}
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
    </Drawer>
  );
};

export default SwSidebar;
