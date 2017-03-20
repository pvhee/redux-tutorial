import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { createStore } from 'redux';
import './index.css';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const testToggleTodo = () => {
	const todoBefore = {
		id: 0,
		text: 'Learn Redux',
		completed: false
	};
	const todoAfter = {
		id: 0,
		text: 'Learn Redux',
		completed: true
	};

  deepFreeze(todoBefore);

	expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
}

testToggleTodo();
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
