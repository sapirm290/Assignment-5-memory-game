import React, { Component } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import "./components/AppBar/AppBar.css";
import Board from "./components/Board/Board";
import OpeningDialog from "./components/Modal/OpeningDialog";
import ClosingDialog from "./components/Modal/ClosingDialog";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chooseOrMatchCard: true };
    this.state.board = [];
    this.state.lastCard = { x: -1, y: -1, value: -1 };
  }
  play(x, y, theme) {
    var shuffledArray = this.createRandomDoubleArray(x * y);
    for (var index1 = 0; index1 < x; index1++) {
      this.state.board[index1] = [];
      for (let index2 = 0; index2 < y; index2++) {
        this.state.board[index1].push(shuffledArray.pop());
      }
    }
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
    return false;
  }
  chooseCard(card) {
    console.log(card.state.value);
    if (this.state.chooseOrMatchCard) {
      card.flipCard();
      this.state.chooseOrMatchCard = !this.state.chooseOrMatchCard;
      this.state.lastCard.x = card.state.x;
      this.state.lastCard.y = card.state.y;
      this.state.lastCard.value = card.state.value;
    } else {
      console.log(card.state.value);
      console.log(this.state.lastCard.value);
      card.flipCard();
      this.state.chooseOrMatchCard = !this.state.chooseOrMatchCard;
      if (
        (card.state.x !== this.state.lastCard.x ||
          card.state.y !== this.state.lastCard.y) &&
        card.state.value === this.state.lastCard.value
      ) {
        console.log("nice");
        if (this.didWin) {
          this.play();
        }
      } else {
        console.log("needs flipping");
        card.flipCard();
      }
    }
  }

  render() {
    this.play(4, 3, "regular");
    return (
      <div className="App">
        <AppBar className="AppBar" onClick={this.play} position="relative" />
        <Board chooseCard={this.chooseCard.bind(this)} />
        <OpeningDialog />
        {/* <ClosingDialog setopen="true"/> */}
      </div>
    );
  }
}

export default App;
