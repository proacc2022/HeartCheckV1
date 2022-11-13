import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="10vh"
    >
      <Typography variant="h6">Made with ❤️ by Team 6</Typography>
    </Box>
  );
};

export default Footer;
