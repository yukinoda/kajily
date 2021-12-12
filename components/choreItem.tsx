import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Chore } from "../types/common.types";

interface ChoreItemProps {
  data: Chore;
}

const ChoreItem = ({ data }: ChoreItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box mb={2} key={data.id}>
      <Paper variant="outlined" onClick={handleClick}>
        <Box p={2} display="flex" justifyContent="space-between">
          <Typography variant="body1" alignItems="center" display="flex">
            {data.name}
          </Typography>
          <Avatar />
        </Box>
      </Paper>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar sx={{ bgcolor: "#FF9F1C" }}>D</Avatar>
          Dad
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ bgcolor: "#2EC4B6" }}>M</Avatar>
          Mom
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ bgcolor: "#CBF3F0" }}>Y</Avatar>
          Yumi
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ bgcolor: "#FFBF69" }}>C</Avatar>
          Chiyoko (Grandma)
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ChoreItem;
