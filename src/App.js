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

  handleFetchedBeers(item) {
    this.setState({ fetchedbeers: item });
    console.log("sprawdzmy czy są tu piwa", this.state.fetchedbeers);
  }

  componentDidMount() {
    this.fetchAllBeers();
  }

  render() {
    return (
      <div className="beers">
        <Input fetchedbeers={this.handleFetchedBeers.bind(this)} />

        {this.state && this.state.loaded && (
          <Beerfilter
            isloaded={this.state.loaded}
            beerprops={this.state.beers}
          />
        )}

        <div className="flex-horizontal-wrapper">
          <Staticinfo />
          { this.state.fetchedbeers ?  <Retrievedbeers meals={this.state.fetchedbeers} /> : ""        }
        </div>
      </div>
    );
  }
}

export default App;
