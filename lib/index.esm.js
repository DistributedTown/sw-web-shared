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

var css_248z = ".sw-main-layout {\n  flex-direction: row; }\n  .sw-main-layout .sw-main-sidebar {\n    height: 100vh;\n    background-color: #0D0D0B; }\n    .sw-main-layout .sw-main-sidebar .ant-layout-sider-children {\n      display: flex;\n      flex-direction: column;\n      padding: 24px; }\n      .sw-main-layout .sw-main-sidebar .ant-layout-sider-children .logo {\n        flex: 40%; }\n      .sw-main-layout .sw-main-sidebar .ant-layout-sider-children .ant-menu {\n        background-color: transparent;\n        flex: 60%;\n        border: none; }\n        .sw-main-layout .sw-main-sidebar .ant-layout-sider-children .ant-menu > .ant-menu-item {\n          width: 100%;\n          background-color: #FFFFFF;\n          color: rgba(0, 0, 0, 0.65);\n          transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n          .sw-main-layout .sw-main-sidebar .ant-layout-sider-children .ant-menu > .ant-menu-item + .ant-menu-item {\n            margin-top: 20px; }\n          .sw-main-layout .sw-main-sidebar .ant-layout-sider-children .ant-menu > .ant-menu-item.ant-menu-item-selected {\n            background-color: #0D0D0B;\n            color: #FFFFFF; }\n          .sw-main-layout .sw-main-sidebar .ant-layout-sider-children .ant-menu > .ant-menu-item:not(.ant-menu-item-selected):hover {\n            border: 1px solid #0D0D0B; }\n          .sw-main-layout .sw-main-sidebar .ant-layout-sider-children .ant-menu > .ant-menu-item::after {\n            border: 1px solid #D8D8D8;\n            width: 100%;\n            height: 100%;\n            transform: scaleY(1);\n            opacity: 1; }\n";
styleInject(css_248z);

var Content = Layout.Content, Sider = Layout.Sider;
var SwMainLayout = function (_a) {
    var _b = _a.menuItems, menuItems = _b === void 0 ? [] : _b; _a.backgroundUrl; _a.contentBackgroundColor; _a.sidebarBackgroundColor; var _f = _a.collapsed, collapsed = _f === void 0 ? false : _f, _g = _a.width, width = _g === void 0 ? 300 : _g, _h = _a.children, children = _h === void 0 ? "" : _h;
    var _j = useState(collapsed), collapse = _j[0], onCollapse = _j[1];
    return (React.createElement(Layout, { className: "sw-main-layout" },
        React.createElement(Sider, { collapsedWidth: 100, width: width, className: "sw-main-sidebar", collapsible: true, collapsed: collapse, onCollapse: function () { return onCollapse(!collapse); } },
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
                return (React.createElement(Menu.Item, { key: id, icon: item.icon, onClick: item.onClick }, item.label));
            }))),
        React.createElement(Layout, { className: "site-layout" },
            React.createElement(Content, { style: { margin: "0 16px" } },
                React.createElement("div", { className: "site-layout-background" }, children)))));
};

export { SwMainLayout };
//# sourceMappingURL=index.esm.js.map
