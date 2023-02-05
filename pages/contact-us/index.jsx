import ContactUs from "@/components/ContactUs";
import { makeStyles } from "@mui/styles";
import React from "react";
const styles = makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "55px 0px 0px",
    },
  },
}));
const index = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <ContactUs contactUsPage={true} />
    </div>
  );
};

export default index;
