import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SwScrollbar from "../SwScrollbar/SwScrollbar";
import { styled } from "@mui/material";

export interface SwLayoutProps {
  backgroundUrl?: any;
  hideTop?: boolean;
  scrollbarStyles: any;
  children?: JSX.Element;
  drawer?: JSX.Element;
  className?: string;
  top?: JSX.Element;
  disableGutters?: boolean;
}

const CustomizedLayout = styled(Box)(
  ({ theme }) => `
  .MuiContainer-root:not(.sw-layout-top) {
    position: relative;
    height: 100%;
  }

  .sw-layout-top {
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    position: relative;
    height: 60px;
    margin-bottom: 20px;
  }
`
);

const SwLayout = ({
  backgroundUrl = null,
  hideTop = false,
  children = null,
  drawer = null,
  top = null,
  scrollbarStyles = {},
  disableGutters = false,
  className = "",
}: SwLayoutProps) => {
  return (
    <>
      {backgroundUrl && (
        <div
          className={`sw-background ${className}`}
          style={{
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
          }}
        ></div>
      )}
      <CustomizedLayout
        sx={{
          display: "flex",
        }}
        className={`sw-main-box ${className}`}
      >
        {drawer}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Container
            className="sw-layout-top"
            maxWidth="xl"
            sx={{ display: hideTop ? "none" : "flex" }}
          >
            {top}
          </Container>

          <SwScrollbar
            sx={{
              height: "100%",
              ...(scrollbarStyles || {}),
            }}
          >
            <Container maxWidth="xl" disableGutters={disableGutters}>
              {children}
            </Container>
          </SwScrollbar>
        </Box>
      </CustomizedLayout>
    </>
  );
};

export default SwLayout;
