import {
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomTypography from "../../../components/typography";
import RedirectIcon from "../../../icons/RedirectIcon";
import DocumentIcon from "../../../icons/DocumentIcon";

const DashboardRequisitons = () => {
  const currentDateFitler = "today";

  const dateFilters = [
    { value: "today", label: "Today" },
    { value: "weekly", label: "Weekly" },
    { value: "montly", label: "Montly" },
  ];

  const data = [
    {
      file_name: "Project Meeting Notes Smith",
      file_number: "#53772837384",
    },
    {
      file_name: "Project Meeting Notes Smith",
      file_number: "#53772837384",
    },
    {
      file_name: "Project Meeting Notes Smith",
      file_number: "#53772837384",
    },
  ];

  return (
    <Stack
      sx={{
        // gap: "1rem",
        backgroundColor: "#fff",
        borderRadius: "2rem",
        width: "100%",
        boxShadow: `0px 4px 16px 0px rgba(1, 38, 135, 0.1)`,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "1rem 1.5rem", width: "100" }}
      >
        <CustomTypography sx={{ fontSize: "1.125rem" }}>
          Requisitions
        </CustomTypography>

        <Stack direction="row" alignItems="center" sx={{ gap: "0.5rem" }}>
          {dateFilters.map((item) => (
            <DateFilterBox
              key={item.value}
              item={item}
              isSelected={currentDateFitler === item.value}
            />
          ))}
        </Stack>
      </Stack>
      <Divider />

      <Stack>
        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
          <Table>
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: 0, paddingBottom: 0 }}>
                  FILE NAME
                </TableCell>
                <TableCell sx={{ border: 0, paddingBottom: 0 }}></TableCell>
                <TableCell sx={{ border: 0, paddingBottom: 0 }}></TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#fafafa",
                    },
                    padding: "0 1rem",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ padding: "1rem 1rem" }} // Add padding to the cell
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ gap: "0.75rem" }}
                    >
                      <DocumentIcon />
                      <CustomTypography>{row.file_name}</CustomTypography>
                    </Stack>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ padding: "1rem 1rem" }} // Add padding to the cell
                  >
                    {row.file_number}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ padding: "1.2rem 1rem" }} // Add padding to the cell
                  >
                    <RedirectIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>

      <Divider />

      <Stack alignSelf="flex-end" sx={{ padding: "1rem 1.5rem" }}>
        <CustomTypography
          sx={{
            color: "#1F9AA2",
            textDecoration: "underline",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#0f7a85",
              fontSize: "0.9rem",
            },
          }}
        >
          View All
        </CustomTypography>
      </Stack>
    </Stack>
  );
};

export default DashboardRequisitons;

export const DateFilterBox = ({ item, isSelected }) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        borderRadius: "1rem",
        padding: "0.25rem 0.5rem",
        background: isSelected ? "rgba(31, 154, 162, 0.1)" : "#fff",
        cursor: "pointer",
        transition: "0.3s ease",
        "&:hover": {
          background: "rgba(31, 154, 162, 0.1)",
        },
      }}
    >
      <CustomTypography sx={{ color: isSelected ? "#1F9AA2" : "#6D7482" }}>
        {item.label}
      </CustomTypography>
    </Stack>
  );
};
