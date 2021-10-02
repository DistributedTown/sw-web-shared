import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./sw-sidebar.scss";
import { NavLink, useRouteMatch } from "react-router-dom";

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

export type SwSidebarMenuItem = SwSidebarMenuItemButton | SwSidebarMenuDivider;

export interface SwSidebarProps {
  menuItems: SwSidebarMenuItem[];
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
      width: drawerWidth,
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
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
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
  let { path, url } = useRouteMatch();
  console.log(path, url, 'here');
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
          return (
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
          );
        })}
      </List>
    </Drawer>
  );
};

export default SwSidebar;
