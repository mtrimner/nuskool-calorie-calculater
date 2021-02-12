import React from 'react';
import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from '@material-ui/core';

const Select = ({name, label, value, onChange, variant, options}) => {

    return (
        <FormControl variant={variant}>
          <InputLabel>{label}</InputLabel>
          <MuiSelect
            label={label}
            name={name}
            value={value}
            onChange={onChange}>
              <MenuItem value="">None</MenuItem>
              {
                options.map(
                  item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                )
              }
          </MuiSelect>
        </FormControl>
    )
}

export default Select;