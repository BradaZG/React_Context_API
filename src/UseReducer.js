import React, { useReducer, useState } from 'react';

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'initCount':
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

const UseReducer = () => {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div className='UseReducer'>
      <h1>Reducer Example</h1>

      <div>
        <label>Start Count:</label>
        <input
          type='number'
          onChange={(e) => setInput(parseInt(e.target.value))}
          value={input}
        />
        <br />
        <button onClick={() => dispatch({ type: 'initCount', payload: input })}>
          Initialize Counter
        </button>
      </div>

      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default UseReducer;
