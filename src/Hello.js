import React, {Component } from "react";

// export default  ({name}) => <h1> Hello {name}</h1>

// const Hello = (props) => {
//     return <h1>Hello, {props.name}</h1>;
//   }

// function Hello (props) {
//    return <h1>Hello {props.name}</h1>
// }

class Hello extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Hello;