import * as React from 'react';
import React__default, { useRef, useDebugValue, useContext, createElement as createElement$1, useEffect, forwardRef, useImperativeHandle, Fragment, useReducer, useCallback, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled as styled$1 } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, Route } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { createTheme, Drawer, IconButton, SvgIcon, styled as styled$2, Button, Avatar, Divider as Divider$1, Box as Box$1, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ReactDOM from 'react-dom';
import Popover from '@mui/material/Popover';

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

var css_248z$8 = ".sw-main-box .sw-layout-top {\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 20px; }\n";
styleInject(css_248z$8);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c=b$1?Symbol.for("react.element"):60103,d=b$1?Symbol.for("react.portal"):60106,e=b$1?Symbol.for("react.fragment"):60107,f=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l=b$1?Symbol.for("react.async_mode"):60111,m=b$1?Symbol.for("react.concurrent_mode"):60111,n=b$1?Symbol.for("react.forward_ref"):60112,p=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r=b$1?Symbol.for("react.memo"):60115,t=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g$1:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z$1(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k$1;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g$1;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z$1(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z$1(a)===k$1};reactIs_production_min.isContextProvider=function(a){return z$1(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z$1(a)===n};reactIs_production_min.isFragment=function(a){return z$1(a)===e};reactIs_production_min.isLazy=function(a){return z$1(a)===t};
reactIs_production_min.isMemo=function(a){return z$1(a)===r};reactIs_production_min.isPortal=function(a){return z$1(a)===d};reactIs_production_min.isProfiler=function(a){return z$1(a)===g$1};reactIs_production_min.isStrictMode=function(a){return z$1(a)===f};reactIs_production_min.isSuspense=function(a){return z$1(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g$1||a===f||a===p||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$1)};reactIs_production_min.typeOf=z$1;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = reactIs_production_min;
} else {
  reactIs$1.exports = reactIs_development;
}

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize$1(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize$1(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var reactIs = reactIs$1.exports;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty$4 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var getPrototypeOf$2 = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf$2(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols$1) {
      keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor$2(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty$4(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function y(){return (y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var v=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs$1.exports.typeOf(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return "function"==typeof e}function b(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function _(e){return e&&"string"==typeof e.styledComponentId}var N="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),O="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0;}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},z=function(e){return x.get(e)},B=function(e,t){t>=k&&(k=t+1),T.set(e,t),x.set(t,e);},M="style["+N+'][data-styled-version="5.3.1"]',L=new RegExp("^"+N+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),G=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r);},F=function(e,t){for(var n=(t.innerHTML||"").split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B(u,c),G(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(s);}}},Y=function(){return "undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(N))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(N,"active"),r.setAttribute("data-styled-version","5.3.1");var s=Y();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$$9=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=C,J={isServer:!C,useCSSOMInjection:!I},X=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=y({},J,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&C&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(M),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(N)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(y({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $$9(o),new j(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=z(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(s&&a&&s.size){var c=N+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),Z=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return (K(t%52)+n).replace(Z,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!_(n))return !1}return !0}var re=te("5.3.1"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&ne(e),this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,X.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var i=_e(this.rules,e,t,n).join(""),s=Q(ee(this.baseHash,i)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a);}o.push(s),this.staticRulesId=s;}else {for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=ee(u,h+d));else if(h){var p=_e(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f;}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y);}o.push(m);}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,se=[":","[",".","#"];function ae(e){var t,n,r,o,i=void 0===e?w:e,s=i.options,a=void 0===s?w:s,c=i.plugins,u=void 0===c?S:c,l=new stylis_min(a),d=[],p=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,i){return 0===r&&-1!==se.indexOf(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=React__default.createContext();ce.Consumer;var le=React__default.createContext(),de=(le.Consumer,new X),he=ae();function pe(){return useContext(ce)||de}function fe(){return useContext(le)||he}var ye=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ve=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return "-"+e.toLowerCase()};function Ee(e){return ve.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function _e(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=_e(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(be(e))return "";if(_(e))return "."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return "production"!==process.env.NODE_ENV&&reactIs$1.exports.isElement(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),_e(u,n,r,o)}var l;return e instanceof ye?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!be(t[s])&&(Array.isArray(t[s])&&t[s].isCss||E(t[s])?i.push(Ee(s)+":",t[s],";"):g(t[s])?i.push.apply(i,e(t[s],s)):i.push(Ee(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}var Ne=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(_e(v(S,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(_e(v(e,n)))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ce.test(e))o=!1,Ie.delete(n);else {for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];r.apply(void 0,[e].concat(i));}},useRef(),o&&!Ie.has(n)&&(console.warn(n),Ie.add(n));}catch(e){Ce.test(e.message)&&Ie.delete(n);}finally{console.error=r;}}},Oe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return Q(te(e)>>>0)};function xe(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var ke=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];ke(t)&&ke(r)?Be(r,t):e[n]=t;}function Be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(ke(s))for(var a in s)Ve(a)&&ze(e,s[a],a);}return e}var Me=React__default.createContext();Me.Consumer;var Fe={};function Ye(e,t,n){var o=_(e),s=!xe(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.1"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,v=void 0===p?function(e){return xe(e)?"styled."+e:"Styled("+b(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,N=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,s=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!==process.env.NODE_ENV&&useDebugValue(h);var m=function(e,t,n){void 0===e&&(e=w);var r=y({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in E(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t];})),[r,o]}(Oe(t,useContext(Me),a)||w,t,o),v=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),i=fe(),s=t?e.generateAndInjectStyles(w,o,i):e.generateAndInjectStyles(n,o,i);return "production"!==process.env.NODE_ENV&&useDebugValue(s),"production"!==process.env.NODE_ENV&&!t&&r&&r(s),s}(s,r,v,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),b=n,_=g.$as||t.$as||g.as||t.as||p,N=xe(_),A=g!==t?y({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,index,_):!N||index(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=y({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=b,createElement$1(_,C)}(C,e,t,P)};return O.displayName=v,(C=React__default.forwardRef(O)).attrs=N,C.componentStyle=I,C.displayName=v,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(xe(e)?e:je(b(e)));return Ye(e,y({},o,{attrs:N,componentId:i}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Be({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(Pe(v,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var i=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+i+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(v,g)),C.toString=function(){return "."+C.styledComponentId},s&&hoistNonReactStatics_cjs(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!reactIs$1.exports.isValidElementType(r))return D(1,String(r));var i=function(){return t(r,o,Ae.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,y({},o,{},n))},i.attrs=function(n){return e(t,r,y({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e);}));"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);var styled = qe;

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var propTypes = {exports: {}};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$7(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign$1 = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject$7(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$2.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$c = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$c(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs$1.exports;
var assign$1 = objectAssign$1;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has$b = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$b(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign$1({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs$1.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$k =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$j = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$i = fails$j;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$i(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString$a = {}.toString;

var classofRaw$1 = function (it) {
  return toString$a.call(it).slice(8, -1);
};

var fails$h = fails$j;
var classof$8 = classofRaw$1;

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$h(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$8(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$6 = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$3 = indexedObject;
var requireObjectCoercible$5 = requireObjectCoercible$6;

var toIndexedObject$5 = function (it) {
  return IndexedObject$3(requireObjectCoercible$5(it));
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$j = function (argument) {
  return typeof argument === 'function';
};

var isCallable$i = isCallable$j;

var isObject$e = function (it) {
  return typeof it === 'object' ? it !== null : isCallable$i(it);
};

var global$j = global$k;
var isCallable$h = isCallable$j;

var aFunction = function (argument) {
  return isCallable$h(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$j[namespace]) : global$j[namespace] && global$j[namespace][method];
};

var getBuiltIn$4 = getBuiltIn$5;

var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$i = global$k;
var userAgent = engineUserAgent;

var process$2 = global$i.process;
var Deno = global$i.Deno;
var versions = process$2 && process$2.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$1 = engineV8Version;
var fails$g = fails$j;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$g(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var isCallable$g = isCallable$j;
var getBuiltIn$3 = getBuiltIn$5;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$g($Symbol) && Object(it) instanceof $Symbol;
};

var tryToString$1 = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$f = isCallable$j;
var tryToString = tryToString$1;

// `Assert: IsCallable(argument) is true`
var aCallable$4 = function (argument) {
  if (isCallable$f(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};

var aCallable$3 = aCallable$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$3(func);
};

var isCallable$e = isCallable$j;
var isObject$d = isObject$e;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$d(val = fn.call(input))) return val;
  if (isCallable$e(fn = input.valueOf) && !isObject$d(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$d(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$h = global$k;

var setGlobal$3 = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global$h, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$h[key] = value;
  } return value;
};

var global$g = global$k;
var setGlobal$2 = setGlobal$3;

var SHARED = '__core-js_shared__';
var store$3 = global$g[SHARED] || setGlobal$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.1',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var requireObjectCoercible$4 = requireObjectCoercible$6;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$6 = function (argument) {
  return Object(requireObjectCoercible$4(argument));
};

var toObject$5 = toObject$6;

var hasOwnProperty$1 = {}.hasOwnProperty;

var has$a = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1.call(toObject$5(it), key);
};

var id$2 = 0;
var postfix = Math.random();

var uid$3 = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$2 + postfix).toString(36);
};

var global$f = global$k;
var shared$3 = shared$4.exports;
var has$9 = has$a;
var uid$2 = uid$3;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$2 = global$f.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$2;

var wellKnownSymbol$f = function (name) {
  if (!has$9(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has$9(Symbol$2, name)) {
      WellKnownSymbolsStore[name] = Symbol$2[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};

var isObject$c = isObject$e;
var isSymbol$3 = isSymbol$4;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$e = wellKnownSymbol$f;

var TO_PRIMITIVE = wellKnownSymbol$e('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$c(input) || isSymbol$3(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject$c(result) || isSymbol$3(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol$2 = isSymbol$4;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$2(key) ? key : String(key);
};

var global$e = global$k;
var isObject$b = isObject$e;

var document$1 = global$e.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$b(document$1) && isObject$b(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$7 = descriptors;
var fails$f = fails$j;
var createElement = documentCreateElement$2;

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !DESCRIPTORS$7 && !fails$f(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$6 = descriptors;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$2;
var has$8 = has$a;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has$8(O, P)) return createPropertyDescriptor$2(!propertyIsEnumerableModule$1.f.call(O, P), O[P]);
};

var objectDefineProperty = {};

var isObject$a = isObject$e;

// `Assert: Type(argument) is Object`
var anObject$d = function (argument) {
  if (isObject$a(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};

var DESCRIPTORS$5 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var anObject$c = anObject$d;
var toPropertyKey = toPropertyKey$2;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$5 ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$c(O);
  P = toPropertyKey(P);
  anObject$c(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$4 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;

var createNonEnumerableProperty$6 = DESCRIPTORS$4 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$7 = {exports: {}};

var isCallable$d = isCallable$j;
var store$1 = sharedStore;

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$d(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$d = global$k;
var isCallable$c = isCallable$j;
var inspectSource$2 = inspectSource$3;

var WeakMap$2 = global$d.WeakMap;

var nativeWeakMap = isCallable$c(WeakMap$2) && /native code/.test(inspectSource$2(WeakMap$2));

var shared$2 = shared$4.exports;
var uid$1 = uid$3;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid$1(key));
};

var hiddenKeys$5 = {};

var NATIVE_WEAK_MAP$1 = nativeWeakMap;
var global$c = global$k;
var isObject$9 = isObject$e;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var objectHas = has$a;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$4 = hiddenKeys$5;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap$1 = global$c.WeakMap;
var set, get, has$7;

var enforce = function (it) {
  return has$7(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$9(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP$1 || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap$1());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has$7 = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$4[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has$7 = function (it) {
    return objectHas(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$7,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$3 = descriptors;
var has$6 = has$a;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

var EXISTS = has$6(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$b = global$k;
var isCallable$b = isCallable$j;
var has$5 = has$a;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule$3 = internalState;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;

var getInternalState$3 = InternalStateModule$3.get;
var enforceInternalState = InternalStateModule$3.enforce;
var TEMPLATE = String(String).split('String');

(redefine$7.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable$b(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!has$5(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
      createNonEnumerableProperty$4(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global$b) {
    if (simple) O[key] = value;
    else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty$4(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$b(this) && getInternalState$3(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger$4 = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$1 : ceil)(argument);
};

var toInteger$3 = toInteger$4;

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$6 = function (argument) {
  return argument > 0 ? min$2(toInteger$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toInteger$2 = toInteger$4;

var max$1 = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toInteger$2(index);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toLength$5 = toLength$6;
var toAbsoluteIndex = toAbsoluteIndex$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$4 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = toLength$5(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$4(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$4(false)
};

var has$4 = has$a;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$5;

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has$4(hiddenKeys$3, key) && has$4(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$4(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$2 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$2);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$2 = getBuiltIn$5;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$b = anObject$d;

// all object keys, includes non-enumerable and symbols
var ownKeys$3 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$1.f(anObject$b(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var has$3 = has$a;
var ownKeys$2 = ownKeys$3;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source) {
  var keys = ownKeys$2(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has$3(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$e = fails$j;
var isCallable$a = isCallable$j;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$a(detection) ? fails$e(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var global$a = global$k;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
var redefine$6 = redefine$7.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$1 = isForced_1;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$a;
  } else if (STATIC) {
    target = global$a[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$a[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
    }
    // extend global
    redefine$6(target, key, sourceProperty, options);
  }
};

var aCallable$2 = aCallable$4;

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aCallable$2(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var classof$7 = classofRaw$1;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$7(argument) == 'Array';
};

var wellKnownSymbol$d = wellKnownSymbol$f;

var TO_STRING_TAG$3 = wellKnownSymbol$d('toStringTag');
var test = {};

test[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$9 = isCallable$j;
var classofRaw = classofRaw$1;
var wellKnownSymbol$c = wellKnownSymbol$f;

var TO_STRING_TAG$2 = wellKnownSymbol$c('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$6 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
};

var fails$d = fails$j;
var isCallable$8 = isCallable$j;
var classof$5 = classof$6;
var getBuiltIn$1 = getBuiltIn$5;
var inspectSource = inspectSource$3;

var empty = [];
var construct = getBuiltIn$1('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = constructorRegExp.exec;
var INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ });

var isConstructorModern = function (argument) {
  if (!isCallable$8(argument)) return false;
  try {
    construct(Object, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable$8(argument)) return false;
  switch (classof$5(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec$1.call(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$d(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isArray = isArray$1;
var isConstructor = isConstructor$1;
var isObject$8 = isObject$e;
var wellKnownSymbol$b = wellKnownSymbol$f;

var SPECIES$2 = wellKnownSymbol$b('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject$8(C)) {
      C = C[SPECIES$2];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$1 = functionBindContext;
var IndexedObject$2 = indexedObject;
var toObject$4 = toObject$6;
var toLength$4 = toLength$6;
var arraySpeciesCreate = arraySpeciesCreate$1;

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$3 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$4($this);
    var self = IndexedObject$2(O);
    var boundFunction = bind$1(callbackfn, that, 3);
    var length = toLength$4(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$3(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$3(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$3(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$3(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$3(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$3(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$3(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$3(7)
};

var fails$c = fails$j;
var wellKnownSymbol$a = wellKnownSymbol$f;
var V8_VERSION = engineV8Version;

var SPECIES$1 = wellKnownSymbol$a('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails$c(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$1] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$8 = _export;
var $filter = arrayIteration.filter;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$$8({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var fails$b = fails$j;

var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$b(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var $forEach = arrayIteration.forEach;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

var STRICT_METHOD$1 = arrayMethodIsStrict$1('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

var $$7 = _export;
var forEach = arrayForEach;

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$$7({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$2 = descriptors;
var definePropertyModule$1 = objectDefineProperty;
var anObject$a = anObject$d;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
var objectDefineProperties = DESCRIPTORS$2 ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$a(O);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], Properties[key]);
  return O;
};

var getBuiltIn = getBuiltIn$5;

var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$9 = anObject$d;
var defineProperties = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$1 = hiddenKeys$5;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$9(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

var wellKnownSymbol$9 = wellKnownSymbol$f;
var create$2 = objectCreate;
var definePropertyModule = objectDefineProperty;

var UNSCOPABLES = wellKnownSymbol$9('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$a = fails$j;

var correctPrototypeGetter = !fails$a(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var has$2 = has$a;
var isCallable$7 = isCallable$j;
var toObject$3 = toObject$6;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject$3(O);
  if (has$2(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$7(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};

var fails$9 = fails$j;
var isCallable$6 = isCallable$j;
var getPrototypeOf$1 = objectGetPrototypeOf;
var redefine$5 = redefine$7.exports;
var wellKnownSymbol$8 = wellKnownSymbol$f;

var ITERATOR$6 = wellKnownSymbol$8('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$9(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$6].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$6(IteratorPrototype$2[ITERATOR$6])) {
  redefine$5(IteratorPrototype$2, ITERATOR$6, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$3 = objectDefineProperty.f;
var has$1 = has$a;
var wellKnownSymbol$7 = wellKnownSymbol$f;

var TO_STRING_TAG$1 = wellKnownSymbol$7('toStringTag');

var setToStringTag$3 = function (it, TAG, STATIC) {
  if (it && !has$1(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
    defineProperty$3(it, TO_STRING_TAG$1, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$3;
var setToStringTag$2 = setToStringTag$3;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isCallable$5 = isCallable$j;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument === 'object' || isCallable$5(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var anObject$8 = anObject$d;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$8(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$6 = _export;
var FunctionName = functionName;
var isCallable$4 = isCallable$j;
var createIteratorConstructor = createIteratorConstructor$1;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var redefine$4 = redefine$7.exports;
var wellKnownSymbol$6 = wellKnownSymbol$f;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol$6('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var defineIterator$2 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$5]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$5])) {
          redefine$4(CurrentIteratorPrototype, ITERATOR$5, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine$4(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$6({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
    redefine$4(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;

  return methods;
};

var toIndexedObject$1 = toIndexedObject$5;
var addToUnscopables = addToUnscopables$1;
var Iterators$2 = iterators;
var InternalStateModule$2 = internalState;
var defineIterator$1 = defineIterator$2;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$2 = InternalStateModule$2.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$2(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$1(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$2(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var DESCRIPTORS$1 = descriptors;
var fails$8 = fails$j;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$6;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$2 = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$8(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$1 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$2(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$2(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$1 || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$5 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$5({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$4 = classof$6;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString$3 = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$4(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var redefine$3 = redefine$7.exports;
var toString$9 = objectToString$3;

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine$3(Object.prototype, 'toString', toString$9, { unsafe: true });
}

var classof$3 = classof$6;

var toString$8 = function (argument) {
  if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var requireObjectCoercible$3 = requireObjectCoercible$6;
var toString$7 = toString$8;
var whitespaces$1 = whitespaces$2;

var whitespace = '[' + whitespaces$1 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$2 = function (TYPE) {
  return function ($this) {
    var string = toString$7(requireObjectCoercible$3($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$2(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$2(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$2(3)
};

var global$9 = global$k;
var fails$7 = fails$j;
var toString$6 = toString$8;
var trim = stringTrim.trim;
var whitespaces = whitespaces$2;

var $parseInt$1 = global$9.parseInt;
var Symbol$1 = global$9.Symbol;
var ITERATOR$4 = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$4 && !fails$7(function () { $parseInt$1(Object(ITERATOR$4)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED ? function parseInt(string, radix) {
  var S = trim(toString$6(string));
  return $parseInt$1(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt$1;

var $$4 = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$4({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

var toInteger$1 = toInteger$4;
var toString$5 = toString$8;
var requireObjectCoercible$2 = requireObjectCoercible$6;

// `String.prototype.codePointAt` methods implementation
var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$5(requireObjectCoercible$2($this));
    var position = toInteger$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt$1 = stringMultibyte.charAt;
var toString$4 = toString$8;
var InternalStateModule$1 = internalState;
var defineIterator = defineIterator$2;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState$1 = InternalStateModule$1.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$1(this, {
    type: STRING_ITERATOR,
    string: toString$4(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$1(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt$1(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

var redefine$2 = redefine$7.exports;

var redefineAll$2 = function (target, src, options) {
  for (var key in src) redefine$2(target, key, src[key], options);
  return target;
};

var internalMetadata = {exports: {}};

var objectGetOwnPropertyNamesExternal = {};

/* eslint-disable es/no-object-getownpropertynames -- safe */

var toIndexedObject = toIndexedObject$5;
var $getOwnPropertyNames = objectGetOwnPropertyNames.f;

var toString$3 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && toString$3.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};

var fails$6 = fails$j;

var freezing = !fails$6(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

var $$3 = _export;
var hiddenKeys = hiddenKeys$5;
var isObject$7 = isObject$e;
var has = has$a;
var defineProperty$1 = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var uid = uid$3;
var FREEZING = freezing;

var REQUIRED = false;
var METADATA = uid('meta');
var id$1 = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible$1 = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty$1(it, METADATA, { value: {
    objectID: 'O' + id$1++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject$7(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible$1(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData$1 = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible$1(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible$1(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = [].splice;
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice.call(result, i, 1);
          break;
        }
      } return result;
    };

    $$3({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = internalMetadata.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData$1,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;

var wellKnownSymbol$5 = wellKnownSymbol$f;
var Iterators$1 = iterators;

var ITERATOR$3 = wellKnownSymbol$5('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$3] === it);
};

var classof$2 = classof$6;
var getMethod$3 = getMethod$5;
var Iterators = iterators;
var wellKnownSymbol$4 = wellKnownSymbol$f;

var ITERATOR$2 = wellKnownSymbol$4('iterator');

var getIteratorMethod$2 = function (it) {
  if (it != undefined) return getMethod$3(it, ITERATOR$2)
    || getMethod$3(it, '@@iterator')
    || Iterators[classof$2(it)];
};

var aCallable$1 = aCallable$4;
var anObject$7 = anObject$d;
var getIteratorMethod$1 = getIteratorMethod$2;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$1(iteratorMethod)) return anObject$7(iteratorMethod.call(argument));
  throw TypeError(String(argument) + ' is not iterable');
};

var anObject$6 = anObject$d;
var getMethod$2 = getMethod$5;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$6(iterator);
  try {
    innerResult = getMethod$2(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$6(innerResult);
  return value;
};

var anObject$5 = anObject$d;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var toLength$3 = toLength$6;
var bind = functionBindContext;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate$2 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$5(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(String(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength$3(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

var anInstance$2 = function (it, Constructor, name) {
  if (it instanceof Constructor) return it;
  throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
};

var wellKnownSymbol$3 = wellKnownSymbol$f;

var ITERATOR$1 = wellKnownSymbol$3('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$1] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$1] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var isCallable$3 = isCallable$j;
var isObject$6 = isObject$e;
var setPrototypeOf = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$3(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$6(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var $$2 = _export;
var global$8 = global$k;
var isForced = isForced_1;
var redefine$1 = redefine$7.exports;
var InternalMetadataModule$1 = internalMetadata.exports;
var iterate$1 = iterate$2;
var anInstance$1 = anInstance$2;
var isCallable$2 = isCallable$j;
var isObject$5 = isObject$e;
var fails$5 = fails$j;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var setToStringTag = setToStringTag$3;
var inheritIfRequired = inheritIfRequired$1;

var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global$8[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine$1(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject$5(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject$5(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject$5(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable$2(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$5(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule$1.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails$5(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails$5(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance$1(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate$1(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $$2({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

var redefineAll$1 = redefineAll$2;
var getWeakData = internalMetadata.exports.getWeakData;
var anObject$4 = anObject$d;
var isObject$4 = isObject$e;
var anInstance = anInstance$2;
var iterate = iterate$2;
var ArrayIterationModule = arrayIteration;
var $has = has$a;
var InternalStateModule = internalState;

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

var collectionWeak$1 = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject$4(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll$1(C.prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject$4(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && $has(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject$4(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && $has(data, state.id);
      }
    });

    redefineAll$1(C.prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject$4(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};

var global$7 = global$k;
var redefineAll = redefineAll$2;
var InternalMetadataModule = internalMetadata.exports;
var collection = collection$1;
var collectionWeak = collectionWeak$1;
var isObject$3 = isObject$e;
var enforceIternalState = internalState.enforce;
var NATIVE_WEAK_MAP = nativeWeakMap;

var IS_IE11 = !global$7.ActiveXObject && 'ActiveXObject' in global$7;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject$3(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject$3(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject$3(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject$3(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var global$6 = global$k;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
var wellKnownSymbol$2 = wellKnownSymbol$f;

var ITERATOR = wellKnownSymbol$2('iterator');
var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$6[COLLECTION_NAME] && global$6[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN$1 = 0 / 0;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim$1 = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal$2 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf$2 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$2 = freeGlobal$2 || freeSelf$2 || Function('return this')();

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$2 = objectProto$2.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin$1 = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now$1 = function() {
  return root$2.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  wait = toNumber$1(wait) || 0;
  if (isObject$2(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin$1(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  if (isObject$2(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce$1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && objectToString$2.call(value) == symbolTag$1);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN$1;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$2(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$1, '');
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}

var lodash_throttle = throttle;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root$1.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString$1.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_debounce = debounce;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

var lodash_memoize = memoize;

var resizeObservers = [];

var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
};

var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
};

var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};

var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

var freeze = function (obj) { return Object.freeze(obj); };

var ResizeObserverSize = (function () {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        freeze(this);
    }
    return ResizeObserverSize;
}());

var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return freeze(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());

var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a, _b;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};

var global$5 = typeof window !== 'undefined' ? window : {};

var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(global$5.navigator && global$5.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if (isHidden(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = freeze({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};

var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = freeze([boxes.borderBoxSize]);
        this.contentBoxSize = freeze([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
    }
    return ResizeObserverEntry;
}());

var calculateDepthForNode = function (node) {
    if (isHidden(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};

var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new ResizeObserverEntry(ot.target);
            var targetDepth = calculateDepthForNode(ot.target);
            entries.push(entry);
            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};

var gatherActiveObservationsAtDepth = function (depth) {
    resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if (calculateDepthForNode(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};

var process$1 = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopError();
    }
    return depth > 0;
};

var trigger;
var callbacks = [];
var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};

var queueResizeObserver = function (cb) {
    queueMicroTask(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};

var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        queueResizeObserver(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = process$1();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : global$5.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return global$5.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return global$5.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};

var skipNotifyOnElement = function (target) {
    return !isSVG(target)
        && !isReplacedElement(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = calculateBoxSize(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());

var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());

var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && resizeObservers.push(detail);
            detail.observationTargets.push(new ResizeObservation(target, options && options.box));
            updateCount(1);
            scheduler.schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            updateCount(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());

var ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        ResizeObserverController.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        ResizeObserverController.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

var canUseDom = canUseDOM;

var aCallable = aCallable$4;
var toObject$1 = toObject$6;
var IndexedObject = indexedObject;
var toLength$2 = toLength$6;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject$1(that);
    var self = IndexedObject(O);
    var length = toLength$2(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

var classof$1 = classofRaw$1;
var global$4 = global$k;

var engineIsNode = classof$1(global$4.process) == 'process';

var $$1 = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict = arrayMethodIsStrict$2;
var CHROME_VERSION = engineV8Version;
var IS_NODE = engineIsNode;

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$1({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var DESCRIPTORS = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var defineProperty = objectDefineProperty.f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var anObject$3 = anObject$d;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$3(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var regexpStickyHelpers = {};

var fails$4 = fails$j;
var global$3 = global$k;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$3.RegExp;

regexpStickyHelpers.UNSUPPORTED_Y = fails$4(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

regexpStickyHelpers.BROKEN_CARET = fails$4(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var fails$3 = fails$j;
var global$2 = global$k;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$2.RegExp;

var regexpUnsupportedDotAll = fails$3(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$2 = fails$j;
var global$1 = global$k;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$1.RegExp;

var regexpUnsupportedNcg = fails$2(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var toString$2 = toString$8;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$2(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = str.slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $ = _export;
var exec = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var redefine = redefine$7.exports;
var regexpExec$1 = regexpExec$2;
var fails$1 = fails$j;
var wellKnownSymbol$1 = wellKnownSymbol$f;
var createNonEnumerableProperty = createNonEnumerableProperty$6;

var SPECIES = wellKnownSymbol$1('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$1(KEY);

  var DELEGATES_TO_SYMBOL = !fails$1(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var charAt = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var anObject$2 = anObject$d;
var isCallable$1 = isCallable$j;
var classof = classofRaw$1;
var regexpExec = regexpExec$2;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$1(exec)) {
    var result = exec.call(R, S);
    if (result !== null) anObject$2(result);
    return result;
  }
  if (classof(R) === 'RegExp') return regexpExec.call(R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};

var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$1 = anObject$d;
var toLength$1 = toLength$6;
var toString$1 = toString$8;
var requireObjectCoercible$1 = requireObjectCoercible$6;
var getMethod$1 = getMethod$5;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$1(this);
      var matcher = regexp == undefined ? undefined : getMethod$1(regexp, MATCH);
      return matcher ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString$1(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$1(this);
      var S = toString$1(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$1(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$1(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

var toObject = toObject$6;

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails = fails$j;
var anObject = anObject$d;
var isCallable = isCallable$j;
var toInteger = toInteger$4;
var toLength = toLength$6;
var toString = toString$8;
var requireObjectCoercible = requireObjectCoercible$6;
var advanceStringIndex = advanceStringIndex$2;
var getMethod = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$f;

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = toString(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

/**
 * SimpleBar.js - v5.3.6
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

function getElementWindow(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }

  return element.ownerDocument.defaultView;
}
function getElementDocument(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }

  return element.ownerDocument;
}

var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;

if (canUseDom) {
  window.addEventListener('resize', function () {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}

function scrollbarWidth(el) {
  if (cachedScrollbarWidth === null) {
    var document = getElementDocument(el);

    if (typeof document === 'undefined') {
      cachedScrollbarWidth = 0;
      return cachedScrollbarWidth;
    }

    var body = document.body;
    var box = document.createElement('div');
    box.classList.add('simplebar-hide-scrollbar');
    body.appendChild(box);
    var width = box.getBoundingClientRect().right;
    body.removeChild(box);
    cachedScrollbarWidth = width;
  }

  return cachedScrollbarWidth;
}

var SimpleBar$1 =
/*#__PURE__*/
function () {
  function SimpleBar(element, options) {
    var _this = this;

    this.onScroll = function () {
      var elWindow = getElementWindow(_this.el);

      if (!_this.scrollXTicking) {
        elWindow.requestAnimationFrame(_this.scrollX);
        _this.scrollXTicking = true;
      }

      if (!_this.scrollYTicking) {
        elWindow.requestAnimationFrame(_this.scrollY);
        _this.scrollYTicking = true;
      }
    };

    this.scrollX = function () {
      if (_this.axis.x.isOverflowing) {
        _this.showScrollbar('x');

        _this.positionScrollbar('x');
      }

      _this.scrollXTicking = false;
    };

    this.scrollY = function () {
      if (_this.axis.y.isOverflowing) {
        _this.showScrollbar('y');

        _this.positionScrollbar('y');
      }

      _this.scrollYTicking = false;
    };

    this.onMouseEnter = function () {
      _this.showScrollbar('x');

      _this.showScrollbar('y');
    };

    this.onMouseMove = function (e) {
      _this.mouseX = e.clientX;
      _this.mouseY = e.clientY;

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseMoveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseMoveForAxis('y');
      }
    };

    this.onMouseLeave = function () {
      _this.onMouseMove.cancel();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseLeaveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseLeaveForAxis('y');
      }

      _this.mouseX = -1;
      _this.mouseY = -1;
    };

    this.onWindowResize = function () {
      // Recalculate scrollbarWidth in case it's a zoom
      _this.scrollbarWidth = _this.getScrollbarWidth();

      _this.hideNativeScrollbar();
    };

    this.hideScrollbars = function () {
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
        _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.y.isVisible = false;
      }

      if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
        _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.x.isVisible = false;
      }
    };

    this.onPointerEvent = function (e) {
      var isWithinTrackXBounds, isWithinTrackYBounds;
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
      } // If any pointer event is called on the scrollbar


      if (isWithinTrackXBounds || isWithinTrackYBounds) {
        // Preventing the event's default action stops text being
        // selectable during the drag.
        e.preventDefault(); // Prevent event leaking

        e.stopPropagation();

        if (e.type === 'mousedown') {
          if (isWithinTrackXBounds) {
            _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();

            if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
              _this.onDragStart(e, 'x');
            } else {
              _this.onTrackClick(e, 'x');
            }
          }

          if (isWithinTrackYBounds) {
            _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

            if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
              _this.onDragStart(e, 'y');
            } else {
              _this.onTrackClick(e, 'y');
            }
          }
        }
      }
    };

    this.drag = function (e) {
      var eventOffset;
      var track = _this.axis[_this.draggedAxis].track;
      var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
      var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
      var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
      var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
      e.preventDefault();
      e.stopPropagation();

      if (_this.draggedAxis === 'y') {
        eventOffset = e.pageY;
      } else {
        eventOffset = e.pageX;
      } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


      var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

      var dragPerc = dragPos / (trackSize - scrollbar.size); // Scroll the content by the same percentage.

      var scrollPos = dragPerc * (contentSize - hostSize); // Fix browsers inconsistency on RTL

      if (_this.draggedAxis === 'x') {
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
      }

      _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
    };

    this.onEndDrag = function (e) {
      var elDocument = getElementDocument(_this.el);
      var elWindow = getElementWindow(_this.el);
      e.preventDefault();
      e.stopPropagation();

      _this.el.classList.remove(_this.classNames.dragging);

      elDocument.removeEventListener('mousemove', _this.drag, true);
      elDocument.removeEventListener('mouseup', _this.onEndDrag, true);
      _this.removePreventClickId = elWindow.setTimeout(function () {
        // Remove these asynchronously so we still suppress click events
        // generated simultaneously with mouseup.
        elDocument.removeEventListener('click', _this.preventClick, true);
        elDocument.removeEventListener('dblclick', _this.preventClick, true);
        _this.removePreventClickId = null;
      });
    };

    this.preventClick = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };

    this.el = element;
    this.minScrollbarWidth = 20;
    this.options = Object.assign({}, SimpleBar.defaultOptions, {}, options);
    this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, {}, this.options.classNames);
    this.axis = {
      x: {
        scrollOffsetAttr: 'scrollLeft',
        sizeAttr: 'width',
        scrollSizeAttr: 'scrollWidth',
        offsetSizeAttr: 'offsetWidth',
        offsetAttr: 'left',
        overflowAttr: 'overflowX',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      },
      y: {
        scrollOffsetAttr: 'scrollTop',
        sizeAttr: 'height',
        scrollSizeAttr: 'scrollHeight',
        offsetSizeAttr: 'offsetHeight',
        offsetAttr: 'top',
        overflowAttr: 'overflowY',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      }
    };
    this.removePreventClickId = null; // Don't re-instantiate over an existing one

    if (SimpleBar.instances.has(this.el)) {
      return;
    }

    this.recalculate = lodash_throttle(this.recalculate.bind(this), 64);
    this.onMouseMove = lodash_throttle(this.onMouseMove.bind(this), 64);
    this.hideScrollbars = lodash_debounce(this.hideScrollbars.bind(this), this.options.timeout);
    this.onWindowResize = lodash_debounce(this.onWindowResize.bind(this), 64, {
      leading: true
    });
    SimpleBar.getRtlHelpers = lodash_memoize(SimpleBar.getRtlHelpers);
    this.init();
  }
  /**
   * Static properties
   */

  /**
   * Helper to fix browsers inconsistency on RTL:
   *  - Firefox inverts the scrollbar initial position
   *  - IE11 inverts both scrollbar position and scrolling offset
   * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
   */


  SimpleBar.getRtlHelpers = function getRtlHelpers() {
    var dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
    var scrollbarDummyEl = dummyDiv.firstElementChild;
    document.body.appendChild(scrollbarDummyEl);
    var dummyContainerChild = scrollbarDummyEl.firstElementChild;
    scrollbarDummyEl.scrollLeft = 0;
    var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
    var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
    scrollbarDummyEl.scrollLeft = 999;
    var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
    return {
      // determines if the scrolling is responding with negative values
      isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
      // determines if the origin scrollbar position is inverted or not (positioned on left or right)
      isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
    };
  };

  SimpleBar.getOffset = function getOffset(el) {
    var rect = el.getBoundingClientRect();
    var elDocument = getElementDocument(el);
    var elWindow = getElementWindow(el);
    return {
      top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
      left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
    };
  };

  var _proto = SimpleBar.prototype;

  _proto.init = function init() {
    // Save a reference to the instance, so we know this DOM node has already been instancied
    SimpleBar.instances.set(this.el, this); // We stop here on server-side

    if (canUseDom) {
      this.initDOM();
      this.setAccessibilityAttributes();
      this.scrollbarWidth = this.getScrollbarWidth();
      this.recalculate();
      this.initListeners();
    }
  };

  _proto.initDOM = function initDOM() {
    var _this2 = this;

    // make sure this element doesn't have the elements yet
    if (Array.prototype.filter.call(this.el.children, function (child) {
      return child.classList.contains(_this2.classNames.wrapper);
    }).length) {
      // assume that element has his DOM already initiated
      this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper);
      this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl);
      this.offsetEl = this.el.querySelector("." + this.classNames.offset);
      this.maskEl = this.el.querySelector("." + this.classNames.mask);
      this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder);
      this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
      this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal);
      this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
    } else {
      // Prepare DOM
      this.wrapperEl = document.createElement('div');
      this.contentWrapperEl = document.createElement('div');
      this.offsetEl = document.createElement('div');
      this.maskEl = document.createElement('div');
      this.contentEl = document.createElement('div');
      this.placeholderEl = document.createElement('div');
      this.heightAutoObserverWrapperEl = document.createElement('div');
      this.heightAutoObserverEl = document.createElement('div');
      this.wrapperEl.classList.add(this.classNames.wrapper);
      this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
      this.offsetEl.classList.add(this.classNames.offset);
      this.maskEl.classList.add(this.classNames.mask);
      this.contentEl.classList.add(this.classNames.contentEl);
      this.placeholderEl.classList.add(this.classNames.placeholder);
      this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

      while (this.el.firstChild) {
        this.contentEl.appendChild(this.el.firstChild);
      }

      this.contentWrapperEl.appendChild(this.contentEl);
      this.offsetEl.appendChild(this.contentWrapperEl);
      this.maskEl.appendChild(this.offsetEl);
      this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
      this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
      this.wrapperEl.appendChild(this.maskEl);
      this.wrapperEl.appendChild(this.placeholderEl);
      this.el.appendChild(this.wrapperEl);
    }

    if (!this.axis.x.track.el || !this.axis.y.track.el) {
      var track = document.createElement('div');
      var scrollbar = document.createElement('div');
      track.classList.add(this.classNames.track);
      scrollbar.classList.add(this.classNames.scrollbar);
      track.appendChild(scrollbar);
      this.axis.x.track.el = track.cloneNode(true);
      this.axis.x.track.el.classList.add(this.classNames.horizontal);
      this.axis.y.track.el = track.cloneNode(true);
      this.axis.y.track.el.classList.add(this.classNames.vertical);
      this.el.appendChild(this.axis.x.track.el);
      this.el.appendChild(this.axis.y.track.el);
    }

    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
    this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);

    if (!this.options.autoHide) {
      this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
      this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
    }

    this.el.setAttribute('data-simplebar', 'init');
  };

  _proto.setAccessibilityAttributes = function setAccessibilityAttributes() {
    var ariaLabel = this.options.ariaLabel || 'scrollable content';
    this.contentWrapperEl.setAttribute('tabindex', '0');
    this.contentWrapperEl.setAttribute('role', 'region');
    this.contentWrapperEl.setAttribute('aria-label', ariaLabel);
  };

  _proto.initListeners = function initListeners() {
    var _this3 = this;

    var elWindow = getElementWindow(this.el); // Event listeners

    if (this.options.autoHide) {
      this.el.addEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, true);
    });
    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, {
        capture: true,
        passive: true
      });
    });
    this.el.addEventListener('mousemove', this.onMouseMove);
    this.el.addEventListener('mouseleave', this.onMouseLeave);
    this.contentWrapperEl.addEventListener('scroll', this.onScroll); // Browser zoom triggers a window resize

    elWindow.addEventListener('resize', this.onWindowResize); // Hack for https://github.com/WICG/ResizeObserver/issues/38

    var resizeObserverStarted = false;
    var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
    this.resizeObserver = new resizeObserver(function () {
      if (!resizeObserverStarted) return;

      _this3.recalculate();
    });
    this.resizeObserver.observe(this.el);
    this.resizeObserver.observe(this.contentEl);
    elWindow.requestAnimationFrame(function () {
      resizeObserverStarted = true;
    }); // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.

    this.mutationObserver = new elWindow.MutationObserver(this.recalculate);
    this.mutationObserver.observe(this.contentEl, {
      childList: true,
      subtree: true,
      characterData: true
    });
  };

  _proto.recalculate = function recalculate() {
    var elWindow = getElementWindow(this.el);
    this.elStyles = elWindow.getComputedStyle(this.el);
    this.isRtl = this.elStyles.direction === 'rtl';
    var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
    var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
    var contentElOffsetWidth = this.contentEl.offsetWidth;
    var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
    var elOverflowX = this.elStyles.overflowX;
    var elOverflowY = this.elStyles.overflowY;
    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
    this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
    var contentElScrollHeight = this.contentEl.scrollHeight;
    var contentElScrollWidth = this.contentEl.scrollWidth;
    this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%'; // Determine placeholder size

    this.placeholderEl.style.width = isWidthAuto ? contentElOffsetWidth + "px" : 'auto';
    this.placeholderEl.style.height = contentElScrollHeight + "px";
    var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
    this.axis.x.isOverflowing = contentElScrollWidth > contentElOffsetWidth;
    this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight; // Set isOverflowing to false if user explicitely set hidden overflow

    this.axis.x.isOverflowing = elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
    this.axis.y.isOverflowing = elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
    this.axis.x.forceVisible = this.options.forceVisible === 'x' || this.options.forceVisible === true;
    this.axis.y.forceVisible = this.options.forceVisible === 'y' || this.options.forceVisible === true;
    this.hideNativeScrollbar(); // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

    var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
    var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
    this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
    this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
    this.axis.x.scrollbar.size = this.getScrollbarSize('x');
    this.axis.y.scrollbar.size = this.getScrollbarSize('y');
    this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
    this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
    this.positionScrollbar('x');
    this.positionScrollbar('y');
    this.toggleTrackVisibility('x');
    this.toggleTrackVisibility('y');
  }
  /**
   * Calculate scrollbar size
   */
  ;

  _proto.getScrollbarSize = function getScrollbarSize(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.axis[axis].isOverflowing) {
      return 0;
    }

    var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
    var scrollbarSize;
    var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

    scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

    if (this.options.scrollbarMaxSize) {
      scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
    }

    return scrollbarSize;
  };

  _proto.positionScrollbar = function positionScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.axis[axis].isOverflowing) {
      return;
    }

    var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrollbar = this.axis[axis].scrollbar;
    var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    scrollOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
    var scrollPourcent = scrollOffset / (contentSize - hostSize);
    var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
    handleOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
    scrollbar.el.style.transform = axis === 'x' ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
  };

  _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var track = this.axis[axis].track.el;
    var scrollbar = this.axis[axis].scrollbar.el;

    if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
      track.style.visibility = 'visible';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
    } else {
      track.style.visibility = 'hidden';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
    } // Even if forceVisible is enabled, scrollbar itself should be hidden


    if (this.axis[axis].isOverflowing) {
      scrollbar.style.display = 'block';
    } else {
      scrollbar.style.display = 'none';
    }
  };

  _proto.hideNativeScrollbar = function hideNativeScrollbar() {
    this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
    this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
  }
  /**
   * On scroll event handling
   */
  ;

  _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

    if (isWithinScrollbarBoundsX) {
      this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
    }

    if (this.isWithinBounds(this.axis[axis].track.rect)) {
      this.showScrollbar(axis);
      this.axis[axis].track.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].track.el.classList.remove(this.classNames.hover);
    }
  };

  _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.el.classList.remove(this.classNames.hover);
    this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
  };

  /**
   * Show scrollbar
   */
  _proto.showScrollbar = function showScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var scrollbar = this.axis[axis].scrollbar.el;

    if (!this.axis[axis].isVisible) {
      scrollbar.classList.add(this.classNames.visible);
      this.axis[axis].isVisible = true;
    }

    if (this.options.autoHide) {
      this.hideScrollbars();
    }
  }
  /**
   * Hide Scrollbar
   */
  ;

  /**
   * on scrollbar handle drag movement starts
   */
  _proto.onDragStart = function onDragStart(e, axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var elDocument = getElementDocument(this.el);
    var elWindow = getElementWindow(this.el);
    var scrollbar = this.axis[axis].scrollbar; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

    var eventOffset = axis === 'y' ? e.pageY : e.pageX;
    this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
    this.draggedAxis = axis;
    this.el.classList.add(this.classNames.dragging);
    elDocument.addEventListener('mousemove', this.drag, true);
    elDocument.addEventListener('mouseup', this.onEndDrag, true);

    if (this.removePreventClickId === null) {
      elDocument.addEventListener('click', this.preventClick, true);
      elDocument.addEventListener('dblclick', this.preventClick, true);
    } else {
      elWindow.clearTimeout(this.removePreventClickId);
      this.removePreventClickId = null;
    }
  }
  /**
   * Drag scrollbar handle
   */
  ;

  _proto.onTrackClick = function onTrackClick(e, axis) {
    var _this4 = this;

    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.options.clickOnTrack) return;
    var elWindow = getElementWindow(this.el);
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var scrollbar = this.axis[axis].scrollbar;
    var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    var t = axis === 'y' ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
    var dir = t < 0 ? -1 : 1;
    var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;

    var scrollTo = function scrollTo() {
      if (dir === -1) {
        if (scrolled > scrollSize) {
          var _this4$contentWrapper;

          scrolled -= _this4.options.clickOnTrackSpeed;

          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper = {}, _this4$contentWrapper[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper));

          elWindow.requestAnimationFrame(scrollTo);
        }
      } else {
        if (scrolled < scrollSize) {
          var _this4$contentWrapper2;

          scrolled += _this4.options.clickOnTrackSpeed;

          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper2 = {}, _this4$contentWrapper2[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper2));

          elWindow.requestAnimationFrame(scrollTo);
        }
      }
    };

    scrollTo();
  }
  /**
   * Getter for content element
   */
  ;

  _proto.getContentElement = function getContentElement() {
    return this.contentEl;
  }
  /**
   * Getter for original scrolling element
   */
  ;

  _proto.getScrollElement = function getScrollElement() {
    return this.contentWrapperEl;
  };

  _proto.getScrollbarWidth = function getScrollbarWidth() {
    // Try/catch for FF 56 throwing on undefined computedStyles
    try {
      // Detect browsers supporting CSS scrollbar styling and do not calculate
      if (getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display === 'none' || 'scrollbarWidth' in document.documentElement.style || '-ms-overflow-style' in document.documentElement.style) {
        return 0;
      } else {
        return scrollbarWidth(this.el);
      }
    } catch (e) {
      return scrollbarWidth(this.el);
    }
  };

  _proto.removeListeners = function removeListeners() {
    var _this5 = this;

    var elWindow = getElementWindow(this.el); // Event listeners

    if (this.options.autoHide) {
      this.el.removeEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
      _this5.el.removeEventListener(e, _this5.onPointerEvent, true);
    });
    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this5.el.removeEventListener(e, _this5.onPointerEvent, {
        capture: true,
        passive: true
      });
    });
    this.el.removeEventListener('mousemove', this.onMouseMove);
    this.el.removeEventListener('mouseleave', this.onMouseLeave);

    if (this.contentWrapperEl) {
      this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
    }

    elWindow.removeEventListener('resize', this.onWindowResize);

    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    } // Cancel all debounced functions


    this.recalculate.cancel();
    this.onMouseMove.cancel();
    this.hideScrollbars.cancel();
    this.onWindowResize.cancel();
  }
  /**
   * UnMount mutation observer and delete SimpleBar instance from DOM element
   */
  ;

  _proto.unMount = function unMount() {
    this.removeListeners();
    SimpleBar.instances.delete(this.el);
  }
  /**
   * Check if mouse is within bounds
   */
  ;

  _proto.isWithinBounds = function isWithinBounds(bbox) {
    return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
  }
  /**
   * Find element children matches query
   */
  ;

  _proto.findChild = function findChild(el, query) {
    var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    return Array.prototype.filter.call(el.children, function (child) {
      return matches.call(child, query);
    })[0];
  };

  return SimpleBar;
}();

SimpleBar$1.defaultOptions = {
  autoHide: true,
  forceVisible: false,
  clickOnTrack: true,
  clickOnTrackSpeed: 40,
  classNames: {
    contentEl: 'simplebar-content',
    contentWrapper: 'simplebar-content-wrapper',
    offset: 'simplebar-offset',
    mask: 'simplebar-mask',
    wrapper: 'simplebar-wrapper',
    placeholder: 'simplebar-placeholder',
    scrollbar: 'simplebar-scrollbar',
    track: 'simplebar-track',
    heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
    heightAutoObserverEl: 'simplebar-height-auto-observer',
    visible: 'simplebar-visible',
    horizontal: 'simplebar-horizontal',
    vertical: 'simplebar-vertical',
    hover: 'simplebar-hover',
    dragging: 'simplebar-dragging'
  },
  scrollbarMinSize: 25,
  scrollbarMaxSize: 0,
  timeout: 1000
};
SimpleBar$1.instances = new WeakMap();

/**
 * simplebar-react - v2.3.6
 * React component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat
 * Under MIT License
 */

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(source, true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$2(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/* Deprecated
 * Hardcore this here until we can safely deprecated it.
 * Helper function to retrieve options from element attributes
 */

var getOptions = function getOptions(obj) {
  var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);

    if (option) {
      var key = option[1].replace(/\W+(.)/g, function (x, chr) {
        return chr.toUpperCase();
      });

      switch (attribute.value) {
        case 'true':
          acc[key] = true;
          break;

        case 'false':
          acc[key] = false;
          break;

        case undefined:
          acc[key] = true;
          break;

        default:
          acc[key] = attribute.value;
      }
    }

    return acc;
  }, {});
  return options;
};

var SimpleBar = React__default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$scrollableNodePr = _ref.scrollableNodeProps,
      scrollableNodeProps = _ref$scrollableNodePr === void 0 ? {} : _ref$scrollableNodePr,
      otherProps = _objectWithoutProperties$1(_ref, ["children", "scrollableNodeProps"]);

  var instance;
  var scrollableNodeRef = useRef();
  var elRef = useRef();
  var contentNodeRef = useRef();
  var options = {};
  var rest = {};
  var deprecatedOptions = [];
  Object.keys(otherProps).forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(SimpleBar$1.defaultOptions, key)) {
      options[key] = otherProps[key];
    } else if (key.match(/data-simplebar-(.+)/) && key !== 'data-simplebar-direction') {
      deprecatedOptions.push({
        name: key,
        value: otherProps[key]
      });
    } else {
      rest[key] = otherProps[key];
    }
  });

  if (deprecatedOptions.length) {
    console.warn("simplebar-react: this way of passing options is deprecated. Pass it like normal props instead:\n        'data-simplebar-auto-hide=\"false\"' \u2014> 'autoHide=\"false\"'\n      ");
  }

  useEffect(function () {
    scrollableNodeRef = scrollableNodeProps.ref || scrollableNodeRef;

    if (elRef.current) {
      instance = new SimpleBar$1(elRef.current, _objectSpread2({}, getOptions(deprecatedOptions), {}, options, {}, scrollableNodeRef && {
        scrollableNode: scrollableNodeRef.current
      }, {}, contentNodeRef.current && {
        contentNode: contentNodeRef.current
      }));

      if (ref) {
        ref.current = instance;
      }
    }

    return function () {
      instance.unMount();
      instance = null;
    };
  }, []);
  return React__default.createElement("div", _extends$1({
    ref: elRef,
    "data-simplebar": true
  }, rest), React__default.createElement("div", {
    className: "simplebar-wrapper"
  }, React__default.createElement("div", {
    className: "simplebar-height-auto-observer-wrapper"
  }, React__default.createElement("div", {
    className: "simplebar-height-auto-observer"
  })), React__default.createElement("div", {
    className: "simplebar-mask"
  }, React__default.createElement("div", {
    className: "simplebar-offset"
  }, typeof children === 'function' ? children({
    scrollableNodeRef: scrollableNodeRef,
    contentNodeRef: contentNodeRef
  }) : React__default.createElement("div", _extends$1({}, scrollableNodeProps, {
    className: "simplebar-content-wrapper".concat(scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : '')
  }), React__default.createElement("div", {
    className: "simplebar-content"
  }, children)))), React__default.createElement("div", {
    className: "simplebar-placeholder"
  })), React__default.createElement("div", {
    className: "simplebar-track simplebar-horizontal"
  }, React__default.createElement("div", {
    className: "simplebar-scrollbar"
  })), React__default.createElement("div", {
    className: "simplebar-track simplebar-vertical"
  }, React__default.createElement("div", {
    className: "simplebar-scrollbar"
  })));
});
SimpleBar.displayName = 'SimpleBar';
SimpleBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  scrollableNodeProps: PropTypes.object
};

var css_248z$7 = "[data-simplebar] {\n  position: relative;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start;\n}\n\n.simplebar-wrapper {\n  overflow: hidden;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\n.simplebar-mask {\n  direction: inherit;\n  position: absolute;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: auto !important;\n  height: auto !important;\n  z-index: 0;\n}\n\n.simplebar-offset {\n  direction: inherit !important;\n  box-sizing: inherit !important;\n  resize: none !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n.simplebar-content-wrapper {\n  direction: inherit;\n  box-sizing: border-box !important;\n  position: relative;\n  display: block;\n  height: 100%; /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */\n  width: auto;\n  max-width: 100%; /* Not required for horizontal scroll to trigger */\n  max-height: 100%; /* Needed for vertical scroll to trigger */\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.simplebar-content-wrapper::-webkit-scrollbar,\n.simplebar-hide-scrollbar::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.simplebar-content:before,\n.simplebar-content:after {\n  content: ' ';\n  display: table;\n}\n\n.simplebar-placeholder {\n  max-height: 100%;\n  max-width: 100%;\n  width: 100%;\n  pointer-events: none;\n}\n\n.simplebar-height-auto-observer-wrapper {\n  box-sizing: inherit !important;\n  height: 100%;\n  width: 100%;\n  max-width: 1px;\n  position: relative;\n  float: left;\n  max-height: 1px;\n  overflow: hidden;\n  z-index: -1;\n  padding: 0;\n  margin: 0;\n  pointer-events: none;\n  flex-grow: inherit;\n  flex-shrink: 0;\n  flex-basis: 0;\n}\n\n.simplebar-height-auto-observer {\n  box-sizing: inherit;\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1000%;\n  width: 1000%;\n  min-height: 1px;\n  min-width: 1px;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n\n.simplebar-track {\n  z-index: 1;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-content {\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-track {\n  pointer-events: all;\n}\n\n.simplebar-scrollbar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  min-height: 10px;\n}\n\n.simplebar-scrollbar:before {\n  position: absolute;\n  content: '';\n  background: black;\n  border-radius: 7px;\n  left: 2px;\n  right: 2px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n}\n\n.simplebar-scrollbar.simplebar-visible:before {\n  /* When hovered, remove all transitions from drag handle */\n  opacity: 0.5;\n  transition: opacity 0s linear;\n}\n\n.simplebar-track.simplebar-vertical {\n  top: 0;\n  width: 11px;\n}\n\n.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {\n  top: 2px;\n  bottom: 2px;\n}\n\n.simplebar-track.simplebar-horizontal {\n  left: 0;\n  height: 11px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {\n  height: 100%;\n  left: 2px;\n  right: 2px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar {\n  right: auto;\n  left: 0;\n  top: 2px;\n  height: 7px;\n  min-height: 0;\n  min-width: 10px;\n  width: auto;\n}\n\n/* Rtl support */\n[data-simplebar-direction='rtl'] .simplebar-track.simplebar-vertical {\n  right: auto;\n  left: 0;\n}\n\n.hs-dummy-scrollbar-size {\n  direction: rtl;\n  position: fixed;\n  opacity: 0;\n  visibility: hidden;\n  height: 500px;\n  width: 500px;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.simplebar-hide-scrollbar {\n  position: fixed;\n  left: 0;\n  visibility: hidden;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n";
styleInject(css_248z$7);

var css_248z$6 = ".sw-scrollbar .simplebar-content {\n  height: 100%; }\n\n.sw-scrollbar .simplebar-scrollbar:before {\n  background-color: white;\n  border-radius: 0; }\n";
styleInject(css_248z$6);

var SwScrollbar = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "sw-scrollbar" : _b, sx = _a.sx, rest = __rest(_a, ["className", "sx"]);
    return (React.createElement(SimpleBar, __assign({ forceVisible: "y", className: className, style: __assign({ height: '100%', width: '100%' }, (sx || {})) }, rest)));
};

var CustomizedLayout = styled(Box)(function (_a) {
    _a.theme;
    return "\n  .MuiContainer-root:not(.sw-layout-top) {\n    position: relative;\n    height: 100%;\n  }\n";
});
var SwLayout = function (_a) {
    var _b = _a.backgroundUrl, backgroundUrl = _b === void 0 ? null : _b, _c = _a.hideTop, hideTop = _c === void 0 ? false : _c, _d = _a.children, children = _d === void 0 ? null : _d, _e = _a.drawer, drawer = _e === void 0 ? null : _e, _f = _a.top, top = _f === void 0 ? null : _f, _g = _a.className, className = _g === void 0 ? "" : _g;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "sw-background " + className, style: {
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
        React__default.createElement(CustomizedLayout, { sx: {
                display: "flex",
            }, className: "sw-main-box " + className },
            drawer,
            React__default.createElement(Box, { component: "main", sx: {
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "hidden",
                } },
                React__default.createElement(Container, { className: "sw-layout-top", maxWidth: "xl", sx: { display: hideTop ? 'none' : 'flex' } }, top),
                React__default.createElement(SwScrollbar, { sx: {
                        height: hideTop ? "100%" : "calc(100% - 50px)"
                    } },
                    React__default.createElement(Container, { maxWidth: "xl" }, children))))));
};

var css_248z$5 = ".sw-main-sidebar .sw-sidebar-divider {\n  margin: 40px 0;\n  height: 2px;\n  background-color: #FFFFFF; }\n\n.sw-main-sidebar .sw-sidebar-close-button {\n  position: absolute;\n  right: 5px;\n  top: 5px; }\n\n.sw-main-sidebar:not(.is-mobile) .MuiDrawer-paper {\n  border-right: 4px solid #FFFFFF; }\n\n.sw-main-sidebar .sw-sidebar-menu-icon {\n  width: 26px;\n  height: 26px;\n  margin: 10px; }\n\n.sw-main-sidebar .sw-sidebar-top {\n  flex: 35%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.sw-main-sidebar .sw-sidebar-menu {\n  flex: 65%; }\n\n.sw-main-sidebar.MuiDrawer-docked .MuiPaper-root {\n  display: flex;\n  align-items: center; }\n\n.sw-main-sidebar .MuiListItem-root {\n  background-color: #FFFFFF;\n  border: 2px solid #969696;\n  height: 46px;\n  cursor: pointer;\n  transition: border-width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, max-height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n  .sw-main-sidebar .MuiListItem-root .MuiListItemText-root {\n    color: #0D0D0B;\n    white-space: nowrap !important; }\n  .sw-main-sidebar .MuiListItem-root + .MuiListItem-root {\n    margin-top: 25px; }\n  .sw-main-sidebar .MuiListItem-root .sw-sidebar-menu-icon svg {\n    fill: #0D0D0B; }\n  .sw-main-sidebar .MuiListItem-root:hover, .sw-main-sidebar .MuiListItem-root.active-link {\n    background-color: #0D0D0B;\n    border-color: #969696; }\n    .sw-main-sidebar .MuiListItem-root:hover .MuiListItemText-root, .sw-main-sidebar .MuiListItem-root.active-link .MuiListItemText-root {\n      color: #FFFFFF; }\n    .sw-main-sidebar .MuiListItem-root:hover .sw-sidebar-menu-icon svg, .sw-main-sidebar .MuiListItem-root.active-link .sw-sidebar-menu-icon svg {\n      fill: #FFFFFF; }\n\n@media screen and (max-width: 599px) {\n  .sw-main-sidebar .sw-sidebar-top {\n    flex: 10%; } }\n";
styleInject(css_248z$5);

var DrawerFooter = styled$1('div')(function (_a) {
    _a.theme;
    return ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '48px'
    });
});
var SwSidebar = function (_a) {
    var _b, _c;
    var _d = _a.menuItems, menuItems = _d === void 0 ? [] : _d, _e = _a.open, open = _e === void 0 ? false : _e, _f = _a.width, width = _f === void 0 ? 300 : _f, _g = _a.backgroundColor, backgroundColor = _g === void 0 ? "transparent" : _g, _h = _a.sidebarTopIcon, sidebarTopIcon = _h === void 0 ? null : _h, _j = _a.mobile, mobile = _j === void 0 ? false : _j, _k = _a.handleToggle, handleToggle = _k === void 0 ? function () { return null; } : _k;
    var theme = createTheme();
    return (React__default.createElement(Drawer, { anchor: "left", sx: __assign(__assign({ width: !mobile ? width : '100%', transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }) }, (!open && !mobile && (_b = {
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                })
            },
            _b[theme.breakpoints.up("sm")] = {
                width: theme.spacing(12),
            },
            _b))), { flexShrink: 0, '& .MuiDrawer-paper': __assign({ transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }), paddingX: '50px', overflowX: "hidden", backgroundColor: !mobile ? backgroundColor : 'black', width: !mobile ? width : '100%', boxSizing: 'border-box' }, (!open && !mobile && (_c = {
                    padding: 0,
                    overflowX: "hidden",
                    transition: theme.transitions.create("width", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    })
                },
                _c[theme.breakpoints.up("sm")] = {
                    width: theme.spacing(12),
                },
                _c[".MuiList-root"] = {
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
                },
                _c))) }), className: "sw-main-sidebar " + (mobile ? 'is-mobile' : ''), variant: mobile ? 'temporary' : 'permanent', open: open },
        mobile && (React__default.createElement(Tooltip, { title: "Close sidebar", placement: "right", color: "white" },
            React__default.createElement(IconButton, { className: "sw-sidebar-close-button", color: "secondary", onClick: handleToggle },
                React__default.createElement(CloseIcon, null)))),
        React__default.createElement("div", { className: "sw-sidebar-top" }, React__default.createElement(SvgIcon, { component: sidebarTopIcon, width: mobile || !open ? '60' : '100', height: mobile ? '60' : '100' })),
        React__default.createElement(List, { className: "sw-sidebar-menu" }, menuItems.map(function (item, id) {
            if (item.type === "divider") {
                return React__default.createElement(Divider, { key: id, className: "sw-sidebar-divider" });
            }
            if (item.type === "href") {
                return (React__default.createElement(Tooltip, { key: id, title: !open ? item.label : "", placement: "right" },
                    React__default.createElement(ListItem, { onClick: mobile ? handleToggle : function () { return null; }, activeClassName: "active-link", component: NavLink, to: item.href, replace: true, key: id },
                        React__default.createElement("div", { className: "sw-sidebar-menu-icon" }, item.icon),
                        React__default.createElement(ListItemText, { primary: item.label }))));
            }
            return (React__default.createElement(Tooltip, { key: id, title: !open ? item.label : "", placement: "right" },
                React__default.createElement(ListItem, { onClick: item.onClick, key: id },
                    React__default.createElement("div", { className: "sw-sidebar-menu-icon" }, item.icon),
                    React__default.createElement(ListItemText, { primary: item.label }))));
        })),
        !mobile && React__default.createElement(DrawerFooter, null,
            React__default.createElement(Tooltip, { title: !open ? 'Open' : "Close", placement: "right" },
                React__default.createElement(IconButton, { color: "secondary", onClick: handleToggle }, !open ? React__default.createElement(ChevronRightIcon, null) : React__default.createElement(ChevronLeftIcon, null))))));
};

function JoinSelSvg(_a) {
    var _b = _a === void 0 ? {
        height: "0",
        width: "0",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 52.492 36" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M26.107 5.655c-4.52 0-8.186 4.278-8.186 9.556a9.863 9.863 0 004.351 8.444l-3 1.391-7.987 3.7a2.022 2.022 0 00-1.156 1.965v8.8a2.046 2.046 0 001.793 2.142h28.414a2.031 2.031 0 001.852-2.142v-8.8a2.021 2.021 0 00-1.156-1.965l-7.7-3.7-3.2-1.515a9.917 9.917 0 004.158-8.32c0-5.278-3.664-9.556-8.186-9.556zM12.9 9.016a6.319 6.319 0 00-4.659 2.257 8.74 8.74 0 00-1.939 5.44A8.271 8.271 0 009.895 23.6L.926 27.767A1.526 1.526 0 000 29.387v7.06c.048.936.534 1.723 1.446 1.737h5.963v-7.468a4.862 4.862 0 012.721-4.4l5.959-2.836a5.723 5.723 0 001.331-1.1 13.412 13.412 0 01-1.215-12.327 6.564 6.564 0 00-3.3-1.043zm26.622 0a6.323 6.323 0 00-3.413 1.156 13.52 13.52 0 01-1.158 12.1 6.117 6.117 0 001.568 1.328l5.729 2.721a4.943 4.943 0 012.662 4.4v7.467h6.134a1.6 1.6 0 001.448-1.737v-7.064a1.655 1.655 0 00-.926-1.62l-8.854-4.227a8.479 8.479 0 003.472-6.83 8.7 8.7 0 00-1.939-5.44 6.456 6.456 0 00-4.717-2.257z", transform: "translate(0 -5.655)" })));
}

function DitoLogoSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 76.397 76.397" },
        React__default.createElement("g", { xmlns: "http://www.w3.org/2000/svg", fill: "#fff", "data-name": "Group 1818", transform: "translate(-2538.506 -214.397)" },
            React__default.createElement("g", { xmlns: "http://www.w3.org/2000/svg", "data-name": "Group 12", transform: "translate(2538.913 214.804)" },
                React__default.createElement("g", { "data-name": "Path 1-2" },
                    React__default.createElement("path", { fill: "#fff", d: "M2598.4 290.586a.2.2 0 01-.035 0l-59.042-8.214a.245.245 0 01-.117-.435l21.455-16.846V239.13l-20.573-16.392a.244.244 0 01-.06-.312.246.246 0 01.3-.109l27.758 10.334 21.3-1.588 8.8-15.934a.243.243 0 01.2-.125.224.224 0 01.188.072.221.221 0 01.031.038l10.411 14.6a.259.259 0 01.046.132V275a.247.247 0 01-.035.126l-.009.013-10.418 15.34c-.006.007-.011.015-.018.021a.246.246 0 01-.073.058.263.263 0 01-.069.023h-.041zm-58.439-8.621l58.022 8.072-7.548-15.833-22.559-1.277a.227.227 0 01-.047-.007h-.007a.242.242 0 01-.107-.066.128.128 0 01-.02-.023.248.248 0 01-.045-.136l.028-6.9-6.684-.324zm58.684-7.3v14.877l9.726-14.327zm-7.652-.433l7.162 15.024v-14.615zm7.652-.058l9.4.532-9.4-7.331zm0-7.42l9.927 7.74v-44.369l-9.927.74zm-7.893 6.973l7.4.419V267l-3.508-2.734-7.287 2.355zm-22.464-1.271l21.907 1.24-3.333-6.992-15-.726zm-.129-6.656l-.024 5.921 3.18-5.769zm26.537-2.058a.244.244 0 01.15.052l3.309 2.579V230.9l-8.468.631-3.119 5.649.688 28.955 7.365-2.38a.241.241 0 01.079-.009zm-22.574 1.76l14.646.708-.691-29.087a.25.25 0 01.031-.124l3-5.427-20.656 1.54 4.878 8.746a.246.246 0 01.031.119V263.2a.233.233 0 01-.031.118zm-3.961-.191l3.417.165 1.078-1.956-4.491.739zm-4.939-.239l4.45.216v-.949zm-21.629-41.762l19.466 15.509a.244.244 0 01.093.191v25.91l6.527-1.075.125-30.776zm26.7 10.522l-.121 29.931 4.7-.773v-20.946zm29.867-17.637l-8.186 14.824 8.186-.61zm.49-.182v14.36l9.72-.725z", "data-name": "Path 22", transform: "translate(-2539.113 -215.004)" })),
                React__default.createElement("g", { "data-name": "Path 1-2", transform: "translate(.001 23.763)" },
                    React__default.createElement("path", { fill: "#fff", d: "M2539.358 294.032a.245.245 0 01-.076-.477l55.169-18.082v-.373h-21.337a.245.245 0 01-.244-.245v-21.023l-12.021-2.923a.245.245 0 11.116-.475l12.174 2.96 21.548-.782a.238.238 0 01.179.069.244.244 0 01.074.176v22.793a.245.245 0 01-.168.232l-55.337 18.138a.255.255 0 01-.077.012zm34-19.418h21.092v-21.5l-21.092.765z", "data-name": "Path 23", transform: "translate(-2539.114 -250.426)" })),
                React__default.createElement("g", { "data-name": "Group 11", transform: "translate(55.338 14.614)" },
                    React__default.createElement("path", { fill: "#fff", d: "M2621.847 248.612a.245.245 0 01-.153-.435l14.121-11.335a.244.244 0 01.306.381L2622 248.558a.244.244 0 01-.153.054z", "data-name": "Path 24", transform: "translate(-2621.602 -236.787)" }))),
            React__default.createElement("g", { "data-name": "Group 15", transform: "translate(2538.506 214.397)" },
                React__default.createElement("g", { "data-name": "Path 1-2", transform: "translate(21.548 21.872)" },
                    React__default.createElement("path", { fill: "#fff", d: "M2605.068 252.383a.657.657 0 01-.285-.066l-8.216-4-25.24 1.878a.641.641 0 01-.7-.6.652.652 0 01.6-.7l25.416-1.89a.639.639 0 01.333.064l8.375 4.076a.653.653 0 01-.287 1.24z", "data-name": "Path 25", transform: "translate(-2570.626 -247.001)" })),
                React__default.createElement("g", { "data-name": "Path 1-2" },
                    React__default.createElement("path", { fill: "#fff", d: "M2539.158 282.581h-.009a.653.653 0 01-.643-.652v-.01l.881-59.58a.649.649 0 01.17-.417.65.65 0 01.146-.12.652.652 0 01.262-.088l58.151-7.3a.653.653 0 01.163 1.3l-57.6 7.228-.873 59.013a.653.653 0 01-.648.626z", "data-name": "Path 26", transform: "translate(-2538.506 -214.397)" })),
                React__default.createElement("g", { "data-name": "Group 13", transform: "translate(21.548 23.762)" },
                    React__default.createElement("path", { fill: "#fff", d: "M2597.391 278.583h-.031l-26.114-1.263a.654.654 0 01-.621-.652v-26.2a.653.653 0 01.653-.653.652.652 0 01.652.653v25.574l25.373 1.227 7.111-2.3v-22.312a.653.653 0 111.305 0v22.793a.651.651 0 01-.452.621l-7.676 2.48a.661.661 0 01-.2.032z", "data-name": "Path 27", transform: "translate(-2570.626 -249.819)" })),
                React__default.createElement("g", { "data-name": "Group 14" },
                    React__default.createElement("path", { fill: "#fff", d: "M2598.2 290.794a.573.573 0 01-.09-.006l-59.043-8.214a.652.652 0 11.18-1.292l58.636 8.157 10.08-15.188v-44.379l-10.294-14.443a.652.652 0 111.063-.757l10.417 14.612a.649.649 0 01.121.378v44.785a.649.649 0 01-.109.361l-10.417 15.692a.65.65 0 01-.544.294z", "data-name": "Path 28", transform: "translate(-2538.505 -214.398)" }))))));
}

var css_248z$4 = ".sw-button {\n  transition: border-width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, max-height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n";
styleInject(css_248z$4);

var CustomizedButton = styled$2(Button)(function (_a) {
    var theme = _a.theme;
    return "\n  width: 100%;\n  background-color: " + theme.palette.text.primary + ";\n  border: 2px solid " + theme.palette.text.primary + ";\n  height: 56px;\n  cursor: pointer;\n  line-height: 0;\n  color: " + theme.palette.primary.main + ";\n\n\n  &.Mui-disabled {\n    background-color: " + theme.palette.text.primary + " !important;\n  }\n\n  &:hover,\n  &.active-link {\n    color: " + theme.palette.text.primary + ";\n    background-color: " + theme.palette.primary.main + ";\n\n    .sw-btn-icon {\n      fill: " + theme.palette.text.primary + ";\n    }\n  }\n";
});
var SwButton = function (_a) {
    var label = _a.label, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.variant, variant = _c === void 0 ? "contained" : _c, _d = _a.color, color = _d === void 0 ? "primary" : _d, rest = __rest(_a, ["label", "className", "variant", "color"]);
    return (React.createElement(CustomizedButton, __assign({}, rest, { variant: variant, color: color, className: "sw-button " + className }),
        React.createElement("span", { style: { marginTop: '4px' }, className: "sw-btn-label" }, label)));
};

var COMMON_MIME_TYPES = new Map([
    ['avi', 'video/avi'],
    ['gif', 'image/gif'],
    ['ico', 'image/x-icon'],
    ['jpeg', 'image/jpeg'],
    ['jpg', 'image/jpeg'],
    ['mkv', 'video/x-matroska'],
    ['mov', 'video/quicktime'],
    ['mp4', 'video/mp4'],
    ['pdf', 'application/pdf'],
    ['png', 'image/png'],
    ['zip', 'application/zip'],
    ['doc', 'application/msword'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
]);
function toFileWithPath(file, path) {
    var f = withMimeType(file);
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        var webkitRelativePath = file.webkitRelativePath;
        Object.defineProperty(f, 'path', {
            value: typeof path === 'string'
                ? path
                // If <input webkitdirectory> is set,
                // the File will have a {webkitRelativePath} property
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                    ? webkitRelativePath
                    : file.name,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    return f;
}
function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        var ext = name.split('.')
            .pop().toLowerCase();
        var type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}

var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 * @param evt
 */
function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, isDragEvt(evt) && evt.dataTransfer
                    ? getDataTransferFiles(evt.dataTransfer, evt.type)
                    : getInputFiles(evt)];
        });
    });
}
function isDragEvt(value) {
    return !!value.dataTransfer;
}
function getInputFiles(evt) {
    var files = isInput(evt.target)
        ? evt.target.files
            ? fromList(evt.target.files)
            : []
        : [];
    return files.map(function (file) { return toFileWithPath(file); });
}
function isInput(value) {
    return value !== null;
}
function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function () {
        var items, files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dt.items) return [3 /*break*/, 2];
                    items = fromList(dt.items)
                        .filter(function (item) { return item.kind === 'file'; });
                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                    // only 'dragstart' and 'drop' has access to the data (source node)
                    if (type !== 'drop') {
                        return [2 /*return*/, items];
                    }
                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                        .map(function (file) { return toFileWithPath(file); }))];
            }
        });
    });
}
function noIgnoredFiles(files) {
    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    var files = [];
    // tslint:disable: prefer-for-of
    for (var i = 0; i < items.length; i++) {
        var file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
}
function flatten(items) {
    return items.reduce(function (acc, files) { return __spread(acc, (Array.isArray(files) ? flatten(files) : [files])); }, []);
}
function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
        return Promise.reject(item + " is not a File");
    }
    var fwp = toFileWithPath(file);
    return Promise.resolve(fwp);
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
        });
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function (resolve, reject) {
        var entries = [];
        function readEntries() {
            var _this = this;
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                var files, err_1, items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!batch.length) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(entries)];
                        case 2:
                            files = _a.sent();
                            resolve(files);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            items = Promise.all(batch.map(fromEntry));
                            entries.push(items);
                            // Continue reading
                            readEntries();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        var fwp = toFileWithPath(file, entry.fullPath);
                        resolve(fwp);
                    }, function (err) {
                        reject(err);
                    });
                })];
        });
    });
}

var _default = function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = (file.type || '').toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim().toLowerCase();

      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
};

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

var FILE_INVALID_TYPE = 'file-invalid-type';
var FILE_TOO_LARGE = 'file-too-large';
var FILE_TOO_SMALL = 'file-too-small';
var TOO_MANY_FILES = 'too-many-files';

var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(', ')) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: 'Too many files'
}; // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted

function fileAccepted(file, accept) {
  var isAcceptable = file.type === 'application/x-moz-file' || _default(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }

  return [true, null];
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function allFilesAccepted(_ref) {
  var files = _ref.files,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      multiple = _ref.multiple,
      maxFiles = _ref.maxFiles;

  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }

  return files.every(function (file) {
    var _fileAccepted = fileAccepted(file, accept),
        _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1),
        accepted = _fileAccepted2[0];

    var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
        _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1),
        sizeMatch = _fileMatchSize2[0];

    return accepted && sizeMatch;
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === 'function') {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== 'undefined') {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === 'Files' || type === 'application/x-moz-file';
  });
}

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf('Edge/') !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}

var _excluded = ["children"],
    _excluded2 = ["open"],
    _excluded3 = ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
    _excluded4 = ["refKey", "onChange", "onClick"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, _excluded);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, _excluded2);

  useImperativeHandle(ref, function () {
    return {
      open: open
    };
  }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return /*#__PURE__*/React__default.createElement(Fragment, null, children(_objectSpread(_objectSpread({}, props), {}, {
    open: open
  })));
});
Dropzone.displayName = 'Dropzone'; // Add default props for react-docgen

var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.draggedFiles Files in active drag
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: PropTypes.func,

  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: PropTypes.bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: PropTypes.bool,

  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: PropTypes.bool,

  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: PropTypes.bool,

  /**
   * If true, disables drag 'n' drop
   */
  noDrag: PropTypes.bool,

  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: PropTypes.bool,

  /**
   * Minimum file size (in bytes)
   */
  minSize: PropTypes.number,

  /**
   * Maximum file size (in bytes)
   */
  maxSize: PropTypes.number,

  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: PropTypes.number,

  /**
   * Enable/disable the dropzone
   */
  disabled: PropTypes.bool,

  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: PropTypes.func,

  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: PropTypes.func,

  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: PropTypes.func,

  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: PropTypes.func,

  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: PropTypes.func,

  /**
   * Custom validation function 
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: PropTypes.func
};
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state and some helper functions.
 *
 * @typedef {object} DropzoneState
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} draggedFiles Files in active drag
 * @property {File[]} acceptedFiles Accepted files
 * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {string|string[]} [props.accept] Set accepted file types.
 * See https://github.com/okonet/attr-accept for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all.
 * See: https://github.com/react-dropzone/react-dropzone/issues/276
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
 * If `multiple` is set to false and additional files are dropped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 *
 * @returns {DropzoneState}
 */

function useDropzone() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaultProps$options = _objectSpread(_objectSpread({}, defaultProps), options),
      accept = _defaultProps$options.accept,
      disabled = _defaultProps$options.disabled,
      getFilesFromEvent = _defaultProps$options.getFilesFromEvent,
      maxSize = _defaultProps$options.maxSize,
      minSize = _defaultProps$options.minSize,
      multiple = _defaultProps$options.multiple,
      maxFiles = _defaultProps$options.maxFiles,
      onDragEnter = _defaultProps$options.onDragEnter,
      onDragLeave = _defaultProps$options.onDragLeave,
      onDragOver = _defaultProps$options.onDragOver,
      onDrop = _defaultProps$options.onDrop,
      onDropAccepted = _defaultProps$options.onDropAccepted,
      onDropRejected = _defaultProps$options.onDropRejected,
      onFileDialogCancel = _defaultProps$options.onFileDialogCancel,
      preventDropOnDocument = _defaultProps$options.preventDropOnDocument,
      noClick = _defaultProps$options.noClick,
      noKeyboard = _defaultProps$options.noKeyboard,
      noDrag = _defaultProps$options.noDrag,
      noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling,
      validator = _defaultProps$options.validator;

  var rootRef = useRef(null);
  var inputRef = useRef(null);

  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive,
      draggedFiles = state.draggedFiles; // Fn for opening the file dialog programmatically

  var openFileDialog = useCallback(function () {
    if (inputRef.current) {
      dispatch({
        type: 'openDialog'
      });
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch]); // Update file dialog active state when the window is focused on

  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: 'closeDialog'
            });

            if (typeof onFileDialogCancel === 'function') {
              onFileDialogCancel();
            }
          }
        }
      }, 300);
    }
  };

  useEffect(function () {
    window.addEventListener('focus', onWindowFocus, false);
    return function () {
      window.removeEventListener('focus', onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancel]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = useCallback(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, inputRef]); // Update focus state for the dropzone

  var onFocusCb = useCallback(function () {
    dispatch({
      type: 'focus'
    });
  }, []);
  var onBlurCb = useCallback(function () {
    dispatch({
      type: 'blur'
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = useCallback(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [inputRef, noClick]);
  var dragTargetsRef = useRef([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  useEffect(function () {
    if (preventDropOnDocument) {
      document.addEventListener('dragover', onDocumentDragOver, false);
      document.addEventListener('drop', onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener('dragover', onDocumentDragOver);
        document.removeEventListener('drop', onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (draggedFiles) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        dispatch({
          draggedFiles: draggedFiles,
          isDragActive: true,
          type: 'setDraggedFiles'
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);

    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = 'copy';
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (hasFiles && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.current.filter(function (target) {
      return rootRef.current && rootRef.current.contains(target);
    }); // Make sure to remove a target present multiple times only once
    // (Firefox may fire dragenter/dragleave multiple times on the same element)

    var targetIdx = targets.indexOf(event.target);

    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }

    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      isDragActive: false,
      type: 'setDraggedFiles',
      draggedFiles: []
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var onDropCb = useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        var acceptedFiles = [];
        var fileRejections = [];
        files.forEach(function (file) {
          var _fileAccepted = fileAccepted(file, accept),
              _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
              accepted = _fileAccepted2[0],
              acceptError = _fileAccepted2[1];

          var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
              _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
              sizeMatch = _fileMatchSize2[0],
              sizeError = _fileMatchSize2[1];

          var customErrors = validator ? validator(file) : null;

          if (accepted && sizeMatch && !customErrors) {
            acceptedFiles.push(file);
          } else {
            var errors = [acceptError, sizeError];

            if (customErrors) {
              errors = errors.concat(customErrors);
            }

            fileRejections.push({
              file: file,
              errors: errors.filter(function (e) {
                return e;
              })
            });
          }
        });

        if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
          // Reject everything and empty accepted files
          acceptedFiles.forEach(function (file) {
            fileRejections.push({
              file: file,
              errors: [TOO_MANY_FILES_REJECTION]
            });
          });
          acceptedFiles.splice(0);
        }

        dispatch({
          acceptedFiles: acceptedFiles,
          fileRejections: fileRejections,
          type: 'setFiles'
        });

        if (onDrop) {
          onDrop(acceptedFiles, fileRejections, event);
        }

        if (fileRejections.length > 0 && onDropRejected) {
          onDropRejected(fileRejections, event);
        }

        if (acceptedFiles.length > 0 && onDropAccepted) {
          onDropAccepted(acceptedFiles, event);
        }
      });
    }

    dispatch({
      type: 'reset'
    });
  }, [multiple, accept, minSize, maxSize, maxFiles, getFilesFromEvent, onDrop, onDropAccepted, onDropRejected, noDragEventsBubbling, validator]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = useMemo(function () {
    return function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? 'ref' : _ref2$refKey,
          onKeyDown = _ref2.onKeyDown,
          onFocus = _ref2.onFocus,
          onBlur = _ref2.onBlur,
          onClick = _ref2.onClick,
          onDragEnter = _ref2.onDragEnter,
          onDragOver = _ref2.onDragOver,
          onDragLeave = _ref2.onDragLeave,
          onDrop = _ref2.onDrop,
          rest = _objectWithoutProperties(_ref2, _excluded3);

      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb))
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = useCallback(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = useMemo(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
          onChange = _ref3.onChange,
          onClick = _ref3.onClick,
          rest = _objectWithoutProperties(_ref3, _excluded4);

      var inputProps = _defineProperty({
        accept: accept,
        multiple: multiple,
        type: 'file',
        style: {
          display: 'none'
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        autoComplete: 'off',
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept: accept,
    minSize: minSize,
    maxSize: maxSize,
    multiple: multiple,
    maxFiles: maxFiles
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread(_objectSpread({}, state), {}, {
    isDragAccept: isDragAccept,
    isDragReject: isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case 'focus':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });

    case 'blur':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });

    case 'openDialog':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: true
      });

    case 'closeDialog':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });

    case 'setDraggedFiles':
      /* eslint no-case-declarations: 0 */
      var isDragActive = action.isDragActive,
          draggedFiles = action.draggedFiles;
      return _objectSpread(_objectSpread({}, state), {}, {
        draggedFiles: draggedFiles,
        isDragActive: isDragActive
      });

    case 'setFiles':
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });

    case 'reset':
      return _objectSpread({}, initialState);

    default:
      return state;
  }
}

var css_248z$3 = ".sw-uploader-wrapper {\n  position: relative; }\n  .sw-uploader-wrapper .MuiAvatar-root {\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    transition: border-width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, max-height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    backface-visibility: hidden;\n    border: 3px solid #969696;\n    border-radius: 50%;\n    box-sizing: border-box; }\n  .sw-uploader-wrapper .sw-upload-action {\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    display: flex;\n    top: 0;\n    left: 0;\n    align-items: center;\n    justify-content: center;\n    transition: border-width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, max-height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n    .sw-uploader-wrapper .sw-upload-action .MuiSvgIcon-root {\n      width: 1.5em;\n      height: 1.5em; }\n      .sw-uploader-wrapper .sw-upload-action .MuiSvgIcon-root.remove {\n        color: #f44336; }\n      .sw-uploader-wrapper .sw-upload-action .MuiSvgIcon-root.upload {\n        color: #0D0D0B; }\n  .sw-uploader-wrapper:hover .MuiAvatar-root {\n    opacity: 0.3;\n    border-width: 4px;\n    border-color: #FFFFFF; }\n  .sw-uploader-wrapper:hover .sw-upload-action {\n    opacity: 1; }\n";
styleInject(css_248z$3);

var SwUploadFile = function (_a) {
    var _b = _a.multiple, multiple = _b === void 0 ? false : _b, _c = _a.sx, sx = _c === void 0 ? {
        width: '120px',
        height: '120px'
    } : _c, _d = _a.initialPreviewUrl, initialPreviewUrl = _d === void 0 ? null : _d, _e = _a.fileChange, fileChange = _e === void 0 ? function (file) { return null; } : _e;
    var _f = useState(initialPreviewUrl), preview = _f[0], setPreview = _f[1];
    var _g = useDropzone({
        multiple: multiple,
        disabled: !!preview,
        accept: 'image/jpeg, image/png',
        noClick: true,
        noKeyboard: true,
        onDrop: function (_a) {
            var file = _a[0];
            var url = URL.createObjectURL(file);
            setPreview(url);
            fileChange(file);
        }
    }), getRootProps = _g.getRootProps, getInputProps = _g.getInputProps, open = _g.open;
    var handleActionClick = function () {
        if (preview) {
            setPreview(null);
            fileChange(null);
        }
        else {
            open();
        }
    };
    var Action = function () {
        return (React__default.createElement("div", { onClick: handleActionClick, className: "sw-upload-action" }, preview ? React__default.createElement(HighlightOffIcon, { className: "remove" }) : React__default.createElement(PhotoCameraIcon, { className: "upload" })));
    };
    return (React__default.createElement("div", __assign({}, getRootProps({ className: 'sw-uploader-wrapper', style: sx })),
        React__default.createElement(Avatar, { alt: "Avatar", src: preview, imgProps: {
                style: {
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "cover",
                },
            } }),
        React__default.createElement(Action, null),
        React__default.createElement("input", __assign({}, getInputProps()))));
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

var TransitionGroupContext = React__default.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;

var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass$1(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props;
        _this$props.classNames;
        var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/React__default.createElement(Transition$1, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(React__default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, Transition$1.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : {};
var CSSTransition$1 = CSSTransition;

var css_248z$2 = ".sw-animated-page {\n  position: absolute;\n  left: 24px;\n  right: 24px; }\n\n.sw-animated-page-enter {\n  opacity: 0;\n  transform: translateX(100%); }\n\n.sw-animated-page-enter-active {\n  opacity: 1;\n  transition: 0.4s ease-in-out;\n  transform: translateX(0); }\n\n.sw-animated-page-exit {\n  opacity: 1;\n  transform: translateX(0); }\n\n.sw-animated-page-exit-active {\n  opacity: 0;\n  transition: 0.4s ease-in-out;\n  transform: translateX(100%); }\n\n.sw-animated-slide-enter {\n  opacity: 0;\n  transform: translateX(-100%); }\n\n.sw-animated-slide-enter-active {\n  opacity: 1;\n  transition: 0.4s ease-in-out;\n  transform: translateX(0); }\n\n.sw-animated-slide-exit {\n  opacity: 1;\n  transform: translateX(0); }\n\n.sw-animated-slide-exit-active {\n  opacity: 0;\n  transition: 0.4s ease-in-out;\n  transform: translateX(-100%); }\n";
styleInject(css_248z$2);

var SwAnimatedRoute = function (_a) {
    var exact = _a.exact, to = _a.to, sx = _a.sx, Component = _a.component, rest = __rest(_a, ["exact", "to", "sx", "component"]);
    return (React__default.createElement(Route, { exact: exact, key: to, path: to }, function (_a) {
        var match = _a.match;
        return (React__default.createElement(CSSTransition$1, { key: to, in: match != null, timeout: { enter: 800, exit: 400 }, classNames: "sw-animated-slide", unmountOnExit: true },
            React__default.createElement("div", { className: "sw-animated-page", style: __assign({ height: "100%" }, (sx || {})) },
                React__default.createElement(Component, __assign({}, rest)))));
    }));
};
var SwAnimatedComponent = function (_a) {
    var inMatch = _a.inMatch, sx = _a.sx, Component = _a.component, rest = __rest(_a, ["inMatch", "sx", "component"]);
    return (React__default.createElement(CSSTransition$1, { in: inMatch, timeout: 300, classNames: "sw-animated-slide", unmountOnExit: true },
        React__default.createElement("div", { className: "sw-animated-page", style: __assign({ height: "100%" }, (sx || {})) },
            React__default.createElement(Component, __assign({}, rest)))));
};
var SwAnimatedRoute$1 = {
    SwAnimatedRoute: SwAnimatedRoute,
    SwAnimatedComponent: SwAnimatedComponent,
};

var css_248z$1 = "@media screen and (max-width: 959px) {\n  .sw-divider.MuiDivider-vertical {\n    margin-left: 20px;\n    margin-right: 20px; }\n  .sw-divider:not(.MuiDivider-vertical) {\n    margin-top: 20px;\n    margin-bottom: 20px; } }\n\n@media screen and (max-width: 599px) {\n  .sw-divider.MuiDivider-vertical {\n    margin-left: 10px;\n    margin-right: 10px; }\n  .sw-divider:not(.MuiDivider-vertical) {\n    margin-top: 10px;\n    margin-bottom: 10px; } }\n";
styleInject(css_248z$1);

var SwDivider = function (_a) {
    var sx = _a.sx, _b = _a.width, width = _b === void 0 ? '4px' : _b, props = __rest(_a, ["sx", "width"]);
    var styles = __assign({}, (sx || {}));
    if (props.orientation !== "vertical") {
        styles = __assign(__assign({}, styles), { width: "100%", height: width, marginTop: "40px", marginBottom: "40px" });
    }
    else {
        styles = __assign(__assign({}, styles), { height: "100%", width: width, marginLeft: "40px", marginRight: "40px" });
    }
    return (React.createElement(Divider$1, __assign({ className: "sw-divider", color: "white", sx: styles }, props)));
};

var css_248z = ".quote {\n  padding: 20px;\n  border: 2px solid #969696;\n  background: rgba(13, 13, 11, 0.8); }\n";
styleInject(css_248z);

var SwQuote = function (_a) {
    var children = _a.children, mobileStartText = _a.mobileStartText, _b = _a.mobile, mobile = _b === void 0 ? false : _b;
    var _c = React.useState(null), anchorEl = _c[0], setAnchorEl = _c[1];
    var handlePopoverOpen = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handlePopoverClose = function () {
        setAnchorEl(null);
    };
    var open = Boolean(anchorEl);
    return (React.createElement(Box$1, { className: "sw-box-quote" }, mobile ? (React.createElement(React.Fragment, null,
        React.createElement(Typography, { "aria-owns": open ? "mouse-over-popover" : undefined, "aria-haspopup": "true", onMouseEnter: handlePopoverOpen, onMouseLeave: handlePopoverClose, color: "text.primary", component: "div", variant: "subtitle1" }, mobileStartText),
        React.createElement(Popover, { id: "mouse-over-popover", sx: {
                pointerEvents: "none",
            }, open: open, anchorEl: anchorEl, anchorOrigin: {
                vertical: "center",
                horizontal: "center",
            }, transformOrigin: {
                vertical: "center",
                horizontal: "center",
            }, onClose: handlePopoverClose },
            React.createElement(Quote, { children: children })))) : (React.createElement(Quote, { children: children }))));
};
var Quote = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "quote" },
        React.createElement(Typography, { color: "text.primary", component: "div", variant: "subtitle1" }, children)));
};

function QRCodeSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", style: { height: height, width: width }, className: className, viewBox: "0 0 231.5 230.825" },
        React__default.createElement("defs", null,
            React__default.createElement("pattern", { id: "pattern", width: "100%", height: "100%", preserveAspectRatio: "none", viewBox: "0 0 1200 1200" },
                React__default.createElement("image", { width: "1200", height: "1200", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwCAYAAADrIbPPAAAMSmlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnltSSWiBCEgJvYkivUgJoYUuVbARkkBCiTEhiNhZFhVcu4iADV0VUXR1BWStqGtdFLtreVhQWVkXCzZU3qTAuvq99753vm/u/XPmnP+UzL13BgCdOp5Umo/qAlAgKZQlRoSwJqRnsEiPAApIcFgDQx5fLmUnJMQAKEP3f8qb6wBR3q+4KLm+nf+voicQyvkAIAkQZwnk/AKIfwYAL+NLZYUAEH2g3npGoVSJJ0FsIIMJQixV4hw1LlPiLDWuVtkkJ3Ig3gUAmcbjyXIA0G6FelYRPwfyaN+E2FUiEEsA0CFDHMgX8QQQR0I8qqBgmhJDO+CQ9QVPzj84s4Y5ebycYayuRSXkULFcms+b+X+2439LQb5iKIYdHDSRLDJRWTPs2828adFKTIO4V5IVFw+xPsTvxAKVPcQoVaSITFHbo6Z8OQf2DDAhdhXwQqMhNoU4XJIfF6PRZ2WLw7kQwxWCFosLucka30VCeViShrNONi0xfghnyzhsjW8TT6aKq7Q/qchLYWv4b4qE3CH+1yWi5DR1zhi1SJwaB7E2xEx5XlK02gazKRFx4oZsZIpEZf42EPsJJREhan5sSrYsPFFjLyuQD9WLLRKJuXEaXFMoSo7U8Ozi81T5G0HcKpSwU4Z4hPIJMUO1CIShYerasUtCSYqmXqxLWhiSqPF9Kc1P0NjjVGF+hFJvBbGpvChJ44sHFsIFqebH46SFCcnqPPGsXF5UgjofvBjEAA4IBSyggCMLTAO5QNzR29ILf6lnwgEPyEAOEAIXjWbII001I4HXJFAC/oRICOTDfiGqWSEogvpPw1r11QVkq2aLVB554DHEBSAa5MPfCpWXZDhaKngENeJvovNhrvlwKOe+1bGhJkajUQzxsnSGLIlhxFBiJDGc6Iib4IG4Px4Dr8FwuOE+uO9Qtn/bEx4TOgkPCNcIXYRbU8Wlsq/qYYFY0AUjhGtqzvqyZtwOsnriIXgA5IfcOBM3AS64B4zExoNgbE+o5WgyV1b/Nfc/avii6xo7iisFpYygBFMcvvbUdtL2HGZR9vTLDqlzzRruK2d45uv4nC86LYD36K8tsUXYfuw0dhw7ix3CWgALO4q1Yheww0o8vIoeqVbRULREVT55kEf8TTyeJqayk3LXRtce14/quUJhsfL9CDjTpDNl4hxRIYsN3/xCFlfCHz2K5ebq5gqA8juifk29Yqq+Dwjz3N+60loAAvwGBwcP/a2LOQ9Asx4A1M9/6+zhe552AIAzcr5CVqTW4coLAVCBDnyijIE5/Eo5wHrcgBfwB8EgDESBeJAM0sEU2GURXM8yMAPMBgtAOagEy8EaUAM2gi1gB9gN9oEWcAgcB7+C8+ASuAZuw9XTDZ6BPvAGDCAIQkLoCAMxRiwQW8QZcUN8kEAkDIlBEpF0JBPJQSSIApmNfIdUIiuRGmQz0oD8hBxEjiNnkU7kFnIf6UFeIh9QDKWhBqgZaoeOQX1QNhqNJqOT0Rx0OlqClqFL0Wq0Ht2FNqPH0fPoNbQLfYb2YwDTwpiYJeaC+WAcLB7LwLIxGTYXq8CqsHqsCWuD//MVrAvrxd7jRJyBs3AXuIIj8RScj0/H5+JL8Bp8B96Mn8Sv4PfxPvwzgU4wJTgT/AhcwgRCDmEGoZxQRdhGOEA4BZ+mbsIbIpHIJNoTveHTmE7MJc4iLiGuJ+4hHiN2Eh8S+0kkkjHJmRRAiifxSIWkctI60i7SUdJlUjfpHVmLbEF2I4eTM8gScim5iryTfIR8mfyEPEDRpdhS/CjxFAFlJmUZZSuljXKR0k0ZoOpR7akB1GRqLnUBtZraRD1FvUN9paWlZaXlqzVeS6w1X6taa6/WGa37Wu9p+jQnGoc2iaagLaVtpx2j3aK9otPpdvRgega9kL6U3kA/Qb9Hf6fN0B6tzdUWaM/TrtVu1r6s/VyHomOrw9aZolOiU6WzX+eiTq8uRddOl6PL052rW6t7UPeGbr8eQ2+sXrxegd4SvZ16Z/We6pP07fTD9AX6Zfpb9E/oP2RgDGsGh8FnfMfYyjjF6DYgGtgbcA1yDSoNdht0GPQZ6ht6GKYaFhvWGh427GJiTDsml5nPXMbcx7zO/DDCbAR7hHDE4hFNIy6PeGs00ijYSGhUYbTH6JrRB2OWcZhxnvEK4xbjuya4iZPJeJMZJhtMTpn0jjQY6T+SP7Ji5L6Rv5uipk6miaazTLeYXjDtNzM3izCTmq0zO2HWa840DzbPNV9tfsS8x4JhEWghtlhtcdTiD5Yhi83KZ1WzTrL6LE0tIy0VlpstOywHrOytUqxKrfZY3bWmWvtYZ1uvtm637rOxsIm1mW3TaPO7LcXWx1Zku9b2tO1bO3u7NLuFdi12T+2N7Ln2JfaN9ncc6A5BDtMd6h2uOhIdfRzzHNc7XnJCnTydRE61ThedUWcvZ7HzeufOUYRRvqMko+pH3XChubBdilwaXe6PZo6OGV06umX08zE2YzLGrBhzesxnV0/XfNetrrfH6o+NGls6tm3sSzcnN75brdtVd7p7uPs891b3Fx7OHkKPDR43PRmesZ4LPds9P3l5e8m8mrx6vG28M73rvG/4GPgk+CzxOeNL8A3xned7yPe9n5dfod8+v7/8Xfzz/Hf6Px1nP044buu4hwFWAbyAzQFdgazAzMBNgV1BlkG8oPqgB8HWwYLgbcFP2I7sXPYu9vMQ1xBZyIGQtxw/zhzOsVAsNCK0IrQjTD8sJawm7F64VXhOeGN4X4RnxKyIY5GEyOjIFZE3uGZcPreB2xflHTUn6mQ0LTopuib6QYxTjCymLRaNjYpdFXsnzjZOEtcSD+K58avi7ybYJ0xP+GU8cXzC+NrxjxPHJs5OPJ3ESJqatDPpTXJI8rLk2ykOKYqU9lSd1EmpDalv00LTVqZ1TRgzYc6E8+km6eL01gxSRmrGtoz+iWET10zsnuQ5qXzS9cn2k4snn51iMiV/yuGpOlN5U/dnEjLTMndmfuTF8+p5/VncrLqsPj6Hv5b/TBAsWC3oEQYIVwqfZAdkr8x+mhOQsyqnRxQkqhL1ijniGvGL3Mjcjblv8+LztucN5qfl7ykgF2QWHJToS/IkJ6eZTyue1il1lpZLu6b7TV8zvU8WLdsmR+ST5a2FBnDDfkHhoPhecb8osKi26N2M1Bn7i/WKJcUXZjrNXDzzSUl4yY+z8Fn8We2zLWcvmH1/DnvO5rnI3Ky57fOs55XN654fMX/HAuqCvAW/lbqWrix9/V3ad21lZmXzyx5+H/F9Y7l2uaz8xkL/hRsX4YvEizoWuy9et/hzhaDiXKVrZVXlxyX8Jed+GPtD9Q+DS7OXdizzWrZhOXG5ZPn1FUErdqzUW1my8uGq2FXNq1mrK1a/XjN1zdkqj6qNa6lrFWu7qmOqW9fZrFu+7mONqOZabUjtnjrTusV1b9cL1l/eELyhaaPZxsqNHzaJN93cHLG5ud6uvmoLcUvRlsdbU7ee/tHnx4ZtJtsqt33aLtnetSNxx8kG74aGnaY7lzWijYrGnl2Tdl3aHbq7tcmlafMe5p7KvWCvYu8fP2X+dH1f9L72/T77m362/bnuAONARTPSPLO5r0XU0tWa3tp5MOpge5t/24FfRv+y/ZDlodrDhoeXHaEeKTsyeLTkaP8x6bHe4znHH7ZPbb99YsKJqyfHn+w4FX3qzK/hv544zT599EzAmUNn/c4ePOdzruW81/nmC54XDvzm+duBDq+O5oveF1sv+V5q6xzXeeRy0OXjV0Kv/HqVe/X8tbhrnddTrt+8MelG103Bzae38m+9+L3o94Hb8+8Q7lTc1b1bdc/0Xv2/HP+1p8ur6/D90PsXHiQ9uP2Q//DZI/mjj91lj+mPq55YPGl46vb0UE94z6U/Jv7R/Uz6bKC3/E+9P+ueOzz/+a/gvy70TejrfiF7MfhyySvjV9tfe7xu70/ov/em4M3A24p3xu92vPd5f/pD2ocnAzM+kj5Wf3L81PY5+vOdwYLBQSlPxlNtBTA40OxsAF5uB4CeDgDjEtw/TFSf81SCqM+mKgT+E1afBVXiBUATvCm365xjAOyFw24+3IMEA6DcqicHA9TdfXhoRJ7t7qbmosETD+Hd4OArMwBIbQB8kg0ODqwfHPy0FSZ7C4Bj09XnS6UQ4dlgk4cSXWYWzwdfyb8BTIl/WwUFudEAAEAASURBVHgB7Nx/rO93XR/wU3vaS6G9jB9XEErMaJBSgsVAKSbQRcLtMHFNFHWubHGFBFn2e9HGZStzlpmNkKxZZta51ErAsmyrS4xuUTe3FZfRqnDZsJtzjBiBmba2clsK/Xn3evfecz339Ps+//W8nsf345N8/X6/nw/h9Xo/Xu/v53zP83Lc2nIQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBJoFzmuur3yGwIurjTdltKILAksLPFSr/42lBba2XlHrf32zwa9W/acae7isar+6sf7jVfu/NNZX+rTAW+rphYtj/Oda/xMLG5xfa3/HwusfS3+4Hp9qNnhz1X9Rcw/KEyCwtfWbhfAgCAIECBwvglMeDOyB9j1wl9vR1g0B+/Bo8xxubja4v3n9yp8WuLt5HyR8Lzi2+GYY96KEOXT2cCJgD4yfzZ0GavO3B07vgfE7q2NxgW9YfP2WT4AAAQIECBAgQIAAAQIECBAgEC4gwAofkPYIECBAgAABAgQIECBAgAABAqsLCLBW3wHWT4AAAQIECBAgQIAAAQIECBAIFxBghQ9IewQIECBAgAAB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T6AE/mE9XkmiVeAvVXUBVusIFE8Q8CeECVPQAwECBAgQIECAAAECBAgQIECAwFRAgDWlcYEAAQIECBAgQIAAAQIECBAgQCBBQICVMAU9ECBAgAABAgQIECBAgAABAgQITAUEWFMaFwgQIECAAAECBAgQIECAAAECBBIEBFgJU9ADAQIECBAgQIAAAQIECBAgQIDAVECANaVxgQABAgQIECBAgAABAgQIECBAIEFAgJUwBT0QIECAAAECBAgQIECAAAECBAhMBQRYUxoXCBAgQIAAAQIECBAgQIAAAQIEEgQEWAlT0AMBAgQIECBAgAABAgQIECBAgMBUQIA1pXGBAAECBAgQIECAAAECBAgQIEAgQUCAlTAFPRAgQIAAAQIECBAgQIAAAQIECEwFBFhTGhcIECBAgAABAgQIECBAgAABAgQSBARYCVPQAwECBAgQIECAAAECBAgQIECAwFRAgDWlcYEAAQIECBAgQIAAAQIECBAgQCBBQICVMAU9ECBAgAABAgQIECBAgAABAgQITAUEWFMaFwgQIECAAAECBAgQIECAAAECBBIEBFgJU9ADAQIECBAgQIAAAQIECBAgQIDAVECANaVxgQABAgQIECBAgAABAgQIECBAIEFAgJUwBT0QIECAAAECBAgQIECAAAECBAhMBQRYUxoXCBAgQIAAAQIECBAgQIAAAQIEEgQEWAlT0AMBAgQIECBAgAABAgQIECBAgMBUQIA1pXGBAAECBAgQIECAAAECBAgQIEAgQUCAlTAFPRAgQIAAAQIECBAgQIAAAQIECEwFBFhTGhcIECBAgAABAgQIECBAgAABAgQSBARYCVPQAwECBAgQIECAAAECBAgQIECAwFRAgDWlcYEAAQIECBAgQIAAAQIECBAgQCBBQICVMAU9ECBAgAABAgQIECBAgAABAgQITAUEWFMaFwgQIECAAAECBAgQIECAAAECBBIEBFgJU9ADAQIECBAgQIAAAQIECBAgQIDAVECANaVxgQABAgQIECBAgAABAgQIECBAIEFAgJUwBT0QIECAAAECBAgQIECAAAECBAhMBbanV1wgQIAAgRUF7qlFX9m48I9W7fc31h+lX1qP8xp7eLKxttKnBa6qp8cWx/hXtf7nNRt8seqPz+Oqx8laePcMuu2f7m5AfQIECBDIERBg5cxCJwQIEEgQuLCaGI+u44KuwrvqPr7rtZdrCowAs/NzkKB+fjWxeoiXMAczSJiCHggQIEAgQsCfEEaMQRMECBAgQIAAAQIECBAgQIAAAQIzAQHWTMZ5AgQIECBAgAABAgQIECBAgACBCAEBVsQYNEGAAAECBAgQIECAAAECBAgQIDATEGDNZJwnQIAAAQIECBAgQIAAAQIECBCIEBBgRYxBEwQIECBAgAABAgQIECBAgAABAjMBAdZMxnkCBAgQIECAAAECBAgQIECAAIEIAQFWxBg0QYAAAQIECBAgQIAAAQIECBAgMBMQYM1knCdAgAABAgQIECBAgAABAgQIEIgQEGBFjEETBAgQIECAAAECBAgQIECAAAECMwEB1kzGeQIECBAgQIAAAQIECBAgQIAAgQgBAVbEGDRBgAABAgQIECBAgAABAgQIECAwExBgzWScJ0CAAAECBAgQIECAAAECBAgQiBAQYEWMQRMECBAgQIAAAQIECBAgQIAAAQIzAQHWTMZ5AgQIECBAgAABAgQIECBAgACBCAEBVsQYNEGAAAECBAgQIECAAAECBAgQIDATEGDNZJwnQIAAAQIECBAgQIAAAQIECBCIEBBgRYxBEwQIECBAgAABAgQIECBAgAABAjMBAdZMxnkCBAgQIECAAAECBAgQIECAAIEIAQFWxBg0QYAAAQIECBAgQIAAAQIECBAgMBMQYM1knCdAgAABAgQIECBAgAABAgQIEIgQEGBFjEETBAgQIECAAAECBAgQIECAAAECMwEB1kzGeQIECBAgQIAAAQIECBAgQIAAgQgBAVbEGDRBgAABAgQIECBAgAABAgQIECAwExBgzWScJ0CAAAECBAgQIECAAAECBAgQiBAQYEWMQRMECBAgQIAAAQIECBAgQIAAAQIzAQHWTMZ5AgQIECBAgAABAgQIECBAgACBCAEBVsQYNEGAAAECBAgQIECAAAECBAgQIDATEGDNZJwnQIAAAQIECBAgQIAAAQIECBCIEBBgRYxBEwQIECBAgAABAgQIECBAgAABAjMBAdZMxnkCBAgQIECAAAECBAgQIECAAIEIge2ILjRBgAABAikC/7gaeVljM/+jsXZK6WurkXc2NvNI1f7xxvpKnxb4p/X0e40YR6r2hxvrj9Ifqcepxh4uqtqdBl+v+h9sXL/SBAgQIEAgSkCAFTUOzRAgQKBd4KPtHWjg7UXwI40MD1RtAVbjAM6U/ng9393YxvVV+2cb64/S31iP+xt7uKlqd34WH676AqzGDaA0AQIECGQJ+BPCrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAgKsrHnohgABAgQIECBAgAABAgQIECBAYI+AAGsPiLcECBAgQIAAAQIECBAgQIAAAQJZAttZ7eiGQJvAI1X5S23VFR4C/w9DhMA3VhcXRnTS18S4F5zqK7/1lardeT96qOpf2rj+Ufpr9eg0GJ+BY6MRR6vAN1X1I40dHG2srTSBJAHf0fqnMX5XcRBYXkCAtfwWAHBG4OP1PB4OAqsL/HIBXLk4wgtr/ScbDT5Stcej6xjBzX1dxc/UfU89v6+xh6ur9qca6yt9WuCzIAgQiBC4KqILTRAgsLyAPyFcfgsAIECAAAECBAgQIECAAAECBAhkCwiwsuejOwIECBAgQIAAAQIECBAgQIDA8gICrOW3AAACBAgQIECAAAECBAgQIECAQLaAACt7ProjQIAAAQIECBAgQIAAAQIECCwvIMBafgsAIECAAAECBAgQIECAAAECBAhkCwiwsuejOwIECBAgQIAAAQIECBAgQIDA8gICrOW3AAACBAgQIECAAAECBAgQIECAQLaAACt7ProjQIAAAQIECBAgQIAAAQIECCwvIMBafgsAIECAAAECBAgQIECAAAECBAhkCwiwsuejOwIECBAgQIAAAQIECBAgQIDA8gICrOW3AAACBAgQIECAAAECBAgQIECAQLaAACt7ProjQIAAAQIECBAgQIAAAQIECCwvIMBafgsAIECAAAECBAgQIECAAAECBAhkCwiwsuejOwIECBAgQIAAAQIECBAgQIDA8gICrOW3AAACBAgQIECAAAECBAgQIECAQLaAACt7ProjQIAAAQIECBAgQIAAAQIECCwvIMBafgsAIECAAAECBAgQIECAAAECBAhkCwiwsuejOwIECBAgQIAAAQIECBAgQIDA8gICrOW3AAACBAgQIECAAAECBAgQIECAQLaAACt7ProjQIAAAQIECBAgQIAAAQIECCwvIMBafgsAIECAAAECBAgQIECAAAECBAhkCwiwsuejOwIECBAgQIAAAQIECBAgQIDA8gICrOW3AAACBAgQIECAAAECBAgQIECAQLaAACt7ProjQIAAAQIECBAgQIAAAQIECCwvIMBafgsAIECAAAECBAgQIECAAAECBAhkCwiwsuejOwIECBAgQIAAAQIECBAgQIDA8gICrOW3AAACBAgQIECAAAECBAgQIECAQLaAACt7ProjQIAAAQIECBAgQIAAAQIECCwvIMBafgsAIECAAAECBAgQIECAAAECBAhkCwiwsuejOwIECBAgQIAAAQIECBAgQIDA8gICrOW3AAACBAgQIECAAAECBAgQIECAQLbAdnZ7ultI4JZa68MLrddSMwXemtnWUl39p1rtTzav+Keq/gWNPXyiav+bxvpKE0gReG81crKxme+t2j/QWD+h9F+uJt7R2MgXqvYPN9ZPKD2+m9yZ0Igelha4ZOnVW3yMgAArZhTLN3J8eQEABAgMgd+tR/cX9durh84vaicGhIMAga1fKIP7Gx2uaKydUvrN1cj3NDbz2cbaKaVf0TyDFAd9ECBAYMufENoEBAgQIECAAAECBAgQIECAAAEC0QICrOjxaI4AAQIECBAgQIAAAQIECBAgQECAZQ8QIECAAAECBAgQIECAAAECBAhECwiwosejOQIECBAgQIAAAQIECBAgQIAAAQGWPUCAAAECBAgQIECAAAECBAgQIBAtIMCKHo/mCBAgQIAAAQIECBAgQIAAAQIEBFj2AAECBAgQIECAAAECBAgQIECAQLSAACt6PJojQIAAAQIECBAgQIAAAQIECBAQYNkDBAgQIECAAAECBAgQIECAAAEC0QICrOjxaI4AAQIECBAgQIAAAQIECBAgQECAZQ8QIECAAAECBAgQIECAAAECBAhECwiwosejOQIECBAgQIAAAQIECBAgQIAAAQGWPUCAAAECBAgQIECAAAECBAgQIBAtIMCKHo/mCBAgQIAAAQIECBAgQIAAAQIEBFj2AAECBAgQIECAAAECBAgQIECAQLSAACt6PJojQIAAAQIECBAgQIAAAQIECBAQYNkDBAgQIECAAAECBAgQIECAAAEC0QICrOjxaI4AAQIECBAgQIAAAQIECBAgQECAZQ8QIECAAAECBAgQIECAAAECBAhECwiwosejOQIECBAgQIAAAQIECBAgQIAAAQGWPUCAAAECBAgQIECAAAECBAgQIBAtIMCKHo/mCBAgQIAAAQIECBAgQIAAAQIEBFj2AAECBAgQIECAAAECBAgQIECAQLSAACt6PJojQIAAAQIECBAgQIAAAQIECBAQYNkDBAgQIECAAAECBAgQIECAAAEC0QICrOjxaI4AAQIECBAgQIAAAQIECBAgQECAZQ8QIECAAAECBAgQIECAAAECBAhECwiwosejOQIECBAgQIAAAQIECBAgQIAAAQGWPUCAAAECBAgQIECAAAECBAgQIBAtIMCKHo/mCBAgQIAAAQIECBAgQIAAAQIEthEQKIGH6vFJEgQItAt8tr2D/gZeVi1c09zGp6r+8xp7+N3G2imlL69GOvfB6wIg3lg9HGns48VVu/u7wZuqh0cbDc5rNvh61e/8HAz6cU9e/fCzefUdYP0pAuN3VgcBAgQIECBA4KzAiXp1avHH0bMaa744tvj8V9//O+u/I2D739+8F29uNhj3op15rPo8fiY5CBAgQIDAMwL+hNBGIECAAAECBAgQIECAAAECBAgQiBYQYEWPR3MECBAgQIAAAQIECBAgQIAAAQICLHuAAAECBAgQIECAAAECBAgQIEAgWkCAFT0ezREgQIAAAQIECBAgQIAAAQIECAiw7AECBAgQIECAAAECBAgQIECAAIFoAQFW9Hg0R4AAAQIECBAgQIAAAQIECBAgIMCyBwgQIECAAAECBAgQIECAAAECBKIFBFjR49EcAQIECBAgQIAAAQIECBAgQICAAMseIECAAAECBAgQIECAAAECBAgQiBYQYEWPR3MECBAgQIAAAQIECBAgQIAAAQICLHuAAAECBAgQIECAAAECBAgQIEAgWkCAFT0ezREgQIAAAQIECBAgQIAAAQIECAiw7AECBAgQIECAAAECBAgQIECAAIFoAQFW9Hg0R4AAAQIECBAgQIAAAQIECBAgIMCyBwgQIECAAAECBAgQIECAAAECBKIFBFjR49EcAQIECBAgQIAAAQIECBAgQICAAMseIECAAAECBAgQIECAAAECBAgQiBYQYEWPR3MECBAgQIAAAQIECBAgQIAAAQICLHuAAAECBAgQIECAAAECBAgQIEAgWkCAFT0ezREgQIAAAQIECBAgQIAAAQIECAiw7AECBAgQIECAAAECBAgQIECAAIFoAQFW9Hg0R4AAAQIECBAgQIAAAQIECBAgIMCyBwgQIECAAAECBAgQIECAAAECBKIFBFjR49EcAQIECBAgQIAAAQIECBAgQICAAMseIECAAAECBAgQIECAAAECBAgQiBYQYEWPR3MECBAgQIAAAQIECBAgQIAAAQICLHuAAAECBAgQIECAAAECBAgQIEAgWkCAFT0ezREgQIAAAQIECBAgQIAAAQIECAiw7AECBAgQIECAAAECBAgQIECAAIFoAQFW9Hg0R4AAAQIECBAgQIAAAQIECBAgIMCyBwgQIECAAAECBAgQIECAAAECBKIFtqO709xKAnfWYi9bacEb1npVnXtiw3mnDk7gI1XqnQdX7lmVfrPOvO9ZZw/2xJ+tchcdbMlzql1X7/7+OWcO/s2vVcmnD77s2Yo/Wa/+xdl3B//iwSr5bQdf9pyKP1HvvvOcM+u9+Qu15M81LvutVftEY/1R+kXN9bvLP1INdH8Wx/143JdXPm6rxb9pZYBa+7X1uK/R4Aer9t9srP941X5LY32lCRA4IyDAshVSBF5XjYzHyof/RWT/9P9ktXBlYxsnG2vvlP7tnRdNz92/rI1lv6Fp7TtlX77zoun5qarbHVz8YdPak8r+TvMcrqj6nffDpFl09TKC9O7P4gi0Vz9eUwCrfxYubN4EL2uewQiwHAQIBAj4hTlgCFogQIAAAQIECBAgQIAAAQIECBCYCwiw5jauECBAgAABAgQIECBAgAABAgQIBAgIsAKGoAUCBAgQIECAAAECBAgQIECAAIG5gABrbuMKAQIECBAgQIAAAQIECBAgQIBAgIAAK2AIWiBAgAABAgQIECBAgAABAgQIEJgLCLDmNq4QIECAAAECBAgQIECAAAECBAgECAiwAoagBQIECBAgQIAAAQIECBAgQIAAgbmAAGtu4woBAgQIECBAgAABAgQIECBAgECAgAArYAhaIECAAAECBAgQIECAAAECBAgQmAsIsOY2rhAgQIAAAQIECBAgQIAAAQIECAQICLAChqAFAgQIECBAgAABAgQIECBAgACBuYAAa27jCgECBAgQIECAAAECBAgQIECAQICAACtgCFogQIAAAQIECBAgQIAAAQIECBCYCwiw5jauECBAgAABAgQIECBAgAABAgQIBAgIsAKGoAUCBAgQIECAAAECBAgQIECAAIG5gABrbuMKAQIECBAgQIAAAQIECBAgQIBAgIAAK2AIWiBAgAABAgQIECBAgAABAgQIEJgLCLDmNq4QIECAAAECBAgQIECAAAECBAgECAiwAoagBQIECBAgQIAAAQIECBAgQIAAgbmAAGtu4woBAgQIECBAgAABAgQIECBAgECAgAArYAhaIECAAAECBAgQIECAAAECBAgQmAsIsOY2rhAgQIAAAQIECBAgQIAAAQIECAQICLAChqAFAgQIECBAgAABAgQIECBAgACBuYAAa27jCgECBAgQIECAAAECBAgQIECAQICAACtgCFogQIAAAQIECBAgQIAAAQIECBCYCwiw5jauECBAgAABAgQIECBAgAABAgQIBAgIsAKGoAUCBAgQIECAAAECBAgQIECAAIG5gABrbuMKAQIECBAgQIAAAQIECBAgQIBAgIAAK2AIWiBAgAABAgQIECBAgAABAgQIEJgLCLDmNq4QIECAAAECBAgQIECAAAECBAgECGwH9KAFAgQyBN5cbbwho5W2Lj5flX+mrfrW1m831t4pfV29eMnOm4bntzXUVPJcgSP19vpzTx34u9+rij9z4FX/qOBL6+V3/dHbJV913w8H+p+rx9iPDgIECKwu8O0FcPniCL9U6//y4gbLL1+AtfwWAEDgrMD316sfOftuzRffW8u+c82ln131j9erK8++82JFgaO16J9uXvh7qv4djT1cXbVXD7DuLoPx6DzGDARYnRNQmwCBFIEfrEZ+KKWZpj6urboCrCb8lLL+hDBlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKCDA2sjiJAECBAgQIECAAAECBAgQIECAQIqAACtlEvogQIAAAQIECBAgQIAAAQIECBDYKLC98ayTBA5e4Koqef7Bl42q+MXq5khjR/+gar+wsX5C6Z+qJm5vbOS/Vu3vbKyvNIEh8EA9uu8FjzaP4jcCDL7abPB9Vf+25h6+teo/2NjDY421lc4ReFe10vk703VV/2M5HC2d3FJVb22pfLrohfV0srH+KP2j9ej82fzaqn/PaMRBoFOg82bcuW618wS6v6gniBytJsYPyK7jVBXu/uHctfaduhfUi0t23jQ8v6ChppIE9gq4F2xtPVUo7oe998OxL8d3g9XnMBwcvQLdgfrXepcfUf3x6mI8uo7xD8yd3w/Hup+uR+f90O9qYwqOdgF/Qtg+Ag0QIECAAAECBAgQIECAAAECBAjsJyDA2k/HNQIECBAgQIAAAQIECBAgQIAAgXYBAVb7CDRAgAABAgQIECBAgAABAgQIECCwn4AAaz8d1wgQIECAAAECBAgQIECAAAECBNoFBFjtI9AAAQIECBAgQIAAAQIECBAgQIDAfgICrP10XCNAgAABAgQIECBAgAABAgQIEGgXEGC1j0ADBAgQIECAAAECBAgQIECAAAEC+wkIsPbTcY0AAQIECBAgQIAAAQIECBAgQKBdQIDVPgINECBAgAABAgQIECBAgAABAgQI7CcgwNpPxzUCBAgQIECAAAECBAgQIECAAIF2AQFW+wg0QIAAAQIECBAgQIAAAQIECBAgsJ+AAGs/HdcIECBAgAABAgQIECBAgAABAgTaBQRY7SPQAAECBAgQIECAAAECBAgQIECAwH4CAqz9dFwjQIAAAQIECBAgQIAAAQIECBBoFxBgtY9AAwQIECBAgAABAgQIECBAgAABAvsJCLD203GNAAECBAgQIECAAAECBAgQIECgXUCA1T4CDRAgQIAAAQIECBAgQIAAAQIECOwnIMDaT8c1AgQIECBAgAABAgQIECBAgACBdgEBVvsINECAAAECBAgQIECAAAECBAgQILCfgABrPx3XCBAgQIAAAQIECBAgQIAAAQIE2gUEWO0j0AABAgQIECBAgAABAgQIECBAgMB+AgKs/XRcI0CAAAECBAgQIECAAAECBAgQaBcQYLWPQAMECBAgQIAAAQIECBAgQIAAAQL7CQiw9tNxjQABAgQIECBAgAABAgQIECBAoF1AgNU+Ag0QIECAAAECBAgQIECAAAECBAjsJyDA2k/HNQIECBAgQIAAAQIECBAgQIAAgXYBAVb7CDRAgAABAgQIECBAgAABAgQIECCwn4AAaz8d1wgQIECAAAECBAgQIECAAAECBNoFBFjtI9AAAQIECBAgQIAAAQIECBAgQIDAfgICrP10XCNAgAABAgQIECBAgAABAgQIEGgX2G7vQAMJApdVE3+xuZF/UvXvb+6hu/yPVQOdn8lPdgME1P9E9XCisY/zqvbNjfVH6Zc31/9M1f+3zT38nap/pLkH5Qm8vwhe1cjwVNX+YGP9UfqrzfW7y4/70N9tbuLbmuuPn0ndPxebCbYu726g6v9wPR4O6KOrhVNVuPt+eE/X4s/UvS/A4P80GyhPgECIwPHqY9yYOx9XhFhog0CnwDVVvPNzmFD79s4BnKl9snkONwUYaKFf4O7mfXhHP8HyHRxt3gMJPxP04HtBwh54bPm7EQACIQL+hDBkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIiAACtkENogQIAAAQIECBAgQIAAAQIECBDYLCDA2uziLAECBAgQIECAAAECBAgQIECAQIjAdkgf2iDwoiI4hoHA4gLPr/U/0GwwPovnN/ZwpGp33wvOa1y/0gR2BB6qF533g8eqfvdncaz/1A7Igs9P15o798Agv6Qe477sWFvgwVr+2I9dx0VV+AVdxUPqXlx9DIeu48kqPH4uOQgQINAucLw6GF8QPRjYA7174K72u8HW1gn3gvZ74U0B+0ALBK4PuBd0B2h2wdbW7QH7wHeT3u8mw//S5g/Djc37cAT63cet1UDnZ+HebgD1CQwBf0JoHxAgQIAAAQIECBAgQIAAAQIECEQLCLCix6M5AgQIECBAgAABAgQIECBAgAABAZY9QIAAAQIECBAgQIAAAQIECBAgEC0gwIoej+YIECBAgAABAgQIECBAgAABAgQEWPYAAQIECBAgQIAAAQIECBAgQIBAtIAAK3o8miNAgAABAgQIECBAgAABAgQIEBBg2QMECBAgQIAAAQIECBAgQIAAAQLRAgKs6PFojgABAgQIECBAgAABAgQIECBAQIBlDxAgQIAAAQIECBAgQIAAAQIECEQLCLCix6M5AgQIECBAgAABAgQIECBAgAABAZY9QIAAAQIECBAgQIAAAQIECBAgEC0gwIoej+YIECBAgAABAgQIECBAgAABAgQEWPYAAQIECBAgQIAAAQIECBAgQIBAtIAAK3o8miNAgAABAgQIECBAgAABAgQIEBBg2QMECBAgQIAAAQIECBAgQIAAAQLRAgKs6PFojgABAgQIECBAgAABAgQIECBAQIBlDxAgQIAAAQIECBAgQIAAAQIECEQLCLCix6M5AgQIECBAgAABAgQIECBAgAABAZY9QIAAAQIECBAgQIAAAQIECBAgEC0gwIoej+YIECBAgAABAgQIECBAgAABAgQEWPYAAQIECBAgQIAAAQIECBAgQIBAtIAAK3o8miNAgAABAgQIECBAgAABAgQIEBBg2QMECBAgQIAAAQIECBAgQIAAAQLRAgKs6PFojgABAgQIECBAgAABAgQIECBAQIBlDxAgQIAAAQIECBAgQIAAAQIECEQLCLCix6M5AgQIECBAgAABAgQIECBAgAABAZY9QIAAAQIECBAgQIAAAQIECBAgEC0gwIoej+YIECBAgAABAgQIECBAgAABAgQEWPYAAQIECBAgQIAAAQIECBAgQIBAtIAAK3o8miNAgAABAgQIECBAgAABAgQIEBBg2QMECBAgQIAAAQIECBAgQIAAAQLRAtvR3WmOwMEJ/Mcq9dMHV25jpY/WWZ/JjTQHdvKWqvTrB1bt2YVeXKfuePbpAz1za1U7eaAVzy12Tb39oXNPeUfgwAUuq4o3H3jVcwveVG8/f+4p7w5Y4Lur3vcdcM20cieqofekNXXA/YzP4uUHXHN3ufG9ZHw/6Tz+oLO42s8I3Fb/965Gi4urdvd31J+oHj7XaKA0AQIhAserj1OLP8Yv7d3HY9XA6nPoXv+7mzfBCG+6Dd7YbHBDgEH3DMYvS45egaurfPc+GD10HtdX8W6DY50AVXt8FrsNuuuPe/LqxwgNOudw5+oDqPXf2DyD8R199eOKAuj8HIza43dWx+IC/oRw8Q1g+QQIECBAgAABAgQIECBAgACBdAEBVvqE9EeAAAECBAgQIECAAAECBAgQWFxAgLX4BrB8AgQIECBAgAABAgQIECBAgEC6gAArfUL6I0CAAAECBAgQIECAAAECBAgsLiDAWnwDWD4BAgQIECBAgAABAgQIECBAIF1AgJU+If0RIECAAAECBAgQIECAAAECBBYXEGAtvgEsnwABAgQIECBAgAABAgQIECCQLiDASp+Q/ggQIECAAAECBAgQIECAAAECiwsIsBbfAJZPgAABAgQIECBAgAABAgQIEEgXEGClT0h/BAgQIECAAAECBAgQIECAAIHFBQRYi28AyydAgAABAgQIECBAgAABAgQIpAsIsNInpD8CBAgQIECAAAECBAgQIECAwOICAqzFN4DlEyBAgAABAgQIECBAgAABAgTSBQRY6RPSHwECBAgQIECAAAECBAgQIEBgcQEB1uIbwPIJECBAgAABAgQIECBAgAABAukCAqz0CemPAAECBAgQIECAAAECBAgQILC4gABr8Q1g+QQIECBAgAABAgQIECBAgACBdAEBVvqE9EeAAAECBAgQIECAAAECBAgQWFxAgLX4BrB8AgQIECBAgAABAgQIECBAgEC6gAArfUL6I0CAAAECBAgQIECAAAECBAgsLiDAWnwDWD4BAgQIECBAgAABAgQIECBAIF1AgJU+If0RIECAAAECBAgQIECAAAECBBYXEGAtvgEsnwABAgQIECBAgAABAgQIECCQLiDASp+Q/ggQIECAAAECBAgQIECAAAECiwsIsBbfAJZPgAABAgQIECBAgAABAgQIEEgXEGClT0h/BAgQIECAAAECBAgQIECAAIHFBQRYi28AyydAgAABAgQIECBAgAABAgQIpAsIsNInpD8CBAgQIECAAAECBAgQIECAwOICAqzFN4DlEyBAgAABAgQIECBAgAABAgTSBQRY6RPSHwECBAgQIECAAAECBAgQIEBgcYHtxddv+acFvlJP9yyO8YWA9Y8ZXBjQx8otvKQWf3UjwKVVu/uz+NXG9Y/S9wcYNBNsfam7gYD6l1UPL23s45urdvdn8ZHG9Y/SDwQYvKF66LwnjXvy6serC6Dz5+KY/+eah3Bv1T/S2MP4LHbOYCz9M/V4fLxY9Div1t09g/G7yn2L+ls2AQIECBAgsEHgzjp3qvFx14aenCKwosAdtejOz+LdK6IHrnkE2p37QO1+/xOB+/KgW3p3wOegO8y9McCg+37wgYPeeHvqXREwg+N7evJ2QQF/Qrjg0C0kLFQSAABAAElEQVSZAAECBAgQIECAAAECBAgQIHCYBARYh2laeiVAgAABAgQIECBAgAABAgQILCggwFpw6JZMgAABAgQIECBAgAABAgQIEDhMAgKswzQtvRIgQIAAAQIECBAgQIAAAQIEFhQQYC04dEsmQIAAAQIECBAgQIAAAQIECBwmAQHWYZqWXgkQIECAAAECBAgQIECAAAECCwoIsBYcuiUTIECAAAECBAgQIECAAAECBA6TgADrME1LrwQIECBAgAABAgQIECBAgACBBQUEWAsO3ZIJECBAgAABAgQIECBAgAABAodJQIB1mKalVwIECBAgQIAAAQIECBAgQIDAggICrAWHbskECBAgQIAAAQIECBAgQIAAgcMkIMA6TNPSKwECBAgQIECAAAECBAgQIEBgQQEB1oJDt2QCBAgQIECAAAECBAgQIECAwGESEGAdpmnplQABAgQIECBAgAABAgQIECCwoIAAa8GhWzIBAgQIECBAgAABAgQIECBA4DAJCLAO07T0SoAAAQIECBAgQIAAAQIECBBYUECAteDQLZkAAQIECBAgQIAAAQIECBAgcJgEBFiHaVp6JUCAAAECBAgQIECAAAECBAgsKCDAWnDolkyAAAECBAgQIECAAAECBAgQOEwCAqzDNC29EiBAgAABAgQIECBAgAABAgQWFBBgLTh0SyZAgAABAgQIECBAgAABAgQIHCYBAdZhmpZeCRAgQIAAAQIECBAgQIAAAQILCgiwFhy6JRMgQIAAAQIECBAgQIAAAQIEDpOAAOswTUuvBAgQIECAAAECBAgQIECAAIEFBQRYCw7dkgkQIECAAAECBAgQIECAAAECh0lAgHWYpqVXAgQIECBAgAABAgQIECBAgMCCAgKsBYduyQQIECBAgAABAgQIECBAgACBwyQgwDpM09IrAQIECBAgQIAAAQIECBAgQGBBAQHWgkO3ZAIECBAgQIAAAQIECBAgQIDAYRIQYB2maemVAAECBAgQIECAAAECBAgQILCggABrwaFbMgECBAgQIECAAAECBAgQIEDgMAlsH6Zm9Urgj7nAJ2t9F/4xX2P68m6rBj/c2OTJxto7pT9WL75l582iz99R6360ce3vr9rva6z/UNV+V2P9hNKvrybubm7kvVX/t5p76C7/p6uBCxqbGDMYn0dHn8BrqnT3Z7Fv9acrn6intzY3Mb4f/YnGHr6psfYo/UQ93t7cwxcC6nfvw//ZbKB8gIAAK2AIWiBwRuAt9SzA6t0OI7xa/YvyG8rgyt4xtFfv/tn4qhIY94Ou44GuwkF1X1C9dM5gUFwc5NHVyqe7Cp+pe21zfeW3tp5fCN2fxe45fLEa6P5uMkL9V3ZDNNY/FTCDxuU/U/prDLpHoP4Q8CeE9gEBAgQIECBAgAABAgQIECBAgEC0gAArejyaI0CAAAECBAgQIECAAAECBAgQEGDZAwQIECBAgAABAgQIECBAgAABAtECAqzo8WiOAAECBAgQIECAAAECBAgQIEBAgGUPECBAgAABAgQIECBAgAABAgQIRAsIsKLHozkCBAgQIECAAAECBAgQIECAAAEBlj1AgAABAgQIECBAgAABAgQIECAQLSDAih6P5ggQIECAAAECBAgQIECAAAECBARY9gABAgQIECBAgAABAgQIECBAgEC0gAArejyaI0CAAAECBAgQIECAAAECBAgQEGDZAwQIECBAgAABAgQIECBAgAABAtECAqzo8WiOAAECBAgQIECAAAECBAgQIEBAgGUPECBAgAABAgQIECBAgAABAgQIRAsIsKLHozkCBAgQIECAAAECBAgQIECAAAEBlj1AgAABAgQIECBAgAABAgQIECAQLSDAih6P5ggQIECAAAECBAgQIECAAAECBARY9gABAgQIECBAgAABAgQIECBAgEC0gAArejyaI0CAAAECBAgQIECAAAECBAgQEGDZAwQIECBAgAABAgQIECBAgAABAtECAqzo8WiOAAECBAgQIECAAAECBAgQIEBAgGUPECBAgAABAgQIECBAgAABAgQIRAsIsKLHozkCBAgQIECAAAECBAgQIECAAAEBlj1AgAABAgQIECBAgAABAgQIECAQLSDAih6P5ggQIECAAAECBAgQIECAAAECBARY9gABAgQIECBAgAABAgQIECBAgEC0gAArejyaI0CAAAECBAgQIECAAAECBAgQEGDZAwQIECBAgAABAgQIECBAgAABAtECAqzo8WiOAAECBAgQIECAAAECBAgQIEBAgGUPECBAgAABAgQIECBAgAABAgQIRAsIsKLHozkCBAgQIECAAAECBAgQIECAAIFtBARK4OX1eMfiEr9T6//1ZoN/WfUvaO5h9fLfXADXNyLcV7X/Q2P9Ufrf1ePexh5eXbWvbqyvNIEUgWurkctSmlm0j29tXveTVf9fN/cw7sfjvtx1/GEV/vddxc/UfWc9H2vs4VVVu/O7yVj6L9XjovFi0eOJgHVfVT28JqCPzhZ+tYr/fmcDahMgkCFwvNo4tfjj1oxR6KJZ4M7mz8FdzetPKH9D8wzGvfBoM8TNzQb3N69/lL+j2WD1n4nWn/G96GTAZ/H25s/iiQCD8bN59c/EpQFzWL2F8bvK6vtw/M7qWFzgGxZfv+UTIECAAAECBAgQIECAAAECBAiECwiwwgekPQIECBAgQIAAAQIECBAgQIDA6gICrNV3gPUTIECAAAECBAgQIECAAAECBMIFBFjhA9IeAQIECBAgQIAAAQIECBAgQGB1AQHW6jvA+gkQIECAAAECBAgQIECAAAEC4QICrPABaY8AAQIECBAgQIAAAQIECBAgsLqAAGv1HWD9BAgQIECAAAECBAgQIECAAIFwAQFW+IC0R4AAAQIECBAgQIAAAQIECBBYXUCAtfoOsH4CBAgQIECAAAECBAgQIECAQLiAACt8QNojQIAAAQIECBAgQIAAAQIECKwuIMBafQdYPwECBAgQIECAAAECBAgQIEAgXECAFT4g7REgQIAAAQIECBAgQIAAAQIEVhcQYK2+A6yfAAECBAgQIECAAAECBAgQIBAuIMAKH5D2CBAgQIAAAQIECBAgQIAAAQKrCwiwVt8B1k+AAAECBAgQIECAAAECBAgQCBcQYIUPSHsECBAgQIAAAQIECBAgQIAAgdUFBFir7wDrJ0CAAAECBAgQIECAAAECBAiECwiwwgekPQIECBAgQIAAAQIECBAgQIDA6gICrNV3gPUTIECAAAECBAgQIECAAAECBMIFBFjhA9IeAQIECBAgQIAAAQIECBAgQGB1AQHW6jvA+gkQIECAAAECBAgQIECAAAEC4QICrPABaY8AAQIECBAgQIAAAQIECBAgsLqAAGv1HWD9BAgQIECAAAECBAgQIECAAIFwAQFW+IC0R4AAAQIECBAgQIAAAQIECBBYXUCAtfoOsH4CBAgQIECAAAECBAgQIECAQLiAACt8QNojQIAAAQIECBAgQIAAAQIECKwuIMBafQdYPwECBAgQIECAAAECBAgQIEAgXECAFT4g7REgQIAAAQIECBAgQIAAAQIEVhcQYK2+A6yfAAECBAgQIECAAAECBAgQIBAuIMAKH5D2CBAgQIAAAQIECBAgQIAAAQKrCwiwVt8B1k+AAAECBAgQIECAAAECBAgQCBc4L7w/7R2MwPEq88sHU2pa5W115X9Prz73F76/SvzYc19m3wqvrKuP7/ufeG4vfrD+6//qc1ti3//2L9fVK/f9Tzz3F49WiSPPfZlphTfVlY9Nrx7Mhe+oMp87mFIbqwz/MYfO454qfnFjA8+v2uPRdZyqwn/QVfxM3UvqufOz+Omq/65mg+7y31MN3NrcxOuqfude/FtV/0cbDR6u2t33w/FZfF6jweVV++ca64/SL6zHBY09/ELVfm9j/VF6fA6fbuzhr1Ttv9dY/7GqfWlj/VF6fC+5qLGHb6nav9ZYf5S+th6/0tyD8s0C2831lSewI/BQvbh/503D81NV86UNdXeX7A6Uxw/GToPx5aD7ONncwKNVv3MGY/ndPxfGPui8FwyDl9Rj/NK26jHuRd37sNv+yWqgex92G4zwpPsYvzR3zmHck1c/xj7o3AvjH/dWvx+Nf9zs/BwkfAbGP+p07oPOf2De8X+kXoxH13Gsq7C6BHYL+BPC3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAgKs3RpeEyBAgAABAgQIECBAgAABAgQIxAkIsOJGoiECBAgQIECAAAECBAgQIECAAIHdAtu733i9rMD/rZV/qHn19zfXTyj/t6uJpxob+fbG2qP0JfW4qbmH7vLnVQPdn8Xrqoc/0w3RXP+Wqj9m0XX8qSr89q7i6j4j8Ir6v933o9uqhy+bR6vAXVW98558qup378Ofrx4+2ziF32+eQePSz5b+rbOv+l789Sp9tK/81tsaa4/S59ej+7P4i9XDp0czDgIECBAg8IEiGF8UPRh07oHxy1L3caIa6DRIqN35JX3M/2YzWH4Pjs/B1WMzNB7XV+3uz+OxxvUnlB73ou4Z3JAAoYd2gS8G7MXuz0J3/fG7SudxRRXvNjjeCaB2hoA/IcyYgy4IECBAgAABAgQIECBAgAABAgQmAgKsCYzTBAgQIECAAAECBAgQIECAAAECGQICrIw56IIAAQIECBAgQIAAAQIECBAgQGAiIMCawDhNgAABAgQIECBAgAABAgQIECCQISDAypiDLggQIECAAAECBAgQIECAAAECBCYCAqwJjNMECBAgQIAAAQIECBAgQIAAAQIZAgKsjDnoggABAgQIECBAgAABAgQIECBAYCIgwJrAOE2AAAECBAgQIECAAAECBAgQIJAhIMDKmIMuCBAgQIAAAQIECBAgQIAAAQIEJgICrAmM0wQIECBAgAABAgQIECBAgAABAhkCAqyMOeiCAAECBAgQIECAAAECBAgQIEBgIiDAmsA4TYAAAQIECBAgQIAAAQIECBAgkCEgwMqYgy4IECBAgAABAgQIECBAgAABAgQmAgKsCYzTBAgQIECAAAECBAgQIECAAAECGQICrIw56IIAAQIECBAgQIAAAQIECBAgQGAiIMCawDhNgAABAgQIECBAgAABAgQIECCQISDAypiDLggQIECAAAECBAgQIECAAAECBCYCAqwJjNMECBAgQIAAAQIECBAgQIAAAQIZAgKsjDnoggABAgQIECBAgAABAgQIECBAYCIgwJrAOE2AAAECBAgQIECAAAECBAgQIJAhIMDKmIMuCBAgQIAAAQIECBAgQIAAAQIEJgICrAmM0wQIECBAgAABAgQIECBAgAABAhkCAqyMOeiCAAECBAgQIECAAAECBAgQIEBgIiDA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CLCcAQIECBAgQIAAAQIECBAgQIAAgdYCAqzW49EcAQIECBAgQIAAAQIECBAgQICAAMsZIECAAAECBAgQIECAAAECBAgQaC0gwGo9Hs0RIECAAAECBAgQIECAAAECBAgIsJwBAgQIECBAgAABAgQIECBAgACB1gICrNbj0RwBAgQIECBAgAABAgQIECBAgIAAyxkgQIAAAQIECBAgQIAAAQIECBBoLSDAaj0ezREgQIAAAQIECBAgQIAAAQIECAiwnAECBAgQIECAAAECBAgQIECAAIHWAgKs1uPRHAECBAgQIECAAAECBAgQIECAgADLGSBAgAABAgQIECBAgAABAgQIEGgtIMBqPR7NESBAgAABAgQIECBAgAABAgQICLCcAQIECBAgQIAAAQIECBAgQIAAgdYCAqzW49EcAQIECBAgQIAAAQIECBAgQICAAMsZIECAAAECBAgQIECAAAECBAgQaC0gwGo9Hs0RIECAAAECBAgQIECAAAECBAgIsJwBAgQIECBAgAABAgQIECBAgACB1gICrNbj0RwBAgQIECBAgAABAgQIECBAgMARAgIELgn8V/37ubDFM+H6X2lgECZQvgReXfcbgxKvqNp3BesvpT9f95cGe3gsWHsp/Z26p98PwwS7c9VA+hymDe5MN1D1X1v3J4J9LK/F5Ovx6aqffi3eUT0s78up21NV+Aup4uo+J3CiPrv+ua98MqPAsdp0+vvif1QP52fEt2cCBAgQIEBgXeDhunxx8vvxdRpXJxK4e/LXwOzvAZf3/8BEZ35rq2fCr4Xle5JbXmAJ9S+/Lmb8eCE/gt3pyWewnLtTDeaghbCAPyEMD0B5AgQIECBAgAABAgQIECBAgACBsYAAa+xjlQABAgQIECBAgAABAgQIECBAICwgwAoPQHkCBAgQIECAAAECBAgQIECAAIGxgABr7GOVAAECBAgQIECAAAECBAgQIEAgLCDACg9AeQIECBAgQIAAAQIECBAgQIAAgbGAAGvsY5UAAQIECBAgQIAAAQIECBAgQCAsIMAKD0B5AgQIECBAgAABAgQIECBAgACBsYAAa+xjlQABAgQIECBAgAABAgQIECBAICwgwAoPQHkCBAgQIECAAAECBAgQIECAAIGxgABr7GOVAAECBAgQIECAAAECBAgQIEAgLCDACg9AeQIECBAgQIAAAQIECBAgQIAAgbGAAGvsY5UAAQIECBAgQIAAAQIECBAgQCAsIMAKD0B5AgQIECBAgAABAgQIECBAgACBsYAAa+xjlQABAgQIECBAgAABAgQIECBAICwgwAoPQHkCBAgQIECAAAECBAgQIECAAIGxgABr7GOVAAECBAgQIECAAAECBAgQIEAgLCDACg9AeQIECBAgQIAAAQIECBAgQIAAgbGAAGvsY5UAAQIECBAgQIAAAQIECBAgQCAsIMAKD0B5AgQIECBAgAABAgQIECBAgACBsYAAa+xjlQABAgQIECBAgAABAgQIECBAICwgwAoPQHkCBAgQIECAAAECBAgQIECAAIGxgABr7GOVAAECBAgQIECAAAECBAgQIEAgLCDACg9AeQIECBAgQIAAAQIECBAgQIAAgbGAAGvsY5UAAQIECBAgQIAAAQIECBAgQCAsIMAKD0B5AgQIECBAgAABAgQIECBAgACBsYAAa+xjlQABAgQIECBAgAABAgQIECBAICwgwAoPQHkCBAgQIECAAAECBAgQIECAAIGxgABr7GOVAAECBAgQIECAAAECBAgQIEAgLCDACg9AeQIECBAgQIAAAQIECBAgQIAAgbGAAGvsY5UAAQIECBAgQIAAAQIECBAgQCAsIMAKD0B5AgQIECBAgAABAgQIECBAgACBscDReNnqJAKvr33+wSR7tU0CnQU+V829N9zgfVX/5eEe0uX/vBq4Md2E+lGBm6LVexT/m2rjgR6txLr4cqyywp0E/rCaORls6DNV+/5gfaV3u+sL4WwY4i+q/luCPdxZtf8sWF9pApcEBFgOwiJwS91/DgUBAgRK4LMUdm8sAwGGgzC7wOMFkP6FbfYZ2H8PgSW8Sv6cvLwW3bIC11X55BlYdv+Ruiffk08sTbgRSAv8SLoB9QkQIECAAAECBAgQIECAAAECBAiMBARYIx1rBAgQIECAAAECBAgQIECAAAECcQEBVnwEGiBAgAABAgQIECBAgAABAgQIEBgJCLBGOtYIECBAgAABAgQIECBAgAABAgTiAgKs+Ag0QIAAAQIECBAgQIAAAQIECBAgMBIQYI10rBEgQIAAAQIECBAgQIAAAQIECMQFBFjxEWiAAAECBAgQIECAAAECBAgQIEBgJCDAGulYI0CAAAECBAgQIECAAAECBAgQiAsIsOIj0AABAgQIECBAgAABAgQIECBAgMBIQIA10rFGgAABAgQIECBAgAABAgQIECAQFxBgxUegAQIECBAgQIAAAQIECBAgQIAAgZGAAGukY40AAQIECBAgQIAAAQIECBAgQCAuIMCKj0ADBAgQIECAAAECBAgQIECAAAECIwEB1kjHGgECBAgQIECAAAECBAgQIECAQFxAgBUfgQYIECBAgAABAgQIECBAgAABAgRGAgKskY41AgQIECBAgAABAgQIECBAgACBuIAAKz4CDRAgQIAAAQIECBAgQIAAAQIECIwEBFgjHWsECBAgQIAAAQIECBAgQIAAAQJxAQFWfAQaIECAAAECBAgQIECAAAECBAgQGAkIsEY61ggQIECAAAECBAgQIECAAAECBOICAqz4CDRAgAABAgQIECBAgAABAgQIECAwEhBgjXSsESBAgAABAgQIECBAgAABAgQIxAUEWPERaIAAAQIECBAgQIAAAQIECBAgQGAkIMAa6VgjQIAAAQIECBAgQIAAAQIECBCICwiw4iPQAAECBAgQIECAAAECBAgQIECAwEhAgDXSsUaAAAECBAgQIECAAAECBAgQIBAXEGDFR6ABAgQIECBAgAABAgQIECBAgACBkYAAa6RjjQABAgQIECBAgAABAgQIECBAIC4gwIqPQAMECBAgQIAAAQIECBAgQIAAAQIjAQHWSMcaAQIECBAgQIAAAQIECBAgQIBAXOAo3oEGCDwr8On68E0YBMICb6z6t4d7mL38nQXw+jBC+nvjI7X/fwsbpMu/oRq4I9jEE1X774L1l9Jvrfst4R7S5d9eDRwLNvFo1V5ej6nb8l70jlTx79Zd3pNnv32mAB4PIvxjsLbSzwo8Ux8+Fca4uerfE+zheNX+RLD+Uvqr4frKEyDQROBU9XExfD/RxEIbcwt8PPw6ODs3/6XdvzM8g/R74VL/fudg95HwOXiwwQyWHpLncZlB+raEBkmDB8IAyy+Myf13qP1weAbKPytwbvKzeKHBQTgdnkEyzG/Ar4UuAv6EsMsk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqIMBaZXGRAAECBAgQIECAAAECBAgQIECgi4AAq8sk9EGAAAECBAgQIECAAAECBAgQILAqcLR61UUC8wn8cm35A/Ntu9WO/7O6eUOrjjRDICPwvir7rkzpS1X/u/49GazfofRd1cS5cCP3Vf1Hgj18K1hbaQKXBU7UJ+nX4uVeZv74Y+HN/3HV/71gDxeDtZUmQOAKAQHWFRg+nVrg5bX7V00tYPMECHQROF6NLPfU7ViqcKO6N1Qv6e8J/1M9+MW90aHQSkTg+qqafi1GNq7oVQLn6yvvh1eR+ILAnAL+hHDOuds1AQIECBAgQIAAAQIECBAgQOBgBARYBzMqjRIgQIAAAQIECBAgQIAAAQIE5hQQYM05d7smQIAAAQIECBAgQIAAAQIECByMgADrYEalUQIECBAgQIAAAQIECBAgQIDAnAICrDnnbtcECBAgQIAAAQIECBAgQIAAgYMREGAdzKg0SoAAAQIECBAgQIAAAQIECBCYU0CANefc7ZoAAQIECBAgQIAAAQIECBAgcDACAqyDGZVGCRAgQIAAAQIECBAgQIAAAQJzCgiw5py7XRMgQIAAAQIECBAgQIAAAQIEDkZAgHUwo9IoAQIECBAgQIAAAQIECBAgQGBOAQHWnHO3awIECBAgQIAAAQIECBAgQIDAwQgIsA5mVBolQIAAAQIECBAgQIAAAQIECMwpIMCac+52TYAAAQIECBAgQIAAAQIECBA4GAEB1sGMSqMECBAgQIAAAQIECBAgQIAAgTkFBFhzzt2uCRAgQIAAAQIECBAgQIAAAQIHIyDAOphRaZQAAQIECBAgQIAAAQIECBAgMKeAAGvOuds1AQIECBAgQIAAAQIECBAgQOBgBARYBzMqjRIgQIAAAQIECBAgQIAAAQIE5hQQYM05d7smQIAAAQIECBAgQIAAAQIECByMgADrYEalUQIECBAgQIAAAQIECBAgQIDAnAICrDnnbtcECBAgQIAAAQIECBAgQIAAgYMREGAdzKg0SoAAAQIECBAgQIAAAQIECBCYU0CANefc7ZoAAQIECBAgQIAAAQIECBAgcDACAqyDGZVGCRAgQIAAAQIECBAgQIAAAQJzCgiw5py7XRMgQIAAAQIECBAgQIAAAQIEDkZAgHUwo9IoAQIECBAgQIAAAQIECBAgQGBOAQHWnHO3awIECBAgQIAAAQIECBAgQIDAwQgIsA5mVBolQIAAAQIECBAgQIAAAQIECMwpIMCac+52TYAAAQIECBAgQIAAAQIECBA4GAEB1sGMSqMECBAgQIAAAQIECBAgQIAAgTkFjubctl0TIECAAIFNgQ/Vyrc3V1/8C+df/Fu0QwIEfkiBv67H/esP+dhr8bDb6kl/9Vo88fN4zo/WY889j8e/0A/9qXrCd7zQT+r5npfAS+rRv/G8/osX/sEnX/in9IwEDk9AgHV4M9MxAQIECFxbgd+up3/y2pbw7AQIEDgIgY9Vl2eCnd5VtdMB1unq4WzQ4J6qLcAKDqBKL78zfzDbguoECCwC/oTQOSBAgAABAgQIECBAgAABAgQIEGgtIMBqPR7NESBAgAABAgQIECBAgAABAgQICLCcAQIECBAgQIAAAQIECBAgQIAAgdYCAqzW49EcAQIECBAgQIAAAQIECBAgQICAAMsZIECAAAECBAgQIECAAAECBAgQaC0gwGo9Hs0RIECAAAECBAgQIECAAAECBAgIsJwBAgQIECBAgAABAgQIECBAgACB1gICrNbj0RwBAgQIECBAgAABAgQIECBAgIAAyxkgQIAAAQIECBAgQIAAAQIECBBoLSDAaj0ezREgQIAAAQIECBAgQIAAAQIECAiwnAECBAgQIECAAAECBAgQIECAAIHWAgKs1uPRHAECBAgQIECAAAECBAgQIECAgADLGSBAgAABAgQIECBAgAABAgQIEGgtIMBqPR7NESBAgAABAgQIECBAgAABAgQICLCcAQIECBAgQIAAAQIECBAgQIAAgdYCAqzW49EcAQIECBAgQIAAAQIECBAgQICAAMsZIECAAAECBAgQIECAAAECBAgQaC0gwGo9Hs0RIECAAAECBAgQIECAAAECBAgIsJwBAgQIECBAgAABAgQIECBAgACB1gICrNbj0RwBAgQIECBAgAABAgQIECBAgIAAyxkgQIAAAQIECBAgQIAAAQIECBBoLSDAaj0ezREgQIAAAQIECBAgQIAAAQIECAiwnAECBAgQIECAAAECBAgQIECAAIHWAgKs1uPRHAECBAgQIECAAAECBAgQIECAgADLGSBAgAABAgQIECBAgAABAgQIEGgtIMBqPR7NESBAgAABAgQIECBAgAABAgQICLCcAQIECBAgQIAAAQIECBAgQIAAgdYCAqzW49EcAQIECBAgQIAAAQIECBAgQICAAMsZIECAAAECBAgQIECAAAECBAgQaC0gwGo9Hs0RIECAAAECBAgQIECAAAECBAgcISBAgAABAlcIXF+fJ//nxnVV/9tX9JP49GKiaLOax8L9JM9geOvPlV9ei8k5PF31v/NcN3N+8pLwDG6o+un3w+U9OXkOl9eBGwECeYH0e8EisLwf+hktfxaiHQiwovyKEyBAoJ3AQ9XRyWBXf1q1k78sBbfepvSt1cnX2nQzbyP/EN76R6v+veEe0uV/qxpY7qnbN6tw+v3wTPXw4RSAugQItBH46erkqXA3v1D1Px3uQfmwgP/DGR6A8gQIECBAgAABAgQIECBAgAABAmMBAdbYxyoBAgQIECBAgAABAgQIECBAgEBYQIAVHoDyBAgQIECAAAECBAgQIECAAAECYwEB1tjHKgECBAgQIECAAAECBAgQIECAQFhAgBUegPIECBAgQIAAAQIECBAgQIAAAQJjAQHW2McqAQIECBAgQIAAAQIECBAgQIBAWECAFR6A8gQIECBAgAABAgQIECBAgAABAmMBAdbYxyoBAgQIECBAgAABAgQIECBAgEBYQIAVHoDyBAgQIECAAAECBAgQIECAAAECYwEB1tjHKgECBAgQIECAAAECBAgQIECAQFhAgBUegPIECBAgQIAAAQIECBAgQIAAAQJjAQHW2McqAQIECBAgQIAAAQIECBAgQIBAWECAFR6A8gQIECBAgAABAgQIECBAgAABAmMBAdbYxyoBAgQIECBAgAABAgQIECBAgEBYQIAVHoDyBAgQIECAAAECBAgQIECAAAECYwEB1tjHKgECBAgQIECAAAECBAgQIECAQFhAgBUegPIECBAgQIAAAQIECBAgQIAAAQJjAQHW2McqAQIECBAgQIAAAQIECBAgQIBAWECAFR6A8gQIECBAgAABAgQIECBAgAABAmMBAdbYxyoBAgQIECBAgAABAgQIECBAgEBYQIAVHoDyBAgQIECAAAECBAgQIECAAAECYwEB1tjHKgECBAgQIECAAAECBAgQIECAQFhAgBUegPIECBAgQIAAAQIECBAgQIAAAQJjAQHW2McqAQIECBAgQIAAAQIECBAgQIBAWECAFR6A8gQIECBAgAABAgQIECBAgAABAmMBAdbYxyoBAgQIECBAgAABAgQIECBAgEBYQIAVHoDyBAgQIECAAAECBAgQIECAAAECYwEB1tjHKgECBAgQIECAAAECBAgQIECAQFhAgBUegPIECBAgQIAAAQIECBAgQIAAAQJjAQHW2McqAQIECBAgQIAAAQIECBAgQIBAWECAFR6A8gQIECBAgAABAgQIECBAgAABAmOBo/GyVQLTCJytnb5nmt323Oj5nm3pas8Cb6p6p/dc8/vL/XpdeOr7L/p6rwJ/UtUe2mvFq4v9eH35m1df2vtXH6yKX9p71e8V/PfvfRr77H1V+aWx6rvd26r2LwbrK73bnSuE3w1DpF8Ln639z/4z6m1lkPzZ4BkzCL8Kny3/aIsuNEGAQFzgVHVwMXw/EVfQAIHd7uPh18ESpKZvD1cD6feDdP3j6SGE69/a4AzcGza4u4HB0oNb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jR4wwdrttcfXTLBPWxwL/EstPzZ+yIt+9Wdqhze/6Hc53uDf1/L/jR9i9RoLnKjnf9U1rtH96R+qBr8RbPK2qn0yWF/p3e6ZQvjbySF+tPb/s2GDf676Xw/3oDwBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIg9J+OQAAA/1JREFUECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMDsAv8PZlzwFojeHtEAAAAASUVORK5CYII=" }))),
        React__default.createElement("path", { fill: "url(#pattern)", d: "M0 0H231.5V230.825H0z", "data-name": "Image 2" })));
}

function JoinUnselSvg(_a) {
    var _b = _a === void 0 ? {
        height: "0",
        width: "0",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 52.492 36" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M26.107 5.655c-4.52 0-8.186 4.278-8.186 9.556a9.863 9.863 0 004.351 8.444l-3 1.391-7.987 3.7a2.022 2.022 0 00-1.156 1.965v8.8a2.046 2.046 0 001.793 2.142h28.414a2.031 2.031 0 001.852-2.142v-8.8a2.021 2.021 0 00-1.156-1.965l-7.7-3.7-3.2-1.515a9.917 9.917 0 004.158-8.32c0-5.278-3.664-9.556-8.186-9.556zM12.9 9.016a6.319 6.319 0 00-4.659 2.257 8.74 8.74 0 00-1.939 5.44A8.271 8.271 0 009.895 23.6L.926 27.767A1.526 1.526 0 000 29.387v7.06c.048.936.534 1.723 1.446 1.737h5.963v-7.468a4.862 4.862 0 012.721-4.4l5.959-2.836a5.723 5.723 0 001.331-1.1 13.412 13.412 0 01-1.215-12.327 6.564 6.564 0 00-3.3-1.043zm26.622 0a6.323 6.323 0 00-3.413 1.156 13.52 13.52 0 01-1.158 12.1 6.117 6.117 0 001.568 1.328l5.729 2.721a4.943 4.943 0 012.662 4.4v7.467h6.134a1.6 1.6 0 001.448-1.737v-7.064a1.655 1.655 0 00-.926-1.62l-8.854-4.227a8.479 8.479 0 003.472-6.83 8.7 8.7 0 00-1.939-5.44 6.456 6.456 0 00-4.717-2.257z", transform: "translate(0 -5.655)" })));
}

function CreateUnselSvg(_a) {
    var _b = _a === void 0 ? {
        height: "0",
        width: "0",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 36 36" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", fillRule: "evenodd", d: "M36 18A18 18 0 1118 0a18 18 0 0118 18zM19.125 9a1.125 1.125 0 00-2.25 0v7.875H9a1.125 1.125 0 000 2.25h7.875V27a1.125 1.125 0 002.25 0v-7.875H27a1.125 1.125 0 000-2.25h-7.875z", "data-name": "Path 1592" })));
}

function DitoCreditsSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, "data-name": "Group 17", viewBox: "0 0 15.543 10.574" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff" }),
                React__default.createElement("stop", { offset: "1", stopColor: "gray" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M269.56 317.919v1.675c0 .569-1.517 1.043-3.382 1.043s-3.35-.458-3.35-1.027v-.19l-.032-1.327h.016c.253.49 1.644.869 3.319.869s3.4-.474 3.4-1.043h.032z", "data-name": "Path 179", transform: "translate(-254.016 -310.063)" }),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M152.594 112.074v1.659h-.032c0 .585-1.564 1.043-3.414 1.043a8.11 8.11 0 01-2.133-.237l-.032.032a3.692 3.692 0 00-1.169-.648v-.032l-.047-1.754c.111.537 1.58.964 3.366.964s3.429-.458 3.429-1.027z", "data-name": "Path 180", transform: "translate(-140.893 -111.062)" }),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M152.6 79.668c0 .569-1.565 1.027-3.429 1.027s-3.271-.427-3.382-.964c0-.016-.016-.047-.016-.063 0-.569 1.517-1.043 3.4-1.043 1.873-.016 3.427.458 3.427 1.043z", "data-name": "Path 181", transform: "translate(-140.894 -78.624)" }),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M261.8 265.514l-.017-.369-.033-1.51c.117.571 1.67 1.024 3.556 1.024s3.556-.487 3.606-1.074h.017v1.746h-.029c0 .6-1.619 1.108-3.59 1.108s-3.242-.405-3.51-.925z", "data-name": "Path 182", transform: "translate(-253.386 -257.642)" }),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M188.608 312.059a3.391 3.391 0 00.932-1.454h.079c.348.032.7.047 1.075.047h.158V311l.032 1.328h-.174a8.189 8.189 0 01-2.054-.221z", "data-name": "Path 183", transform: "translate(-182.522 -302.97)" }),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M221.267 254.386v.079l.032 1.47h-.158c-.4 0-.759-.016-1.106-.047h-.079a3.244 3.244 0 00.158-1.027 3.2 3.2 0 00-.079-.68h.079c.332.032.664.047 1.027.047l.142.079a.172.172 0 00-.016.079z", "data-name": "Path 184", transform: "translate(-212.888 -248.471)" }),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M186.029 167.737a8.11 8.11 0 002.133.237c1.849 0 3.414-.458 3.414-1.043h.032v1.869c-1.723 0-3.129.411-3.3.932l-.142-.079q-.522 0-1-.047h-.079a3.19 3.19 0 00-1.09-1.849z", "data-name": "Path 185", transform: "translate(-179.858 -164.029)" }),
        React__default.createElement("g", { fill: "url(#linear-gradient)", "data-name": "Group 16", transform: "translate(0 3.257)" },
            React__default.createElement("path", { d: "M6.748 168.585a3.459 3.459 0 00-1.122-1.885 3 3 0 00-1.2-.664 3.053 3.053 0 00-1-.158 3.4 3.4 0 10-.063 6.8 3.467 3.467 0 002.339-.9 3.432 3.432 0 00.948-1.5 3.147 3.147 0 00.158-1.011c.003-.223-.06-.46-.06-.682z", "data-name": "Path 186", transform: "translate(0 -165.883)" }),
            React__default.createElement("path", { d: "M268.531 229.608v.032c-.047.553-1.58 1.011-3.414 1.011s-3.255-.427-3.366-.964v-.079a.2.2 0 01.016-.095c.174-.522 1.58-.932 3.3-.932h.047c1.868 0 3.417.458 3.417 1.027z", "data-name": "Path 187", transform: "translate(-253.003 -226.684)" })),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M76.374 197.735a.522.522 0 11.522-.522.316.316 0 10.632 0 1.166 1.166 0 00-.838-1.106v-.126a.316.316 0 10-.632 0v.126a1.1 1.1 0 00-.838 1.106 1.16 1.16 0 001.154 1.154.522.522 0 110 1.043.526.526 0 01-.522-.522.316.316 0 10-.632 0 1.152 1.152 0 00.838 1.112v.253a.316.316 0 00.632 0V200a1.14 1.14 0 00.774-1.438 1.152 1.152 0 00-1.09-.827z", "data-name": "Path 188", transform: "translate(-72.792 -191.692)" })));
}

function NetworkDesignSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 16.431 16.431" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#c1c1c1" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M.019 8.632A2.065 2.065 0 010 8.236V8.2a13.283 13.283 0 006.486-2.052 1.694 1.694 0 001.522-.038 7.954 7.954 0 003.384 2.183 1.623 1.623 0 00.658.809 7.547 7.547 0 01-1.523 2.39 1.794 1.794 0 00-2.67.809A10.133 10.133 0 01.019 8.632zm7.82 4.855a9.319 9.319 0 01-4.812 1.129 8.678 8.678 0 01-2.67-3.933 11.738 11.738 0 007.482 2.8zm3.4-.226a10.7 10.7 0 004.661-2.146 8.318 8.318 0 01-11.091 4.61 10.751 10.751 0 003.76-1.3 1.815 1.815 0 002.67-1.167zm3.233-4.591c.674-.05 1.33-.1 1.955-.207 0 .168-.019.334-.019.489a9.044 9.044 0 01-4.7 3.011A9.226 9.226 0 0013.2 9.384a1.856 1.856 0 001.278-.715zm.3-1.2a1.8 1.8 0 00-.79-1.3 19.265 19.265 0 00.057-3.726 8.526 8.526 0 012.331 4.817 11.227 11.227 0 01-1.6.207zM5.621 5.3A12.23 12.23 0 01.094 7.014 8.306 8.306 0 015.358.522a8.432 8.432 0 00.658 2.728 1.784 1.784 0 00-.395 2.05zm3.234-1.391A10.654 10.654 0 0010.847.446a8.093 8.093 0 011.9.922 19.955 19.955 0 01.074 4.532 1.833 1.833 0 00-1.448 1.129 7.152 7.152 0 01-2.556-1.765 1.892 1.892 0 00.037-1.355zM7.107 2.8A6.955 6.955 0 016.524.183 7.788 7.788 0 019.7.146a10.4 10.4 0 01-1.617 2.86c-.224-.1-.768-.308-.978-.207z" })));
}

function GameTheorySvg$1(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 16.431 16.43" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#c1c1c1" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M8.215.014H6.16v2.055h2.055zM0 2.068v2.054h2.054V2.068zM4.109.014H2.054v2.055h2.055zm2.054 8.215v2.055h2.055V8.229zM0 6.175V8.23h2.054V6.175zM12.322.014h-2.054v2.055h2.054zm4.109 0h-2.055v2.055h2.054zM4.109 8.229H2.054v2.055h2.055zm12.32 6.16v-2.054h-2.054v2.055zm0-4.109V8.226h-2.054v2.054zm-4.107 6.164h2.054V14.39h-2.054zm4.109-10.269V4.121h-2.055v2.054zM4.109 16.444h2.054V14.39H4.109zm-4.109 0h2.054V14.39H0zm8.215 0h2.054V14.39H8.215zM0 10.283v2.055h2.054v-2.055zm10.268-6.161V2.067H8.214v2.055zM8.214 8.231h2.054V6.176H8.214zM6.16 12.34v2.055h2.054V12.34zm4.109-2.055h2.054V8.231h-2.055zm0-4.107h2.054V4.123h-2.055zm0 6.161v2.055h2.054v-2.055zm-8.214 0v2.055h2.054v-2.057zm4.108-8.217V2.067H4.109v2.055zm6.161 8.215h2.054v-2.055h-2.054zM8.215 6.175V4.121H6.161v2.054zm4.109-4.108v2.055h2.054V2.068zm-4.109 8.216v2.055h2.055v-2.055zM6.161 6.175H4.109V8.23h2.054zm6.161 2.055h2.054V6.175h-2.054zM4.109 4.122H2.054v2.054h2.055zm0 6.161v2.055h2.054v-2.055z", "data-name": "Icon awesome-chess-board", transform: "translate(0 -.014)" })));
}

function TokenomicsSvg$1(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 16.431 16.432" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#c1c1c1" }))),
        React__default.createElement("g", { fill: "url(#linear-gradient)", "data-name": "Group 1893", transform: "translate(-141.564 -460.578)" },
            React__default.createElement("path", { d: "M14.215 10.583c4.083 0 8.215-1.3 8.215-3.792S18.3 3 14.215 3 6 4.3 6 6.792s4.132 3.791 8.215 3.791z", "data-name": "Path 1469", transform: "translate(135.564 457.578)" }),
            React__default.createElement("path", { d: "M6 19.9c0 2.489 4.132 3.792 8.215 3.792s8.215-1.3 8.215-3.792V18c0 2.489-4.132 3.792-8.215 3.792S6 20.489 6 18z", "data-name": "Path 1471", transform: "translate(135.564 449.025)" }),
            React__default.createElement("path", { d: "M6 25.9c0 2.489 4.132 3.792 8.215 3.792s8.215-1.3 8.215-3.792V24c0 2.489-4.132 3.792-8.215 3.792S6 26.489 6 24z", "data-name": "Path 1472", transform: "translate(135.564 447.322)" }))));
}

function DitoLogoCircleSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", style: { height: height, width: width }, className: className, viewBox: "0 0 62 62" },
        React__default.createElement("image", { width: "62", height: "62", "data-name": "DiTo-new-circle (black)", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ8AAAGfCAYAAACA4t+UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAaGVYSWZNTQAqAAAACAAEAQYAAwAAAAEAAgAAARIAAwAAAAEAAQAAASgAAwAAAAEAAgAAh2kABAAAAAEAAAA+AAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAGfoAMABAAAAAEAAAGfAAAAAN0cTvMAAALkaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NDE1PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj40MTU8L2V4aWY6UGl4ZWxZRGltZW5z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1DPq3wgLIAJEgAg0HYFh6ad47seXflTyaYUwUrYfza6MUk9ZqHmDCBABItBZBCzpZ61JpbDjaa5T0k9TJR+xJ/8YjQw6++Ni7USACBCBcghgfJZx+oMy9+N4B7weREs/zRZMSprUTPJJOyb18ZIamEAEiAARIAJdg4CM0x8069eni4wPgq22QTotJx6A0TTySaf7jpV1PTt2DcJsCBEgAkSACJQgIOP0DqlU9ohOSz+ZkpY1mOA47ifbRJgNtpCPEYHeQGDSpElm2rRppl+Oaf3TzPT+6WbnnXc2u+zyGrPbbrt5IJxwwvvM//3qV70BCHtZgkAqZT4su8r937D04w47HcVGcyr5IG6px4OmiFfYr8c4qZtKesgEIkAEmo5AmFz6p/X7ZCNEA9IZh62Tq4SXX37ZzNh1N7Nu3boqOXk7qQi4hfxR+S22+LNneJBO503pjqcgI4SWkFBTyEd8uN0sohw3i/NfFP8SgVEhsO2225ZILp4kUwe5RDVg8+bNMr70jdy65tprzYknfmDkmie9hYBYvv0xP3bMCcZxCp2wfGsG+ewmrnQeEyuKZpTVW2+fve1JBLbZZpsicvEkFyGWfqjJ5Bg/fnxDuAwODpply5aZJUuWSrzULFm61CyVcy9eusT8+Oofmze84fVmq622krHGn+499YMfND/+8U8aqo8PxRsBIR9XXO68TUTlJzoh/YyaMNLp7LedlPOReL8Gtp4INA+BiRMnFpEL5lww9zJachkYGBghl6VCJkuFaGxyWbFiZdlOzJ0711x55RVmwY8WmNmzZ5uDD36Hlxdl7vP6NwhhLSn7LG8kFwG34C7IbzHmU570k07nTLHXg5b6fBst+UwUqeefIvRskdzXw54RgWIEwuQSllwmTGjMny6IYKlIK5BcvFgIZtlSkWQgwcixcmV5ciluYenVU08+YS688EseKeLugQfONW9729u8jA88+KB585v3l7nnlqj2SxvDlK5BQN75BpF+9hHp52VP+slkcrLwNG+WL8eWC5jz0aPpP45RWbvJYqWPkni65nfEhjQJAZCHbS0GcumfLsewWqxRcnnllVcsyQXqMJFehtViUJetWrWqST0oLuaUk0/2yOtHCxaY884917v5vvefaP7x8EIDIn39PvuY884713zxixcUP8irxCOA8VvG8ZOFYS71TK+x3XahAMKBXlYJ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" })));
}

function CenterWhiteBarSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 8.659 767" },
        React__default.createElement("g", { fill: "#fff", "data-name": "Path 1488" },
            React__default.createElement("path", { d: "M8.16 766.5H.5V.5h7.66v766z" }),
            React__default.createElement("path", { fill: "#707070", d: "M1 1v765h6.66V1H1M0 0h8.66v767H0V0z" }))));
}

function TreasurySvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 36 36" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M20.25 22.5a44.122 44.122 0 01-9.633-.949Q6.4 20.6 5.062 19.16a48.192 48.192 0 0010.688 1.09 53.958 53.958 0 008.209-.6A25.46 25.46 0 0030.234 18q2.39-1.054 2.391-2.25V13.5h1.125a3.025 3.025 0 011.635.861A2 2 0 0136 15.75V18q0 1.23-2.109 2.268A20.985 20.985 0 0128.16 21.9a48.974 48.974 0 01-7.91.6zm-2.25-9a48.907 48.907 0 01-6.258-.369 29.307 29.307 0 01-4.535-.879 18.994 18.994 0 01-2.865-1.09 7.378 7.378 0 01-1.635-1q-.457-.422-.457-.6V8.191a16.031 16.031 0 006.188 2.2A49.83 49.83 0 0018 11.25a49.69 49.69 0 009.563-.861 16.021 16.021 0 006.187-2.2V9q0 1.195-2.109 2.232a21.4 21.4 0 01-5.73 1.652A47.418 47.418 0 0118 13.5zM18 9a47.345 47.345 0 01-7.91-.615 21.4 21.4 0 01-5.73-1.652Q2.251 5.7 2.251 4.483t2.109-2.25A21.051 21.051 0 0110.09.6 48.661 48.661 0 0118 0a48.661 48.661 0 017.91.6 21.051 21.051 0 015.73 1.635q2.109 1.037 2.109 2.25T31.64 6.733a21.4 21.4 0 01-5.73 1.652A47.345 47.345 0 0118 9zM1.125 11.25q0 1.195 2.391 2.25a25.417 25.417 0 006.275 1.652 54.117 54.117 0 008.209.6 53.408 53.408 0 007.523-.51 29.81 29.81 0 005.977-1.39q-.035.07-.123.229a3.261 3.261 0 01-.545.579 6.767 6.767 0 01-1.107.809 13.454 13.454 0 01-1.9.879 18.122 18.122 0 01-2.813.826 37.465 37.465 0 01-3.991.58Q18.6 18 15.75 18a47.344 47.344 0 01-7.91-.615 21.4 21.4 0 01-5.73-1.652Q0 14.7 0 13.5v-2.25A2.178 2.178 0 011.125 9.6zm0 11.848v1.652q0 1.195 2.391 2.25a25.417 25.417 0 006.275 1.652 54.117 54.117 0 008.209.6 54.431 54.431 0 007.436-.492 29.767 29.767 0 005.994-1.371q-.53 1.756-5.03 2.934A42.4 42.4 0 0115.75 31.5a48.661 48.661 0 01-7.91-.6 21.094 21.094 0 01-5.731-1.634Q0 28.232 0 27v-2.25a2.178 2.178 0 011.125-1.65zM20.25 24.75a52.8 52.8 0 007.471-.51 29.761 29.761 0 005.959-1.388q-.492 1.758-4.992 2.953A42.01 42.01 0 0118 27a48.661 48.661 0 01-7.91-.6 21.051 21.051 0 01-5.73-1.635Q2.251 23.73 2.25 22.5v-2.25a2.174 2.174 0 011.02-1.582q.527.176.914.281a1.9 1.9 0 00-.668 1.3q0 1.195 2.355 2.25a24.781 24.781 0 006.223 1.652 53.542 53.542 0 008.156.599zm12.375 4.5V27.6a2.18 2.18 0 011.125 1.65v2.25q0 1.23-2.109 2.268A20.985 20.985 0 0125.91 35.4 48.975 48.975 0 0118 36a42.011 42.011 0 01-10.688-1.195q-4.5-1.195-4.992-2.953a29.731 29.731 0 005.959 1.389 52.689 52.689 0 007.471.509 53.958 53.958 0 008.209-.6 25.46 25.46 0 006.275-1.65q2.39-1.054 2.391-2.25z" })));
}

function TreasurySelSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 37 37" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", stroke: "rgba(0,0,0,0)", strokeMiterlimit: "10", strokeWidth: "1", d: "M20.25 22.5a44.122 44.122 0 01-9.633-.949Q6.4 20.6 5.062 19.16a48.192 48.192 0 0010.688 1.09 53.958 53.958 0 008.209-.6A25.46 25.46 0 0030.234 18q2.39-1.054 2.391-2.25V13.5h1.125a3.025 3.025 0 011.635.861A2 2 0 0136 15.75V18q0 1.23-2.109 2.268A20.985 20.985 0 0128.16 21.9a48.974 48.974 0 01-7.91.6zm-2.25-9a48.907 48.907 0 01-6.258-.369 29.307 29.307 0 01-4.535-.879 18.994 18.994 0 01-2.865-1.09 7.378 7.378 0 01-1.635-1q-.457-.422-.457-.6V8.191a16.031 16.031 0 006.188 2.2A49.83 49.83 0 0018 11.25a49.69 49.69 0 009.563-.861 16.021 16.021 0 006.187-2.2V9q0 1.195-2.109 2.232a21.4 21.4 0 01-5.73 1.652A47.418 47.418 0 0118 13.5zM18 9a47.345 47.345 0 01-7.91-.615 21.4 21.4 0 01-5.73-1.652Q2.251 5.7 2.251 4.483t2.109-2.25A21.051 21.051 0 0110.09.6 48.661 48.661 0 0118 0a48.661 48.661 0 017.91.6 21.051 21.051 0 015.73 1.635q2.109 1.037 2.109 2.25T31.64 6.733a21.4 21.4 0 01-5.73 1.652A47.345 47.345 0 0118 9zM1.125 11.25q0 1.195 2.391 2.25a25.417 25.417 0 006.275 1.652 54.117 54.117 0 008.209.6 53.408 53.408 0 007.523-.51 29.81 29.81 0 005.977-1.39q-.035.07-.123.229a3.261 3.261 0 01-.545.579 6.767 6.767 0 01-1.107.809 13.454 13.454 0 01-1.9.879 18.122 18.122 0 01-2.813.826 37.465 37.465 0 01-3.991.58Q18.6 18 15.75 18a47.344 47.344 0 01-7.91-.615 21.4 21.4 0 01-5.73-1.652Q0 14.7 0 13.5v-2.25A2.178 2.178 0 011.125 9.6zm0 11.848v1.652q0 1.195 2.391 2.25a25.417 25.417 0 006.275 1.652 54.117 54.117 0 008.209.6 54.431 54.431 0 007.436-.492 29.767 29.767 0 005.994-1.371q-.53 1.756-5.03 2.934A42.4 42.4 0 0115.75 31.5a48.661 48.661 0 01-7.91-.6 21.094 21.094 0 01-5.731-1.634Q0 28.232 0 27v-2.25a2.178 2.178 0 011.125-1.65zM20.25 24.75a52.8 52.8 0 007.471-.51 29.761 29.761 0 005.959-1.388q-.492 1.758-4.992 2.953A42.01 42.01 0 0118 27a48.661 48.661 0 01-7.91-.6 21.051 21.051 0 01-5.73-1.635Q2.251 23.73 2.25 22.5v-2.25a2.174 2.174 0 011.02-1.582q.527.176.914.281a1.9 1.9 0 00-.668 1.3q0 1.195 2.355 2.25a24.781 24.781 0 006.223 1.652 53.542 53.542 0 008.156.599zm12.375 4.5V27.6a2.18 2.18 0 011.125 1.65v2.25q0 1.23-2.109 2.268A20.985 20.985 0 0125.91 35.4 48.975 48.975 0 0118 36a42.011 42.011 0 01-10.688-1.195q-4.5-1.195-4.992-2.953a29.731 29.731 0 005.959 1.389 52.689 52.689 0 007.471.509 53.958 53.958 0 008.209-.6 25.46 25.46 0 006.275-1.65q2.39-1.054 2.391-2.25z", transform: "translate(.5 .5)" })));
}

function ProjectsSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, "data-name": "Group 1463", viewBox: "0 0 35.981 36" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M34.461 28.217V22.9a2.57 2.57 0 00-2.57-2.57h-10.28v-5.14h2.57a2.572 2.572 0 002.57-2.57V4.905a2.572 2.572 0 00-2.57-2.57h-7.71a2.572 2.572 0 00-2.57 2.57v7.71a2.572 2.572 0 002.57 2.57h2.57v5.14H8.76A2.57 2.57 0 006.19 22.9v5.323a5.14 5.14 0 102.57 0V22.9h10.28v5.323a5.14 5.14 0 102.57 0V22.9h10.28v5.322a5.14 5.14 0 102.57 0zM16.471 4.905h7.71v7.71h-7.71zm-6.425 28.27a2.57 2.57 0 11-2.57-2.57 2.57 2.57 0 012.569 2.571zm12.85 0a2.57 2.57 0 11-2.57-2.57 2.57 2.57 0 012.57 2.57zm10.28 2.57a2.57 2.57 0 112.57-2.57 2.57 2.57 0 01-2.57 2.571z", transform: "translate(-2.335 -2.335)" })));
}

function OpenGigsSelSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, "data-name": "Group 1465", viewBox: "0 0 36 36" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("g", { fill: "url(#linear-gradient)" },
            React__default.createElement("path", { d: "M7.245 24.652v-1.285H4.673v1.286a9 9 0 009 9h3.857v-2.572h-3.857a6.429 6.429 0 01-6.429-6.429z", "data-name": "Path 1564", transform: "translate(-2.102 -.224)" }),
            React__default.createElement("path", { d: "M28.979 13.673v1.286h2.571v-1.286a9 9 0 00-9-9h-3.857v2.572h3.857a6.429 6.429 0 016.429 6.429z", "data-name": "Path 1565", transform: "translate(-.693 -2.102)" }),
            React__default.createElement("path", { d: "M13.908 12.852H6.194a3.857 3.857 0 00-3.857 3.857v2.571h2.571v-2.571a1.286 1.286 0 011.286-1.286h7.714a1.286 1.286 0 011.286 1.286v2.571h2.571v-2.571a3.857 3.857 0 00-3.857-3.857z", "data-name": "Path 1566", transform: "translate(-2.337 -1.28)" }),
            React__default.createElement("path", { d: "M9.816 12.622A5.143 5.143 0 104.673 7.48a5.143 5.143 0 005.143 5.143zm0-7.714A2.571 2.571 0 117.245 7.48a2.571 2.571 0 012.571-2.572z", "data-name": "Path 1567", transform: "translate(-2.102 -2.337)" }),
            React__default.createElement("path", { d: "M32.6 29.208h-7.713a3.857 3.857 0 00-3.857 3.857v2.571h2.57v-2.571a1.286 1.286 0 011.286-1.286H32.6a1.286 1.286 0 011.286 1.286v2.571h2.571v-2.571a3.857 3.857 0 00-3.857-3.857z", "data-name": "Path 1568", transform: "translate(-.459 .363)" }),
            React__default.createElement("path", { d: "M23.367 23.836a5.143 5.143 0 105.143-5.143 5.143 5.143 0 00-5.143 5.143zm7.714 0a2.571 2.571 0 11-2.571-2.571 2.571 2.571 0 012.571 2.571z", "data-name": "Path 1569", transform: "translate(-.224 -.693)" }))));
}

function OpenGigsSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, "data-name": "Group 1465", viewBox: "0 0 36 36" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("g", { fill: "url(#linear-gradient)" },
            React__default.createElement("path", { d: "M7.245 24.652v-1.285H4.673v1.286a9 9 0 009 9h3.857v-2.572h-3.857a6.429 6.429 0 01-6.429-6.429z", "data-name": "Path 1564", transform: "translate(-2.102 -.224)" }),
            React__default.createElement("path", { d: "M28.979 13.673v1.286h2.571v-1.286a9 9 0 00-9-9h-3.857v2.572h3.857a6.429 6.429 0 016.429 6.429z", "data-name": "Path 1565", transform: "translate(-.693 -2.102)" }),
            React__default.createElement("path", { d: "M13.908 12.852H6.194a3.857 3.857 0 00-3.857 3.857v2.571h2.571v-2.571a1.286 1.286 0 011.286-1.286h7.714a1.286 1.286 0 011.286 1.286v2.571h2.571v-2.571a3.857 3.857 0 00-3.857-3.857z", "data-name": "Path 1566", transform: "translate(-2.337 -1.28)" }),
            React__default.createElement("path", { d: "M9.816 12.622A5.143 5.143 0 104.673 7.48a5.143 5.143 0 005.143 5.143zm0-7.714A2.571 2.571 0 117.245 7.48a2.571 2.571 0 012.571-2.572z", "data-name": "Path 1567", transform: "translate(-2.102 -2.337)" }),
            React__default.createElement("path", { d: "M32.6 29.208h-7.713a3.857 3.857 0 00-3.857 3.857v2.571h2.57v-2.571a1.286 1.286 0 011.286-1.286H32.6a1.286 1.286 0 011.286 1.286v2.571h2.571v-2.571a3.857 3.857 0 00-3.857-3.857z", "data-name": "Path 1568", transform: "translate(-.459 .363)" }),
            React__default.createElement("path", { d: "M23.367 23.836a5.143 5.143 0 105.143-5.143 5.143 5.143 0 00-5.143 5.143zm7.714 0a2.571 2.571 0 11-2.571-2.571 2.571 2.571 0 012.571 2.571z", "data-name": "Path 1569", transform: "translate(-.224 -.693)" }))));
}

function ProjectsSelSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, "data-name": "Group 1463", viewBox: "0 0 35.981 36" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M34.461 28.217V22.9a2.57 2.57 0 00-2.57-2.57h-10.28v-5.14h2.57a2.572 2.572 0 002.57-2.57V4.905a2.572 2.572 0 00-2.57-2.57h-7.71a2.572 2.572 0 00-2.57 2.57v7.71a2.572 2.572 0 002.57 2.57h2.57v5.14H8.76A2.57 2.57 0 006.19 22.9v5.323a5.14 5.14 0 102.57 0V22.9h10.28v5.323a5.14 5.14 0 102.57 0V22.9h10.28v5.322a5.14 5.14 0 102.57 0zM16.471 4.905h7.71v7.71h-7.71zm-6.425 28.27a2.57 2.57 0 11-2.57-2.57 2.57 2.57 0 012.569 2.571zm12.85 0a2.57 2.57 0 11-2.57-2.57 2.57 2.57 0 012.57 2.57zm10.28 2.57a2.57 2.57 0 112.57-2.57 2.57 2.57 0 01-2.57 2.571z", transform: "translate(-2.335 -2.335)" })));
}

function TownhallNavSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 16 11.733" },
        React__default.createElement("path", { d: "M20.583 11.492a2.56 2.56 0 01-1.867-.861A3.328 3.328 0 0117.85 8.6a2.785 2.785 0 01.7-2.125 2.843 2.843 0 014.052 0 2.778 2.778 0 01.713 2.125 3.337 3.337 0 01-.867 2.033 2.553 2.553 0 01-1.865.859zm2.201-2.934z", "data-name": "Path 1496", transform: "translate(-9.917 -5.625)" }),
        React__default.createElement("path", { d: "M22.1 25.05h-8.787a.923.923 0 01-.733-.356 1.007 1.007 0 01-.175-.859 4.394 4.394 0 012.011-2.7A6.626 6.626 0 0121 21.118a4.369 4.369 0 012.012 2.718 1.009 1.009 0 01-.177.859.923.923 0 01-.731.354z", "data-name": "Path 1497", transform: "translate(-7.041 -13.317)" }),
        React__default.createElement("path", { d: "M7.777 12.808a2.507 2.507 0 01-2.3-2.431 2.35 2.35 0 01.6-1.787 2.371 2.371 0 013.4 0 2.333 2.333 0 01.6 1.784 2.505 2.505 0 01-2.3 2.43z", "data-name": "Path 1498", transform: "translate(-3.41 -6.808)" }),
        React__default.createElement("path", { d: "M7.68 20.016a5.057 5.057 0 00-2.188-.43 5.157 5.157 0 00-2.686.721 3.618 3.618 0 00-1.653 2.223.913.913 0 00.16.779.844.844 0 00.669.325h3.7a.267.267 0 00.262-.219c0-.021.009-.042.014-.063a4.828 4.828 0 011.924-2.794.267.267 0 00-.021-.446c-.052-.031-.112-.063-.181-.1z", "data-name": "Path 1499", transform: "translate(-1.125 -12.968)" })));
}

function NotificationsSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 16 19.39" },
        React__default.createElement("g", { "data-name": "Group 336", transform: "translate(57)" },
            React__default.createElement("path", { d: "M20.962 17.635a12.078 12.078 0 01-1.6-5.8V7.5A6.4 6.4 0 0013.038 1a6.4 6.4 0 00-6.323 6.5v4.33a11.87 11.87 0 01-1.6 5.8.4.4 0 000 .433.322.322 0 00.337.26h15.173a.44.44 0 00.375-.212.485.485 0 00-.038-.476z", "data-name": "Path 1032", transform: "translate(-62.05 -1)" }),
            React__default.createElement("path", { d: "M17.7 43a2.392 2.392 0 004.329 0z", "data-name": "Path 1033", transform: "translate(-68.878 -24.985)" }))));
}

function SettingsSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 16 16" },
        React__default.createElement("path", { d: "M62.073 56.8a5 5 0 00.041-.8c0-.28-.041-.52-.041-.8l1.718-1.32a.367.367 0 00.082-.52l-1.636-2.76a.4.4 0 00-.491-.16l-2.046.8a5.955 5.955 0 00-1.391-.8l-.286-2.12a.438.438 0 00-.409-.32h-3.273a.438.438 0 00-.409.32l-.327 2.12a6.928 6.928 0 00-1.391.8l-2.046-.8a.383.383 0 00-.491.16l-1.636 2.76a.483.483 0 00.082.52l1.759 1.32c0 .28-.041.52-.041.8s.041.52.041.8l-1.718 1.32a.367.367 0 00-.082.52l1.636 2.76a.4.4 0 00.491.16l2.046-.8a5.954 5.954 0 001.391.8l.327 2.12a.4.4 0 00.409.32h3.273a.438.438 0 00.409-.32l.328-2.12a6.924 6.924 0 001.391-.8l2.046.8a.383.383 0 00.491-.16l1.636-2.76a.482.482 0 00-.082-.52zm-6.1 2a2.8 2.8 0 112.868-2.8 2.815 2.815 0 01-2.864 2.8z", "data-name": "Path 1163", transform: "translate(-47.998 -48.001)" })));
}

function SkillWalletNavSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 16 14.769" },
        React__default.createElement("g", { "data-name": "Group 1260", transform: "translate(-142.231 -344.268)" },
            React__default.createElement("path", { d: "M53.95 74.665V68.1a1.641 1.641 0 011.642-1.642h7.577v-.819A1.636 1.636 0 0061.542 64h-11.85A1.662 1.662 0 0048 65.615v11.539a1.662 1.662 0 001.692 1.615h11.846a1.633 1.633 0 001.627-1.642v-.819h-7.577a1.641 1.641 0 01-1.638-1.642z", "data-name": "Path 1164", transform: "translate(94.231 280.268)" }),
            React__default.createElement("path", { d: "M245 170.615v5.38a.617.617 0 00.615.615h7.185a.617.617 0 00.615-.615v-5.38a.617.617 0 00-.615-.615h-7.186a.617.617 0 00-.614.615zm2.963 3.916a1.23 1.23 0 111.149-1.149 1.23 1.23 0 01-1.149 1.148z", "data-name": "Path 1165", transform: "translate(-95.184 178.348)" }))));
}

function FooterMembersSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 32 29.866" },
        React__default.createElement("path", { d: "M9.883 14.933a5.747 5.747 0 00-4.417 2.133H3.233a3.821 3.821 0 01-2.3-.675A2.283 2.283 0 010 14.416q0-5.883 2.067-5.883a3.2 3.2 0 01.725.35 10.987 10.987 0 001.625.708A5.846 5.846 0 006.4 9.95a6.7 6.7 0 002.217-.383 8.293 8.293 0 00-.084 1.1 7.338 7.338 0 001.35 4.267zm17.85 10.617a4.153 4.153 0 01-1.217 3.158 4.5 4.5 0 01-3.233 1.158H8.716a4.493 4.493 0 01-3.233-1.158 4.157 4.157 0 01-1.216-3.158q0-.884.059-1.725a17.023 17.023 0 01.234-1.817A14.22 14.22 0 015 20.2a8.514 8.514 0 01.716-1.625 5.886 5.886 0 011.033-1.35 4.333 4.333 0 011.425-.892A5.011 5.011 0 0110.033 16a1.958 1.958 0 01.716.358q.549.358 1.217.8a7.321 7.321 0 001.783.8 7.736 7.736 0 006.282-.8q.668-.442 1.217-.8a1.958 1.958 0 01.717-.358 5.006 5.006 0 011.859.333 4.346 4.346 0 011.425.892 5.853 5.853 0 011.033 1.35A8.589 8.589 0 0127 20.2a14.119 14.119 0 01.442 1.808 17.023 17.023 0 01.234 1.817q.059.842.059 1.725zM10.666 4.267a4.113 4.113 0 01-1.25 3.017A4.106 4.106 0 016.4 8.533a4.115 4.115 0 01-3.017-1.25 4.109 4.109 0 01-1.25-3.017 4.109 4.109 0 011.25-3.016A4.115 4.115 0 016.4 0a4.106 4.106 0 013.017 1.25 4.113 4.113 0 011.249 3.017zm11.733 6.4a6.168 6.168 0 01-1.875 4.525A6.162 6.162 0 0116 17.066a6.171 6.171 0 01-4.525-1.875A6.164 6.164 0 019.6 10.666a6.164 6.164 0 011.875-4.525A6.171 6.171 0 0116 4.267a6.162 6.162 0 014.525 1.875 6.168 6.168 0 011.875 4.524zm9.6 3.75a2.285 2.285 0 01-.933 1.975 3.813 3.813 0 01-2.3.675h-2.233a5.747 5.747 0 00-4.417-2.133 7.338 7.338 0 001.35-4.267 8.293 8.293 0 00-.084-1.1 6.7 6.7 0 002.217.383 5.851 5.851 0 001.983-.358 10.931 10.931 0 001.625-.708 3.17 3.17 0 01.725-.35Q32 8.532 32 14.416zm-2.133-10.15a4.113 4.113 0 01-1.25 3.017 4.266 4.266 0 01-6.034 0 4.109 4.109 0 01-1.25-3.017 4.109 4.109 0 011.25-3.017 4.266 4.266 0 016.034 0 4.113 4.113 0 011.25 3.017z" })));
}

function FooterShareSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 32 32.003" },
        React__default.createElement("g", { transform: "translate(-8.243 155.5)" },
            React__default.createElement("path", { d: "M31.167 15.167a5.333 5.333 0 10-5.292-4.676L13.537 16.66a5.333 5.333 0 100 7.679l12.338 6.169a5.333 5.333 0 101.592-3.18l-12.338-6.169a5.387 5.387 0 000-1.316l12.338-6.169a5.307 5.307 0 003.7 1.493z", "data-name": "Path 1494", transform: "translate(3.742 -160)" }))));
}

function LogoffSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 16 15.707" },
        React__default.createElement("g", { "data-name": "Group 26", transform: "translate(-1)" },
            React__default.createElement("path", { d: "M192 163.208h5.184l-1.192 1.222.817.817 2.624-2.624L196.81 160l-.847.817 1.222 1.222H192z", "data-name": "Path 1077", transform: "translate(-182.434 -154.77)" }),
            React__default.createElement("path", { d: "M55.871 62.1a6.241 6.241 0 114.415-10.663l1.148-1.144a8.369 8.369 0 00-1.05-.876 7.849 7.849 0 101.046 12l-1.144-1.14a6.214 6.214 0 01-4.415 1.82zm7.287-6.209l-.032-.032.032-.032.032.032z", "data-name": "Path 1078", transform: "translate(-47 -48)" }))));
}

function MilestonesCompletedSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 21.5 21.5" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "gray" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M0 0v21.5h21.5V7.6l-3.527 3.527v6.844H3.527V3.527h6.844L13.9 0zm18.454.272l-7.779 7.78L7.9 5.272 5.046 8.124l5.629 5.628 2.85-2.85 7.775-7.78-2.846-2.85z" })));
}

function MilestonesSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 13.277 3.319" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M11.618 0A1.661 1.661 0 0010.1 1H8.159a1.658 1.658 0 00-3.041 0H3.18a1.66 1.66 0 100 1.328h1.938a1.658 1.658 0 003.041 0H10.1A1.659 1.659 0 1011.618 0z" })));
}

function ParticipationRateSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 23 23" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "gray" }))),
        React__default.createElement("g", { fill: "url(#linear-gradient)", transform: "translate(-2.25 -2.25)" },
            React__default.createElement("path", { d: "M3.893 22.5v1.643H7.66l-5.41 5.41 1.162 1.162 5.41-5.41v3.767h1.643V22.5z", "data-name": "Path 1580", transform: "translate(0 -5.464)" }),
            React__default.createElement("path", { d: "M27.071 4.5h-5.75v1.643h2.945l-6.231 6.231-3.526-3.527a.821.821 0 00-1.162 0L9 13.2l1.162 1.162 3.767-3.767 3.527 3.527a.821.821 0 001.162 0L25.429 7.3v2.95h1.643z", "data-name": "Path 1581", transform: "translate(-1.821 -.607)" }),
            React__default.createElement("path", { d: "M18 31.5h11.5v1.643H18z", "data-name": "Path 1582", transform: "translate(-4.25 -7.893)" }),
            React__default.createElement("path", { d: "M2.25 2.25h1.643v11.5H2.25z", "data-name": "Path 1583" }))));
}

function ProjectsCreatedSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 20.124 23" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "gray" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M17.262 23a2.794 2.794 0 01-1.584-.471 2.83 2.83 0 01-1.045-1.236 14.221 14.221 0 01-5.84-2.639 17.091 17.091 0 01-4.47-5.065v4.065a2.938 2.938 0 011.045 1.033 2.729 2.729 0 01.393 1.437 2.771 2.771 0 01-.842 2.033A2.767 2.767 0 012.886 23a2.773 2.773 0 01-2.033-.842 2.766 2.766 0 01-.841-2.032A2.731 2.731 0 01.4 18.687a2.932 2.932 0 011.045-1.033V5.345A2.938 2.938 0 01.4 4.312a2.729 2.729 0 01-.388-1.437A2.771 2.771 0 01.854.842 2.767 2.767 0 012.887 0 2.773 2.773 0 014.92.842a2.769 2.769 0 01.842 2.033 2.784 2.784 0 01-.348 1.37 2.811 2.811 0 01-.932 1.011 16.908 16.908 0 003.527 8.636 12.143 12.143 0 006.94 4.526 2.875 2.875 0 114.346 3.74 2.769 2.769 0 01-2.033.842zM2.875 21.562a1.414 1.414 0 001.025-.415 1.357 1.357 0 00.427-1.011 1.4 1.4 0 00-.427-1.022 1.4 1.4 0 00-1.022-.427 1.357 1.357 0 00-1.011.427 1.414 1.414 0 00-.415 1.022 1.418 1.418 0 001.426 1.426zm0-20.124a1.376 1.376 0 00-1.011.415 1.389 1.389 0 00-.415 1.022A1.389 1.389 0 001.865 3.9a1.376 1.376 0 001.011.415A1.4 1.4 0 003.9 3.886a1.4 1.4 0 00.427-1.022A1.357 1.357 0 003.9 1.853a1.414 1.414 0 00-1.022-.415zM17.25 18.687a1.437 1.437 0 100 2.875 1.457 1.457 0 001.45-1.449 1.357 1.357 0 00-.427-1.011 1.414 1.414 0 00-1.023-.415z", transform: "translate(-.012)" })));
}

function ScoreReachedSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 13.278 16.73" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#545454" }))),
        React__default.createElement("g", { transform: "translate(-.001)", style: { isolation: "isolate" }, fill: "url(#linear-gradient)" },
            React__default.createElement("path", { d: "M4.078 7.03a2.39 2.39 0 10-2.39-2.39 2.39 2.39 0 002.39 2.39zm0-3.585A1.195 1.195 0 112.883 4.64a1.195 1.195 0 011.195-1.195z", "data-name": "Path 1529", transform: "translate(-1.687 -2.25)" }),
            React__default.createElement("path", { d: "M15.89 2.25a2.39 2.39 0 102.39 2.39 2.39 2.39 0 00-2.39-2.39zm0 3.585a1.195 1.195 0 111.195-1.195 1.195 1.195 0 01-1.195 1.195z", "data-name": "Path 1530", transform: "translate(-9.251 -2.25)" }),
            React__default.createElement("path", { d: "M27.7 7.03a2.39 2.39 0 10-2.39-2.39 2.39 2.39 0 002.39 2.39zm0-3.585a1.195 1.195 0 11-1.192 1.195A1.195 1.195 0 0127.7 3.445z", "data-name": "Path 1531", transform: "translate(-16.814 -2.25)" }),
            React__default.createElement("path", { d: "M4.078 13.5a2.39 2.39 0 102.39 2.39 2.39 2.39 0 00-2.39-2.39zm0 3.585a1.195 1.195 0 111.195-1.195 1.195 1.195 0 01-1.195 1.195z", "data-name": "Path 1532", transform: "translate(-1.687 -7.525)" }),
            React__default.createElement("path", { d: "M15.89 13.5a2.39 2.39 0 102.39 2.39 2.39 2.39 0 00-2.39-2.39zm0 3.585a1.195 1.195 0 111.195-1.195 1.195 1.195 0 01-1.195 1.195z", "data-name": "Path 1533", transform: "translate(-9.251 -7.525)" }),
            React__default.createElement("path", { d: "M27.7 13.5a2.39 2.39 0 102.39 2.39 2.39 2.39 0 00-2.39-2.39zm0 3.585a1.195 1.195 0 111.2-1.195 1.195 1.195 0 01-1.2 1.195z", "data-name": "Path 1534", transform: "translate(-16.814 -7.525)" }),
            React__default.createElement("path", { d: "M27.7 24.75a2.39 2.39 0 102.39 2.39 2.39 2.39 0 00-2.39-2.39zm0 3.585a1.195 1.195 0 111.2-1.195 1.195 1.195 0 01-1.2 1.195z", "data-name": "Path 1535", transform: "translate(-16.814 -12.8)" }),
            React__default.createElement("path", { d: "M3.938 28.688h1.195v1.195H3.938z", "data-name": "Path 1536", transform: "translate(-2.742 -14.647)" }),
            React__default.createElement("path", { d: "M10.688 28.688h1.195v1.195h-1.195z", "data-name": "Path 1537", transform: "translate(-7.107 -14.647)" }),
            React__default.createElement("path", { d: "M17.438 28.688h1.195v1.195h-1.195z", "data-name": "Path 1538", transform: "translate(-11.172 -14.647)" }))));
}

function YourContributionsSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 32.545 30.438" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "gray" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", stroke: "rgba(0,0,0,0)", strokeMiterlimit: "10", strokeWidth: "1", d: "M33.015 8.024a1.123 1.123 0 00-.827-.554 1.18 1.18 0 00-.969.293L26.9 11.776a1.2 1.2 0 01-1.591 0l-1.868-1.736a.992.992 0 010-1.477l4.3-3.993a1 1 0 00.311-.928 1.061 1.061 0 00-.647-.764 9.57 9.57 0 00-9.863 1.711c-2.173 2-2.82 5.131-1.775 8.584a.989.989 0 01-.316 1.044L3.747 24.141a4.005 4.005 0 00-1.367 4.128 4.362 4.362 0 003.289 3.055 4.734 4.734 0 004.448-1.267l10.806-10.89a1.175 1.175 0 011.109-.3 13.521 13.521 0 003.25.416 8.576 8.576 0 005.9-2.065 8.066 8.066 0 001.837-9.2zM6.995 29.342a2.289 2.289 0 01-2.273-1.174 1.979 1.979 0 01.438-2.38 2.38 2.38 0 012.564-.407 2.064 2.064 0 011.264 2.11A2.174 2.174 0 017 29.342z", transform: "translate(-1.716 -1.537)" })));
}

function LayerBlurSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 1366 768" },
        React__default.createElement("g", { fill: "#fff", stroke: "#707070", strokeWidth: "1", "data-name": "Rectangle 1780" },
            React__default.createElement("path", { stroke: "none", d: "M0 0H1366V768H0z" }),
            React__default.createElement("path", { fill: "none", d: "M0.5 0.5H1365.5V767.5H0.5z" }))));
}

function Shape1Svg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 234.924 628.344" },
        React__default.createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M.372.333l234.052 261.7v219.94L45.059 627.949", "data-name": "Path 1589" })));
}

function Shape2Svg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 295.059 393.445" },
        React__default.createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M.469 60.764l233.79-59.759L64.42 148.894l88.592 50.688L238.459 2.674l55.948 189.156-227.948 22.348-65.99 179.1", "data-name": "Path 1590" })));
}

function Shape3Svg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 65.596 49.049" },
        React__default.createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M64.999 0L0 48.245", "data-name": "Line 51", transform: "translate(.299 .402)" })));
}

function Shape4Svg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 117.453 66.133" },
        React__default.createElement("g", { "data-name": "Group 1816", transform: "translate(.502 .383)" },
            React__default.createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 5" },
                React__default.createElement("path", { d: "M20.65.113L0 20.763v44.484h44.4l20.483-20.483V.113z", "data-name": "Path 11" }),
                React__default.createElement("path", { d: "M0 20.77h44L64.766.003", "data-name": "Path 12" }),
                React__default.createElement("path", { d: "M0 65.251l21.322-21.322h43.336", "data-name": "Path 13" }),
                React__default.createElement("path", { d: "M0 0L0 44.559", "data-name": "Line 1", transform: "translate(44.072 20.537)" }),
                React__default.createElement("path", { d: "M0 0L0 43.812", "data-name": "Line 2", transform: "translate(21.135 .186)" })),
            React__default.createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 6", transform: "translate(51.565)" },
                React__default.createElement("path", { d: "M20.65.113L0 20.763v44.484h44.4l20.483-20.483V.113z", "data-name": "Path 14" }),
                React__default.createElement("path", { d: "M0 20.77h44L64.767.003", "data-name": "Path 15" }),
                React__default.createElement("path", { d: "M0 65.251l21.322-21.322h43.332", "data-name": "Path 16" }),
                React__default.createElement("path", { d: "M0 0L0 44.559", "data-name": "Line 3", transform: "translate(44.072 20.537)" }),
                React__default.createElement("path", { d: "M0 0L0 43.812", "data-name": "Line 4", transform: "translate(21.135 .186)" })),
            React__default.createElement("g", { "data-name": "Group 7", transform: "translate(78.03 27.408)", style: { mixBlendMode: "multiply", isolation: "isolate" } },
                React__default.createElement("circle", { cx: "5.417", cy: "5.417", r: "5.417", fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Ellipse 1" })))));
}

function Shape5Svg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 74.281 173.434" },
        React__default.createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 1817", transform: "translate(.5 .936)" },
            React__default.createElement("g", { "data-name": "Group 9" },
                React__default.createElement("path", { d: "M58.384 27.377l-8.835-4.3-26.815 2", "data-name": "Path 1-2" }),
                React__default.createElement("path", { d: "M73.28 63.037L62.29 79.224V0", "data-name": "Path 1-2" }),
                React__default.createElement("path", { d: "M35.616 50.589V28.202", "data-name": "Path 1-2" }),
                React__default.createElement("path", { d: "M62.291 79.224l10.99-16.187-10.99 16.187L50.284 54.04l8.1-2.617 14.9 11.614V15.416L62.294 0 49.552 23.076l.735 30.964", "data-name": "Path 1-2" }),
                React__default.createElement("path", { d: "M22.735 25.071v27.637L54.619 172.37", "data-name": "Path 1-2" }),
                React__default.createElement("path", { d: "M58.388 50.589h-22.77V28.202l-12.879-3.131 12.879 3.131 22.769-.826v24.047l-19.175 6.285L.005 70.559", "data-name": "Path 1-2" }),
                React__default.createElement("path", { d: "M.931 7.699l-.93 62.859.93-62.859 61.361-7.7", "data-name": "Path 1-2" })),
            React__default.createElement("path", { d: "M0 11.96L14.898 0", "data-name": "Line 6", transform: "translate(58.382 15.416)" }))));
}

function Shape6Svg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 374.127 223.264" },
        React__default.createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M373.805 123.53L227.152.675.352 222.907", "data-name": "Path 1591" })));
}

function Shape7Svg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a; _b.height; _b.width; _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "64.363", height: "128.725", "data-name": "Group 1815", viewBox: "0 0 64.363 128.725" },
        React__default.createElement("path", { fill: "#fff", d: "M3259.638 739.111v29.067a35.3 35.3 0 000 70.591v29.067a64.362 64.362 0 010-128.724z", "data-name": "Path 10", transform: "translate(-3195.276 -739.111)" })));
}

function DitoCreditsSuccessSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { style: { height: height, width: width }, className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 60.286 41.332" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff" }),
                React__default.createElement("stop", { offset: "1", stopColor: "gray" }))),
        React__default.createElement("g", { fill: "url(#linear-gradient)", stroke: "#fff", strokeWidth: "1", "data-name": "Group 17", transform: "translate(.5 .5)" },
            React__default.createElement("path", { d: "M292.678 317.919v7.4c0 2.513-6.7 4.608-14.941 4.608s-14.8-2.025-14.8-4.538v-.838l-.14-5.865h.07c1.117 2.164 7.261 3.84 14.661 3.84s15.011-2.094 15.011-4.608h.14z", "data-name": "Path 179", transform: "translate(-233.392 -289.596)" }),
            React__default.createElement("path", { d: "M175.928 112.074v7.326h-.14c0 2.583-6.912 4.608-15.08 4.608a35.831 35.831 0 01-9.425-1.047l-.14.14a16.313 16.313 0 00-5.166-2.862v-.14l-.209-7.75c.489 2.374 6.982 4.259 14.871 4.259s15.15-2.025 15.15-4.538z", "data-name": "Path 180", transform: "translate(-129.483 -107.604)" }),
            React__default.createElement("path", { d: "M175.929 83.234h0c0 2.513-6.912 4.538-15.15 4.538s-14.452-1.885-14.941-4.259c0-.07-.07-.209-.07-.279 0-2.513 6.7-4.608 15.011-4.608 8.308-.07 15.15 2.025 15.15 4.608z", "data-name": "Path 181", transform: "translate(-129.484 -78.624)" }),
            React__default.createElement("path", { d: "M261.942 270.946h0l-.064-1.408-.127-5.761c.446 2.177 6.368 3.9 13.564 3.9s13.564-1.856 13.755-4.1h.064v6.658h-.127c0 2.3-6.177 4.225-13.691 4.225s-12.355-1.53-13.374-3.514z", "data-name": "Path 182", transform: "translate(-229.847 -240.921)" }),
            React__default.createElement("path", { d: "M188.608 317.028a14.98 14.98 0 004.119-6.423h.349c1.536.14 3.072.209 4.748.209h.7v1.536l.14 5.865h-.768a36.177 36.177 0 01-9.076-.977z", "data-name": "Path 183", transform: "translate(-166.025 -283.259)" }),
            React__default.createElement("path", { d: "M225.75 255.089v.349l.14 6.493h-.7c-1.745 0-3.351-.07-4.887-.209h-.349a14.328 14.328 0 00.7-4.538 14.13 14.13 0 00-.349-3h.349c1.466.14 2.932.209 4.538.209l.628.349a.759.759 0 00-.07.347z", "data-name": "Path 184", transform: "translate(-193.405 -233.087)" }),
            React__default.createElement("path", { d: "M186.137 170.492a35.831 35.831 0 009.425 1.047c8.168 0 15.08-2.025 15.08-4.608h.14v8.238c-7.61 0-13.824 1.815-14.592 4.119l-.628-.349q-2.3 0-4.4-.209h-.349a14.092 14.092 0 00-4.813-8.169z", "data-name": "Path 185", transform: "translate(-164.673 -156.494)" }),
            React__default.createElement("g", { "data-name": "Group 16", transform: "translate(0 8.006)" },
                React__default.createElement("path", { d: "M29.812 177.822h0a15.281 15.281 0 00-4.957-8.308 13.267 13.267 0 00-5.306-2.932 13.487 13.487 0 00-4.4-.7 15.011 15.011 0 10-.279 30.021 15.314 15.314 0 0010.333-3.98 15.161 15.161 0 004.189-6.633 13.9 13.9 0 00.7-4.468c0-.975-.28-2.022-.28-3z", "data-name": "Path 186", transform: "translate(0 -165.883)" }),
                React__default.createElement("path", { d: "M291.7 233.119v.14c-.209 2.444-6.982 4.468-15.08 4.468s-14.382-1.885-14.871-4.259v-.349a.886.886 0 01.07-.419c.768-2.3 6.982-4.119 14.592-4.119h.209c8.24 0 15.08 2.025 15.08 4.538z", "data-name": "Path 187", transform: "translate(-232.487 -220.202)" })),
            React__default.createElement("path", { d: "M80.319 204.811a2.3 2.3 0 112.3-2.3 1.4 1.4 0 002.793 0 5.153 5.153 0 00-3.7-4.887v-.559a1.4 1.4 0 10-2.793 0v.559a4.876 4.876 0 00-3.7 4.887 5.125 5.125 0 005.1 5.1 2.3 2.3 0 110 4.608h0a2.324 2.324 0 01-2.3-2.3 1.4 1.4 0 10-2.793 0 5.089 5.089 0 003.7 4.887v1.117a1.4 1.4 0 002.793 0v-1.117a5.035 5.035 0 003.421-6.353 5.091 5.091 0 00-4.821-3.642z", "data-name": "Path 188", transform: "translate(-66.216 -182.583)" }))));
}

var SwLogoSvg = function (_a) {
    var _b = _a === void 0 ? {
        height: "auto",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { style: { height: height, width: width }, className: className, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 360 360" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { x1: "0.281", x2: "0.538", y1: "0.79", y2: "0.324", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0" }),
                React__default.createElement("stop", { offset: "0.512", stopColor: "#d1d1d1", stopOpacity: "0.137" }),
                React__default.createElement("stop", { offset: "0.917", stopColor: "#434342", stopOpacity: "0.569" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#171716", stopOpacity: "0.698" })),
            React__default.createElement("linearGradient", { x1: "0.281", x2: "0.538", y1: "0.149", y2: "-0.316", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0" }),
                React__default.createElement("stop", { offset: "0.546", stopColor: "#cacac9", stopOpacity: "0.137" }),
                React__default.createElement("stop", { offset: "0.977", stopColor: "#232322", stopOpacity: "0.569" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#171716", stopOpacity: "0.6" })),
            React__default.createElement("linearGradient", { x1: "0.951", x2: "0.377", y1: "0.714", y2: "0.436", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0" }),
                React__default.createElement("stop", { offset: "0.721", stopColor: "#9f9f9e", stopOpacity: "0.125" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#171716", stopOpacity: "0.302" })),
            React__default.createElement("linearGradient", { x1: "0.141", x2: "0.557", y1: "0.653", y2: "0.499", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0" }),
                React__default.createElement("stop", { offset: "0.819", stopColor: "#525251", stopOpacity: "0.298" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#171716", stopOpacity: "0.4" })),
            React__default.createElement("linearGradient", { id: "linear-gradient-5", x1: "0.599", x2: "0.332", y1: "0.4", y2: "0.666", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0" }),
                React__default.createElement("stop", { offset: "0.672", stopColor: "#c4c4c3", stopOpacity: "0.102" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#171716", stopOpacity: "0.4" })),
            React__default.createElement("linearGradient", { x1: "1.117", x2: "-0.11", y1: "0.807", y2: "0.171", xlinkHref: "#linear-gradient-5" }),
            React__default.createElement("linearGradient", { x1: "0.25", x2: "1.009", y1: "-0.483", y2: "0.983", xlinkHref: "#linear-gradient-5" })),
        React__default.createElement("g", { "data-name": "Group 12", transform: "translate(-90 -88)" },
            React__default.createElement("circle", { cx: "180", cy: "180", r: "180", fill: "#f4f2f2", "data-name": "Ellipse 7", transform: "translate(90 88)" }),
            React__default.createElement("g", { "data-name": "Group 11", transform: "translate(-8.621 -6.967)" },
                React__default.createElement("path", { d: "M228.563 277.684l-39.942-30.15v23.727s29.112 14.987 28.445 14.525 11.497-8.102 11.497-8.102z", fill: "url(#linear-gradient)", "data-name": "Path 35", transform: "translate(0 -2.872)" }),
                React__default.createElement("path", { d: "M228.563 278.68l-39.942 30.15V285.1s29.112-14.988 28.445-14.525 11.497 8.105 11.497 8.105z", fill: "url(#linear-gradient-2)", "data-name": "Path 36", transform: "translate(0 -3.924)" }),
                React__default.createElement("path", { d: "M271.864 336.005l-20.42 35.735 23.981.309 7.817-37.985z", fill: "url(#linear-gradient-3)", "data-name": "Path 37", transform: "translate(-2.872 -6.827)" }),
                React__default.createElement("path", { d: "M312.693 371.344l-29.3-51.116-3.555 17.267 14.866 33.849z", fill: "url(#linear-gradient-4)", "data-name": "Path 38", transform: "translate(-4.17 -6.194)" }),
                React__default.createElement("path", { d: "M251.444 185.017l35.9 76.3 84 44.184.146-24.127-69.59-31.913-26.476-63.861z", fill: "url(#linear-gradient-5)", "data-name": "Path 39", transform: "translate(-2.872 -.014)" }),
                React__default.createElement("path", { d: "M0 0H59.951V59.951H0z", fill: "#040506", "data-name": "Rectangle 41", transform: "rotate(-180 124.286 182.575)" }),
                React__default.createElement("path", { d: "M0 0H35.971V35.971H0z", fill: "#fff", "data-name": "Rectangle 42", transform: "rotate(-180 118.291 176.58)" }),
                React__default.createElement("circle", { cx: "5.995", cy: "5.995", r: "5.995", fill: "#040506", "data-name": "Ellipse 4", transform: "translate(212.601 329.178)" }),
                React__default.createElement("path", { d: "M0 0H59.951V59.951H0z", fill: "#040506", "data-name": "Rectangle 43", transform: "rotate(-180 184.237 182.575)" }),
                React__default.createElement("path", { d: "M0 0H35.971V35.971H0z", fill: "#fff", "data-name": "Rectangle 44", transform: "rotate(-180 178.242 176.58)" }),
                React__default.createElement("circle", { cx: "5.995", cy: "5.995", r: "5.995", fill: "#040506", "data-name": "Ellipse 5", transform: "translate(332.504 329.178)" }),
                React__default.createElement("path", { d: "M0 0H59.951V59.951H0z", fill: "#040506", "data-name": "Rectangle 45", transform: "rotate(180 124.286 122.331)" }),
                React__default.createElement("path", { d: "M0 0H35.971V35.971H0z", fill: "#fff", "data-name": "Rectangle 46", transform: "rotate(180 118.291 116.336)" }),
                React__default.createElement("circle", { cx: "5.995", cy: "5.995", r: "5.995", fill: "#040506", "data-name": "Ellipse 6", transform: "translate(212.601 208.691)" }),
                React__default.createElement("path", { d: "M0 0H71.942V11.99H0z", fill: "#040506", "data-name": "Rectangle 47", transform: "translate(212.601 268.935)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 48", transform: "translate(248.572 256.945)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 49", transform: "translate(224.591 256.945)" }),
                React__default.createElement("path", { d: "M0 0H11.99V23.981H0z", fill: "#040506", "data-name": "Rectangle 50", transform: "translate(260.562 244.954)" }),
                React__default.createElement("path", { d: "M0 0H83.932V11.99H0z", fill: "#040506", "data-name": "Rectangle 51", transform: "translate(284.543 209.276)" }),
                React__default.createElement("path", { d: "M0 0H35.971V11.99H0z", fill: "#040506", "data-name": "Rectangle 52", transform: "translate(332.504 221.266)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 53", transform: "translate(356.484 185.295)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 54", transform: "translate(356.484 233.256)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 55", transform: "translate(332.504 185.295)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 56", transform: "translate(345.039 197.831)" }),
                React__default.createElement("path", { d: "M0 0H35.971V11.99H0z", fill: "#040506", "data-name": "Rectangle 57", transform: "translate(296.533 245.247)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 58", transform: "translate(344.494 245.247)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 59", transform: "translate(332.504 256.945)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 60", transform: "translate(356.63 281.071)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 61", transform: "translate(356.484 256.945)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 62", transform: "translate(332.504 233.256)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 63", transform: "translate(308.523 233.256)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 64", transform: "translate(296.533 221.266)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 65", transform: "translate(308.523 185.295)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 66", transform: "translate(272.552 185.295)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 67", transform: "translate(308.523 197.286)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 68", transform: "translate(296.533 197.286)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 69", transform: "translate(320.513 197.286)" }),
                React__default.createElement("path", { d: "M0 0H11.99V24.273H0z", fill: "#040506", "data-name": "Rectangle 70", transform: "translate(260.562 304.906)" }),
                React__default.createElement("path", { d: "M0 0H11.99V24.273H0z", fill: "#040506", "data-name": "Rectangle 71", transform: "translate(284.543 304.906)" }),
                React__default.createElement("path", { d: "M0 0H11.99V36.263H0z", fill: "#040506", "data-name": "Rectangle 72", transform: "translate(272.552 304.906)" }),
                React__default.createElement("path", { d: "M0 0H11.99V12.136H0z", fill: "#040506", "data-name": "Rectangle 73", transform: "translate(272.552 292.842)" }),
                React__default.createElement("path", { d: "M0 0H11.99V12.136H0z", fill: "#040506", "data-name": "Rectangle 74", transform: "translate(284.543 341.096)" }),
                React__default.createElement("path", { d: "M0 0H35.971V11.99H0z", fill: "#040506", "data-name": "Rectangle 75", transform: "translate(236.582 280.925)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 76", transform: "translate(212.601 280.925)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 77", transform: "translate(248.572 292.916)" }),
                React__default.createElement("path", { d: "M0 0H11.99V11.99H0z", fill: "#040506", "data-name": "Rectangle 78", transform: "translate(200.611 280.925)" }),
                React__default.createElement("path", { d: "M0 0H27.196V11.99H0z", fill: "#040506", "data-name": "Rectangle 79", transform: "translate(200.611 256.945)" }),
                React__default.createElement("path", { d: "M251.444 184.711l22.706 48.545 20.82-.584-19.546-47.372z", fill: "url(#linear-gradient-6)", "data-name": "Path 45", transform: "translate(-2.872)" }),
                React__default.createElement("path", { d: "M327.993 285.534h46.852v24.273z", fill: "url(#linear-gradient-7)", "data-name": "Path 46", transform: "translate(-6.371 -4.609)" })))));
};

function DitoLogoFullSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { height: height, width: width }, className: className, viewBox: "0 0 279.897 76.397" },
        React__default.createElement("g", { "data-name": "Group 1818", transform: "translate(-2538.506 -214.397)" },
            React__default.createElement("g", { "data-name": "Group 12", transform: "translate(2538.913 214.804)" },
                React__default.createElement("g", { "data-name": "Path 1-2" },
                    React__default.createElement("path", { fill: "#fff", d: "M2598.4 290.586a.2.2 0 01-.035 0l-59.042-8.214a.245.245 0 01-.117-.435l21.455-16.846V239.13l-20.573-16.392a.244.244 0 01-.06-.312.246.246 0 01.3-.109l27.758 10.334 21.3-1.588 8.8-15.934a.243.243 0 01.2-.125.224.224 0 01.188.072.221.221 0 01.031.038l10.411 14.6a.259.259 0 01.046.132V275a.247.247 0 01-.035.126l-.009.013-10.418 15.34c-.006.007-.011.015-.018.021a.246.246 0 01-.073.058.263.263 0 01-.069.023h-.041zm-58.439-8.621l58.022 8.072-7.548-15.833-22.559-1.277a.227.227 0 01-.047-.007h-.007a.242.242 0 01-.107-.066.128.128 0 01-.02-.023.248.248 0 01-.045-.136l.028-6.9-6.684-.324zm58.684-7.3v14.877l9.726-14.327zm-7.652-.433l7.162 15.024v-14.615zm7.652-.058l9.4.532-9.4-7.331zm0-7.42l9.927 7.74v-44.369l-9.927.74zm-7.893 6.973l7.4.419V267l-3.508-2.734-7.287 2.355zm-22.464-1.271l21.907 1.24-3.333-6.992-15-.726zm-.129-6.656l-.024 5.921 3.18-5.769zm26.537-2.058a.244.244 0 01.15.052l3.309 2.579V230.9l-8.468.631-3.119 5.649.688 28.955 7.365-2.38a.241.241 0 01.079-.009zm-22.574 1.76l14.646.708-.691-29.087a.25.25 0 01.031-.124l3-5.427-20.656 1.54 4.878 8.746a.246.246 0 01.031.119V263.2a.233.233 0 01-.031.118zm-3.961-.191l3.417.165 1.078-1.956-4.491.739zm-4.939-.239l4.45.216v-.949zm-21.629-41.762l19.466 15.509a.244.244 0 01.093.191v25.91l6.527-1.075.125-30.776zm26.7 10.522l-.121 29.931 4.7-.773v-20.946zm29.867-17.637l-8.186 14.824 8.186-.61zm.49-.182v14.36l9.72-.725z", "data-name": "Path 22", transform: "translate(-2539.113 -215.004)" })),
                React__default.createElement("g", { "data-name": "Path 1-2", transform: "translate(.001 23.763)" },
                    React__default.createElement("path", { fill: "#fff", d: "M2539.358 294.032a.245.245 0 01-.076-.477l55.169-18.082v-.373h-21.337a.245.245 0 01-.244-.245v-21.023l-12.021-2.923a.245.245 0 11.116-.475l12.174 2.96 21.548-.782a.238.238 0 01.179.069.244.244 0 01.074.176v22.793a.245.245 0 01-.168.232l-55.337 18.138a.255.255 0 01-.077.012zm34-19.418h21.092v-21.5l-21.092.765z", "data-name": "Path 23", transform: "translate(-2539.114 -250.426)" })),
                React__default.createElement("g", { "data-name": "Group 11", transform: "translate(55.338 14.614)" },
                    React__default.createElement("path", { fill: "#fff", d: "M2621.847 248.612a.245.245 0 01-.153-.435l14.121-11.335a.244.244 0 01.306.381L2622 248.558a.244.244 0 01-.153.054z", "data-name": "Path 24", transform: "translate(-2621.602 -236.787)" }))),
            React__default.createElement("g", { "data-name": "Group 15", transform: "translate(2538.506 214.397)" },
                React__default.createElement("g", { "data-name": "Path 1-2", transform: "translate(21.548 21.872)" },
                    React__default.createElement("path", { fill: "#fff", d: "M2605.068 252.383a.657.657 0 01-.285-.066l-8.216-4-25.24 1.878a.641.641 0 01-.7-.6.652.652 0 01.6-.7l25.416-1.89a.639.639 0 01.333.064l8.375 4.076a.653.653 0 01-.287 1.24z", "data-name": "Path 25", transform: "translate(-2570.626 -247.001)" })),
                React__default.createElement("g", { "data-name": "Path 1-2" },
                    React__default.createElement("path", { fill: "#fff", d: "M2539.158 282.581h-.009a.653.653 0 01-.643-.652v-.01l.881-59.58a.649.649 0 01.17-.417.65.65 0 01.146-.12.652.652 0 01.262-.088l58.151-7.3a.653.653 0 01.163 1.3l-57.6 7.228-.873 59.013a.653.653 0 01-.648.626z", "data-name": "Path 26", transform: "translate(-2538.506 -214.397)" })),
                React__default.createElement("g", { "data-name": "Group 13", transform: "translate(21.548 23.762)" },
                    React__default.createElement("path", { fill: "#fff", d: "M2597.391 278.583h-.031l-26.114-1.263a.654.654 0 01-.621-.652v-26.2a.653.653 0 01.653-.653.652.652 0 01.652.653v25.574l25.373 1.227 7.111-2.3v-22.312a.653.653 0 111.305 0v22.793a.651.651 0 01-.452.621l-7.676 2.48a.661.661 0 01-.2.032z", "data-name": "Path 27", transform: "translate(-2570.626 -249.819)" })),
                React__default.createElement("g", { "data-name": "Group 14" },
                    React__default.createElement("path", { fill: "#fff", d: "M2598.2 290.794a.573.573 0 01-.09-.006l-59.043-8.214a.652.652 0 11.18-1.292l58.636 8.157 10.08-15.188v-44.379l-10.294-14.443a.652.652 0 111.063-.757l10.417 14.612a.649.649 0 01.121.378v44.785a.649.649 0 01-.109.361l-10.417 15.692a.65.65 0 01-.544.294z", "data-name": "Path 28", transform: "translate(-2538.505 -214.398)" }))),
            React__default.createElement("text", { fill: "#fff", "data-name": "DISTRIBUTED TOWN", fontFamily: "Magistral-Book, Magistral", fontSize: "28", transform: "translate(2632.403 244.394)" },
                React__default.createElement("tspan", { x: "0", y: "0" }, "DISTRIBUTED"),
                React__default.createElement("tspan", { x: "0", y: "34" }, "TOWN")))));
}

var MainBackgroundSvg = function (_a) {
    var _b = _a === void 0 ? {
        height: "auto",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { style: { height: height, width: width }, className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1366.618 768.358" },
        React__default.createElement("g", { "data-name": "Group 1819", transform: "translate(21880.771 21782)" },
            React__default.createElement("path", { fill: "#161615", d: "M0 0H1363.67V766.738H0z", "data-name": "Rectangle 1855", transform: "translate(-21878.143 -21782)" }),
            React__default.createElement("g", { "data-name": "Group 1816", transform: "translate(-21513.447 -21091.498)" },
                React__default.createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 5" },
                    React__default.createElement("path", { d: "M20.65.113L0 20.763v44.484h44.4l20.483-20.483V.113z", "data-name": "Path 11" }),
                    React__default.createElement("path", { d: "M0 20.77h44L64.766.003", "data-name": "Path 12" }),
                    React__default.createElement("path", { d: "M0 65.251l21.322-21.322h43.336", "data-name": "Path 13" }),
                    React__default.createElement("path", { d: "M0 0L0 44.559", "data-name": "Line 1", transform: "translate(44.072 20.537)" }),
                    React__default.createElement("path", { d: "M0 0L0 43.812", "data-name": "Line 2", transform: "translate(21.135 .186)" })),
                React__default.createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 6", transform: "translate(51.565)" },
                    React__default.createElement("path", { d: "M20.65.113L0 20.763v44.484h44.4l20.483-20.483V.113z", "data-name": "Path 14" }),
                    React__default.createElement("path", { d: "M0 20.77h44L64.767.003", "data-name": "Path 15" }),
                    React__default.createElement("path", { d: "M0 65.251l21.322-21.322h43.332", "data-name": "Path 16" }),
                    React__default.createElement("path", { d: "M0 0L0 44.559", "data-name": "Line 3", transform: "translate(44.072 20.537)" }),
                    React__default.createElement("path", { d: "M0 0L0 43.812", "data-name": "Line 4", transform: "translate(21.135 .186)" })),
                React__default.createElement("g", { "data-name": "Group 7", transform: "translate(78.03 27.408)", style: { mixBlendMode: "multiply", isolation: "isolate" } },
                    React__default.createElement("circle", { cx: "5.417", cy: "5.417", r: "5.417", fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Ellipse 1" }))),
            React__default.createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 1814", transform: "translate(-21857.961 -21519.049)" },
                React__default.createElement("path", { d: "M2.884 5.764A2.884 2.884 0 100 2.881a2.884 2.884 0 002.884 2.883z", "data-name": "Path 2" }),
                React__default.createElement("path", { d: "M2.884 40.255A2.884 2.884 0 100 37.372a2.884 2.884 0 002.884 2.883z", "data-name": "Path 3" }),
                React__default.createElement("path", { d: "M2.884 74.743A2.883 2.883 0 100 71.86a2.884 2.884 0 002.884 2.883z", "data-name": "Path 4" }),
                React__default.createElement("path", { d: "M2.884 109.231A2.883 2.883 0 100 106.348a2.884 2.884 0 002.884 2.883z", "data-name": "Path 5" }),
                React__default.createElement("path", { d: "M2.884 143.719A2.884 2.884 0 100 140.835a2.884 2.884 0 002.884 2.884z", "data-name": "Path 6" }),
                React__default.createElement("path", { d: "M27.798 74.743a2.883 2.883 0 10-2.883-2.883 2.883 2.883 0 002.883 2.883z", "data-name": "Path 7" }),
                React__default.createElement("path", { d: "M27.798 109.231a2.883 2.883 0 10-2.883-2.883 2.883 2.883 0 002.883 2.883z", "data-name": "Path 8" }),
                React__default.createElement("path", { d: "M27.798 143.719a2.884 2.884 0 10-2.883-2.884 2.884 2.884 0 002.883 2.884z", "data-name": "Path 9" })),
            React__default.createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M-21876.9-21642.878l234.052 261.7v219.94l-189.365 145.976", "data-name": "Path 1589" }),
            React__default.createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M-21875.65-21418.275l233.79-59.759-169.839 147.889 88.592 50.688 85.447-196.908 55.948 189.156-227.948 22.348-65.99 179.1", "data-name": "Path 1590" }),
            React__default.createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M64.999 0L0 48.245", "data-name": "Line 51", transform: "translate(-21880.473 -21288.629)" }),
            React__default.createElement("g", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", "data-name": "Group 1817", transform: "translate(-21289.793 -21188.834)" },
                React__default.createElement("g", { "data-name": "Group 9" },
                    React__default.createElement("path", { d: "M58.384 27.377l-8.835-4.3-26.815 2", "data-name": "Path 1-2" }),
                    React__default.createElement("path", { d: "M73.28 63.037L62.29 79.224V0", "data-name": "Path 1-2" }),
                    React__default.createElement("path", { d: "M35.616 50.589V28.202", "data-name": "Path 1-2" }),
                    React__default.createElement("path", { d: "M62.291 79.224l10.99-16.187-10.99 16.187L50.284 54.04l8.1-2.617 14.9 11.614V15.416L62.294 0 49.552 23.076l.735 30.964", "data-name": "Path 1-2" }),
                    React__default.createElement("path", { d: "M22.735 25.071v27.637L54.619 172.37", "data-name": "Path 1-2" }),
                    React__default.createElement("path", { d: "M58.388 50.589h-22.77V28.202l-12.879-3.131 12.879 3.131 22.769-.826v24.047l-19.175 6.285L.005 70.559", "data-name": "Path 1-2" }),
                    React__default.createElement("path", { d: "M.931 7.699l-.93 62.859.93-62.859 61.361-7.7", "data-name": "Path 1-2" })),
                React__default.createElement("path", { d: "M0 11.96L14.898 0", "data-name": "Line 6", transform: "translate(58.382 15.416)" })),
            React__default.createElement("g", { "data-name": "Group 1815", transform: "translate(-20578.834 -21375.16)" },
                React__default.createElement("path", { fill: "#fff", d: "M3259.638 739.111v29.067a35.3 35.3 0 000 70.591v29.067a64.362 64.362 0 010-128.724z", "data-name": "Path 10", transform: "translate(-3195.276 -739.111)" })),
            React__default.createElement("path", { fill: "none", stroke: "#fff", strokeMiterlimit: "10", strokeWidth: "1", d: "M-20514.474-21113.377l-146.653-122.855-226.8 222.232", "data-name": "Path 1591" }))));
};

function ArchitectureSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 17.577 19.463" },
        React__default.createElement("path", { d: "M21.213 6.822l-8.161-3.766a.628.628 0 00-.527 0L4.364 6.822A.628.628 0 004 7.393v10.672a.628.628 0 00.364.571l8.161 3.764a.628.628 0 00.527 0l8.161-3.767a.628.628 0 00.364-.571V7.393a.628.628 0 00-.364-.571zm-8.424-2.5l6.66 3.076-6.66 3.076-6.661-3.081zM5.256 8.373l6.905 3.189v9.291l-6.905-3.19zm8.161 12.48v-9.291l6.905-3.189v9.291z", transform: "translate(-4 -2.998)" })));
}

function BackendSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 15.38 17.577" },
        React__default.createElement("path", { d: "M15.38 2.511V4.08c0 1.383-3.444 2.511-7.69 2.511S0 5.463 0 4.08V2.511C0 1.128 3.444 0 7.69 0s7.69 1.128 7.69 2.511zm0 3.531v3.531c0 1.383-3.444 2.511-7.69 2.511S0 10.956 0 9.573V6.042C1.652 7.18 4.676 7.71 7.69 7.71s6.038-.53 7.69-1.668zm0 5.493v3.531c0 1.383-3.444 2.511-7.69 2.511S0 16.449 0 15.066v-3.531C1.652 12.673 4.676 13.2 7.69 13.2s6.038-.527 7.69-1.665z", "data-name": "Icon awesome-database" })));
}

function BlockchainSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 10.436 17.577" },
        React__default.createElement("path", { d: "M10.433 8.953l-5.215 3.186L0 8.953 5.218 0zm-5.215 4.209L0 9.976l5.218 7.6 5.218-7.6-5.218 3.186z", "data-name": "Icon awesome-ethereum" })));
}

function CommunitySvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 21.971 17.577" },
        React__default.createElement("path", { d: "M21.147 6.591h-4.669V.824A.824.824 0 0015.655 0h-4.944a.824.824 0 00-.824.824V3.3H7.69V.549A.549.549 0 007.141 0h-.55a.549.549 0 00-.549.549V3.3h-2.2V.549A.549.549 0 003.3 0h-.554A.549.549 0 002.2.549V3.3H.824A.824.824 0 000 4.12v12.358a1.1 1.1 0 001.1 1.1h19.773a1.1 1.1 0 001.1-1.1V7.415a.824.824 0 00-.826-.824zM4.394 13.869a.412.412 0 01-.412.412H2.609a.412.412 0 01-.412-.412V12.5a.412.412 0 01.412-.412h1.373a.412.412 0 01.412.412zm0-3.3a.412.412 0 01-.412.412H2.609a.412.412 0 01-.412-.412V9.2a.412.412 0 01.412-.412h1.373a.412.412 0 01.412.412zm0-3.3a.412.412 0 01-.412.412H2.609a.412.412 0 01-.409-.403V5.9a.412.412 0 01.412-.412h1.37a.412.412 0 01.412.412zm4.394 6.591a.412.412 0 01-.412.412H7a.412.412 0 01-.412-.412V12.5A.412.412 0 017 12.084h1.377a.412.412 0 01.412.412zm0-3.3a.412.412 0 01-.412.412H7a.412.412 0 01-.412-.412V9.2A.412.412 0 017 8.789h1.377a.412.412 0 01.412.412zm0-3.3a.412.412 0 01-.412.412H7a.412.412 0 01-.412-.412V5.9A.412.412 0 017 5.493h1.377a.412.412 0 01.412.412zm5.493 3.3a.412.412 0 01-.412.412H12.5a.412.412 0 01-.412-.412V9.2a.412.412 0 01.412-.412h1.373a.412.412 0 01.412.412zm0-3.3a.412.412 0 01-.412.412H12.5a.412.412 0 01-.412-.412V5.9a.412.412 0 01.412-.412h1.373a.412.412 0 01.412.412zm0-3.3a.412.412 0 01-.412.412H12.5a.412.412 0 01-.412-.412V2.609A.412.412 0 0112.5 2.2h1.373a.412.412 0 01.412.412zm5.493 9.887a.412.412 0 01-.412.412h-1.373a.412.412 0 01-.412-.412V12.5a.412.412 0 01.412-.412h1.373a.412.412 0 01.412.412zm0-3.3a.412.412 0 01-.412.412h-1.373a.412.412 0 01-.412-.412V9.2a.412.412 0 01.412-.412h1.373a.412.412 0 01.412.412z", "data-name": "Icon awesome-city" })));
}

function ConsensusSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 28.348 17.911" },
        React__default.createElement("path", { d: "M2.362 11.024a.705.705 0 00.689-.394.837.837 0 000-.787.705.705 0 00-.689-.394.705.705 0 00-.689.394.837.837 0 000 .787.705.705 0 00.689.394zm18.124-.713l-.474-.611q-.351-.455-.51-.665t-.468-.6q-.309-.394-.523-.652t-.5-.578q-.284-.32-.554-.6l-1.535 1.713a3.205 3.205 0 01-2.566 1.132 3.213 3.213 0 01-2.529-1.206 3.008 3.008 0 01.024-3.876l2.179-2.535a2.4 2.4 0 00-.628-.2 3.834 3.834 0 00-.584-.074q-.228-.006-.7.006t-.6.013a2.652 2.652 0 00-1.944.812L6.632 4.331H4.725v6.693l.258-.006q.2-.006.271 0l.24.024a.9.9 0 01.252.056q.086.038.215.1a.9.9 0 01.228.166l3.655 3.593a4.106 4.106 0 002.793 1.365 2.079 2.079 0 001.538-.578 1.7 1.7 0 001.384-.1 1.672 1.672 0 00.892-1.046 1.949 1.949 0 001.562-.542 2.292 2.292 0 00.443-.56 1.066 1.066 0 00.172-.621.786.786 0 00.529.123 1.766 1.766 0 00.947-.258 1.568 1.568 0 00.609-.652 1.693 1.693 0 00-.228-1.784zm1.956.713h1.181v-6.3h-1.144L20.548 2.51a2.63 2.63 0 00-2.08-.935h-2.054a2.251 2.251 0 00-1.8.824l-2.568 2.99a1.387 1.387 0 00-.345.923 1.418 1.418 0 00.332.923 1.729 1.729 0 001.354.64 1.7 1.7 0 001.365-.6l2.375-2.685a.888.888 0 01.658-.265.788.788 0 01.683 1.028q.2.234.689.775t.739.837q.357.443 1.015 1.3T21.7 9.3a3.336 3.336 0 01.739 1.723zm3.544 0a.705.705 0 00.689-.394.837.837 0 000-.787.8.8 0 00-1.378 0 .837.837 0 000 .787.705.705 0 00.689.394zm2.362-7.087v7.875a.8.8 0 01-.787.787h-5.34a3.1 3.1 0 01-1.009 1.31 3.286 3.286 0 01-1.538.634 3.969 3.969 0 01-.991 1 3.451 3.451 0 01-1.262.56 3.429 3.429 0 01-1.286 1 3.288 3.288 0 01-1.581.3A3.749 3.749 0 0113 17.9a4.029 4.029 0 01-1.569-.172A6.527 6.527 0 0110 17.065a7.157 7.157 0 01-1.273-1L5.192 12.6H.787a.757.757 0 01-.554-.234.756.756 0 01-.233-.554V3.544a.757.757 0 01.234-.554.757.757 0 01.554-.234h5.18q.172-.172.578-.591t.584-.591q.179-.172.542-.492a3.678 3.678 0 01.621-.461Q8.551.48 8.92.308a3.039 3.039 0 01.763-.24A4.827 4.827 0 0110.52 0h1.439a3.863 3.863 0 012.227.689A3.863 3.863 0 0116.413 0h2.054a4.456 4.456 0 01.824.074 4.883 4.883 0 01.7.179 2.87 2.87 0 01.635.325q.333.22.547.381a4.789 4.789 0 01.529.486q.315.325.48.517l.5.591.51.6h4.368a.8.8 0 01.787.787z" })));
}

function DefiSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 13.183 17.577" },
        React__default.createElement("path", { d: "M22.183 6H9v2.2l7.141 6.591L9 21.38v2.2h13.183v-3.3h-7.69l5.493-5.493L14.493 9.3h7.69z", "data-name": "Icon material-functions", transform: "translate(-9 -6)" })));
}

function FrontendSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 17.577 17.577" },
        React__default.createElement("path", { fillRule: "evenodd", d: "M0 2.2A2.2 2.2 0 012.2 0h8.789a2.2 2.2 0 012.2 2.2v2.2h2.2a2.2 2.2 0 012.2 2.2v8.78a2.2 2.2 0 01-2.2 2.2H6.591a2.2 2.2 0 01-2.2-2.2v-2.2H2.2a2.2 2.2 0 01-2.2-2.2zm5.493 10.983v2.2a1.1 1.1 0 001.1 1.1h8.787a1.1 1.1 0 001.1-1.1V6.591a1.1 1.1 0 00-1.1-1.1h-2.2v5.493a2.2 2.2 0 01-2.2 2.2z", "data-name": "Path 1468" })));
}

function GameTheorySvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 17.579 17.577" },
        React__default.createElement("path", { d: "M8.789.014h-2.2v2.2h2.2zM0 2.211v2.2h2.2v-2.2zM4.4.014H2.2v2.2h2.2zM6.594 8.8V11h2.2V8.8zM0 6.605V8.8h2.2V6.6zM13.183.014h-2.2v2.2h2.2zm4.4 0h-2.2v2.2h2.2zM4.4 8.8H2.2V11h2.2zm13.181 6.591V13.2h-2.2v2.2zm0-4.4V8.8h-2.2V11zm-4.394 6.594h2.2v-2.2h-2.2zm4.4-10.986v-2.2h-2.2v2.2zM4.4 17.591h2.2v-2.2H4.4zm-4.4 0h2.2v-2.2H0zm8.789 0h2.2v-2.2h-2.2zM0 11v2.2h2.2V11zm10.986-6.592V2.21h-2.2v2.2zm-2.2 4.4h2.2v-2.2h-2.2zm-2.2 4.4v2.2h2.2V13.2zm4.4-2.2h2.2V8.8h-2.2zm0-4.394h2.2V4.41h-2.2zm0 6.592v2.2h2.2V13.2zM2.2 13.2v2.2h2.2v-2.2zm4.4-8.789V2.21H4.4v2.2zm6.585 8.789h2.2V11h-2.2zm-4.4-6.592v-2.2h-2.2v2.2zm4.4-4.394v2.2h2.2v-2.2zM8.789 11v2.2h2.2V11zm-2.2-4.394H4.4V8.8h2.2zm6.591 2.2h2.2v-2.2h-2.2zM4.4 4.408H2.2v2.2h2.2zM4.4 11v2.2h2.2V11z", "data-name": "Icon awesome-chess-board", transform: "translate(0 -.014)" })));
}

function GardeningSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 19.77 17.577" },
        React__default.createElement("path", { d: "M18.751.332a.534.534 0 00-.971-.041 5.886 5.886 0 01-5.145 3H9.888A6.592 6.592 0 003.3 9.885a6.787 6.787 0 00.051.7 16.423 16.423 0 019.834-2.9.549.549 0 010 1.1c-8.629 0-12.289 5.29-13.1 7.277a1.1 1.1 0 002.035.838 9.031 9.031 0 012.468-3.11 6.576 6.576 0 006 2.65c5.389-.391 9.182-5.224 9.182-11.142A12.482 12.482 0 0018.751.332z", "data-name": "Icon awesome-leaf", transform: "translate(-.004 .002)" })));
}

function GovernanceSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 22.538 17.577" },
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox" },
                React__default.createElement("stop", { offset: "0", stopColor: "#939393" }),
                React__default.createElement("stop", { offset: "1" }))),
        React__default.createElement("path", { fill: "url(#linear-gradient)", d: "M.133 14.044a2.911 2.911 0 005.772 0zM15.859 19.9a.451.451 0 01-.45.452H7a.45.45 0 110-.9h8.409a.449.449 0 01.45.448zm-9.259.686h9.21v1.3H6.6zm10.035-6.542a2.909 2.909 0 005.77 0zm5.612-.906l-2.366-3.255h1.263a.561.561 0 000-1.121h-6.692a3.314 3.314 0 00-2.54-2.133V4.872a.56.56 0 00-.561-.562l-.052.006-.052-.006a.559.559 0 00-.56.562v1.756a3.312 3.312 0 00-2.539 2.133H1.453a.561.561 0 000 1.121h1.206L.3 13.138H0v.6h6.039v-.6h-.3L3.38 9.883h5.485a2.376 2.376 0 01.035-.371.53.53 0 00.032-.173 2.4 2.4 0 011.756-1.773v6.174h-.023a6.818 6.818 0 01-2.792 5.486h6.858a6.826 6.826 0 01-2.794-5.486h-.022V7.566a2.4 2.4 0 011.755 1.773.57.57 0 00.034.173 2.5 2.5 0 01.029.371h5.428L16.8 13.139h-.3v.6h6.038v-.6zm-19.466 0H.893l1.886-2.6v2.6zm.483 0v-2.6l1.886 2.6H3.262zm16.017 0h-1.89l1.887-2.6zm.481 0v-2.6l1.889 2.6zM3.58 7.978a.56.56 0 11-.559-.562.56.56 0 01.559.562zm16.5-.03a.56.56 0 11-.273-.5.557.557 0 01.272.501z", "data-name": "Icon map-lawyer", transform: "translate(0 -4.311)" })));
}

function HouseHoldingSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 15.623 15.624" },
        React__default.createElement("path", { d: "M15.288 12.074L11.715 8.5a2.266 2.266 0 00-2.606-.424L5.856 4.824V2.929L1.951 0 0 1.953l2.927 3.905h1.895l3.253 3.253a2.27 2.27 0 00.425 2.606l3.573 3.573a1.134 1.134 0 001.608 0l1.608-1.608a1.14 1.14 0 000-1.608zm-5.169-5.209a3.21 3.21 0 012.285.946L13 8.4a4.319 4.319 0 001.336-.9 4.388 4.388 0 001.156-4.171.365.365 0 00-.613-.168l-2.27 2.27-2.075-.341-.345-2.072 2.27-2.27a.368.368 0 00-.174-.616 4.4 4.4 0 00-4.168 1.156A4.324 4.324 0 006.86 4.449l2.505 2.505a3.324 3.324 0 01.754-.088zm-3.17 2.5l-1.73-1.73-4.65 4.656a1.953 1.953 0 002.761 2.761l3.77-3.771a3.277 3.277 0 01-.153-1.913zm-5 5.035a.732.732 0 11.732-.732.734.734 0 01-.73.732z", "data-name": "Icon awesome-tools", transform: "translate(.004)" })));
}

function LegalSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 28.122 17.577" },
        React__default.createElement("path", { d: "M10.739 15.72l-5.393-3.04L7.22 9.393l5.394 3.039zM21.5 18.526l-9.11-5.133-.937 1.645 9.11 5.133zm1.106.624l-.94 1.644 4.7 2.645.94-1.642zm-1.266 1.644a.323.323 0 01-.44.065.319.319 0 01-.173-.408l1.1-1.925a.321.321 0 01.442-.065.325.325 0 01.172.413zm6.932 1.054a1.16 1.16 0 00-.592-.145l-1.2 2.1a1.112 1.112 0 001.918.052l.308-.545a1.075 1.075 0 00-.432-1.466zM13.135 11.8a.527.527 0 01-.718.2L7.7 9.338a.523.523 0 01-.2-.717.53.53 0 01.721-.2l4.719 2.658a.521.521 0 01.2.715zm.661-1.155a.528.528 0 01-.719.2L8.356 8.182a.519.519 0 01-.2-.713.527.527 0 01.721-.2L13.6 9.927a.522.522 0 01.2.716zm-3.989 7a.531.531 0 01-.72.2l-4.722-2.669a.524.524 0 01-.2-.717.533.533 0 01.72-.2l4.721 2.661a.526.526 0 01.2.717zm.66-1.159a.528.528 0 01-.723.2L5.025 14.02a.526.526 0 11.523-.913l4.719 2.658a.526.526 0 01.201.717zm-7.92 4.729h8.322v.957H2.547zm10.139 2a.675.675 0 00-.665-.564H1.4a.674.674 0 00-.665.564H.72v1.567H12.7V23.21z", "data-name": "Icon map-courthouse", transform: "translate(-.72 -7.2)" })));
}

function ManagementSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: height, height: width, viewBox: "0 0 26.746 23.402" },
        React__default.createElement("path", { id: "Icon_awesome-briefcase", "data-name": "Icon awesome-briefcase", d: "M16.716,18.13a.836.836,0,0,1-.836.836H10.865a.836.836,0,0,1-.836-.836V15.623H0v7.522a2.571,2.571,0,0,0,2.507,2.507H24.238a2.571,2.571,0,0,0,2.507-2.507V15.623H16.716ZM24.238,7.265H20.059V4.757A2.571,2.571,0,0,0,17.552,2.25H9.194A2.571,2.571,0,0,0,6.686,4.757V7.265H2.507A2.571,2.571,0,0,0,0,9.772v4.179H26.746V9.772A2.571,2.571,0,0,0,24.238,7.265Zm-7.522,0H10.03V5.593h6.686Z", transform: "translate(0 -2.25)" })));
}

function MobileSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 13.671 21.873" },
        React__default.createElement("path", { d: "M11.62 0H2.051A2.051 2.051 0 000 2.051v17.771a2.051 2.051 0 002.051 2.051h9.569a2.051 2.051 0 002.051-2.051V2.051A2.051 2.051 0 0011.62 0zM6.835 20.506A1.367 1.367 0 118.2 19.139a1.366 1.366 0 01-1.365 1.367zm4.785-4.614a.514.514 0 01-.513.513H2.563a.514.514 0 01-.513-.513V2.563a.514.514 0 01.513-.513h8.544a.514.514 0 01.513.513z", "data-name": "Icon awesome-mobile-alt" })));
}

function WebDevSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 22.467 19.971" },
        React__default.createElement("path", { d: "M20.595 0H1.872A1.873 1.873 0 000 1.872v12.482a1.873 1.873 0 001.872 1.872h7.489L8.737 18.1H5.929a.936.936 0 100 1.872h10.609a.936.936 0 000-1.872H13.73l-.624-1.872h7.489a1.873 1.873 0 001.872-1.872V1.872A1.873 1.873 0 0020.595 0zm-.624 13.73H2.5V2.5h17.471z", "data-name": "Icon awesome-desktop" })));
}

function NetworkSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 23.403 23.402" },
        React__default.createElement("path", { d: "M.028 12.294A2.941 2.941 0 010 11.731v-.053a18.92 18.92 0 009.238-2.922 2.413 2.413 0 002.169-.056 11.329 11.329 0 004.82 3.109 2.311 2.311 0 00.937 1.153 10.749 10.749 0 01-2.169 3.4 2.556 2.556 0 00-3.8 1.153A14.432 14.432 0 01.027 12.294zm11.138 6.914a13.273 13.273 0 01-6.854 1.608 12.36 12.36 0 01-3.8-5.6 16.718 16.718 0 0010.657 3.993zm4.846-.322a15.237 15.237 0 006.64-3.055A11.847 11.847 0 016.855 22.4a15.313 15.313 0 005.355-1.849 2.586 2.586 0 003.8-1.662zm4.605-6.539c.959-.071 1.895-.142 2.785-.294 0 .239-.027.475-.027.7a12.881 12.881 0 01-6.694 4.288 13.14 13.14 0 002.119-3.675 2.644 2.644 0 001.821-1.019zm.428-1.715a2.557 2.557 0 00-1.125-1.849A27.438 27.438 0 0020 3.476a12.143 12.143 0 013.32 6.861 15.992 15.992 0 01-2.276.294zM8.007 7.55A17.42 17.42 0 01.134 9.989 11.83 11.83 0 017.632.743a12.009 12.009 0 00.937 3.886 2.54 2.54 0 00-.562 2.921zm4.605-1.983A15.174 15.174 0 0015.45.635a11.527 11.527 0 012.7 1.314 28.421 28.421 0 01.107 6.458 2.611 2.611 0 00-2.057 1.609A10.187 10.187 0 0112.558 7.5a2.7 2.7 0 00.053-1.929zm-2.49-1.581a9.906 9.906 0 01-.83-3.725 11.093 11.093 0 014.525-.054 14.81 14.81 0 01-2.3 4.073c-.319-.136-1.093-.439-1.392-.294z" })));
}

function PaintingSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 21.667 17.152" },
        React__default.createElement("path", { d: "M9.843 4.32C4.141 4.32.72 8.894.72 11.181s1.14 4 3.421 4 3.421.571 3.421 2.287a3.9 3.9 0 003.991 4c7.413 0 10.833-4 10.833-8 0-6.861-5.702-9.148-12.543-9.148zM8.417 6.607a1.429 1.429 0 11-1.425 1.429 1.427 1.427 0 011.425-1.429zm4.561 0a1.429 1.429 0 11-1.425 1.429 1.427 1.427 0 011.425-1.429zm4.562 2.287a1.429 1.429 0 11-1.425 1.43 1.427 1.427 0 011.425-1.43zM4.426 10.038A1.429 1.429 0 113 11.466a1.426 1.426 0 011.426-1.428zm7.127 5.717a1.715 1.715 0 11-1.71 1.716 1.712 1.712 0 011.71-1.716z", "data-name": "Icon map-art-gallery", transform: "translate(-.72 -4.32)" })));
}

function PhotographySvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 23.341 17.577" },
        React__default.createElement("path", { d: "M7.6 4.445L6.865 7.4H0v14.622h23.341V7.4H16.8l-.735-2.953zm4.13 2.947a6.564 6.564 0 11-6.564 6.564 6.563 6.563 0 016.564-6.564zm7.7 1.429h3.309v1.921h-3.312V8.821zm-7.7.51a4.625 4.625 0 104.625 4.625 4.625 4.625 0 00-4.625-4.625z", transform: "translate(0 -4.445)" })));
}

function SmartContractsSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 19.827 19.827" },
        React__default.createElement("g", { transform: "translate(1.125 1.125)" },
            React__default.createElement("path", { fill: "none", stroke: "#000", strokeLinejoin: "round", strokeWidth: "2.25", d: "M13.3 15.542V1.014A1.009 1.009 0 0012.3 0H.998a1.009 1.009 0 00-1 1.014v14.873a1.681 1.681 0 001.663 1.69h13.634", "data-name": "Path 1479" }),
            React__default.createElement("path", { fill: "none", stroke: "#000", strokeLinejoin: "round", strokeWidth: "2.25", d: "M15.295 17.576h0a2.282 2.282 0 01-2.282-2.282V1.605h3.425a1.141 1.141 0 011.141 1.141v12.549a2.282 2.282 0 01-2.282 2.282z", "data-name": "Path 1480" }),
            React__default.createElement("path", { fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25", d: "M7.928 3.803h3.042", "data-name": "Path 1481" }),
            React__default.createElement("path", { fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25", d: "M7.928 6.084h3.042", "data-name": "Path 1482" }),
            React__default.createElement("path", { fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25", d: "M2.414 8.788h9.125", "data-name": "Path 1483" }),
            React__default.createElement("path", { fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25", d: "M2.414 11.492h9.125", "data-name": "Path 1484" }),
            React__default.createElement("path", { fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25", d: "M2.414 13.774h9.125", "data-name": "Path 1485" }),
            React__default.createElement("path", { d: "M10.553 12.438H7.511a.761.761 0 01-.761-.761V8.636a.761.761 0 01.761-.761h3.042a.761.761 0 01.761.761v3.042a.761.761 0 01-.761.76z", "data-name": "Path 1486", transform: "translate(-4.468 -5.272)" }))));
}

function TeachingSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 21.971 17.577" },
        React__default.createElement("path", { d: "M7.141 12.084a.785.785 0 00-.242.037 4.529 4.529 0 01-1.405.237 4.532 4.532 0 01-1.406-.237.783.783 0 00-.242-.037A3.845 3.845 0 000 15.95a1.644 1.644 0 001.648 1.627h7.69a1.644 1.644 0 001.648-1.627 3.845 3.845 0 00-3.845-3.866zm-1.648-1.1a3.3 3.3 0 10-3.3-3.3 3.3 3.3 0 003.3 3.302zM20.323 0H7.141a1.678 1.678 0 00-1.648 1.7v1.6a4.344 4.344 0 012.2.611V2.2h12.081v9.887h-2.2v-2.2h-4.391v2.2h-2.618a4.375 4.375 0 011.363 2.2h8.4a1.678 1.678 0 001.648-1.7V1.7A1.678 1.678 0 0020.323 0z", "data-name": "Icon awesome-chalkboard-teacher" })));
}

function TokenomicsSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 17.577 17.577" },
        React__default.createElement("path", { d: "M14.789 11.112c4.368 0 8.789-1.393 8.789-4.056S19.156 3 14.789 3 6 4.393 6 7.056s4.421 4.056 8.789 4.056z", "data-name": "Path 1469", transform: "translate(-6 -3)" }),
        React__default.createElement("path", { d: "M6 20.028c0 2.663 4.421 4.056 8.789 4.056s8.789-1.393 8.789-4.056V18c0 2.663-4.421 4.056-8.789 4.056S6 20.663 6 18z", "data-name": "Path 1471", transform: "translate(-6 -11.104)" }),
        React__default.createElement("path", { d: "M6 26.028c0 2.663 4.421 4.056 8.789 4.056s8.789-1.393 8.789-4.056V24c0 2.663-4.421 4.056-8.789 4.056S6 26.663 6 24z", "data-name": "Path 1472", transform: "translate(-6 -12.507)" })));
}

function TrainSportSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 25.084 19.755" },
        React__default.createElement("path", { d: "M29.171 12.619l-3.923-5.6 1.868-1.309 3.922 5.6z", "data-name": "Path 1474", transform: "translate(-6.514 -5.71)" }),
        React__default.createElement("path", { d: "M23.622 16.409l-2.107-2.985-10.037 6.963 2.107 2.982-2.007 1.393-5.62-7.955 2.007-1.392 2.107 2.985 10.036-6.962L18 8.453l2.007-1.392 5.621 7.953-2.007 1.393z", "data-name": "Path 1475", transform: "translate(-3.252 -6.034)" }),
        React__default.createElement("path", { d: "M30.735 9.622L32.6 8.315l-1.305-1.867-1.867 1.307 1.307 1.867z", "data-name": "Path 1476", transform: "translate(-7.517 -5.887)" }),
        React__default.createElement("path", { d: "M8.922 26.8L5 21.2l-1.868 1.3 3.922 5.6z", "data-name": "Path 1477", transform: "translate(-2.573 -8.35)" }),
        React__default.createElement("path", { d: "M5.57 27.242L3.7 28.549l-1.3-1.867 1.867-1.307z", "data-name": "Path 1478", transform: "translate(-2.396 -9.353)" })));
}

function VideoSvg(_a) {
    var _b = _a === void 0 ? {
        height: "100%",
        width: "100%",
        className: "",
    } : _a, height = _b.height, width = _b.width, className = _b.className;
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, width: width, height: height, viewBox: "0 0 19.53 12.206" },
        React__default.createElement("path", { fillRule: "evenodd", d: "M3.255 6.75v1.628h6.51v.814H2.441A2.441 2.441 0 000 11.633v4.883a2.441 2.441 0 002.441 2.441h9.765a2.441 2.441 0 002.433-2.239l4.891.612v-6.51l-4.891.611a2.441 2.441 0 00-2.433-2.239h-.814V7.564a.814.814 0 00-.814-.814zm11.393 6.32v2.008l3.255.407v-2.822zm-1.628-1.437a.814.814 0 00-.814-.814H2.441a.814.814 0 00-.814.814v4.883a.814.814 0 00.814.814h9.765a.814.814 0 00.814-.814z", "data-name": "Path 1473", transform: "translate(0 -6.75)" })));
}

export { ArchitectureSvg, BackendSvg, BlockchainSvg, CenterWhiteBarSvg, CommunitySvg, ConsensusSvg, CreateUnselSvg, DefiSvg, DitoCreditsSuccessSvg, DitoCreditsSvg, DitoLogoCircleSvg, DitoLogoFullSvg, DitoLogoSvg, FooterMembersSvg, FooterShareSvg, FrontendSvg, GameTheorySvg$1 as GameTheorySvg, GameTheorySvg as GameTheorySvg2, GardeningSvg, GovernanceSvg, HouseHoldingSvg, JoinSelSvg, JoinUnselSvg, LayerBlurSvg, LegalSvg, LogoffSvg, MainBackgroundSvg, ManagementSvg, MilestonesCompletedSvg, MilestonesSvg, MobileSvg, NetworkDesignSvg, NetworkSvg, NotificationsSvg, OpenGigsSelSvg, OpenGigsSvg, PaintingSvg, ParticipationRateSvg, PhotographySvg, ProjectsCreatedSvg, ProjectsSelSvg, ProjectsSvg, QRCodeSvg, ScoreReachedSvg, SettingsSvg, Shape1Svg, Shape2Svg, Shape3Svg, Shape4Svg, Shape5Svg, Shape6Svg, Shape7Svg, SkillWalletNavSvg, SmartContractsSvg, SwAnimatedRoute$1 as SwAnimated, SwButton, SwDivider, SwLayout, SwLogoSvg, SwQuote, SwScrollbar, SwSidebar, SwUploadFile, TeachingSvg, TokenomicsSvg$1 as TokenomicsSvg, TokenomicsSvg as TokenomicsSvg2, TownhallNavSvg, TrainSportSvg, TreasurySelSvg, TreasurySvg, VideoSvg, WebDevSvg, YourContributionsSvg };
//# sourceMappingURL=index.esm.js.map
