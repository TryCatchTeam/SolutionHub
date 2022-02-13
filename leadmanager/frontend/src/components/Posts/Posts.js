import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import PostsCard from "./components/PostsCard";
import Filter from "./components/Filter";

function Posts() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container>
        <Grid container spacing={2} sx={{ p: 2, margin: "auto" }}>
          <Grid
            item
            xs={12}
            sm={2}
            md={2}
            component={Paper}
            elevation={6}
            square
            sx={{ borderRadius: "5" }}
          >
            <Filter />
          </Grid>
          <Grid item xs={false} sm={1} md={1} sx={{ borderRadius: "5" }} />
          <Grid
            item
            container
            xs={12}
            sm={9}
            md={9}
            // component={Paper}
            // elevation={1}
            square
            justifyContent="center"
            sx={{ borderRadius: "5" }}
          >
            <PostsCard />
            <PostsCard />
            <PostsCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Posts;
