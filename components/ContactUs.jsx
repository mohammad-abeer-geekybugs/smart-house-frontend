import { Button, Grid, TextField } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Image from "next/image";
import { MOBILE_MENU_BOT_TEXT } from "@/constants/Constants";
import * as Yup from "yup";

const styles = makeStyles((theme) => ({
  container: {
    minHeight: "30vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "10% 0px",
    marginBottom: "50vh",
    [theme.breakpoints.up("525")]: {
      backgroundImage: "url(/contactUsBg.png)",
    },
    [theme.breakpoints.down("525")]: {
      backgroundImage: "url(/contactMobileBg.png)",
    },
  },
  gridContainer: {
    position: "relative",
    maxWidth: "1500px",
    margin: "auto",
    [theme.breakpoints.down("525")]: {
      display: "none",
    },
  },
  iconText: {
    fontSize: "14px",
    color: "#333333",
  },
  numberAndEmailContainer: {
    display: "flex",
    justifyContent: "space-between",
    zIndex: "1",
    margin: "20px 0px",
  },
  numberAndEmail: {
    flex: 1,
    display: "flex",
    gap: "10px",
    zIndex: "1",
    alignItems: "center",
    "& svg": {
      color: "#333333",
    },
  },
  vanDiv: {
    position: "absolute",
    bottom: "0",
    right: "540px",
    [theme.breakpoints.down("1500")]: {
      right: "540px",
    },
    [theme.breakpoints.down("1400")]: {
      right: "510px",
    },
    [theme.breakpoints.down("1300")]: {
      right: "490px",
    },
    [theme.breakpoints.down("1250")]: {
      right: "530px",
    },
    [theme.breakpoints.down("1200")]: {
      right: "515px",
    },
    [theme.breakpoints.down("1150")]: {
      right: "490px",
    },
    [theme.breakpoints.down("1100")]: {
      right: "460px",
    },
    [theme.breakpoints.down("1050")]: {
      right: "430px",
    },
    [theme.breakpoints.down("1025")]: {
      //   right: "400px",
      display: "none",
    },
    /* [theme.breakpoints.down("915")]: {
      right: "380px",
    },
    [theme.breakpoints.down("900")]: {
      display: "none",
    }, */
  },
  contactUsGrid: {
    [theme.breakpoints.up("1250")]: {
      margin: "auto",
      maxWidth: "fit-content",
    },
    [theme.breakpoints.down("1025")]: {
      margin: "auto",
      maxWidth: "fit-content",
    },
  },
  emptyGrid: {
    [theme.breakpoints.down("1025")]: {
      display: "none",
    },
  },
  formDiv: {
    padding: "30px 50px",
    backgroundColor: "white",
    width: "500px",
    [theme.breakpoints.down("1025")]: {
      margin: "auto",
    },
  },
  mobileGridContainer: {
    maxWidth: "80%",
    margin: "auto",
    [theme.breakpoints.up("525")]: {
      display: "none",
    },
  },
}));
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    borderBottomColor: "#f4cf09 !important",
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#f4cf09 !important",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "#f4cf09 !important",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f4cf09 !important",
    },
  },
});
const CssMobileTextField = styled(TextField)({
  background: "#676767 !important",
  "& label.Mui-focused": {
    borderBottomColor: "#f4cf09 !important",
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#f4cf09 !important",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "#f4cf09 !important",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f4cf09 !important",
    },
  },
});

const validateForm = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string().max(11, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const ContactUs = () => {
  const classes = styles();
  const [initialValues] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
  });
  const handleSubmit = (values) => {
    console.log("values => ", values);
  };
  return (
    <div className={classes.container}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={0} sm={0} md={6} lg={6} className={classes.emptyGrid} />

        {/* Form grid */}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={classes.contactUsGrid}
        >
          <div className={classes.formDiv}>
            <div style={{ position: "relative" }}>
              <p style={{ fontSize: "42px", zIndex: 1, position: "relative" }}>
                CONTACT US
              </p>
              <div className={classes.numberAndEmailContainer}>
                <div className={classes.numberAndEmail}>
                  <LocalPhoneOutlinedIcon style={{ color: "#333333" }} />
                  <p className={classes.iconText}>647-693-5688</p>
                </div>
                <div className={classes.numberAndEmail}>
                  <AlternateEmailOutlinedIcon />
                  <p className={classes.iconText}>info@housesmarts.io</p>
                </div>
              </div>
              <div>
                <p>
                  {`We look forward to hearing from you and helping you create a
                  smarter, more connected home.`}
                </p>
              </div>
              <div style={{ position: "absolute", top: "22px", left: "-30px" }}>
                <Image src={"/yellowLine.png"} width="500px" height="50px" />
              </div>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validateForm}
              onSubmit={handleSubmit}
            >
              {(formikProps) => {
                return (
                  <Form>
                    <Grid container style={{ margin: "50px 0px", gap: "10px" }}>
                      <p>Or fill the form:</p>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CssTextField
                          onChange={(e) =>
                            formikProps.setFieldValue(
                              `userName`,
                              e.target.value
                            )
                          }
                          id="custom-css-outlined-input"
                          fullWidth
                          label="Your Name"
                          variant="filled"
                          name="userName"
                        />
                        {formikProps.errors.userName &&
                        formikProps.touched.userName ? (
                          <div style={{ color: "red" }}>
                            {formikProps.errors.userName}
                          </div>
                        ) : null}
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CssTextField
                          onChange={(e) =>
                            formikProps.setFieldValue(`email`, e.target.value)
                          }
                          id="custom-css-outlined-input"
                          fullWidth
                          label="Your email"
                          variant="filled"
                          name="email"
                        />
                        {formikProps.errors.email &&
                        formikProps.touched.email ? (
                          <div style={{ color: "red" }}>
                            {formikProps.errors.email}
                          </div>
                        ) : null}
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CssTextField
                          onChange={(e) =>
                            formikProps.setFieldValue(
                              `phoneNumber`,
                              e.target.value
                            )
                          }
                          id="custom-css-outlined-input"
                          fullWidth
                          label="Your Phone no"
                          variant="filled"
                          name="phoneNumber"
                          type="number"
                        />
                        {formikProps.errors.phoneNumber &&
                        formikProps.touched.phoneNumber ? (
                          <div style={{ color: "red" }}>
                            {formikProps.errors.phoneNumber}
                          </div>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{ marginTop: "40px" }}
                      >
                        <Button
                          type="submit"
                          style={{
                            width: "100%",
                            backgroundColor: "#f4cf09",
                            color: "#333333",
                            fontSize: "20px",
                          }}
                        >
                          SUBMIT
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Grid>
        <div className={classes.vanDiv}>
          <Image src="/contactUsVan.png" width="620px" height="552px" />
        </div>
      </Grid>

      {/* Mobile View Contact Form with Dark theme */}
      <Grid container className={classes.mobileGridContainer}>
        <div style={{ position: "relative" }}>
          <p style={{ fontSize: "32px", color: "white" }}>CONTACT US</p>
          <p style={{ marginTop: "20px", color: "white" }}>
            {`We look forward to hearing from you and helping you create a smarter,
          more connected home.`}
          </p>
          <div style={{ position: "absolute", top: "10px", left: "-20px" }}>
            <Image src={"/yellowDullLine.png"} width="400px" height="50px" />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          {MOBILE_MENU_BOT_TEXT.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "10px",
                color: "white",
                margin: "5px",
                textTransform: "uppercase",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#f4cf09" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validateForm}
            onSubmit={handleSubmit}
          >
            {(formikProps) => {
              return (
                <Form>
                  <Grid container style={{ margin: "50px 0px", gap: "10px" }}>
                    <p style={{ color: "#f4cf09", fontSize: "20px" }}>
                      OR FILL THE FORM:
                    </p>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <CssMobileTextField
                        onChange={(e) =>
                          formikProps.setFieldValue(`userName`, e.target.value)
                        }
                        id="custom-css-outlined-input-mobile"
                        fullWidth
                        label="Your Name"
                        variant="filled"
                        name="userName"
                      />
                      {formikProps.errors.userName &&
                      formikProps.touched.userName ? (
                        <div style={{ color: "red" }}>
                          {formikProps.errors.userName}
                        </div>
                      ) : null}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <CssMobileTextField
                        onChange={(e) =>
                          formikProps.setFieldValue(`email`, e.target.value)
                        }
                        id="custom-css-outlined-input-mobile"
                        fullWidth
                        label="Your email"
                        variant="filled"
                        name="email"
                      />
                      {formikProps.errors.email && formikProps.touched.email ? (
                        <div style={{ color: "red" }}>
                          {formikProps.errors.email}
                        </div>
                      ) : null}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <CssMobileTextField
                        onChange={(e) =>
                          formikProps.setFieldValue(
                            `phoneNumber`,
                            e.target.value
                          )
                        }
                        id="custom-css-outlined-input-mobile"
                        fullWidth
                        label="Your Phone no"
                        variant="filled"
                        name="phoneNumber"
                        type="number"
                      />
                      {formikProps.errors.phoneNumber &&
                      formikProps.touched.phoneNumber ? (
                        <div style={{ color: "red" }}>
                          {formikProps.errors.phoneNumber}
                        </div>
                      ) : null}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      style={{ marginTop: "40px" }}
                    >
                      <Button
                        type="submit"
                        style={{
                          width: "100%",
                          backgroundColor: "#f4cf09",
                          color: "#333333",
                          fontSize: "20px",
                        }}
                      >
                        SUBMIT
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Grid>
    </div>
  );
};

export default ContactUs;
