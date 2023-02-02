import React from "react";
import Image from "next/image";
import { Divider, Grid, List, ListItem, ListItemText } from "@mui/material";
import { MOBILE_MENU_BOT_TEXT, NAVLINKS } from "@/constants/Constants";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const styles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#4f4f4f",
    },
  },
  secondGrid: {
    color: "white",
    width: "fit-content",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      margin: "40px auto",
    },
  },
  secondGridListItem: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      margin: "15px 0px",
    },
  },
  divider: {
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      textAlign: "center",
      maxWidth: "70px",
      borderColor: "black",
    },
  },
  hoursOfWork: {
    color: "#828282",
    paddingLeft: "0px",
    [theme.breakpoints.down("md")]: {
      color: "#F4CF09",
      justifyContent: "center",
    },
  },
  hoursOfWorkListItems: {
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
    margin: "8px 0px",
  },
  hoursOfWorkListItemsTitle: {
    flex: "1",
    color: "#828282",
    [theme.breakpoints.down("md")]: {
      color: "white",
    },
  },
  contacts: {
    color: "#828282",
    [theme.breakpoints.down("md")]: {
      color: "#F4CF09",
      justifyContent: "center",
      marginTop: "20px",
    },
  },
  contactsListItems: {
    display: "flex",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
    margin: "8px 0px",
    gap: "10px",
    alignItems: "flex-start",
  },
  contactsLogo: {
    color: "#828282",
    [theme.breakpoints.down("md")]: {
      color: "white",
    },
  },
}));

const Footer = () => {
  const classes = styles();
  return (
    <div className={classes.footerContainer}>
      <Grid
        container
        style={{ maxWidth: "1440px", margin: "auto", padding: "40px" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          style={{ textAlign: "center" }}
        >
          <Image src="/logoLarge.svg" width="160px" height="140px" />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <List className={classes.secondGrid}>
            <Divider className={classes.divider} />
            {NAVLINKS.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem disablePadding className={classes.secondGridListItem}>
                  <Link href={item.path}>
                    <ListItemText primary={item.name} />
                  </Link>
                </ListItem>
                <Divider className={classes.divider} />
              </React.Fragment>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <List
            style={{
              color: "white",
              width: "200px",
              margin: "auto",
            }}
          >
            <ListItem className={classes.hoursOfWork}>
              {"Hours of Work:"}
            </ListItem>
            {[
              { title: "MO-TH", value: "9 AM - 9 PM" },
              { title: "FR", value: "9 AM - 5 PM" },
              { title: "SA", value: "10 AM - 5 PM" },
            ].map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                className={classes.hoursOfWorkListItems}
              >
                <span className={classes.hoursOfWorkListItemsTitle}>
                  {item.title}
                </span>
                <span style={{ flex: "1" }}>{item.value}</span>
              </ListItem>
            ))}
          </List>
          <Divider className={classes.divider} style={{ marginTop: "40px" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <List
            style={{
              color: "white",
              width: "250px",
              margin: "auto",
            }}
          >
            <ListItem className={classes.contacts}>Contacts:</ListItem>
            {MOBILE_MENU_BOT_TEXT.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                className={classes.contactsListItems}
              >
                <span className={classes.contactsLogo}>{item.icon}</span>
                <span>{item.text}</span>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
