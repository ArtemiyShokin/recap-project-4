import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function createColorCreation(colors) {
  return colors.map((color) => <Color key={color.id} color={color} />);
}

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      {createColorCreation(initialColors)}
    </>
  );
}

export default App;
