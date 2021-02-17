import React from "react";
import {
  Typography,
  Divider,
  Card as MuiCard,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    spacing: 10,
  },
  list: {
    padding: "20px",
  },
  content: {
    padding: "20px",
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const Card = ({ title, data, units, content }) => {
  const classes = useStyles();
  return (
    <MuiCard className={classes.root} raised={true}>
      <CardHeader title={title} className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h4" align="center">
          {data}
        </Typography>
        <Typography align="center">{units}</Typography>
      </CardContent>
      <Divider variant="middle" />
      <Typography align="center" className={classes.content}>{content}</Typography>
    </MuiCard>
  );
};

export default Card;
