import React, { Component } from "react";
import "./Card.css";
import backImage from "../../images/backcard.jpg";

export class Card extends Component {
  render() {
    const frontImage = require(`../../animal-images/ca${this.props.pairValue}.jpg`);
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
