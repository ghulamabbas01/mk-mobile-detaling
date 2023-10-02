import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const TextStyle = styled(Box)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  textAlign: "center",
  alignItems: "center",
  color: "#fff",
  width: "100%",
  padding: "8px",
});

const images = [
  {
    imgPath: "./images/car3.jpg",
    heading: "Finest Mobile Auto Detailing At Your Doorstep",
    subHeading: "Mobile detailing services serving Bay Area.",
  },
  {
    imgPath: "./images/car1.jpg",
    heading: "Finest Mobile Auto Detailing At Your Doorstep.",
    subHeading: "Mobile detailing services serving Bay Area.",
  },
  {
    imgPath: "./images/car2.jpg",
    heading: "Finest Mobile Auto Detailing At Your Doorstep",
    subHeading: "Mobile detailing services serving Bay Area.",
  },
  {
    imgPath: "./images/car4.jpg",
    heading: "Finest Mobile Auto Detailing At Your Doorstep",
    subHeading: "Mobile detailing services serving Bay Area.",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: { xs: 7, md: 8 } }} id="home">
      <AutoPlaySwipeableViews
        AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box>
                <Box
                  component="img"
                  sx={{
                    height: { xs: 350, md: 580 },

                    display: "block",
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",
                    opacity: "0.4",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />

                <TextStyle>
                  <Typography
                    variant="h2"
                    fontFamily="Poppins"
                    fontSize={{ xs: "24px", md: "48px" }}
                    fontWeight={600}
                    letterSpacing={1}
                    mb={2}
                  >
                    {step.heading}
                  </Typography>
                  <Stack spacing={2}>
                    <Typography
                      variant="body1"
                      fontSize={{ xs: "11px", md: "18px" }}
                      letterSpacing={2}
                      fontWeight={400}
                      textTransform="uppercase"
                    >
                      {step.subHeading}
                    </Typography>
                    <Box>
                      <Button
                        href="#Pricing"
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          textTransform: "uppercase",
                          px: { xs: 2, md: 12 },
                          fontSize: "0.9375rem",
                          fontWeight: 700,
                          bgcolor: "rgb(255, 38, 120)",
                          fontFamily: "Poppins",
                          mr: 2,
                          height: "48px",
                          transition: "all 0.2s ease-in",
                          "&:hover": {
                            bgcolor: "rgb(224, 27, 102)",
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        Book a Service
                      </Button>
                    </Box>
                  </Stack>
                </TextStyle>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
