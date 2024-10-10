import { createTheme } from "@mui/material/styles";

type CustomColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  text_primary: string;
  text_secondary: string;
  text_tertiary: string;
  positive: string;
  negative: string;
  neutral: string;
  attention: string;
};

type CustomFontWeight = {
  primary: number;
  secondary: number;
  tertiary: number;
  bold: number;
  logo: number;
};

declare module "@mui/material/styles" {
  interface Theme {
    colors: CustomColors;
    fontWeights: CustomFontWeight;
  }

  interface ThemeOptions {
    colors?: CustomColors;
    fontWeights?: CustomFontWeight;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#333C49",
    },
    secondary: {
      main: "#ff4081",
    },
    error: {
      main: "#D21119",
    },
    success: {
      main: "#0EAD1E",
    },
    warning: {
      main: "#FF4B20",
    },
    background: {
      default: "#F5F6F7",
    },
  },
  colors: {
    primary: "#333C49",
    secondary: "#6D7482",
    tertiary: "#F6B11C",
    text_primary: "#091E42",
    text_secondary: "#555770",
    text_tertiary: "rgba(85, 87, 112, 0.50)",
    positive: "#0EAD1E",
    negative: "#D21119",
    neutral: "#32C4F2",
    attention: "#1F9AA2"
  },
  fontWeights: {
    secondary: 400,
    primary: 500,
    tertiary: 600,
    bold: 700,
    logo: 800,
  },
  typography: {
    fontFamily: "Poppins,sans-serif",
    fontSize: 14,
  },
});
