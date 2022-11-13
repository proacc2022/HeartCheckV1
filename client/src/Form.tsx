import { Box, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
        />
      </div>
    </Box>
  );
};

export default Form;
