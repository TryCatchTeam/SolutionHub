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

export default function PostDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Post Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Job Title"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Job Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="paid" control={<Radio />} label="Paid" />
            <FormControlLabel
              value="unpaid"
              control={<Radio />}
              label="Unpaid"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-textarea"
            label="Amount"
            placeholder="Amount"
            fullWidth
            multiline
            variant="standard"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-textarea"
            label="Job Description"
            placeholder="Placeholder"
            fullWidth
            multiline
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Skills Required (Enter skills separated by ',')"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
