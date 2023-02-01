import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

import createEmotionCache from "../utils/createEmotionCache";
import theme from "../styles/theme/theme";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
