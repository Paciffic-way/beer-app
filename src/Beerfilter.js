import React, { Component } from "react";

class Beerfilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }


  foodLoop() {
    const allBeers = this.props.beerprops;
    var arrayLength = allBeers.length;

    for (let j = 0; j < arrayLength; j++) {
      allBeers[j].food_pairing.map((item, key) => {
        return  console.log(item);
      });
    }
  }

  render() {
    const dummy = this.props.beerprops;
      const beers = dummy.map((item, key) => {
      return (
        <div key={item.id}>
          {item.id} {item.name} {item.tagline}
        </div>
      );
    });
    return (
      <div className="filteredbeers">

   {beers}
      </div>
    );
  }
}

export default Beerfilter;
