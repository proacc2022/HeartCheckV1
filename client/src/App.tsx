import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import EvalulateForm from "./Form";
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
      <Nav />
      <Container maxWidth="sm" sx={{ mt: "2rem" }}>
        <EvalulateForm />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
