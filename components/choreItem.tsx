import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { sampleUsers } from "../mock-data/sampleUsers";
import { Chore, User } from "../types/common.types";

interface ChoreItemProps {
  data: Chore;
}

const ChoreItem = ({ data }: ChoreItemProps) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("checkedTasks");
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    if (typeof window !== "undefined") {
      const checkedTasks = localStorage.getItem("checkedTasks");
      if (!(checkedTasks && checkedTasks.includes(data.id))) {
        localStorage.setItem(
          "checkedTasks",
          JSON.stringify(
            checkedTasks ? [...JSON.parse(checkedTasks), data.id] : [data.id]
          )
        );
      }
    }
    handleClose();
  };

  return (
    <Box mb={2} key={data.id}>
      <Paper variant="outlined" onClick={handleClick}>
        <Box p={2} display="flex" justifyContent="space-between">
          <Typography variant="body1" alignItems="center" display="flex">
            {data.name}
          </Typography>
          {selectedUser ? (
            <Avatar sx={{ width: 32, height: 32, bgcolor: selectedUser.color }}>
              {selectedUser.shortName}
            </Avatar>
          ) : (
            <Avatar sx={{ width: 32, height: 32 }} />
          )}
        </Box>
      </Paper>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
        {sampleUsers.map(user => (
          <MenuItem key={user.id} onClick={() => handleUserSelect(user)}>
            <Avatar sx={{ bgcolor: user.color }}>{user.shortName}</Avatar>
            {user.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default ChoreItem;
