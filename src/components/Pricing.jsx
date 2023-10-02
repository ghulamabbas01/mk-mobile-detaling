import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

let GoldColor = "#ffb800";
let WhiteColor = "#fff";

const Item = styled(Paper)(({ theme }) => ({
  backgroundImage: "linear-gradient(#ffcd00, #e24d12)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: WhiteColor,
}));

// shhow more style
const AccordionMore = styled(Accordion)({
  width: "100%",

  "svg ": {
    color: GoldColor,
  },
});
// Grid card style
const GridItemStyle = styled(Grid)({
  ".pricingCard": {
    flex: "1",
    maxWidth: "360px",
    backgroundColor: WhiteColor,
    margin: "20px 10px",
    textAlign: "center",
    cursor: "pointer",
    overflow: "hidden",
    color: "#2d2d2d",
    transition: ".3s linear",
    border: "1px solid #fff",
    "&:hover": {
      backgroundColor: WhiteColor,
    },
  },
  ".pricingCardHeader": {
    backgroundColor: WhiteColor,
    display: "inline-block",
    color: GoldColor,
    padding: "12px 30px",
    borderRadius: "0 0 20px 20px",
    fontSize: "16px",
    textTransform: "uppercase",
    fontWeight: "600",
    transition: ".4s linear",
  },
  ".price": {
    fontSize: "48px",
    fontWeight: "600",
    color: WhiteColor,
    margin: "8px 0",
    transition: ".2s linear",
    padding: "0",
    margin: "0",
  },
  ul: {
    margin: "0",
    textAlign: "left",
    fontFamily: "poppins",
    textTransform: "capitalize",
    fontSize: "16x",
  },
  Button: {
    width: "70%",
    marginTop: "18px",
    backgroundColor: WhiteColor,
    color: GoldColor,
    fontWeight: 900,
    letterSpacing: 2,
    marginBottom: "18px",
    border: "1px solid #ff4400",

    "&:hover": {
      backgroundColor: "#ffb800",
      color: WhiteColor,
      border: "2px solid #fff",
      transition: "all 0.3 ese-in",
    },
  },
});

export default function VariableWidthGrid() {
  // plan function 1
  function SillerPlan() {
    var email = "mkmobiledetailing@yahoo.com";
    var subject = "I Need SILVER Plan $250";
    var msgBody =
      "Write Your Services Need To Be Done And Phone Number Please ?";

    open(`mailto:${email}?subject=${subject}&body=${msgBody} `);
  }
  // plan function
  // plan function 2
  function GoldPlan() {
    var email = "mkmobiledetailing@yahoo.com";
    var subject = "I Need GOLD Plan $350";
    var msgBody =
      "Write Your Services Need To Be Done And Phone Number Please ?";

    open(`mailto:${email}?subject=${subject}&body=${msgBody} `);
  }
  // plan function
  // plan function3
  function PlatinumPlan() {
    var email = "mkmobiledetailing@yahoo.com";
    var subject = "I Need PLATINUM Plan $500";
    var msgBody =
      "Write Your Services Need To Be Done And Phone Number Please ?";

    open(`mailto:${email}?subject=${subject}&body=${msgBody} `);
  }
  // plan function
  // plan function4
  function Additinal() {
    var email = "mkmobiledetailing@yahoo.com";
    var subject = "I Need ADDITIONAL SERVICES";
    var msgBody =
      "Write Your Services Need To Be Done And Phone Number Please ?";

    open(`mailto:${email}?subject=${subject}&body=${msgBody} `);
  }
  // plan function

  return (
    <Box
      id={"Pricing"}
      sx={{
        backgroundImage: "url(/images/backgoundImg.jpg)",

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        mt: 6,
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
        "&:before": {
          content: '""',
          position: "absolute",
          height: "100%",
          width: "100%",
          background: "#000000bd",
          zIndex: 1,
          left: 0,
        },
      }}
    >
      <Container
        sx={{ position: "relative", zIndex: "1", paddingBottom: "56px" }}
      >
        <Box sx={{ flexGrow: 1 }} pt={5}>
          <Box
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
              variant={"h3"}
              textAlign={"center"}
              fontWeight={500}
              fontSize={"48px"}
              marginBottom={1}
              letterSpacing={2}
              color={GoldColor}
            >
              Pricing
            </Typography>
            <Box
              className="hover-sec"
              sx={{
                width: "120px",
                height: "3px",
                bgcolor: GoldColor,
                margin: "auto",
                transition: " width 2s",
                marginBottom: "48px",
              }}
            ></Box>
          </Box>

          <Grid container spacing={2}>
            {/* pricing card 1 */}

            {/* pricing card 2 */}
            <GridItemStyle item xs={12} md={3} lg={3}>
              <Item>
                <Box class="pricingCard">
                  <h3 class="pricingCardHeader">Silver</h3>
                  <div class="price">
                    <sup>$100</sup>
                  </div>
                  <ul>
                    <li>
                      <span>Complete Outside wash</span>
                    </li>
                    <li>
                      <span>wipe door jams</span>
                    </li>
                    <li>
                      <span>clean rims</span>
                    </li>
                    <li>
                      <span>clean bumpers (chrome)</span>
                    </li>
                    <li>
                      <span>vacuum interior and wash floor mats</span>
                    </li>
                    <li>
                      <span>wipe down dash and vinyl</span>
                    </li>
                    <li>
                      <span>clean windows</span>
                    </li>
                  </ul>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    onClick={SillerPlan}
                  >
                    Order Now
                  </Button>
                </Box>
              </Item>
            </GridItemStyle>
            {/* pricing card 3 */}
            <GridItemStyle item xs={12} md={3} lg={3}>
              <Item>
                <Box class="pricingCard">
                  <h3 class="pricingCardHeader">Gold</h3>
                  <div class="price">
                    <sup>$150</sup>
                  </div>
                  <ul>
                    <li>
                      <span>Complete Outside wash</span>
                    </li>
                    <li>
                      <span>vacuum interior</span>
                    </li>
                    <li>
                      <span>wipe down dash and vinyl</span>
                    </li>
                    <li>
                      <span>wipe down headliner</span>
                    </li>
                    <li>
                      <span>dress vinyl</span>
                    </li>
                    <li>
                      <span>dress door moldings</span>
                    </li>
                    <li>
                      <span>clean windows</span>
                    </li>
                    <li>
                      <span>apply spray shine</span>
                    </li>
                    <li>
                      <span>spray air freshener</span>
                    </li>
                  </ul>

                  <Button
                    onClick={GoldPlan}
                    type="submit"
                    variant="contained"
                    disableElevation
                  >
                    Order Now
                  </Button>
                </Box>
              </Item>
            </GridItemStyle>
            {/* pricing card 4 */}

            <GridItemStyle item xs={12} md={3} lg={3}>
              <Item>
                <Box class="pricingCard">
                  <h3 class="pricingCardHeader">Platinum</h3>
                  <div class="price">
                    <sup>$250</sup>
                  </div>
                  <ul>
                    <li>
                      <span>Complete Outside wash</span>
                    </li>
                    <li>
                      <span>wipe door jams & clean rims</span>
                    </li>
                    <li>
                      <span>clean bumpers(chrome)</span>
                    </li>
                    <li>
                      <span>wash engine & clean windows</span>
                    </li>
                    <li>
                      <span>apply tire shine</span>
                    </li>
                    <li>
                      <span>dress engine & wipe down</span>
                    </li>
                    <li>
                      <span>vacuum interior</span>
                    </li>
                    <li>
                      <span>wash & dress floor mats</span>
                    </li>
                    <li>
                      <span>wipe down dash and vinyl</span>
                    </li>
                    <li>
                      <span>wipe headliner</span>
                    </li>
                    <li>
                      <span>Hand wax vihicle </span>
                    </li>
                    <li>
                      <span>dress door moldings </span>
                    </li>
                    <li>
                      <span>dress vinyl & dress dash </span>
                    </li>

                    <li>
                      <span>dress door moldingd</span>
                    </li>
                    <li>
                      <span>spray air freshener and Much more </span>
                    </li>
                    <li>
                      <span>Extra cost for cut and phlish ($100.00)</span>
                    </li>
                  </ul>
                  <Button
                    onClick={PlatinumPlan}
                    type="submit"
                    variant="contained"
                    disableElevation
                  >
                    Order Now
                  </Button>
                </Box>
              </Item>
            </GridItemStyle>
            <GridItemStyle item xs={12} md={3} lg={3}>
              <Item>
                <Box class="pricingCard">
                  <h3 class="pricingCardHeader">Additional Services</h3>
                  <div class="price">
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      fontSize={16}
                      textAlign={"center"}
                      px={2}
                      textTransform={"capitalize"}
                      mb={2}
                    >
                      Quote and price Up on request for following services
                    </Typography>
                  </div>
                  <ul>
                    <li>
                      <span>Odor Removal </span>
                    </li>
                    <li>
                      <span>Mold Remover</span>
                    </li>
                    <li>
                      <span>Scratch Remover</span>
                    </li>
                    <li>
                      <span>Headlight Restoration</span>
                    </li>
                  </ul>
                  <Button
                    onClick={Additinal}
                    type="submit"
                    variant="contained"
                    disableElevation
                  >
                    Order Now
                  </Button>
                </Box>
              </Item>
            </GridItemStyle>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
