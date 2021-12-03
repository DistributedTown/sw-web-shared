import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Popover from "@mui/material/Popover";
import "./sw-quote.scss";

export interface SwQuoteProps {
  children: JSX.Element;
  mobile?: boolean;
  mobileStartText?: JSX.Element;
  className?: string;
  showBorder?: boolean;
}

const SwQuote = ({
  children,
  mobileStartText,
  mobile = false,
  className = "",
  showBorder = true
}: SwQuoteProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box className={`sw-box-quote ${className}`}>
      {mobile ? (
        <>
          <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            color="info"
            component="div"
            variant="subtitle1"
          >
            {mobileStartText}
          </Typography>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            onClose={handlePopoverClose}
          // disableRestoreFocus
          >
            <Quote showBorder={showBorder} children={children as JSX.Element} />
          </Popover>
        </>
      ) : (
        <Quote showBorder={showBorder} children={children as JSX.Element} />
      )}
    </Box>
  );
};

const Quote = ({ children, showBorder }: { children: JSX.Element, showBorder: boolean }) => {
  const theme = useTheme();
  return (
    <div className={`quote ${showBorder ? 'show-border' : ''}`} style={{ boxShadow: showBorder ? theme.shadows[1] : 'none' }}>
      <Typography color="info" component="div" variant="h2">
        {children}
      </Typography>
    </div>
  );
};

export default SwQuote;
