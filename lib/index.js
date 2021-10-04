'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Box = require('@mui/material/Box');
var Container = require('@mui/material/Container');
var styles = require('@mui/material/styles');
var MuiDrawer = require('@mui/material/Drawer');
var List = require('@mui/material/List');
var Divider = require('@mui/material/Divider');
var ListItem = require('@mui/material/ListItem');
var ListItemText = require('@mui/material/ListItemText');
var reactRouterDom = require('react-router-dom');
var Tooltip = require('@mui/material/Tooltip/Tooltip');
var material = require('@mui/material');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var Container__default = /*#__PURE__*/_interopDefaultLegacy(Container);
var MuiDrawer__default = /*#__PURE__*/_interopDefaultLegacy(MuiDrawer);
var List__default = /*#__PURE__*/_interopDefaultLegacy(List);
var Divider__default = /*#__PURE__*/_interopDefaultLegacy(Divider);
var ListItem__default = /*#__PURE__*/_interopDefaultLegacy(ListItem);
var ListItemText__default = /*#__PURE__*/_interopDefaultLegacy(ListItemText);
var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);

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

var css_248z$2 = ".sw-main-box > .MuiBox-root > .MuiContainer-root {\n  height: calc(100% - 64px) !important; }\n";
styleInject(css_248z$2);

var SwLayout = function (_a) {
    var _b = _a.backgroundUrl, backgroundUrl = _b === void 0 ? null : _b; _a.contentBackgroundColor; var _d = _a.children, children = _d === void 0 ? null : _d, _e = _a.drawer, drawer = _e === void 0 ? null : _e, _f = _a.className, className = _f === void 0 ? "" : _f;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "sw-background " + className, style: {
                display: "flex",
                backgroundImage: backgroundUrl,
                backgroundColor: "black",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "fixed",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: -1,
            } }),
        React__default["default"].createElement(Box__default["default"], { sx: {
                display: "flex",
            }, className: "sw-main-box " + className },
            drawer,
            React__default["default"].createElement(Box__default["default"], { component: "main", sx: {
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                } },
                React__default["default"].createElement(Container__default["default"], { maxWidth: "lg", sx: { mt: 4, mb: 4 } }, children)))));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var css_248z$1 = ".sw-main-sidebar .sw-sidebar-divider {\n  margin: 40px 0;\n  height: 2px;\n  background-color: #FFFFFF; }\n\n.sw-main-sidebar .sw-sidebar-menu-icon {\n  width: 26px;\n  height: 26px;\n  margin: 10px; }\n\n.sw-main-sidebar .sw-sidebar-top {\n  flex: 35%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.sw-main-sidebar .sw-sidebar-menu {\n  flex: 65%; }\n\n.sw-main-sidebar .MuiListItem-root {\n  background-color: #FFFFFF;\n  border: 2px solid #969696;\n  height: 46px;\n  cursor: pointer; }\n  .sw-main-sidebar .MuiListItem-root .MuiListItemText-root {\n    color: #0D0D0B; }\n  .sw-main-sidebar .MuiListItem-root + .MuiListItem-root {\n    margin-top: 20px; }\n  .sw-main-sidebar .MuiListItem-root:hover, .sw-main-sidebar .MuiListItem-root.active-link {\n    background-color: #0D0D0B;\n    border-color: #969696; }\n    .sw-main-sidebar .MuiListItem-root:hover .MuiListItemText-root, .sw-main-sidebar .MuiListItem-root.active-link .MuiListItemText-root {\n      color: #FFFFFF; }\n";
styleInject(css_248z$1);

var DrawerRef = function (drawerWidth, backgroundColor) {
    return styles.styled(MuiDrawer__default["default"], {
        shouldForwardProp: function (prop) { return prop !== "open"; },
    })(function (_a) {
        var _b;
        var theme = _a.theme, open = _a.open;
        return ({
            "& .MuiDrawer-paper": __assign(__assign({ position: "relative", whiteSpace: "nowrap", padding: "50px", width: drawerWidth, borderRight: "4px solid " + theme.palette.text.primary, transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }), backgroundColor: backgroundColor, boxSizing: "border-box" }, (!open && (_b = {
                    overflowX: "hidden",
                    transition: theme.transitions.create("width", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    padding: "10px",
                    width: theme.spacing(7)
                },
                _b[theme.breakpoints.up("sm")] = {
                    width: theme.spacing(9),
                },
                _b[".MuiList-root .MuiListItem-root"] = {
                    padding: 0,
                    ".MuiListItemText-root": {
                        display: "none",
                    },
                },
                _b))), { "& > .MuiList-root .MuiListItem-root": {} }),
        });
    });
};
var SwSidebar = function (_a) {
    var _b = _a.menuItems, menuItems = _b === void 0 ? [] : _b, _c = _a.open, open = _c === void 0 ? false : _c, _d = _a.width, width = _d === void 0 ? 300 : _d, _e = _a.backgroundColor, backgroundColor = _e === void 0 ? "transparent" : _e, _f = _a.variant, variant = _f === void 0 ? "permanent" : _f, _g = _a.sidebarTop, sidebarTop = _g === void 0 ? null : _g;
    var _h = reactRouterDom.useRouteMatch(); _h.path; _h.url;
    var Drawer = DrawerRef(width, backgroundColor);
    var _j = React__default["default"].useState(open), opened = _j[0]; _j[1];
    return (React__default["default"].createElement(Drawer, { className: "sw-main-sidebar", variant: variant, open: opened },
        React__default["default"].createElement("div", { className: "sw-sidebar-top" }, sidebarTop),
        React__default["default"].createElement(List__default["default"], { className: "sw-sidebar-menu" }, menuItems.map(function (item, id) {
            if (item.type === "divider") {
                return React__default["default"].createElement(Divider__default["default"], { key: id, className: "sw-sidebar-divider" });
            }
            return (React__default["default"].createElement(Tooltip__default["default"], { key: id, title: !opened ? item.label : "", placement: "right" },
                React__default["default"].createElement(ListItem__default["default"], { exact: true, activeClassName: "active-link", component: reactRouterDom.NavLink, to: item.href, key: id },
                    React__default["default"].createElement("div", { className: "sw-sidebar-menu-icon" }, item.icon),
                    React__default["default"].createElement(ListItemText__default["default"], { primary: item.label }))));
        }))));
};

var MainBackgroundSvg = function (_a) {
    var _b = _a === void 0 ? {
        height: "auto",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default["default"].createElement("svg", { style: { height: height, width: width }, className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1366.618 768.358" },
        React__default["default"].createElement("g", { "data-name": "Group 1819", transform: "translate(21880.771 21782)" },
            React__default["default"].createElement("path", { fill: "#161615", d: "M0 0H1363.67V766.738H0z", "data-name": "Rectangle 1855", transform: "translate(-21878.143 -21782)" }),
            React__default["default"].createElement("g", { "data-name": "Group 1816", transform: "translate(-21513.447 -21091.498)" },
                React__default["default"].createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 5" },
                    React__default["default"].createElement("path", { d: "M20.65.113L0 20.763v44.484h44.4l20.483-20.483V.113z", "data-name": "Path 11" }),
                    React__default["default"].createElement("path", { d: "M0 20.77h44L64.766.003", "data-name": "Path 12" }),
                    React__default["default"].createElement("path", { d: "M0 65.251l21.322-21.322h43.336", "data-name": "Path 13" }),
                    React__default["default"].createElement("path", { d: "M0 0L0 44.559", "data-name": "Line 1", transform: "translate(44.072 20.537)" }),
                    React__default["default"].createElement("path", { d: "M0 0L0 43.812", "data-name": "Line 2", transform: "translate(21.135 .186)" })),
                React__default["default"].createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 6", transform: "translate(51.565)" },
                    React__default["default"].createElement("path", { d: "M20.65.113L0 20.763v44.484h44.4l20.483-20.483V.113z", "data-name": "Path 14" }),
                    React__default["default"].createElement("path", { d: "M0 20.77h44L64.767.003", "data-name": "Path 15" }),
                    React__default["default"].createElement("path", { d: "M0 65.251l21.322-21.322h43.332", "data-name": "Path 16" }),
                    React__default["default"].createElement("path", { d: "M0 0L0 44.559", "data-name": "Line 3", transform: "translate(44.072 20.537)" }),
                    React__default["default"].createElement("path", { d: "M0 0L0 43.812", "data-name": "Line 4", transform: "translate(21.135 .186)" })),
                React__default["default"].createElement("g", { "data-name": "Group 7", transform: "translate(78.03 27.408)", style: { mixBlendMode: "multiply", isolation: "isolate" } },
                    React__default["default"].createElement("circle", { cx: "5.417", cy: "5.417", r: "5.417", fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Ellipse 1" }))),
            React__default["default"].createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 1814", transform: "translate(-21857.961 -21519.049)" },
                React__default["default"].createElement("path", { d: "M2.884 5.764A2.884 2.884 0 100 2.881a2.884 2.884 0 002.884 2.883z", "data-name": "Path 2" }),
                React__default["default"].createElement("path", { d: "M2.884 40.255A2.884 2.884 0 100 37.372a2.884 2.884 0 002.884 2.883z", "data-name": "Path 3" }),
                React__default["default"].createElement("path", { d: "M2.884 74.743A2.883 2.883 0 100 71.86a2.884 2.884 0 002.884 2.883z", "data-name": "Path 4" }),
                React__default["default"].createElement("path", { d: "M2.884 109.231A2.883 2.883 0 100 106.348a2.884 2.884 0 002.884 2.883z", "data-name": "Path 5" }),
                React__default["default"].createElement("path", { d: "M2.884 143.719A2.884 2.884 0 100 140.835a2.884 2.884 0 002.884 2.884z", "data-name": "Path 6" }),
                React__default["default"].createElement("path", { d: "M27.798 74.743a2.883 2.883 0 10-2.883-2.883 2.883 2.883 0 002.883 2.883z", "data-name": "Path 7" }),
                React__default["default"].createElement("path", { d: "M27.798 109.231a2.883 2.883 0 10-2.883-2.883 2.883 2.883 0 002.883 2.883z", "data-name": "Path 8" }),
                React__default["default"].createElement("path", { d: "M27.798 143.719a2.884 2.884 0 10-2.883-2.884 2.884 2.884 0 002.883 2.884z", "data-name": "Path 9" })),
            React__default["default"].createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M-21876.9-21642.878l234.052 261.7v219.94l-189.365 145.976", "data-name": "Path 1589" }),
            React__default["default"].createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M-21875.65-21418.275l233.79-59.759-169.839 147.889 88.592 50.688 85.447-196.908 55.948 189.156-227.948 22.348-65.99 179.1", "data-name": "Path 1590" }),
            React__default["default"].createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M64.999 0L0 48.245", "data-name": "Line 51", transform: "translate(-21880.473 -21288.629)" }),
            React__default["default"].createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 1817", transform: "translate(-21289.793 -21188.834)" },
                React__default["default"].createElement("g", { "data-name": "Group 9" },
                    React__default["default"].createElement("path", { d: "M58.384 27.377l-8.835-4.3-26.815 2", "data-name": "Path 1-2" }),
                    React__default["default"].createElement("path", { d: "M73.28 63.037L62.29 79.224V0", "data-name": "Path 1-2" }),
                    React__default["default"].createElement("path", { d: "M35.616 50.589V28.202", "data-name": "Path 1-2" }),
                    React__default["default"].createElement("path", { d: "M62.291 79.224l10.99-16.187-10.99 16.187L50.284 54.04l8.1-2.617 14.9 11.614V15.416L62.294 0 49.552 23.076l.735 30.964", "data-name": "Path 1-2" }),
                    React__default["default"].createElement("path", { d: "M22.735 25.071v27.637L54.619 172.37", "data-name": "Path 1-2" }),
                    React__default["default"].createElement("path", { d: "M58.388 50.589h-22.77V28.202l-12.879-3.131 12.879 3.131 22.769-.826v24.047l-19.175 6.285L.005 70.559", "data-name": "Path 1-2" }),
                    React__default["default"].createElement("path", { d: "M.931 7.699l-.93 62.859.93-62.859 61.361-7.7", "data-name": "Path 1-2" })),
                React__default["default"].createElement("path", { d: "M0 11.96L14.898 0", "data-name": "Line 6", transform: "translate(58.382 15.416)" })),
            React__default["default"].createElement("g", { "data-name": "Group 1815", transform: "translate(-20578.834 -21375.16)" },
                React__default["default"].createElement("path", { fill: "#fff", d: "M3259.638 739.111v29.067a35.3 35.3 0 000 70.591v29.067a64.362 64.362 0 010-128.724z", "data-name": "Path 10", transform: "translate(-3195.276 -739.111)" })),
            React__default["default"].createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M-20514.474-21113.377l-146.653-122.855-226.8 222.232", "data-name": "Path 1591" }))));
};

function JoinSelSvg(_a) {
    var _b = _a === void 0 ? {
        height: "0",
        width: "0",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default["default"].createElement("svg", { style: { height: height, width: width }, className: className, viewBox: "0 0 52.492 36", xmlns: "http://www.w3.org/2000/svg" },
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default["default"].createElement("stop", { offset: "0", stopColor: "#fff" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default["default"].createElement("path", { fill: "url(#linear-gradient)", d: "M26.107 5.655c-4.52 0-8.186 4.278-8.186 9.556a9.863 9.863 0 004.351 8.444l-3 1.391-7.987 3.7a2.022 2.022 0 00-1.156 1.965v8.8a2.046 2.046 0 001.793 2.142h28.414a2.031 2.031 0 001.852-2.142v-8.8a2.021 2.021 0 00-1.156-1.965l-7.7-3.7-3.2-1.515a9.917 9.917 0 004.158-8.32c0-5.278-3.664-9.556-8.186-9.556zM12.9 9.016a6.319 6.319 0 00-4.659 2.257 8.74 8.74 0 00-1.939 5.44A8.271 8.271 0 009.895 23.6L.926 27.767A1.526 1.526 0 000 29.387v7.06c.048.936.534 1.723 1.446 1.737h5.963v-7.468a4.862 4.862 0 012.721-4.4l5.959-2.836a5.723 5.723 0 001.331-1.1 13.412 13.412 0 01-1.215-12.327 6.564 6.564 0 00-3.3-1.043zm26.622 0a6.323 6.323 0 00-3.413 1.156 13.52 13.52 0 01-1.158 12.1 6.117 6.117 0 001.568 1.328l5.729 2.721a4.943 4.943 0 012.662 4.4v7.467h6.134a1.6 1.6 0 001.448-1.737v-7.064a1.655 1.655 0 00-.926-1.62l-8.854-4.227a8.479 8.479 0 003.472-6.83 8.7 8.7 0 00-1.939-5.44 6.456 6.456 0 00-4.717-2.257z", transform: "translate(0 -5.655)" })));
}

function DitoLogoSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 76.397 76.397" },
        React__default["default"].createElement("g", { xmlns: "http://www.w3.org/2000/svg", fill: "#fff", "data-name": "Group 1818", transform: "translate(-2538.506 -214.397)" },
            React__default["default"].createElement("g", { xmlns: "http://www.w3.org/2000/svg", "data-name": "Group 12", transform: "translate(2538.913 214.804)" },
                React__default["default"].createElement("g", { "data-name": "Path 1-2" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2598.4 290.586a.2.2 0 01-.035 0l-59.042-8.214a.245.245 0 01-.117-.435l21.455-16.846V239.13l-20.573-16.392a.244.244 0 01-.06-.312.246.246 0 01.3-.109l27.758 10.334 21.3-1.588 8.8-15.934a.243.243 0 01.2-.125.224.224 0 01.188.072.221.221 0 01.031.038l10.411 14.6a.259.259 0 01.046.132V275a.247.247 0 01-.035.126l-.009.013-10.418 15.34c-.006.007-.011.015-.018.021a.246.246 0 01-.073.058.263.263 0 01-.069.023h-.041zm-58.439-8.621l58.022 8.072-7.548-15.833-22.559-1.277a.227.227 0 01-.047-.007h-.007a.242.242 0 01-.107-.066.128.128 0 01-.02-.023.248.248 0 01-.045-.136l.028-6.9-6.684-.324zm58.684-7.3v14.877l9.726-14.327zm-7.652-.433l7.162 15.024v-14.615zm7.652-.058l9.4.532-9.4-7.331zm0-7.42l9.927 7.74v-44.369l-9.927.74zm-7.893 6.973l7.4.419V267l-3.508-2.734-7.287 2.355zm-22.464-1.271l21.907 1.24-3.333-6.992-15-.726zm-.129-6.656l-.024 5.921 3.18-5.769zm26.537-2.058a.244.244 0 01.15.052l3.309 2.579V230.9l-8.468.631-3.119 5.649.688 28.955 7.365-2.38a.241.241 0 01.079-.009zm-22.574 1.76l14.646.708-.691-29.087a.25.25 0 01.031-.124l3-5.427-20.656 1.54 4.878 8.746a.246.246 0 01.031.119V263.2a.233.233 0 01-.031.118zm-3.961-.191l3.417.165 1.078-1.956-4.491.739zm-4.939-.239l4.45.216v-.949zm-21.629-41.762l19.466 15.509a.244.244 0 01.093.191v25.91l6.527-1.075.125-30.776zm26.7 10.522l-.121 29.931 4.7-.773v-20.946zm29.867-17.637l-8.186 14.824 8.186-.61zm.49-.182v14.36l9.72-.725z", "data-name": "Path 22", transform: "translate(-2539.113 -215.004)" })),
                React__default["default"].createElement("g", { "data-name": "Path 1-2", transform: "translate(.001 23.763)" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2539.358 294.032a.245.245 0 01-.076-.477l55.169-18.082v-.373h-21.337a.245.245 0 01-.244-.245v-21.023l-12.021-2.923a.245.245 0 11.116-.475l12.174 2.96 21.548-.782a.238.238 0 01.179.069.244.244 0 01.074.176v22.793a.245.245 0 01-.168.232l-55.337 18.138a.255.255 0 01-.077.012zm34-19.418h21.092v-21.5l-21.092.765z", "data-name": "Path 23", transform: "translate(-2539.114 -250.426)" })),
                React__default["default"].createElement("g", { "data-name": "Group 11", transform: "translate(55.338 14.614)" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2621.847 248.612a.245.245 0 01-.153-.435l14.121-11.335a.244.244 0 01.306.381L2622 248.558a.244.244 0 01-.153.054z", "data-name": "Path 24", transform: "translate(-2621.602 -236.787)" }))),
            React__default["default"].createElement("g", { "data-name": "Group 15", transform: "translate(2538.506 214.397)" },
                React__default["default"].createElement("g", { "data-name": "Path 1-2", transform: "translate(21.548 21.872)" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2605.068 252.383a.657.657 0 01-.285-.066l-8.216-4-25.24 1.878a.641.641 0 01-.7-.6.652.652 0 01.6-.7l25.416-1.89a.639.639 0 01.333.064l8.375 4.076a.653.653 0 01-.287 1.24z", "data-name": "Path 25", transform: "translate(-2570.626 -247.001)" })),
                React__default["default"].createElement("g", { "data-name": "Path 1-2" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2539.158 282.581h-.009a.653.653 0 01-.643-.652v-.01l.881-59.58a.649.649 0 01.17-.417.65.65 0 01.146-.12.652.652 0 01.262-.088l58.151-7.3a.653.653 0 01.163 1.3l-57.6 7.228-.873 59.013a.653.653 0 01-.648.626z", "data-name": "Path 26", transform: "translate(-2538.506 -214.397)" })),
                React__default["default"].createElement("g", { "data-name": "Group 13", transform: "translate(21.548 23.762)" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2597.391 278.583h-.031l-26.114-1.263a.654.654 0 01-.621-.652v-26.2a.653.653 0 01.653-.653.652.652 0 01.652.653v25.574l25.373 1.227 7.111-2.3v-22.312a.653.653 0 111.305 0v22.793a.651.651 0 01-.452.621l-7.676 2.48a.661.661 0 01-.2.032z", "data-name": "Path 27", transform: "translate(-2570.626 -249.819)" })),
                React__default["default"].createElement("g", { "data-name": "Group 14" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2598.2 290.794a.573.573 0 01-.09-.006l-59.043-8.214a.652.652 0 11.18-1.292l58.636 8.157 10.08-15.188v-44.379l-10.294-14.443a.652.652 0 111.063-.757l10.417 14.612a.649.649 0 01.121.378v44.785a.649.649 0 01-.109.361l-10.417 15.692a.65.65 0 01-.544.294z", "data-name": "Path 28", transform: "translate(-2538.505 -214.398)" }))))));
}

var css_248z = "";
styleInject(css_248z);

var CustomizedButton = material.styled(material.Button)(function (_a) {
    var theme = _a.theme;
    return "\n  width: 100%;\n  background-color: " + theme.palette.text.primary + ";\n  border: 2px solid " + theme.palette.text.primary + ";\n  height: 56px;\n  cursor: pointer;\n  line-height: 0;\n  color: " + theme.palette.primary.main + ";\n\n\n  &.Mui-disabled {\n    background-color: " + theme.palette.text.primary + ";\n  }\n\n  &:hover,\n  &.active-link {\n    color: " + theme.palette.text.primary + ";\n    background-color: " + theme.palette.primary.main + ";\n  }\n";
});
var SwButton = function (_a) {
    var label = _a.label, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.variant, variant = _c === void 0 ? "contained" : _c, _d = _a.color, color = _d === void 0 ? "primary" : _d, rest = __rest(_a, ["label", "className", "variant", "color"]);
    return (React__namespace.createElement(CustomizedButton, __assign({}, rest, { variant: variant, color: color, className: "\"sw-button\" " + className }),
        React__namespace.createElement("span", { className: "sw-btn-label" }, label)));
};

var SwLogoSvg = function (_a) {
    var _b = _a === void 0 ? {
        height: "auto",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default["default"].createElement("svg", { style: { height: height, width: width }, className: className, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 360 360" },
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { x1: "0.281", x2: "0.538", y1: "0.79", y2: "0.324", gradientUnits: "objectBoundingBox" },
                React__default["default"].createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0" }),
                React__default["default"].createElement("stop", { offset: "0.512", stopColor: "#d1d1d1", stopOpacity: "0.137" }),
                React__default["default"].createElement("stop", { offset: "0.917", stopColor: "#434342", stopOpacity: "0.569" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#171716", stopOpacity: "0.698" })),
            React__default["default"].createElement("linearGradient", { x1: "0.281", x2: "0.538", y1: "0.149", y2: "-0.316", gradientUnits: "objectBoundingBox" },
                React__default["default"].createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0" }),
                React__default["default"].createElement("stop", { offset: "0.546", stopColor: "#cacac9", stopOpacity: "0.137" }),
                React__default["default"].createElement("stop", { offset: "0.977", stopColor: "#232322", stopOpacity: "0.569" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#171716", stopOpacity: "0.6" })),
            React__default["default"].createElement("linearGradient", { x1: "0.951", x2: "0.377", y1: "0.714", y2: "0.436", gradientUnits: "objectBoundingBox" },
                React__default["default"].createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0" }),
                React__default["default"].createElement("stop", { offset: "0.721", stopColor: "#9f9f9e", stopOpacity: "0.125" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#171716", stopOpacity: "0.302" })),
            React__default["default"].createElement("linearGradient", { x1: "0.141", x2: "0.557", y1: "0.653", y2: "0.499", gradientUnits: "objectBoundingBox" },
                React__default["default"].createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0" }),
                React__default["default"].createElement("stop", { offset: "0.819", stopColor: "#525251", stopOpacity: "0.298" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#171716", stopOpacity: "0.4" })),
            React__default["default"].createElement("linearGradient", { id: "linear-gradient-5", x1: "0.599", x2: "0.332", y1: "0.4", y2: "0.666", gradientUnits: "objectBoundingBox" },
                React__default["default"].createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0" }),
                React__default["default"].createElement("stop", { offset: "0.672", stopColor: "#c4c4c3", stopOpacity: "0.102" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#171716", stopOpacity: "0.4" })),
            React__default["default"].createElement("linearGradient", { x1: "1.117", x2: "-0.11", y1: "0.807", y2: "0.171", xlinkHref: "#linear-gradient-5" }),
            React__default["default"].createElement("linearGradient", { x1: "0.25", x2: "1.009", y1: "-0.483", y2: "0.983", xlinkHref: "#linear-gradient-5" })),
        React__default["default"].createElement("g", { "data-name": "Group 12", transform: "translate(-90 -88)" },
            React__default["default"].createElement("circle", { cx: "180", cy: "180", r: "180", fill: "#f4f2f2", "data-name": "Ellipse 7", transform: "translate(90 88)" }),
            React__default["default"].createElement("g", { "data-name": "Group 11", transform: "translate(-8.621 -6.967)" },
                React__default["default"].createElement("path", { d: "M228.563 277.684l-39.942-30.15v23.727s29.112 14.987 28.445 14.525 11.497-8.102 11.497-8.102z", fill: "url(#linear-gradient)", "data-name": "Path 35", transform: "translate(0 -2.872)" }),
                React__default["default"].createElement("path", { d: "M228.563 278.68l-39.942 30.15V285.1s29.112-14.988 28.445-14.525 11.497 8.105 11.497 8.105z", fill: "url(#linear-gradient-2)", "data-name": "Path 36", transform: "translate(0 -3.924)" }),
                React__default["default"].createElement("path", { d: "M271.864 336.005l-20.42 35.735 23.981.309 7.817-37.985z", fill: "url(#linear-gradient-3)", "data-name": "Path 37", transform: "translate(-2.872 -6.827)" }),
                React__default["default"].createElement("path", { d: "M312.693 371.344l-29.3-51.116-3.555 17.267 14.866 33.849z", fill: "url(#linear-gradient-4)", "data-name": "Path 38", transform: "translate(-4.17 -6.194)" }),
                React__default["default"].createElement("path", { d: "M251.444 185.017l35.9 76.3 84 44.184.146-24.127-69.59-31.913-26.476-63.861z", fill: "url(#linear-gradient-5)", "data-name": "Path 39", transform: "translate(-2.872 -.014)" }),
                React__default["default"].createElement("path", { d: "M0 0H59.951V59.951H0z", fill: "#040506", "data-name": "Rectangle 41", transform: "rotate(-180 124.286 182.575)" }),
                React__default["default"].createElement("path", { d: "M0 0H35.971V35.971H0z", fill: "#fff", "data-name": "Rectangle 42", transform: "rotate(-180 118.291 176.58)" }),
                React__default["default"].createElement("circle", { cx: "5.995", cy: "5.995", r: "5.995", fill: "#040506", "data-name": "Ellipse 4", transform: "translate(212.601 329.178)" }),
                React__default["default"].createElement("path", { d: "M0 0H59.951V59.951H0z", fill: "#040506", "data-name": "Rectangle 43", transform: "rotate(-180 184.237 182.575)" }),
                React__default["default"].createElement("path", { d: "M0 0H35.971V35.971H0z", fill: "#fff", "data-name": "Rectangle 44", transform: "rotate(-180 178.242 176.58)" }),
                React__default["default"].createElement("circle", { cx: "5.995", cy: "5.995", r: "5.995", fill: "#040506", "data-name": "Ellipse 5", transform: "translate(332.504 329.178)" }),
                React__default["default"].createElement("path", { d: "M0 0H59.951V59.951H0z", fill: "#040506", "data-name": "Rectangle 45", transform: "rotate(180 124.286 122.331)" }),
                React__default["default"].createElement("path", { d: "M0 0H35.971V35.971H0z", fill: "#fff", "data-name": "Rectangle 46", transform: "rotate(180 118.291 116.336)" }),
                React__default["default"].createElement("circle", { cx: "5.995", cy: "5.995", r: "5.995", fill: "#040506", "data-name": "Ellipse 6", transform: "translate(212.601 208.691)" }),
                React__default["default"].createElement("path", { d: "M0 0H71.942V11.99H0z", fill: "#040506", "data-name": "Rectangle 47", transform: "translate(212.601 268.935)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 48", transform: "translate(248.572 256.945)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 49", transform: "translate(224.591 256.945)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V23.981H0z", fill: "#040506", "data-name": "Rectangle 50", transform: "translate(260.562 244.954)" }),
                React__default["default"].createElement("path", { d: "M0 0H83.932V11.99H0z", fill: "#040506", "data-name": "Rectangle 51", transform: "translate(284.543 209.276)" }),
                React__default["default"].createElement("path", { d: "M0 0H35.971V11.99H0z", fill: "#040506", "data-name": "Rectangle 52", transform: "translate(332.504 221.266)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 53", transform: "translate(356.484 185.295)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 54", transform: "translate(356.484 233.256)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 55", transform: "translate(332.504 185.295)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 56", transform: "translate(345.039 197.831)" }),
                React__default["default"].createElement("path", { d: "M0 0H35.971V11.99H0z", fill: "#040506", "data-name": "Rectangle 57", transform: "translate(296.533 245.247)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 58", transform: "translate(344.494 245.247)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 59", transform: "translate(332.504 256.945)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 60", transform: "translate(356.63 281.071)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 61", transform: "translate(356.484 256.945)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 62", transform: "translate(332.504 233.256)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 63", transform: "translate(308.523 233.256)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 64", transform: "translate(296.533 221.266)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 65", transform: "translate(308.523 185.295)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 66", transform: "translate(272.552 185.295)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 67", transform: "translate(308.523 197.286)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 68", transform: "translate(296.533 197.286)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 69", transform: "translate(320.513 197.286)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V24.273H0z", fill: "#040506", "data-name": "Rectangle 70", transform: "translate(260.562 304.906)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V24.273H0z", fill: "#040506", "data-name": "Rectangle 71", transform: "translate(284.543 304.906)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V36.263H0z", fill: "#040506", "data-name": "Rectangle 72", transform: "translate(272.552 304.906)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V12.136H0z", fill: "#040506", "data-name": "Rectangle 73", transform: "translate(272.552 292.842)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V12.136H0z", fill: "#040506", "data-name": "Rectangle 74", transform: "translate(284.543 341.096)" }),
                React__default["default"].createElement("path", { d: "M0 0H35.971V11.99H0z", fill: "#040506", "data-name": "Rectangle 75", transform: "translate(236.582 280.925)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 76", transform: "translate(212.601 280.925)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 77", transform: "translate(248.572 292.916)" }),
                React__default["default"].createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 78", transform: "translate(200.611 280.925)" }),
                React__default["default"].createElement("path", { d: "M0 0H27.196V11.99H0z", fill: "#040506", "data-name": "Rectangle 79", transform: "translate(200.611 256.945)" }),
                React__default["default"].createElement("path", { d: "M251.444 184.711l22.706 48.545 20.82-.584-19.546-47.372z", fill: "url(#linear-gradient-6)", "data-name": "Path 45", transform: "translate(-2.872)" }),
                React__default["default"].createElement("path", { d: "M327.993 285.534h46.852v24.273z", fill: "url(#linear-gradient-7)", "data-name": "Path 46", transform: "translate(-6.371 -4.609)" })))));
};

function DitoLogoFullSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 279.897 76.397" },
        React__default["default"].createElement("g", { "data-name": "Group 1818", transform: "translate(-2538.506 -214.397)" },
            React__default["default"].createElement("g", { "data-name": "Group 12", transform: "translate(2538.913 214.804)" },
                React__default["default"].createElement("g", { "data-name": "Path 1-2" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2598.4 290.586a.2.2 0 01-.035 0l-59.042-8.214a.245.245 0 01-.117-.435l21.455-16.846V239.13l-20.573-16.392a.244.244 0 01-.06-.312.246.246 0 01.3-.109l27.758 10.334 21.3-1.588 8.8-15.934a.243.243 0 01.2-.125.224.224 0 01.188.072.221.221 0 01.031.038l10.411 14.6a.259.259 0 01.046.132V275a.247.247 0 01-.035.126l-.009.013-10.418 15.34c-.006.007-.011.015-.018.021a.246.246 0 01-.073.058.263.263 0 01-.069.023h-.041zm-58.439-8.621l58.022 8.072-7.548-15.833-22.559-1.277a.227.227 0 01-.047-.007h-.007a.242.242 0 01-.107-.066.128.128 0 01-.02-.023.248.248 0 01-.045-.136l.028-6.9-6.684-.324zm58.684-7.3v14.877l9.726-14.327zm-7.652-.433l7.162 15.024v-14.615zm7.652-.058l9.4.532-9.4-7.331zm0-7.42l9.927 7.74v-44.369l-9.927.74zm-7.893 6.973l7.4.419V267l-3.508-2.734-7.287 2.355zm-22.464-1.271l21.907 1.24-3.333-6.992-15-.726zm-.129-6.656l-.024 5.921 3.18-5.769zm26.537-2.058a.244.244 0 01.15.052l3.309 2.579V230.9l-8.468.631-3.119 5.649.688 28.955 7.365-2.38a.241.241 0 01.079-.009zm-22.574 1.76l14.646.708-.691-29.087a.25.25 0 01.031-.124l3-5.427-20.656 1.54 4.878 8.746a.246.246 0 01.031.119V263.2a.233.233 0 01-.031.118zm-3.961-.191l3.417.165 1.078-1.956-4.491.739zm-4.939-.239l4.45.216v-.949zm-21.629-41.762l19.466 15.509a.244.244 0 01.093.191v25.91l6.527-1.075.125-30.776zm26.7 10.522l-.121 29.931 4.7-.773v-20.946zm29.867-17.637l-8.186 14.824 8.186-.61zm.49-.182v14.36l9.72-.725z", "data-name": "Path 22", transform: "translate(-2539.113 -215.004)" })),
                React__default["default"].createElement("g", { "data-name": "Path 1-2", transform: "translate(.001 23.763)" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2539.358 294.032a.245.245 0 01-.076-.477l55.169-18.082v-.373h-21.337a.245.245 0 01-.244-.245v-21.023l-12.021-2.923a.245.245 0 11.116-.475l12.174 2.96 21.548-.782a.238.238 0 01.179.069.244.244 0 01.074.176v22.793a.245.245 0 01-.168.232l-55.337 18.138a.255.255 0 01-.077.012zm34-19.418h21.092v-21.5l-21.092.765z", "data-name": "Path 23", transform: "translate(-2539.114 -250.426)" })),
                React__default["default"].createElement("g", { "data-name": "Group 11", transform: "translate(55.338 14.614)" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2621.847 248.612a.245.245 0 01-.153-.435l14.121-11.335a.244.244 0 01.306.381L2622 248.558a.244.244 0 01-.153.054z", "data-name": "Path 24", transform: "translate(-2621.602 -236.787)" }))),
            React__default["default"].createElement("g", { "data-name": "Group 15", transform: "translate(2538.506 214.397)" },
                React__default["default"].createElement("g", { "data-name": "Path 1-2", transform: "translate(21.548 21.872)" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2605.068 252.383a.657.657 0 01-.285-.066l-8.216-4-25.24 1.878a.641.641 0 01-.7-.6.652.652 0 01.6-.7l25.416-1.89a.639.639 0 01.333.064l8.375 4.076a.653.653 0 01-.287 1.24z", "data-name": "Path 25", transform: "translate(-2570.626 -247.001)" })),
                React__default["default"].createElement("g", { "data-name": "Path 1-2" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2539.158 282.581h-.009a.653.653 0 01-.643-.652v-.01l.881-59.58a.649.649 0 01.17-.417.65.65 0 01.146-.12.652.652 0 01.262-.088l58.151-7.3a.653.653 0 01.163 1.3l-57.6 7.228-.873 59.013a.653.653 0 01-.648.626z", "data-name": "Path 26", transform: "translate(-2538.506 -214.397)" })),
                React__default["default"].createElement("g", { "data-name": "Group 13", transform: "translate(21.548 23.762)" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2597.391 278.583h-.031l-26.114-1.263a.654.654 0 01-.621-.652v-26.2a.653.653 0 01.653-.653.652.652 0 01.652.653v25.574l25.373 1.227 7.111-2.3v-22.312a.653.653 0 111.305 0v22.793a.651.651 0 01-.452.621l-7.676 2.48a.661.661 0 01-.2.032z", "data-name": "Path 27", transform: "translate(-2570.626 -249.819)" })),
                React__default["default"].createElement("g", { "data-name": "Group 14" },
                    React__default["default"].createElement("path", { fill: "#fff", d: "M2598.2 290.794a.573.573 0 01-.09-.006l-59.043-8.214a.652.652 0 11.18-1.292l58.636 8.157 10.08-15.188v-44.379l-10.294-14.443a.652.652 0 111.063-.757l10.417 14.612a.649.649 0 01.121.378v44.785a.649.649 0 01-.109.361l-10.417 15.692a.65.65 0 01-.544.294z", "data-name": "Path 28", transform: "translate(-2538.505 -214.398)" }))),
            React__default["default"].createElement("text", { fill: "#fff", "data-name": "DISTRIBUTED TOWN", fontFamily: "Magistral-Book, Magistral", fontSize: "28", transform: "translate(2632.403 244.394)" },
                React__default["default"].createElement("tspan", { x: "0", y: "0" }, "DISTRIBUTED"),
                React__default["default"].createElement("tspan", { x: "0", y: "34" }, "TOWN")))));
}

exports.DitoLogoFullSvg = DitoLogoFullSvg;
exports.DitoLogoSvg = DitoLogoSvg;
exports.JoinSelSvg = JoinSelSvg;
exports.MainBackgroundSvg = MainBackgroundSvg;
exports.SwButton = SwButton;
exports.SwLayout = SwLayout;
exports.SwLogoSvg = SwLogoSvg;
exports.SwSidebar = SwSidebar;
//# sourceMappingURL=index.js.map
