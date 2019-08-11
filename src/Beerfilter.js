import React, { Component } from "react";

class Beerfilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  foodLoop() {
    var allBeers = this.props.beerprops;
    let newArray = [];
    var arrayLength = allBeers.length;

    console.log("array length is ", arrayLength);

    for (let j = 0; j < arrayLength; j++) {
      newArray.push(
        allBeers[j].food_pairing.map((item, key) => (
          <p className="legend">{(" ", item)}</p>
        ))
      );
    }
    var newLoop = newArray.map((item, key) => {
      return item;
    });

    return newLoop;
  }

  render() {
    return (
      <div className="filteredbeers">
        <h2>Available foods to type :</h2>
        <div className="legend-container">{this.foodLoop()}</div>
      </div>
    );
  }
}

export default Beerfilter;
