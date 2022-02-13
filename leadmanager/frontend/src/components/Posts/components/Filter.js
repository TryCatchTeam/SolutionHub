import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Filter() {
  return (
    <div style={{ margin: "auto" }}>
      <span className="row a-title-small a-row-wrapper">Filter by</span>
      <div className="row a-row-wrapper">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" className="a-title">
            <strong>Job Type</strong>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group1"
            className="ms-2"
          >
            <FormControlLabel
              value="all"
              control={<Radio size="small" />}
              label="All"
              className="a-radio-title"
            />
            <FormControlLabel
              value="male"
              control={<Radio size="small" />}
              label="Paid"
              className="a-radio-title"
            />
            <FormControlLabel
              value="other"
              control={<Radio size="small" />}
              label="Unpaid"
              className="a-radio-title"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="row a-row-wrapper">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" className="a-title">
            <strong>Organisation</strong>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="allOrgs"
            name="radio-buttons-group1"
            className="ms-2"
          >
            <FormControlLabel
              value="allOrgs"
              control={<Radio size="small" />}
              label="All"
              className="a-radio-title"
            />
            <FormControlLabel
              value="yourOrgs"
              control={<Radio size="small" />}
              label="Yours Only"
              className="a-radio-title"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default Filter;
