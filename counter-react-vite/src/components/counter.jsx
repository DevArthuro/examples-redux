import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  incrementByAmount,
  reset,
  selectCounter,
} from "../store/slices/counter";

const Counter = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(increase())}>+</button>
      <br />
      <button onClick={() => dispatch(reset())}>Reset hard</button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(value)));
        }}
      >
        Subir {value}
      </button>
    </div>
  );
};

export default Counter;
