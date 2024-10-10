import { IconButton, Slider, Stack } from "@mui/material";
import { useState } from "react";
import AddIcon from "../../../../../icons/AddIcon";
import SubstractIcon from "../../../../../icons/SubstractIcon";
import CustomTypography from "../../../../typography";

const NavbarBrightnessProgress = () => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        width: "13rem",
        boxShadow: `0px 0px 2px 0px rgba(0, 0, 0, 0.22)`,
        gap: "0.5rem",
        borderRadius: "2rem",
        padding: "0.35rem 1rem",
        background: "rgba(246, 243, 252, 1)",
      }}
    >
      <IconButton>
        <SubstractIcon />
      </IconButton>
      <Slider
        value={value}
        onChange={handleChange}
        sx={{
          color: "rgba(31, 154, 162, 1)", // Default color
          "& .MuiSlider-thumb": {
            width: "12px", // Reducing the size of the thumb
            height: "12px", // Reducing the size of the thumb
            "&:hover": {
              boxShadow: "0px 0px 0px 8px rgba(31, 154, 162, 0.16)", // Hover effect with light color shade around thumb
            },
          },
          "& .MuiSlider-track": {
            height: "4px", // You can also reduce the height of the track if needed
          },
          "&:hover .MuiSlider-track": {
            backgroundColor: "rgba(31, 154, 162, 0.7)", // Lightening track color on hover
          },
          "& .MuiSlider-rail": {
            height: "4px", // Keeping rail height the same as track
          },
        }}
      />
      <IconButton>
        <AddIcon />
      </IconButton>

      <Stack
        sx={{
          boxShadow: `0px 0px 2px 0px rgba(0, 0, 0, 0.22)`,
          padding: "0.25rem 0.5rem",
          backgroundColor: "#fff",
          borderRadius: "1rem",
        }}
      >
        <CustomTypography sx={{ fontSize: "0.75rem" }}>
          {value}%
        </CustomTypography>
      </Stack>
    </Stack>
  );
};

export default NavbarBrightnessProgress;
