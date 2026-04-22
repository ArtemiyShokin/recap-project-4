import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import Form from "./Components/Form/Form";
import { useState } from "react";
import { uid } from "uid";

function createColorCreation(colors) {
  return colors.map((color) => <Color key={color.id} color={color} />);
}

function App() {
  const [colorCard, setColorCard] = useState(initialColors);
  function handleAddColorCard(newColorCard) {
    setColorCard([{ id: uid(), ...newColorCard }, ...colorCard]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <Form onAddColorCard={handleAddColorCard} />
      {createColorCreation(colorCard)}
    </>
  );
}

export default App;
