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
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
}

const SwMainLayout = ({
  menuItems = [],
  backgroundUrl = "",
  contentBackgroundColor = "black",
  sidebarBackgroundColor = "black",
}: SwMainLayoutProps) => {
  const { Content, Sider } = Layout;
  const [collapsed, onCollapsed] = useState(false);
  return (
    <Layout className="sw-main-layout">
      <Sider
        className="sw-main-sidebar"
        collapsible
        collapsed={collapsed}
        onCollapse={() => onCollapsed(!collapsed)}
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
              <Menu.Item key={id} icon={item.icon}>
                <button onClick={item.onClick}>{item.label}</button>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div className="site-layout-background">Bill is a cat.</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SwMainLayout;
