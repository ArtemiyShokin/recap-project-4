import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import Form from "./Components/Form/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colorCard, setColorCard] = useState(initialColors);

  function createColorCards(colors) {
    return colors.map((color) => (
      <Color
        key={color.id}
        color={color}
        onRemoveColorCard={handleRemoveColorCard}
      />
    ));
  }

  function handleAddColorCard(newColorCard) {
    setColorCard([{ id: uid(), ...newColorCard }, ...colorCard]);
  }
  function handleRemoveColorCard(incomingId) {
    setColorCard(colorCard.filter((card) => card.id !== incomingId));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <Form onAddColorCard={handleAddColorCard} />
      {createColorCards(colorCard)}
      {colorCard.length === 0 ? (
        <h2>you could try adding new cards here...</h2>
      ) : null}
    </>
  );
}

export default App;
