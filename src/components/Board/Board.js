import React, { Component } from "react";
import Card from "../Card/Card"
export class Board extends Component {
  render() {
      
      
      
    return (
      <div>
        <div><Card/><Card/><Card/><Card/></div>
        <div><Card/><Card/><Card/><Card/></div>
        <div><Card/><Card/><Card/><Card/></div>
      </div>
    );
  }
}

export default Board;
