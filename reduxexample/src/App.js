import React from 'react';
import './App.css';
import Counter from './Counter';


import { Provider } from 'react-redux';
import Store from './Store';


//setting the initial state, else reducer will throw erroe as undefined
// const initialState = {
//   count: 0
// };

// function reducer(state=initialState, action) {

//   console.log(action)
//   switch(action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1
//       };
//       case "DECREMENT":
//       return {
//         count: state.count - 1
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);

// store.dispatch({ type: "INCREMENT"});
// store.dispatch({ type: "DECREMENT"});

function App() {
  return (
    <div className="App">
      <h1>JK</h1>
      <Provider store={Store}>
      <Counter />
      </Provider>
      
    </div>  
  );
}

export default App;

