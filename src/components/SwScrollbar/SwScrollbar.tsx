import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: `white`,
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const renderView = ({ style, ...props }) => {
  const viewStyle = {
    paddingLeft: 12,
    paddingRight: 12,
  };
  return <div className="box" style={{ ...style, ...viewStyle }} {...props} />;
};

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
    <Scrollbars
      autoHeightMin="100%"
      autoHeightMax="100%"
      className={className}
      renderView={renderView}
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      style={{  height: '100%', ...(sx || {}) }}
      {...rest}
    />
  );
};

export default SwScrollbar;
