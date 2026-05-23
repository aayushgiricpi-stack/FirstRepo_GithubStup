import { useState } from "react";

import Header from "./Header";
import Button from "./Button";
import Card from "./Card";
import Login from "./Login";
import Register from "./Register";

function App() {

  const [page, setPage] = useState("home");

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >

      <Header />

      {/* Home Page */}
      {page === "home" && (
        <div>

          <Button
            text="Login"
            color="blue"
            onClick={() => setPage("login")}
          />

          <Button
            text="Register"
            color="green"
            onClick={() => setPage("register")}
          />

          <Card />

        </div>
      )}

      {/* Login Page */}
      {page === "login" && (
        <Login
          goToRegister={() => setPage("register")}
        />
      )}

      {/* Register Page */}
      {page === "register" && (
        <Register
          goToLogin={() => setPage("login")}
        />
      )}

    </div>
  );
}

export default App;