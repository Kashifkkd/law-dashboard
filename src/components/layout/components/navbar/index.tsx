import { useTheme, Stack } from "@mui/material";
import NavbarBrandLogo from "./components/NavbarBrandLogo";
import CustomTypography from "../../../typography";
import NavbarQuickActions from "./components/NavbarQuickActions";
import NavbarProfile from "./components/NavbarProfile";
import NavbarDarkLightMode from "./components/NavbarDarkLightMode";
import NavbarBrightnessProgress from "./components/NavbarBrightnessProgress";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ backgroundColor: "#fff", padding: "0.9rem" }}
    >
      <Stack direction="row" alignItems="center" sx={{ gap: "4rem" }}>
        <NavbarBrandLogo />

        <CustomTypography sx={{ fontSize: "1.25rem" }}>
          Hey Rick,{" "}
          <span style={{ color: theme.colors.secondary, fontSize: "1rem" }}>
            Welcome to XYZ
          </span>
        </CustomTypography>
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ gap: "1.5rem"}}>
        <NavbarQuickActions />
        <NavbarDarkLightMode/>
        <NavbarBrightnessProgress />
        <NavbarProfile />
      </Stack>
    </Stack>
  );
};

export default Navbar;
