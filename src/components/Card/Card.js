import React, { Component } from "react";
import "./Card.css";

export class Card extends Component {
  render() {
    const frontImage = require(`../../${(this.props.theme=== "animals")?"animal":"lotr"}-images/ca${this.props.pairValue}.jpg`);
    const backImage = require(`../../${(this.props.theme=== "animals")?"animal":"lotr"}-images/cardback.png`);
    return (
        <div className="flip-card">
          <div
            onClick={() => {
              return this.props.chooseCard(this.props.index);
            }}
            className={
              this.props.face ? "flip-card-inner flipped" : "flip-card-inner"
            }
          >
            <div className="flip-card-front">
              <img src={backImage} alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <img src={frontImage} alt="Avatar" />
            </div>
          </div>
        </div>
    );
  }
}

export default Card;
