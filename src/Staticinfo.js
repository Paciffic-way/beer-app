import React, { Component } from "react";
import hop from '../src/img/hop.png'

class Staticinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }
//Just a graphic element, no functionality here
  render() {
    return (
      <div className="staticinfo">
        <h2 className="confirmation-text">Results of your search:</h2>
        <img className="hopimg" src={hop}  alt="hop-graphic" ></img>
      </div>
    );
  }
}

export default Staticinfo;
