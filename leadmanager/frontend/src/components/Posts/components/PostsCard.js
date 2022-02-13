import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Avatar } from "@mui/material";
import { Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function PostsCard() {
  return (
    <Paper
      elevation={15}
      sx={{
        p: 2,
        margin: "10px",
        maxWidth: 800,
        minWidth: "30vw",
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={12} sm container>
          <Grid item xs={12} sm={12} md={12} xs container direction="column">
            <Grid item xs container spacing={1}>
              <Grid container style={{ marginLeft: "5px" }}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={9}
                  direction="column"
                  // spacing={2}
                >
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    style={{}}
                  >
                    <span className="a-title">Intern Req for ML/AI</span>
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={1}>
                  <Chip label="Paid" color="warning" />
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                  <Chip
                    avatar={
                      <Avatar alt="Anuj" src="/static/images/avatar/1.jpg" />
                    }
                    label="Avatar"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" style={{ marginLeft: "5px" }}>
                <Grid item xs={9} sm={9} md={9}>
                  <Typography variant="body2" gutterBottom>
                    Organisation: National Institute of Tech, Patna
                  </Typography>
                </Grid>
                <Grid item className="a-card-post-date">
                  <Typography
                    variant="caption"
                    gutterBottom
                    color="text.primary"
                  >
                    Posted on: 7th Feb, 2020
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography
                    variant="subtitle"
                    style={({ fontSize: "15px" }, { padding: "10px" })}
                  >
                    <span className="a-secondary-title">Offer:</span>
                    <span style={{ marginLeft: "5px" }}> ₹250</span>
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  <Typography
                    style={({ fontSize: "15px" }, { padding: "10px" })}
                    className="a-secondary-title"
                  >
                    Skills:
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9} md={9}>
                  <Box
                    sx={{
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Chip label="Angular" sx={{ margin: "2px" }} />
                    <Chip label="React" sx={{ margin: "2px" }} />
                    <Chip label="C++" sx={{ margin: "2px" }} />
                    <Chip label="Java" sx={{ margin: "2px" }} />
                    <Chip label="Angular" sx={{ margin: "2px" }} />
                    <Chip label="React" sx={{ margin: "2px" }} />
                    <Chip label="C++" sx={{ margin: "2px" }} />
                    <Chip label="Java" sx={{ margin: "2px" }} />
                    <Chip label="Angular" sx={{ margin: "2px" }} />
                    <Chip label="React" sx={{ margin: "2px" }} />
                    <Chip label="C++" sx={{ margin: "2px" }} />
                    <Chip label="Java" sx={{ margin: "2px" }} />
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={10}>
                <Grid container>
                  <Grid item xs={12} sm={4} md={3}>
                    <Typography
                      style={({ fontSize: "15px" }, { padding: "10px" })}
                      className="a-secondary-title"
                    >
                      Description:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    Need a person who has great skills in front end as well as
                    backend, with prior knowledge of any one programming
                    language...
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <Link to='/skcomponents/Project'><button className="btn btn-primary">Details</button></Link>
                  
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
