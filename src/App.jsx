// src/App.jsx

// Import useState hook from React
import { useState } from "react";

// =======================================
// Component Example
// =======================================
function Header() {
  return (
    <div>
<<<<<<< HEAD
      <h2>React Components</h2>
      <p>Components make the UI reusable and organized.</p>
=======
      <h1>Hello React</h1>
      <h1>Its me Aayush </h1>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
>>>>>>> de1a06889a601e738bbb64d56fd8df7613b774ce
    </div>
  );
}

// =======================================
// Props Example
// =======================================
function Student(props) {
  return (
    <div>
      <h2>Props Example</h2>
      <p>Student Name: {props.name}</p>
      <p>Faculty: {props.faculty}</p>
    </div>
  );
}

// =======================================
// Main App Component
// =======================================
function App() {

  // =======================================
  // useState Hook Example
  // =======================================
  const [count, setCount] = useState(0);

  // =======================================
  // Event Handling Function
  // =======================================
  const handleClick = () => {
    alert("Button Clicked Successfully!");
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
      }}
    >

      {/* =======================================
          React Basics and JSX
      ======================================= */}
      <h1>React Learning Project</h1>

      <p>
        This project demonstrates:
      </p>

      <ul>
        <li>React Basics and JSX</li>
        <li>Components</li>
        <li>Props</li>
        <li>useState Hook</li>
        <li>Event Handling</li>
      </ul>

      <hr />

      {/* =======================================
          Component Example
      ======================================= */}
      <Header />

      <hr />

      {/* =======================================
          Props Example
      ======================================= */}
      <Student
        name="Aayush Giri"
        faculty="IT Engineering"
      />

      <hr />

      {/* =======================================
          useState Hook Example
      ======================================= */}
      <h2>useState Hook Example</h2>

      <p>Current Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>

      <hr />

      {/* =======================================
          Simple React UI
      ======================================= */}
      <h2>Simple React UI</h2>

      <button>Login</button>

      <button
        style={{
          marginLeft: "10px",
        }}
      >
        Register
      </button>

      <hr />

      {/* =======================================
          Event Handling Example
      ======================================= */}
      <h2>Event Handling</h2>

      <button onClick={handleClick}>
        Click Me
      </button>

    </div>
  );
}

// Export App Component
export default App;