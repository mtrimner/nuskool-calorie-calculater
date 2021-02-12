import React, {useState} from 'react';
import {Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Form from './components/Form';

const initialValues = {
    age: '',
    gender: 'female',
    height: '',
    currentWeight: '',
    goalWeight: ''
  }

  const useStyles = makeStyles(theme => ({
      pageContent: {
          margin: theme.spacing(5),
          padding: theme.spacing(3)
      }
  }))
const Display = () => {
  const [values, setValues] = useState(initialValues)
  const classes = useStyles();

  return (
    <Paper className={classes.pageContent}>
      <Form />
    </Paper>
  )
}

export default Display;