import { Avatar, IconButton, Stack } from "@mui/material";
import ProfileImage from "/src/assets/images/ProfileImage.png";
import ExpandDownIcon from "../../../../../icons/ExpandDownIcon";

const NavbarProfile = () => {
  return (
    <Stack direction="row" alignItems="center" sx={{ gap: "0.25rem" }}>
      <Avatar alt="profile-image" src={ProfileImage} />
      <IconButton>
        <ExpandDownIcon />
      </IconButton>
    </Stack>
  );
};

export default NavbarProfile;
