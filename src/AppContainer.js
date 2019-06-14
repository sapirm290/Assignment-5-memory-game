import React, { Component } from "react";
import App from "./App";
import { throwStatement } from "@babel/types";

export class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      board: [],
      chooseOrMatchCard: true,
      lastCardIndex: -1,
      readyToPick: true,
      numOfCardRows: 3,
      numOfCardCols: 4
    };
    this.play(this.state.numOfCardRows, this.state.numOfCardCols, "regular");
  }

  play(x, y, theme) {
    var shuffledArray = this.createRandomDoubleArray(x * y);
    this.state.board = [];
    for (var index = 0; index < x * y; index++) {
      this.state.board.push({
        pairValue: shuffledArray[index],
        found: false,
        face: false
      });
    }
    this.setState({board: this.state.board});
  }
  createRandomDoubleArray(length) {
    for (var a = [], i = 0; i < length; ++i) a[i] = i;
    function shuffle(array) {
      var tmp,
        current,
        top = array.length;
      if (top)
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      return array;
    }
    a = shuffle(a);
    return a.map(x => Math.floor(x / 2));
  }

  didWin() {
    console.log(this.state.board);
    var length = this.state.numOfCardCols * this.state.numOfCardRows;
    for (let index = 0; index < length; index++) {
      if (!this.state.board[index].found) return false;
    }

    return true;
  }
  chooseCard(cardIndex) {
    if (
      !this.state.readyToPick ||
      cardIndex === this.state.lastCardIndex ||
      this.state.board[cardIndex].found === true
    )
      return;
    if (this.state.chooseOrMatchCard) {
      console.log(this.state.board[cardIndex].pairValue);

      this.setState({ chooseOrMatchCard: !this.state.chooseOrMatchCard });
      this.setState({ lastCardIndex: cardIndex });
      this.state.board[cardIndex].face = !this.state.board[cardIndex].face;
      this.setState({ board: this.state.board });
    } else {
      console.log(this.state.board[cardIndex].pairValue);
      this.state.board[cardIndex].face = !this.state.board[cardIndex].face;
      this.setState({ board: this.state.board });
      this.state.chooseOrMatchCard = !this.state.chooseOrMatchCard;

      if (
        this.state.lastCardIndex !== cardIndex &&
        this.state.board[cardIndex].pairValue ===
          this.state.board[this.state.lastCardIndex].pairValue
      ) {
        console.log("nice");

        this.state.board[cardIndex].found = true;
        this.state.board[this.state.lastCardIndex].found = true;
        if (this.didWin()) {
          console.log("Well Played!");
          this.play(
            this.state.numOfCardRows,
            this.state.numOfCardCols,
            "regular"
          );
        } else {
          this.state.readyToPick = false;
          const backToPick = () => {
            this.state.readyToPick = !this.state.readyToPick;
          };
          setTimeout(backToPick, 1000);
        }
      } else {
        console.log("needs flipping");
        this.state.readyToPick = false;
        const flipBack = () => {
          this.state.board[cardIndex].face = !this.state.board[cardIndex].face;
          this.state.board[this.state.lastCardIndex].face = !this.state.board[
            this.state.lastCardIndex
          ].face;
          this.setState({ board: this.state.board });
          this.state.readyToPick = !this.state.readyToPick;
          this.setState({ lastCardIndex: -1 });
        };
        setTimeout(flipBack, 1000);
      }
    }
  }

  render() {
    const GAMEDATA = {
      chooseCard: this.chooseCard.bind(this),
      board: this.state.board,
      numOfCardRows: this.state.numOfCardRows,
      numOfCardCols: this.state.numOfCardCols,
      play: this.play.bind(this)
    };
    return <App gameData={GAMEDATA} />;
  }
}

export default AppContainer;
