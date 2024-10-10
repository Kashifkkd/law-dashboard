import { Divider, Stack, useTheme } from "@mui/material";
import RunConflictIcon from "../../../icons/RunConflictIcon";
import CustomTypography from "../../../components/typography";
import RedirectIcon from "../../../icons/RedirectIcon";
import FileIcon from "../../../icons/FileIcon";
import WorkstationIcon from "../../../icons/WorkstationIcon";
import SearchIcon from "../../../icons/SearchIcon";
import AdvanceSearchIcon from "../../../icons/AdvanceSeachIcon";
import AssignTaskIcon from "../../../icons/AssignTaskIcon";
import GenerateReportIcon from "../../../icons/GenerateReportIcon";
import BlendImage from "/src/assets/images/BlendImage.png";

const DashboardPrimaryOptions = () => {
  const dashboardPrimaryOptionsList = [
    {
      value: "run_conflict",
      label: "Run Conflict",
      icon: <RunConflictIcon />,
      isDivider: true,
    },
    {
      value: "open_files",
      label: "Open Files",
      icon: <FileIcon />,
    },
    {
      value: "workstation",
      label: "Workstation",
      icon: <WorkstationIcon />,
    },
    {
      value: "quick_search",
      label: "Quick Search",
      icon: <SearchIcon />,
      isDivider: true,
    },
    {
      value: "advance_search",
      label: "Advance Search ",
      icon: <AdvanceSearchIcon />,
      isDivider: true,
    },
  ];

  const dashboardPrimaryMoreOptionsList = [
    {
      value: "assign_task",
      label: "Assign Task",
      icon: <AssignTaskIcon />,
      opacity: 0.85,
      pl: "1rem",
    },
    {
      value: "generate_report",
      label: "Generate Report",
      icon: <GenerateReportIcon />,
      opacity: 0.9,
      pl: 0,
    },
  ];

  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        borderRadius: "2rem",
        padding: "1.25rem 1rem",
        width: "30%",
        boxShadow: `0px 4px 16px 0px rgba(1, 38, 135, 0.1)`,
      }}
    >
      {dashboardPrimaryOptionsList?.map((item) => (
        <>
          <DashboardPrimaryOptionsItem key={item.value} item={item} />
          {item.isDivider && (
            <Divider sx={{ color: "#F5F5F5", mt: "0.25rem", mb: "0.5rem" }} />
          )}
        </>
      ))}

      {dashboardPrimaryMoreOptionsList?.map((item) => (
        <DashboardPrimaryMoreOptionsItem key={item.value} item={item} />
      ))}
    </Stack>
  );
};

export default DashboardPrimaryOptions;

export const DashboardPrimaryOptionsItem = ({ item }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={"space-between"}
      sx={{
        padding: "1rem",
        cursor: "pointer",
        borderRadius: "1rem",
        "&:hover": { backgroundColor: "#fafafa" },
      }}
    >
      <Stack direction="row" alignItems="center" sx={{ gap: "0.75rem" }}>
        <Stack
          sx={{
            padding: "0.75rem",
            borderRadius: "0.5rem",
            backgroundColor: theme.colors.attention,
          }}
        >
          {item.icon}
        </Stack>
        <CustomTypography sx={{ fontSize: "1rem" }}>
          {item.label}
        </CustomTypography>
      </Stack>
      <Stack sx={{ pr: "1rem" }}>
        <RedirectIcon />
      </Stack>
    </Stack>
  );
};

export const DashboardPrimaryMoreOptionsItem = ({ item }) => {
  return (
    <Stack
      sx={{
        overflow: "hidden",
        borderRadius: "1.5rem",
        backgroundImage: `url(${BlendImage})`,
        backgroundSize: "cover",
        mt: "1rem",
        cursor: "pointer"
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          gap: item.value === "assign_task" ? "1.125rem" : "0.5rem",
          padding:
            item.value === "assign_task"
              ? "1.125rem 1rem 1.125rem 2rem"
              : "1.125rem 1rem 0.5rem 1rem",
          flex: 1,
          background: `rgba(31, 154, 162, ${item.opacity})`,
        }}
      >
        {item.icon}
        <CustomTypography
          sx={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}
        >
          {item.label}
        </CustomTypography>
      </Stack>
    </Stack>
  );
};
