import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RightToLeftAmenity from "@/components/RightToLeftAmenity";
import {
  AUDIO_ROOM_CONFIGURATION,
  WHOLE_HOME_AUDIO,
} from "@/constants/Constants";
import LeftToRightAmenity from "@/components/LeftToRightAmenity";
import ContactUs from "@/components/ContactUs";
const styles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/audioBg.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      minHeight: "56vh",
      backgroundImage: "url(/audioTabletBg.png)",
    },
    [theme.breakpoints.down("600")]: {
      minHeight: "45vh",
      backgroundImage: "url(/audioMobileBg.png)",
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

const Audio = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainBanner}>
          <p className={classes.mainHeading}>02. AUDIO</p>
          <p className={classes.subHeading}>
            Elevate your listening experience with tailored audio solutions
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
        <RightToLeftAmenity DATA={WHOLE_HOME_AUDIO} />
        <LeftToRightAmenity DATA={AUDIO_ROOM_CONFIGURATION} modifyGrid={true} />
      </div>
      <div className={classes.contactUsDesktopVersion}>
        <ContactUs />
      </div>
    </>
  );
};

export default Audio;
