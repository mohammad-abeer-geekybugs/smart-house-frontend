import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import { Divider, Grid, useMediaQuery } from "@mui/material";
import Link from "next/link";

const styles = makeStyles((theme) => ({
  main: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "inherit",
      backgroundSize: "contain",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundPosition: "inherit",
    },
  },
  container: {
    maxWidth: "1440px",
    margin: "120px auto",
    padding: "40px 0px",
    [theme.breakpoints.down("md")]: {
      padding: "100px 0px",
    },
  },
  divider: {
    maxWidth: "190px",
    borderColor: "yellow",
  },
  title: {
    fontSize: "42px",
    color: "white",
    lineHeight: "72px",
    margin: "40px 0px",
    width: "240px",
    [theme.breakpoints.down("1050")]: {
      width: "150px",
      fontSize: "30px",
      lineHeight: "34px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      lineHeight: "34px",
    },
  },
  mobileGridSize: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "80%",
      margin: "auto",
    },
  },
  yellowText: {
    color: "#f4cf09",
    lineHeight: "24px",
    margin: "40px 0px",
  },
  mobileViewIcons: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "20px",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      marginTop: "20px",
      justifyContent: "start",
    },
    [theme.breakpoints.down("500")]: {
      justifyContent: "space-between",
    },
  },
  desktopViewIcons: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  singleIconDiv: {
    width: "100px",
    textAlign: "center",
    color: "white",
    margin: "10px 0px",
    [theme.breakpoints.down("md")]: {
      width: "130px",
      display: "flex",
      textAlign: "start",
      gap: "8px",
      alignItems: "center",
    },
  },
}));
const LeftToRightAmenity = ({ DATA, modifyGrid, callShield }) => {
  const classes = styles();
  const tabletWidth = useMediaQuery("(max-width:900px)");
  const mobileWidth = !!callShield
    ? useMediaQuery("(max-width:500px)")
    : useMediaQuery("(max-width:599px)");

  return (
    <div
      className={classes.main}
      style={
        mobileWidth
          ? { backgroundImage: `url(${DATA.bgMobile})` }
          : tabletWidth
          ? { backgroundImage: `url(${DATA.bgTablet})` }
          : { backgroundImage: `url(${DATA.bgImage})` }
      }
    >
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={0} sm={0} md={1} lg={1} />

          <Grid
            item
            xs={12}
            sm={12}
            md={!!modifyGrid ? 4 : callShield ? 4 : 3}
            lg={!!modifyGrid ? 4 : callShield ? 3 : 2}
            className={classes.mobileGridSize}
          >
            <p className={classes.title}>{DATA.title}</p>
            <Divider className={classes.divider} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={!!callShield ? 3 : 4}
            lg={!!callShield ? 4 : 5}
            className={classes.mobileGridSize}
          >
            {!!DATA.icons && (
              <div className={classes.mobileViewIcons}>
                {DATA.icons.map((item, index) => (
                  <div key={index} className={classes.singleIconDiv}>
                    <Image
                      src={`${item.childIcon}`}
                      width="48px"
                      height="48px"
                    />
                    <div>
                      <p>{item.text1}</p>
                      <p>{item.text2}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div>
              <p className={classes.yellowText}>{DATA.yellowText}</p>
              <p
                style={{
                  lineHeight: "24px",
                  color: "white",
                }}
              >
                {DATA.secondText}
              </p>
              <p
                style={{
                  lineHeight: "24px",
                  color: "white",
                  margin: "40px 0px",
                }}
              >
                {DATA.thirdText}
              </p>
              {!!DATA.forthText && (
                <p
                  style={{
                    lineHeight: "24px",
                    color: "white",
                    margin: "40px 0px",
                  }}
                >
                  {DATA.forthText}
                </p>
              )}
              {!!callShield && (
                <p style={{ color: "white" }}>
                  Click{" "}
                  <Link href="/contact-us">
                    <span
                      style={{ color: "#f4cf09", textDecoration: "underline" }}
                    >
                      here
                    </span>
                  </Link>{" "}
                  to send us an email and we will notify you when this service
                  launches.
                </p>
              )}
            </div>
            {!!DATA.icons && (
              <div className={classes.desktopViewIcons}>
                {DATA.icons.map((item, index) => (
                  <div key={index} className={classes.singleIconDiv}>
                    <Image
                      src={`${item.childIcon}`}
                      width="48px"
                      height="48px"
                      style={{ paddingBottom: "5px" }}
                    />
                    <div style={{ paddingTop: "8px" }}>
                      <p>{item.text1}</p>
                      <p>{item.text2}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Grid>

          <Grid item xs={12} sm={12} md={2} lg={3} />
        </Grid>
      </div>
    </div>
  );
};

export default LeftToRightAmenity;
