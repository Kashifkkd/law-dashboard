import { Stack } from "@mui/material";
import CustomTypography from "../../../../typography";
import BrandLogo from "/src/assets/images/BrandLogo.png";

const NavbarBrandLogo = () => {
  return (
    <Stack direction="row" alignItems="center" sx={{ gap: "0.5rem" }}>
      <img
        src={BrandLogo}
        alt={"brand-logo"}
        style={{ height: "3rem", width: "3rem", objectFit: "contain" }}
      />

      <CustomTypography sx={{ fontSize: "1.75rem", fontWeight: "600" }}>
        Logo
      </CustomTypography>
    </Stack>
  );
};

export default NavbarBrandLogo;
