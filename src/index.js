import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { createStore } from 'redux';
import './index.css';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ... state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}


testAddTodo();
console.log('all tests passed!');



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

// // Declare a dumb React component as a function (available since React 0.14)
// const Counter = ({
// 	value,
// 	onIncrement,
// 	onDecrement
// }) => (
// 	<div>
// 		<h1>{value}</h1>
// 		<button onClick={onIncrement}>+</button>
// 		<button onClick={onDecrement}>-</button>
// 	</div>
// );

// const store = createStore(counter);

// const render = () => {
// 	ReactDOM.render(
// 	  <Counter
// 	  	value={store.getState()}
// 	  	onIncrement={() =>
// 	  		store.dispatch({
// 	  			type: 'INCREMENT'
// 	  		})
// 	  	}
// 	  	onDecrement={() =>
// 	  		store.dispatch({
// 	  			type: 'DECREMENT'
// 	  		})
// 	  	}
// 	  />,
// 	  document.getElementById('root')
// 	);
// };

// store.subscribe(render);
// render();
