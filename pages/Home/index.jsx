import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Grid } from "@mui/material";
import ContactUs from "@/components/ContactUs";

const styles = makeStyles((theme) => ({
  desktopViewMainBanner: {
    minHeight: "900px",
    position: "relative",
    backgroundImage: "url(mainBannerBg.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("550")]: {
      display: "none",
    },
  },
  mobileViewMainBanner: {
    display: "flex",
    position: "relative",
    minHeight: "680px",
    backgroundImage: "url(mobileMainBanner.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("550")]: {
      display: "none",
    },
    [theme.breakpoints.down("550")]: {
      display: "block",
    },
  },
  bannerText: {
    color: "white",
    width: "30%",
    paddingTop: "200px",
    paddingLeft: "100px",
    [theme.breakpoints.up("550")]: {
      fontSize: "52px",
    },
    [theme.breakpoints.up("650")]: {
      fontSize: "62px",
    },
    [theme.breakpoints.up("750")]: {
      fontSize: "72px",
    },
    [theme.breakpoints.up("850")]: {
      fontSize: "82px",
    },
  },
  desktopViewLocationServiceText: {
    display: "flex",
    gap: "15px",
    position: "absolute",
    bottom: "70px",
    left: "100px",
    color: "white",
    alignItems: "center",
  },
  mobileViewLocationServiceText: {
    display: "flex",
    gap: "15px",
    position: "absolute",
    bottom: "70px",
    left: "35px",
    color: "white",
    alignItems: "center",
  },
  secondSection: {
    padding: "40px 0px",
    backgroundColor: "#fff",
  },
  introducingHouseSmartGrid: {
    position: "relative",
    marginTop: "8%",
    maxWidth: "80%",
    margin: "auto",
  },
  introducingHouseSmart: {
    zIndex: 1,
    position: "relative",
    maxWidth: "400px",
    marginLeft: "30px",
    marginBottom: "10px",
    fontSize: "42px",
    [theme.breakpoints.down("550")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("350")]: {
      fontSize: "22px",
    },
  },
  introducingHouseSmartText: {
    maxWidth: "80%",
    marginLeft: "30px",
    lineHeight: "24px",
    [theme.breakpoints.down("550")]: {
      margin: "auto",
    },
  },
  houseSmartYellowLine: {
    position: "absolute",
    top: "50px",
    [theme.breakpoints.down("550")]: {
      top: "30px",
    },
    [theme.breakpoints.down("350")]: {
      top: "24px",
    },
  },
  thirdSection: {
    backgroundImage: "url(/thirdSectionHomePageBg.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  thirdSectionGridContainer: {
    padding: "8%",
    maxWidth: "80%",
    margin: "auto",
    [theme.breakpoints.down("1500")]: {
      padding: "10%",
    },
  },
  thirdSectionGridItem: {
    position: "relative",
    margin: "30px 0px",
    [theme.breakpoints.down("500")]: {
      margin: "0px 0px",
    },
  },
  thirdSectionHeadings: {
    position: "relative",
    zIndex: 1,
    fontSize: "42px",
    color: "white",
    lineHeight: "72px",
    [theme.breakpoints.down("1600")]: {
      fontSize: "36px",
    },
    [theme.breakpoints.down("1500")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("1250")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.down("1060")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("960")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("900")]: {
      fontSize: "36px",
    },
    [theme.breakpoints.down("680")]: {
      fontSize: "32px",
    },
    [theme.breakpoints.down("605")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.down("530")]: {
      fontSize: "24px",
      lineHeight: "60px",
    },
    [theme.breakpoints.down("455")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("415")]: {
      fontSize: "18px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("350")]: {
      fontSize: "16px",
    },
  },
  thirdSectionText: {
    position: "relative",
    zIndex: 1,
    color: "white",
    fontSize: "16px",
    [theme.breakpoints.down("455")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("415")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("350")]: {
      fontSize: "12px",
    },
  },
  gridItemDiv: {
    marginLeft: "30px",
    [theme.breakpoints.down("1160")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.down("1060")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.down("740")]: {
      marginLeft: "0px",
    },
  },
  yellowDullImageDiv: {
    position: "absolute",
    top: 25,
  },
  contactUsDesktopVersion: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const THIRD_SECTION_DATA = [
  {
    heading: "01. ENTERTAINMENT",
    text: "Experience personalized, high-quality entertainment in your home",
  },
  {
    heading: "02. AUDIO",
    text: "Elevate your listening experience with tailored audio solutions",
  },
  {
    heading: "03. SECURITY",
    text: "Protect your home with a customizable, easy-to-use security solution",
  },
  {
    heading: "04. COMFORT & SAFETY",
    text: "Enjoy personalized comfort in your home with tailored solutions",
  },
];
const LandingPage = () => {
  const classes = styles();
  return (
    <>
      {/* Desktop View */}
      <div className={classes.desktopViewMainBanner}>
        <p className={classes.bannerText}>ELEVATE YOUR LIVING EXPERIENCE</p>
        <div className={classes.desktopViewLocationServiceText}>
          <LocationOnOutlinedIcon />
          <p>Servicing Southern Ontario</p>
        </div>
      </div>

      {/* Mobile View */}
      <div className={classes.mobileViewMainBanner}>
        <div
          style={{ width: "100%", textAlign: "center", paddingTop: "150px" }}
        >
          <Image
            src={"/mobileBannerOverlay.svg"}
            width="315px"
            height="278px"
          />
        </div>
        <div className={classes.mobileViewLocationServiceText}>
          <LocationOnOutlinedIcon />
          <p>Servicing Southern Ontario</p>
        </div>
      </div>

      {/* introducing house smarts */}
      <Grid container className={classes.secondSection}>
        <Grid item xs={0} sm={0} md={1} lg={1} />
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          style={{ textAlign: "center", alignSelf: "center" }}
        >
          <Image
            src={"/introducingHouseSmart.png"}
            width={"560px"}
            height={"440px"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          className={classes.introducingHouseSmartGrid}
        >
          <p className={classes.introducingHouseSmart}>
            INTRODUCING
            <br /> HOUSE SMARTS,
          </p>
          <p className={classes.introducingHouseSmartText}>
            {`your one-stop solution for all things related to home technology.
            With our state-of-the-art technology and expert installation
            services, we'll transform your home into a smart, connected, and
            truly immersive entertainment experience.`}
          </p>
          <div className={classes.houseSmartYellowLine}>
            <Image src={"/yellowLine.png"} width="400px" height="50px" />
          </div>
        </Grid>

        <Grid item xs={0} sm={0} md={1} lg={1} />
      </Grid>

      <div className={classes.thirdSection}>
        <Grid container className={classes.thirdSectionGridContainer}>
          {/* <Grid item xs={0} sm={0} md={1} lg={1} /> */}
          {THIRD_SECTION_DATA.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              key={index}
              className={classes.thirdSectionGridItem}
            >
              <div className={classes.gridItemDiv}>
                <p className={classes.thirdSectionHeadings}>{item.heading}</p>
                <p className={classes.thirdSectionText}>{item.text}</p>
                <div className={classes.yellowDullImageDiv}>
                  <Image
                    src={"/yellowDullLine.png"}
                    width={"400px"}
                    height={"50px"}
                  />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={classes.forthSection}>
        {/* <p>TECHNOLOGY WE UTILIZE</p> */}
        {/* insert slider here */}
      </div>

      {/* Contact Us Section */}
      <div className={classes.contactUsDesktopVersion}>
        <ContactUs />
      </div>
    </>
  );
};

export default LandingPage;
