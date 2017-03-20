import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { createStore } from 'redux';
import './index.css';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
	return [... list, 0];
};

const removeCounter = (list, index) => {
	return [
		... list.slice(0, index),
		... list.slice(index+1)
	];
};

const incrementCounter = (list, index) => {
	return [
		... list.slice(0, index),
		list[index]+1,
		... list.slice(index+1)
	];
};

const testAddCounter = () => {
	const listBefore = [];
	const listAfter = [0];

	deepFreeze(listBefore);

	expect(
		addCounter(listBefore)
	).toEqual(listAfter);
}

const testRemoveCounter = () => {
	const listBefore = [0,1,2];
	const listAfter = [0,2];

	deepFreeze(listBefore);

	expect(
		removeCounter(listBefore, 1)
	).toEqual(listAfter);
}

const testIncrementCounter = () => {
	const listBefore = [0,1,2];
	const listAfter = [0,2,2];

	deepFreeze(listBefore);

	expect(
		incrementCounter(listBefore, 1)
	).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();
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