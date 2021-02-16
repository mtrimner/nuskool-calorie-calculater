import React, {useState} from 'react';
import {Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Form from './components/Form';
import CalculatedData from './components/CalculatedData'


  const useStyles = makeStyles(theme => ({
      pageContent: {
          margin: theme.spacing(5),
          padding: theme.spacing(3)
      }
  }))

const Display = () => {
  const [data, setData] = useState({})
  const classes = useStyles();
  const height = ((data.feet * 12) + data.inches)


  const applyData = (values) => {

    setData(values)
  }

  return (
    <Paper className={classes.pageContent}>
      <Form applyData={applyData}/>
      <CalculatedData />
    </Paper>
    
  )
}

export default Display;