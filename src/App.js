import React, { Component } from "react";
import Hello from "./Hello";
import store, { COUNTER_INCREMENT, COUNTER_DECREMENT } from './reduxes/store'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React Redux",
    };
  }
  increment = ()=>{
    store.dispatch({type: COUNTER_INCREMENT});
    console.log(store.getState())
  }
  decrement = ()=>{
    store.dispatch({type: COUNTER_DECREMENT});
    console.log(store.getState())
  }
  push = ()=>{
    store.dispatch({type: 'push', value: Math.random()});
    console.log(store.getState())
  }
  pop = ()=>{
    store.dispatch({type: 'pop'});
    console.log(store.getState())
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name}></Hello>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.push}>Push</button>
        <button onClick={this.pop}>Pop</button>
      </div>
    );
  }
}
