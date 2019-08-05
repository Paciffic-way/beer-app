import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      meals: []
    };
  }

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    var searchUrl = `https://api.punkapi.com/v2/beers?food=${searchInput}`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ meals: jsonData });
      });
  };

  render() {
    return (
      <div className="inputform">
        <input
          name="text"
          type="text"
          placeholder="Type food here"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.handleSearch();
            }
          }}
        />

        <button onClick={this.handleSearch}>Search</button>

        

        {this.state.meals ? (
          <div className="flex-container">
            {this.state.meals.map((beer, index) => (
              <div className="beersugg" key={index}>
                <p>{beer.name}</p>
                <img
                  className="beerimg"
                  src={beer.image_url}
                  alt="meal-thumbnail"
                />
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

export default Input;
