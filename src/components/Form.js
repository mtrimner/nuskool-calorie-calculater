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
    targetDate: new Date()
  }

const Form = () => {

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const validate = () => {
    let temp = {}
    temp.age = values.age ? "" : "Oops! Please enter your age to get an accurate calculation."
    temp.gender = values.gender ? "" : "Oops! This field is required to get an accurate calculation."
    temp.feet = values.feet ? "" : "Hey! We need to know how tall you are to get an accurate calculation."
    temp.inches = values.inches ? "" : "Hey! We need to know how tall you are to get an accurate calculation."
    temp.currentWeight = values.currentWeight ? "" : "Oops! You forgot to give us your current weight."
    temp.goalWeight = values.goalWeight ? "" : "Oops! We need your goal weight to give you an accurate recommendation."
    temp.targetDate = values.targetDate ? "" : "When do you want to reach your goal?"
    setErrors({
      ...temp
    })

    return Object.values(temp).every(x => x == "")
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    })
  };

  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault()
    if(validate())
      window.alert('testing..')
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container>
      <Grid item xs={6}>
          <Controls.Input
            type="number"
            name='age'
            value={values.age}
            onChange={handleChange}
            label="Age"
            variant="outlined"
            error={errors.age}
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
            error={errors.currentWeight}
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
            error={errors.goalWeight}
          />
      </Grid>
      <Grid item xs={6}>
          <Controls.RadioGroup 
            name="gender"
            value={values.gender}
            onChange={handleChange}
            label="Gender"
            items={genderItems}
            error={errors.gender}
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
            error={errors.feet}
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
            error={errors.inches}
          />
      </Grid>
      <Grid item xs={6}>
          <Controls.DatePicker
            name='targetDate'
            value={values.targetDate}
            onChange={handleChange}
            label="Target Date"
            inputVariant="outlined"
            error={errors.targetDate}
          />
      </Grid>
      <div>
      <Controls.Button
        variant="contained"
        color="primary"
        size="large"
        text="submit"
        type="submit"
      />
      </div>
      </Grid>
    </form>
  )
}

export default Form;
