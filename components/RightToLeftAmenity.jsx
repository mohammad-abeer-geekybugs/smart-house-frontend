import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import { Divider, Grid, useMediaQuery } from "@mui/material";

const styles = makeStyles((theme) => ({
  main: {
    position: "relative",
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
      margin: "0px auto",
      padding: "100px 0px",
    },
  },
  divider: {
    maxWidth: "160px",
    borderColor: "yellow",
  },
  title: {
    fontSize: "42px",
    color: "white",
    lineHeight: "72px",
    margin: "40px 0px",
    width: "240px",
    fontFamily: "Aldrich",
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
    /* [theme.breakpoints.up("1270")]: {
      maxWidth: "500px",
    }, */
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
      width: "120px",
      display: "flex",
      textAlign: "start",
      gap: "8px",
      alignItems: "center",
    },
  },
  tintedBG: {
    // position: "relative",
    // zIndex: 2,
    background:
      "linear-gradient(0.79deg, #0F0F0F 3.6%, rgba(15, 15, 15, 0.7) 38.78%, rgba(15, 15, 15, 0) 73.28%)",
  },
}));
const RightToLeftAmenity = ({ DATA, modifyGrid }) => {
  const classes = styles();
  const tabletWidth = useMediaQuery("(max-width:900px)");
  const mobileWidth = useMediaQuery("(max-width:500px)");

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
          <Grid
            item
            xs={12}
            sm={12}
            md={!!modifyGrid ? 3 : 4}
            lg={!!modifyGrid ? 4 : 5}
          />
          <Grid
            item
            xs={12}
            sm={12}
            md={!!modifyGrid ? 4 : 3}
            lg={!!modifyGrid ? 3 : 2}
            className={classes.mobileGridSize}
          >
            <p
              className={classes.title}
              style={!!modifyGrid ? { width: "270px" } : null}
            >
              {DATA.title}
            </p>
            <Divider className={classes.divider} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={5}
            className={classes.mobileGridSize}
          >
            <div className={classes.mobileViewIcons}>
              {DATA.icons.map((item, index) => (
                <div key={index} className={classes.singleIconDiv}>
                  <Image src={`${item.childIcon}`} width="48px" height="48px" />
                  <div>
                    <p>{item.text1}</p>
                    <p>{item.text2}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "0px 50px 0px 20px" }}>
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
            </div>
            <div className={classes.desktopViewIcons}>
              {DATA.icons.map((item, index) => (
                <div key={index} className={classes.singleIconDiv}>
                  <Image src={`${item.childIcon}`} width="48px" height="48px" />
                  <div style={{ paddingTop: "8px" }}>
                    <p>{item.text1}</p>
                    <p>{item.text2}</p>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RightToLeftAmenity;
