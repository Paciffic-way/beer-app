import React, { Component } from "react";
import Input from "./Input";
import Beerfilter from "./Beerfilter";
import Staticinfo from "./Staticinfo";
import Retrievedbeers from "./Retrievedbeers";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      beers: []
    };
  }

  //Getting All beers to display them as available foods
  fetchAllBeers() {
    const url = "https://api.punkapi.com/v2/beers";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ beers: data, loaded: true });
      })

      .catch(function(error) {
        console.log(error);
      });
  }
  //Setting the state taken from props of Input.js
  handleFetchedBeers(item) {
    this.setState({ fetchedbeers: item });
  }

  componentDidMount() {
    this.fetchAllBeers();
  }

  render() {
    return (
      <div className="beers">
        <Input fetchedbeers={this.handleFetchedBeers.bind(this)} />

        {//Conditionals so the component "Beerfilter" returning all the beer food-pairings doesn't run before fetch
          this.state && this.state.loaded && (
          <Beerfilter
            isloaded={this.state.loaded}
            beerprops={this.state.beers}
          />
        )}

        <div className="flex-horizontal-wrapper">
          {//Conditionals blocking render, and showing prompt text on the first visit
          this.state.fetchedbeers ? <Staticinfo /> : ""}
          {this.state.fetchedbeers ? (
            <Retrievedbeers meals={this.state.fetchedbeers} />
          ) : (
            <h5>Please type the food in searchbar</h5>
          )}
        </div>
        <a href="https://github.com/Paciffic-way/beer-app"><div className="footer">See on github</div></a>
      </div>
    );
  }
}

export default App;
