import React from "react";
import { Stack } from "@mui/system";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <CircularProgress color="error" />
    </Stack>
  );
};

export default Loading;
