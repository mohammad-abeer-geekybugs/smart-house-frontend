import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import { Divider, Grid, useMediaQuery } from "@mui/material";

const styles = makeStyles((theme) => ({
  main: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "left",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "center",
    },
  },
  container: {
    maxWidth: "1440px",
    margin: "auto",
    padding: "40px 0px",
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
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      lineHeight: "34px",
    },
  },
  mobileGridSize: {
    maxWidth: "80%",
    margin: "auto",
  },
  yellowText: {
    color: "#f4cf09",
    lineHeight: "24px",
    margin: "40px 0px",
  },
}));
const RightToLeftAmenity = ({ DATA }) => {
  const classes = styles();
  const matches = useMediaQuery("(max-width:500px)");
  console.log("matches =>", matches);

  return (
    <div
      className={classes.main}
      style={
        !matches
          ? { backgroundImage: `url(${DATA.bgImage})` }
          : { backgroundImage: `url(${DATA.bgMobile})` }
      }
    >
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={5} />
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={2}
            className={classes.mobileGridSize}
          >
            <p className={classes.title}>{DATA.title}</p>
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {DATA.icons.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: "100px",
                    textAlign: "center",
                    color: "white",
                    margin: "10px 0px",
                  }}
                >
                  <Image src={`${item.childIcon}`} width="48px" height="48px" />
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
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
