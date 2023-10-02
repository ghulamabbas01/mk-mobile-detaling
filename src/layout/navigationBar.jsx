import * as React from "react";
import {
  Typography,
  Stack,
  Toolbar,
  Box,
  AppBar,
  Button,
  IconButton,
  Link,
  Container,
  styled,
  useTheme,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NavDrawer from "../components/NavDrawer";

const StackStyled = styled(Stack)(({ theme }) => ({
  "& .MuiLink-root": {
    // color: "#fff",
    letterSpacing: 2,
    fontWeight: 400,
  },
  svg: {
    fill: "#fff",
    fontSize: 35,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function ButtonAppBar() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: "100%" }}>
        <Toolbar
          sx={{
            bgcolor: "#000",
            justifyContent: "space-between",
            px: { xs: 2, md: "64px !important" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              minWidth: 250,
              img: {
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 2,
                borderBottomRightRadius: "8px",
                borderBottomLeftRadius: "8px",
                height: "200px",
              },
              [theme.breakpoints.down("md")]: {
                minWidth: 100,
                img: {
                  height: 100,
                },
              },
            }}
          >
            <img src="/images/logo.png" alt="logo" />
          </Box>
          <StackStyled
            direction="row"
            justifyContent="center"
            spacing={3}
            fontFamily={"Poppins"}
          >
            <Link href="#home" underline="none" color={"#ffb800"}>
              {"Home"}
            </Link>
            <Link href="#Pricing" underline="none" color={"#fff"}>
              {"Pricing"}
            </Link>
            <Link href="#Services" underline="none" color={"#fff"}>
              {"Services"}
            </Link>
            <Link href="#OurWork" underline="none" color={"#fff"}>
              {"Our Work"}
            </Link>
            <Link href="#ContactUs" underline="none" color={"#fff"}>
              {"Contact Us"}
            </Link>
          </StackStyled>
          <StackStyled direction="row" justifyContent="center" spacing={1}>
            <IconButton>
              <a
                href="https://www.facebook.com/people/MK-Mobile-Detailing/100090733129388/?mibextid=LQQJ4d"
                target={"_blank"}
              >
                <FacebookOutlinedIcon />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://www.instagram.com/mk_mobiledetailing/?igshid=YmMyMTA2M2Y%3D"
                target={"_blank"}
              >
                <InstagramIcon />
              </a>
            </IconButton>
            <IconButton>
              <a href="https://wa.me/+12792082992" target={"_blank"}>
                <WhatsAppIcon />
              </a>
            </IconButton>
          </StackStyled>
          <Box display={{ xs: "block", md: "none" }}>
            <NavDrawer />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
