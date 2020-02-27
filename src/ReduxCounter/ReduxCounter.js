import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./ReduxCounter.redux";

const ReduxCounter = () => {
  const counterValue = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      Counter value: {counterValue}
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default ReduxCounter;
