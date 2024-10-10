import { Stack } from "@mui/material";
import { useState } from "react";
import DarkMoreIcon from "../../../../../icons/navbar/DarkMoreIcon";
import LightModeIcon from "../../../../../icons/navbar/LightModeIcon";

const NavbarDarkLightMode = () => {
  const [mode, setMode] = useState("light");

  const onClickMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Stack
      onClick={onClickMode}
      direction="row"
      alignItems="center"
      sx={{
        cursor: "pointer",
        boxShadow: `0px 0px 2px 0px rgba(0, 0, 0, 0.22)`,
        borderRadius: "2rem",
        background: "rgba(246, 243, 252, 1)",
      }}
    >
      <Stack
        sx={{
          borderRadius: "50%",
          padding: "0.5rem 0.65rem",
          backgroundColor:
            mode === "light" ? "#1F9AA2" : "rgba(246, 243, 252, 1)",
        }}
      >
        <LightModeIcon fill={mode === "dark" ? "#6D7482" : "#fff"} />
      </Stack>
      <Stack
        sx={{
          borderRadius: "50%",
          padding: "0.5rem 0.65rem",
          backgroundColor:
            mode === "dark" ? "#1F9AA2" : "rgba(246, 243, 252, 1)",
        }}
      >
        <DarkMoreIcon fill={mode === "dark" ? "#fff" : "#6D7482"} />
      </Stack>
    </Stack>
  );
};

export default NavbarDarkLightMode;
