import { Badge, Box, MobileStepper, Tooltip, Typography } from "@mui/material";
import React, { Fragment } from "react";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
import "./sw-stepper.scss";

const SwStepper = ({
  stepperText,
  title,
  steps,
  description,
  activeStep,
  descriptionTooltip = null,
  backButton = null,
  nextbutton = null,
}) => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {stepperText && (
        <Typography
          className="stepper-top"
          sx={{ color: "text.primary" }}
          component="div"
          variant="h1"
          align="center"
        >
          {stepperText}
        </Typography>
      )}
      <MobileStepper
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        sx={{
          padding: 0,
          height: "40px",
          display: activeStep !== -1 ? "flex" : "none",
          backgroundColor: "transparent",
          width: "100%",
        }}
        nextButton={nextbutton}
        backButton={backButton}
      />
      <Box sx={{ maxWidth: "450px", width: "100%", margin: "0 auto" }}>
        <div
          key="stepper-dots"
          className="stepper-dots"
          style={{ display: activeStep !== -1 ? "flex" : "none" }}
        >
          {steps.map((_, index) => {
            return (
              <Fragment key={index}>
                <div
                  className={`stepper-dot ${
                    index === activeStep ? "active" : ""
                  }`}
                >
                  {index < activeStep && <CheckIcon color="info" />}
                </div>
                {steps.length - 1 !== index && <div className="stepper-line" />}
              </Fragment>
            );
          })}
        </div>
        <Typography
          sx={{ color: "text.primary", textAlign: "center", pb: 1 }}
          component="div"
          variant="h2"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "text.primary",
            textAlign: "center",
            pb: 2,
            m: "0 -20px",
          }}
          component="div"
          variant="subtitle1"
        >
          <Badge
            sx={{
              padding: "0 8px",
            }}
            badgeContent={
              descriptionTooltip && (
                <Tooltip title={descriptionTooltip}>
                  <InfoIcon
                    sx={{
                      fontSize: "1rem",
                      position: "absolute",
                    }}
                  />
                </Tooltip>
              )
            }
          >
            {description}
          </Badge>
        </Typography>
      </Box>
    </Box>
  );
};

export default SwStepper;
