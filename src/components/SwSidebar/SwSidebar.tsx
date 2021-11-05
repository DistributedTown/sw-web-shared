import React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./sw-sidebar.scss";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import { createTheme, Drawer, IconButton, SvgIcon } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';

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
  sidebarTopIcon?: React.ElementType;
  mobile?: boolean;
  handleToggle: () => any
}

const DrawerFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '48px'
}));

const SwSidebar = ({
  menuItems = [],
  open = false,
  width = 300,
  backgroundColor = "transparent",
  sidebarTopIcon = null,
  mobile = false,
  handleToggle = () => null
}: SwSidebarProps) => {
  const theme = createTheme();

  return (
    <Drawer
      anchor="left"
      sx={{
        width: !mobile ? width : '100%',
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(!open && !mobile && {
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          [theme.breakpoints.up("sm")]: {
            width: theme.spacing(12),
          }
        }),
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          paddingX: '50px',
          overflowX: "hidden",
          backgroundColor: !mobile ? backgroundColor : 'black',
          width: !mobile ? width : '100%',
          boxSizing: 'border-box',
          ...(!open && !mobile && {
            padding: 0,
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            [theme.breakpoints.up("sm")]: {
              width: theme.spacing(12),
            },
            ".MuiList-root": {
              width: '50px',
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              ".MuiListItem-root": {
                padding: 0,
                ".MuiListItemText-root": {
                  display: "none",
                },
              },
            }
          }),
        },
      }}
      className={`sw-main-sidebar ${mobile ? 'is-mobile' : ''}`}
      variant={mobile ? 'temporary' : 'permanent'}
      open={open}>
      {
        mobile && (<Tooltip
          title="Close sidebar"
          placement="right"
          color="white"
        >
          <IconButton className="sw-sidebar-close-button" color="secondary" onClick={handleToggle}>
            <CloseIcon />
          </IconButton>
        </Tooltip>)
      }
      <div className="sw-sidebar-top">{
        <SvgIcon component={sidebarTopIcon} width={mobile || !open ? '60' : '100'} height={mobile ? '60' : '100'} />
      }</div>
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
      {!mobile && <DrawerFooter>
        <Tooltip
          title={!open ? 'Open' : "Close"}
          placement="right"
        >
          <IconButton color="secondary" onClick={handleToggle}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Tooltip>

      </DrawerFooter>}
    </Drawer>
  );
};

export default SwSidebar;
