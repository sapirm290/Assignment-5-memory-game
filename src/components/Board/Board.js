import React, { Component } from "react";
import Card from "../Card/Card";
export class board extends Component {
  createCards() {
    const cardsArray = [];
    for (var index1 = 0; index1 < this.props.gameData.numOfCardRows; index1++) {
      cardsArray[index1] = [];
      for (
        var index2 = 0;
        index2 < this.props.gameData.numOfCardCols;
        index2++
      ) {
        var index = index1 * this.props.gameData.numOfCardCols + index2;
        cardsArray[index1].push(
          <Card
            index={index}
            pairValue={this.props.gameData.board[index].pairValue}
            face={this.props.gameData.board[index].face}
            chooseCard={this.props.gameData.chooseCard}
          />
        );
      }
    }

    return cardsArray;
  }
  render() {
    return <div>{this.createCards()}</div>;
  }
}

export default board;
