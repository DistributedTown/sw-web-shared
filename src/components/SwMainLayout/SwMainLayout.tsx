import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Link from "antd/lib/typography/Link";
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
  onClick?: (info: any) => void;
}

export type SwMainLayoutMenuItem =
  | SwMainLayoutMenuItemLink
  | SwMainLayoutMenuItemButton;

export interface SwMainLayoutProps {
  menuItems: SwMainLayoutMenuItem[];
  backgroundUrl?: string;
  logo: string;
  contentBackgroundColor?: string;
  sidebarBackgroundColor?: string;
  collapsed?: boolean;
  width?: number | string;
  children: JSX.Element;
}

const { Content, Sider } = Layout;

const SwMainLayout = ({
  menuItems = [],
  backgroundUrl = "",
  contentBackgroundColor = "black",
  sidebarBackgroundColor = "black",
  collapsed = false,
  width = 300,
  children = "" as any,
}: SwMainLayoutProps) => {
  const [collapse, onCollapse] = useState(collapsed);
  return (
    <Layout className="sw-main-layout">
      <Sider
        collapsedWidth={100}
        width={width}
        className="sw-main-sidebar"
        collapsible
        collapsed={collapse}
        onCollapse={() => onCollapse(!collapse)}
      >
        <div className="logo" />
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          {menuItems.map((item, id) => {
            if (item.children?.length) {
              return (
                <Menu.SubMenu key={id} icon={item.icon} title={item.label}>
                  {item.children.map((subItem, subItemId) => {
                    <Menu.Item key={subItemId}>{subItem.label}</Menu.Item>;
                  })}
                </Menu.SubMenu>
              );
            }

            if (item?.type === "link") {
              return (
                <Menu.Item key={id} icon={item.icon}>
                  <Link href={item.href || "#"}>{item.label}</Link>
                </Menu.Item>
              );
            }

            return (
              <Menu.Item key={id} icon={item.icon} onClick={item.onClick}>
                {item.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div className="site-layout-background">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SwMainLayout;
