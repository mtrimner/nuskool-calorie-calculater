import React from 'react';
import * as calculations from '../services/Calculations';

const ShowData = ({age, currentWeight, height, gender}) => {

    let BMR = calculations.calculateBMR(age, currentWeight, height, gender)
    console.log(BMR, age, currentWeight, height, gender)
    return (
        <p>data</p>
    )
}

export default ShowData;