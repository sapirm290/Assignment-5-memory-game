import React from "react";
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
      flexGrow: 1,
      fontWeight:600,
      color:'#A9C1EF'
    },
    btn: {
      backgroundColor:'#A9C1EF',
      color: "#5B4126",
      fontWeight:600
    }
  }));
  const classes = useStyles();
  return (
    <div className="AppBar" position="fixed" top="0">
      <Toolbar variant="dense">
        <Typography variant="h4"
         className={classes.title}>
          Guesses: {props.guesses}
        </Typography>
        <Button color="default" className={classes.btn}  variant="contained" onClick={props.onClick}>Start A New Game</Button>
      </Toolbar>
    </div>
  );
}

export default AppBar;
