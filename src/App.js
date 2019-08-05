import React, { Component } from "react";
import Input from "./Input";
import Beerfilter from "./Beerfilter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      beers: [],
   
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

  componentDidMount() {
    this.fetchAllBeers();
  }

  render() {
    return (
      <div className="beers">
        
        {this.state && this.state.loaded && (
          <Beerfilter
            isloaded={this.state.loaded}
            beerprops={this.state.beers}
          />
        )}
        <Input />
      </div>
    );
  }
}

export default App;
