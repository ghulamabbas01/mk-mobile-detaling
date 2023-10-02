import React from "react";
// material
import { Stack, Box, Typography, Link } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
// mui icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

// styles
const RootStyled = styled(Stack)(({ theme }) => ({
  "& .whatsapp-sec": {
    borderRadius: "8px",
    background: alpha(theme.palette.warning.main, 0.16),
    border: `1px solid ${theme.palette.warning.main}`,
    padding: theme.spacing(3),
    "& .MuiSvgIcon-root": {
      fontSize: "32px",
      marginRight: theme.spacing(1),
    },
  },
  "& .mail-sec": {
    borderRadius: "8px",
    border: `1px solid ${theme.palette.error.main}`,
    background: alpha(theme.palette.error.main, 0.16),
    padding: theme.spacing(3),
    "& .MuiSvgIcon-root": {
      fontSize: "32px",
      marginRight: theme.spacing(1),
    },
  },
  "& .skype-sec": {
    borderRadius: "8px",
    border: `1px solid ${theme.palette.info.main}`,
    background: alpha(theme.palette.info.main, 0.16),
    padding: theme.spacing(3),
    "& .MuiSvgIcon-root": {
      fontSize: "32px",
      marginRight: theme.spacing(1),
    },
  },
}));

export default function ContactCard() {
  return (
    <RootStyled spacing={2}>
      <Box className="whatsapp-sec">
        <Stack spacing={1.5}>
          <Typography
            variant="h5"
            color="common.white"
            fontWeight={600}
            display="flex"
            alignItems="center"
          >
            <WhatsAppIcon />
            Whatsapp:
          </Typography>
          <Link
            display={"inline-block"}
            variant="h5"
            href="https://wa.me/+12792082992"
            underline="none"
            target="_blank"
            color="common.white"
            fontWeight={400}
            width={"30%"}
          >
            +12792082992
          </Link>
          {/* <Link
            variant="h5"
            href="#"
            underline="none"
            target="_blank"
            color="common.white"
            fontWeight={400}
          >
            (+123) 123 123 1234
          </Link> */}
        </Stack>
      </Box>
      <Box className="mail-sec">
        <Stack spacing={1.5}>
          <Typography
            variant="h5"
            color="common.white"
            fontWeight={600}
            display="flex"
            alignItems="center"
          >
            <EmailIcon />
            Email:
          </Typography>
          <Link
            variant="h5"
            href="mailto:Mooneerkhair@gmail.com"
            underline="none"
            target="_blank"
            color="common.white"
            fontWeight={400}
            fontSize={{ xs: 18, md: 24 }}
            display={"inline-block"}
            width={"50%"}
          >
            mkmobiledetailing@yahoo.com
          </Link>
        </Stack>
      </Box>
      <Box className="skype-sec">
        <Stack spacing={1.5}>
          <Typography
            variant="h5"
            color="common.white"
            fontWeight={600}
            display="flex"
            alignItems="center"
          >
            <WhatsAppIcon />
            Skype:
          </Typography>
          <Typography variant="h5" color="common.white">
            We Are Online: Monday – Sunday, 9 am to 5 pm
          </Typography>
          <Link
            variant="h5"
            href="skype:live:mooneerkhair@gmail.com"
            underline="none"
            target="_blank"
            color="common.white"
            fontWeight={400}
            display={"inline-block"}
            width={"40%"}
          >
            Mooneer Khair
          </Link>
        </Stack>
      </Box>
    </RootStyled>
  );
}
