import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello React</h1>
      <h1>Its me Aayush </h1>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;