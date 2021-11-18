import {
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import "./sw-progress-bar.scss";

export interface ProgressBarProps {
  className?: string;
  percentage?: any;
  sx?: any;
  variant?: any;
  children: any;
}

const NoBorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "20px",
  borderRadius: 0,
  border: `1px solid ${theme.palette.background.paper}`,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.background.paper,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
  },
}));

const SwProgressBar = ({
  percentage,
  className = "",
  variant = "determinate",
  ...rest
}: ProgressBarProps) => {
  return (
    <div className="sw-progress-bar">
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
        component="span"
        variant="body2"
      >
        {percentage}%
      </Typography>
    </div>
  );
};

export default SwProgressBar;
