import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
function AppBar(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));
  const classes = useStyles();
  return (
    <div className="AppBar" position="fixed" top="0">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Test your memory
        </Typography>
        <Button color="inherit" onClick={props.onClick}>Start A New Game</Button>
      </Toolbar>
    </div>
  );
}

export default AppBar;
