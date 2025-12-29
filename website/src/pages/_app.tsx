import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "@/styles/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";

import Head from "next/head";
import { Notifications } from "@mantine/notifications";
import getDivyaNekkantiTheme from "@/styles/theme";

const primaryFont = "Nunito, sans-serif";
const theme = createTheme(getDivyaNekkantiTheme(primaryFont));

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Divya Nekkanti</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <Notifications autoClose={4000} position="top-center" />
      
      <Component {...pageProps} />
      
    </MantineProvider>
  );
}
