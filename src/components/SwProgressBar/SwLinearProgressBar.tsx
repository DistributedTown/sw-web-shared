import {
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

export interface ProgressBarProps {
  className?: string;
  percentage?: any;
  sx?: any;
  variant?: any;
  children: any;
}

const ProgressBarWrapper = styled("div")(
  ({ theme }) => `
position: relative;

.MuiLinearProgress-root {
  &:after {
    transition: width .4s linear;
  }
}

.sw-progress-bar-label {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: color .4s linear;
  line-height: 22px;
}

`
);

const NoBorderLinearProgress = styled(LinearProgress)(({ theme, value }) => {
  const borderStyle = `1px solid ${theme.palette.background.paper}`;

  return {
    height: "21px",
    borderRadius: 0,
    borderLeft: borderStyle,
    borderTop: borderStyle,
    borderRight: borderStyle,
    // borderBottom: borderStyle,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.background.paper,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: theme.palette.primary.main,
    },
    "&:after": {
      content: '""',
      width: `${value}%`,
      height: "1px",
      bottom: "0",
      background: theme.palette.secondary.main,
      position: "absolute",
    },
  };
});

const SwProgressBar = ({
  percentage,
  className = "",
  variant = "determinate",
  ...rest
}: ProgressBarProps) => {
  return (
    <ProgressBarWrapper className="sw-progress-bar">
      <NoBorderLinearProgress {...rest} variant={variant} value={percentage} />
      <Typography
        className="sw-progress-bar-label"
        sx={{
          color:
            +percentage < 45
              ? "primary.main"
              : +percentage >= 45 && +percentage <= 55
              ? "text.secondary"
              : "background.paper",
          textAlign: "center",
        }}
        lineHeight="21px"
        component="span"
        variant="body2"
      >
        {percentage}%
      </Typography>
    </ProgressBarWrapper>
  );
};

export default SwProgressBar;
