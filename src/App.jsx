import { useState } from "react";

import Header from "./Header";
import Button from "./Button";
import Card from "./Card";
import Login from "./Login";
import Register from "./Register";

function App() {

  // =========================================
  // Navigation State
  // =========================================
  const [page, setPage] = useState("home");

  // =========================================
  // Login State
  // =========================================
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // =========================================
  // Dynamic UI State
  // =========================================
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >

      <Header />

      {/* =========================================
          HOME PAGE
      ========================================= */}
      {page === "home" && !isLoggedIn && (

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

      {/* =========================================
          LOGIN PAGE
      ========================================= */}
      {page === "login" && !isLoggedIn && (

        <Login
          goToRegister={() => setPage("register")}
          loginSuccess={() => {
            setIsLoggedIn(true);
            setPage("dashboard");
          }}
        />

      )}

      {/* =========================================
          REGISTER PAGE
      ========================================= */}
      {page === "register" && (

        <Register
          goToLogin={() => setPage("login")}
        />

      )}

      {/* =========================================
          DASHBOARD PAGE
      ========================================= */}
      {page === "dashboard" && isLoggedIn && (

        <div>

          <h1>Welcome Aayush 🎉</h1>

          <p>
            Dynamic UI using React State
          </p>

          {/* Toggle Button */}
          <Button
            text={
              showProfile
                ? "Hide Profile"
                : "Show Profile"
            }
            color="purple"
            onClick={() =>
              setShowProfile(!showProfile)
            }
          />

          {/* Dynamic Conditional Rendering */}
          {showProfile && (

            <div
              style={{
                marginTop: "20px",
                border: "1px solid gray",
                padding: "20px",
                borderRadius: "10px",
              }}
            >

              <img
                src="C:\Users\acer\OneDrive\Desktop\Docs\MyDocumnet"
                alt="Profile"
              />

              <h2>Aayush Giri</h2>

              <p>IT Engineering Student</p>

            </div>

          )}

          <br />

          {/* Logout Button */}
          <Button
            text="Logout"
            color="red"
            onClick={() => {
              setIsLoggedIn(false);
              setPage("home");
            }}
          />

        </div>

      )}

    </div>
  );
}

export default App;