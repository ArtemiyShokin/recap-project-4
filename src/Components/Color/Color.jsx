import { useState } from "react";
import "./Color.css";

export default function Color({ color, onRemoveColorCard }) {
  const [confirmationBoolean, setConfirmationBoolean] = useState(true);
  function toggleConfirmation() {
    setConfirmationBoolean(!confirmationBoolean);
  }
  return (
    <div
      className="color-card__container"
      style={{ backgroundColor: color.hex }}
    >
      <ul className="color-card__list">
        <li className="color-card__hex-code"> {color.hex}</li>
        <li className="color-card__role" style={{ color: color.contrastText }}>
          {color.role}
        </li>
        <li
          className="color-card__contrast"
          style={{ color: color.contrastText }}
        >
          contrast: {color.contrastText}{" "}
        </li>
        <li>
          {confirmationBoolean ? null : (
            <p className="color-card__confirmation">are you sure?</p>
          )}

          <button className="color-card__button" onClick={toggleConfirmation}>
            {confirmationBoolean ? "delete me" : "cancel"}
          </button>
          {confirmationBoolean ? null : (
            <button
              className="color-card__button"
              onClick={() => {
                console.log("clicked id:", color.id);
                onRemoveColorCard(color.id);
              }}
            >
              delete me irreversibly
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
