import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./components/Form";
import CalculatedData from "./components/ShowData";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const initialValues = {
  age: "",
  gender: "female",
  feet: "",
  inches: "",
  currentWeight: "",
  goalWeight: "",
  activityMultiplier: "1.2",
  targetDate: "",
};
const Display = () => {
  const [data, setData] = useState({});
  const classes = useStyles();
  const {
    age,
    gender,
    feet,
    inches,
    currentWeight,
    goalWeight,
    activityMultiplier,
    targetDate,
  } = data;
  const height = parseInt(data.feet) * 12 + parseInt(data.inches);
  console.log(data);

  const applyData = (values) => {
    setData(values);
  };

  console.log(data);
  return (
    <Paper className={classes.pageContent}>
      <Form applyData={applyData} />
      {age !== undefined && (
        <CalculatedData
          age={age}
          gender={gender}
          height={height}
          currentWeight={currentWeight}
          goalWeight={goalWeight}
          activityMultiplier={activityMultiplier}
          targetDate={targetDate}
        />
      )}
    </Paper>
  );
};

export default Display;
