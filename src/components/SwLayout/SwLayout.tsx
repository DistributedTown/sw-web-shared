import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./sw-layout.scss";
import styled from "styled-components";
import SwScrollbar from "../SwScrollbar/SwScrollbar";

export interface SwLayoutProps {
  backgroundUrl?: any;
  contentBackgroundColor?: string;
  children?: JSX.Element;
  drawer?: JSX.Element;
  className?: string;
  top?: JSX.Element;
}

const CustomizedLayout = styled(Box)(
  ({ theme }) => `
  .MuiContainer-root:not(.sw-layout-top) {
    position: relative;
    height: calc(100% - 64px);
  }
`
);

const SwLayout = ({
  backgroundUrl = null,
  contentBackgroundColor = null,
  children = null,
  drawer = null,
  top = null,
  className = "",
}: SwLayoutProps) => {
  return (
    <>
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
          <Container className="sw-layout-top" maxWidth="xl">
            {top}
          </Container>
          <SwScrollbar
            sx={{
              height: "calc(100% - 50px)",
            }}
          >
            <Container
              maxWidth="xl"
              sx={{
                mt: 4,
                mb: 4,
              }}
            >
              {children}
            </Container>
          </SwScrollbar>
        </Box>
      </CustomizedLayout>
    </>
  );
};

export default SwLayout;
