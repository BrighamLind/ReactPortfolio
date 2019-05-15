import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      userInput: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      userInput: this.state.text,
      text: ""
    });
  };

  render() {
    return (
      <div>
        <h1>HTML Color</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h1 style={{ color: this.state.userInput }}>{this.state.userInput}</h1>
      </div>
    );
  }
}