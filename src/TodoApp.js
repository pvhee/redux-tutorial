import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import store from './store';

class TodoApp extends Component {

  render() {
    return (
      <div>
      ALLO
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: 'New todo item'
          })
        }}/>
      </div>
    );
  }
}

export default TodoApp;

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const store = createStore(counter);

// console.log(store.getState());
// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());

// const render = () => {
//   document.body.innerText = store.getState();
// };

// store.subscribe(render);
// render();

// document.addEventListener('click', () => {
//   store.dispatch({type: 'INCREMENT'});
// });


