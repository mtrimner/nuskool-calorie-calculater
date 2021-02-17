import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  radio: {
    marginTop: 5
  },
}));

const RadioGroup = ({ name, label, value, onChange, items }) => {
  const classes = useStyles();

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              value={item.id}
              control={<Radio color="primary" />}
              label={item.title}
              className={classes.radio}
            />
          );
        })}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
