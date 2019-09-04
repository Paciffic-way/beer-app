import React, { Component } from "react";
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      meals: [],
      scrollPosition: "big"
    };
    this.myRef = React.createRef();
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
          //When nothing returns, set the state as "nothing" string and lift it, this way "App.js" knows there was no search result, but still runs to show the error
          this.setState({ meals: "nothing" });
          this.liftUp("nothing");
        } else {
          this.setState({ meals: jsonData });
          this.liftUp(jsonData);
        }
      });
  };

  minimizeMenu = event => {
    let distanceY = window.pageYOffset;
    const shrinkOn = 1200;
    console.log(distanceY);

    if (distanceY >= shrinkOn) {
      this.setState({ scrollPosition: "small" });
    } else {
      this.setState({ scrollPosition: "big" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", debounce(this.minimizeMenu, 16));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", debounce(this.minimizeMenu, 16));
  }

  render() {
    return (
      <div>
        <div className={"inputform"+this.state.scrollPosition}>
          <div className={"logo" + this.state.scrollPosition} />
          <input
            name="text"
            type="text"
            placeholder="Type food here"
            onChange={event => this.handleOnChange(event)}
            value={this.state.searchValue}
            onKeyPress={event => {
              //If searchbar is empty, do nothing (for enter keypress)
              if (event.key === "Enter" && this.state.searchValue) {
                this.handleSearch();
              }
            }}
          />

          {//If searchbar is empty, do nothing (for clickdown on button)
          this.state.searchValue ? (
            <button className="button" onClick={this.handleSearch}>
              Search
            </button>
          ) : (
            <button className="button">Search</button>
          )}
        </div>

        <div className={"inputform"}>
          <div ref={this.myRef}></div>

          <div className={"logo"} />
          <input
            name="text"
            type="text"
            placeholder="Type food here"
            onChange={event => this.handleOnChange(event)}
            value={this.state.searchValue}
            onKeyPress={event => {
              //If searchbar is empty, do nothing (for enter keypress)
              if (event.key === "Enter" && this.state.searchValue) {
                this.handleSearch();
              }
            }}
          />

          {//If searchbar is empty, do nothing (for clickdown on button)
          this.state.searchValue ? (
            <button className="button" onClick={this.handleSearch}>
              Search
            </button>
          ) : (
            <button className="button">Search</button>
          )}
        </div>
      </div>
    );
  }
}

export default Input;
