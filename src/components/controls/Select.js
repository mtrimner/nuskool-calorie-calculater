import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  NativeSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const Select = ({
  name,
  label,
  value,
  onChange,
  error = null,
  variant,
  options,
}) => {
  return (
    <FormControl variant={variant} {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect native label={label} name={name} value={value} onChange={onChange}>
        <option value=""/>
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
