import { Container } from "@mui/system";
import React from "react";
import Form from "./Form";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <Nav />
      <Container maxWidth="sm" sx={{ mt: "1rem" }}>
        <Form />
      </Container>
    </div>
  );
}

export default App;
