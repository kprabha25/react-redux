import React from 'react';
//import ReactDOM from 'react-dom';

import App from './App';

import { render } from 'react-dom'
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

 render(<App /> , document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';

// import Users from './Users';
// import { Provider } from 'react-redux';
// import { getStore } from './store';

// const store = getStore();

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '-',
//       users: []
//     };
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <div>
//           <Hello name={this.state.name} />
//           <p>
//             Start editing to see some magic happen :)
//         </p>
//           <Users users={this.state.users} />
//         </div>
//       </Provider>
//     );
//   }
// }

// render(<App />, document.getElementById('root'));
