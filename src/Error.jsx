import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Error() {
  return (
    <div style={{ marginTop: 15 }}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">No such place exists!</Alert>
      </Stack>
    </div>
  );
}
