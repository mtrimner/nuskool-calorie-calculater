import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


const DatePicker = ({ name, label, value, onChange, inputVariant, minDate }) => {
  const convertDateToEventParams = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        variant="inline"
        inputVariant={inputVariant}
        label={label}
        format="MM/dd/yyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertDateToEventParams(name, date))}
        minDate={minDate}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
