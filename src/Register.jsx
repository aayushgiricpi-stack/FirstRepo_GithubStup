function Register(props) {

  const handleRegister = () => {

    alert("Registration Successful");

    props.goToLogin();
  };

  return (
    <div style={{ marginTop: "30px" }}>

      <h2>Register Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "10px",
        }}
      />

      <br />

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

      <input
        type="password"
        placeholder="Enter Password"
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <br /><br />

      <button
        onClick={handleRegister}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
        }}
      >
        Register
      </button>

    </div>
  );
}

export default Register;