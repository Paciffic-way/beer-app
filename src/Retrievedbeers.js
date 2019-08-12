import React, { Component } from "react";

class Retrievedbeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  render() {
    let dummy = this.props.meals;
    console.log("jakie to propsy ma", dummy);

    return (

      <div>
        {dummy ? (
          <div className="flex-container">
            {dummy.map((beer, index) => (
              <div className="beersugg" key={index}>
                
                <img
                  className="beerimg"
                  src={beer.image_url}
                  alt="meal-thumbnail"
                />
                <p>{beer.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a meal</p>
        )}
      </div> 
    );
  }
}

export default Retrievedbeers;
