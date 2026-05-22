import Header from "./Header";
import Button from "./Button";
import Card from "./Card";

function App() {
  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <Header />

      <Button
        text="Login"
        color="blue"
      />

      <Button
        text="Register"
        color="green"
      />

      <Card />
    </div>
  );
}

export default App;