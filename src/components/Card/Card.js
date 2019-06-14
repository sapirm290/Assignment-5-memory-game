import React, { Component } from "react";
import "./Card.css";
import image from "../../images/backcard.jpg";
import Box from "@material-ui/core/Box";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
      pairValue: this.props.pairValue
    };
  }

  render() {
    const logo = require(`../../images/ca${this.state.pairValue}.jpg`);
    return (
      <Box component="span" m={1}>
        <div className="flip-card">
          <div
            onClick={() => {
              return this.props.chooseCard(this.state.index);
            }}
            className={
              this.props.face ? "flip-card-inner flipped" : "flip-card-inner"
            }
          >
            <div className="flip-card-front">
              <img src={image} alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <img src={logo} alt="Avatar" />
            </div>
          </div>
        </div>
      </Box>
    );
  }
}

export default Card;
