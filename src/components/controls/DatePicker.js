import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = ({ name, label, value, onChange, inputVariant }) => {

    const convertDateToEventParams = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker disableToolbar variant="inline" inputVariant={inputVariant}
          label={label}
          format="MMM/dd/yyy"
          name={name}
          value={value}
          onChange={date => onChange(convertDateToEventParams(name, date))}
          />
      </MuiPickersUtilsProvider>
    )
}

export default DatePicker;