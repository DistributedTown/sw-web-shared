import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import { createTheme, Drawer, IconButton, SvgIcon } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

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
  open?: boolean;
  width?: string;
  backgroundColor?: string;
  mode: "dock" | "close";
  sidebarTopIcon?: React.ElementType | null;
  children: JSX.Element;
  mobile?: boolean;
  handleToggle: () => any;
  sx?: any;
  preventClose?: boolean;
  className?: string;
}

const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "48px",
}));

const CustomizedDrawer = styled(Drawer)(
  ({ theme }) => `
  .sw-sidebar-divider {
    margin: 40px 0;
    height: 2px;
    background-color: ${theme.palette.background.paper};
  }

  .sw-sidebar-close-button {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  .sw-sidebar-content {
    flex: 65%;
    &.close {
      width: 100%;
    }

   &.closed.dock {
    .sw-sidebar-menu-icon {
      width: 100%;
    }
    }
  }

  &:not(.is-mobile) .MuiDrawer-paper {
    border-right: 1px solid ${theme.palette.background.paper};
  }

  .sw-sidebar-top {
    flex: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sw-sidebar-menu {
    flex: 65%;
  }

  &.MuiDrawer-docked {
    .MuiPaper-root {
      display: flex;
      align-items: center;
    }
  }

  ${theme.breakpoints.down("sm")} {
    .sw-sidebar-top {
      flex: 10%;
    }
  }

`
);

const SwSidebar = ({
  open = false,
  width = "300px",
  mode = "dock",
  preventClose = false,
  backgroundColor = "transparent",
  sidebarTopIcon = null,
  mobile = false,
  handleToggle = () => null,
  children,
  sx = {},
  className = "",
}: SwSidebarProps) => {
  const theme = createTheme();

  return (
    <CustomizedDrawer
      anchor="left"
      sx={{
        width: !mobile ? width : "100%",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(!open &&
          !mobile && {
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            [theme.breakpoints.up("sm")]: {
              width: theme.spacing(12),
            },
          }),
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          paddingX: "50px",
          overflowX: "hidden",
          backgroundColor: !mobile ? backgroundColor : "black",
          width: !mobile ? width : "100%",
          boxSizing: "border-box",
          ...(!open &&
            !mobile && {
              padding: 0,
              overflowX: "hidden",
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              [theme.breakpoints.up("sm")]: {
                width: mode === "dock" ? theme.spacing(12) : 0,
              },
              ".MuiList-root": {
                width: "50px",
                margin: "0 auto",
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
              },
            }),
          ...(sx || {}),
        },
      }}
      className={`sw-main-sidebar ${mobile ? "is-mobile" : ""} ${className}`}
      variant={mobile ? "temporary" : "permanent"}
      open={open}
    >
      {mobile && (
        <Tooltip title="Close sidebar" placement="right" color="white">
          <IconButton
            className="sw-sidebar-close-button"
            color="info"
            onClick={handleToggle}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      )}
      {sidebarTopIcon && (
        <div className="sw-sidebar-top">
          {
            <SvgIcon
              component={sidebarTopIcon}
              width={mobile || !open ? "60" : "100"}
              height={mobile ? "60" : "100"}
            />
          }
        </div>
      )}
      <div className={`sw-sidebar-content ${open ? "open" : "closed"} ${mode}`}>
        {children}
      </div>
      {!mobile && !preventClose && (
        <DrawerFooter>
          <Tooltip title={!open ? "Open" : "Close"} placement="right">
            <IconButton color="info" onClick={handleToggle}>
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </Tooltip>
        </DrawerFooter>
      )}
    </CustomizedDrawer>
  );
};

export default SwSidebar;
