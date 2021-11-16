import {
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import "./sw-progress-bar.scss";

export interface NoBorderLinearProgressProps {
  className?: string;
  percentage: any;
  sx?: any;
  variant?: any;
  value?: any;
}

const NoBorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "15px",
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
  variant = "determined",
  ...rest
}: NoBorderLinearProgressProps) => {
  return (
    <div className="sw-progress-bar">
      <NoBorderLinearProgress variant={variant} value={percentage} />
      <Typography
        className="sw-progress-bar-label"
        sx={{ color: "secondary.main", textAlign: "center" }}
        component="span"
        variant="body2"
      >
        {percentage}%
      </Typography>
    </div>
  );
};

export default SwProgressBar;
