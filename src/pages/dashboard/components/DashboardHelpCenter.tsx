import { Stack } from "@mui/material";
import HelpCenter from "/src/assets/images/HelpCenter.png";
import SupportIcon from "../../../icons/SupportIcon";
import CustomTypography from "../../../components/typography";
import RedirectIcon from "../../../icons/RedirectIcon";

const DashboardHelpCenter = () => {
  const helpButtons = [
    { value: "remote_support", label: "Remote Support" },
    { value: "chat_support_team", label: "Chat With the Support Team" },
    { value: "chat_staff_member", label: "Chat With Staff Members" },
  ];
  return (
    <Stack
      sx={{
        borderRadius: "2rem",
        flex: 1,
        width: "100%",
        overflow: "auto",
        backgroundImage: `url(${HelpCenter})`,
        backgroundSize: "cover",
        boxShadow: `0px 4px 16px 0px rgba(1, 38, 135, 0.1)`,
      }}
    >
      <Stack
        sx={{
          padding: "1.25rem",
          flex: 1,
          background: "rgba(31, 154, 162, 0.8)",
          gap: "1rem",
        }}
      >
        <Stack sx={{ gap: "0.125rem" }}>
          <SupportIcon />
          <CustomTypography
            sx={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700 }}
          >
            Need Help?
          </CustomTypography>
          <CustomTypography
            sx={{ color: "#fff", fontSize: "1rem", width: "70%" }}
          >
            We are always here for your support.
          </CustomTypography>
        </Stack>

        <Stack sx={{ gap: "0.5rem" }}>
          {helpButtons.map((button) => (
            <HelpCenterButton key={button.value} item={button} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DashboardHelpCenter;

export const HelpCenterButton = ({ item }: any) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        gap: "0.5rem",
        padding: "0.75rem 1.25rem",
        background: "#fff",
        width: "fit-content",
        borderRadius: "2.25rem",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <CustomTypography>{item.label}</CustomTypography>
      <RedirectIcon fill={"rgba(31, 154, 162, 1)"} />
    </Stack>
  );
};
