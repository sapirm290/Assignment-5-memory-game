import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
export default function ClosingDialog(props) {
  const [state, setState] = React.useState({
    name: props.playerName,
    difficulty: "easy",
    theme: "regular",
  });
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);
  const handleDifficultyChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleThemeChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  function handleClose() {
    props.gameChoices(state.name, state.difficulty, state.theme);
    props.closeJustWon();
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Dialog
        open={props.open}
        onClose={handleClose}
        disableBackdropClick={true}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
        {/* {props.playerName} */}
         You win!!!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Well done. you had {props.guesses} incorrect guesses
          </DialogContentText>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="theme">Theme</InputLabel>
            <Select
              native
              value={state.theme}
              onChange={handleThemeChange("theme")}
              inputProps={{
                name: "theme",
                id: "theme"
              }}
            >
              <option value={"animals"}>Animals</option>
              <option value={"special"}>Special</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="difficulty-level">Difficulty</InputLabel>
            <Select
              native
              value={state.difficulty}
              onChange={handleDifficultyChange("difficulty")}
              inputProps={{
                name: "Difficulty",
                id: "difficulty-level"
              }}
            >
              <option value={"easy"}>Easy</option>
              <option value={"medium"}>Medium</option>
              <option value={"hard"}>Hard</option>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            I am ready
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
