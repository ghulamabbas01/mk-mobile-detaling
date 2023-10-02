import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, Card } from "@mui/system";
import { Button, Typography, Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
let GoldColor = "#ffb800";

export default function RowAndColumnSpacing() {
  return (
    <Container id={"Services"}>
      <Box
        pt={5}
        sx={{
          cursor: "pointer",
          ":hover": {
            "& .hover-sec": {
              width: "180px",
              transition: " width 2s",
            },
          },
        }}
      >
        <Typography
          variant="h4"
          color="#ffb800"
          textAlign="center"
          fontWeight={500}
          letterSpacing={2}
          fontSize={48}
        >
          Services
        </Typography>
        <Box
          className="hover-sec"
          sx={{
            width: "100px",
            height: "3px",
            bgcolor: GoldColor,
            margin: "auto",
            transition: " width 2s",
          }}
        ></Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={3}
          mt={6}
          columnSpacing={{ xs: 3, sm: 2, md: 3 }}
        >
          <Grid item md={4} xs={6}>
            <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
              <Box
                justifyContent="center"
                display="flex"
                sx={{ img: { height: { xs: 180, md: "274px" } } }}
              >
                <img src="/images/services1.jpg" width="100%" alt="perfume" />
              </Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  bgcolor: GoldColor,
                  borderRadius: 0,
                  "&:hover": { background: GoldColor },
                }}
              >
                Mobile Detailing
              </Button>
            </Stack>
          </Grid>
          <Grid item md={4} xs={6}>
            <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
              <Box
                justifyContent="center"
                display="flex"
                sx={{ img: { height: { xs: 180, md: "274px" } } }}
              >
                <img src="/images/services2.jpg" width="100%" alt="perfume" />
              </Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  bgcolor: GoldColor,
                  borderRadius: 0,
                  "&:hover": { background: GoldColor },
                }}
              >
                Engine Cleaning
              </Button>
            </Stack>
          </Grid>
          <Grid item md={4} xs={6}>
            <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
              <Box
                justifyContent="center"
                display="flex"
                sx={{ img: { height: { xs: 180, md: "274px" } } }}
              >
                <img src="/images/services3.jpg" width="100%" alt="perfume" />
              </Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  bgcolor: GoldColor,
                  borderRadius: 0,
                  "&:hover": { background: GoldColor },
                }}
              >
                Engin Cleaning
              </Button>
            </Stack>
          </Grid>
          <Grid item md={4} xs={6}>
            <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
              <Box
                justifyContent="center"
                display="flex"
                sx={{ img: { height: { xs: 180, md: "274px" } } }}
              >
                <img src="/images/services4.jpg" width="100%" alt="perfume" />
              </Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  bgcolor: GoldColor,
                  borderRadius: 0,
                  "&:hover": { background: GoldColor },
                }}
              >
                Interior Detailing
              </Button>
            </Stack>
          </Grid>
          <Grid item md={4} xs={6}>
            <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
              <Box
                justifyContent="center"
                display="flex"
                sx={{ img: { height: { xs: 180, md: "274px" } } }}
              >
                <img src="/images/services5.jpg" width="100%" alt="perfume" />
              </Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  bgcolor: GoldColor,
                  borderRadius: 0,
                  "&:hover": { background: GoldColor },
                }}
              >
                Mobile Detailing
              </Button>
            </Stack>
          </Grid>
          <Grid item md={4} xs={6}>
            <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
              <Box
                justifyContent="center"
                display="flex"
                sx={{ img: { height: { xs: 180, md: "274px" } } }}
              >
                <img src="/images/services6.jpg" width="100%" alt="perfume" />
              </Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  px: 0,
                  bgcolor: GoldColor,
                  borderRadius: 0,
                  "&:hover": { background: GoldColor },
                }}
              >
                Pet Hair Removal
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
