import React, { Component } from "react";
import Input from "./Input";
import Beerfilter from "./Beerfilter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    }

  fetchAllBeers() {
    const url = "https://api.punkapi.com/v2/beers";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        const dummy = data;
        console.log("pobrane piwa to : ", dummy);
        this.setState({ beers: data });

  
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
        <Input />
      

        <Beerfilter beerprops={this.state.beers}/>
      </div>
    );
  }
}

export default App;
