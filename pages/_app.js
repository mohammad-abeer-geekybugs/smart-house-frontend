import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import createEmotionCache from "../utils/createEmotionCache";
import theme from "../styles/theme/theme";
import "../styles/globals.css";
// import Head from "next/head";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* <Head>
          <title>Smart Home</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap"
            rel="stylesheet"
          />
        </Head> */}
        {/* ----- NavBar ----- */}
        <Navbar />
        {/* ----- Application ----- */}
        <Component {...pageProps} />
        {/* ----- Footer ----- */}
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
