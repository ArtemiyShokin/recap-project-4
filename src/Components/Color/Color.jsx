import { useState } from "react";
import "./Color.css";
import "../Form/Form";
import Form from "../Form/Form";

export default function Color({ color, onRemoveColorCard, onEditColorCard }) {
  const [confirmationBoolean, setConfirmationBoolean] = useState(true);
  const [editBoolean, setEditBoolean] = useState(false);

  function toggleConfirmation() {
    setConfirmationBoolean(!confirmationBoolean);
  }
  function toggleEdit() {
    setEditBoolean(!editBoolean);
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
        {/* edit form: */}
        {editBoolean ? (
          <Form
            buttonName="update and close"
            // onClick={toggleEdit}
            onSubmitColor={(data) => {
              onEditColorCard({ id: color.id, ...data });
              toggleEdit();
            }} /* musste hier chatgpt fragen wie ich der data die id gebe */
          />
        ) : null}

        {/* delete me buttons: */}
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
          {editBoolean ? null : (
            <button className="color-card__button" onClick={toggleEdit}>
              edit
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
