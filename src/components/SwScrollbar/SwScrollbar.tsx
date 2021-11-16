import * as React from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import "./sw-scrollbar.scss";

export interface SwScrollbarProps {
  className?: string;
  sx?: any;
  children: any;
}

const SwScrollbar = ({
  className = "sw-scrollbar",
  sx,
  ...rest
}: SwScrollbarProps) => {
  return (
    <SimpleBarReact
      forceVisible="y"
      className={className}
      style={{ 
        height: '100%', 
        width: '100%', 
        ...(sx || {}) 
      }}
      {...rest}
    />
  );
};

export default SwScrollbar;
