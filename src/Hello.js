import { render } from "@testing-library/react";
import React, {Component } from "react";
import { connect } from 'react-redux'
import {COUNTER_INCREMENT, COUNTER_DECREMENT} from './reduxes/store'
import axios from 'axios'
// change the hello component to redux component by connect function

class Hello extends Component  {
  state = {data: []}
  getData = (data)=>{
    if(this.props.data.length == 0){
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result => {
          console.log('Data Fetched')
          this.props.setData(result.data)
        })
    }
  }
  render(){
    return( <>
      <h1>Hello from Hello Component</h1>
      {/* <button onClick={this.getData}>Get Data</button> */}
      <button onClick={this.props.setData}>Get Data</button>
      <button onClick={this.props.removeData}>Remove Data</button>
      {this.props.data.map((x,i) => <div key={i}> {x.title}</div>)}
      </>);
  }
}

// here state is complete store's reducers
// here the props will have the count property
//whenever we call dispatch , this function will get called
//to get value from state, use this
const mapStateToProps = (state)=>{
  return {
    data: state.storage.data || []
  }
}

//to push value to state, we call this
const mapDispatchToProps = (dispatch)=>{
  //we create object with function defintion
  return {
    setData: (data)=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result => {
          console.log('Data Fetched')
          //this.props.setData(result.data)
          dispatch({type: 'setData', data: result.data})
        })
      
    },
    removeData:()=>{
      dispatch({type: 'removeData'})
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