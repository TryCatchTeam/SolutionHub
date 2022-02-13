import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";

export default function RequestDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Request Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Your skills"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-textarea"
            label="Why are you suitable for this job?"
            placeholder="Brief description"
            fullWidth
            multiline
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
