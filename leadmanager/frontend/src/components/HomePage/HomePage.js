import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CssBaseline } from "@mui/material";

function HomePage() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container>
        This is HomePage
        <Link to="/Auth/SignInSide">
          <Button variant="contained">Sign In</Button>{" "}
        </Link>
      </Container>
    </>
  );
}

export default HomePage;
