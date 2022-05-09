import React, { Component } from "react";
import Hello from "./Hello";
import {Provider} from 'react-redux'
import { getStore } from './store';
import Users from './Users'

const store = getStore();

export default class App extends Component { constructor() {
  super();
  this.state = {
    name: 'Robert',
    users: []
  };
}

render() {
  return (
    <Provider store={store}>
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
      </p>
        <Users users={this.state.users} />
      </div>
    </Provider>
  );
}

}
