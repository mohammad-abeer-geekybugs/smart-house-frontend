import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RightToLeftAmenity from "@/components/RightToLeftAmenity";
import {
  BASIC_HOME_THEATRE,
  CUSTOM_HOME_THEATRE,
  CUSTOM_SPORTS_DEN,
  GAMING_ROOM,
} from "@/constants/Constants";
import LeftToRightAmenity from "@/components/LeftToRightAmenity";
import ContactUs from "@/components/ContactUs";
const styles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/entertainmentBg.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      minHeight: "56vh",
      backgroundImage: "url(/entertainmentTabletBg.png)",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "45vh",
      backgroundImage: "url(/entertainmentMobileBg.png)",
    },
  },
  mainBanner: {
    maxWidth: "80%",
    margin: "auto",
    padding: "250px 0px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: "250px 0px 0px 0px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "450px 0px 0px 0px",
    },
  },
  mainHeading: {
    color: "white",
    fontSize: "62px",
    wordBreak: "break-word",
    hyphens: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "42px",
      lineHeight: "52px",
    },
  },
  subHeading: {
    color: "white",
    fontSize: "20px",
    lineHeight: "24px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "20px",
      marginTop: "10px",
      position: "absolute",
    },
  },
  mainBannerYellowLineDiv: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      position: "absolute",
      bottom: "-20px",
      left: "-20px",
      right: "-20px",
    },
  },
  blackSpace: {
    backgroundColor: "black",
    display: "flex",
    minHeight: "180px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  downArrow: {
    color: "#f4cf09",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  contactUsDesktopVersion: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Entertainment = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainBanner}>
          <p className={classes.mainHeading}>01. ENTERTAINMENT</p>
          <p className={classes.subHeading}>
            Experience personalized, high-quality entertainment in your home
          </p>
          <div className={classes.mainBannerYellowLineDiv}>
            <Image src="/yellowDullLine.png" width="400px" height="50px" />
          </div>
        </div>
        <div className={classes.blackSpace}>
          <KeyboardArrowDownIcon className={classes.downArrow} />
        </div>
      </div>
      <div>
        <RightToLeftAmenity DATA={BASIC_HOME_THEATRE} />
        <LeftToRightAmenity DATA={CUSTOM_HOME_THEATRE} />
        <RightToLeftAmenity DATA={CUSTOM_SPORTS_DEN} />
        <LeftToRightAmenity DATA={GAMING_ROOM} />
      </div>
      <div className={classes.contactUsDesktopVersion}>
        <ContactUs />
      </div>
    </>
  );
};

export default Entertainment;
