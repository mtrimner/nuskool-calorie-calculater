import React from 'react';
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText} from '@material-ui/core';

const Select = ({name, label, value, onChange, error=null, variant, options}) => {

    return (
        <FormControl variant={variant}
        {...(error && {error: true})}
        >
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
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Select;