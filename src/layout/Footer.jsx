import { Typography } from "@mui/material";
import React from "react";
// import { Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import AddLocationSharpIcon from "@mui/icons-material/AddLocationSharp";

let GoldColor = "#ffb800";
let WhiteColor = "#fff";

const FotterStyle = styled(Stack)({
  color: WhiteColor,

  "&.FooterMain": {
    padding: "40px 0",
  },
  ".ContectUs": {
    color: "#fff",
  },
  span: {
    display: "flex",
    color: "#919EAB",
  },
  ".Time": {
    display: "flex",
    textAlign: "center",
    span: {
      fontWeight: "500",
      marginBottom: "12px",
      width: "50%",
    },
  },
});

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#2C354E",
        // backgroundImage:
        //   "linear-gradient(rgba(255, 48, 48, 0.16) 0%,rgba(0, 0, 0, 0.46) 100%)",
      }}
    >
      <Container>
        <FotterStyle className="FooterMain">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
                <Box className="ContectUs">
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    fontSize={"24px"}
                    fontFamily={"Poppins"}
                  >
                    MK MOBILE DETAILING
                  </Typography>
                  <Box
                    className="hover-sec"
                    sx={{
                      width: "130px",
                      height: "3px",
                      bgcolor: GoldColor,
                      marginTop: "8px",
                      transition: " width 2s",
                    }}
                  ></Box>
                </Box>
                <Box mt={4}>
                  <Link
                    display={"inline-block"}
                    width={"50%"}
                    href="https://wa.me/+12792082992"
                    target="_blank"
                    underline="hover"
                  >
                    <span style={{ fontWeight: "600" }}>
                      <PhoneIphoneIcon
                        sx={{ marginRight: "12px", color: "#919EAB" }}
                      />
                      Phone Number
                    </span>
                    <span
                      style={{
                        marginLeft: "34px",
                        marginTop: "4px",
                        marginBottom: "22px",
                        color: "#919EAB",
                      }}
                    >
                      +12792082992
                    </span>
                  </Link>
                  <Link
                    href="mailto:Mooneerkhair@gmail.com"
                    underline="hover"
                    display={"inline-block"}
                    target="_blank"
                    width={"60%"}
                  >
                    <span style={{ fontWeight: "600" }}>
                      <EmailIcon
                        sx={{ marginRight: "12px", color: "#919EAB" }}
                      />
                      Email
                    </span>
                    <span
                      style={{
                        marginLeft: "34px",
                        marginTop: "4px",
                        color: "#919EAB",
                        marginBottom: "22px",
                      }}
                    >
                      mkmobiledetailing@yahoo.com
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    underline="hover"
                    display={"inline-block"}
                    href="https://www.google.com/maps/place/28+Jacqueline+Ct,+Daly+City,+CA+94014,+USA/@37.6999754,-122.4172862,15.3z/data=!4m6!3m5!1s0x808f7ecda15db1d3:0xf1912bee74cbd012!8m2!3d37.6999998!4d-122.414495!16s%2Fg%2F11c11v0kqd"
                  >
                    <span style={{ fontWeight: "600" }}>
                      <AddLocationSharpIcon
                        sx={{ marginRight: "12px", color: "#919EAB" }}
                      />
                      Address
                    </span>

                    <span
                      style={{
                        marginLeft: "34px",
                        marginTop: "4px",
                        color: "#919EAB",
                      }}
                    >
                      28 Jacqueline Ct ca daly city 94014
                    </span>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6} className="ContectUs">
                <Box className="ContectUs">
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    fontSize={"24px"}
                    fontFamily={"Poppins"}
                  >
                    Business Hours
                  </Typography>
                  <Box
                    className="hover-sec"
                    sx={{
                      width: "130px",
                      height: "3px",
                      bgcolor: GoldColor,
                      marginTop: "8px",
                      transition: " width 2s",
                    }}
                  ></Box>
                </Box>
                <Stack mt={4}>
                  <div className="Time">
                    <span>Monday</span>
                    <span>9:00 am - 5:00 pm</span>
                  </div>
                  <div className="Time">
                    <span>Tuesday</span>
                    <span>9:00 am - 5:00 pm</span>
                  </div>
                  <div className="Time">
                    <span>Wednesday</span>
                    <span>9:00 am - 5:00 pm</span>
                  </div>
                  <div className="Time">
                    <span>Thursday</span>
                    <span>9:00 am - 5:00 pm</span>
                  </div>
                  <div className="Time">
                    <span>Friday</span>
                    <span>9:00 am - 5:00 pm</span>
                  </div>
                  <div className="Time">
                    <span>Saturday</span>
                    <span>9:00 am - 5:00 pm</span>
                  </div>
                  <div className="Time">
                    <span>Sunday</span>
                    <span>9:00 am - 5:00 pm</span>
                  </div>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </FotterStyle>
      </Container>
      <hr />
      <Box sx={{ textAlign: "center", color: "#919EAB" }}>
        <Typography variant="body1">
          Copyright © 2023 All rights reserved.
        </Typography>
        <Typography variant="body1" fontSize={12} pb={1}>
          Created By : Abbas Khan.
        </Typography>
      </Box>
    </Box>
  );
}
