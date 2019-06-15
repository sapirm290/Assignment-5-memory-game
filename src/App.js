import React, { Component } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import "./components/AppBar/AppBar.css";
import Board from "./components/Board/Board";
import OpeningDialog from "./components/Modal/OpeningDialog";
import ClosingDialog from "./components/Modal/ClosingDialog";

export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <AppBar
          className="AppBar"
          onClick={() => {
            return this.props.gameData.play(this.props.gameData.numOfCardRows, this.props.gameData.numOfCardCols, "regular");
          }}
          position="relative"
        />
        <Board gameData={this.props.gameData} />
        <OpeningDialog />
        {/* <ClosingDialog setopen="true"/> */}
      </div>
    );
  }
}

export default App;
