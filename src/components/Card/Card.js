import React, { Component } from "react";
import "./Card.css";
import image from "../../images/cardBack.png";
import image2 from "../../images/ca1.jpg";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:this.props.index,
    };
  }
 
  render() {
    return (
      <div className="flip-card">
        <div
          onClick={ () =>  {return this.props.chooseCard(this.state.index)}}
          className={
            (this.props.face) ? "flip-card-inner flipped" : "flip-card-inner"
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
