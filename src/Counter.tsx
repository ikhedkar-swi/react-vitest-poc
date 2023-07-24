import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p id="labelCounter">You clicked {count} times</p>
      <button id="btnClick" onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
}
