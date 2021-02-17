export const calculateBMR = (age, weight, height, gender) => {
  if (gender === "female") {
    return 4.536 * weight + 15.88 * height - 5 * age - 161;
  } else {
    return 4.536 * weight + 15.88 * height - 5 * age + 5;
  }
};

export const calculateTDEE = (BMR, activityMultiplier) => {
  return BMR * activityMultiplier;
};

export const calculateCaloriesForGoalWeight = (targetDate, tdee, currentWeight, goalWeight) => {
    const today = new Date()
    const daysFromTargetDate = parseInt((targetDate.getTime() - today.getTime()) / (1000 * 3600 * 24))
    const goalWeightCaloriesPerDay = (((currentWeight - goalWeight) * 3500) / daysFromTargetDate)
   
    return (tdee - goalWeightCaloriesPerDay)
}
