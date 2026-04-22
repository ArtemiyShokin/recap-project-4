import { useState } from "react";

export default function ColorInput({ id, name, placeholder, defaultValue }) {
  const [ColorInputValue, setColorInputValue] = useState(defaultValue);
  return (
    <div className="form__field">
      <input
        value={ColorInputValue}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={(event) => setColorInputValue(event.target.value)}
      />
      <input
        value={ColorInputValue}
        id={id}
        name={name}
        type="color"
        placeholder={placeholder}
        onChange={(event) => setColorInputValue(event.target.value)}
      />
    </div>
  );
}
