import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import Display from "./Display";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Display />
      {/* <Form/>
    <Paper className={classes.paperContent}>
      <Display/>
      <form>
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item xs={6}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="age-component">Age</InputLabel>
              <OutlinedInput
                type="number"
                id="age-component"
                name='age'
                value={values.age}
                onChange={handleChange}
                label="Age"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="age-component">Current Weight</InputLabel>
              <OutlinedInput
                type="number"
                id="age-component"
                name='currentWeight'
                value={values.currentWeight}
                onChange={handleChange}
                label="Current Weight"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="age-component">Goal Weight</InputLabel>
              <OutlinedInput
                type="number"
                id="age-component"
                name='goalWeight'
                value={values.goalWeight}
                onChange={handleChange}
                label="Goal Weight"
              />
            </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name='age'
                  value={values.age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row aria-label="gender" name="gender" value={values.gender} onChange={handleChange} >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Paper> */}
    </>
  );
};

export default App;
