import React from "react";
import { Grid } from "@material-ui/core";
import Controls from "./controls/Controls";
import * as calculations from "../services/Calculations";

const ShowData = ({
  age,
  currentWeight,
  goalWeight,
  height,
  gender,
  activityMultiplier,
  targetDate,
}) => {
  let BMR = parseInt(
    calculations.calculateBMR(age, currentWeight, height, gender)
  );
  
  let TDEE = parseInt(calculations.calculateTDEE(BMR, activityMultiplier));
  //   let daysFromTargetDate = parseInt((targetDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24))
  let caloriesForGoal = parseInt(
    calculations.calculateCaloriesForGoalWeight(
      targetDate,
      TDEE,
      currentWeight,
      goalWeight
    )
  );

  console.log(BMR, TDEE, age, currentWeight, goalWeight, height, gender);
  console.log(caloriesForGoal);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={4}>
        <Controls.Card
          data={BMR}
          units="calories/day"
          title="BMR"
          content="The number of calories your body burns to perform basic life sustaining tasks."
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Controls.Card
          data={TDEE}
          units="calories/day"
          title="TDEE"
          content="Total number of calories burned per day. Consists of BMR x Activity Level."
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Controls.Card
          data={caloriesForGoal}
          units="calories/day"
          title="Daily Calorie Goal"
          content={`The number of calories you should consume per day to reach your goal.`}
        />
      </Grid>
    </Grid>
  );
};

export default ShowData;
