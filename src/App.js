/** @format */

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text],
      text: "",
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            value={this.state.text}
            onChange={event => this.setState({ text: event.target.value })}
          />
          <button type='submit'>Add</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
