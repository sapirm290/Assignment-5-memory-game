import React from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import "./components/AppBar/AppBar.css";
import Board from "./components/Board/Board"
import SimpleModal from "./components/Modal/Modal"
import FormDialog from "./components/Modal/Modal"
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

function App() {
  // const useStyles = makeStyles(theme => ({
  //   .AppBar: {
  //     backgroundColor: "green"
  //   }
  // }));
  // const classes = useStyles();
  return (
    <div className="App">
      <AppBar className="AppBar" position="relative"  />
      <Board></Board>
      <FormDialog></FormDialog>
    </div>
  );
}

export default App;
