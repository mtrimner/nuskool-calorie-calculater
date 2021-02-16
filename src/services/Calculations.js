

export const calculateBMR = (age, weight, height, gender) => {
    if (gender === "female") {
        return ((4.536 * weight) + (15.88 * height) - (5 * age) - 161)
        
    } else {
        return ((4.536 * weight) + (15.88 * height) - (5 * age) + 5)
        
    }
}

export const calculateTDEE = (BMR, activityMultiplier) => {
    return (BMR * activityMultiplier)
}