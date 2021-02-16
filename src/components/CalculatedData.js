import React from 'react';
import * as calculations from '../services/Calculations';

const CalculatedData = () => {

    let BMR = calculations.calculateBMR(22, 189, 67, 'female')

    debugger
    console.log(BMR)
    return (
        <p>data</p>
    )
}

export default CalculatedData;