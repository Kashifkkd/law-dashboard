import { useTheme, Stack, IconButton } from "@mui/material";
import HomeIcon from "../../../../icons/sidebar/HomeIcon";
import IntegrationIcon from "../../../../icons/sidebar/IntegrationIcon";
import UsersIcon from "../../../../icons/sidebar/UsersIcon";
import SettingsIcon from "../../../../icons/navbar/SettingsIcon";
import { useState } from "react";
import ExpandLessIcon from "../../../../icons/ExpandLessIcon";
import ExpandMoreIcon from "../../../../icons/ExpandMoreIcon";
import CustomTypography from "../../../typography";

type SidebarItemType = {
  value: string;
  label: string;
  icon: JSX.Element;
};

const Sidebar = () => {
  const theme = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

  const selected = "home";

  const handleExpand = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  const sidebarTopItems: SidebarItemType[] = [
    {
      value: "home",
      label: "Home",
      icon: <HomeIcon />,
    },
    {
      value: "integrations",
      label: "Integrations",
      icon: <IntegrationIcon />,
    },
    {
      value: "users",
      label: "Users",
      icon: <UsersIcon />,
    },
  ];

  const sidebarBottomItems: SidebarItemType[] = [
    {
      value: "settings",
      label: "Settings",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <Stack sx={{ padding: "1rem", position: "relative" }}>
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{
          backgroundColor: theme.colors.attention, // Adjust to the color you need
          padding: "0.75rem",
          borderRadius: isSidebarExpanded ? "25px" : "50px", // Ensure the ends are rounded
          position: "relative",
          height: "100vh", // Sidebar takes full height
          overflow: "hidden",
          "::before, ::after": {
            content: '""',
            position: "absolute",
            width: "100px",
            height: "100px",
            backgroundColor: theme.colors.attention, // Same background as the sidebar
            borderRadius: "50%", // Circular shape
          },
          "::before": {
            top: "-50px", // Adjust to have the top circle
            left: "-10px", // Center it horizontally
          },
          "::after": {
            bottom: "-50px", // Adjust to have the bottom circle
            left: "-10px", // Center it horizontally
          },
        }}
      >
        {/* Top items */}
        <Stack
          alignItems={!isSidebarExpanded ? "center" : "flex-start"}
          sx={{ gap: "1rem", zIndex: 1 }}
        >
          {sidebarTopItems.map((item) => (
            <SidebarItem
              key={item.value}
              item={item}
              isSelected={item.value === selected}
              isSidebarExpanded={isSidebarExpanded}
            />
          ))}
        </Stack>

        {/* Bottom items */}
        <Stack
          alignItems={!isSidebarExpanded ? "center" : "flex-start"}
          sx={{ gap: "1rem", zIndex: 1 }}
        >
          {sidebarBottomItems.map((item) => (
            <SidebarItem
              key={item.value}
              item={item}
              isSelected={item.value === selected}
              isSidebarExpanded={isSidebarExpanded}
            />
          ))}
        </Stack>
      </Stack>
      <IconButton
        onClick={handleExpand}
        disableRipple
        sx={{
          position: "absolute",
          bottom: "50%", // Adjust to position the button outside the sidebar
          left: isSidebarExpanded ? "83%" : "70%", // Center horizontally based on button size
          backgroundColor: "#fff",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          boxShadow: theme.shadows[3],
          zIndex: 2,
        }}
      >
        {isSidebarExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
    </Stack>
  );
};

export default Sidebar;

type SidebarItemProps = {
  item: SidebarItemType;
  isSelected: boolean;
  isSidebarExpanded: boolean;
};

export const SidebarItem = ({
  item,
  isSelected,
  isSidebarExpanded,
}: SidebarItemProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        gap: isSelected ? "0.5rem" : "0.25rem",
        padding: isSelected ? "0.5rem 0.5rem 0.5rem 0.5rem" : 0,
        background: isSelected && isSidebarExpanded ? "#2AA8B0" : "inherit",
        borderRadius: isSelected ? "2rem" : 0,
        cursor: "pointer",
        "&:hover": {
          background: isSidebarExpanded ? "#2AA8B0" : "",
          borderRadius: "2rem",
        },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: "0.65rem",
          borderRadius: "50%",
          backgroundColor: isSelected ? "#fff" : "inherit",
          "&:hover": {
            backgroundColor: !isSidebarExpanded ? "#fff" : "",
          },
        }}
      >
        {item?.icon}
      </Stack>
      {isSidebarExpanded && (
        <CustomTypography
          sx={{ color: isSelected ? "#fff" : "#A6D9DC", pr: "1.25rem" }}
        >
          {item.label}
        </CustomTypography>
      )}
    </Stack>
  );
};
