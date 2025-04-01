import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../src/features/counter/counterSlice.js';

export default function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleAmountByIncrement = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <>
      <p>COUNTER APP</p>
      <button onClick={handleIncrement}> + </button>
      <p>COUNT:{count}</p>
      <button onClick={handleDecrement}> - </button>

      <button onClick={handleReset}>RESET</button>
      <input
        type="number"
        value={amount}
        palceholder="ENTER VALUE"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAmountByIncrement}>INCREMENT BY AMOUNT</button>
    </>
  );
}
