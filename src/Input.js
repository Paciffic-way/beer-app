import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youTyped: []
    };
  }

  render() {
   
    return (
      <div className="inputform">
        <form className="form-horizontal">
          <input
            type="text"
            className="form-control"
            ref={c => (this.title = c)}
            name="title"
          />
        </form>

        <button type="button" onClick={this.onSubmit} className="btn">
          Search
        </button>
      </div>
    );
  }
}

export default Input;
