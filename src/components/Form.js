import React, {useState} from 'react';
import {Grid, FormControl, InputLabel, OutlinedInput, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Controls from './controls/Controls';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiFormControl-root': {
        // width:'50%',
        margin:theme.spacing(2)
      }
    }
}))

const genderItems = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
]

const initialValues = {
    age: '',
    gender: 'female',
    height: '',
    currentWeight: '',
    goalWeight: ''
  }

const Form = () => {

  const [values, setValues] = useState(initialValues)
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    })
  };

  const classes = useStyles()
  return (
    <form className={classes.root}>
      <Grid container>
      <Grid item xs={6}>
          <Controls.Input
            type="number"
            id="age-component"
            name='age'
            value={values.age}
            onChange={handleChange}
            label="Age"
            variant="outlined"
          />
      </Grid>
      <Grid item xs={6}>
          <Controls.RadioGroup 
            name="gender"
            value={values.gender}
            onChange={handleChange}
            label="Gender"
            items={genderItems}
          />
      </Grid>

      </Grid>
    </form>
  )
}

export default Form;
