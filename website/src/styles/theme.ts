import { MantineThemeOverride, createTheme } from "@mantine/core";

export default function getDivyaNekkantiTheme(
  fontFamily: string
): MantineThemeOverride {
  return createTheme({
    fontFamily: fontFamily,
    primaryColor: "dark",
    defaultRadius: "lg",
    white: "#fcfafa",
    black: "#000000",
    shadows: {
      xs: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)",
      sm: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
      md: "0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.02)",
      lg: "0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.02)",
      xl: "0 25px 50px -12px rgba(0,0,0,0.15)",
    },
    components: {
      Button: {
        defaultProps: {
          radius: "xl",
        },
      },
      Paper: {
        defaultProps: {
          radius: "xl",
        },
      },
    },
  });
}
