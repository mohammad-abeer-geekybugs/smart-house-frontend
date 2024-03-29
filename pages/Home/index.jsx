import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Grid } from "@mui/material";
import ContactUs from "@/components/ContactUs";
import { SliderCarousal } from "@/components/SliderCarousal";
import {
  TECHNOLOGY_WE_UTILIZE_IMAGES,
  THIRD_SECTION_DATA,
} from "@/constants/Constants";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

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
    fontFamily: "aldrich",
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
    color: "black",
    fontSize: "42px",
    fontFamily: "aldrich",
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
    color: "black",
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
    fontFamily: "aldrich",
    [theme.breakpoints.down("1800")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("1600")]: {
      fontSize: "36px",
    },
    [theme.breakpoints.down("1500")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.down("1350")]: {
      fontSize: "27px",
    },
    [theme.breakpoints.down("1250")]: {
      fontSize: "26px",
    },
    [theme.breakpoints.down("1190")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("1060")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("1005")]: {
      fontSize: "23px",
    },
    [theme.breakpoints.down("960")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("921")]: {
      fontSize: "21px",
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
    [theme.breakpoints.down("586")]: {
      fontSize: "26px",
    },
    [theme.breakpoints.down("544")]: {
      fontSize: "24px",
      lineHeight: "60px",
    },
    [theme.breakpoints.down("502")]: {
      fontSize: "22px",
      lineHeight: "60px",
    },
    [theme.breakpoints.down("462")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("419")]: {
      fontSize: "16px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("350")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("315")]: {
      fontSize: "14px",
    },
  },
  thirdSectionText: {
    position: "relative",
    zIndex: 1,
    color: "white",
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
    },
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
  thirdSectionSeeMoreDiv: {
    display: "flex",
    gap: "6px",
    color: "#828282",
    position: "absolute",
    bottom: "0",
    right: "-50px",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("600")]: {
      bottom: "0",
      fontSize: "14px",
      lineHeight: "20px",
    },
    [theme.breakpoints.down("500")]: {
      bottom: "-12px",
      fontSize: "14px",
      lineHeight: "20px",
    },
    [theme.breakpoints.down("400")]: {
      bottom: "-12px",
      fontSize: "14px",
      lineHeight: "20px",
    },
    [theme.breakpoints.down("388")]: {
      bottom: "-20px",
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  forthSection: {
    backgroundColor: "#fff",
    textAlign: "center",
    padding: "60px 0px ",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  forthSectionTabletView: {
    backgroundColor: "#fff",
    textAlign: "center",
    padding: "60px 0px ",
    [theme.breakpoints.up("md")]: {
      display: "none",
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
    [theme.breakpoints.down("419")]: {
      top: "16px",
    },
  },
  contactUsDesktopVersion: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

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
                <Link href={item.path}>
                  <div className={classes.thirdSectionSeeMoreDiv}>
                    <p>See more</p>
                    <EastIcon />
                  </div>
                </Link>
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

      {/* Technologies we utilize section */}
      <div className={classes.forthSection}>
        <p
          style={{
            fontSize: "42px",
            lineHeight: "72px",
            fontFamily: "aldrich",
          }}
        >
          TECHNOLOGY WE UTILIZE
        </p>
        <div style={{ backgroundColor: "#F2F2F2", marginTop: "10px" }}>
          <SliderCarousal DATA={TECHNOLOGY_WE_UTILIZE_IMAGES} />
        </div>
      </div>

      <div className={classes.forthSectionTabletView}>
        <p
          style={{
            fontSize: "32px",
            lineHeight: "44px",
            width: "230px",
            margin: "auto",
            fontFamily: "aldrich",
          }}
        >
          TECHNOLOGY WE UTILIZE
        </p>
        <div style={{ backgroundColor: "#F2F2F2", marginTop: "10px" }}>
          {TECHNOLOGY_WE_UTILIZE_IMAGES.map((item, index) => (
            <div
              key={index}
              style={index === 4 ? { padding: "10px 0px" } : null}
            >
              <Image
                src={item.image}
                width={index === 4 ? "100px" : "110px"}
                height={index === 4 ? "30px" : "70px"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className={classes.contactUsDesktopVersion}>
        <ContactUs />
      </div>
    </>
  );
};

export default LandingPage;
