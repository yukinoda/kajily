import { createTheme, ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#FF9F1C",
    },
    secondary: {
      main: "#2EC4B6",
    },
  },
};

export const theme = createTheme(themeOptions);
