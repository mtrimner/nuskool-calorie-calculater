import React from 'react';
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const RadioGroup = ({name, label, value, onChange, items}) => {
console.log(value)
    return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
        <MuiRadioGroup row name={name} value={value} onChange={onChange} >
            {
              items.map((item, index) => {
                return <FormControlLabel key={index} value={item.id} control={<Radio />} label={item.title} />
              })
            }

     </MuiRadioGroup>
    </FormControl>
    )
}

export default RadioGroup;