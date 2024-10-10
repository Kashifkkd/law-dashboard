import { useTheme, Stack, CircularProgress } from "@mui/material";


const BoxCircularLoader = ({ sx }) => {
  const theme = useTheme();
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ flex: 1, ...sx }}>
      <CircularProgress sx={{ color: theme.colors.secondary }} />
    </Stack>
  );
};

export default BoxCircularLoader;
