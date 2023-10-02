import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

const data = [
  {
    link: "#home",
    title: "Home",
  },
  {
    link: "#Pricing",
    title: "Pricing",
  },
  {
    link: "#Services",
    title: "Services",
  },
  {
    link: "#OurWork",
    title: "Our Work    ",
  },
  {
    link: "#ContactUs",
    title: "Contact Us",
  },
];

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {data.map((text, index) => (
          <ListItem key={text.link} disablePadding>
            <ListItemButton href={text.link}>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* {["left"].map((anchor) => ( */}
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer("left", true)}
          sx={{
            svg: { fill: "#fff" },
          }}
        >
          <MenuSharpIcon />
        </IconButton>
        <Drawer
          sx={{
            ".MuiPaper-root": {
              bgcolor: "#000",
              color: "#fff",
            },
          }}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
      {/* ))} */}
    </div>
  );
}
