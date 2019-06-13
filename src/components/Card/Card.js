import React, { Component } from "react";
import "./Card.css"
import image from "../../images/cardBack.png"

function flip(e){
  // e.target. += "flipped";
}
export class Card extends Component {
  
  render() {
    return (
        <div className="flip-card">
          <div className="flip-card-inner" onMouseDown={flip}>
            <div className="flip-card-front">
              <img
                src={image}
                alt="Avatar"
                // style={width:"300px",height:"300px"}
              />
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      
    );
  }
}

export default Card;
