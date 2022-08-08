import { Box } from "@mui/material";
import React from "react";

function Sidebar() {
  return <Box bgcolor="skyblue" flex={1} sx={{display:{xs:"none",sm:"block"}}}>Sidebar</Box>;
}

export default Sidebar;
