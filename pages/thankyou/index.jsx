import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const styles = makeStyles((theme) => ({
  mainContiner: {
    backgroundColor: "white",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#1E1E1E",
      color: "white",
    },
  },
  gridContainer: {
    padding: "250px 0px 200px",
    [theme.breakpoints.down("md")]: {
      padding: "200px 0px 400px",
    },
  },
  mailBoxDiv: {
    position: "absolute",
    bottom: "-5px",
    right: "52%",
    [theme.breakpoints.down("md")]: {
      right: "auto",
      left: "-215px",
    },
  },
  gridItem: {
    position: "relative",
    margin: "0px 40px",
  },
  thankyouTitle: {
    fontSize: "42px",
    lineHeight: "42px",
    zIndex: "1",
    position: "relative",
    [theme.breakpoints.down("1006")]: {
      fontSize: "38px",
    },
    [theme.breakpoints.down("912")]: {
      fontSize: "36px",
    },
    [theme.breakpoints.down("900")]: {
      fontSize: "42px",
    },
    [theme.breakpoints.down("425")]: {
      fontSize: "36px",
    },
    [theme.breakpoints.down("376")]: {
      fontSize: "34px",
    },
    [theme.breakpoints.down("359")]: {
      fontSize: "32px",
    },
    [theme.breakpoints.down("343")]: {
      fontSize: "28px",
    },
  },
  willBeInTouchText: {
    margin: "50px 0px",
    fontSize: "20px",
    lineHeight: "24px",
  },
  buttonDiv: {
    backgroundColor: "#F4CF09",
    maxWidth: "350px",
    padding: "10px 30px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  buttonDivTablet: {
    backgroundColor: "#F4CF09",
    maxWidth: "350px",
    padding: "10px 30px",
    textAlign: "center",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      position: "absolute",
      bottom: "100px",
      left: "35%",
    },
    [theme.breakpoints.down("600")]: {
      left: "33%",
    },
    [theme.breakpoints.down("500")]: {
      left: "28%",
    },
    [theme.breakpoints.down("450")]: {
      left: "26%",
    },
    [theme.breakpoints.down("400")]: {
      left: "24%",
    },
    [theme.breakpoints.down("350")]: {
      left: "18%",
    },
    [theme.breakpoints.down("300")]: {
      left: "12%",
    },
  },
  button: {
    color: "black",
  },
  yellowLineDiv: {
    position: "absolute",
    top: "85px",
    left: "-40px",
    [theme.breakpoints.up("1892")]: {
      top: "40px",
    },
    [theme.breakpoints.down("md")]: {
      top: "60px",
    },
    [theme.breakpoints.down("711")]: {
      top: "90px",
    },
    [theme.breakpoints.down("310")]: {
      top: "130px",
    },
  },
}));

const Thankyou = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.mainContiner}>
        <Grid container className={classes.gridContainer}>
          <div className={classes.mailBoxDiv}>
            <Image src="/mailBoxDesktop.png" width="542px" height="580px" />
          </div>
          <Grid item xs={12} sm={12} md={6} lg={6} />
          <Grid item xs={12} sm={12} md={4} lg={4} className={classes.gridItem}>
            <p className={classes.thankyouTitle}>
              THANK YOU FOR CONTACTING
              <br /> HOUSE SMARTS
            </p>
            <p className={classes.willBeInTouchText}>
              We will be in touch shortly
            </p>
            <div className={classes.buttonDiv}>
              <Link href="/">
                <Button className={classes.button}>BACK TO HOMEPAGE</Button>
              </Link>
            </div>
            <div className={classes.yellowLineDiv}>
              <Image src="/yellowLine.png" width="440px" height="50px" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={2} />
          <div className={classes.buttonDivTablet}>
            <Link href="/">
              <Button className={classes.button}>BACK TO HOMEPAGE</Button>
            </Link>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default Thankyou;
