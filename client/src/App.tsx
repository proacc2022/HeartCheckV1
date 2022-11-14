import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import EvalulateForm from "./Form";
import HowToReadResults from "./HowToReadResults";
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
        <Routes>
          <Route path="/" element={<EvalulateForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/understand" element={<HowToReadResults />} />
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
