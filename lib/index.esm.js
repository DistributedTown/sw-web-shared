import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import Link from 'antd/lib/typography/Link';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".sw-main-layout .sw-main-sidebar {\n  height: 100vh; }\n  .sw-main-layout .sw-main-sidebar .ant-layout-sider-children {\n    display: flex;\n    flex-direction: column; }\n    .sw-main-layout .sw-main-sidebar .ant-layout-sider-children .logo {\n      flex: 40%; }\n    .sw-main-layout .sw-main-sidebar .ant-layout-sider-children .ant-menu {\n      flex: 60%; }\n";
styleInject(css_248z);

var SwMainLayout = function (_a) {
    var _b = _a.menuItems, menuItems = _b === void 0 ? [] : _b; _a.backgroundUrl; _a.contentBackgroundColor; _a.sidebarBackgroundColor;
    var Content = Layout.Content, Sider = Layout.Sider;
    var _f = useState(false), collapsed = _f[0], onCollapsed = _f[1];
    return (React.createElement(Layout, { className: "sw-main-layout" },
        React.createElement(Sider, { className: "sw-main-sidebar", collapsible: true, collapsed: collapsed, onCollapse: function () { return onCollapsed(!collapsed); } },
            React.createElement("div", { className: "logo" }),
            React.createElement(Menu, { defaultSelectedKeys: ["1"], mode: "inline" }, menuItems.map(function (item, id) {
                var _a;
                if ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) {
                    return (React.createElement(Menu.SubMenu, { key: id, icon: item.icon, title: item.label }, item.children.map(function (subItem, subItemId) {
                        React.createElement(Menu.Item, { key: subItemId }, subItem.label);
                    })));
                }
                if ((item === null || item === void 0 ? void 0 : item.type) === "link") {
                    return (React.createElement(Menu.Item, { key: id, icon: item.icon },
                        React.createElement(Link, { href: item.href || "#" }, item.label)));
                }
                return (React.createElement(Menu.Item, { key: id, icon: item.icon },
                    React.createElement("button", { onClick: item.onClick }, item.label)));
            }))),
        React.createElement(Layout, { className: "site-layout" },
            React.createElement(Content, { style: { margin: "0 16px" } },
                React.createElement("div", { className: "site-layout-background" }, "Bill is a cat.")))));
};

export { SwMainLayout };
//# sourceMappingURL=index.esm.js.map
