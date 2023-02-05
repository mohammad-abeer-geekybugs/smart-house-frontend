import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RightToLeftAmenity from "@/components/RightToLeftAmenity";
import {
  BASIC_HOME_THEATRE,
  CARE_TECH_FOR_SENIORS,
  CUSTOM_HOME_THEATRE,
  CUSTOM_SPORTS_DEN,
  ELECTRIC_CAR_CHARGER_INSTALL,
  GAMING_ROOM,
  HOME_COMFORT_PACKAGE,
  LIGHTING_AND_SHADES_AUTOMATION,
  OUTDOOR_SPACE,
} from "@/constants/Constants";
import LeftToRightAmenity from "@/components/LeftToRightAmenity";
import ContactUs from "@/components/ContactUs";
const styles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/comfortAndSafetyBg.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      minHeight: "56vh",
      backgroundImage: "url(/comfortAndSafetyTabletBg.png)",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "45vh",
      backgroundImage: "url(/comfortAndSafetyMobileBg.png)",
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

const ComfortAndSafety = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainBanner}>
          <p className={classes.mainHeading}>04. COMFORT & SAFETY</p>
          <p className={classes.subHeading}>
            Enjoy personalized comfort in your home with tailored solutions
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
        <RightToLeftAmenity DATA={HOME_COMFORT_PACKAGE} />
        <LeftToRightAmenity
          DATA={LIGHTING_AND_SHADES_AUTOMATION}
          modifyGrid={true}
        />
        <RightToLeftAmenity DATA={OUTDOOR_SPACE} />
        <LeftToRightAmenity DATA={CARE_TECH_FOR_SENIORS} modifyGrid={true} />
        <RightToLeftAmenity DATA={ELECTRIC_CAR_CHARGER_INSTALL} />
      </div>
      <div className={classes.contactUsDesktopVersion}>
        <ContactUs />
      </div>
    </>
  );
};

export default ComfortAndSafety;
