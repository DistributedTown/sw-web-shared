'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');
var Link = require('antd/lib/typography/Link');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Link__default = /*#__PURE__*/_interopDefaultLegacy(Link);

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

var Content = antd.Layout.Content, Sider = antd.Layout.Sider;
var SwMainLayout = function (_a) {
    var _b = _a.menuItems, menuItems = _b === void 0 ? [] : _b; _a.backgroundUrl; _a.contentBackgroundColor; _a.sidebarBackgroundColor; var _f = _a.collapsed, collapsed = _f === void 0 ? false : _f, _g = _a.width, width = _g === void 0 ? 300 : _g, _h = _a.children, children = _h === void 0 ? "" : _h;
    var _j = React.useState(collapsed), collapse = _j[0], onCollapse = _j[1];
    return (React__default["default"].createElement(antd.Layout, { className: "sw-main-layout" },
        React__default["default"].createElement(Sider, { collapsedWidth: 100, width: width, className: "sw-main-sidebar", collapsible: true, collapsed: collapse, onCollapse: function () { return onCollapse(!collapse); } },
            React__default["default"].createElement("div", { className: "logo" }),
            React__default["default"].createElement(antd.Menu, { defaultSelectedKeys: ["1"], mode: "inline" }, menuItems.map(function (item, id) {
                var _a;
                if ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) {
                    return (React__default["default"].createElement(antd.Menu.SubMenu, { key: id, icon: item.icon, title: item.label }, item.children.map(function (subItem, subItemId) {
                        React__default["default"].createElement(antd.Menu.Item, { key: subItemId }, subItem.label);
                    })));
                }
                if ((item === null || item === void 0 ? void 0 : item.type) === "link") {
                    return (React__default["default"].createElement(antd.Menu.Item, { key: id, icon: item.icon },
                        React__default["default"].createElement(Link__default["default"], { href: item.href || "#" }, item.label)));
                }
                return (React__default["default"].createElement(antd.Menu.Item, { key: id, icon: item.icon, onClick: item.onClick }, item.label));
            }))),
        React__default["default"].createElement(antd.Layout, { className: "site-layout" },
            React__default["default"].createElement(Content, { style: { margin: "0 16px" } },
                React__default["default"].createElement("div", { className: "site-layout-background" }, children)))));
};

exports.SwMainLayout = SwMainLayout;
//# sourceMappingURL=index.js.map
