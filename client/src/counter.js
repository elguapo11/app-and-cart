import React from "react";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Count up
      </button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Count down
      </button>
      <p>{counter}</p>
    </div>
  );
}
