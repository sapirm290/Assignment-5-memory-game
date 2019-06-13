import React, { Component } from "react";
import Card from "../Card/Card"
export class Board extends Component {
  render() {
      
      
      
    return (
      <div>
        <div><Card x="0" y="0" value="0" chooseCard={this.props.chooseCard}/><Card x="0" y="1" value="1" chooseCard={this.props.chooseCard}/><Card x="0" y="2" chooseCard={this.props.chooseCard}/><Card x="0" y="3" chooseCard={this.props.chooseCard}/></div>
        <div><Card x="1" y="0" value="0" chooseCard={this.props.chooseCard}/><Card x="1" y="1" chooseCard={this.props.chooseCard}/><Card x="1" y="2" chooseCard={this.props.chooseCard}/><Card x="1" y="3" chooseCard={this.props.chooseCard}/></div>
        <div><Card x="2" y="0" chooseCard={this.props.chooseCard}/><Card x="2" y="1" chooseCard={this.props.chooseCard}/><Card x="2" y="2" chooseCard={this.props.chooseCard}/><Card x="2" y="3" chooseCard={this.props.chooseCard}/></div>
      </div>
    );
  }
}

export default Board;
