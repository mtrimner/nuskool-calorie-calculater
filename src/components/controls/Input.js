import React from 'react';
import { FormControl, OutlinedInput, InputLabel } from '@material-ui/core';

const Input = ({type, id, name, value, onChange, label}) => {
  
    return (
      <FormControl variant="outlined">
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          label={label}
        />
      </FormControl>
    )
}

export default Input;