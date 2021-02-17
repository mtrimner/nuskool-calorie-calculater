import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Controls from "./controls/Controls";
import { isToday, isTomorrow } from "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "50%",
      margin: theme.spacing(2),
    },
  },
}));

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
];

const activityLevel = [
  { id: "1.2", title: "sedentary(little or no exercise)" },
  { id: "1.375", title: "lightly active (light exercise/sports 1-3 days/week" },
  {
    id: "1.55",
    title: "moderately active (moderate exercise/sports 3-5 days/week",
  },
  { id: "1.725", title: "very active (hard exercise/sports 6-7 days/week" },
  {
    id: "1.9",
    title:
      "very active (very hard exercise/sports & physical job or 2x training",
  },
];

const initialValues = {
  age: "",
  gender: "female",
  feet: "",
  inches: "",
  currentWeight: "",
  goalWeight: "",
  activityMultiplier: "1.2",
  targetDate: new Date(new Date().getTime() + 86400000)
};

const Form = ({ applyData }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  console.log(values.targetDate)
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("age" in fieldValues)
      temp.age = fieldValues.age
        ? ""
        : "Oops! Please enter your age to get an accurate calculation.";
    if ("feet" in fieldValues)
      temp.feet = fieldValues.feet
        ? ""
        : "Hey! We need to know how tall you are to get an accurate calculation.";
    if ("inches" in fieldValues)
      temp.inches = fieldValues.inches
        ? ""
        : "Hey! We need to know how tall you are to get an accurate calculation.";
    if ("currentWeight" in fieldValues)
      temp.currentWeight = fieldValues.currentWeight
        ? ""
        : "Oops! You forgot to give us your current weight.";
    if ("goalWeight" in fieldValues)
      temp.goalWeight = fieldValues.goalWeight
        ? ""
        : "Oops! We need your goal weight to give you an accurate recommendation.";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) applyData(values);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            type="number"
            name="age"
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
            name="currentWeight"
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
            name="goalWeight"
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
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Select
            name="feet"
            value={values.feet}
            onChange={handleChange}
            label="Height(Feet)"
            options={[
              { id: 4, title: 4 },
              { id: 5, title: 5 },
              { id: 6, title: 6 },
              { id: 7, title: 7 },
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
              { id: 0, title: 0 },
              { id: 1, title: 1 },
              { id: 2, title: 2 },
              { id: 3, title: 3 },
              { id: 4, title: 4 },
              { id: 5, title: 5 },
              { id: 6, title: 6 },
              { id: 7, title: 7 },
              { id: 8, title: 8 },
              { id: 9, title: 9 },
              { id: 10, title: 10 },
              { id: 11, title: 11 },
            ]}
            variant="outlined"
            error={errors.inches}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.DatePicker
            name="targetDate"
            value={values.targetDate}
            onChange={handleChange}
            label="Target Date"
            inputVariant="outlined"
            error={errors.targetDate}
            minDate={Date()}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="activityMultiplier"
            value={values.activityMultiplier}
            onChange={handleChange}
            label="Activity Level"
            items={activityLevel}
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
  );
};

export default Form;
