import { Box } from "@mui/material";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <Box p={4}>{children}</Box>;
};

export default DefaultLayout;
