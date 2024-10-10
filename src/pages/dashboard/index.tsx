import { Stack } from "@mui/material";
import DashboardPrimaryOptions from "./components/DashboardPrimaryOptions";
import DashboardClosings from "./components/DashboardClosings";
import DashboardRequisitons from "./components/DashboardRequisitons";
import DashboardCalendar from "./components/DashboardCalendar";
import DashboardHelpCenter from "./components/DashboardHelpCenter";

const Dashboard = () => {
  return (
    <Stack
      direction="row"
      sx={{ flex: 1, padding: "1.5rem 1rem", gap: "1rem", }}
    >
      <DashboardPrimaryOptions />

      <Stack sx={{ flex: 1, gap: "1rem" }}>
        <DashboardClosings />
        <DashboardRequisitons />
      </Stack>

      <Stack sx={{ gap: "1rem" }}>
        <DashboardCalendar />
        <DashboardHelpCenter />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
