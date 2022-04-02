import React, { Component } from "react";
import Hello from "./Hello";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React Prabha",
    };
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name}></Hello>
        <p>React Start</p>
      </div>
    );
  }
}
