import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./animated-route.scss";

const SwAnimatedRoute = ({ to, sx, component: Component, ...rest }) => {
  return (
    <Route key={to} path={to}>
      {({ match }) => {
        return (
          <CSSTransition
            key={to}
            in={match != null}
            timeout={{ enter: 800, exit: 400 }}
            classNames="sw-animated-slide"
            unmountOnExit
          >
            <div
              className={`sw-animated-page`}
              style={{ height: "100%", ...(sx || {}) }}
            >
              <Component {...rest} />
            </div>
          </CSSTransition>
        );
      }}
    </Route>
  );
};

const SwAnimatedComponent = ({
  inMatch,
  sx,
  component: Component,
  ...rest
}) => {
  return (
    <CSSTransition
      in={inMatch}
      timeout={300}
      classNames="sw-animated-slide"
      unmountOnExit
    >
      <div
        className="sw-animated-page"
        style={{ height: "100%", ...(sx || {}) }}
      >
        <Component {...rest} />
      </div>
    </CSSTransition>
  );
};

export default {
  SwAnimatedRoute,
  SwAnimatedComponent,
};
