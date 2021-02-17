import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const Button = ({ text, size, color, variant, onClick, type }) => {
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      type={type}
      classes={{ root: classes.root }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
