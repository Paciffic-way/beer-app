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
//Lifting the state up to App.js
  liftUp = item => {
    this.props.fetchedbeers(item);
    console.log("przekazane piwa to ", item);
  };

  //Getting beers from API that match the input

  makeApiCall = searchInput => {
    var searchUrl = `https://api.punkapi.com/v2/beers?food=${searchInput}`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        if (jsonData.length === 0) {
        this.setState({ meals: "nothing" });
        this.liftUp("nothing");

        }

        else {

          this.setState({ meals: jsonData });
        this.liftUp(jsonData);
        }
      });
  };

  render() {
    return (
      <div className="inputform">
        <div className="logo"></div>
        <input
          name="text"
          type="text"
          placeholder="Type food here"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
          onKeyPress={event => {
            if (event.key === "Enter" && this.state.searchValue) {
              this.handleSearch();
            }
          }}
        />

        {
         //If searchbar is empty, do nothing 
          this.state.searchValue ? (
          <button className="button" onClick={this.handleSearch}>
            Search
          </button>
        ) : (
          <button className="button">Search</button>
        )}
      </div>
    );
  }
}

export default Input;
