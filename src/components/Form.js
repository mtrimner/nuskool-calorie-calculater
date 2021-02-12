import React, {useState} from 'react';
import {Grid, FormControl, InputLabel, OutlinedInput, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Controls from './controls/Controls';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiFormControl-root': {
        width:'50%',
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
    feet: '',
    inches: '',
    currentWeight: '',
    goalWeight: '',
    targetDate: ''
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
            name='age'
            value={values.age}
            onChange={handleChange}
            label="Age"
            variant="outlined"
          />
      </Grid>
      <Grid item xs={6}>
          <Controls.Input
            type="number"
            name='currentWeight'
            value={values.currentWeight}
            onChange={handleChange}
            label="Current Weight"
            variant="outlined"
          />
      </Grid>
      <Grid item xs={6}>
          <Controls.Input
            type="number"
            name='goalWeight'
            value={values.goalWeight}
            onChange={handleChange}
            label="Goal Weight"
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
      <Grid item xs={6}>
          <Controls.Select 
            name="feet"
            value={values.feet}
            onChange={handleChange}
            label="Height(Feet)"
            options={[
              {id: 4, title: 4},
              {id: 5, title: 5},
              {id: 6, title: 6},
              {id: 7, title: 7},
            ]}
            variant="outlined"
          />
      </Grid>
      <Grid item xs={6}>
          <Controls.Select 
            name="inches"
            value={values.inches}
            onChange={handleChange}
            label="Height(Inches)"
            options={[
              {id: 0, title: 0},
              {id: 1, title: 1},
              {id: 2, title: 2},
              {id: 3, title: 3},
              {id: 4, title: 4},
              {id: 5, title: 5},
              {id: 6, title: 6},
              {id: 7, title: 7},
              {id: 8, title: 8},
              {id: 9, title: 9},
              {id: 10, title: 10},
              {id: 11, title: 11},
            ]}
            variant="outlined"
          />
      </Grid>
      <Controls.Checkbox
        name='targetDate'
        value={values.targetDate}
        onChange={handleChange}
        label="Target Date"
        inputVariant="outlined"
      </Grid>
    </form>
  )
}

export default Form;
