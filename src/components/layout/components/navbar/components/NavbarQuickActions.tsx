import { IconButton, Stack } from "@mui/material";
import ProfileIntegrationsIcon from "../../../../../icons/navbar/ProfileIntegrationsIcon";
import NotificationsIcon from "../../../../../icons/navbar/NotificationsIcon";

const NavbarQuickActions = () => {
  return (
    <Stack direction="row" alignItems="center" sx={{ gap: "0.75rem" }}>
      <IconButton>
        <ProfileIntegrationsIcon />
      </IconButton>

      <IconButton>
        <NotificationsIcon />
      </IconButton>
    </Stack>
  );
};

export default NavbarQuickActions;
