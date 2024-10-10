import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Stack } from "@mui/material";

const DashboardCalendar = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        borderRadius: "2rem",
        width: "100%",
        boxShadow: `0px 4px 16px 0px rgba(1, 38, 135, 0.1)`,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </Stack>
  );
};

export default DashboardCalendar;
