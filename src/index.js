import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import TodoApp from './TodoApp';
import './index.css';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id == action.id) {
        return Object.assign({}, state, {
          completed: !state.completed
        });
      } else {
        return state;
      };
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ... state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: 'New todo item',
            id: nextTodoId++
          })
        }}>
        add a new todo
        </button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();


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



// store.subscribe(render);
// render();
