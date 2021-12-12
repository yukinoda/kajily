import { Box, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";

export const Copyright = (props: any) => {
  return (
    <Box mt={4}>
      <footer className={styles.footer}>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          {...props}
        >
          {"Copyright © Kajily "}

          {new Date().getFullYear()}
          {"."}
        </Typography>
      </footer>
    </Box>
  );
};
