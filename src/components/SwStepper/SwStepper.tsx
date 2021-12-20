import {
  Badge,
  Box,
  MobileStepper,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";

const CustomizedStepperWrapper = styled(Box)(
  ({ theme }) => `
.stepper-dots {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 20px 0;

  .stepper-dot {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    border: 3px solid ${theme.palette.background.paper};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      background-color: ${theme.palette.background.paper};
    }
  }

  .stepper-line {
    border-top: 4px solid ${theme.palette.background.paper};
    flex: 1;
  }
}

.stepper-top {
  position: absolute;
  margin: 0 auto;
  width: 100%;
  top: 0px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}

.MuiMobileStepper-dots {
  display: none;
}
`
);

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
    <CustomizedStepperWrapper sx={{ width: "100%", position: "relative" }}>
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
    </CustomizedStepperWrapper>
  );
};

export default SwStepper;
