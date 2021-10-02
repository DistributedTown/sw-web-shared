import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./sw-layout.scss";

export interface SwLayoutProps {
  backgroundUrl?: any;
  contentBackgroundColor?: string;
  children?: JSX.Element;
  drawer?: JSX.Element;
  className?: string;
}

const SwLayout = ({
  backgroundUrl = null,
  contentBackgroundColor = null,
  children = null,
  drawer = null,
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
      <Box
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
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default SwLayout;
