import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxHeight: "100vh",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Navbar />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          overflow: "hidden",
          backgroundColor: "#FAFAFA",
        }}
      >
        <Sidebar />
        <Stack spacing={5} sx={{ width: "100%", overflowY: "auto" }}>
          {children}
          <Outlet />
        </Stack>
      </Box>
    </Box>
  );
};

export default Layout;
