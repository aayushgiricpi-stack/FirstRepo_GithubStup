function Card() {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <img
        src="https://i.pinimg.com/736x/6e/d1/6a/6ed16a033c81ccaf082d6eac7634c16a.jpg"
        alt="Sample"
      />

      <h2>React Card</h2>

      <p>
        This is a simple card component.
      </p>
    </div>
  );
}

export default Card;