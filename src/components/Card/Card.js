import React, { Component } from "react";
import "./Card.css";
import image from "../../images/cardBack.png";
import image2 from "../../images/ca1.jpg";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      x:this.props.x,
      y:this.props.y,
      value:this.props.value
    };
  }
  flipCard() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    return (
      <div className="flip-card">
        <div
          onClick={ () =>  {return this.props.chooseCard(this)}}
          className={
            this.state.active ? "flip-card-inner flipped" : "flip-card-inner"
          }
        >
          <div className="flip-card-front">
            <img src={image} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <img src={image2} alt="Avatar" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
