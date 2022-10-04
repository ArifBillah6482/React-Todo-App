import { useState } from "react";

function Todo() {
  const [count, setCount] = useState(0);
  const Counter = () => {
    setCount(count + 1);
  };
  const Counter2 = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ margin: "20px" }}>
      <h3>{count}</h3>

      <button className="AnimatedBtnBlue" onClick={Counter}>
        +
      </button>
      <button
        className="AnimatedBtnPurple"
        disabled={count === 0 ? true : false}
        onClick={Counter2}
      >
        -
      </button>
    </div>
  );
}
export default Todo;
