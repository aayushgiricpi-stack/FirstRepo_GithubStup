function Login(props) {

  // ======================================
  // Login Function
  // ======================================
  const handleLogin = () => {

    alert("Login Successful");
  };

  return (
    <div style={{ marginTop: "30px" }}>

      <h2>Login Form</h2>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter Email"
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "10px",
        }}
      />

      <br />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Enter Password"
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <br /><br />

      {/* Login Button */}
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Login
      </button>

      <br /><br />

      {/* Go To Register */}
      <button onClick={props.goToRegister}>
        Go To Register
      </button>

    </div>
  );
}

export default Login;