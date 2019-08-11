import React, { Component } from "react";

class Staticinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  render() {
    return (
      <div className="staticinfo">
        <h2>Something that you typed</h2>
      </div>
    );
  }
}

export default Staticinfo;
