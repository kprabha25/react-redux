import { render } from "@testing-library/react";
import React, {Component } from "react";
import { connect } from 'react-redux'
import {COUNTER_INCREMENT, COUNTER_DECREMENT} from './reduxes/store'
// change the hello component to redux component by connect function

// let Hello = (props) => {
//     return <h1>
//     <button onClick={props.increment}>Hello-Increment</button>
//     <button onClick={props.decrement}>Hello-Decrement</button><br />
//     Hello, {props.name} - {props.count}
//     </h1>;
// }

class Hello extends Component  {
  add = (data)=>{
    const count = 'count : '+this.props.count
    this.props.update(count)
  }
  render(){
    return( <h1>
      <button onClick={this.props.increment}>Hello-Increment</button>
      <button onClick={this.props.decrement}>Hello-Decrement</button>
      <button onClick={this.add}>Hello-Push</button>
      <br />PUshed Data : {this.props.data.length} <br /> 
      <br />Hello, {this.props.name} - {this.props.count}
      </h1>);
  }
}

// here state is complete store's reducers
// here the props will have the count property
//whenever we call dispatch , this function will get called
//to get value from state, use this
const mapStateToProps = (state)=>{
  return {
    count: state.counter.count,
    data: state.tester
  }
}

//to push value to state, we call this
const mapDispatchToProps = (dispatch)=>{
  //we create object with function defintion
  return {
    increment: ()=>{
      dispatch({type: COUNTER_INCREMENT})
    },
    decrement: ()=>{
      dispatch({type: COUNTER_DECREMENT})
    },
    update: (data)=>{
      dispatch({type:'push', value: data})
    }
  }
}
// connect is a fuction we have to pass our function, it is a higher order function
// we have to pass to input, mapStateToProps, mapping the store's state into props
export default connect(mapStateToProps, mapDispatchToProps)(Hello) ;

/*
export default  ({name}) => <h1> Hello {name}</h1>

function Hello (props) {
   return <h1>Hello {props.name}</h1>
}

class Hello extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
*/