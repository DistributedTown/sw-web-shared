import * as React from "react";
import { Box, Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import "./sw-quote.scss";

export interface SwQuoteProps {
  children: JSX.Element;
  mobile?: boolean;
  mobileStartText?: JSX.Element;
}

const SwQuote = ({
  children,
  mobileStartText,
  mobile = false,
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
    <Box className="sw-box-quote">
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
            <Quote children={children as JSX.Element} />
          </Popover>
        </>
      ) : (
        <Quote children={children as JSX.Element} />
      )}
    </Box>
  );
};

const Quote = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="quote">
      <Typography color="info" component="div" variant="subtitle1">
        {children}
      </Typography>
    </div>
  );
};

export default SwQuote;
