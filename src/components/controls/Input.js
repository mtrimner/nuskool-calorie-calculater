import React from "react";
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";

const Input = ({
  type,
  name,
  value,
  onChange,
  label,
  error = null,
  variant,
}) => {
  return (
    <FormControl variant={variant} {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
        {...(error && { error: true })}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Input;
