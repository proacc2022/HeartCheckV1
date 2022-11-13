import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";
import React from "react";
import Form from "./Form";
import Nav from "./Nav";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Nav />
        <Container maxWidth="sm" sx={{ mt: "1rem" }}>
          <Form />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
