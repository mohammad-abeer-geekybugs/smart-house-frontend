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
import ClearIcon from "@mui/icons-material/Clear";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Divider } from "@mui/material";
import { MOBILE_MENU_BOT_TEXT, NAVLINKS } from "@/constants/Constants";
import { useRouter } from "next/router";

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
    border: "2px solid #fff",
    borderRadius: "0px",
    float: "right",
    marginRight: "20%",
    "&:hover": {
      fontWeight: "600",
      border: "2px solid #F4CF09",
      color: "#F4CF09",
      cursor: "pointer",
      transform: "translate(0px, -5px)",
      transition: "transform 0.5s ease-in-out",
    },
  },
  navLinkItemDiv: {
    padding: "20px 0px 10px",
    margin: "0px 20px",
    color: "White",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
const activeLink = {
  borderBottom: "2px solid #F4CF09",
};
const Navbar = () => {
  const classes = styles();
  const route = useRouter();
  const [offset, setOffset] = useState(0);
  const [widthOffset, setWidthoffset] = useState(0);
  const [heightOffset, setHeightOffset] = useState(0);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    setWidthoffset(screen.width);
    setHeightOffset(screen.height);
  });
  console.log("seightOffset: ", heightOffset);
  const mobileList = () => (
    <Box
      sx={{ width: widthOffset }}
      minHeight={heightOffset}
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
          <ListItemIcon style={{ marginLeft: "20px", cursor: "pointer" }}>
            <Link href="/">
              <Image src={"/smallLogo.svg"} width="40px" height="40px" />
            </Link>
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
                  <ListItemText className={clsx(classes.menuLinks, "navText")}>
                    <p
                      className={classes.menuLinksText}
                      onClick={() => setOpenMobileMenu(false)}
                    >
                      {item.name}
                    </p>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider
              color="yellow"
              width="20%"
              style={{ position: "absolute", left: "45px" }}
            />
          </React.Fragment>
        ))}
      </List>
      <div
        style={{ /* marginTop: "80px" */ position: "absolute", bottom: "90px" }}
      >
        {MOBILE_MENU_BOT_TEXT.map((item, index) => (
          <ListItem key={index}>
            <ListItemText>
              <div style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
                {item.icon}
                {item.text}
              </div>
            </ListItemText>
          </ListItem>
        ))}
      </div>
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
          className={clsx(classes.navText, classes.navLinkItemDiv, "navText")}
          style={route.pathname === item.path ? activeLink : null}
          key={index}
        >
          <Link href={item.path}>
            <span>{item.name}</span>
          </Link>
        </div>
      ))}
    </Box>
  );
  const navBarBgImage = {
    backgroundColor: "black",
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
          <Link href="/">
            <Image
              src={"/smallLogo.svg"}
              width="40px"
              height="30px"
              style={{
                marginTop: "10px",
              }}
            />
          </Link>
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
        style={offset > 70 ? navBarBgImage : null}
      >
        <div
          style={{
            display: "flex",
            margin: "20px 10px 10px 50px",
            width: "100%",
          }}
        >
          <div style={{ flex: 1, display: "flex", marginLeft: "10%" }}>
            <Link href="/">
              <div
                style={{
                  width: "max-content",
                  alignSelf: "center",
                  marginRight: "20px",
                  cursor: "pointer",
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
            </Link>
            {desktopList()}
          </div>
          <div style={{ flex: 1, alignSelf: "center" }}>
            <Link href="/contact-us">
              <Button variant="outlined" className={classes.navButton}>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
