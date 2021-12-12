import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../../themes/theme";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box p={4}>{children}</Box>
    </ThemeProvider>
  );
};

export default DefaultLayout;
