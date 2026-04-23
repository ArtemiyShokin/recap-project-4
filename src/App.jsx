import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import Form from "./Components/Form/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colorCards, setColorCards] = useState(initialColors);

  function createColorCards(colors) {
    return colors.map((color) => (
      <Color
        key={color.id}
        color={color}
        onRemoveColorCard={handleRemoveColorCard}
        onEditColorCard={handleEditColorCard}
      />
    ));
  }

  function handleAddColorCard(newColorCard) {
    setColorCards([{ id: uid(), ...newColorCard }, ...colorCards]);
  }
  function handleRemoveColorCard(incomingId) {
    setColorCards(colorCards.filter((card) => card.id !== incomingId));
  }

  function handleEditColorCard(cardObject) {
    // console.log("editColorCard triggered");
    setColorCards(
      colorCards.map((card) =>
        card.id === cardObject.id
          ? {
              id: cardObject.id /* Olivia und Marco hatten hier einfach "...card"*/,
              role: cardObject.role,
              hex: cardObject.hex,
              contrastText: cardObject.contrastText,
            }
          : card,
      ),
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <Form onSubmitColor={handleAddColorCard} buttonName="Add Color" />

      {colorCards.length === 0 ? (
        <h2>you could try adding new cards here...</h2>
      ) : (
        createColorCards(colorCards)
      )}
    </>
  );
}

export default App;
