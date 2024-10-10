import { CircularProgress, Stack, SxProps, useTheme } from "@mui/material";
import CustomTypography from "../typography";

type PageLoaderType = {
  page?: string;
  customTitle?: string;
  sx?: SxProps;
};

const PageLoader = ({ customTitle, sx }: PageLoaderType) => {
  const theme = useTheme();

  const message = customTitle ? customTitle : "Please hold back, loading...";

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ flex: 1, gap: "1rem", height: "100%", minHeight: "100%", ...sx }}
    >
      <CircularProgress thickness={5} sx={{ color: "#616ADA" }} />
      <CustomTypography
        variant="xxlSemibold"
        sx={{ color: theme.colors.secondary }}
      >
        {message}
      </CustomTypography>
    </Stack>
  );
};

export default PageLoader;
