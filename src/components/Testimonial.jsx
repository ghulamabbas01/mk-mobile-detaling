import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Radio from "@mui/material/Radio";

let GoldColor = "#ffb800";
let WhiteColor = "#fff";

const StackStyle = styled(Slider)(({ theme }) => ({
  ".BorderSec": {
    backgroundImage: "linear-gradient(#ffcd00, #e24d12)",

    overFlow: "hidden",
    border: "3px solid #fff",
    borderTopLeftRadius: "100px",
    borderTopRightRadius: "100px",
    height: "300px",
    textAlign: "center",
    padding: "32px 0px",

    img: {
      margin: "0 auto",
      borderRadius: "50%",
      border: "3px solid #fff",
    },
  },

  ".slick-prev": {
    fill: WhiteColor,
    backgroundColor: GoldColor,
    border: "2px solid #fff",
    height: 40,
    width: 40,
    [theme.breakpoints.down("md")]: {
      height: 24,
      width: 24,
    },
    borderRadius: "50%",
    zIndex: "2",
    padding: "4px",
    left: "-2%",
    ":hover": {
      backgroundColor: "#e2a812",
      fill: WhiteColor,
      border: "2px solid #fff",
      transition: "all 0.3s ease-in-out",
    },
  },
  ".slick-next": {
    fill: WhiteColor,
    backgroundColor: GoldColor,
    border: "2px solid #fff",
    height: 40,
    width: 40,
    [theme.breakpoints.down("md")]: {
      height: 24,
      width: 24,
    },
    borderRadius: "50%",
    zIndex: "2",
    padding: "4px",
    right: "-2%",
    ":hover": {
      backgroundColor: "#e2a812",
      fill: WhiteColor,
      border: "2px solid #fff",
      transition: "all 0.3s ease-in-out",
    },
  },
}));
export default function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <KeyboardArrowRightIcon />,
    prevArrow: <KeyboardArrowLeftIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container sx={{ paddingBottom: { xs: "24px", md: "80px" } }}>
        <Stack
          marginTop={{ xs: 3, md: 7 }}
          sx={{
            cursor: "pointer",
            ":hover": {
              "& .hover-sec": {
                width: "320px",
                transition: " width 2s",
              },
            },
          }}
        >
          <Typography
            variant="h3"
            color={GoldColor}
            textAlign={"center"}
            fontWeight={500}
            letterSpacing={3}
            mt={4}
          >
            Testimonials
          </Typography>
          <Box
            className="hover-sec"
            sx={{
              width: "200px",
              height: "3px",
              bgcolor: GoldColor,
              margin: "auto",
              transition: " width 2s",
              marginBottom: { xs: "24px", md: "40px" },
            }}
          ></Box>
        </Stack>
        <StackStyle {...settings}>
          <Box className="BorderSec">
            <img
              src="../testimonials/testimonials_man.png"
              width={"80px"}
              height={80}
            />
            <Typography
              variant="h1"
              color={"#fff"}
              fontSize={28}
              fontWeight={600}
              letterSpacing={2}
              mt={2}
              mb={2}
            >
              ALEX Z.
            </Typography>
            <Typography
              variant="body1"
              color={"#000"}
              fontSize={14}
              fontWeight={600}
              textTransform={"capitalize"}
              textAlign={"justify"}
              fontFamily={"Farsan, cursive"}
              overflow={"hidden"}
              height={"85px"}
              px={3}
            >
              I have a unique perspective…I’ve worked with Manny handling very
              complex appeals and post-conviction matters. I’ve worked with
              lawyers throughout the U.S., and I have to say that Manny is one
              of the brightest and hard-working. Intellectually, I’d put him
              right at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny and hard-working. Intellectually, I’d put him right
              at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny and hard-working. Intellectually, I’d put him right
              at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny
            </Typography>
          </Box>
          <Box className="BorderSec">
            <img
              src="../testimonials/testimonials_man-1.png"
              width={"80px"}
              height={80}
            />
            <Typography
              variant="h1"
              color={"#fff"}
              fontSize={28}
              fontWeight={600}
              letterSpacing={2}
              mt={2}
              mb={2}
            >
              ALEX Z.
            </Typography>
            <Typography
              variant="body1"
              color={"#000"}
              fontSize={14}
              fontWeight={600}
              textTransform={"capitalize"}
              textAlign={"justify"}
              fontFamily={"Farsan, cursive"}
              overflow={"hidden"}
              height={"85px"}
              px={3}
            >
              I have a unique perspective…I’ve worked with Manny handling very
              complex appeals and post-conviction matters. I’ve worked with
              lawyers throughout the U.S., and I have to say that Manny is one
              of the brightest and hard-working. Intellectually, I’d put him
              right at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny and hard-working. Intellectually, I’d put him right
              at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny and hard-working. Intellectually, I’d put him right
              at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny
            </Typography>
          </Box>
          <Box className="BorderSec">
            <img
              src="../testimonials/testimonials_man.png"
              width={"80px"}
              height={80}
            />
            <Typography
              variant="h1"
              color={"#fff"}
              fontSize={28}
              fontWeight={600}
              letterSpacing={2}
              mt={2}
              mb={2}
            >
              ALEX Z.
            </Typography>
            <Typography
              variant="body1"
              color={"#000"}
              fontSize={14}
              fontWeight={600}
              textTransform={"capitalize"}
              textAlign={"justify"}
              fontFamily={"Farsan, cursive"}
              overflow={"hidden"}
              height={"85px"}
              px={3}
            >
              I have a unique perspective…I’ve worked with Manny handling very
              complex appeals and post-conviction matters. I’ve worked with
              lawyers throughout the U.S., and I have to say that Manny is one
              of the brightest and hard-working. Intellectually, I’d put him
              right at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny and hard-working. Intellectually, I’d put him right
              at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny and hard-working. Intellectually, I’d put him right
              at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny
            </Typography>
          </Box>
          <Box className="BorderSec">
            <img
              src="../testimonials/testimonials_man.png"
              width={"80px"}
              height={80}
            />
            <Typography
              variant="h1"
              color={"#fff"}
              fontSize={28}
              fontWeight={600}
              letterSpacing={2}
              mt={2}
              mb={2}
            >
              ALEX Z.
            </Typography>
            <Typography
              variant="body1"
              color={"#000"}
              fontSize={14}
              fontWeight={600}
              textTransform={"capitalize"}
              textAlign={"justify"}
              fontFamily={"Farsan, cursive"}
              overflow={"hidden"}
              height={"85px"}
              px={3}
            >
              I have a unique perspective…I’ve worked with Manny handling very
              complex appeals and post-conviction matters. I’ve worked with
              lawyers throughout the U.S., and I have to say that Manny is one
              of the brightest and hard-working. Intellectually, I’d put him
              right at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny and hard-working. Intellectually, I’d put him right
              at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny and hard-working. Intellectually, I’d put him right
              at the top. If I didn’t believe this, I simply wouldn’t have
              written a review. If you’re in deep trouble, do yourself a favor
              and hire Manny
            </Typography>
          </Box>
        </StackStyle>
      </Container>
    </>
  );
}
