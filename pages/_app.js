import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import createEmotionCache from "../utils/createEmotionCache";
import theme from "../styles/theme/theme";
import "../styles/globals.css";
import Head from "next/head";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Head>
        <title>House Smarts</title>
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* ----- NavBar ----- */}
          <Navbar />
          {/* ----- Application ----- */}
          <Component {...pageProps} />
          {/* ----- Footer ----- */}
          <Footer />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MyApp;
