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
          guesses={this.props.gameData.guesses}
          className="AppBar"
          onClick={() => {
            return this.props.gameData.play(
              this.props.gameData.numOfCardRows,
              this.props.gameData.numOfCardCols,
              "regular"
            );
          }}
        />
        <Board gameData={this.props.gameData} />
        <OpeningDialog gameChoices={this.props.gameChoices} />
        <ClosingDialog open={this.props.gameData.justWon} gameChoices={this.props.gameChoices} playerName={this.props.playerName} guesses={this.props.gameData.guesses} closeJustWon={this.props.gameData.closeJustWon}/>
      </div>
    );
  }
}

export default App;
