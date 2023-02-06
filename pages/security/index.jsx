import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RightToLeftAmenity from "@/components/RightToLeftAmenity";
import {
  ACCESS_CONTROL_AND_DOOR_LOCKS,
  CALLSHIELD,
  MONITORING,
  WATER_LEAK_PROTECTION,
} from "@/constants/Constants";
import LeftToRightAmenity from "@/components/LeftToRightAmenity";
import ContactUs from "@/components/ContactUs";
const styles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/securityBg.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      minHeight: "56vh",
      backgroundImage: "url(/securityTabletBg.png)",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "45vh",
      backgroundImage: "url(/securityMobileBg.png)",
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
    maxWidth: "500px",
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

const Security = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainBanner}>
          <p className={classes.mainHeading}>03. SECURITY</p>
          <p className={classes.subHeading}>
            Experience the ultimate in home security and convenience with House
            Smarts advanced wireless technology solutions.
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
        <RightToLeftAmenity
          DATA={ACCESS_CONTROL_AND_DOOR_LOCKS}
          modifyGrid={true}
        />
        <LeftToRightAmenity DATA={MONITORING} modifyGrid={true} />
        <RightToLeftAmenity DATA={WATER_LEAK_PROTECTION} modifyGrid={true} />
        <LeftToRightAmenity DATA={CALLSHIELD} callShield={true} />
      </div>
      <div className={classes.contactUsDesktopVersion}>
        <ContactUs />
      </div>
    </>
  );
};

export default Security;
