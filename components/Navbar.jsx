import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Link from "next/link";
import clsx from "clsx";
import { Divider } from "@mui/material";
import { NAVLINKS } from "@/constants/Constants";

const styles = makeStyles((theme) => ({
  navBarContainer: {
    zIndex: 100,
    position: "fixed",
  },
  mobileMenu: {
    display: "flex",
    width: "100%",
    position: "fixed",
    backgroundColor: "black",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktopMenu: {
    width: "100%",
    position: "fixed",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  menuLinks: {
    margin: "15px 0px 15px 30px",
  },
  menuLinksText: {
    fontSize: "20px",
  },
  navText: {
    width: "max-content",
  },
  navButton: {
    color: "white",
    borderColor: "#fff",
    borderRadius: "0px",
    float: "right",
    marginRight: "20%",
    "&:hover": {
      fontWeight: "600",
      color: "#F4CF09",
      borderColor: "#F4CF09",
      transform: "translate(0px, -5px)",
      transition: "transform 0.5s ease-in-out",
    },
  },
}));
const MOBILE_MENU_BOT_TEXT = [
  {
    icon: <LocalPhoneOutlinedIcon />,
    text: "647-693-5688",
  },
  {
    icon: <AlternateEmailOutlinedIcon />,
    text: "info@housesmarts.io",
  },
  {
    icon: <LocationOnOutlinedIcon />,
    text: "Serving Southern Ontario",
  },
];
const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const classes = styles();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  // console.log("offset: ", offset);

  const mobileList = () => (
    <Box
      sx={{ width: 330 }}
      role="presentation"
      style={{
        backgroundColor: "black",
        color: "white",
        fontWeight: 500,
        position: "relative",
      }}
    >
      <List>
        <ListItem>
          <ListItemIcon style={{ marginLeft: "20px" }}>
            <Image
              src={"/smallLogo.svg"}
              width="40px"
              height="40px"
              //   style={{ marginLeft: "20px" }}
            />
          </ListItemIcon>
          <ListItemButton style={{ justifyContent: "right" }}>
            <ListItemIcon style={{ justifyContent: "inherit" }}>
              <ClearIcon
                onClick={() => setOpenMobileMenu(false)}
                style={{ color: "#f4cf09" }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        {NAVLINKS.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem disablePadding>
              <Link href={item.path}>
                <ListItemButton>
                  <ListItemText
                    className={clsx(classes.menuLinks, "navText")}
                    // primary={item.name}
                  >
                    <p className={clsx(classes.menuLinksText)}>{item.name}</p>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider color="yellow" width="20%" style={{ marginLeft: "13%" }} />
          </React.Fragment>
        ))}
        <div style={{ marginTop: "80px" }}>
          {MOBILE_MENU_BOT_TEXT.map((item, index) => (
            <ListItem key={index}>
              <ListItemText>
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "20px" }}
                >
                  {item.icon}
                  {item.text}
                </div>
              </ListItemText>
            </ListItem>
          ))}
        </div>
      </List>
    </Box>
  );
  const desktopList = () => (
    <Box
      role="presentation"
      style={{
        display: "flex",
        width: "fit-content",
        marginRight: "40px",
        padding: "9px 0px",
      }}
    >
      {NAVLINKS.map((item, index) => (
        <div
          className={clsx(classes.navText, "navText")}
          style={{ margin: "20px 20px", color: "White" }}
          key={index}
        >
          <Link className={classes.linkHover} href={item.path}>
            {item.name}
          </Link>
        </div>
      ))}
    </Box>
  );
  const navBarBgImage = {
    backgroundImage: "url()",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "background-image 3s ease-in-out",
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={classes.navBarContainer}>
      {/* Mobile View Menu */}
      <div
        className={classes.mobileMenu}
        style={offset > 90 ? navBarBgImage : null}
      >
        <div
          style={{
            flex: 1,
            padding: "10px 35px",
          }}
        >
          <Image
            src={"/smallLogo.svg"}
            width="40px"
            height="30px"
            style={{
              marginTop: "10px",
            }}
          />
        </div>
        <div style={{ alignSelf: "center", padding: "10px 10px" }}>
          <Button
            onClick={() => setOpenMobileMenu(true)}
            style={{ paddingRight: "0px" }}
          >
            <Image src={"/mobileMenuIcon.png"} width="20px" height="20px" />
            {/* <MenuIcon style={{ color: "white" }} /> */}
          </Button>
        </div>

        <Drawer
          anchor="left"
          open={openMobileMenu}
          onClose={() => setOpenMobileMenu(false)}
        >
          {mobileList()}
        </Drawer>
      </div>

      {/* Desktop View Menu */}
      <div
        className={classes.desktopMenu}
        style={offset > 150 ? navBarBgImage : null}
      >
        <div
          style={{
            display: "flex",
            margin: "20px 10px 10px 50px",
            width: "100%",
          }}
        >
          <div style={{ flex: 1, display: "flex", marginLeft: "10%" }}>
            <div
              style={{
                width: "max-content",
                alignSelf: "center",
                marginRight: "20px",
              }}
            >
              <Image
                src={"/mainLogo.svg"}
                width="108px"
                height="36px"
                style={{
                  marginTop: "10px",
                }}
              />
            </div>
            {desktopList()}
          </div>
          <div style={{ flex: 1, alignSelf: "center" }}>
            <Button variant="outlined" className={classes.navButton}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
