import React, { Component } from "react";

class Beerfilter extends Component {
  //Function mapping and displaying all the food pairings from all the beers, I decided to add this so the user knows what foods are available to search/type
  foodLoop() {
    var allBeers = this.props.beerprops;
    let newArray = [];
    var arrayLength = allBeers.length;

    for (let j = 0; j < arrayLength; j++) {
      //Pushes all the mapped paragraphs to newArray
      newArray.push(
        //Maps through every array and displays food pairings ^
        allBeers[j].food_pairing.map((item, key) => (
          <p className="legend">{(" ", item)}</p>
        ))
      );
    }
    return newArray;
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
