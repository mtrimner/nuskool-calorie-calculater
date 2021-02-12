import React from 'react';
import { FormControl, OutlinedInput, InputLabel } from '@material-ui/core';

const Input = ({type, name, value, onChange, label, variant}) => {
  
    return (
      <FormControl variant={variant}>
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          label={label}
        />
      </FormControl>
    )
}

export default Input;